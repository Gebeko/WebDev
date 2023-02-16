switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

let input= prompt('Browser type','');

if(input == 'Edge'){
    alert('You have got the edge!');
}
else if(input=='Chrome'||input=='Firefox'||input=='Safari'||input=='Opera'){
    alert('We support these browsers too');
}
else{
    alert('We hope that the page looks ok!');
}