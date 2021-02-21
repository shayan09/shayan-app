<template>
	<v-container fluid class="pa-2 mb-3" style="height: 100%; background-color: brown">
		<v-row>
			<v-spacer />
			<span style="font-family: 'Bungee Inline', cursive; font-size: 9em">
				SOFTWARE TECHNOLOGY
			</span>
			<v-spacer
		/></v-row>
		<v-row>
			<v-spacer />
			<vue-typed-js
				:strings="[
					'I PROVIDE RICH INTERACTIVE EXPERIENCES FOR THE WEB WITH A SPECIALIZATION IN EVERYTHING.',
					'I PROVIDE RICH INTERACTIVE EXPERIENCES FOR THE WEB WITH A SPECIALIZATION IN BACKEND ENGINEERING AND MACHINE LEARNING.'
				]"
				type-speed="9"
				smart-backspace="true"
				back-speed="8"
				back-delay="300"
			>
				<v-subheader
					class="ma-3 typing"
					style="
						font-family: 'Inconsolata', monospace;
						font-size: 2em;
						text-align-last: center;
					"
				></v-subheader>
			</vue-typed-js>
			<v-spacer />
		</v-row>
		<v-row>
			<v-img
				class="mt-5"
				aspect-ratio="1"
				contain
				max-height="200"
				src="images/intro-one.png"
			/>
		</v-row>
	</v-container>
</template>

<script>
export default {}
</script>
