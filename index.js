const express=require("express");
const https=require("https");
const bodyParser=require(body-parser);
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
    });
    app.post("/",function(req,res){
        const query=res.body.cityName;
        const apiKey="5d17f74877f56f3a4ded6b6330be8b95";
        const unit="metric"
        const url="https://api.openweathermap.org/data/2.5/weather?q="  + query + "&appid=5d17f74877f56f3a4ded6b6330be8b95"
    })
    const url="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid5d17f74877f56f3a4ded6b6330be8b95"
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData=JSON.parse(data)
            const temp=weatherData.parse(data)
            const weatherDescription=weatherData.weather[0].weatherDescription
            const icon=weatherDate.weather[0].icon
            const imageURL="https://img.icons8.com/dotty/2x/cloud.png" + icon + ""
            res.write("<p>The weather is currently"+ weatherDescription + "<p>");
            res.write("<h1> the tempreature is Delhi" + temp + "degree Celcius.</h1>");
            res.send()
        });

    });
})
app.listen(3000,function(){
  console.log("Server is the running on port 3000");
});
