
// Event Listener for Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
});

// Data for each category
const data = {
    1: [
        ["Furnizor A", "Usi glisante", "<a href='https://www.furnizorA.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor B", "Geamuri termopan", "<a href='https://www.furnizorB.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor C", "Usi de interior", "<a href='https://www.furnizorC.com' target='_blank'>Viziteaza site</a>"],
    ],
    2: [
        ["Furnizor D", "Placari metalice", "<a href='https://www.furnizorD.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor E", "Panouri compozite", "<a href='https://www.furnizorE.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor F", "Piatra decorativa", "<a href='https://www.furnizorF.com' target='_blank'>Viziteaza site</a>"],
    ],
    3: [
        ["Furnizor G", "Rulouri exterioare", "<a href='https://www.furnizorG.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor H", "Copertine retractabile", "<a href='https://www.furnizorH.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor I", "Jaluzele", "<a href='https://www.furnizorI.com' target='_blank'>Viziteaza site</a>"],
    ],
    4: [
        ["Furnizor J", "Tapet modern", "<a href='https://www.furnizorJ.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor K", "Elemente 3D", "<a href='https://www.furnizorK.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor L", "Decoratiuni interioare", "<a href='https://www.furnizorL.com' target='_blank'>Viziteaza site</a>"],
    ],
    5: [
        ["Furnizor M", "Sisteme fatada", "<a href='https://www.furnizorM.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor N", "Pereti sticla", "<a href='https://www.furnizorN.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor O", "Structuri aluminiu", "<a href='https://www.furnizorO.com' target='_blank'>Viziteaza site</a>"],
    ],
    6: [
        ["Furnizor P", "Luminatoare policarbonat", "<a href='https://www.furnizorP.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor Q", "Dome-uri transparente", "<a href='https://www.furnizorQ.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor R", "Luminatoare ventilate", "<a href='https://www.furnizorR.com' target='_blank'>Viziteaza site</a>"],
    ],
    7: [
        ["Furnizor S", "Garduri metalice", "<a href='https://www.furnizorS.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor T", "Garduri din lemn", "<a href='https://www.furnizorT.com' target='_blank'>Viziteaza site</a>"],
        ["Furnizor U", "Panouri de gard", "<a href='https://www.furnizorU.com' target='_blank'>Viziteaza site</a>"],
    ],
};

// Event Listener for Search Button
document.getElementById("search-button").addEventListener("click", () => {
    const category = document.getElementById("category-dropdown").value;
    const table = document.getElementById("results-table");
    const tbody = table.querySelector("tbody");

    // Clear previous results
    tbody.innerHTML = "";

    if (category === "default") {
        alert("Te rugam sa selectezi o categorie.");
        table.style.display = "none";
        return;
    }

    // Populate table based on category
    const results = data[category];
    results.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((cell) => {
            const td = document.createElement("td");
            td.innerHTML = cell; // Allows for HTML in the link column
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.style.display = "table"; // Show table
});
