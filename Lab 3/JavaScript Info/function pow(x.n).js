function pow(x,n){
    let ans = x;
    for(let i=0;i<n;i++){
        ans *= x;
    }
    return ans;
}