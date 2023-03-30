const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { body, param, validationResult } = require('express-validator');
const cors = require('cors');



const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

mongoose.connect('mongodb+srv://sashank:sashank@cluster0.kiquxzo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

app.use(express.json());

app.post('/user/create', [
  body('fullName').isString().isLength({ min: 1 }),
  body('email').isEmail(),
  body('password').matches(strongPasswordRegex),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { fullName, email, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      fullName,
      email,
      passwordHash,
    });

    await user.save();
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(422).json({ message: 'Email already in use' });
    }
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

  
  app.get('/user/getAll', async (req, res) => {
    try {
      const users = await User.find().select('fullName email passwordHash');
      return res.json({ users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Find the user with the given email in your database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Compare the password hash in the database with the entered password
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  
    // If the password is correct, send a success response
    res.json({ message: 'Login successful' });
});

  

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

