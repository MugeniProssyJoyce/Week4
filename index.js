const https = require("https");
console.log("Please Enter The  Number of The News Source:\n");
console.log("1. MTV News\n2. Yahoo.com\n3. Reuters\n4. bbc-news\n5. The New York Times");

process.stdin.once('data', (source_number)=>{

    var source_number = Number(source_number);

    function getNews () {

      const news_sources = {
        first: "mtv-news",
        second: "Yahoo.com",
        third: "Reuters",
        fourth: "bbc-news",
        fifth:"the-new-york-times"
      }
    if(source_number===1){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.first}&pageSize=10&apiKey=d2ea840d2a814a038a5c71d711eae224`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else if(source_number===2){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.second}&pageSize=10&apiKey=d2ea840d2a814a038a5c71d711eae224`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else if(source_number===3){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.third}&pageSize=10&apiKey=d2ea840d2a814a038a5c71d711eae224`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else if(source_number===4){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.fourth}&pageSize=10&apiKey=d2ea840d2a814a038a5c71d711eae224`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else if(source_number===5){
        const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.fifth}&pageSize=10&apiKey=d2ea840d2a814a038a5c71d711eae224`;
        https
          .get(url, response => {
            let data = "";
            response.on("data", news => {
            data += news;});
  
          response.on("end", () => {
              res = JSON.parse(data);
              console.log("Res", res);});
            })
  
          .on("error", err => {
            error = err;
            console.log("Error", err);})
      }
    else{
      console.log(' Enter a Valid input')
    }

    }
    console.log(getNews());
    })