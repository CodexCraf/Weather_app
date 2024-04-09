const ApiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/51.1377%2C-114.1932/2024-04-08/2024-08-08?unitGroup=metric&key=UQ248B4XL7QFMETTR84ANG7S8&contentType=json';




document.getElementById("myButton").onclick = function () {
    // Check if weatherDiv already exists, remove it if it does
    const existingWeatherDiv = document.getElementById("weather");
    if (existingWeatherDiv) {
        existingWeatherDiv.remove();
    }





    fetch(ApiUrl)
        .then(res => {
            //Check Response if received or not
            if (!res.ok) {
                throw new Error('response not received')
            }
            return res.json();

        }).then((data) => {

            // extract data  DONE
            //add id for each elements and add description   DONE KINDA
            // check api for is i can add more info    NOT
            // temparature  DONE
            // gotta add css     NOT

            // putting this is a div so I can stlye it better
            const weatherDiv = document.createElement("div");
            weatherDiv.id = "weather";
            document.body.appendChild(weatherDiv);


            // current temperature
            const temp = document.createElement("p");
            temp.id = "temp";
            const temp_value = document.createTextNode(data.currentConditions.temp + "°C");
            temp.appendChild(temp_value);
            document.getElementById("weather").appendChild(temp);

            //weather conditions
            const conditions = document.createElement("p");
            conditions.id = "conditions"
            const conditions_value = document.createTextNode(data.currentConditions.conditions);
            conditions.appendChild(conditions_value);
            document.getElementById("weather").appendChild(conditions);

            // Sunrise for day
            const sunrise = document.createElement("p");
            sunrise.id = "sunrise"
            const sunrise_value = document.createTextNode("(MDT) " + data.currentConditions.sunrise);
            sunrise.appendChild(sunrise_value);
            document.getElementById("weather").appendChild(sunrise);

            // Sunset for day
            const sunset = document.createElement("p");
            sunset.id = "sunset"
            const sunset_value = document.createTextNode("(MDT) " + data.currentConditions.sunset);
            sunset.appendChild(sunset_value);
            document.getElementById("weather").appendChild(sunset);
        })
        .catch(error => {
            console.error('Error:', error);
        });




};