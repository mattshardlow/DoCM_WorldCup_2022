function table() 
{
  fetch("0-dummy.csv")
  .then(res => res.text())
  .then(csv => {
    // (B1) REMOVE OLD TABLE ROWS
    table.innerHTML = "";

    // (B2) GENERATE TABLE
    let rows = csv.split("\r\n");
    for (let row of rows) {
      let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
      if (cols!=null) {
        let tr = table.insertRow();
        for (let col of cols) {
          let td = tr.insertCell();
          td.innerHTML = col.replace(/(^"|"$)/g, "");
        }//for
      }//if
    }//csv func
  });//fetch

  var csv = require('jquery-csv');

  fetch("Maste.csv")
  .then(res => res.text())
  .then(csv => {
    let master = $.csv.toArrays(csv);
    console.log(master[0][0])
  }//then

  
}//table