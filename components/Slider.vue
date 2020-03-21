<template>
  <div class="slider">
    <div class="active">
      <transition name="fade">
        <div :key="activeSlide">
          <img
            :src="images[activeSlide].url"
            :alt="images[activeSlide].metadata.description"
          />
        </div>
      </transition>
      <transition name="fadeTop">
        <div
          class="desc"
          :key="activeSlide"
        >
          <span>{{images[activeSlide].metadata.description}}</span>
        </div>
      </transition>
    </div>
    <div class="utils">
      <div class="images">
        <img
          v-for="image,index in images"
          v-if="index != activeSlide"
          @click="activeSlide = index"
          :src="image.url"
          :alt="image.metadata.description"
        />
        <div class="controllers">
          <button
            class="prev"
            @click="slide(true)"
          ></button>
          <button
            class="next"
            @click="slide(false)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			activeSlide: 1
		}
	},
	mounted() {
		setTimeout(() => {
			this.slide(false)
		}, 50)
	},
	methods: {
		slide(next) {
			if (next) {
				if (this.activeSlide == this.images.length - 1) {
					this.activeSlide = 0
				} else {
					this.activeSlide++
				}
			} else {
				if (this.activeSlide == 0) {
					this.activeSlide = this.images.length - 1
				} else {
					this.activeSlide--
				}
			}
		}
	}
}
</script>

<style lang="scss">
$transitionTime: 0.2s;
.fade-enter-active,
.fade-leave-active {
	direction: ltr !important;
	&::before {
		width: calc(100% - 30px) !important;
	}
	transition: transform $transitionTime ease-in;
}
.fade-leave-active {
	z-index: 999;
}

.fadeTop-enter-active,
.fadeTop-leave-active {
	transition: all $transitionTime ease-in;
}
.fadeTop-enter,
.fadeTop-leave-to {
	margin-top: 20px;
	opacity: 0;
}

.slider {
	.active {
		position: relative;
		height: 320px;
		@include smallerThan(650px) {
			height: 250px;
		}
		@include forLargeScreens($largestDesktop) {
			height: 508px;
		}
		@include largerSmaller(880px, $largestDesktop) {
			height: 400px;
		}
		img {
			@include forLargeScreens($largestDesktop) {
				height: 508px;
				margin-right: 30px;
				width: calc(100% - 30px);
			}
			@include largerSmaller(880px, $largestDesktop) {
				width: calc(100% - 20px);
				margin-right: 20px;
				height: 400px;
			}
			@include smallerThan(650px) {
				height: 250px;
				margin-left: 42px;
			}
			@include largerSmaller(650px, 880px) {
				width: 100%;
			}
			height: 320px;
			object-fit: cover;
		}

		.desc {
			display: none;
			@include largerSmaller(880px, $largestDesktop) {
				height: 20px;
			}
			@include forLargeScreens(880px) {
				display: block;
				direction: ltr;
				position: absolute;
				height: 30px;
				width: 102%;
				top: 41%;
				right: -15px;
				transform: translate(45%, 100%) rotate(-90deg);
				span {
					line-height: 25px;
				}
			}
		}
		div:not(.desc) {
			@include forLargeScreens($largestDesktop) {
				height: 508px;
			}
			position: absolute;
			direction: rtl;
			&::before {
				margin-right: 30px;
				transition: width $transitionTime;
				content: ' ';
				position: absolute;
				width: 0;
				height: 100%;
				background-color: black;
			}
		}
	}
	.utils {
		position: relative;
		@include smallerThan(650px) {
			margin-left: 131px;
		}
		.images {
			@include forLargeScreens(880px) {
				padding-right: 30px;
			}
			@include largerSmaller(880px, $largestDesktop) {
				padding-right: 20px;
			}
			@include largerSmaller(650px, 880px) {
				width: calc(100% - 130px);
			}
			@include smallerThan(650px) {
				width: 75px;
				background-color: transparent;
				margin-top: -9px;
			}
			padding-bottom: 10px;
			background-color: white;
			z-index: 10;
			position: absolute;
			padding-top: 10px;
			right: 0;
			margin-top: 0;
			direction: rtl;
			max-width: 466px;
			float: right;
			img {
				display: none;
				@include forLargeScreens(650px) {
					display: inline-block;
				}
				cursor: pointer;
				@include forLargeScreens($largestDesktop) {
					width: 84px;
					height: 84px;
				}
				@include largerSmaller(955px, $largestDesktop) {
					width: 73px;
					height: 73px;
				}
				@include largerSmaller(880px, 955px) {
					width: 60px;
					height: 60px;
				}
				@include largerSmaller(650px, 880px) {
					width: 28%;
					margin-left: 5%;
				}

				width: 50px;
				height: 50px;
				object-fit: cover;
				margin-left: 10px;
			}
			.controllers {
				direction: ltr;
				padding-left: 15px;
				padding-top: 5px;
				button {
					float: left;
					cursor: pointer;
					width: 30px;
					height: 30px;
					border: 1px solid black;
					margin: 0;
					background-color: white;
					margin-left: -1px;
					&.prev::before {
						content: ' ';
						display: block;
						width: 10px;
						border: solid black 1px;
						height: 10px;
						border-top: white;
						border-right: white;
						transform: rotate(45deg);
						margin-left: 11px;
						margin-top: -2px;
					}
					&.next::before {
						content: ' ';
						display: block;
						width: 10px;
						border: solid black 1px;
						height: 10px;
						border-bottom: white;
						border-left: white;
						transform: rotate(45deg);
						margin-left: 6px;
					}
				}
			}
		}
	}
}
</style>
