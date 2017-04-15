import React, { PropTypes } from 'react';
import objectAssign from 'object-assign';
import BaseTipso from './BaseTipso';

const propTypes = {
  trigger: PropTypes.string,
  wrapperStyle: PropTypes.object,
  children: PropTypes.element
};

const defaultProps = {
  trigger: 'hover',
  wrapperStyle: {},
  children: (<div></div>)
};

const Tipso = (props) => {
  const { children } = props;
  const baseProps = objectAssign({}, props);

  delete baseProps.children;

  return (
    <BaseTipso
      {...baseProps}>
      {children}
    </BaseTipso>
  );
};

Tipso.propTypes = propTypes;
Tipso.defaultProps = defaultProps;

export default Tipso;
