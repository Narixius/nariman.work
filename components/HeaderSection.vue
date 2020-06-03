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
        <img
          class="groupDot"
          src="/img/groupDot.svg"
          alt
        />
      </div>
      <div class="col-6 informations">
        <h1>{{headerContent.headerText}}</h1>
        <ul class="tags">
          <li v-for="tag in headerContent.tags">{{tag}}</li>
        </ul>
        <p>{{headerContent.description}}</p>
        <button
          class="btn arrow"
          @click="$scrollTo('.aboutme', { offset: -80 })"
        >{{headerContent.buttonText}}</button>
      </div>
    </div>

    <div class="dotUtils">
      <Multiply :style="{
		 top: '110px',
		 left: '400px',
		 zIndex: '-1'
	 }" />
      <Multiply :style="{
		 top: '80px',
		 left: '1220px',
		 zIndex: '-1'
	 }" />
      <Multiply :style="{
		 top: '650px',
		 left: '928px',
		 zIndex: '-1'
	 }" />
      <Multiply :style="{
		 top: '850px',
		 left: '176px',
		 zIndex: '-1'
	 }" />

      <div
        class="dot a"
        :style="{
		 top: '89px',
		 left: '858px',
		 zIndex: '-1'
	 }"
      ></div>
      <div
        class="dot"
        :style="{
		 top: '900px',
		 left: '166px',
		 zIndex: '-1'
	 }"
      ></div>
      <div
        class="dot"
        :style="{
		 top: '990px',
		 left: '756px',
		 zIndex: '-1'
	 }"
      ></div>
      <div
        class="dot"
        :style="{
		 top: '650px',
		 left: '606px',
		 zIndex: '-1'
	 }"
      ></div>
      <div
        class="dot"
        :style="{
		 top: '850px',
		 left: '1196px',
		 zIndex: '-1'
	 }"
      ></div>
      <div
        class="dot"
        :style="{
		 top: '339px',
		 left: '1176px',
		 zIndex: '-1'
	 }"
      ></div>
      <div
        class="dot"
        :style="{
		 top: '580px',
		 left: '1303px',
		 zIndex: '-1'
	 }"
      ></div>
    </div>
  </container>
</template>

<script>
import container from './Container'
import Navbar from '~/components/Navbar'
import Slider from '~/components/Slider'
import SocialMedia from '~/components/SocialMedia'
import Multiply from '~/components/Multiply.vue'
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
		SocialMedia,
		Multiply
	}
}
</script>

<style lang="scss">
.header {
	@include forLargeScreens($largestDesktop) {
		min-height: 800px;
	}
	@include largerSmaller(955px, $largestDesktop) {
		min-height: 681px;
	}
	@include largerSmaller(880px, 955px) {
		min-height: 667px;
	}
	@include largerSmaller(650px, 880px) {
		min-height: 580px;
	}
	@include smallerThan(650px) {
		height: 620px;
	}
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
			height: 771px;
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
			height: 680px;
		}
		width: 150px;
		height: 650px;
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
			@include smallerThan(650px) {
				right: -1px;
			}
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
		@include smallerThan(650px) {
			margin-top: 100px;
		}
		max-width: 85%;
		margin: 90px auto 0 auto;
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
					margin-bottom: 20px;
					margin-top: 20px;
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
					margin-top: 290px;
					margin-left: 110px;
				}
				@include smallerThan(400px) {
					margin-top: 310px;
					margin-left: 125px;
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
				// @include smallerThan(456px) {
				// 	margin: 45px auto;
				// }
				@include smallerThan(450px) {
					display: none;
				}
			}
		}
		.slider {
			@include largerSmaller(650px, 880px) {
				padding-left: 30px;
			}
			.groupDot {
				display: none;
				@include largerThan(1000px) {
					display: block;
					position: absolute;
					margin-top: -122px;
					margin-left: -65px;
				}
			}
			margin-top: -15px;
		}
	}
	.dot.a {
		@include smallerThan(900px) {
			top: 380px !important;
			left: 304px !important;
		}
	}
}
</style>
