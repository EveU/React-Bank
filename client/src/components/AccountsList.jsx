var React = require('react');

var AccountsList = React.createClass({

  listAccounts: function(){
    var accounts = this.props.bank.filteredAccounts(this.props.type)
    console.log(accounts);
    for(var account of accounts){
      console.log(account);
      return(<li>{account.owner}  £{account.amount}</li>);
    }
  },

  render: function(){
    return(
      <ul>
        {this.listAccounts()}
      </ul>
    )
  }
});

module.exports = AccountsList;