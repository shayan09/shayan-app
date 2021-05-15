<template>
	<v-container fluid class="contact-container mb-10">
		<v-form ref="form" v-model="valid" lazy-validation>
			<v-row class="contact-title text-center mb-3">
				<v-btn class="back-button ml-2 pa-2" to="/">
					<v-icon color="black"> mdi-arrow-left </v-icon>
				</v-btn>
				<h1 class="contact-header pa-4">Get In Touch</h1>
			</v-row>
			<v-text-field
				v-model="name"
				:counter="20"
				:rules="nameRules"
				label="Name"
				required
			></v-text-field>

			<v-text-field
				v-model="email"
				:rules="emailRules"
				label="E-mail"
				required
			></v-text-field>

			<v-textarea v-model="message" color="teal">
				<template #label>
					<div>Message <small>(optional)</small></div>
				</template>
			</v-textarea>

			<v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
				Submit
			</v-btn>

			<v-btn color="error" class="mr-4" @click="reset"> Reset </v-btn>
		</v-form>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		valid: true,
		name: '',
		nameRules: [
			(v) => !!v || 'Name is required',
			(v) => (v && v.length <= 20) || 'Name must be less than 20 characters'
		],
		email: '',
		message: '',
		emailRules: [
			(v) => !!v || 'E-mail is required',
			(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
		]
	}),

	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				const formData = {
					name: this.name,
					email: this.email,
					message: this.message
				}
				this.$axios
					.post('/api/sendMail', formData)
					.then((response) => console.log(response))
					.catch((error) => console.error(error))
			}
		},
		reset() {
			this.$refs.form.reset()
		}
	}
}
</script>

<style lang="scss" scoped>
.contact-container {
	background-color: white;
	height: 100%;
	width: 50%;
}
.v-form {
	padding: 10px;
}
.contact-title {
	font-family: 'Farro', sans-serif;
	font-weight: 500;
	letter-spacing: 0.0125em;
	line-height: 2rem;
	font-size: 24px;
	border: 1px;
	background-color: #596678;
	color: white;
}
.contact-header {
	margin: auto;
}
.back-button {
	margin-block: auto;
}
</style>
