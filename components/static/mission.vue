<template>
	<v-container class="mt-2">
    <v-card
			class="mb-4"
      elevation="2"
      outlined
			v-for="item in items"
			:key="item.title"
		>
			<v-card-title v-text="item.title"></v-card-title>
			<v-card-text v-text="item.content"></v-card-text>
		</v-card>
	</v-container>
</template>
<script lang="ts">
	import Vue from 'vue'
  interface Items {
    title: string,
    content: string
  }
	export default {
		data () {
			let items: Items[] = [{
				title   : "What is the Tribe of Coders?",
				content : "Our mission is to protect the free and open Internet by trying to make it safer and by thus guarding the well-being of humans online, to ensure respect for all human intellectual freedom, and to prevent and mitigate digital abuse. We address security issues with Responsible Disclosures and assist anywhere in times of need."
			},{
				title   : "Humanity",
				content : "The Tribe of Coders, born of a desire to bring assistance without discrimination to those online at risk being vulnerable for online attacks, endeavors, in its international and national capacity, to prevent and alleviate human suffering wherever it may be found. Its purpose is to protect life and health and to ensure respect for the human being. It promotes mutual understanding, friendship, cooperation, sharing knowledge amongst all people."
			},{
				title   : "Impartiality",
				content : "The Tribe of Coders does not discriminate as to nationality, race, religious beliefs, class or political opinions. We are here to detect, prevent and help mitigate vulnerable issues, guided solely by their needs, and to give priority to the most urgent cases of distress."
			},{
				title   : "Neutrality",
				content : "To continue to enjoy the confidence of all, the Tribe of Coders may not take sides in hostilities or engage at any time in controversies of a political, racial, religious or ideological nature."
			},{
				title   : "Independence",
				content : "The Tribe of Coders is independent. In providing these humanitarian services we are subject to the laws of their respective countries, must always maintain their autonomy so that they may be able at all times to act by the mission of the Tribe of Coders."
			},{
				title   : "Voluntary Service",
				content : "The Tribe of Coders is an online voluntary auxiliary organization not prompted or driven in any manner by desire for (a financial) gain."
			},{
				title   : "Universality",
				content : "The Tribe of Coders, in which all societies have equal status and share similar responsibilities and duties in helping each other, is worldwide."
			}]
			return {
				items
			}
		}
	}
</script>
