let n = 10;
let i,j,l;
prime:
for(i = 0;i<=n;i++){
    for(j=2;j<i;j++){
        if(i%j==0) continue prime;
    }
    alert(i);
}