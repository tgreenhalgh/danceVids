//Commonjs was (node way)
// var React = require('react');

// ES6 modules way
import React from 'react';

// create the `stamp`
/*
  not needed with jsx
var div = React.DOM.div;
var h1 = React.DOM.h1;
*/
// note: everything to do with MyTitle is here
// so makes for easier debugging if there's an error
// with MyTitle
var MyTitle = React.createClass({
  render: function() {
    //added for jxs, not there for javascript
    const style = {
      color: this.props.color,
      fontWeight: 'bold'
    };
    return (
      // javascript version:
      /*
       div(null,
        // `this` is the element we created
        // `props` is readonly from the parent
        // `title` is property name used
        h1({ style: {
          color: this.props.color,
          fontWeight: 'bold'
        } }, this.props.title)
       )
      */
      // jsx
      // note: { } interpolates what's in them,
      // i.e. is a javascript expression
      // anything else just shows up
      // note: ,div. gets interpolated as
      // React.createElement('div', null, ...)
      <div>
        <h1 style= { style }>
          { this.props.title.toUpperCase() }
        </h1>
      </div>
    );
  }
});

export default MyTitle;
