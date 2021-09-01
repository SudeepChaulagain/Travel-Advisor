import axios from "axios";

export const getPlacesData = async (type,sw,ne)=>{
    try{
       const { data: {data} } =  await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_latitude: ne.lat,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'b4a25c0d80mshd0cf3686f589b31p1f4eb5jsn24b6d7d402ce'
          }
       })
       return data
    }
    catch(error){
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng)=>{
  try{
   const {data} =  await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params:{
        lat:lat,
        lon: lng
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'b4a25c0d80mshd0cf3686f589b31p1f4eb5jsn24b6d7d402ce'
      }
    })
    return data
  }
  catch(error){

  }
}