<template>
  <component
    class="title"
    :is="tag"
  >{{text}}</component>
</template>

<script>
export default {
	props: {
		text: {
			required: true,
			type: String
		},
		tag: {
			required: false,
			type: String,
			default: 'h2'
		}
	}
}
</script>

<style lang="scss">
.title {
	@include largerThan(880px) {
		font-size: 45px;
	}
	font-size: 30px;
	text-shadow: -13px -12px 0px rgba(0, 0, 0, 0.2);
	font-weight: 600;
}
</style>
