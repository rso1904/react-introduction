import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import './react-big-calendar.css';
import { Header } from '../componets';
import {SideNav, SideNavItem, Button} from 'react-materialize';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);

    this.getMonth = this.getMonth.bind(this);
  }

  getMonth(month){
    return month-1;
  }

  render() {

    BigCalendar.momentLocalizer(moment);
    let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
    const myEventsList=[  
      {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2017, this.getMonth(8), 19),
        'end': new Date(2017, this.getMonth(9), 19)
      },
    ];


    return (
      <div className="App">
          <Header />
        <div className="App-contents"> 
          <BigCalendar
            events={myEventsList}
            startAccessor= 'start'
            endAccessor= 'end'
            selectable={true}
            style={{height: 800}}
            defaultDate={new Date()}
          />
        </div>
      </div>
    );
  }
}



export default App;
