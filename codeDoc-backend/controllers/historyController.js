const History = require('../models/History');

exports.saveHistory = async (req, res) => {

  try {
    const { userId,  code, docStyle, documentation,title, } = req.body;
    
    console.log(typeof userId);
    console.log(typeof title);
    console.log(typeof code);
    console.log(typeof docStyle);
    console.log(typeof documentation);
    const history = await History.create({
      userId,
      title,
      inputCode: code,               // ✅ correct key
      docStyle,
      generatedDoc: documentation 
    });

    res.status(201).json(history);
  } catch (err) {
    console.error('Error saving history:', err); 
    res.status(500).json({ error: err });
  }
};


exports.getHistory = async (req, res) => {
  try {
    const userId = req.user.userId;
    const history = await History.find({ userId }).sort({ createdAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};