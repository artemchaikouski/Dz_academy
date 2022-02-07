const btn = document.querySelectorAll('.product button');
const counter = document.querySelector('.number');
const wrapNum = document.querySelector('.cart-inner');

btn.forEach(function(elem, index){
    console.log(elem, index)

    elem.addEventListener('click', function(){
        if (wrapNum.textContent !== '') {
            wrapNum.style.display = "block";
        }
        counter.textContent++
    })
})  