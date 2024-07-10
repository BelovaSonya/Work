function validatePIN (pin) {
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let flag=1;
    if (pin.lehgth==4 || pin.lehgth==6){
        for (let i=0; i<pin.lehgth; i++){
            if (pin.includes(numbers)){
                flag=1;
            }
            else{
                flag=0;
                break;
            }
        }
        
    } 
    if (flag==1){
        console.log (true);
    }
    else{
        console.log(false);
    }      
}
validatePIN('1w32');