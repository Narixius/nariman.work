<template>
  <div class="multiply"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.multiply {
	position: absolute;
	&::before {
		content: ' ';
		display: block;
		height: 24px;
		width: 6px;
		background-color: #ffce21;
		transform: rotate(45deg);
		margin-top: -10px;
	}
	&::after {
		content: ' ';
		display: block;
		height: 24px;
		width: 6px;
		background-color: #ffce21;
		transform: rotate(-45deg);
		margin-top: -24px;
	}
}
</style>
