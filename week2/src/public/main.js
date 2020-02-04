window.onload = function() {
    var button = document.querySelector("#button");
    // add event listener to the id button click
    button.addEventListener("click",addItem,false);
}

//when the button is click call addItem() to get the text
// from the input and add to the Shopping List
function addItem() {
    var shoppingList = document.querySelector("#item-list"); //<ol></ol>
    var input = document.querySelector("#input");
    var data = input.value;

    // if data is blank do not add to the shopping list
    if(data == "")
       return false;

    input.value = ""; // clear the input

    // adding new item list
    var li = document.createElement("li");  // <li></li>
    var textNode = document.createTextNode(data);
    li.appendChild(textNode);  //<li>dataFromInput</li>
    li.setAttribute("class","shopList");

    shoppingList.appendChild(li); //  add to the end of the shopping list

    // Add checkbox to the appended item of the shopping list
    //<input type="checkbox">
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class","checkbox");
    li.appendChild(checkBox);
    console.log("in AddItem");

    checkBox.addEventListener("click", function(e) {
        purchaseItem(e);
    }, false);
}

// when the click the checkbox button move the shoping item to the purchase item
function purchaseItem(e) {
   console.log("in purchaseItem");
   var target, elParent, elGrandparent;
   target = getTarget(e);

   console.log("target = ", target);

   elParent = target.parentNode;
   console.log("elParent = ", elParent);

   elGrandparent = target.parentNode.parentNode;
   console.log("elGrandparent = ", elGrandparent);

   var purchaseList = document.querySelector("#item-purchase");
   var data = elParent.innerText;
   console.log("data = ", data);

   elGrandparent.removeChild(elParent);
  // console.log("after remove child.... elGrandparent = ", elGrandparent);

   // adding new purchase item
   var li = document.createElement("li"); // <li></li>
   var textNode = document.createTextNode(data);
   li.appendChild(textNode);
   li.setAttribute("class","purchaseList");

   purchaseList.appendChild(li); // add to the end of the purchase list

   // Extra credit add the checkbox to the appended of the purchase item
   // so the user can move the item back to the shopping list
   var checkBox = document.createElement("input");
   checkBox.setAttribute("type", "checkbox");
   checkBox.setAttribute("class", "checkbox");
   li.appendChild(checkBox);

   checkBox.addEventListener("click", function(e) {
       addBackToShopping(e);
   }, false);

   // prevent the link from taking us elsewhere
   if (e.preventDefault)
   {
       e.preventDefault();
   }
   else {
       e.returnValue = false;
   }
   
}

function getTarget(e) {
    if (!e) {
        e = window.event;
    }

    return e.target || e.srcElement;
}

// when click the checkbox button in the purchase item add back the item 
// to the shopping list

function addBackToShopping(e)
{
   console.log("in addBackToShopping");
   var target, elParent, elGrandparent;
   target = getTarget(e);

   console.log("target = ", target);

   elParent = target.parentNode;
   elGrandparent = target.parentNode.parentNode;

   var ShoppingList = document.querySelector("#item-list");
   var data = elParent.innerText;
   console.log("data = ", data);

   elGrandparent.removeChild(elParent);

   // adding new shopping list item
   var li = document.createElement("li");
   var textNode = document.createTextNode(data);
   li.appendChild(textNode);
   li.setAttribute("class", "shopList");
 
   ShoppingList.appendChild(li);

   // add checkbox to the item in the shopping list
   var checkBox = document.createElement("input");
   checkBox.setAttribute("type", "checkbox");
   checkBox.setAttribute("class", "checkbox");
   li.appendChild(checkBox);

   checkBox.addEventListener("click", function(e) {
       purchaseItem(e);
   }, false);

}

