import React from 'react';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import AccountStore from '../reflux/AccountStore.jsx';

var AccountDropdown = React.createClass({
  mixins: [Reflux.listenTo(AccountStore, 'onChange')],
  getInitialState: function() {
    return {accounts: []};
  },
  componentWillMount: function() {
    Actions.getAccounts();
  },
  onChange: function(event, _accounts) {
    this.setState({accounts: _accounts});
  },
  render: function() {
    var accounts = this.state.accounts.map(function(account) {
      return <option key={account.address}>{account.address}</option>
    });

    return (
      <div className="form-group">
        <select className="form-control">
          {accounts}
        </select>
      </div>
    )
  }
});

module.exports = AccountDropdown;