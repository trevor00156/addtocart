
let shopping_cart=document.querySelector('.shopping_cart')

let storeditems= JSON.parse(localStorage.getItem('data'))||[]; 


//function to calculate cart icon count

let addtocarticon_calculate=()=>{

  let calculate=document.querySelector('.carticon');
  if(calculate){
    calculate.innerHTML=storeditems.length;
  }


};

//function to generate cart items 

let generateshop=()=>{

  if(storeditems.length===0){
    return shopping_cart.innerHTML="`<p> your cart is empty</p>`";
  }
  else{
  
        shopping_cart.innerHTML= storeditems.map((x)=>{

       let {id,name,price,desc,img}=x

  

        return `

       <div class="item_generated">

          <div class='item-img'><img src="${img}"></div>
          <div class='item-id'>${id}</div>
          <div class='item-name'>${name}</div>
          <div class='item-price'>${price}</div>
          <div class='item-desc'>${desc}</div>
          <button class="remove_button">Remove</button>

        </div>

    `
  } ) }


}
 
 
  addtocarticon_calculate();
  generateshop();
