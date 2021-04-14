const nodemailer = require('nodemailer')
const { username, password } = require('../../config/mailer.config')


module.exports.sendMail = async function (req, res) {
	const {name, email, message } = req.body

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		requireTLS: true,
		auth: {
			user: username,
			pass: password
		}
	})

	let mailOptions = {
		from: 'samsimmons9308@gmail.com', 
		to: 'shayansadar37@gmail.com', 
		subject: 'New Connection',
		html: `<h3>Information:</h3>
		<p>
		<b>Name</b>: ${name} <br>
		<b>Email</b>: ${email} <br>
		<b>Message</b>: ${message} <br>
		</p>
		<br>
		<p style="color:#143D67;"><b><i>shayansadar.com © 2021</i></b></p>`
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error.message)
		}
		console.log('success')
	})
	res.sendStatus(200)
}