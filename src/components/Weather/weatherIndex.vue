<template>
	<div>
		<div align="center">
		  <b-card title="Search for a location"
		          style="max-width: 25%;"
		          class="mb-2">
			
	            <div>
				    <b-form inline @submit.prevent="searchForWeather(location)">
				      <label class="sr-only" for="search"></label>
				      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Enter location !"		v-model="location" />

				      <b-button variant="primary" type="submit">Search</b-button>
				    </b-form>
			  </div>
		  </b-card>
		</div>
		
		<div v-if="display" align="center">
			<b-card style="max-width: 25%;"
		            v-bind:img-src="'https:'+url"
          			img-alt="Image"
		            class="mb-2 myClass">

			<div>
				<h2>
					{{info.location.name}} :<hr><br><br>
					Country : {{info.location.country}}<br><hr>
					Latitude : {{info.location.lat}}<br><hr>
					Longitude : {{info.location.lon}}<hr><br><br>
				</h2>
			</div>
			<div>
				<h2>
					Temperature : {{info.current.temp_c}} °C<br><br><hr>
					So how is the weather there ?<br><br><hr>
					I think it's {{info.current.condition.text}}
				</h2>
			</div>
		  </b-card>
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
				url: ''
			}
		},
		methods: {
			searchForWeather (location) {
				console.log('button clicked !!!!')
				if (location != null || location != '') {
					axios ({
					url: 'https://api.apixu.com/v1/current.json?key=' + API_KEY + '&q='+location,
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
				} else {
					window.alert('Vous n\'avez pas rempli le champ de la recherche !!! Veuillez le remplir s\'il vous plait.')
				}
			}
		}
	}

</script>

<style>

</style>