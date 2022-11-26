let counter = 0;
function increment(){
    if (counter>=0) {
        counter++;
        document.getElementById('counter').innerHTML = counter;
        document.getElementById('texterror').innerHTML ="";
        document.getElementById('btnID').style.display='inline';
    }
}
 
function decrement(){
    {
        if (counter>0) {
            counter--;
            document.getElementById('counter').innerHTML = counter;
        } else {
            document.getElementById('texterror').innerHTML ="Error : Cannot go below 0";
        }
    }
    if (counter==0) {
        document.getElementById('btnID').style.display='none';
    }
}
 
function clear(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
    if (counter==0) {
        document.getElementById('btnID').style.display='none';
    }
}