var wms_layers = [];


        var lyr_OpenStreetMapfr_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap.fr',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, under ODbL</a>',
                url: 'http://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            })
        });
var format_regions20180101_1 = new ol.format.GeoJSON();
var features_regions20180101_1 = format_regions20180101_1.readFeatures(json_regions20180101_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions20180101_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regions20180101_1.addFeatures(features_regions20180101_1);
var lyr_regions20180101_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regions20180101_1, 
                style: style_regions20180101_1,
                interactive: false,
                title: '<img src="styles/legend/regions20180101_1.png" /> regions-20180101'
            });
var format_Listingdesservicesparrsidences_2 = new ol.format.GeoJSON();
var features_Listingdesservicesparrsidences_2 = format_Listingdesservicesparrsidences_2.readFeatures(json_Listingdesservicesparrsidences_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Listingdesservicesparrsidences_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Listingdesservicesparrsidences_2.addFeatures(features_Listingdesservicesparrsidences_2);
var lyr_Listingdesservicesparrsidences_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Listingdesservicesparrsidences_2, 
                style: style_Listingdesservicesparrsidences_2,
                interactive: true,
                title: '<img src="styles/legend/Listingdesservicesparrsidences_2.png" /> Listing des services par r??sidences'
            });

lyr_OpenStreetMapfr_0.setVisible(true);lyr_regions20180101_1.setVisible(true);lyr_Listingdesservicesparrsidences_2.setVisible(true);
var layersList = [lyr_OpenStreetMapfr_0,lyr_regions20180101_1,lyr_Listingdesservicesparrsidences_2];
lyr_regions20180101_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_Listingdesservicesparrsidences_2.set('fieldAliases', {'D??nomination': 'Residence', 'Adresse': 'Adresse', 'Y': 'Y', 'X': 'X', 'Code Postal': 'CP', 'Ville': 'Ville', 'Nombre de logements': 'NB_Log', 'Service_Animateur / Responsable R??sidence': 'Service_Animateur', 'Service_Interphone': 'Service_Interphone', 'Service_Vid??osurveillance': 'Service_Vid??osurveillance', 'Service_Pr??t de mat??riel': 'Service_Pret_Mat', 'Service_Acc??s Internet': 'Service_Internet', 'Service_Local Poubelles': 'Service_Poubelles', 'Service_Buanderie sans monnayeur': 'Service_Buanderie', 'Optionnel_Caf??t??riat avec Service de Petit d??jeuner': 'Optionnel_Caf??t??riat avec Service de Petit d??jeuner', 'Optionnel_Local V??lo': 'Optionnel_Local V??lo', 'Optionnel_Salle TV / D??tente': 'Optionnel_Salle TV / D??tente', 'Optionnel_Salle d\'Etude / Coworking': 'Optionnel_Salle d\'Etude / Coworking', 'Optionnel_Salle de sport': 'Optionnel_Salle de sport', 'Optionnel_Espace Wellness': 'Optionnel_Espace Wellness', });
lyr_regions20180101_1.set('fieldImages', {'code_insee': 'Hidden', 'nom': 'Hidden', 'nuts2': 'Hidden', 'wikipedia': 'Hidden', 'surf_km2': 'Hidden', });
lyr_Listingdesservicesparrsidences_2.set('fieldImages', {'D??nomination': 'TextEdit', 'Adresse': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Code Postal': 'TextEdit', 'Ville': 'TextEdit', 'Nombre de logements': 'TextEdit', 'Service_Animateur / Responsable R??sidence': 'CheckBox', 'Service_Interphone': 'CheckBox', 'Service_Vid??osurveillance': 'CheckBox', 'Service_Pr??t de mat??riel': 'CheckBox', 'Service_Acc??s Internet': 'CheckBox', 'Service_Local Poubelles': 'CheckBox', 'Service_Buanderie sans monnayeur': 'CheckBox', 'Optionnel_Caf??t??riat avec Service de Petit d??jeuner': 'CheckBox', 'Optionnel_Local V??lo': 'CheckBox', 'Optionnel_Salle TV / D??tente': 'CheckBox', 'Optionnel_Salle d\'Etude / Coworking': 'CheckBox', 'Optionnel_Salle de sport': 'CheckBox', 'Optionnel_Espace Wellness': 'CheckBox', });
lyr_regions20180101_1.set('fieldLabels', {});
lyr_Listingdesservicesparrsidences_2.set('fieldLabels', {'D??nomination': 'inline label', 'Adresse': 'inline label', 'Code Postal': 'inline label', 'Ville': 'inline label', 'Nombre de logements': 'inline label', 'Service_Animateur / Responsable R??sidence': 'inline label', 'Service_Interphone': 'inline label', 'Service_Vid??osurveillance': 'inline label', 'Service_Pr??t de mat??riel': 'inline label', 'Service_Acc??s Internet': 'inline label', 'Service_Local Poubelles': 'inline label', 'Service_Buanderie sans monnayeur': 'inline label', 'Optionnel_Caf??t??riat avec Service de Petit d??jeuner': 'inline label', 'Optionnel_Local V??lo': 'inline label', 'Optionnel_Salle TV / D??tente': 'inline label', 'Optionnel_Salle d\'Etude / Coworking': 'inline label', 'Optionnel_Salle de sport': 'inline label', 'Optionnel_Espace Wellness': 'inline label', });
lyr_Listingdesservicesparrsidences_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});