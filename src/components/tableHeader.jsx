import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                        className="unselectable"
                    >
                        {columns[column].name}
                    </th>
                ))}

                {/* <th scope="col">Качества</th>
                <th onClick={() => handleSort("genereOfFilm.name")} scope="col">
                    Жанр
                </th>
                <th onClick={() => handleSort("viewed")} scope="col">
                    просмотрел
                </th>
                <th
                    onClick={() => handleSort("rate")}
                    className="text-center"
                    scope="col"
                >
                    оценка
                </th>
                <th onClick={() => handleSort("bookmark")} scope="col">
                    закладки
                </th> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;