<template>
	<v-layout class="layout" align-center justify-center>
		<v-col cols="6">
			<h1 class="contact-title text-center pa-4">GET IN TOUCH</h1>
			<v-form ref="form" v-model="valid" lazy-validation>
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

				<v-textarea v-model="bio" color="teal">
					<template #label>
						<div>Message <small>(optional)</small></div>
					</template>
				</v-textarea>

				<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
					Submit
				</v-btn>

				<v-btn color="error" class="mr-4" @click="reset"> Reset </v-btn>
			</v-form>
		</v-col>
	</v-layout>
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
		bio: '',
		emailRules: [
			(v) => !!v || 'E-mail is required',
			(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
		]
	}),

	methods: {
		validate() {
			this.$refs.form.validate()
		},
		reset() {
			this.$refs.form.reset()
		}
	}
}
</script>

<style lang="scss" scoped>
.layout {
	padding-top: 8%;
}
.v-form {
	border: 1px solid black;
	padding: 10px;
}
.contact-title {
	color: purple;
	font-size: 48px;
	font-style: italic;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
