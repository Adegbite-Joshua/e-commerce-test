let productArrays = [
    {
        name: 'Shoe',
        price: '2500',
        image: 'data:image/jpeg;base64,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'
    },
    {
        name: 'Cap',
        price: '3500',
        image: 'data:image/jpeg;base64,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'
    },
    {
        name: 'Belt',
        price: '4500',
        image: 'data:image/jpeg;base64,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'
    },
    {
        name: 'Cup',
        price: '5500',
        image: 'https://th.bing.com/th?id=OIP.J6RnKob0CKStOo-AD1CZFAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
    },
    {
        name: 'Spoon',
        price: '6500',
        image: 'https://th.bing.com/th?id=OIP.JxDEcsSoMubZd3UqY3Jk0gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
    },
    
]

productArrays.map((item, index)=>{
    document.getElementById('productDisplay').innerHTML += `
    <div style="flex-basis: 22%; height: 250px;">
        <img class="w-100 h-50 rounded-3" src="${item.image}" alt="">
        <h3>Product Name: ${item.name}</h3>
        <p>Price: #${item.price}</p>
        <button class="btn btn-info" onclick='addToCart(${index})'>Add To Cart</button>
    </div>
    `
})

let savedCart = []

const showCart =()=>{
    document.getElementById('cartDisplay').innerHTML = ''
    let totalCartPrice = 0
    if (localStorage.savedCart) {
        savedCart = JSON.parse(localStorage.getItem('savedCart'))
    }
    
    if (savedCart.length>0) {
        savedCart.map((item, index)=>{
            document.getElementById('cartDisplay').innerHTML += `
            <div style="flex-basis: 22%;">
            <img class="w-100 h-50 rounded-3" src="${productArrays[item].image}" alt="">
            <h3>Product Name: ${productArrays[item].name}</h3>
            <p>Price: #${productArrays[item].price}</p>
            <button class="btn btn-info mt-2" onclick='deleteItem(${index})'>Delete Item</button>
            <button class="btn btn-info mt-2" onclick='checkout(${index})'>Checkout</button>
            </div>
            `
            totalCartPrice += Number(productArrays[item].price)
        })
    } else{
        document.getElementById('cartDisplay').innerHTML = `
        <p class='text-center bg-info p-3 rounded-4 w-100'>No Item In Your Cart </p>
        `
    }
    document.getElementById('cartTotalPrice').innerHTML = `#${totalCartPrice}`
    document.getElementById('totalCartItems').innerHTML = `${savedCart.length} items`
}
showCart()

const addToCart=(index)=>{
    savedCart.push(index)
    localStorage.setItem('savedCart', JSON.stringify(savedCart))
    showCart()
}

const deleteItem=(index)=>{
    alert(`You have succesfully delete ${productArrays[savedCart[index]].name} with Price # ${productArrays[savedCart[index]].price}`)
    savedCart.splice(index,1)
    localStorage.setItem('savedCart', JSON.stringify(savedCart))
    showCart()
}
const checkout=(index)=>{
    alert(`You have succesfully check out ${productArrays[savedCart[index]].name} with Price # ${productArrays[savedCart[index]].price}`)
    savedCart.splice(index,1)
    localStorage.setItem('savedCart', JSON.stringify(savedCart))
    showCart()
}