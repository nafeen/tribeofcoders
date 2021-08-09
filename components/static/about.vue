<template>
	<v-container class="mt-2">
    <p class="">
      Our mission is to defend the free & open Internet by trying to make it safer. We address security issues with responsible disclosure (<a href="https://www.iso.org/standard/72311.html" target="_blank">coordinated vulnerability disclosures</a>).
    </p>
		<v-card
			outlined
			shaped
			class="mb-4"
			v-for="item in items"
			:key="item.title"
		>
			<v-card-title v-text="item.title"></v-card-title>
			<v-card-text v-text="item.content"></v-card-text>
		</v-card>
    <v-card
      elevation="0"
      color="transparent"
    >
      <v-card-title>Can I help?</v-card-title>
			<v-card-text>
        <p>Yes, of course! We are always looking for new volunteers. Do you also want to make the digital world a safer place? Then please signup <a href="https://forms.gle/G95ZU8BEvYDPGMLH7" target="_blank">here</a>.</p>
      </v-card-text>
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
				title   : "What do we stand for?",
				content : "We stand for a safe, free and open internet. We believe user data is the property of the user, and not some corporation."
			},{
				title   : "What do we do?",
				content : "We detect & analyse potential security risks on public domain websites. We share the risk & vulnerabilities with concerned stakeholders. We inform those at risk and when necessary, help them fix the vulnerability."
			},{
				title   : "Are we making a profit?",
				content : "No, we are a nonprofit foundation. We rely on contributions in the form of donations, sponsorships and participating members"
			}]
			return {
				items
			}
		}
	}
</script>
