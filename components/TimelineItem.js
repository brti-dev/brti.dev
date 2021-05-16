/**
    @see https://github.com/veysiyildiz/vertical-timeline-component-for-react

    MIT License

    Copyright (c) 2018 Veysi YILDIZ

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

class TimelineItem extends Component {
    constructor(props) {
        super(props)
        this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this)
        this.state = { visible: false }
    }

    onVisibilitySensorChange(isVisible) {
        if (isVisible) {
            this.setState({ visible: true })
        }
    }

    render() {
        const {
            id,
            children,
            dateText,
            dateStyle,
            dateComponent,
            dateInnerStyle,
            bodyContainerStyle,
            className,
            visibilitySensorProps,
        } = this.props
        const { visible } = this.state
        return (
            <div
                id={id}
                className={`${className} timeline__item ${children === '' ? 'timeline__item--no-children' : ''}`}
            >
                <VisibilitySensor
                    {...visibilitySensorProps}
                    onChange={this.onVisibilitySensorChange}
                >
                    <>
                        <div className="timeline__item__title">
                            <div hidden={!visible} aria-hidden={!visible}>
                                {dateComponent !== null ? (
                                    dateComponent
                                ) : (
                                    <span style={dateStyle} className="timeline__item__date">
                                        <time
                                            style={dateInnerStyle}
                                            className="timeline__item__date__inner"
                                            title={dateText}
                                        >
                                            {dateText}
                                        </time>
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="timeline__item__body">
                            <div
                                className="timeline__item__body__container"
                                style={bodyContainerStyle}
                                hidden={!visible}
                                aria-hidden={!visible}
                            >
                                {children}
                            </div>
                        </div>
                    </>
                </VisibilitySensor>
            </div>
        )
    }
}

TimelineItem.propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    className: PropTypes.string,
    dateStyle: PropTypes.shape({}),
    dateInnerStyle: PropTypes.shape({}),
    bodyContainerStyle: PropTypes.shape({}),
    dateText: PropTypes.string,
    dateComponent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.node,
    ]),
    visibilitySensorProps: PropTypes.shape({}),
}

TimelineItem.defaultProps = {
    id: '',
    children: '',
    dateComponent: null,
    className: '',
    dateStyle: null,
    bodyContainerStyle: null,
    dateInnerStyle: null,
    dateText: '',
    visibilitySensorProps: { partialVisibility: true, offset: { bottom: 50 } },
}

export default TimelineItem
