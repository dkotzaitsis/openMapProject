function switcher(button,layer){
    button.addEventListener('change', function() {
        if (this.checked) {
          layer.setVisible(true);
        }
        else{
          layer.setVisible(false);
        }
      });
}


switcher(geoname,geonames);
switcher(discharge,dischargepointsgrc);
switcher(petrodatagrc,petrodata);
switcher(airports,airportsgrc);
switcher(eez_grc,eez);
switcher(bathymetrics,geotiffbathymetrics);
switcher(protected,marineprotectedareas);
switcher(anchorages,anchoragesgrc);
switcher(borders,maritimeborders);
switcher(states,greecestates);
switcher(lakes,greecelakes);
switcher(volcanic,volcanicgrc);
switcher(ports,portsgrc);
switcher(windfarms,windfarmsgrc);
switcher(shipwrecks,shipwrecksgrc);
switcher(lighthousesbtn,lighthouses);
switcher(fishes,fishesgrc)
switcher(shroutes,shippingroutes)
switcher(militarygrc,military)
switcher(drengingygrc,drenging)
switcher(telecom,telecom_cables)
switcher(waterbasesgrc,waterbases)
switcher(seagrassgrc,seagrass)
switcher(bathing_water,bathingwater);
switcher(boreholesgrc,boreholes);
switcher(spirulinagrc,spirulina);
switcher(summershroutes,geotiffshippingroutes);
switcher(coastlinegr,coastline)
switcher(bathymetrics_beam_gr,bathymetrics_beam)
switcher(oil,oil_spills)
switcher(minorisl,minor)
switcher(ocigr,oci)
switcher(cha,human_impact)
switcher(mpa,mpa_change)
switcher(marinas,marinasgr)
switcher(salinity,salinitygr)
switcher(earth,earthquakes)
switcher(curu0,current_u0)
switcher(theta,thetaT)
switcher(bottom,bottomT)
switcher(piracy,piratic)
switcher(mun,dimoi)
switcher(apok,apokentromenes)
switcher(ff,freshfish)
switcher(eco,ecosystems)
switcher(bio,biodiversity)
switcher(arc,archeological)


switcher(mTemp,annualMean);
switcher(mDiR,meanDiuralRange);
switcher(isoth,isothermality);
switcher(tSeas,tempSeasonality);
switcher(maxtemp,maxTemp);
switcher(mintemp,minTemp);
switcher(tRange,tempAnnualRange);
switcher(meanTWet,meanTempWettestQuarter);
switcher(meanTDry,meanTempDriestQuarter);
switcher(meanTWarm,meanTempWarmestQuarter);
switcher(meanTCold,meanTempColdestQuarter);
switcher(prec,precipitation);
switcher(precWet,precipitationWettestMonth);
switcher(precDry,precipitationDriestMonth);
switcher(precSeas,precipitationSeasonality);
switcher(precWetQ,precipitationWettestQuarter);
switcher(precDryQ,precipitationDriestQuarter);
switcher(precWarmQ,precipitationWarmestQuarter);
switcher(precColdQ,precipitationColdestQuarter);

switcher(airp_feed,airplanes_lf)
switcher(airp_ovr,airplanes_overall)