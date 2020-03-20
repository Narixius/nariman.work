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
		height: 508px;
		img {
			margin-right: 30px;
			width: calc(100% - 30px);
			height: 508px;
			object-fit: cover;
		}
		.desc {
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
		div:not(.desc) {
			height: 508px;
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
		.images {
			margin-top: 10px;
			direction: rtl;
			padding-right: 30px;
			max-width: 466px;
			float: right;
			img {
				cursor: pointer;
				width: 84px;
				height: 84px;
				object-fit: cover;
				margin-left: 10px;
			}
			.controllers {
				direction: ltr;
				padding-left: 15px;
				padding-top: 5px;
				button {
					cursor: pointer;
					width: 30px;
					height: 30px;
					border: 1px solid black;
					margin: 0;
					background-color: white;
					margin-left: -5px;
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
