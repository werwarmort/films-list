import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (Array.isArray(items)) {
        console.log("items is mass: ", items);
        return (
            <ul className="list-group">
                {items.map((item) => (
                    <li
                        key={item._id}
                        className={
                            "list-group-item" +
                            (item === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    }
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default GroupList;
