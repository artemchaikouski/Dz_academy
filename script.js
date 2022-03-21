async function loadData() {
    const dataFile = await fetch('https://raw.githubusercontent.com/VitaliyPolyashov/classes/master/shop-data/data.json');
    const books = await dataFile.json();
    
    const root = document.createElement('div');
    root.classList.add('section');
    document.body.appendChild(root);

    const wrapperRoot = document.createElement('div');
    wrapperRoot.classList.add('wrapper-section');
    root.appendChild(wrapperRoot);
    
    for (let i = 0; i < books.length; i++) {
        const div = document.createElement('div');
        div.classList.add('product');
        const image = document.createElement('img');
        image.classList.add('image')
        image.src = books[i].image;
        div.appendChild(image);
        const title = document.createElement('div');
        title.classList.add('text-card')
        title.textContent = books [i].title;
        div.appendChild(title);
        const button = document.createElement('button');
        button.classList.add('button-cart');
        button.textContent = 'В корзину';
        div.appendChild(button);

        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('wrapper-product');
        wrapperDiv.appendChild(div);

        wrapperRoot.appendChild(wrapperDiv);
    }

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
        console.log('localStorage empty');
    }
}

loadData();