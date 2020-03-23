<template>
  <container class="contactme">
    <Title
      :text="contactMeContent[0].title"
      component="h2"
    />
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6"></div>
    </div>
  </container>
</template>

<script>
import container from './Container'
import Title from '~/components/Title.vue'
import SocialMedia from '~/components/SocialMedia'
export default {
	components: {
		container,
		Title,
		SocialMedia
	},
	props: {
		pageData: {
			type: undefined,
			required: true
		}
	},
	computed: {
		contactMeContent() {
			return this.pageData.contactMeContent.iv
		}
	}
}
</script>

<style lang="scss">
.contactme {
	@include largerThan(880px) {
		padding-right: 70px;
		padding-left: 40px;
	}
	.title {
		@include smallerThan(880px) {
			text-align: center;
		}
	}
	padding-right: 60px;
	@include smallerThan(880px) {
		padding-left: 75px;
	}
}
</style>
