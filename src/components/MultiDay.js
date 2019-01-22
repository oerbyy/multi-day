import React, {Component} from 'react';
import autoBind from 'react-autobind';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';

import {getPrettyDate, getISODate} from '../helpers/helperUtil';

export class MultiDay extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      startDate: new Date(),
      options: []
    };
  }

  handleChangeCalendar(date) {
    let isoDate = getISODate(date);

    if (this.state.options.some(item => item === isoDate)) return;

    this.setState({
      options: [...this.state.options, isoDate],
      startDate: date
    });
  }

  handleChangeSelector(e, obj) {
    switch (obj.action) {
      case 'remove-value':
        let options = this.state.options.filter(item => item !== obj.removedValue.value);
        this.setState({options: [...options]});
        break;

      case 'clear':
        this.setState({options: []});
        break;

      default:
        break;
    }
  }

  render() {
    const {options} = {...this.state};

    let selectOptions = options.map(item => {
      return {
        value: item,
        label: getPrettyDate(item)
      };
    });

    return (
      <React.Fragment>
        <div>
          <DatePicker selected={this.state.startDate} onChange={this.handleChangeCalendar} />
        </div>
        <div> </div>
        <div className="selector">
          <Select
            isMulti
            name="multidays"
            value={selectOptions}
            options={selectOptions}
            onChange={this.handleChangeSelector}
            styles={colourStyles}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MultiDay;

const colourStyles = {
  multiValue: (styles, data) => {
    let day = data.data ? data.data.value.substr(8, 2) : 'ff';
    let bgColor = `rgb(${Number(day) * 5},${255 - Number(day) * 4},${Number(day) * 5})`;

    return {
      ...styles,
      backgroundColor: bgColor
    };
  },
  multiValueLabel: (styles, data) => {
    let day = data.data ? data.data.value.substr(8, 2) : 'ff';
    let textColor = `rgb(${255 - Number(day) * 5},${Number(day) * 2},${day})`;

    return {
      ...styles,
      color: textColor
    };
  }
};
