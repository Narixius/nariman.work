<template>
  <div class="navigation">
    <ul class="deskNav">
      <li @click="menuClicked(0)">About Me</li>
      <li @click="menuClicked(1)">My Skills</li>
      <li @click="menuClicked(2)">Contact Me</li>
      <li
        class="navBtn"
        @click="navWrapper = true"
      >
        <div></div>
        <div></div>
        <div></div>
      </li>
    </ul>
    <transition name="widthTransition">
      <div
        class="bg-wrapper"
        v-show="navWrapper"
      >
        <div
          class="bbackg"
          @click="navWrapper = false"
          :class="{fWidth: navWrapper}"
        ></div>
        <ul
          class="nav"
          v-if="navWrapper"
        >
          <h2>What are you looking for?</h2>
          <li @click="menuClicked(0)">About Me</li>
          <li @click="menuClicked(1)">My Skills</li>
          <li @click="menuClicked(2)">Contact Me</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
	data() {
		return { navWrapper: false }
	},
	methods: {
		menuClicked(index) {
			this.navWrapper = false
			let className = ''
			switch (index) {
				case 0:
					this.$scrollTo('.aboutme', { offset: -150 })
					break
				case 1:
					this.$scrollTo('.myskills', { offset: 80 })
					break
				case 2:
					this.$scrollTo('.contactme', { offset: -150 })
					break
			}
		}
	}
}
</script>

<style lang="scss">
.navigation {
	.widthTransition-leave-active {
		transition: all $transitionTime ease-in;
		width: 0;
	}
	.widthTransition-leave-to {
		.bbackg {
			animation: noWidth $transitionTime;
		}
	}

	@keyframes noWidth {
		from {
			width: 100%;
		}
		to {
			width: 0;
		}
	}
	@keyframes fullWidth {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
	.deskNav {
		list-style: none;
		@include smallerThan(650px) {
			direction: rtl;
		}
		li {
			&:not(.navBtn) {
				display: none;
				@include forLargeScreens(700px) {
					display: inline-block;
					margin-left: 35px;
					padding: 10px;
					font-size: 15px;
				}
				@include largerSmaller(650px, 700px) {
					display: inline-block;
					padding: 10px;
					font-size: 15px;
				}
				margin: 10px;
				padding: 0;
				font-size: 10px;
				&:first-child {
					margin-left: 0;
				}
				cursor: pointer;
				font-family: 'Montserrat-Medium';
			}
			&.navBtn {
				cursor: pointer;
				display: block;
				@include forLargeScreens(650px) {
					display: none;
				}
				width: 30px;
				padding: 15px;
				div {
					width: 28px;
					height: 4px;
					border-radius: 6px;
					background-color: black;
					margin: 4px 0;
				}
			}
		}
	}
	.bg-wrapper {
		position: fixed;
		width: 100vw;
		top: 0;
		height: 100vh;
		left: 0;
		z-index: 999;
		.nav {
			list-style: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			animation: fade $transitionTime * 2 ease-in;
			h2 {
				color: #fff;
				margin-bottom: 40px;
			}
			li {
				cursor: pointer;
				margin: 5px;
				padding: 10px;
				border: 2px solid transparent;
				color: white;
				&:hover {
					border: 2px solid $yellow;
					color: $yellow;
				}
			}
		}
		& > .bbackg {
			background-color: black;
			top: 0;
			height: 100%;
			left: 0;
			transition: all $transitionTime ease-in;
			// animation: noWidth $transitionTime;
			&.fWidth {
				animation: fullWidth $transitionTime;
			}
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			width: 1;
		}
	}
}
</style>
