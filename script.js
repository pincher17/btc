/* start=2013-09-01&end=2013-09-05 */
   

    async function getResponse() {
        
      /*   let params = new URLSearchParams({
            start: "2013-09-01",
            end: "2013-09-05"
        }); */
        let param1Sell2;
        let param1Sell;
        let param1;
        let bitc = document.getElementById('bitcoin');
        let date1 = document.getElementById("date1");
        let btn = document.getElementById("btn");
        let historicBtc = document.getElementById("historicBtc");
        let inputPrice = document.getElementById("inputPrice");
        let priceTextData = document.getElementById("priceTextData");

        let dateBuy = document.getElementById("dateBuy");
        let inputSumBuy = document.getElementById("inputSumBuy");
        let dateSell = document.getElementById("dateSell");
        let inputMoneyEnd = document.getElementById("inputMoneyEnd");
        let btnBuy = document.getElementById("btnBuy");

        let count = 0;

        async function getResponseData() {
        param1 = date1.value;
        let param2 = param1;
        
        let dataResponse = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json' + '?start=' + param1 + '&end=' + param2);
        let dataContent = await dataResponse.json();
        console.log(dataContent);
        inputPrice.value ='$ '+dataContent.bpi[param1];
        
       /*  while (true) {
            if(count === 0){
                
                historicBtc.insertAdjacentHTML('beforeend', `<p id="priceData">Стоимость биткоина ${param1}: ${content.bpi.USD.symbol} ${dataContent.bpi[param1]}</p>`);
                count+=1;
                inputPrice.value ='$ '+dataContent.bpi[param1];
                break;
            }else{
                
                let priceData = document.getElementById("priceData").remove();
                //priceData.innerHTML = '';
               // bitc.insertAdjacentHTML('beforeend', `<h2id="priceData"></h2id=>`);
                
                count-=1;
                continue;
                
            }
            
        } */
       
        
        
       };
       
       btn.addEventListener('click', getResponseData);
       
       
        
        
       let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      
       let content = await response.json();
       console.log(content);
        
        const b = `<h2>Каталог</h2>`;
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.bpi.USD.symbol} ${content.bpi.USD.rate}</h2>`);
        bitc.insertAdjacentHTML('afterEnd', `<h2>${content.time.updated}</h2>`);

        let currencyNow = content.bpi.USD.rate;



        async function getResponseSell() {
            param1Sell = dateBuy.value;
            let param2Sell = param1Sell;

            param1Sell2 = dateSell.value;
            let param2Sell2 = param1Sell2;


            let dataResponseSell = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json' + '?start=' + param1Sell + '&end=' + param2Sell);
            let dataContentSell = await dataResponseSell.json();
            console.log(dataContentSell);
           
            let dataResponseSell2 = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json' + '?start=' + param1Sell2 + '&end=' + param2Sell2);
            let dataContentSell2 = await dataResponseSell2.json();
            console.log(dataContentSell2);

           let pricePast = dataContentSell.bpi[param1Sell];
           let pricePast2 = dataContentSell2.bpi[param1Sell2];
           let sumBuy = inputSumBuy.value;
           let countMoneyPast = sumBuy / pricePast;
           let countMoneyNow = countMoneyPast *  pricePast2;
           inputMoneyEnd.value = '$' + countMoneyNow.toFixed(2);

            
        }

        btnBuy.addEventListener('click', getResponseSell);
        
    }
    getResponse();

/* 
    document.addEventListener('DOMContentLoaded', function() {
    }) */
       
        
        


