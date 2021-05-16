<template>
	<v-container
		fluid
		class="contact-container mb-10"
		:style="isSmallScreen ? 'width: 100%' : 'width: 50%'"
	>
		<v-form ref="form" v-model="valid" lazy-validation>
			<v-row class="contact-title text-center mb-3">
				<v-btn class="back-button ml-2 mt-3 pa-2" to="/" :small="isSmallScreen">
					<v-icon color="black"> mdi-arrow-left </v-icon>
				</v-btn>
				<h1 class="contact-header pa-4" :style="isSmallScreen ? 'font-size: 20px' : ''">
					Get In Touch
				</h1>
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

			<v-row class="form-buttons">
				<v-btn
					:disabled="!valid || submitted"
					color="success"
					class="mr-4 mt-2"
					:small="isSmallScreen"
					:loading="submitted"
					@click="submit"
				>
					Submit
				</v-btn>

				<v-btn color="error" class="mr-4 mt-2" :small="isSmallScreen" @click="reset">
					Reset
				</v-btn>
			</v-row>
		</v-form>
		<v-dialog v-model="mailSent" :max-width="isSmallScreen ? '250px' : '400px'">
			<v-card class="justify-center text-center">
				<v-card-title class="popup-title"> Thank you {{ savedName }}! </v-card-title>
				<v-img max-width="200px" :src="require('../assets/success.png')" />
				<v-card-text class="mt-2" style="text-align: center"
					>Your message has been sent successfully</v-card-text
				>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			valid: true,
			name: '',
			savedName: '',
			nameRules: [
				(v) => !!v || 'Name is required',
				(v) => (v && v.length <= 20) || 'Name must be less than 20 characters'
			],
			email: '',
			message: '',
			emailRules: [
				(v) => !!v || 'E-mail is required',
				(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
			],
			isSmallScreen: null,
			mailSent: false,
			submitted: false
		}
	},
	mounted() {
		this.isSmallScreen = window.innerWidth < 868
	},
	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				this.submitted = true
				this.savedName = this.name.split(' ')[0]
				const formData = {
					name: this.name,
					email: this.email,
					message: this.message
				}
				this.$axios
					.post('/api/sendMail', formData)
					.then(() => {
						this.mailSent = true
						this.submitted = false
						this.$refs.form.reset()
					})
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
.form-buttons {
	justify-content: center;
}
.v-image {
	margin: auto;
}
.popup-title {
	word-break: break-word;
	justify-content: center;
}
</style>
