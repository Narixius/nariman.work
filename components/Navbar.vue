<template>
  <ul class="navbar">
    <li>About Me</li>
    <li>My Skills</li>
    <li>Contact Me</li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navbar {
	li {
		display: inline-block;
		@include forLargeScreens(700px) {
			display: inline-block;
			margin-left: 35px;
			padding: 10px;
			font-size: 15px;
		}
		@include largerSmaller(650px, 700px) {
			padding: 10px;
			font-size: 15px;
		}
		@include smallerThan(650px) {
			margin-top: 20px;
			margin-left: 17px;
		}
		margin: 10px;
		padding: 0;
		font-size: 14px;
		&:first-child {
			margin-left: 0;
		}
		cursor: pointer;
		font-family: 'Montserrat-Medium';
	}
}
</style>
