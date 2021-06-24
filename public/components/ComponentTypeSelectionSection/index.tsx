import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { RenderType } from '../../types';
import RenderTypeSelectItem from './RenderTypeSelectItem';

interface ComponentTypeSelectionSectionProps {
  selectedRenderType: RenderType,
  onClick: (type: RenderType) => void
}

const ComponentTypeSelectionSection: FC<ComponentTypeSelectionSectionProps> = (props) => {
  const { selectedRenderType, onClick } = props;
  return (
    <div className="mt-6">
      <h2 className="text-2xl my-2">Component Type</h2>
      <RenderTypeSelectItem
        checked={selectedRenderType === RenderType.Functional}
        itemName="Functional Component"
        onSelected={() => onClick(RenderType.Functional)}
      />
      <RenderTypeSelectItem
        checked={selectedRenderType === RenderType.Class}
        itemName="Class Component"
        onSelected={() => onClick(RenderType.Class)}
      />
    </div>
  );
};

ComponentTypeSelectionSection.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedRenderType: PropTypes.oneOf(Object.values(RenderType) as RenderType[]).isRequired,
};

export default ComponentTypeSelectionSection;
