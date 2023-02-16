let username = prompt("Enter user name", "");
if(username === 'Admin'){
    let password = prompt('Enter pass word', '')
    if(pass === 'TheMaster'){
        alert('Welcome');
    }
    else if (pass == '' || pass === null){
        alert('Canceled');
    }
    else{
        alert('Wrong passowrd');
    }
}
else if(username === '' || username === null){
    alert('Cancelled');
}
else{
    alert('I dont know you');
}