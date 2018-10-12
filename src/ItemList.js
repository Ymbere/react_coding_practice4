import React from 'react';
import PropTypes from 'prop-types';

const ItemList = props => {
    return (
        <div>
            <p className="items">Items </p>
            <ol>
                {props.items.map((item) => <Item />)}
            </ol>
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
  };

export default ItemList;