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
		padding: 20px;
		font-size: 15px;
		display: inline-block;
		margin-left: 25px;
		&:first-child {
			margin-left: 0;
		}
		cursor: pointer;
		font-family: 'Montserrat-Medium';
	}
}
</style>
