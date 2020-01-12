import * as moment from 'moment'

export function convertToReadable(data) {
    var result = []
    data.map(element => {
        const code = +moment({hour: element.time.hour, minute: element.time.minute})
        var index = 'false'

        for(var i = 0; i < result.length; i++) {
            if (result[i].timestamp === code) {
                index = i;
            }
        }

        if(index === 'false') { // not found, initialize
            var days1 =  [0, 0, 0, 0, 0, 0, 0]
            days1[element.time.dayOfWeek] = 1
            result.push({
                timestamp: code,
                days: days1
            })
        }
        else { // if found
            var days2 = result[index].days
            days2[element.time.dayOfWeek] = 1
            result[index] = {
                timestamp: code,
                days: days2

            }
        }
    })

    return result
}

export function convertToSendable(data) {
    var result = []
    data.map(element => {
        for(var i = 0; i < element.days.length; i++) {
            if(element.days[i]) result.push({
                time: {
                    hour: moment(element.timestamp).hour(),
                    minute: moment(element.timestamp).minute(),
                    dayOfWeek: i
                },
                compartment: 0,
            })
        }
    })

    return result
}