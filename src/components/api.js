let url = "http://universities.hipolabs.com/search?country=India";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);

    let colarr = await clg();
    show(colarr,state);
});

function show (colarr,state) {
    let list = document.querySelector("#list");
    list.innerHTML = "";

    for (let c of colarr) {
        if (c["state-province"] === state){
            let li = document.createElement("li");
            li.innerText = c.name;
            list.appendChild(li);
        }
    }
}

async function clg() {
    try{
        let res = await axios.get(url);
        return res.data;
    }
    catch (e){
        console.log(e);
        return [];
    }
}

