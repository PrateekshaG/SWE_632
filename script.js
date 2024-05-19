let products = [
    {
        id: 1,
        name: 'Stretch Armstrong Figure',
        image: './images/armstrong.jpg',
        price: 34.99,
        category: 'VintageToys',
        description: "The original Stretch Armstrong returns! You can stretch his arms, legs, and torso up to four times his size - he will always go back to his original shape!",
        page: 'armstrong_figure_vintage_toy.html',
        quantity: 0
    },
    {
        id: 2,
        name: 'Battleship Game Retro Series 1967 Edition',
        image: './images/battleship.jpg',
        price: 24.99,
        category: 'VintageGames',
        description: 'This classic battleship game lets players hold head-to-head naval battles. Includes two game kits, two fleets of ships, and two sets of marker pegs.',
        page: 'battleship_vintage_game.html',
        quantity: 0
    },
    {
      id: 3,
      name: 'The Chameleon',
      image: './images/chameleon.jpg',
      price: 21.99,
      category: 'Games',
      description: 'A sneaky family board game of social deduction where players must race to catch the chameleon before it is too late. Everyone knows the secret word—except for the player with the chameleon card!',
      page: 'chameleon_game.html',
      quantity: 0
    },
    {
      id: 4,
      name: 'Retro Series Clue 1986 Edition',
      image: './images/clue.jpg',
      price: 21.99,
      category: 'VintageGames',
      description: 'This murder mystery is the perfect game for your next family night! If you are right about the location, weapon, and suspect, you win!',
      page: 'clue_vintage_game.html',
      quantity: 0
    },
    {
      id: 5,
      name: 'Codenames',
      image: './images/codenames.jpg',
      price: 19.95,
      category: 'Games', 
      description: 'Work together to contact all of your agents before the other team!',
      page: 'codenames_game.html',
      quantity: 0
    },
    {
      id: 6,
      name: 'Gabbys Dollhouse Purrfect Dollhouse Playset',
      image: './images/dollhouse.jpg',
      price: 59.99,
      category: 'Toys', 
      description: 'This playset contains 4 floors and 7 rooms, 8 furnitue pieces, and plays music, sounds, and phrases! It is the perfect setting for ultimate play adventures!',
      page: 'dollhouse_toy.html',
      quantity: 0
    },
    {
      id: 7,
      name: 'Exploding Kittens',
      image: './images/kittens.jpg',
      price: 20.00,
      category: 'Games', 
      description: 'The hit party game for family and friends who are into kittens and explosions and laser beams and sometimes goats. If you draw an Exploding Kitten, you lose and you are full of loser sad-sauce. All the other cards in the deck help you avoid or mitigate your risk of drawing an Exploding Kitten. If you do not explode, YOU WIN!',
      page: 'kittens_game.html',
      quantity: 0
    },
    {
      id: 8,
      name: 'Lincoln Logs - Collectors Edition Village',
      image: './images/logs.jpg',
      price: 109.99,
      category: 'VintageToys', 
      description: 'This set allows for children to use their creativity to build a diverse range of log cabin models. The set is made up of 327 beautifully stained real wood pieces. The classic-style tin allows for easy cleanup and tidy storage',
      page: 'logs_vintage_toy.html',
      quantity: 0
    },
    {
      id: 9,
      name: 'Play-Doh Sparkle Compound Collection',
      image: './images/playdoh.jpg',
      price: 6.99,
      category: 'Toys', 
      description: 'This Play-Doh set contains 6 sparkly colors and 2 cutters to let your little artist unleash their creativity!',
      page: 'playdoh_toy.html',
      quantity: 0
    },
    {
      id: 10,
      name: 'Retro Slinky Dog - The Original Walking Spring Toy',
      image: './images/slinky.jpg',
      price: 24.99,
      category: 'VintageToys', 
      description: 'Celebrate 75 years of jiggly wiggly fun with the Retro Slinky Dog! Packaged in the original Slinky packaging',
      page: 'slinky_vintage_toy.html',
      quantity: 0
    },
    {
      id: 11,
      name: 'Fisher-Price Triceratops Ball Popper Pull Toy',
      image: './images/triceratops.jpg',
      price: 26.99,
      category: 'Toys', 
      description: 'This interactive dinosaur ball popper pull-toy has lights and 40+ songs, sounds, and phrases. Children can push or pull the triceratops and hear popping sounds.',
      page: 'triceratops_toy.html',
      quantity: 0
    },
    {
      id: 12,
      name: 'Classic Yahtzee',
      image: './images/yahtzee.jpg',
      price: 12.99,
      category: 'VintageGames', 
      description: 'This game is one of the most popular dice games since its introduction in the 1950s. While luck plays a big role in Yahtzee, strategy makes a huge difference!',
      page: 'yahtzee_vintage_game.html',
      quantity: 0
    },
];
var listCarts= [null, null, null, null, null, null, null, null, null, null, null, null];
let quantity = document.querySelector('.quantity');
let cart = document.querySelector('body .cart .table tbody');
let total = document.querySelector('.total');
let counter= document.querySelector('.counter');

for (let i of products) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement("div");
  container.classList.add("container");
  let pname = document.createElement("a");
  pname.classList.add("product-name");
  pname.innerText = i.name.toUpperCase(); 
  pname.setAttribute("href", i.page); 
  container.appendChild(pname);
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

window.onload = () => {
  filterProduct("all");
  let count =0;
  listCarts.forEach(i =>{
    if (i != null){
      count = count + i.quantity;
    }
  })
  counter.innerText = count;
};

updateCartCount();
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});


function addToCart(key){
  listCarts=JSON.parse(localStorage.getItem('list'));
  if (listCarts==null){
    listCarts= [null, null, null, null, null, null, null, null, null, null, null, null];
  }
  //if(listCarts[key] == null){
      listCarts[key] = JSON.parse(JSON.stringify(products[key]));
      var newQuantity = document.getElementById("quantity");
      var value = parseFloat(newQuantity.value);
     // if (listCarts[key].quantity !=null){
      var currentQuantity = parseFloat(listCarts[key].quantity);
      listCarts[key].quantity= currentQuantity + value;
     // }
    //  else{
     //   listCarts[key].quantity = value;
     // }
      
 // }
  firstItem=false;
  window.alert("Item was added to the Cart!");
  localStorage.setItem('list', JSON.stringify(listCarts));
  console.log(listCarts);
  updateCartCount();
}

function updateCartCount(){
  listCarts=JSON.parse(localStorage.getItem('list'));
  let count =0;
  listCarts.forEach(i =>{
    if (i != null){
      count = count + i.quantity;
    }
  })
  counter.innerText = count;
}

function reloadCart(){
  cart.innerHTML = '';
  let totalPrice = 0;
  let count = 0;
  cart.innerHTML='';
  listCarts.forEach(i =>{
    if (i != null){
    totalPrice = totalPrice + i.price;
    totalPrice = parseFloat(totalPrice.toFixed(2));
    count = count + i.quantity;
    let row = document.createElement("tr");
    row.innerHTML= `
    <td>${i.name}</td>
    <td>
        <button onclick="changeQuantity(${i.id-1}, ${i.quantity - 1})">-</button> 
        ${i.quantity}
        <button onclick="changeQuantity(${i.id-1}, ${i.quantity + 1})">+</button>
    </td>
    <td>$${i.price}</td>`;

    cart.appendChild(row);
    }
  })
  total.innerText = "Total: $"+totalPrice.toLocaleString();
  counter.innerText = count;
}

function changeQuantity(key, quantity){
  if(quantity == 0){
      delete listCarts[key];
  }else{
      listCarts[key].quantity = quantity;
      let tempPrice = quantity * products[key].price;
      listCarts[key].price = parseFloat(tempPrice.toFixed(2));
  }
  localStorage.setItem('list', JSON.stringify(listCarts));
  reloadCart();
}

function initialLoadCart(){
  listCarts=JSON.parse(localStorage.getItem('list'));
  let totalPrice = 0;
  let count = 0;
  cart.innerHTML='';
  listCarts.forEach(i =>{
    if (i != null){
      totalPrice = totalPrice + i.price;
      count = count + i.quantity;
      let row = document.createElement("tr");
      row.innerHTML= `
      <td>${i.name}</td>
      <td>
          <button onclick="changeQuantity(${i.id-1}, ${i.quantity - 1})">-</button> 
          ${i.quantity}
          <button onclick="changeQuantity(${i.id-1}, ${i.quantity + 1})">+</button>
      </td>
      <td>$${i.price}</td>`;

      cart.appendChild(row);
    }
  });
  total.innerText = "Total: $"+ totalPrice.toLocaleString();
  counter.innerText = count;
}

