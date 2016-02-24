var React = require('react');

var AccountDisplay = React.createClass({
  render: function(){
    if(!this.props.account){return <h2>Click on "show more info" to see more details on an account.</h2>}
    return(
      <div>
      <h1>Account Details:</h1>
      <h2>Account is owned by: {this.props.account.owner}</h2>
      <h3>This account is of type: {this.props.account.type}<br/>
      Balance: £{this.props.account.amount}</h3>
      </div>
    )
  }
});

module.exports = AccountDisplay;