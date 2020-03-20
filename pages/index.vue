<template>
  <header-section :pageData="page" />
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue'
import { runQuary } from '~/plugins/squidex'
export default {
	components: {
		HeaderSection
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
