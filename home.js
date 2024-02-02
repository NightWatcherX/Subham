function showme()
    {
      document.getElementById("content").style.display = "block";
    }
function showalert()
    {
      alert("Your answer is wrong, Try again");
      location.reload();
    }
//checking true false 
function check()
 {
   var tf = document.getElementById("true");
   var ft1 = document.getElementById("false1");
   var ft2 = document.getElementById("false2");
   var col1 = document.getElementById("fline1");
   var col2 = document.getElementById("fline2");
   var col3 = document.getElementById("tline");
   var showdiv = document.getElementById("content");
    if(tf.checked)
      {
        col3.style.color = "green";
        setTimeout(showme, 500);
      }
     else if(ft1.checked)
      {
        col1.style.color = "red";
        setTimeout(showalert, 500);
      }
    else if(ft2.checked)
      {
        col2.style.color = "red";
        setTimeout(showalert, 500);
      }
 }
 