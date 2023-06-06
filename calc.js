function init(){
    const con = document.querySelector("#box");
    //but.classList.add('content');
    con.classList.add("container")
    const add = document.createElement('button');
    add.textContent = "+";
    const subtract = document.createElement('button');
    subtract.textContent = "-";
    add.classList.add("item");
    subtract.classList.add("item");

    for(x = 0; x < 10; x++){
        const but = document.createElement('button');
        but.classList.add("item")
        but.textContent = x;
        con.appendChild(but);
    }

    con.appendChild(add);
    con.appendChild(subtract);
}
function change(){
    const con = document.querySelector("#screen");
    con.classList.add('content');
    //con.textContent = "changed";
    const h = document.querySelectorAll('button');
    console.log(h);

}