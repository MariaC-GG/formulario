let btn = document.querySelector('#btn')
let res = document.getElementById('#res')
let prod_array = []
let qtd_array = []


btn.addEventListener('click',()=>{
    let produto = document.querySelector('#produto').value
    let qtd = document.querySelector('#qtd').value
    res.innerHTML = '<br>' + produto + ' quantidade =' + qtd + 'kg'
    // res.innerHTML = '<br>' + qtd
})