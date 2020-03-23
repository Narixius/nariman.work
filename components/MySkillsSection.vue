<template>
  <div class="myskills">
    <container class="titleContainer">
      <Title
        :text="mySkillsContent[0].sectionTitle"
        component="h2"
      />
    </container>
    <div class="wrapper">
      <container class="titleContainer">
        <div
          class="row"
          v-for="content in mySkillsContent"
        >
          <div class="col-6 textContent">
            <div>
              <h3>
                <span>{{content.title[0]}}</span>
                {{content.title[1]}}
              </h3>
              <p>{{content.description}}</p>
              <div class="metaData">
                <ul>
                  <li v-for="key in Object.keys(content.metaData)">
                    <img
                      :src="'/img/'+key+'.svg'"
                      :alt="key"
                    />
                    {{content.metaData[key]}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6 tools">
            <p>{{content.toolsTitle}}</p>
            <div>
              <div v-for="tool in content.tools">
                <div>
                  <img :src="'/img/'+trim(tool)+'.svg'" />
                </div>
                <span>{{tool}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="hint">
          Need Help?
          <button class="btn arrow">Message me</button>
        </div>
      </container>
    </div>
  </div>
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
	computed: {
		mySkillsContent() {
			return this.pageData.mySkillsSection.iv
		}
	},
	methods: {
		trim(str) {
			return str.toLowerCase().replace(/ /g, '')
		}
	}
}
</script>

<style lang="scss">
.myskills {
	.titleContainer {
		@include largerThan(880px) {
			padding-right: 70px;
			padding-left: 40px;
		}
	}
	.title {
		margin-left: -20px;
		margin-bottom: 30px;
		@include smallerThan(880px) {
			text-align: center;
			margin-bottom: 50px !important;
		}
	}
	.wrapper {
		margin-bottom: 120px;
	}
	padding-bottom: 40px;
	.titleContainer {
		padding-right: 60px;
		padding-left: 60px;
		div.hint {
			display: none;
			@include largerThan(1300px) {
				font-family: 'Montserrat-SemiBold';
				display: block;
				position: absolute;
				top: 50%;
				text-align: center;
				right: 10%;
				transform: translateY(-50%);
				button {
					margin-top: 10px;
				}
			}
		}
	}
	padding-top: 200px;
	padding-bottom: 180px;
	.row {
		.col-6 {
			&:first-child {
				@include smallerThan(1300px) {
					flex-basis: 60%;
					max-width: 60%;
				}
			}
			&:last-child {
				@include smallerThan(1300px) {
					flex-basis: 40%;
					max-width: 40%;
				}
			}
			@include smallerThan(900px) {
				flex-basis: 100% !important;
				max-width: 100% !important;
			}
		}
	}
	.content {
		@include smallerThan(1350px) {
			flex-basis: 60%;
			max-width: 60%;
		}
		max-width: 55%;
		padding-right: 20px;
	}
	.wrapper {
		width: 100%;
		@include largerThan(900px) {
			background-color: $yellow;
		}
	}
	.textContent {
		& > div {
			background-color: white;
			height: 100%;
			@include largerThan(400px) {
				margin-left: 20px;
			}
			@include largerThan(900px) {
				padding: 20px;
			}
		}
		h3 {
			font-family: 'Montserrat-SemiBold';
			span {
				background-color: $yellow;
			}
		}
		p {
			margin: 20px auto;
			line-height: 27px;
		}
		ul {
			list-style: none;
			li {
				img {
					vertical-align: middle;
				}
				margin: 8px auto;
				font-family: 'Montserrat-Medium';
			}
		}
	}

	.tools {
		padding: 40px;

		@include largerThan(900px) {
			padding: 20px;
		}
		p {
			font-family: 'Montserrat-Medium';
		}
		& > div {
			padding: 20px;

			@include smallerThan(900px) {
				display: flex;
				justify-content: center;
			}
			& > div {
				display: inline-block;
				border: 2px solid black;
				text-align: center;
				background-color: white;
				padding: 10px;
				&:first-child {
					margin-right: 40px;
				}
				& > div {
					background-color: black;
					width: 75px;
					height: 75px;
					text-align: center;
					position: relative;
					margin-bottom: 10px;
					img {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
				}
				& > span {
					font-family: 'Montserrat-Medium';
					display: block;
				}
			}
		}
	}
}
</style>
