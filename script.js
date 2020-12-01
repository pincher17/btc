
    

    async function getResponse() {
        
        
       let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
       let dataResponse = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
       let dataContent = await dataResponse.json();
       let content = await response.json();
        console.log(content);
        console.log(dataContent);
        

        let bitc = document.getElementById('bitcoin');
        const b = `<h2>Каталог</h2>`;
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.bpi.USD.symbol} ${content.bpi.USD.rate}</h2>`);
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.time.updated}</h2>`);
        /* bitc.insertAdjacentHTML('afterEnd', `<h2>${dataContent.bpi["2020-11-04"]}</h2>`); */
    }
    getResponse();

/* 
    document.addEventListener('DOMContentLoaded', function() {
    }) */
       
        
        


