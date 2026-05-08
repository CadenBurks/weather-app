async function getReport(location) {
    let today = new Date();
    let endDate = new Date();
    endDate.setDate(today.getDate() + 5);

    const todayStr = today.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${todayStr}/${endDateStr}?unitGroup=us&include=days%2Ccurrent&key=QPG4XDQ9J8S6CKKUYN96DJBPV&contentType=json`);
        let data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("Error:", error.message);
    }
}

// I want: resolvedAddress of query. 
// Then, for each date: conditions, datetime, humidity, precipprob, preciptype, temp, tempmax, tempmin, windspeed
function transformData(data) {
    const location = data.resolvedAddress;
    const mapped = data.days.map((day) => {
        return {
            conditions: day.conditions,
            date: day.datetime,
            humidity: day.humidity,
            precipprob: day.precipprob,
            preciptype: day.preciptype,
            temp: day.temp,
            high: day.tempmax,
            low: day.tempmin,
            wind: day.windspeed
        }
    });

    return {location: location, current: mapped[0], forecasted: mapped.slice(1)}
}

export {getReport, transformData};