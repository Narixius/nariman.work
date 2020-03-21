<template>
  <div class="cntner">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.cntner {
	max-width: $containerMaxWidth;
	margin: 0 auto;
	position: relative;
}
</style>
