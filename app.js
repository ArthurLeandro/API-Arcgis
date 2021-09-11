      require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/widgets/BasemapGallery"
      ], function (Map, SceneView, BasemapGallery) {
        var map = new Map({
          basemap: "gray-vector"
        });

        var view = new SceneView({
          container: "viewDiv",
          map: map,
          center: [-43.99257354541803, -19.92354808336378],
          zoom: 9
        });

        var basemapGallery = new BasemapGallery({
          view: view
        });

        // Add the widget to the top-right corner of the view
        view.ui.add(basemapGallery, {
          position: "top-right"
        });
      });

