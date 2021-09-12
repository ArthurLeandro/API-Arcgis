require([
    "esri/WebMap",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Search",
    "esri/widgets/BasemapToggle"
  ], (WebMap, MapView, FeatureLayer, Search, BasemapToggle) => {

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