var menu_list_array = ["Veg Margherita Pizza", "Chicken Pizza", "Pepperoni Pizza", "Cheese Pizza", "Hawaiian Pizza", "Buffalo Pizza", "Meat Pizza"];

function getmenu(){
var htmldata = "";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata + '<img src="https://allfreepng.com/files/download/f943886a75d1c07b891487b85c22a2e0.png" height="50px">'  + menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);

}

function add_item(){
var htmldata = "";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata + '<img src="https://allfreepng.com/files/download/f943886a75d1c07b891487b85c22a2e0.png" height="50px">' +  menu_list_array[i] + '<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

