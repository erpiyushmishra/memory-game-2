const cardArray = [
  {
    name: 'fries',
    img: './images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: './images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: './images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: './images/pizza.png'
  },
  {
    name: 'milkshake',
    img: './images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: './images/hotdog.png'
  },
  {
    name: 'fries',
    img: './images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: './images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: './images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: './images/pizza.png'
  },
  {
    name: 'milkshake',
    img: './images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: './images/hotdog.png'
  }
]

const cards=[]
let cardsChosen=[]
let cardsChosenId=[]
const result=document.querySelector("#result")
const wonArray=[]

cardArray.sort(function() {
  return .5-Math.random()
})
console.log(cardArray)
createCards()

function createCards(){
  for (i=0; i<cardArray.length; i++){
    const img_element=document.createElement('img')
    img_element.setAttribute('src','./images/blank.png')
    img_element.setAttribute('data_id',i)
    img_element.addEventListener('click', cardClicked)
    cards.push(img_element)
    document.querySelector('.grid').appendChild(img_element)
  }
}

// createCards()

function checkAnswer(){
  if (cardsChosenId[0]===cardsChosenId[1]){
    cards[cardsChosenId[0]].setAttribute("src","./images/blank.png")
    cards[cardsChosenId[1]].setAttribute("src","./images/blank.png")
    alert("You have clicked same card twice.")
  }


  else if (cardsChosen[0]===cardsChosen[1]){
    alert("You found a match.")
    cards[cardsChosenId[0]].setAttribute("src","./images/white.png")
    cards[cardsChosenId[1]].setAttribute("src","./images/white.png")
    cards[cardsChosenId[0]].removeEventListener('click', cardClicked)
    cards[cardsChosenId[1]].removeEventListener('click', cardClicked)
    wonArray.push(cardsChosen)
    result.textContent=wonArray.length
    if (wonArray.length===cardArray.length/2){
      result.textContent="Congratulation! You have matched the all cards."
    }
  }else{
    alert("These cards are not same. Try again")
    cards[cardsChosenId[0]].setAttribute("src","./images/blank.png")
    cards[cardsChosenId[1]].setAttribute("src","./images/blank.png")
  }
  
  console.log(wonArray)
  cardsChosen=[]
  cardsChosenId=[]
  
}

function cardClicked(){
  const cardId=this.getAttribute('data_id')
  cards[cardId].setAttribute('src',cardArray[cardId].img)
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  if (cardsChosen.length===2){
    setTimeout(checkAnswer, 500)
  }
}
  