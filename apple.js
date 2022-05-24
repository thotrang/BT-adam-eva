class Apple{
    weight;
    constructor(weight){
        this.weight=weight;
    }
    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
    inApple(){
        if(this.weight <= 0){
            alert("Táo đã hết rồi");
        }else{
            this.weight--;
        }
    }
}