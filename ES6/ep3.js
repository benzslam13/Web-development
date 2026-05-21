//array reduce

const cart = [
        {name: "Bag",price:500},
        {name: "Book",price:200},
        {name: "Camera",price:300},

]

// const mapData = data.map(e=>100)
// const filterData = data.filter(e=>e>20)

// console.log(filterData)

const summation = cart.reduce((value,e)=>e.price+value,0)


console.log(`Must paid = ${summation} Baht`);