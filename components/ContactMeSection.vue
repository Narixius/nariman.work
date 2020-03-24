<template>
  <container class="contactme">
    <Title
      :text="contactMeContent.title"
      component="h2"
    />
    <div class="row">
      <div class="col-6 desc">
        <div>
          <div class="shadow"></div>
          <div class="img">
            <img :src="contactMeContent.image[0].url" />
          </div>
          <div class="text">
            <p v-for="text in contactMeContent.description">{{text}}</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form">
          <span>{{contactMeContent.formTitle}}</span>
          <div>
            <div class="input">
              <label for="email">Email</label>
              <input
                v-model="form.email"
                type="text"
                id="email"
              />
            </div>
            <div class="input">
              <label for="message">Message</label>
              <textarea
                v-model="form.message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              @click="submit()"
              class="btn"
            >{{contactMeContent.buttonText}}</button>
            <div
              class="alert"
              v-if="alert.show"
              :class="alert.class"
            >
              <span>{{ alert.class == "success" ? 'Done!' : "Sorry we have problem" }}</span>
              <p v-for="text in alert.text">{{text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="soc">
      <span>{{contactMeContent.socialMediaText}}</span>
      <SocialMedia :socialMedia="pageData.socialMedia.iv[0]" />
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
	data() {
		return {
			alert: {
				text: '',
				show: false,
				class: ''
			},
			form: {
				email: '',
				message: ''
			}
		}
	},
	computed: {
		contactMeContent() {
			return this.pageData.contactMeContent.iv[0]
		}
	},
	watch: {
		'form.email'() {
			this.alert.show = false
		},
		'form.message'() {
			this.alert.show = false
		}
	},
	methods: {
		submit() {
			let text = []
			if (
				/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(
					this.form.email
				) === false
			) {
				text.push('Email is not valid')
			}
			if (this.form.message.length < 10) {
				text.push(
					'Your message is short. Pleace write more than 10 charactors.'
				)
			}
			if (text.length == 0) {
				this.form.message = this.form.message.substring(0, 1000)

				//submit form
				const axios = require('axios').default
				axios
					.post('/api/contact', null, { params: this.form })
					.then(response => {
						if (
							typeof response.data.ok !== 'undefined' &&
							response.data.ok === true
						) {
							this.form = {
								email: '',
								message: ''
							}
							setTimeout(() => {
								text = [this.contactMeContent.messageSentText]
								this.alert = {
									show: true,
									class: 'success',
									text
								}
							}, 100)
						} else {
							text = [this.contactMeContent.messageError]
							this.alert = {
								show: true,
								class: 'dangar',
								text
							}
						}
					})
					.catch(() => {
						text = [this.contactMeContent.messageError]
						this.alert = {
							show: true,
							class: 'dangar',
							text
						}
					})
			} else {
				this.alert = {
					show: true,
					class: 'danger',
					text
				}
			}
		}
	}
}
</script>

<style lang="scss">
.contactme {
	@include largerThan(900px) {
		padding-right: 70px;
		padding-left: 40px;
	}
	.title {
		@include smallerThan(900px) {
			text-align: center;
		}
	}
	padding-right: 55px;
	@include smallerThan(900px) {
		padding-left: 55px;
	}
	.row {
		.col-6 {
			@include smallerThan(900px) {
				flex-basis: 100% !important;
				max-width: 100% !important;
			}
		}
	}
	.desc {
		position: relative;

		@include largerThan(900px) {
			padding: 40px;
			height: 608px;
		}
		padding: 20px;
		.shadow {
			background-color: #ffce21;
			width: calc(100% - 140px);

			@include smallerThan(1060px) {
				height: 440px;
			}

			@include smallerThan(500px) {
				width: calc(100% - 40px) !important;
			}
			@include smallerThan(900px) {
				width: 400px;
				margin-top: 20px;
				left: 50%;
				transform: translateX(-50%);
			}
			height: 210px;
			position: absolute;
		}
		.img {
			@include smallerThan(900px) {
				text-align: center;
			}
			img {
				@include largerThan(1060px) {
					mix-blend-mode: multiply;
					width: 300px;
				}
				width: calc(100% - 180px);

				@include smallerThan(520px) {
					width: calc(100% - 40px) !important;
					margin: unset !important;
					margin-top: 40px !important;
				}
				@include smallerThan(900px) {
					width: 360px;
					position: static;
					right: unset;
					margin-top: 40px;
					margin-left: 5px;
				}
				filter: grayscale(100%);
				object-fit: cover;
				height: 400px;
				position: absolute;
				right: 120px;
				top: 60px;
			}
		}
		.text {
			padding: 20px;
			background-color: white;
			text-align: left;
			line-height: 26px;
			@include largerThan(900px) {
				top: 500px;
				position: absolute;
				width: calc(100% - 80px);
			}
			@include smallerThan(900px) {
				margin-top: 20px;
			}

			@include largerThan(1060px) {
				right: -10%;
				top: 380px;
				width: 50%;
			}
		}
	}
	.form {
		span {
			font-family: 'Montserrat-SemiBold';
			font-size: 20px;
		}
		& > div {
			margin-top: 50px;
			.input {
				align-items: baseline;
				margin-top: 10px;
				display: flex;
				label {
					width: 90px;
					display: block;
				}
				input,
				textarea {
					font-size: 16px;
					padding: 10px;
					border: 1px solid black;

					@include smallerThan(1150px) {
						width: calc(100% - 110px);
					}

					@include largerThan(1150px) {
						width: 50%;
					}
					resize: none;
				}
			}
			button {
				margin-left: 90px;
				margin-top: 10px;
				font-family: 'Montserrat-Medium';
			}
		}
		.alert {
			padding: 20px;
			span {
				font-family: 'Montserrat-Medium';
				font-size: 20px;
			}
			p {
				margin-top: 10px;
				font-family: 'Montserrat-Regular';
			}
			margin-left: 90px;
			margin-top: 20px;
			&.success {
				border: 1px solid green;
			}
			&.danger {
				border: 1px solid red;
			}
			@include largerThan(1150px) {
				width: 47%;
			}
		}
	}
	.soc {
		span {
			font-family: 'Montserrat-SemiBold';
			margin-bottom: 20px;
			display: block;
		}
		text-align: center;
		margin-bottom: 30px;
		margin-top: 30px;
	}
}
</style>
