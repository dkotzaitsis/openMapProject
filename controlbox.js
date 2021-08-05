

var select = new ol.interaction.Select();
map.addInteraction(select);

var selectedFeatures = select.getFeatures();


var dragBox = new ol.interaction.DragBox({
  condition: ol.events.condition.shiftKeyOnly,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: [0, 0, 255, 1]
    })
  })
});

map.addInteraction(dragBox);

var infoBox = document.getElementById('box');


    dragBox.on('boxend', function() {
        
        var lonList=[]
        var latList=[]
        
        var string = dragBox.getGeometry().getCoordinates();
        for(i=0;i<4;i++){
          string[0][i]=ol.proj.transform(string[0][i],'EPSG:3857', 'EPSG:4326');
          lonList.push(string[0][i][0])
          latList.push(string[0][i][1])
        }

        var minLon=Math.min.apply(Math,lonList)
        var minLat=Math.min.apply(Math,latList)
        var maxLon=Math.max.apply(Math,lonList)
        var maxLat=Math.max.apply(Math,latList) 
        
        
        window.alert("Min Longitude:  "+minLon+"\n"+"Max Longitude:  "+maxLon+"\n"+"Min Latitude:  "+minLat+"\n"+"Max Latitude:  "+maxLat)
        var param;
        function getFeature(button,layer){
          if(typeof(layer)!="string"){
            param=(layer.getSource()['params_']['LAYERS'])
          }
          else{
            param=layer
          }
          
          if(button.checked){
              var url= "http://www.openmapproject.com/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames="+ param +"&srsName=EPSG:4326&maxFeatures=1000000&outputFormat=json&format_options=callback:getJson&bbox="+minLon + "," + minLat + "," + maxLon + "," + maxLat+",EPSG:4326"  ;
              if(url){
                $.ajax({
                  type:"GET",
                  url: url,
                  dataType: 'json',
                  jsonpCallback: 'getJson',
                  contentType: 'application/json',
                  success: function(data){
                    if(data['features']!=0){
                      shpwrite.download(data)                      
                      //console.log(data)
                      }
                    }
                });
              }
            };
          }
          getFeature(geoname,geonames)
          getFeature(discharge,dischargepointsgrc);
          getFeature(petrodatagrc,petrodata);
          getFeature(airports,airportsgrc);
          getFeature(protected,marineprotectedareas);
          getFeature(anchorages,anchoragesgrc);
          getFeature(borders,maritimeborders);
          getFeature(states,greecestates);
          getFeature(lakes,greecelakes);
          getFeature(volcanic,volcanicgrc);
          getFeature(ports,portsgrc);
          getFeature(windfarms,windfarmsgrc);
          getFeature(shipwrecks,shipwrecksgrc);
          getFeature(lighthousesbtn,lighthouses);
          getFeature(militarygrc,military)
          getFeature(drengingygrc,drenging)
          getFeature(telecom,telecom_cables)
          getFeature(waterbasesgrc,waterbases)
          getFeature(seagrassgrc,seagrass)       
          getFeature(shroutes,shippingroutes) 
          getFeature(fishes,'openMapProject:shellfish')
          getFeature(fishes,'openMapProject:finfish')
          getFeature(bathing_water,bathingwater)
          getFeature(boreholesgrc,boreholes)
          getFeature(spirulinagrc,spirulina)
          getFeature(summershroutes,geotiffshippingroutes)
          getFeature(coastlinegr,coastline)
          getFeature(bathymetrics_beam_gr,bathymetrics_beam)
          getFeature(oil,oil_spills)
          getFeature(minorisl,minor)
          getFeature(ocigr,oci)
          getFeature(cha,human_impact)
          getFeature(mpa,mpa_change)
          getFeature(marinas,marinasgr)
          getFeature(earth,earthquakes)
          getFeature(piracy,piratic)
          getFeature(apok,apokentromenes)
          getFeature(mun,dimoi)
          getFeature(ff,freshfish)
          getFeature(eco,ecosystems)
          getFeature(bio,biodiversity)
          getFeature(arc,archeological)
          
          getFeature(airp_feed,airplanes_lf)
          getFeature(airp_ovr,airplanes_overall)
    });


