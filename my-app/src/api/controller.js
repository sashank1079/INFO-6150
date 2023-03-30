const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const UserService = require('my-app\src\server.js');

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

async function createUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { fullName, email, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    await UserService.createUser({ fullName, email, passwordHash });

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(422).json({ message: 'Email already in use' });
    }
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await UserService.getAllUsers();
    return res.json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserService.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  login,
};
