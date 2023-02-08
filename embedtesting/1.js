var optcount = 1;
var int = 0;
function createdropdown(id,amount,names,values) {
    for(let vars = 0; vars<amount+1; vars++) {
        if(amount.length != values.length || amount.length != amount || values.length != amount) {
            break;
        }
        var opt = document.createElement("option");
        opt.setAttribute("id",names[int]);
        opt.setAttribute("value",values[int]);
        int++;
        var select = document.getElementById(id)
        select.appendChild(opt);
    }
}