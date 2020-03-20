<template>
  <container class="header">
    <div class="bg">
      <div class="logo">
        <span>NARI</span>
        <SocialMedia :socialMedia="pageData.socialMedia.iv[0]" />
      </div>
    </div>
    <Navbar class="navbar" />
    <div class="content row">
      <div class="col-md-6 slider">
        <Slider :images="headerContent.sliderImages" />
      </div>
      <div class="col-md-6 informations">
        <h1>{{headerContent.headerText}}</h1>
        <ul class="tags">
          <li v-for="tag in headerContent.tags">{{tag}}</li>
        </ul>
        <p>{{headerContent.description}}</p>
        <button class="btn arrow">{{headerContent.buttonText}}</button>
      </div>
    </div>
  </container>
</template>

<script>
import container from './Container'
import Navbar from '~/components/Navbar'
import Slider from '~/components/Slider'
import SocialMedia from '~/components/SocialMedia'
export default {
	props: {
		pageData: {
			type: undefined,
			required: true
		}
	},
	computed: {
		headerContent() {
			return this.pageData.headerContent.iv[0]
		}
	},
	components: {
		container,
		Navbar,
		Slider,
		SocialMedia
	}
}
</script>

<style lang="scss">
.header {
	.bg {
		background-color: $yellow;
		position: absolute;
		width: 330px;
		height: 800px;
		top: 0;
		left: 0;
		text-align: center;
		.logo {
			padding: 20px;
			span {
				padding: 3px;
				font-family: 'Montserrat-Bold';
				color: white;
				border: 3px solid white;
				padding: 3px 6px;
				font-size: 20px;
				display: inline-block;
			}
		}
		.socialMedia {
			position: absolute;
			bottom: 10px;
		}
	}
	.navbar {
		margin-left: 350px;
		padding-top: 10px;
	}
	.content {
		max-width: 80%;
		margin: 120px auto 0 auto;
		.informations {
			h1 {
				font-family: 'Montserrat-SemiBold';
				font-size: 40px;
			}
			.tags {
				margin-top: 20px;
				li {
					cursor: default;
					display: inline-block;
					font-size: 15px;
					padding: 3px;
					border: 1px solid black;
					margin-left: 12px;
					position: relative;
					&:first-child {
						margin-left: 0;
					}
					&::after {
						transition: all 0.3s ease;
						content: ' ';
						position: absolute;
						display: block;
						bottom: 0;
						background-color: black;
						width: 100%;
						height: 0;
						margin-top: -22px;
						padding-left: 3px;
						margin-left: -4px;
						z-index: -1;
					}
					&:hover {
						color: white !important;
						&::after {
							height: 100%;
						}
					}
				}
			}
			p {
				line-height: 31px;
				margin-top: 50px;
				max-width: 430px;
			}
			.btn {
				margin-top: 30px;
			}
		}
		.slider {
			margin-top: -15px;
		}
	}
}
</style>
