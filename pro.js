var movie ;
    var listes = new XMLHttpRequest();
    listes.open("GET", "data.json");
    listes.onload = function () {
     movie = JSON.parse(this.responseText);
     afficher(movie);
    };
    listes.send(); 
    document.getElementById("slc").onchange=function () {
      let valurecher = document.getElementById("slc").value;
      if (valurecher=="titre") {
      movie.sort((a, b) => a.titre.localeCompare(b.titre));
      afficher(movie);
      }
      else if (valurecher=="titre1"){
        movie.sort((a, b) => b.titre.localeCompare(a.titre));
        afficher(movie);
      }
      else if (valurecher=="réalisateur"){
      movie.sort((a, b) => a.réalisateur.localeCompare(b.réalisateur));
       afficher(movie);
      }
      else if (valurecher=="durée"){
        movie.sort((a,b) => a.durée - b.durée );
         afficher(movie);
        }
      else if (valurecher=="production"){
        movie.sort((a,b) => a.production - b.production );
         afficher(movie);
      }
      else if (valurecher=="réalisateur1"){
        movie.sort((a, b) => b.réalisateur.localeCompare(a.réalisateur));
         afficher(movie);
        }
        else if (valurecher=="durée1"){
          movie.sort((a,b) => b.durée - a.durée );
           afficher(movie);
          }
       
      else{
        afficher(movie);
      }
    }
    //////////////////////////////////////////////////////////////////

    document.getElementById('cherch').onkeyup = function () {
        var valu = document.getElementById('cherch').value;
          if(valu==""){
            afficher(movie);
          }
          else{
        for (var l = 0; l < valu.length; l++) {
        var vluchercher = movie.filter(function (item) {
          return item.titre.toLowerCase()[l] == valu.toLowerCase()[l];
        });
      }
        afficher(vluchercher);
    }};
    ///////////////////////////////////////////////////////////////////
  function afficher(movie) {
    document.querySelector("table").innerHTML="";
    document.getElementById("aff").innerHTML="";
    if(window.matchMedia("(max-width:500px)").matches){
            for (var i = 0; i < movie.length; i++) {
              var dr = document.createElement("div");
              dr.className="card container w-75 mt-4"
              var cr=document.createElement("div");
              cr.className="card-body"
              var ur=document.createElement("ul");  
              ur.className="list-group list-group-flush"
              document.getElementById("aff").appendChild(dr);
              var news = document.createElement("img");
              news.src =movie[i].Poster
              news.className="card-img-top"
              news.style.height="200px";
              dr.appendChild(news);
              dr.appendChild(cr);
              cr.appendChild(ur);
              var news1 = document.createElement("li");
              news1.className="list-group-item"
              var news2 = document.createElement("li");
              news2.className="list-group-item"
              var news3 = document.createElement("li");
              news3.className="list-group-item"
              var news4 = document.createElement("li");
              news4.className="list-group-item"
              var news5 = document.createElement("li");
              news5.className="list-group-item"
              var news6 = document.createElement("li");
              news6.className="list-group-item"
              var news7 = document.createElement("li");
              news7.className="list-group-item"
              ur.appendChild(news1);
              ur.appendChild(news2);
              ur.appendChild(news3);
              ur.appendChild(news4);
              ur.appendChild(news5);
              ur.appendChild(news6);
              ur.appendChild(news7);
              var news8 = document.createTextNode("Titre : "+movie[i].titre);
              var news9 = document.createTextNode("Réalisateur : "+movie[i].réalisateur);
              var news10 = document.createTextNode("Durée : "+movie[i].durée);
              var news11 = document.createTextNode("Date : "+movie[i].production);
              var news13 = document.createTextNode("Festivals : "+movie[i].Festivals);
              var news14 = document.createTextNode(movie[i].Acteurs[0].sonmon+" "+movie[i].Acteurs[0].somprenom+" "+movie[i].Acteurs[0].sanationalité);
              var news17 = document.createTextNode(movie[i].Acteurs[1].sonmon+" "+movie[i].Acteurs[1].somprenom+" "+movie[i].Acteurs[1].sanationalité);
              var news16 = document.createTextNode(movie[i].Acteurs[2].sonmon+" "+movie[i].Acteurs[2].somprenom+" "+movie[i].Acteurs[2].sanationalité);
              news1.appendChild(news8);
              news2.appendChild(news9);
              news3.appendChild(news10);
              news4.appendChild(news11);
              news5.appendChild(news13);
              news6.appendChild(news14);
              news6.appendChild(news17)
              news6.appendChild(news16)
            }
          }
    else{
    var first=document.createElement("thead");
    var third=document.createElement("tbody");
    document.querySelector("table").appendChild(first);
    document.querySelector("table").appendChild(third);
    var second=document.createElement("tr");
    var new1 = document.createElement("th");
    var new2 = document.createElement("th");
    var new3 = document.createElement("th");
    var new4 = document.createElement("th");
    var new5 = document.createElement("th");
    var new6 = document.createElement("th");
    var new7 = document.createElement("th");
    var news1 = document.createElement("td");
              var nes1 = document.createTextNode("Poster");
              var nes2 = document.createTextNode("Titre");
              var nes3 = document.createTextNode("Réalisateur");
              var nes4 = document.createTextNode("Durée");
              var nes5 = document.createTextNode("L'année de production");
              var nes6 = document.createTextNode("Festivals");
              var nes7 = document.createTextNode("Acteurs");
              new1.appendChild(nes1);
    new2.appendChild(nes2);
    new3.appendChild(nes3);
    new4.appendChild(nes4);
    new5.appendChild(nes5);
    new6.appendChild(nes6);
    new7.appendChild(nes7);
    second.appendChild(new1);
    second.appendChild(new2);
    second.appendChild(new3);
    second.appendChild(new4);
    second.appendChild(new5);
    second.appendChild(new6);
    second.appendChild(new7);
    first.appendChild(second);
            for (var i = 0; i < movie.length; i++) {
              var news = document.createElement("tr");
              document.querySelector("tbody").appendChild(news);
              var news1 = document.createElement("td");
              var news2 = document.createElement("td");
              var news3 = document.createElement("td");
              var news4 = document.createElement("td");
              var news5 = document.createElement("td");
              var news6 = document.createElement("td");
              var news7 = document.createElement("td");
              var news8 = document.createTextNode(movie[i].titre);
              var news9 = document.createTextNode(movie[i].réalisateur);
              var news10 = document.createTextNode(movie[i].durée);
              var news11 = document.createTextNode(movie[i].production);
              var news13 = document.createTextNode(movie[i].Festivals);
              var news14 = document.createTextNode(movie[i].Acteurs[0].sonmon+" "+movie[i].Acteurs[0].somprenom+" "+movie[i].Acteurs[0].sanationalité);
              var news17 = document.createTextNode(movie[i].Acteurs[1].sonmon+" "+movie[i].Acteurs[1].somprenom+" "+movie[i].Acteurs[1].sanationalité);
              var news16 = document.createTextNode(movie[i].Acteurs[2].sonmon+" "+movie[i].Acteurs[2].somprenom+" "+movie[i].Acteurs[2].sanationalité);
              var news15 = document.createElement("img");
              var p1=document.createElement("p");
              var p2=document.createElement("p");
              var p3=document.createElement("p");
              p1.appendChild(news14);
              p2.appendChild(news16);
              p3.appendChild(news17);
              news15.src=movie[i].Poster
              news15.style.width="150px";
              news15.style.height="150px";
              news1.appendChild(news15);
              news2.appendChild(news8);
              news3.appendChild(news9);
              news4.appendChild(news10);
              news5.appendChild(news11);
              news6.appendChild(news13);
              news7.appendChild(p1);
              news7.appendChild(p2);
              news7.appendChild(p3);
              news.appendChild(news1);
              news.appendChild(news2);
              news.appendChild(news3);
              news.appendChild(news4);
              news.appendChild(news5);
              news.appendChild(news6);
              news.appendChild(news7);
            }
          }
          };