const data = require("./AccessKey.json")


function getData(){
    // var rate;
    let fetch_ = fetch(`http://data.fixer.io/api/latest?access_key=${data.key}`);
    let response_ = fetch_.then(response => response.json())
    let data_ = response_.then(data => {
            // const currency = document.querySelector('#currency').value.toUpperCase();
            rate = data.rates;
            Dropdown(rate);
        })
    
}

function Dropdown(rate) {
    // console.log(rate);
    for (let currency in rate){
        // console.log(currency);
        const dropdownElement = document.getElementById("dropdown");
        let newElement = document.createElement("option");
        newElement.text = currency;
        newElement.value = currency;
        dropdownElement.appendChild(newElement);
    }

    //setup another dropdown
    const dropdownElement = document.getElementById("dropdown");
    // const dropdown2 = document.getElementsByClassName("dropdown2");
    const dropdown2 = document.getElementById("dropdown2");
    let clone = dropdownElement.cloneNode(true);
    clone.id = "dropdownSecond";
    dropdown2.appendChild(clone);
}



//JS CODE STARTS WORKING
var rate;
getData();


document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector('form').onsubmit = function() {
        
        //USING DROPDOWNS
        const dropdownElements = document.getElementsByTagName("select");
        var from_= dropdownElements[0].value;
        // console.log(from_);
        var to_ = dropdownElements[1].value;
        // console.log(to_);
        var amount = document.getElementById("InputAmt").value;


            //LOGIC
            const inpCurrency_divide = rate[from_];
            const outCurrency = rate[to_];

            // console.log(inpCurrency_divide);
            // console.log(outCurrency);

            const result = (amount/inpCurrency_divide)*outCurrency;
            const afterConvert = result.toFixed(3);
            // console.log(result.toFixed(3));

            //changing DOM
            document.querySelector("#OutputAmt").placeholder= afterConvert;
        // })


        return false;
    }
})