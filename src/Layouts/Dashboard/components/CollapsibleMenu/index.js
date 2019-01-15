import React, { Component } from 'react';
import CollapsibleHeader from '../CollapsibleHeader';
import CollapsibleBody from '../CollapsibleBody';
import './stype.scss';

class CollapsibleMenu extends Component {
  state = {
    toggleDeliveries: false,
    toggleTransfers: false,
    togglePatints: false,
    key: 0,
  }
  handleOnChange(number) {
    switch(number) {
      case 1:
          this.setState({
            toggleIcon: !this.state.toggleIcon,
            toggleTransfers: false,
            togglePatints: false,
            key: number
            });
          break;
      case 2:
          this.setState({
            toggleIcon: false,
            toggleTransfers: !this.state.toggleTransfers,
            togglePatints: false,
            key: number
          });
          break;
      case 3:
          this.setState({
            toggleIcon: false,
            toggleTransfers: false,
            togglePatints: !this.state.togglePatints,
            key: number
          });
          break;
      default:
          this.setState({
            toggleIcon: false,
            toggleTransfers: false,
            togglePatints: false,
            key: number
          });
    }
  }

  render() {
    return (
      <div>
        <ul className="collapsible">
        <li onClick={() => this.handleOnChange(0)}>
          <CollapsibleHeader Title ="Dashboard" nameIcon="dashboard"/>
        </li>
          <li onClick={() => this.handleOnChange(1)}>
            <div className="collapsible-header">
              <i className="material-icons">directions_car</i>
              Deliveries
                <i className="material-icons menu-deliver">
                {this.state.toggleIcon === true && this.state.key === 1 ?
                  'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
            </div>
            <CollapsibleBody nameItem ="Item 1" nameIcon ="fast_forward"/>
            <CollapsibleBody nameItem ="Item 2" nameIcon ="fast_forward"/>
            <CollapsibleBody nameItem ="Item 3" nameIcon ="fast_forward"/>
            <CollapsibleBody nameItem ="Item 4" nameIcon ="fast_forward"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Micro Marchant" nameIcon="laptop_mac"/>
          </li>
          <li onClick={() => this.handleOnChange(2)}>
            <div className="collapsible-header">
              <i className="material-icons">compare_arrows</i>
              Rx Transfers
              <i className="material-icons menu-transfers">
                {this.state.toggleTransfers === true && this.state.key === 2 ?
                  'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
            </div>
            <CollapsibleBody nameItem ="Item 1" nameIcon ="fast_forward"/>
            <CollapsibleBody nameItem ="Item 2" nameIcon ="fast_forward"/>
          </li>
          <li onClick={() => this.handleOnChange(3)}>
            <div className="collapsible-header">
              <i className="material-icons">face</i>
              Patients
              <i className="material-icons menu-Patients">
                {this.state.togglePatints === true && this.state.key === 3 ?
                  'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
            </div>
            <CollapsibleBody nameItem ="Item 1" nameIcon ="fast_forward"/>
            <CollapsibleBody nameItem ="Item 2" nameIcon ="fast_forward"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Medications" nameIcon="local_drink"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Pharmacies" nameIcon="business"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Sig Codes" nameIcon="view_list"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Alerts" nameIcon="notifications"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Prior Authorization" nameIcon="verified_user"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="User Signups" nameIcon="people"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Users and Roles" nameIcon="people_outline"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Setting" nameIcon="settings"/>
          </li>
          <li onClick={() => this.handleOnChange(0)}>
            <CollapsibleHeader Title ="Logout" nameIcon="highlight_off"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default CollapsibleMenu;
