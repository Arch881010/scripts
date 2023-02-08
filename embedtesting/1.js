var optcount = 1;
var int = 0;
console.info("Loaded file.")
function createdropdown(id, amount, names, values) {
    for(let vars = 0; vars<amount+1; vars++) {
        if(names.length != values.length || names.length != amount || values.length != amount) {
            console.group("Error.")
                console.warn("The names != values test:", names.length == values,"\nThe names != amount test:",names.length == amount, "\nThe values != amount test:", values.length == amount)
                console.error("At least 1 error occured. Please fix based on example.")
                console.info(`Example: "The names != values test: false", "The names != amount test: false". To fix it, you need to make sure there is how many names supplied to amount of values. `)
            break;
        }
        var opt = document.createElement("option");
        opt.setAttribute("id",names[int]);
        opt.setAttribute("value",values[int]);
        opt.text = names[int]
        int++;
        var select = document.getElementById(id);
        select.appendChild(opt);
    }
}