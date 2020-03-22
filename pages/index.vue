<template>
  <div>
    <header-section :pageData="page" />
    <AboutMeSection :pageData="page" />
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue'
import AboutMeSection from '~/components/AboutMeSection.vue'
import { runQuary } from '~/plugins/squidex'
export default {
	components: {
		HeaderSection,
		AboutMeSection
	},
	async asyncData(context) {
		return {
			page: (
				await runQuary({
					operation: 'findMainPageContent',
					variables: {
						id: {
							value: 'fef43340-f354-43e0-b693-3ebace58d6bb',
							required: true,
							type: 'Guid'
						}
					},
					fields: [
						{
							data: [
								{
									headerContent: [
										{
											iv: [
												'headerText',
												'buttonText',
												'tags',
												'description',
												{
													sliderImages: ['metadata', 'url']
												}
											]
										}
									]
								},
								{
									socialMedia: [
										{
											iv: [
												'dribbble',
												'github',
												'instagram',
												'linkedIn',
												'twitter'
											]
										}
									]
								},
								{
									aboutMeContent: [
										{
											iv: [
												'title',
												'textContent',
												'metaData',
												'buttonText',
												'buttonLink',
												{
													image: ['metadata', 'url']
												}
											]
										}
									]
								}
							]
						}
					]
				})
			).data.findMainPageContent.data
		}
	}
}
</script>
