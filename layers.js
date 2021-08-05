

var airportsgrc=new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:airp_grc'},
        serverType:'geoserver'
        
    })
});
var eez=new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:eez_greece'},
        serverType:'geoserver'
        
    })
});

var lighthouses=new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:lighthouses_grc'},
        serverType:'geoserver'
        
    })
});


var petrodata=new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:petrodatagrc'},
        serverType:'geoserver'
        
    })
});

//var geotiffbathymetrics= new ol.layer.Image({
//    target: 'map',
//    visible:false,
//    source:new ol.source.ImageWMS({
//        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
//        params:{'LAYERS':'rasterData:geotiff_coverage'},
//        serverType:'geoserver'
//        
//    })
//});

var maritimeborders= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:maritime_boundaries_greece'},
        serverType:'geoserver'
        
    })
});

var marineprotectedareas= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:marine_protected_areas'},
        serverType:'geoserver'
        
    })
});

var anchoragesgrc= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:anchorages_greece'},
        serverType:'geoserver'
        
    })
});

var greecestates= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:greece_states'},
        serverType:'geoserver'
        
    })
});

var greecelakes= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:lakes_greece'},
        serverType:'geoserver'
        
    })
});

var volcanicgrc= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:volcanic_greece'},
        serverType:'geoserver'
        
    })
});

var dischargepointsgrc= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:discharge_points_greece'},
        serverType:'geoserver'
        
    })
});

var portsgrc= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:ports_greece'},
        serverType:'geoserver'
        
    })
});

var windfarmsgrc= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:windfarmsgreece'},
        serverType:'geoserver'
        
    })
});

var shipwrecksgrc= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:shipwrecks'},
        serverType:'geoserver'
        
    })
});


var fishesgrc= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms?',
        params:{'LAYERS':'openMapProject:fishes'},
        serverType:'geoserver'
        
    })
});


var geotiffshippingroutes= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:shipping_routes_density'},
        serverType:'geoserver'
        
    })
});

var bathymetrics_beam= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:bathymetrics_beam_points'},
        serverType:'geoserver'
        
    })
});

var military= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:military_grc'},
        serverType:'geoserver'
        
    })
});

var drenging= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:drenging_points_grc'},
        serverType:'geoserver'
        
    })
});

var telecom_cables= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:telecom_cables_grc'},
        serverType:'geoserver'
    })
});


var waterbases= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:waterbases_grc'},
        serverType:'geoserver'
    })
});


var seagrass= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:seagrass_grc'},
        serverType:'geoserver'
    })
});

var shippingroutes= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:shproutes_grc'},
        serverType:'geoserver'
    })
});


var bathingwater= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:bathing_water_grc'},
        serverType:'geoserver'
    })
});
var boreholes= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:boreholes_grc'},
        serverType:'geoserver'
    })
});

var spirulina= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:spirulina_grc'},
        serverType:'geoserver'
    })
});
var coastline= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:coastline_gr2'},
        serverType:'geoserver'
    })
});

var oil_spills= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:oil_spills'},
        serverType:'geoserver'
    })
});
var minor= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:minor_islands_greece'},
        serverType:'geoserver'
    })
});

var oci= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:ocean_health_index_gr'},
        serverType:'geoserver'
    })
});


var human_impact= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:cumulative_human_impact_gr'},
        serverType:'geoserver'
    })
});

var mpa_change= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:mpa_change_gr'},
        serverType:'geoserver'
    })
});
var marinasgr= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:marinas'},
        serverType:'geoserver'
    })
});

var geotiffbathymetrics= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:geotiff_coverage'},
        serverType:'geoserver'
    })
});
var salinitygr= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:salinity'},
        serverType:'geoserver'
    })
});
var seatemp= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:seatemp'},
        serverType:'geoserver'
    })
});


var earthquakes= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:earthquakes'},
        serverType:'geoserver'
    })
});

var current_u0= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:current_u0'},
        serverType:'geoserver'
    })
});
var thetaT= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:thetaT'},
        serverType:'geoserver'
    })
});
var bottomT= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:bottomT'},
        serverType:'geoserver'
    })
});


var piratic= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:piracy_greece'},
        serverType:'geoserver'
    })
});

var dimoi= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:dimoi'},
        serverType:'geoserver'
    })
});
var apokentromenes= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:apokentromenes_dioikiseis'},
        serverType:'geoserver'
    })
});

var freshfish= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:fishesfrsh'},
        serverType:'geoserver'
    })
});

var ecosystems= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:freshwater_ecosystems'},
        serverType:'geoserver'
    })
});

var biodiversity= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:marine_biodiversity_gr'},
        serverType:'geoserver'
    })
});

var archeological= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:archeological_sites_gr'},
        serverType:'geoserver'
    })
});





var annualMean= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:meanTemp'},
        serverType:'geoserver'
    })
});
var meanDiuralRange= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:meanDiuralRange'},
        serverType:'geoserver'
    })
});
var isothermality= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:isothermality'},
        serverType:'geoserver'
    })
});

var tempSeasonality= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:tempSeasonality'},
        serverType:'geoserver'
    })
});
var maxTemp= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:maxTemp'},
        serverType:'geoserver'
    })
});
var minTemp= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:minTemp'},
        serverType:'geoserver'
    })
});
var tempAnnualRange= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:tempAnnualRange'},
        serverType:'geoserver'
    })
});
var meanTempWettestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:meanTempWettestQuarter'},
        serverType:'geoserver'
    })
});
var meanTempDriestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:meanTempDriestQuarter'},
        serverType:'geoserver'
    })
});
var meanTempWarmestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:meanTempWarmestQuarter'},
        serverType:'geoserver'
    })
});
var meanTempColdestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:meanTempColdestQuarter'},
        serverType:'geoserver'
    })
});
var precipitation= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitation'},
        serverType:'geoserver'
    })
});
var precipitationWettestMonth= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitationWettestMonth'},
        serverType:'geoserver'
    })
});

var precipitationDriestMonth= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitationDriestMonth'},
        serverType:'geoserver'
    })
});
var precipitationSeasonality= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitationSeasonality'},
        serverType:'geoserver'
    })
});

var precipitationWettestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitationWettestQuarter'},
        serverType:'geoserver'
    })
});
var precipitationDriestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitationDriestQuarter'},
        serverType:'geoserver'
    })
});

var precipitationWarmestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitationWarmestQuarter'},
        serverType:'geoserver'
    })
});
var precipitationColdestQuarter= new ol.layer.Tile({
    target: 'map',
    visible:false,
    source:new ol.source.TileWMS({
        url:'http://www.openmapproject.com/geoserver/rasterData/wms',
        params:{'LAYERS':'rasterData:precipitationColdestQuarter'},
        serverType:'geoserver'
    })
});

var geonames= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:geonames_grc'},
        serverType:'geoserver'
    })
});


var airplanes_lf= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:airplanes_livefeed'},
        serverType:'geoserver'
    })
});

var airplanes_overall= new ol.layer.Image({
    target: 'map',
    visible:false,
    source:new ol.source.ImageWMS({
        url:'http://www.openmapproject.com/geoserver/openMapProject/wms',
        params:{'LAYERS':'openMapProject:airplanes_ovr'},
        serverType:'geoserver'
    })
});






map.addLayer(geotiffbathymetrics);
map.addLayer(airportsgrc);
map.addLayer(eez);
map.addLayer(petrodata);
map.addLayer(maritimeborders);
map.addLayer(marineprotectedareas);
map.addLayer(anchoragesgrc);
map.addLayer(greecestates);
map.addLayer(greecelakes);
map.addLayer(volcanicgrc);
map.addLayer(dischargepointsgrc);
map.addLayer(portsgrc);
map.addLayer(windfarmsgrc);
map.addLayer(shipwrecksgrc);
map.addLayer(lighthouses);
map.addLayer(fishesgrc);
map.addLayer(shippingroutes);
map.addLayer(military);
map.addLayer(drenging);
map.addLayer(telecom_cables);
map.addLayer(waterbases);
map.addLayer(seagrass);
map.addLayer(bathingwater);
map.addLayer(boreholes);
map.addLayer(spirulina);
map.addLayer(geotiffshippingroutes);
map.addLayer(coastline);
map.addLayer(bathymetrics_beam);
map.addLayer(oil_spills);
map.addLayer(minor);
map.addLayer(oci);
map.addLayer(human_impact);
map.addLayer(mpa_change);
map.addLayer(marinasgr);
map.addLayer(salinitygr);
map.addLayer(seatemp);
map.addLayer(earthquakes);
map.addLayer(current_u0);
map.addLayer(thetaT);
map.addLayer(bottomT);
map.addLayer(piratic);
map.addLayer(dimoi);
map.addLayer(apokentromenes);
map.addLayer(freshfish);
map.addLayer(ecosystems);
map.addLayer(biodiversity);
map.addLayer(archeological);

map.addLayer(airplanes_lf)
map.addLayer(airplanes_overall)


map.addLayer(annualMean);
map.addLayer(meanDiuralRange);
map.addLayer(isothermality);
map.addLayer(tempSeasonality);
map.addLayer(maxTemp);
map.addLayer(minTemp);
map.addLayer(tempAnnualRange);
map.addLayer(meanTempWettestQuarter);
map.addLayer(meanTempDriestQuarter);
map.addLayer(meanTempWarmestQuarter);
map.addLayer(meanTempColdestQuarter);
map.addLayer(precipitation);
map.addLayer(precipitationWettestMonth);
map.addLayer(precipitationDriestMonth);
map.addLayer(precipitationSeasonality);
map.addLayer(precipitationWettestQuarter);
map.addLayer(precipitationDriestQuarter);
map.addLayer(precipitationWarmestQuarter);
map.addLayer(precipitationColdestQuarter);
map.addLayer(geonames);
