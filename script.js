let btn = document.querySelectorAll('.product button');
let caunter = document.querySelector('.number');
let wrapNum = document.querySelector('.cart-inner');

btn.forEach(function(elem, index){
    console.log(elem, index)

    elem.addEventListener('click', function(){
        if (wrapNum.textContent !== '') {
            wrapNum.style.display = "block";
        }
        caunter.textContent++
    })
})  