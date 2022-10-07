function table() 
{
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
      let data = reader.result.split("\r\n");
      for (let i in data) {
        data[i] = data[i].split(",");
      }
 
      // data = JSON.stringify(data);
      console.log(data);
    });

    reader.readAsText("https://mattshardlow.github.io/DoCM_WorldCup_2022/Master.csv");

}//table