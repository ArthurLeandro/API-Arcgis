require([
	"esri/WebMap",
	"esri/views/MapView",
	"esri/layers/FeatureLayer",
	"esri/widgets/Search",
	"esri/widgets/BasemapToggle",
	"esri/widgets/CoordinateConversion",
	"esri/layers/WMSLayer",
	"esri/widgets/Legend"
], (WebMap, MapView, FeatureLayer, Search, BasemapToggle, CoordinateConversion, WMSLayer, Legend) => {

	const layer = new WMSLayer({
		url: "https://geoservicos.ibge.gov.br/geoserver/CGEO/wms?",
		sublayers: [
			{
				name: "CGEO:C04_DensidPop2010_MG"
			}
		]
	});



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
		container: "viewDiv",
		map: new WebMap({
			portalItem: {
				// autocasts as new PortalItem
				id: "83f57e64955b4ed1bb7612fa10004663"
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
				}),
				layer

			],

		}),

		center: [-43.99257354541803, -19.92354808336378],
		zoom: 9
	});


	const toggle = new BasemapToggle({
		// 2 - Set properties
		view: view, // view that provides access to the map's 'topo-vector' basemap
		nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
	});

	var ccWidget = new CoordinateConversion({
		view: view
	})

	view.ui.add(ccWidget, "bottom-left");
	// Adds the search widget to the top right corner of the view
	view.ui.add(
		new Search({
			view: view
		}),
		"top-right"
	);

	view.ui.add(toggle, "bottom-right");
});

var menu = document.getElementById("#menu");
menu.addEventListener("click", function () {
	var sidebar = document.getElementsByClassName("sidebar")[0];
	sidebar.classList.add("sidebar__animated")
});

var cl = document.getElementById("#close");
cl.addEventListener("click", function () {
	var sidebar = document.getElementsByClassName("sidebar")[0];
	sidebar.classList.remove("sidebar__animated")
})