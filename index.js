let items=document.querySelector('.shopitems');
 
let storeditems= JSON.parse(localStorage.getItem('data'))||[]; 



let generateshop=()=>{
  
  items.innerHTML= shopItemsData.map((x)=>{

    let {id,name,price,desc,img}=x

  

    return `

    <div class="generated-items">

    <div class='item-img'><img src="${img}"></div>
    <div class='item-id'>${id}</div>
    <div class='item-name'>${name}</div>
    <div class='item-price'>${price}</div>
    <div class='item-desc'>${desc}</div>

    <button class="addtocart-button" onclick="addtocartitems('${id}','${name}','${img}',  '${price}','${desc}'); addtocarticon_calculate()">add to cart</button>
    </div>
    

    
   
    
    
    
    `
  })
  
  




}

//function to add items to the cart 


let addtocartitems=(id,name,price,desc,img)=>{

storeditems.push(
  {
    'id':id,
   'name':name,
   'price':price,
   'desc':desc,
   'img':img,
  }

)

//save to local storage
localStorage.setItem('data',JSON.stringify(storeditems));

//update cart icon count 
addtocarticon_calculate();


  
return console.log(id, name, price, desc , img);






};

// function to calculate cart icon
let addtocarticon_calculate=()=>{

  let calculate=document.querySelector('.carticon');
  if(calculate){
    calculate.innerHTML=storeditems.length;
  }


};

generateshop();
addtocarticon_calculate();



