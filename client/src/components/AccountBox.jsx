var React = require('react');
var AccountsList = require('./AccountsList');

var AccountBox = React.createClass({
  render: function(){
    return(
      <div>
        <h3> Total {this.props.type}: £{this.props.bank.totalCash(this.props.type)} </h3>
        <AccountsList type={this.props.type} bank={this.props.bank}></AccountsList>
      </div>
    )
  }
});

module.exports = AccountBox;