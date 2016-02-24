var React = require('react');

var AccountsList = React.createClass({

  getInitialState: function(){
    return { selectedIndex: null };
  },

  handleClick: function(e){
    e.preventDefault();
    // console.log('e', e.target);
    var newIndex = e.target.value;
    // console.log(newIndex);
    this.setState( { selectedIndex: newIndex } );
    var currentAccount = this.props.bank.filteredAccounts(this.props.type)[newIndex];
    // console.log(currentAccount);
    this.props.onSelectAccount( currentAccount );
  },

  listAccounts: function(){
    var accounts = this.props.bank.filteredAccounts(this.props.type)
    var listAccounts = [];
    for(var account of accounts){
      listAccounts.push(account.owner + " - £" + account.amount);
    }
      return listAccounts.map(function(value, index){
        return <li key={index}> {value} <button value={index} onClick={this.handleClick}>More info</button> <button>Add interest</button></li>
      }.bind(this));
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