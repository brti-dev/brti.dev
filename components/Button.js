import React from 'react';
import PropTypes from 'prop-types';

function Button({
    color, size, type = 'button', variant = 'text', children, ...props
}) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button type={type} variant={variant} color={color} size={size} {...props}>
            {children}
        </button>
    );
}
Button.propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'red', 'green', 'dark', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'link', 'icon', 'close']),
    children: PropTypes.node,
};

export default Button;
