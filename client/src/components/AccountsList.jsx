var React = require('react');

var AccountsList = React.createClass({

  listAccounts: function(){
    var accounts = this.props.bank.filteredAccounts(this.props.type)
    var listAccounts = [];
    for(var account of accounts){
      listAccounts.push(account.owner + " - £" + account.amount);
    }
      return listAccounts.map(function(value){
        return <li key={value}>{value}</li>
      });
  },

  render: function(){
    return(
      <ul>
        <h4>{this.listAccounts()}</h4>
      </ul>
    )
  }
});

module.exports = AccountsList;