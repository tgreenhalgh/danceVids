//Commonjs was (node way)
// var React = require('react');
// ES6 modules way
import React from 'react';


// create the `stamp`
var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
        // `this` is the element we created
        // `props` is readonly from the parent
        // `title` is property name used
        h1({ style: {
          color: this.props.color,
          fontWeight: 'bold'
        } }, this.props.title)
      )
    );
  }
});

export default MyTitle;