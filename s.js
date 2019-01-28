document.getElementById("btn").addEventListener("click", equal);
// document.getElementById("text").addEventListener("keyup", a);


// stylle
$(document).ready(function()
{
    $('.contain').css({background:"#eee"
    ,margin:"0 center"
    ,display:"flex"
    ,"justify-content":"center"
    ,"align-items":"center"
    ,"flex-direction":"column",height: "100vh"});

    $('.colum').css({margin:"5px"});

    $('.window').css({background:"linear-gradient(to right,red,blue)",width:"310px",display:"flex",
"justify-content":"center","align-items":"center","flex-direction":"column"
,border:"1px solid darkgrey",
"box-shadow":"0px 0px 5px","border-radius": "20px"});

    $('input').hide()
    .delay(4700)
    .fadeIn(4700);
    
    $('h1').hide().delay(2000).fadeIn(4700).css({color:"white"});
});

function change(num)
{
   var display =document.getElementById('display');
    
    
  var x= display.value=display.value+num;
  console.log(x);

}
function equal()
{
    var dp=document.getElementById('display').value;
    if(dp)
    {
        display.value=eval(dp);
    }
}

function clean()
{
    var display =document.getElementById('display');
    display.value="";
}

function b()
{
    var exp =document.getElementById('display').value;
    var d=document.getElementById('display').value=exp.substring(0,exp.lenght -2);
    console.log(d);
}