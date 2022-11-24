class Controls{
    constructor(){
        this.forward = false;
        this.backward = false;
        this.left = false;
        this.right = false;

        this.#addKeyPressListeners();
    }

    #addKeyPressListeners(){
        document.onkeydown = (event) => {
            switch(event.key){
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.backward = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
            }
            // console.table(this);
        }

        document.onkeyup = (event) => {
            switch(event.key){
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.backward = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
            }
            // console.table(this);
        }
    }

}