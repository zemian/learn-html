var req = require("request");
var fs = require("fs");
var img = "https://www.google.com/logos/doodles/2019/labor-day-2019-united-states-5919291772764160-2x.png";
req.get(img).pipe(fs.createWriteStream('doodle.png'));
