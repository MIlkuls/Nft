'use strict'

const Nft = {
   object:[
     {
        price:'4500 usdt',
        img: 'img/nftmonkey.png',
        name: 'Monkey'
     },
     {
        price:'450 usdt',
        img: 'img/nftmonkey.png',
        name: 'Monkey'
     },
     {
      price:'450 usdt',
      img: 'img/nftmonkey.png',
      name: 'Monkey'
   }, {
      price:'450 usdt',
      img: 'img/nftmonkey.png',
      name: 'Monkey'
   }
    ]
}

const NftBox = document.querySelector('.row '),
      BtnBuy = document.querySelector('.btn'),
      Modal = document.querySelector('.modal'),
      InputName = document.querySelector('#input-name'),
      InputNumber = document.querySelector('#input-number'),
      BtnSubmit = document.querySelector('.btn-submit');
     
console.log(InputName)
function createNFT (nft,parent){
parent.innerHTML=''

   nft.forEach((el) => {
      parent.innerHTML += 
      `<div class="col-4">
        <div class="course-item">
         <a href="#" class="course-img text-center">
            <img src="${el.img}" alt="${el.name}">
         </a> 
         <h6 class="course-title text-uppercase"><a href="#">${el.name}</a></h6>
         <div class="course-price text-right">
            <span>${el.price}</span>
         </div>

     </div>`
    
   });
}
createNFT(Nft.object,NftBox);

BtnBuy.addEventListener('click', (e)=>{
   e.preventDefault();
    Modal.classList.add('open');
})
BtnSubmit.addEventListener('click', (e)=>{
   e.preventDefault();
if(InputName.value && InputNumber.value){
   InputName.value = '';
   InputNumber.value = '';
   Modal.classList.remove('open') ;           
}
})


