// Lista combinată cu toți furnizorii
const suppliers = [
    { name: "Furnizor A", product: "Usi glisante", link: "<a href='https://www.furnizorA.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor B", product: "Geamuri termopan", link: "<a href='https://www.furnizorB.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor C", product: "Usi de interior", link: "<a href='https://www.furnizorC.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor D", product: "Placari metalice", link: "<a href='https://www.furnizorD.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor E", product: "Panouri compozite", link: "<a href='https://www.furnizorE.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor F", product: "Piatra decorativa", link: "<a href='https://www.furnizorF.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor G", product: "Rulouri exterioare", link: "<a href='https://www.furnizorG.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor H", product: "Copertine retractabile", link: "<a href='https://www.furnizorH.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor I", product: "Jaluzele", link: "<a href='https://www.furnizorI.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor J", product: "Tapet modern", link: "<a href='https://www.furnizorJ.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor K", product: "Elemente 3D", link: "<a href='https://www.furnizorK.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor L", product: "Decoratiuni interioare", link: "<a href='https://www.furnizorL.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor M", product: "Sisteme fatada", link: "<a href='https://www.furnizorM.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor N", product: "Pereti sticla", link: "<a href='https://www.furnizorN.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor O", product: "Structuri aluminiu", link: "<a href='https://www.furnizorO.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor P", product: "Luminatoare policarbonat", link: "<a href='https://www.furnizorP.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor Q", product: "Dome-uri transparente", link: "<a href='https://www.furnizorQ.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor R", product: "Luminatoare ventilate", link: "<a href='https://www.furnizorR.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor S", product: "Garduri metalice", link: "<a href='https://www.furnizorS.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor T", product: "Garduri din lemn", link: "<a href='https://www.furnizorT.com' target='_blank'>Vizitează site</a>" },
    { name: "Furnizor U", product: "Panouri de gard", link: "<a href='https://www.furnizorU.com' target='_blank'>Vizitează site</a>" },
];

// Event Listener pentru butonul de căutare
document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.toLowerCase();
    const table = document.getElementById("results-table");
    const tbody = table.querySelector("tbody");

    // Șterge rezultatele anterioare
    tbody.innerHTML = "";

    // Filtrează furnizorii pe baza query-ului
    const results = suppliers.filter(
        (supplier) =>
            supplier.name.toLowerCase().includes(query) ||
            supplier.product.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        alert("Nu au fost găsiți furnizori care să corespundă criteriilor tale.");
        table.style.display = "none";
        return;
    }

    // Populează tabelul cu rezultatele
    results.forEach((supplier) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${supplier.name}</td><td>${supplier.product}</td><td>${supplier.link}</td>`;
        tbody.appendChild(tr);
    });

    table.style.display = "table"; // Afișează tabelul
});
