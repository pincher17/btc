/* start=2013-09-01&end=2013-09-05 */
   

    async function getResponse() {
        
      /*   let params = new URLSearchParams({
            start: "2013-09-01",
            end: "2013-09-05"
        }); */
    
        let param1;
        let date1 = document.getElementById("date1");
        let btn = document.getElementById("btn");
    let rec = () => {
        param1 = date1.value;
        
       };
       btn.addEventListener('click', rec);
       
       
        let paramG = '2013-09-01';
        let param2 = paramG;
        
       let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
       let dataResponse = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json' + '?start=' + paramG + '&end=' + param2);
      
       let dataContent = await dataResponse.json();
       let content = await response.json();
        console.log(content);
        console.log(dataContent);
       
        

        let bitc = document.getElementById('bitcoin');
        const b = `<h2>Каталог</h2>`;
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.bpi.USD.symbol} ${content.bpi.USD.rate}</h2>`);
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.time.updated}</h2>`);
        bitc.insertAdjacentHTML('afterEnd', `<h2>${dataContent.bpi["2013-09-01"]}</h2>`);
    }
    getResponse();

/* 
    document.addEventListener('DOMContentLoaded', function() {
    }) */
       
        
        


