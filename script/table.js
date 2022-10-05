function table() 
{
  var csv = require('jquery-csv');

  fetch("Master.csv")
  .then(res => res.text())
  .then(csv => {
    let master = $.csv.toObjects(csv);
    console.log(master[0]['Group'])
  }//then

  
}//table