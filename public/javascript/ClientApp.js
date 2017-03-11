import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      div(null,
        MyTitleFactory({ title: 'text 1 text 2 text 3', color: 'peru' }),
        MyTitleFactory({ title: 'text 4 text 5 text 6', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'text 7 text 8 text 9', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'text 10 text 11 text 12', color: 'darkred' })
        )
      );
  }
});
// use the `stamp`, i.e.
// puts it on the DOM on the specified element
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
