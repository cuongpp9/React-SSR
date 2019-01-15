import React, { Component } from 'react';

class CollapsibleBody extends Component {

    render() {
        return (
            <div className="collapsible-body">
                <div className="collapsible-header">
                    <i className="material-icons">{this.props.nameIcon}</i>
                    {this.props.nameItem}
                </div>
            </div>
        );
    }
}

export default CollapsibleBody;
