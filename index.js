function cont(x){
    for(let i=1;i<=x;i++){
        if(i%3==0 && i%5==0){
            console.log(`${i} by both`);
        } else if(i%3==0){
            console.log(`${i} by 3`);
        } else if(i%5==0){
            console.log(`${i} by 5`);
        }else{
            console.log(i);
        }
    }
}