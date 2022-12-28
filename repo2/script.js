const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fadb7378aamshb4a583d05a92aa4p18c1d0jsn51f5aa5c4394',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ghaziabad', options)
	.then(response => response.json())
	.then(response => 
        {
            console.log(response))
        }
        
        
        
        
        
	.catch(err => console.error(err));