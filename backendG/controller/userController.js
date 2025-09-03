const User = require("../model/user");   // MongoDB model
const mailSender = require("../util/mailSender"); // Email utility

// 📩 Handle contact form submission
exports.mailR = async (req, res) => {
    try {
        const { name, email, message , subject} = req.body;

        // Validate request body
        if (!name || !email || !message || !subject) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields",
            });
        }

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "Please try with another email. You already sent a request to connect.",
            });
        }

        // Save to database
        const userDetailConnect = await User.create({ name, email, message , subject});

        // Send confirmation email
mailSender(
    email,
    "📩 Thank You for Reaching Out",
    `
        <p>👋 Dear ${name},</p>

        <p>Thank you for contacting me through my portfolio website. I truly appreciate your interest in connecting.</p>

        <p>I have received your message and will carefully review it. You can expect a response from me soon.  
        Meanwhile, I invite you to explore my work and projects showcased in my portfolio.</p>
        <br>

        <p>Best regards,</p>
        <p><strong>Rahul Kumar</strong></p>
        <p>💻 Full Stack Developer (MERN) | ⚛️ Frontend & Backend Engineer | 🧩 Problem Solver</p>
        <p>📧 <a href="mailto:rahul4004kumar@gmail.com">rahul4004kumar@gmail.com</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/rahul-kumar-163180250/">LinkedIn</a> | <a href="https://github.com/rahulkumar40">GitHub</a> | <a href="https://leetcode.com/u/rahul4004kumar/">LeetCode</a></p>
    `
);


        return res.status(200).json({
            success: true,
            message: "Your message has been sent!",
            data: userDetailConnect,
        });
    } catch (err) {
        console.error("Error in mailR:", err);
        return res.status(500).json({
            success: false,
            message: "Please try again later.",
            error: err.message,
        });
    }
};

// 📋 Get all user messages
exports.getAllUserMessage = async (req, res) => {
    try {
        const connectionMessages = await User.find();

        if (!connectionMessages || connectionMessages.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No request to connect found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Request data fetched successfully.",
            data: connectionMessages,
        });
    } catch (err) {
        console.error("Error in getAllUserMessage:", err);
        return res.status(500).json({
            success: false,
            message: "Error while fetching connection data.",
            error: err.message,
        });
    }
};

// ❌ Delete a single user message
exports.deleteSingleUMessage = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "ID is required to delete.",
            });
        }

        const userMessage = await User.findById(id);

        if (!userMessage) {
            return res.status(404).json({
                success: false,
                message: "Contact request not found in the database.",
            });
        }

        await User.deleteOne({ _id: id });

        return res.status(200).json({
            success: true,
            message: "Request deleted successfully.",
        });
    } catch (err) {
        console.error("Error in deleteSingleUMessage:", err);
        return res.status(500).json({
            success: false,
            message: "Deletion failed! Something went wrong.",
            error: err.message,
        });
    }
};
