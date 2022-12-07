function isprime(n){
  let count=0;
  for(let i=1;i<=n;i++){
    if(n%i==0){
      count++;
    }
  }
  if(count==2){
    return true;
  }
  return false;
  }

let ans=isprime(5);
if(ans==true){
  console.log("prime")
}else{
  console.log("not prime")
}