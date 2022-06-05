export function filter(filterLinks, filterColumns) {
    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            let dataFilterCount = link.getAttribute("data-filter");
            filterColumns.forEach(column => {
                if (dataFilterCount == "3" && dataFilterCount == 3) {
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

// const filterListLinks = document.querySelectorAll(".filter__list-link");
// const filterColumns = document.querySelectorAll(".filter-columns__column");

// filter(filterListLinks, filterColumns);