<template>
  <div>
    <header-section :pageData="page" />
    <AboutMeSection :pageData="page" />
    <MySkillsSection :pageData="page" />
    <contactMeSection :pageData="page" />
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue'
import AboutMeSection from '~/components/AboutMeSection.vue'
import MySkillsSection from '~/components/MySkillsSection.vue'
import contactMeSection from '~/components/ContactMeSection.vue'
import { runQuary } from '~/plugins/squidex'
export default {
	components: {
		HeaderSection,
		AboutMeSection,
		MySkillsSection,
		contactMeSection
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
								},
								{
									mySkillsSection: [
										{
											iv: [
												'sectionTitle',
												'title',
												'description',
												'metaData',
												'toolsTitle',
												'tools'
											]
										}
									]
								},
								{
									contactMeContent: [
										{
											iv: [
												'title',
												{
													image: ['url']
												},
												'description',
												'formTitle',
												'buttonText',
												'postUrl'
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
