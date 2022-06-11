function filter(filterLinks, filterColumns) {
    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const dataFilterCount = link.getAttribute("data-filter");
            filterColumns.forEach(column => {
                if (dataFilterCount == "1" && dataFilterCount == 1) {
                    column.classList.add("active");
                } else {
                    column.classList.remove("active");
                    if (column.classList.contains("filter_" + dataFilterCount)) {
                        column.classList.add("active");
                    }
                }
            });
            e.preventDefault();
        });
    });

    accordionForFilterLinks();

    function accordionForFilterLinks() {
        filterLinks.forEach(link => {
            link.addEventListener("click", function () {
                filterLinks.forEach(removeLink => {
                    removeLink.classList.remove("active");
                });
                link.classList.add("active");
            });
        });
    }
}

const filterListLinks = document.querySelectorAll(".products__filter-item");
const filterColumns = document.querySelectorAll(".products__img");

filter(filterListLinks, filterColumns);