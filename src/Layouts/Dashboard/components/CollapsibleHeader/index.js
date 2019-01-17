import React, { Component } from 'react';

class CollapsibleHeader extends Component {

    render() {
        return (
            <div className="collapsible-header">
                {/* <i className="material-icons">{this.props.nameIcon}</i> */}
                <span className={`${this.props.nameIcon} icon-default`} aria-hidden="true"></span>
                {this.props.Title}
            </div>
        );
    }
}

export default CollapsibleHeader;
