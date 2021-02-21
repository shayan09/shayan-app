<template>
	<div>
		<h2 class="about-header ml-2">PUBLICATIONS</h2>
		<li v-for="publication in publications" :key="publication" class="publication-list">
			{{ publication }}
		</li>
	</div>
</template>

<script>
export default {
	data() {
		return {
			publications: ['LipVision - A Deep Learning Approach']
		}
	}
}
</script>

<style lang="scss" scoped>
.publication-list {
	list-style: none;
	margin-left: 5%;
}
.years {
	color: gray;
}
</style>
