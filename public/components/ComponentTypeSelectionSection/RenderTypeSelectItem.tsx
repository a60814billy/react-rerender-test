import React, { FC } from 'react';
import PropTypes from 'prop-types';

type RenderTypeSelectItemProps = { checked: boolean, itemName: string, onSelected: () => void };
const RenderTypeSelectItem: FC<RenderTypeSelectItemProps> = (props) => {
  const { checked, itemName, onSelected } = props;
  return (
    <p className="">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <input
          name="comp-type"
          type="radio"
          className="my-2 mr-2"
          checked={checked}
          onChange={(e) => {
            if (e.target.checked) onSelected();
          }}
        />
        {itemName}
      </label>
    </p>
  );
};
RenderTypeSelectItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  itemName: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default RenderTypeSelectItem;
