<template>
	<div>
		<h2 class="about-header pa-3 mt-3">PUBLICATIONS</h2>
		<li
			v-for="publication in publications"
			:key="publication"
			class="publication-list ml-3"
		>
			{{ publication }}
			<v-btn
				icon
				href="https://www.ijcaonline.org/archives/volume179/number8/khetarpal-2017-ijca-916029.pdf"
				target="_blank"
				><v-icon>mdi-book-open-blank-variant</v-icon></v-btn
			>
		</li>
	</div>
</template>

<script>
export default {
	data() {
		return {
			publications: [
				'LipVision: A Deep Learning Approach - International Journal of Computer Applications'
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.publication-list {
	list-style: none;
}
.years {
	color: gray;
}
</style>
