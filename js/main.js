class Main {
    handleEvent(evt) {
        let sw = this.myf.getElementByEvent(evt);
        console.log("click en device:" + sw.id);
        let data = { "id": sw.id, "state": this.view.getSwitchStateById(sw.id) };
        this.myf.requestPOST("devices", data, this);
    }
    handleGETResponse(status, response) {
        if (status == 200) {
            console.log(response);
            let data = JSON.parse(response);
            console.log(data);
            this.view.showDevices(data);
            for (let i in data) {
                let sw = this.myf.getElementById("dev_" + data[i].id);
                sw.addEventListener("click", this);
            }
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
    }
}
window.onload = () => {
    let obj = new Main();
    obj.main();
};
