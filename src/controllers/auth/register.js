const { connect, disconnect } = require("../../config/dbConnection")
const { encryptPassword } = require("../../utils/encryptPassword")
const register = async (req, res) => {
	const pool = await connect();
	const { username, email, password } = req.body;

	const passEncrypted = await encryptPassword(password)
	try {
		const queryResponse = await pool.query('INSERT INTO schemamovies.users(username, email, password) VALUES($1, $2, $3) RETURNING "idUsers", "username", "email"', [username, email, passEncrypted]);
		const newUser = queryResponse.rows;

		res.json({
			data: newUser,
			success: true,
			message: "user registered successfully. ",
			error: null
		});

	} catch (error) {
		console.error(error)

		res.json({
			data: null,
			success: false,
			message: "something went wrong. ",
			error: error.detail

		});
	} finally {
		disconnect(pool);
	}
}

module.exports = register;
