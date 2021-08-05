
function changer(button,layer){
  map.on("click", function (evt) {
    if(button.checked){
      var viewResolution = view.getResolution();
      var url = layer.getSource().getFeatureInfoUrl(
        evt.coordinate, viewResolution, view.getProjection(),
        { 'INFO_FORMAT': 'text/html' ,format_options: 'callback: getHtml'});
      if(url){
        $.ajax({
          type: "GET",
          url:url,
          dataType: 'html',
          callback: 'geHtml',
          success: function (data) {
            document.getElementById('info').innerHTML =data;
        }
      });
      }
    }
  });
};


  


  changer(geoname,geonames)
  changer(discharge,dischargepointsgrc);
  changer(petrodatagrc,petrodata);
  changer(airports,airportsgrc);
  changer(eez_grc,eez);
  changer(bathymetrics,geotiffbathymetrics);
  changer(protected,marineprotectedareas);
  changer(anchorages,anchoragesgrc);
  changer(borders,maritimeborders);
  changer(states,greecestates);
  changer(lakes,greecelakes);
  changer(volcanic,volcanicgrc);
  changer(ports,portsgrc);
  changer(windfarms,windfarmsgrc);
  changer(shipwrecks,shipwrecksgrc);
  changer(lighthousesbtn,lighthouses);
  changer(fishes,fishesgrc);
  changer(shroutes,shippingroutes)
  changer(militarygrc,military)
  changer(drengingygrc,drenging)
  changer(telecom,telecom_cables)
  changer(waterbasesgrc,waterbases)
  changer(seagrassgrc,seagrass)
  changer(bathing_water,bathingwater)
  changer(boreholesgrc,boreholes)
  changer(spirulinagrc,spirulina)
  changer(summershroutes,geotiffshippingroutes)
  changer(coastlinegr,coastline)
  changer(bathymetrics_beam_gr,bathymetrics_beam)
  changer(oil,oil_spills)
  changer(minorisl,minor)
  changer(ocigr,oci)
  changer(cha,human_impact)
  changer(mpa,mpa_change)
  changer(marinas,marinasgr)
  changer(salinity,salinitygr)
  changer(earth,earthquakes)
  changer(curu0,current_u0)
  changer(bottom,bottomT)
  changer(theta,thetaT)
  changer(piracy,piratic)
  changer(apok,apokentromenes)
  changer(mun,dimoi)
  changer(ff,freshfish)
  changer(eco,ecosystems)
  changer(bio,biodiversity)
  changer(arc,archeological)
 

  changer(mTemp,annualMean);
  changer(mDiR,meanDiuralRange);
  changer(isoth,isothermality);
  changer(tSeas,tempSeasonality);
  changer(maxtemp,maxTemp);
  changer(mintemp,minTemp);
  changer(tRange,tempAnnualRange);
  changer(meanTWet,meanTempWettestQuarter);
  changer(meanTDry,meanTempDriestQuarter);
  changer(meanTWarm,meanTempWarmestQuarter);
  changer(meanTCold,meanTempColdestQuarter);
  changer(prec,precipitation);
  changer(precWet,precipitationWettestMonth);
  changer(precDry,precipitationDriestMonth);
  changer(precSeas,precipitationSeasonality);
  changer(precWetQ,precipitationWettestQuarter);
  changer(precDryQ,precipitationDriestQuarter);
  changer(precWarmQ,precipitationWarmestQuarter);
  changer(precColdQ,precipitationColdestQuarter);
  changer(airp_feed,airplanes_lf)
  changer(airp_ovr,airplanes_overall)