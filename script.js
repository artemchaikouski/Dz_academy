const btn = document.querySelectorAll('.product button');
const counter = document.querySelector('.number');
const wrapNum = document.querySelector('.cart-inner');
let counterlocalStorage;

btn.forEach(function(elem){
    elem.addEventListener('click', function(){
        if (!wrapNum.textContent !== '') {
            wrapNum.style.display = "block";
        }

        localStorage.setItem('basket', ++counterlocalStorage);
        counter.textContent = localStorage.getItem('basket');
    })
})

counterlocalStorage = localStorage.getItem('basket');

if (localStorage.getItem('basket')) {
    wrapNum.style.display = "block";
    counter.textContent = counterlocalStorage;
} else {
    console.log('localStorage empty')
}
