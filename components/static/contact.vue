<template>
	<v-container class="mt-2">
    <p class="">
      Contact us if you have feedback or a general enquiry.
    </p>
		<v-card
			class="mb-4"
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
				title   : "By email",
				content : "If you’d like to report a security issue you can contact us via hello[at]tribeofcoders.com"
			},{
				title   : "Media enquiries",
				content : "For media enquiries, email our media desk at press[at]tribeofcoders.com"
			}]
			return {
				items
			}
		}
	}
</script>
