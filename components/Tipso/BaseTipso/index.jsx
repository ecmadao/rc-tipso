import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from './base_tipso.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  tipsoContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  className: PropTypes.string,
  theme: PropTypes.string,
  trigger: PropTypes.string,
  tipsoStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  wrapperClass: PropTypes.string,
  position: PropTypes.string,
  show: PropTypes.bool,
  disabled: PropTypes.bool,
};

const defaultProps = {
  children: (<div></div>),
  tipsoContent: null,
  className: '',
  theme: 'light',
  trigger: 'hover',
  tipsoStyle: {},
  wrapperStyle: {},
  wrapperClass: '',
  position: 'top',
  show: false,
  disabled: false,
};

class BaseTipso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    };
    this.handleShowChange = this.handleShowChange.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  componentDidMount() {
    if (document.addEventListener) {
      document.addEventListener('mousedown', this.onOutsideClick, true);
    } else {
      document.attachEvent('onmousedown', this.onOutsideClick);
    }
  }

  componentWillUnmount() {
    if (document.removeEventListener) {
      document.removeEventListener('mousedown', this.onOutsideClick, true);
    } else {
      document.detachEvent('onmousedown', this.onOutsideClick);
    }
  }

  handleShowChange(show) {
    return () => this.setState({ show });
  }

  onOutsideClick(e) {
    e = e || window.event;
    const mouseTarget = (typeof e.which !== 'undefined') ? e.which : e.button;
    const isDescendantOfRoot = ReactDOM.findDOMNode(this.tipso).contains(e.target);
    if (!isDescendantOfRoot && mouseTarget === 1) {
      this.handleShowChange(false)();
    }
  }

  get triggerFunc() {
    const { trigger, disabled } = this.props;
    const func = {
      hover: {
        onMouseOver: this.handleShowChange(true),
        onMouseEnter: this.handleShowChange(true),
        onMouseOut: this.handleShowChange(false),
        onMouseLeave: this.handleShowChange(false)
      },
      click: {
        onClick: this.handleShowChange(true),
      },
      focus: {
        onFocus: this.handleShowChange(true),
      }
    };
    return disabled ? {} : func[trigger] || {};
  }

  render() {
    const { show } = this.state;
    const {
      theme,
      disabled,
      position,
      children,
      className,
      tipsoStyle,
      wrapperStyle,
      wrapperClass,
      tipsoContent,
    } = this.props;
    const containerClass = cx(
      styles['tipso-container'],
      styles[theme],
      styles[position],
      !disabled && (this.props.show || show) && styles.active,
      className
    );

    const triggerFunc = this.triggerFunc;
    const tipsoTrigger = cloneElement(children, triggerFunc);

    return (
      <div
        ref={ref => (this.tipso = ref)}
        style={wrapperStyle}
        className={cx(styles['tipso-wrapper'], wrapperClass)}>
        {tipsoTrigger}
        {tipsoContent ? (
          <div
            style={tipsoStyle}
            className={containerClass}>
            <div>
              {tipsoContent}
            </div>
          </div>
        ) : ''}
      </div>
    );
  }
}

BaseTipso.propTypes = propTypes;
BaseTipso.defaultProps = defaultProps;

export default BaseTipso;
