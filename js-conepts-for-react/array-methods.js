const products = [
    {name:"laptop", brand:"lenovo",price:3200, color:"silver"},
    {name:"phone", brand:"iphone",price:500, color:"black"},
    {name:"watch", brand:"rolex",price:32000, color:"golden"},
    {name:"sunglass", brand:"rayban",price:320, color:"blue"},
    {name:"camera", brand:"canon",price:300, color:"gray"}
]

const brands = products.map(product=>product.brand)
//console.log(brands);

const prices = products.map(product=>product.price)
//console.log(prices);

//products.forEach(product=>console.log(product))
//products.forEach(product=>console.log(product.color))

// forEach in multiline 

products.forEach(product=>{

})

//filter
const cheap = products.filter(product=>product.price<=500)
//console.log(cheap);

const specificName = products.filter(product=>product.name.includes("n"))
//console.log(specificName);

//find
const special = products.find(p=>p.name.includes("n"))
console.log(special);