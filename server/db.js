const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://admin123:admin123@cluster0.d3a3dlj.mongodb.net/myLoginRegisterDB?retryWrites=true&w=majority",
		{useNewUrlParser: true, },()=>console.log("Connected to DB"));
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
