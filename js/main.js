class Main {
    handleEvent(evt) {
        let sw = this.myf.getElementByEvent(evt);
        console.log("Click en dispositivo:" + sw.id);
        switch (sw.id) {
            case "boton-lamparas":
                this.myf.requestGET("lamparas", this);
                break;
            case "boton-persianas":
                this.myf.requestGET("persianas", this);
                break;
            case "boton-veladores":
                this.myf.requestGET("veladores", this);
                break;
            case "boton-todos":
                this.myf.requestGET("devices", this);
                break;
            default:
                let data = { "ID": sw.id, "Estado": this.view.getSwitchStateById(sw.id) };
                this.myf.requestPOST("devices", data, this);
        }
        let data = { "ID": sw.id, "Estado": this.view.getSwitchStateById(sw.id) };
        //console.log("Dispositivo:"+data);
        this.myf.requestPOST("devices", data, this);
    }
    handleGETResponse(status, response) {
        if (status == 200) {
            console.log(response);
            let data = JSON.parse(response);
            console.log(data);
            this.view.showDevices(data);
            for (let i in data)
                this.myf.configClick(`dev_${data[i].id}`, this);
        }
    }
    handlePOSTResponse(status, response) {
        if (status == 200) {
            console.log(response);
        }
    }
    main() {
        this.myf = new MyFramework();
        this.view = new ViewMainPage(this.myf);
        this.myf.requestGET("devices", this);
        this.myf.configClick("boton-todos", this);
        this.myf.configClick("boton-lamparas", this);
        this.myf.configClick("boton-persianas", this);
        this.myf.configClick("boton-veladores", this);
    }
}
window.onload = () => {
    let obj = new Main();
    obj.main();
};
