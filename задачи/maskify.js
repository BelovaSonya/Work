function maskify(cc){
    let i; 
    let CC='';
    for (i=0; i< cc.length; i++){
        if ((cc.length - 4) > i){
            CC += "#";
        }
        else{
            CC += cc[i];
        }
    }
    console.log (CC);
}
maskify('44444');
//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript