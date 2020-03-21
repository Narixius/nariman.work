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
      <div class="col-6 slider">
        <Slider :images="headerContent.sliderImages" />
      </div>
      <div class="col-6 informations">
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
	.row {
		@include smallerThan($tablet) {
			margin-top: -85px;
			float: left;
			max-width: unset;
			z-index: 10;
		}
	}

	.bg {
		background-color: $yellow;
		position: absolute;
		@include forLargeScreens($largestDesktop) {
			width: 330px;
			height: 800px;
		}
		@include largerSmaller(955px, $largestDesktop) {
			width: 280px;
			height: 681px;
		}
		@include largerSmaller(880px, 955px) {
			width: 280px;
			height: 667px;
		}
		@include largerSmaller(650px, 880px) {
			width: 190px;
			height: 580px;
		}
		width: 150px;
		height: 620px;
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
			ul {
				@include forLargeScreens(650px) {
					display: block;
				}
				display: grid;
				li {
					margin-left: 0;
				}
			}
			@include forLargeScreens(650px) {
				right: unset;
			}
			right: 10px;
			position: absolute;
			bottom: 10px;
		}
	}
	.navbar {
		margin-left: 300px;
		@include forLargeScreens($largestDesktop) {
			margin-left: 350px;
		}
		@include smallerThan(880px) {
			margin-left: 210px;
		}
		@include smallerThan(650px) {
			margin-left: 180px;
		}
		padding-top: 10px;
	}
	.content {
		@include forLargeScreens(650px) {
			max-width: 80%;
		}
		@include largerSmaller(650px, 880px) {
			max-width: 100%;
			width: 100%;
		}
		max-width: 85%;
		margin: 120px auto 0 auto;
		.informations {
			@include smallerThan(650px) {
				position: absolute;
				margin-top: -87px;
				max-width: 83%;
				margin-left: 45px;
			}
			h1 {
				@include smallerThan(650px) {
					margin-left: 0;
					font-size: 35px;
				}
				@include smallerThan(500px) {
					font-size: 30px;
					width: 112%;
				}
				@include smallerThan(400px) {
					font-size: 25px;
					margin-top: 10px;
				}

				font-family: 'Montserrat-SemiBold';
				font-size: 40px;
			}
			.tags {
				margin-top: 10px;
				@include smallerThan(650px) {
					float: left;
					margin-left: 300px;
					max-width: 200px;
					margin-top: 30px;
				}
				@include smallerThan(650px) {
					margin-left: 250px;
				}
				@include smallerThan(425px) {
					display: none;
				}
				li {
					cursor: default;
					display: inline-block;
					font-size: 15px;
					padding: 3px;
					border: 1px solid black;
					margin-right: 12px;
					margin-top: 10px;
					position: relative;
					&:first-child {
						@include forLargeScreens(650px) {
							margin-left: 0;
						}
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
				@include smallerThan(650px) {
					margin-top: 343px;
					margin-left: 139px;
				}
				@include smallerThan(650px) {
					margin-top: 275px;
					margin-left: 110px;
				}
				line-height: 31px;
				margin-top: 50px;
				max-width: 430px;
			}
			.btn {
				margin-top: 30px;
				@include smallerThan(650px) {
					margin-left: 144px;
				}
				@include smallerThan(650px) {
					margin-left: 110px;
				}
			}
		}
		.slider {
			@include largerSmaller(650px, 880px) {
				padding-left: 30px;
			}
			margin-top: -15px;
		}
	}
}
</style>
