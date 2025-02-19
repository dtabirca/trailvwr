var gpxFile = "./trails/gabony/Traseu curent_ 04 IUN 2020 15_17.gpx";
var speed = 5;
var showLity = true;
var remarks = 
"<ul>" +
"<li>Add some notes here</li>" +
"</ul>";
var showFor = 3000;//ms
var elevAccuracy = 7;

var media = [
{'dist': 0.05,'file': 'gabony/P1130590.JPG','time':4000,'text':'stone bench'},
{'dist': 0.02,'file': 'gabony/P1130589.JPG','time':4000,'text':'entering the Gabony Stairs trail'},
{'dist': 0.15,'file': 'gabony/P1130593.JPG','time':4000,'text':'stairs'},
{'dist': 0.20,'file': 'gabony/P1130595.JPG','time':4000,'text':'100 stairs'},
{'dist': 0.30,'file': 'gabony/P1130597.JPG','time':4000,'text':'200 stairs'},
{'dist': 0.35,'file': 'gabony/P1130599.JPG','time':4000,'text':'300 stairs'},
{'dist': 0.40,'file': 'gabony/P1130601.JPG','time':4000,'text':'more stairs'},
{'dist': 0.45,'file': 'gabony/P1130604.JPG','time':4000,'text':'rocky path'},
{'dist': 0.50,'file': 'gabony/P1130608.JPG','time':4000,'text':'last handrail'},
{'dist': 0.55,'file': 'gabony/P1130614.JPG','time':4000,'text':'in the glade'},
{'dist': 0.62,'file': 'gabony/P1130616.JPG','time':4000,'text':'perfect place for a break'},
{'dist': 0.67,'file': 'gabony/P1130617.JPG','time':4000,'text':'footpath'},
{'dist': 0.75,'file': 'gabony/P1130622.JPG','time':4000,'text':'footpath'},
{'dist': 1.00,'file': 'gabony/P1130627.JPG','time':4000,'text':'antenna tower 1'},
{'dist': 1.10,'file': 'gabony/P1130628.JPG','time':4000,'text':'footpath'},
{'dist': 1.15,'file': 'gabony/P1130630.JPG','time':4000,'text':'footpath'},
{'dist': 1.20,'file': 'gabony/P1130635.JPG','time':4000,'text':'cable car building'},
{'dist': 1.25,'file': 'gabony/P1130636.JPG','time':4000,'text':'antenna tower 2'},
{'dist': 1.27,'file': 'gabony/P1130637.JPG','time':4000,'text':'to the best view point'},
{'dist': 1.45,'file': 'gabony/P1130641.JPG','time':4000,'text':'footpath'},
{'dist': 1.50,'file': 'gabony/P1130642.JPG','time':4000,'text':'almost there'},
{'dist': 1.55,'file': 'gabony/P1130643.JPG','time':4000,'text':'to the peak'},
{'dist': 1.60,'file': 'gabony/P1130646.JPG','time':4000,'text':'to the peak'},
{'dist': 1.64,'file': 'gabony/P1130647.JPG','time':4000,'text':'city view'},
{'dist': 1.65,'file': 'gabony/P1130651.JPG','time':4000,'text':'Tâmpa peak'},
{'dist': 1.70,'file': 'gabony/P1130659.JPG','time':4000,'text':'descending foothpath'},
{'dist': 1.75,'file': 'gabony/P1130660.JPG','time':4000,'text':'descending foothpath'},
{'dist': 1.85,'file': 'gabony/P1130663.JPG','time':4000,'text':'citadel ruins'},
{'dist': 1.90,'file': 'gabony/P1130666.JPG','time':4000,'text':'rocky path'},
{'dist': 2.00,'file': 'gabony/P1130676.JPG','time':4000,'text':'rocky path'},
{'dist': 2.05,'file': 'gabony/P1130677.JPG','time':4000,'text':'rocky path'},
{'dist': 2.15,'file': 'gabony/P1130679.JPG','time':4000,'text':'rocky path'},
{'dist': 2.31,'file': 'gabony/P1130681.JPG','time':4000,'text':'Tâmpa saddle'},
{'dist': 2.29,'file': 'gabony/P1130682.JPG','time':4000,'text':'end of the trail'}];