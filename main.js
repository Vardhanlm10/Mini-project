let screen = document.getElementById('screen');
dishes = document.querySelectorAll('button');
let screenValue = 0;
let coffee = document.getElementById('coffee');
let tea = document.getElementById('tea');
let soup = document.getElementById('soup');
let rice = document.getElementById('rice');
let bread = document.getElementById('bread');
let donuts = document.getElementById('donuts');
let omelet = document.getElementById('omelet');
let milk = document.getElementById('milk');
let salad = document.getElementById('salad');
let pie = document.getElementById('pie');
let brownie = document.getElementById('brownie');
let orderc = 0;
let orders = 0;
let orderm = 0;
let orderb = 0;
let orderr = 0;
let ordert = 0;
let orderd = 0;
let ordero = 0;
let ordersd = 0;
let orderp =0;
let orderbr = 0;
function totalbill(x){
  let options = [{name:"Coffee",price:100},{name:"Tea",price:90},{name:"Salad",price:150},
{name:"Milk",price:80},{name:"Tomato Soup",price:120},{name:"Brownie",price:160},{name:"Apple Pie",price:180},
{name:"Donuts",price:120},{name:"Bread Butter",price:130},{name:"Omelet",price:120},{name:"Rice",price:150}]
for(i=0;i<11;i++){
  if(options[i].name==x){
    screenValue += options[i].price;
  }
}
}
for (dish of dishes){
  dish.addEventListener('click',(e)=>{
    buttonText = e.target.innerText;
    console.log("buttonText is ",buttonText);
    totalbill(buttonText);
    if(buttonText=='Coffee'){
      orderc+=1;
      coffee.value = orderc;
      }
    else if(buttonText=='Tea'){
      ordert+=1;
      tea.value = ordert;
      }
    else if(buttonText=='Salad'){

      ordersd+=1;
      salad.value = ordersd;

      }
    else if(buttonText=='Milk'){
      orderm+=1;
      milk.value = orderm;

      }
    else if(buttonText=='Omelet'){

      ordero+=1;
      omelet.value = ordero;

      }
    else if(buttonText=='Bread Butter'){

      orderb+=1;
      bread.value = orderb;

      }
    else if(buttonText=='Tomato Soup'){

      orders+=1;
      soup.value = orders;

      }
    else if(buttonText=='Rice'){

      orderr+=1;
      rice.value = orderr;

      }
    else if(buttonText=='Brownie'){

      orderbr+=1;
      brownie.value = orderbr;

      }
    else if(buttonText=='Apple Pie'){

      orderp +=1;
      pie.value = orderp;

      }
    else if(buttonText=='Donuts'){

      orderd+=1;
      donuts.value = orderd;

      }
      else if(buttonText=='Place your Order'){
        screen.value = screenValue;
        }
      else if(buttonText=='Cancel'){
        orderc = 0;
        orders = 0;
       orderm = 0;
       orderb = 0;
       orderr = 0;
       ordert = 0;
       orderd = 0;
       ordero = 0;
       ordersd = 0;
       orderp =0;
       orderbr = 0;
       donuts.value = orderd;
       pie.value = orderp;
       brownie.value = orderbr;
       coffee.value = orderc;
       tea.value = ordert;
       milk.value = orderm;
       omelet.value = ordero;
       bread.value = orderb;
       soup.value = orders;
       rice.value = orderr;
       salad.value = ordersd;
        screenValue=0;
        screen.value = screenValue;
        }
  })
}
