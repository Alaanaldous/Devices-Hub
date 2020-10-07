'use strict';
var tableHead =['Device Nane' , 'Quantity' ,'Unit Price' ,'Category'];
var table = document.getElementById('table');
var max =750;
var min = 350;
function Device(name , category , quantity ,price ){
  this.name= name;
  this.category= category;
  this.quantity= quantity;
  this.price=price;
}
Device.prototype.price=function(){
  this.price=Math.floor(Math.random(max-min+1)+min);
};

function createHeader(){
    var headRow= document.createElement('tr');
    tableHead.appendChild(headRow);

    var firstRow;
    for (var i = 0; i<tableHead.length; i++){
        var firstRow= document.createElement('td');
        headRow.appendChild(firstRow);
        firstRow.textContent = tableHead[i];
    }
}