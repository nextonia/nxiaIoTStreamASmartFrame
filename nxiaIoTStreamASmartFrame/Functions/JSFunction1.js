// Sample UDF which returns sum of two values.
function timeformat(dt, levelTime) {
    'use strict';
    var d = new Date(dt)
    var dateformat = [d.getFullYear().toString().padStart(4, '0'),
    (d.getMonth() + 1).toString().padStart(2, '0'),
    d.getDate().toString().padStart(2, '0')
    ].join('-') + 'T'

    var dateTimeFormat = ''

    if (levelTime == 'min') {
        dateTimeFormat = [d.getHours().toString().padStart(2, '0'),
        d.getMinutes().toString().padStart(2, '0'), '00'].join(':');
    }
    else if (levelTime == 'hour') {
        dateTimeFormat = [d.getHours().toString().padStart(2, '0'), '00', '00'].join(':');
    }
    else {
        dateTimeFormat = [d.getHours().toString().padStart(2, '0'),
        d.getMinutes().toString().padStart(2, '0'),
        d.getSeconds().toString().padStart(2, '0')].join(':');
    }


    return dateformat + dateTimeFormat;
}

