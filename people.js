class People{
    name;
    gender;
    weight;
    constructor(name,gender,weight){
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight=weight;
    }
    getGender(){
        return this.gender;
    }
    setGender(gender){
        this.gender=gender;
    }
    greeting(){
        console.log("hello "+this.name);
    }
    eatApple(apple){
        if(apple.getWeight()>0){
            apple.getWeight()--;
            this.weight++
        }else{
            console.log("táo đã hết")
        }
    }
}