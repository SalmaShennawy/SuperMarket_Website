const prodName = ['7 UP can 250ml', 'Coca Cola can 250ml', 'Fanta can 250ml', 'Orange juce box 200ml',
    'Apple juice 1L', 'Tropicana orange juice 1L', 'Nestle water bottle', 'Evian water 400ml', 'Large Nestle water 1L'];
const prodPrice = [5, 5, 5, 7, 12, 12, 5, 20, 12];
const prodImage = ['images/7-UP-can_1024x1024.jpg', 'images/coca_cola.jpg', 'images/fanta_orange.jpg', 'images/orange_pure.jpg',
    'images/apple_juice.jpg', 'images/Tropicana-Orange-Juice-Bottle-96-fl-oz-1-ct.jpg',
    'images/nestle_500ml(712x860)_0.jpg', 'images/Evian-Natural-Spring-Water-1L-61314000070.jpg', 'images/large_water.jpg'];
let x = "Quantity:";
let totalPrice=0;
let boolVis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let button="checkout";
let checkedBefore=0;
function cartDisplay() {
    console.log('sa7ara');
    let temp = localStorage.getItem('cart');
    let cart = emptyAndCast(temp); // TODO: LAMBDA FUN
    if(cart.length===0)
    {
        console.log(document.getElementById("cart-body"));
        document.getElementById("cart-body").style.backgroundImage = "url('images2/empty-cart.png')";
        document.getElementById("checkout-button").style.display = "none";
    }
    else
    {
        document.getElementById("checkout-button").style.display = "flex";

    }
    for (var j = 0; j < cart.length; j++) {
       i=cart[j];
        if(boolVis[i]===1)
        {
            
            continue;
        }
        boolVis[i]=1;
        totalPrice += prodPrice[i];

        var tag = document.createElement("div");
        tag.className = "shopping-cart";
        var imgTag = document.createElement("img");
        imgTag.src = prodImage[i];
        imgTag.className = "cart-images"
        tag.appendChild(imgTag);
        var mainDiv = document.createElement("div");
        mainDiv.className = "cart-products";
        tag.appendChild(mainDiv);
        var headTag = document.createElement("h3");
        var head = document.createTextNode(prodName[i]);
        headTag.appendChild(head);
        mainDiv.appendChild(headTag);
        var pTag = document.createElement("p");
        var p = document.createTextNode(prodPrice[i]);
        pTag.appendChild(p);
        mainDiv.appendChild(pTag);
        var formTag = document.createElement("form");
        var form = document.createTextNode(x);
        var inputTag = document.createElement("input");
        inputTag.className = "Quantity";
        inputTag.type = "number";
        inputTag.id=i;
        let tempi=i;
        inputTag.addEventListener("input", () => calc(prodPrice[tempi],tempi), false);
        console.log(i);
        console.log(prodPrice[i]);
        // inputTag.onchange=`calc(${prodPrice[i]})`;
        formTag.appendChild(form);
        formTag.appendChild(inputTag);
        mainDiv.appendChild(formTag);

        var element = document.getElementById("final-cart");
        element.appendChild(tag);

    }


}

function calc(price,quan) {
    


     if (document.getElementById(quan).value<=0)
    {

        quan=1;
    }
    if(document.getElementById(quan).value>=2){


        totalPrice-=price*(document.getElementById(quan).value-1);
        totalPrice+=price*(document.getElementById(quan).value);
    }
    

}
function checkout(){
    if(checkedBefore===0)
    {
        var tag = document.createElement("div");
        tag.className = "checkout-div";
        var mainDiv = document.createElement("div");
        mainDiv.className = "cart-products";
        tag.appendChild(mainDiv);
        var headTag = document.createElement("h3");
        var head = document.createTextNode("Total Price: " );
        headTag.appendChild(head);
        mainDiv.appendChild(headTag);
        var pTag = document.createElement("p");
        var p = document.createTextNode(totalPrice);
        pTag.appendChild(p);
        mainDiv.appendChild(pTag);
        var element = document.getElementById("cart-body");
        element.appendChild(tag);
        
        checkedBefore=1;

    }
 
    
    
}
function alertt(id) {
    
    
    alert('New product is added to the cart');
    const cartRaw = localStorage.getItem('cart');
    let cart = emptyAndCast(cartRaw); // TODO: LAMBDA FUN
    cart.push(id);
    localStorage.setItem('cart', cart);
    
}
function emptyAndCast(cartRaw) {
    return cartRaw === null ? [] : cartRaw.split(',').map(item => parseInt(item));
}