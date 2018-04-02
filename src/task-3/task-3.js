
function makeZebra(tbody) {
    let k = 0;
    const rows = [...tbody.querySelectorAll("tr:not(.d-none)")];
    if (rows !== null) {
        rows.forEach(row => {
            const td = [...row.getElementsByTagName("td")];
            td.forEach(() => {
                if (k % 2 === 0) {
                    row.classList.remove("table-row-even");
                } else {
                    row.classList.add("table-row-even");
                }
                ++k;
            });
        });
    }
}

// function getVisibleRows(tbody) {
//     return [...tbody.querySelectorAll("tr:not(.d-none)")];
// }

function reIndex(tbody) {
    let k = 1;
    const rows = [...tbody.querySelectorAll("tr:not(.d-none)")];
    rows.forEach(row => {
        const td = [...row.getElementsByTagName("td")];
        td.forEach((item, idx) => {
            if (idx === 0) {
                item.innerText = k;
                ++k;
            }
        });
    });
}

export default function filterTable(tbody, filters) {
    const tRows = [...tbody.getElementsByTagName("tr")];
    tRows.forEach((row, index) => {
        if (Array.from(filters).length === 0) {
            row.classList.remove("d-none");
        }
        const tds = [...row.getElementsByTagName("td")];
        tds.forEach((td, idx) => {
            if (Array.from(filters).length === 0) {
                if (idx === 0) {
                    td.innerText = index + 1;
                }
            }
            if (td.dataset.fieldName in filters) {
                const rg = new RegExp(filters[td.dataset.fieldName], "i");
                const val = td.innerText;
                if (String(val).search(rg) < 0) {
                    row.classList.add("d-none");
                }
            }
        });
    });
    reIndex(tbody);
    makeZebra(tbody);
    // console.log(getVisibleRows(tbody));
}
