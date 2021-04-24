import React from 'react';
import PropTypes from 'prop-types';

function Button({
    type = 'button',
    variant = 'text',
    color = 'default',
    size = 'medium',
    className,
    children,
    ...rest
}) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button type={type} className={`variant-${variant} color-${color} size-${size} ${className}`} {...rest}>
            {children}
        </button>
    );
}
Button.propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'red', 'green', 'dark', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'link', 'icon', 'close']),
    children: PropTypes.node,
};

export default Button;
