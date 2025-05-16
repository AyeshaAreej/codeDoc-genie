const User = require('../models/User');
const jwt = require('jsonwebtoken');

// JWT token helper
const createToken = (user) => {
  return jwt.sign({userID: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// SIGNUP
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
    // console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Signup failed. Possibly duplicate email.' });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = createToken(user);

    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 60 * 60 * 1000
    });

    res.status(200).json({ message: 'Login successful',  userId: user._id, username: user.name });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// LOGOUT
exports.logout = (req, res) => {
    res.clearCookie('token', {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',

    });
  res.status(200).json({ message: 'Logged out successfully' });
};
