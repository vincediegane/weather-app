<template>
	<div>
		<div align="center">
		  <b-card title="Prediction"
		          style="max-width: 25%;"
		          class="mb-2">
					  
					  <div>
					    <b-form inline>
					      <label class="sr-only" for="location">Location</label>
					      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="location" placeholder="Enter location" v-model="location" />
					      <label class="sr-only" for="number">Days</label>
					      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
					        <b-input id="number" placeholder="Enter number of days" v-model="numberOfDays"/>
					      </b-input-group>
					      <b-button variant="primary" @click="predictWeather(location, numberOfDays)">Search</b-button>
					    </b-form>
					  </div>
		  </b-card>
		</div>
		  <div align="center" v-if="display">
			  <b-card style="max-width: 25%;"
			          class="mb-2">
					<div>
						<table>
							<thead>
								<th></th>
							</thead>
						</table>						
					</div>
	          			  
	   		  </b-card>
		  </div>
		</div>
	</div>	
</template>

<script>

	import axios from "axios"

	const API_KEY = "9ffa838d72f948f9a31132304181509"

	export default {
		data () {
			return {
				display: false,
				location: '',
				info: null,
				url: '',
				numberOfDays: 0
			}
		},
		methods: {
			predictWeather (location, nb) {
				axios ({
					url: 'https://api.apixu.com/v1/current.json?key=' + API_KEY + '&q='+location+'&days='+nb,
					method: 'GET',
					headers: {
						'content-type': 'application/json'
					}
				})
					.then((response) => {
						this.info = response.data
						this.url += this.info.current.condition.icon
						console.log(this.url)
					})
					.catch((error) => {
						console.error(error)
					})
					.then(() => {
						this.display = true
					})
			}
		}
	}	
</script>
