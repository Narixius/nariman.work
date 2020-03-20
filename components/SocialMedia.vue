<template>
  <div class="socialMedia">
    <ul>
      <li v-for="item in Object.entries(socialMedia)">
        <a :href="item[1]">
          <img
            :src="'/img/'+item[0]+'.svg'"
            alt
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	props: {
		socialMedia: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss">
.socialMedia {
	ul {
		list-style: none;
		li {
			display: inline-block;
			margin-left: 20px;
			&:first-child {
				margin-left: 0;
			}
			img {
				width: 20px;
			}
		}
	}
}
</style>
