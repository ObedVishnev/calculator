var  val1 = document.getElementById("see");val2 = document.getElementById("basics");ravno=document.getElementById("h2");setInterval(function animation(){window.onload=window.requestAnimationFrame(reshay);},"100");function reshay(){/*console.log(ravno);*/ravno.innerHTML =  Math.pow(val1.value,val2.value);if(ravno.innerHTML == "Infinity"){alert("Основание или показатель указаны неверно!");val1.value = 0;val2.value = 0;return false;}}


