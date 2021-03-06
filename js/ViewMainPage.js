// Separado del main del ejercicio_12 por comodidad
class ViewMainPage {
    constructor(myf) {
        this.myf = myf;
    }
    showDevices(list) {
        let devicesUl = this.myf.getElementById("devicesList"); // cargo la lista de objetos en el DOM
        let items = "";
        for (let i in list) {
            let checkedStr = "";
            if (list[i].state == "1")
                checkedStr = "checked";
            switch (list[i].type) {
                case 0: // Lampara                     
                    items += "<li class='collection-item avatar'> \
                                <img src='images/lightbulb.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].description + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                <label> \
                                Off \
                                <input type='checkbox' id='dev_" + list[i].id + "' " + checkedStr + "> \
                                <span class='lever'></span> \
                                On \
                                </label> \
                            </div></a> \
                            </li>";
                    break;
                case 1: // Persiana                    
                    items += "<li class='collection-item avatar'> \
                                <img src='images/window.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].description + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                <label> \
                                Off \
                                <input type='checkbox' id='dev_" + list[i].id + "' " + checkedStr + "> \
                                <span class='lever'></span> \
                                On \
                                </label> \
                            </div></a> \
                            </li>";
                    break;
                case 2: // Veladores                    
                    items += "<li class='collection-item avatar'> \
                                <img src='images/velador.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].description + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                <label> \
                                Off \
                                <input type='checkbox' id='dev_" + list[i].id + "' " + checkedStr + "> \
                                <span class='lever'></span> \
                                On \
                                </label> \
                            </div></a> \
                            </li>";
                    break;
            }
        }
        devicesUl.innerHTML = items;
    }
    getSwitchStateById(id) {
        let el = this.myf.getElementById(id);
        return el.checked;
    }
}
