var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');


/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};


/**
 * Create an overlay to anchor the popup to the map.
 */
var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
}));


var view= new ol.View({
  center: ol.proj.fromLonLat([24.0, 38.0]),
  zoom: 6.25,
  minZoom:6.25,
  
})

var map = new ol.Map({
    target: 'map',
    overlays:[overlay],
    projection: 'EPSG:4326',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      })
    ],
    view:view
  });

  map.on('singleclick', function(evt) {
    var coordinate = evt.coordinate;
    var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
        coordinate, 'EPSG:3857', 'EPSG:4326'));
  
    content.innerHTML = '<p>Co-ords:</p><code>' + hdms +
        '</code>';
    overlay.setPosition(coordinate);
  });
  