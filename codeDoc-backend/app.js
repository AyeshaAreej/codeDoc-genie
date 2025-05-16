const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const historyRoutes = require('./routes/historyRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

require('dotenv').config(); // Load environment variables

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
  
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/api/', historyRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');

  // Start server only after successful DB connection
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
