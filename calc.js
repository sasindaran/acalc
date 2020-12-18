let a,p,r,n,b; 
function calculate()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    p=Number(p);
    n=Number(n);
    r=Number(r);
    console.log(p);                            
    console.log(n);
    console.log(r);
        b=Math.pow((1+r),n);
        a=p*((r*b)/(b-1));
        console.log(b);
        console.log(a);
        a=a.toFixed("2");
        document.getElementById("final").innerHTML="$"+a;
    }
    