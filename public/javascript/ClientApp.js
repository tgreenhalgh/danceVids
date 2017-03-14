// entry point for webpack
// webpack public/javascript/ClientApp.js public/javascript/bundle.js
// NODE_ENV=production webpack -p public/javascript/ClientApp.js public/javascript/bundle.js

import React from 'react';
import ReactDOM from 'react-dom';
// MUST be uppercased first letter
// if lower case, reads it as a component <x-my-component> (for web components)
import MyTitle from './MyTitle';

/*
  not needed with jsx:
var div = React.DOM.div;
var MyTitleFactory = React.createFactory(MyTitle);
*/

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      /*
        not needed with jsx
      div(null,
        MyTitleFactory({ title: 'text 1 text 2 text 3', color: 'peru' }),
        MyTitleFactory({ title: 'text 4 text 5 text 6', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'text 7 text 8 text 9', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'text 10 text 11 text 12', color: 'dodgerblue' })
        )
  */
      // as we have created the MyTitle component (import MyTitle), we can
      // use it like HTML element and give it properties like a normal HTML
      // element, e.g. title, color, etc
      //
      // note: ALL tags must be closed with a slash e.g. />
      <div>
        <MyTitle title='props rock' color='peru' />
        <MyTitle title='pop rocks pop' color='mediumaquamarine' />
        <x-my-component />
        <MyTitle title='think blue count two' color='dodgerblue' />
        <MyTitle title='rebecca was here' color='rebeccapurple' />
      </div>
      ); // the above is all returned. in JavaScript, can only return ONE thing
         // so must have ONE parent and whatever else children (NO SIBLINGS on
         // top level)
  }
});
// use the `stamp`, i.e.
// puts it on the DOM on the specified element
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
