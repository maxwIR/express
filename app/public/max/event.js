function disp(evt, pageName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.maxHeight = 0;
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.maxHeight = document.getElementById(pageName).scrollHeight+500 + "px";
    evt.currentTarget.className += " active";
}

function setupAccordion(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = (panel.scrollHeight+5000) + "px"; /*Extra for screen resizes*/
                panel.parentElement.style.maxHeight = panel.parentElement.scrollHeight + panel.scrollHeight + 5000 + "px";
            } 
        }
    }
}

function addClearFields(){
    var feilds = document.getElementsByClassName("required");
    for(var i = 0; i <feilds.length; i++){
        feilds[i].onFocus = clearfield(feilds[i]);;
        //feilds[i].onBlur = process(feilds[i]);
    }
}

function processInput(a){
    var text = a.value;
    if (text == "" || text.valueOf() == "First Name" || text.valueOf() == "Last Name" || text.valueOf() == "Email Address" || (a.name=="emailAddress" && text.search("@")<0)) {
        a.value = "";
    }
}

function clearfield(a){
    //if (a.style.color="grey") {
        a.value="";
        a.style.color="black";
    //}
}
