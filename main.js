stdarray=[];
function submit()
{var name1=document.getElementById(student_1).nodeValue;
var name1=document.getElementById(student_2).nodeValue;
var name1=document.getElementById(student_3).nodeValue;
var name1=document.getElementById(student_4).nodeValue;
stdarray.push=(name_1);
stdarray.push=(name_1);
stdarray.push=(name_1);
stdarray.push=(name_1);
console.log(stdarray);
document.getElementById("display").innerHTML=stdarray;
document.getElementById("button1").style.display="none";
document.getElementById("button2").style.display="inline-block";
}

menu_list_array["Chicken Tandoori Pizza",
                "Veg Supreme Pizza",
                "Paneer Tikka Pizza",
                "Deluxe Veggie Pizza",
                "Veg Extravaganza Pizza"]

function getmenu()
{
    var htmldata;
    htmldata = "<ol class=menu-list>";
    menu_list_array.sort();
    for (var i=0;i<menu_list_array.lenght;1++)
    {
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item()
{
   var htmldata;
   var iem=document.getElementById("add_item").value;
   menu_list_array.push(item);
   menu_list_array.sort();
   for (var i=0;i<menu_list_array.lenght;1++)
   {
   htmldata="<section class='cards'>"+'<img src="pizzaImg.png"/>' + menu_list_array[i]+"div"
   }
   htmldata=htmldata+"</section>"
   document.getElementById("display_addmenu").innerHTML = htmldata;
}
