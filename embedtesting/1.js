var optcount = 1;
var int = 0;
function createdropdown(id,amount,values,names) {
    if(amount.length != values.length || amount.length != amount || values.length != amount) {
        break;
    }
    var select = document.getElementById(id)
    for(let vars = 0; vars<amount+1; vars++) {
        var opt = document.createElement("option");
        opt.setAttribute("id",names[int]);
        opt.setAttribute("value",values[int]);
        int++;
        select.appendChild(opt);
    }
    int = 0
        for(let vars = 0; vars<amount+1; vars++) {
            document.getElementById(names[int]).text = names[int]
            int++;
        }
}