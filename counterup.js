// Counterup js code start here
let counterup = document.querySelectorAll(".counterup");
let counterupConvert = Array.from(counterup);

counterupConvert.map((item)=>{
    let count = 0;
    let counter = ()=>{
        count++;
        item.innerHTML = count;
        if (count == item.dataset.number) {
            clearInterval(timing);
        }
    }

    let timing = setInterval(() => {
        counter();
    }, item.dataset.time);
    
});
// Counterup js code end here

