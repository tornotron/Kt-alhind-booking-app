import React, { useState } from 'react'
import Axios from 'axios'


const Flightsearch = () => {
    const url="http://202.83.54.148/Api/webapi/GetAvailability?type=josn"
    const [data, setData]=useState({
        UserId:"",
        Password:"",
        Origin:"",
        Destination:"",
        OnwardDate:"",
        ReturnDate:"",
        Adult:"",
        Child:"",
        Infant:"",
        TripMode:"",
        TravelType:"",
        OriginNation:"",
        DestinationNation:"",
        Classes:""
    })

    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata);
    
    }

    function submit(e){
      e.preventDefault();
      Axios.post(url,{
        UserId:data.UserId,
        Password:data.Password,
        Origin:data.Origin,
        Destination:data.Destination,
        OnwardDate:data.OnwardDate,
        ReturnDate:data.ReturnDate,
        Adult:data.Adult,
        Child:data.Child,
        Infant:data.Infant,
        TripMode:data.TripMode,
        TravelType:data.TravelType,
        OriginNation:data.OriginNation,
        DestinationNation:data.DestinationNation,
        Classes:data.Classes
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      
    }






  return (
    <div>
        <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e)=> handle(e)} id="UserId" value={data.UserId} placeholder="UserId" type="text"></input>
            <input onChange={(e)=> handle(e)} id="Password" value={data.Password} placeholder="Password" type="text"></input>
            <input onChange={(e)=> handle(e)} id="Origin" value={data.Origin} placeholder="Origin" type="text"></input>
            <input onChange={(e)=> handle(e)} id="Destination" value={data.Destination} placeholder="Destination" type="text"></input>
            <input onChange={(e)=> handle(e)} id="OnwardDate" value={data.OnwardDate} placeholder="OnwardDate" type="text"></input>
            <input onChange={(e)=> handle(e)} id="ReturnDate" value={data.ReturnDate} placeholder="ReturnDate" type="text"></input>
            <input onChange={(e)=> handle(e)} id="Adult" value={data.Adult} placeholder="Adult" type="number"></input>
            <input onChange={(e)=> handle(e)} id="Child" value={data.Child} placeholder="Child" type="number"></input>
            <input onChange={(e)=> handle(e)} id="Infant" value={data.Infant} placeholder="Infant" type="number"></input>
            <input onChange={(e)=> handle(e)} id="TripMode" value={data.TripMode} placeholder="TripMode" type="text"></input>
            <input onChange={(e)=> handle(e)} id="TravelType" value={data.TravelType} placeholder="TravelType" type="text"></input>
            <input onChange={(e)=> handle(e)} id="OriginNation" value={data.OriginNation} placeholder="OriginNation" type="text"></input>
            <input onChange={(e)=> handle(e)} id="Classes" value={data.Classes} placeholder="Classes" type="text"></input>
            <button>Submit</button>
        </form>



    </div>
  )
}

export default Flightsearch