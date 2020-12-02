/* start=2013-09-01&end=2013-09-05 */
   

    async function getResponse() {
        
      /*   let params = new URLSearchParams({
            start: "2013-09-01",
            end: "2013-09-05"
        }); */
    
        let param1;
        let bitc = document.getElementById('bitcoin');
        let date1 = document.getElementById("date1");
        let btn = document.getElementById("btn");
        
        async function getResponseData() {
        param1 = date1.value;
        let param2 = param1;
        if(param1 != undefined ){
        let dataResponse = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json' + '?start=' + param1 + '&end=' + param2);
        let dataContent = await dataResponse.json();
        console.log(dataContent);
        bitc.insertAdjacentHTML('afterEnd', `<h2>Стоимость биткоина ${param1}: ${content.bpi.USD.symbol} ${dataContent.bpi[param1]}</h2>`);
        
        }
       };
       btn.addEventListener('click', getResponseData);
       
       
        
        
       let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      
       let content = await response.json();
       console.log(content);
        
        const b = `<h2>Каталог</h2>`;
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.bpi.USD.symbol} ${content.bpi.USD.rate}</h2>`);
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.time.updated}</h2>`);
        
    }
    getResponse();

/* 
    document.addEventListener('DOMContentLoaded', function() {
    }) */
       
        
        


