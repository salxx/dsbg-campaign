function subAccordion(object) {
    return "<div class=\"bordered bordered-sub\"><button class=\"sub-accordion accordion\">" + object.title + "</button><div class=\"panel panel-sub\"><p><i>" + object.lore +"</i></p><p>" + object.text + "</p></div></div>";
  }
  function accordion(target, object, append = false) {
      var i;
      var text = "<div class=\"bordered\"><button class=\"top-accordion accordion\">" + object.title + "</button><div class=\"panel\"><p><i>" + object.lore + "</i></p><p>" + object.text + "</p>";
            for (i = 0; i < object.sub.length; i++) {
        text += subAccordion(object.sub[i])
      }
      text += "</div></div>";
      if(append) {
        target.innerHTML += text;
      } else {
        target.innerHTML = text;
      }
  }

  function initAccordion() {
    var acc = document.getElementsByClassName("top-accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active-top-accordion");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    var acc = document.getElementsByClassName("sub-accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active-sub-accordion");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }