const MessageSchema = require("../models/chatSchema");

const object = {
  allMessages: async (req, res) => {
    try {
      const data = await MessageSchema.aggregate([
        {
          $lookup: {
            from: "users", // The name of the users collection
            localField: "sender", // Field in the Message collection
            foreignField: "_id", // Field in the User collection
            as: "userDetails", // Field to store matched user details
          },
        },
        {
          $match: {
            userDetails: { $ne: [] }, // Filter messages with corresponding user details
          },
        },
      ]);

      res.json(data); // Send the aggregation result as a response
    } catch (err) {
      console.error('Error during aggregation:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getMessage:async(req,res)=>{
    console.log('hlo');
    try {
      console.log(req.params,'jj');
      const id = req.params
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });

    }
  }
};

module.exports = object;
