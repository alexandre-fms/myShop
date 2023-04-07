

function constructHeader() {
    let header = ["ID", "Name", "Brand", "Price", "Quantity"];
    let tableHead = document.createElement("thead");
    let tableRow = document.createElement("tr");
    for (let i = 0; i < header.length; i++) {
        let tableCell = document.createElement("th");
        let tableText = document.createTextNode(header[i]);
        tableCell.appendChild(tableText);
        tableRow.appendChild(tableCell);
    }
    tableHead.appendChild(tableRow);
    return tableHead;
}

function generateTable(data) {

    let articles = [
        ["phone", "", "X321", "Motorola", 899],
        ["phone", "", "s23", "samsung", 1200],
        ["phone", "", "iphon XX", "PineApple", 15000],
        ["phone", "", "SRH999", "Sonic Herisson", 1699],
        ["tablet", "", "coco 10\"", "Lenouveau", 229],
        ["tablet", "", "Galaxy tab 12\"", "samsung", 699],
        ["tablet", "", "Ipadle XXX 1To", "PineApple", 18000],
        ["computer", "", "HP pavillon pirate Geforce RTX 9090 TI", "HP", 27000],
        ["computer", "", "DJ Scroll of Earth XX ", "PineApple", 1999999],
        ["computer", "", "Z351", "Raspberry pie", 100]
    ];

    let ligneTabArticles = document.getElementById("insertTab");

    let div = document.createElement("div");
    div.setAttribute("id", "articles");
    div.className = "col-8";

    let titre = document.createElement("h3");
    titre.setAttribute("id", "liste");
    titre.className = "bg-info";
    titre.innerHTML = "Liste des articles en stock."

    div.appendChild(titre);

    let tab = document.createElement("table");
    tab.setAttribute("id", "maTable");
    tab.classList.add("table", "table-striped");

    let tbody = document.createElement("tbody");
    for (let i = 0; i < articles.length; i++) {
        let tr = document.createElement("tr");
        if (data === "all") {
            articles[i].shift();
            articles[i].forEach(element => {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(element);
                cell.appendChild(cellText);
                tr.appendChild(cell);
                tr.setAttribute("name", "article");
                tr.firstChild.innerHTML = i + 1;
            });
            let cellInput = document.createElement("td");
            let input = document.createElement("input");
            input.className = "qte";
            input.type = "number";
            input.style.width = "50%";
            cellInput.appendChild(input);
            tr.appendChild(cellInput);
            tbody.appendChild(tr);
        }
        if (data === "phone") {
            if (articles[i][0] == "phone") {
                articles[i].shift();
                articles[i].forEach(element => {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(element);
                    cell.appendChild(cellText);
                    tr.appendChild(cell);
                    tr.setAttribute("name", "article");
                    tr.firstChild.innerHTML = i + 1;
                });
                let cellInput = document.createElement("td");
                let input = document.createElement("input");
                input.className = "qte";
                input.type = "number";
                input.style.width = "50%";
                cellInput.appendChild(input);
                tr.appendChild(cellInput);
                tbody.appendChild(tr);
            }
        }
        if (data === "tablet") {
            if (articles[i][0] == "tablet") {
                articles[i].shift();
                articles[i].forEach(element => {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(element);
                    cell.appendChild(cellText);
                    tr.appendChild(cell);
                    tr.setAttribute("name", "article");
                    tr.firstChild.innerHTML = i + 1;
                });
                let cellInput = document.createElement("td");
                let input = document.createElement("input");
                input.className = "qte";
                input.type = "number";
                input.style.width = "50%";
                cellInput.appendChild(input);
                tr.appendChild(cellInput);
                tbody.appendChild(tr);
            }
        }
        if (data === "pc") {
            if (articles[i][0] == "computer") {
                articles[i].shift();
                articles[i].forEach(element => {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(element);
                    cell.appendChild(cellText);
                    tr.appendChild(cell);
                    tr.setAttribute("name", "article");
                    tr.firstChild.innerHTML = i + 1;
                });
                let cellInput = document.createElement("td");
                let input = document.createElement("input");
                input.className = "qte";
                input.type = "number";
                input.style.width = "50%";
                cellInput.appendChild(input);
                tr.appendChild(cellInput);
                tbody.appendChild(tr);
            }
        }
    }
    tab.appendChild(constructHeader());
    tab.appendChild(tbody);
    div.appendChild(tab);
    div.appendChild(buttonAddToCart());
    ligneTabArticles.appendChild(div);
}

function buttonAddToCart() {
    let buttonAddToCart = document.createElement("button");
    buttonAddToCart.setAttribute("id", "addToCart");
    buttonAddToCart.setAttribute("onclick", "addToCart()");
    buttonAddToCart.classList.add("btn", "btn-info", "text-white", "mb-2");
    buttonAddToCart.innerHTML = "Ajouter au panier";
    return buttonAddToCart;
}

let goall = document.getElementById("all");
let goPhone = document.getElementById("phones");
let goTablet = document.getElementById("tablets");
let goPc = document.getElementById("pcs");

goall.addEventListener("click", function () {
    let all = "all";
    if (document.getElementById("articles")) {
        document.getElementById("articles").remove();
    }
    generateTable(all);
    document.getElementById("articles").style.display = "block";
});


goPhone.addEventListener("click", function () {
    let phone = "phone";
    if (document.getElementById("articles")) {
        document.getElementById("articles").remove();
    }
    generateTable(phone);
    document.getElementById("articles").style.display = "block";
});

goTablet.addEventListener("click", function () {
    let tablet = "tablet";
    if (document.getElementById("articles")) {
        document.getElementById("articles").remove();
    }
    generateTable(tablet);
    document.getElementById("articles").style.display = "block";
});

goPc.addEventListener("click", function () {
    let pc = "pc";
    if (document.getElementById("articles")) {
        document.getElementById("articles").remove();
    }
    generateTable(pc);
    document.getElementById("articles").style.display = "block";
});


function addToCart() {

    let mycel = document.getElementsByName("article");
    mycel.forEach(element => {
        console.log(element.getElementsByTagName("td").data);
    })
    //let content = document.getElementsByName("article");

}


function popForm() {
    document.getElementById("formOrder").style.visibility = "visible";
}


document.addEventListener("submit", function(event){
    let name = document.getElementById("inputName").value;
    let address = document.getElementById("inputAddress").value;
    let phoneNumber = document.getElementById("inputPhoneNumber").value;
    let email = document.getElementById("inputEmail4").value;

    alert("Félicitations pour votre commande Monsieur//madame " + name + ".\n    Cependant, nous rencontrons une erreur avec notre base de données.\n    En effet, votre compte sera bien débité mais vous ne recevrais pas les articles commandés à l'adresse : " + address + ".\n\n N'essayez pas de nous contacter, votre numéro " + phoneNumber + " et votre mail " + email + " ont été bloqués par nos services.\n\n   Encore merci de votre commande et à bientôt.");

})
