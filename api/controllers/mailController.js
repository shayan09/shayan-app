const nodemailer = require('nodemailer')
const { username, password } = require('../../config/mailer.config')

module.exports.sendMail = async function (req, res) {
	const { name, email, message } = req.body

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

	await transporter
		.sendMail({
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
		})
		.then(() => {
			transporter.sendMail({
				from: 'samsimmons9308@gmail.com',
				to: email,
				subject: 'Hello Friend - Shayan',
				html: `
			<p>
			Thank you for getting in touch. Will get back shortly!
			</p>
			<br>
			<p style="color:#143D67;"><b><i>shayansadar.com © 2021</i></b></p>`
			})
		})

	res.sendStatus(200)
}
