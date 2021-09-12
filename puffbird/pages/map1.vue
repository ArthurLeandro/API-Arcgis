<template>
	<div>
		<MapHeader header="Mapa Global" description="Pesquise localidades no mapa na barra presente na direita superior"/>
		<div id="map__view"></div>
	</div>
</template>

<script>
import {loadModules} from 'esri-loader'
import MapHeader from '../components/MapHeader.vue';
export default {
	layout: "desktop",
	components:{
		MapHeader
	},
	mounted(){
		loadModules([
			"esri/WebMap",
			"esri/views/MapView",
			"esri/layers/FeatureLayer",
			"esri/widgets/Search",
			"esri/widgets/BasemapToggle"
		], {
			url:'https://js.arcgis.com/4.19/'
		}).then(([WebMap,MapView,FeatureLayer,Search,BasemapToggle]) => {
			const labelClass = {
				// autocasts as new LabelClass()
				symbol: {
					type: "text", // autocasts as new TextSymbol()
					color: "green",
					font: {
						// autocast as new Font()
						family: "Playfair Display",
						size: 12,
						weight: "bold"
					}
				},
				labelPlacement: "above-center",
				labelExpressionInfo: {
					expression: "$feature.MARKER_ACTIVITY"
				}
			};
			const view = new MapView({
				container: "map__view",
				map: new WebMap({
					portalItem: {
						// autocasts as new PortalItem
						id: "372b7caa8fe340b0a6300df93ef18a7e"
					},
					layers: [
						new FeatureLayer({
							portalItem: {
								// autocasts as new PortalItem
								id: "6012738cd1c74582a5f98ea30ae9876f"
							},
							labelingInfo: [labelClass],
							renderer: {
								type: "simple", // autocasts as new SimpleRenderer()
								symbol: {
									type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
									color: "rgba(0,100,0,0.6)",
									size: 3,
									outline: {
										color: [0, 0, 0, 0.1],
										width: 0.5
									}
								}
							}
						})
					]
				}),
				center: [-43.99257354541803, -19.92354808336378],
				zoom: 9
			});
			const toggle = new BasemapToggle({
					// 2 - Set properties
					view: view, // view that provides access to the map's 'topo-vector' basemap
					nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
				});
			// Adds the search widget to the top right corner of the view
			view.ui.add(
				new Search({
					view: view
				}),
				"top-right"
			);
			view.ui.add(toggle, "bottom-right");
		});
		console.log("MOUNTED MAP 1")
	}

}
</script>

<style scoped>
@import url('https://js.arcgis.com/4.2/esri/css/main.css');
#map__view {
  height: 89vh;
  width: 100%;
	border: 2px solid var(--secondary);
	padding: .4em 0 .4em 0;
}

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


