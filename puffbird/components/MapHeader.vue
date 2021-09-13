<template>
		<div v-if="$mq === 'lg'" class="map__header">
			<p class="map__title">{{headerMap}}</p>
			<p class="map__description">{{descriptionMap}}</p>
			<svg width="100" height="100" id="map__marker">
				<polygon points="90,10 40,50 90,78"
					style="fill:#4F3750;stroke:#8D8960;stroke-width:5;fill-rule:evenodd;" />Sorry, your browser does not support inline SVG.
			</svg>
		</div>
</template>

<script>
export default {
	name:"MapHeader",
	props:[
		'header', 'description'
	],
	data: function(){
		return {
			headerMap: this.header,
			descriptionMap: this.description
		}
	}
}
</script>

<style scoped>

.map__header{
	top: 25%;
	position: fixed;
	z-index: 50;
	background-color:var(--background);
	transition:transform .5s;
	width: 280px;
	padding: 0 2em 2em 2em;
	transform: translateX(-280px);
}

.map__header:hover{
	transform: translateX(30px);
}

.map__title{
	font-weight: bold;
}

.map__description{
	font-size: 10px;
	width:75%;
}

#map__marker{
	position: absolute;
	text-align: right;
	transform:translate(200px,-70px);
}
</style>


