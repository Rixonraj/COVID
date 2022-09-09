var res = fetch("https://data.covid19india.org/v4/min/data.min.json");
res.then((data)=>data.json())
.then((value)=>{
    // console.log(value.TN.total)
    console.log(value.TN.total.confirmed,value.TN.total.deceased,value.TN.total.recovered,value.TN.total.tested)

        var div = document.createElement("div")
        div.innerHTML=`
        <div class="card" style="width: max-content;">
        <div class="card-header">
          Tamil Nadu COVID
        </div>
        <div class="card-body">
          <h5 class="card-title">Confirmed : ${value.TN.total.confirmed}</h5>
          <h5 class="card-title">deceased : ${value.TN.total.deceased}</h5>
          <h5 class="card-title">recovered : ${value.TN.total.recovered}</h5>
          <h5 class="card-title">tested : ${value.TN.total.tested}</h5>      
          </div>
      </div>`;
      document.body.append(div);

    })