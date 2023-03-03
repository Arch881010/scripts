console.info("Loaded file (https://arch881010.github.io/scripts/embedtesting/1.js).")
function createdropdown(divid, names, values) {
    optcount = 1;
    int = 0;
    for(let vars = 0; vars<amount+1; vars++) {
        if(names.length != values.length) {
            if(names.length > values.length) data = "You have more names than supplied values. Names > Values";
            else data = "You have less names than supplied names. Names < Values";
            console.group("Error.")
                console.log(data)
            break;
        }
        opt = document.createElement("option");
        opt.setAttribute("id",names[int]);
        opt.setAttribute("value",values[int]);
        opt.text = names[int];
        int++;
        var select = document.getElementById(divid);
        select.appendChild(opt);
    }
}