function validateKey(){
    if(prompt('Please enter the key to access this page.') == 'pass123'){
        return true;
    }else{
        alert('Incorrect key.');
        return false;
    }
}