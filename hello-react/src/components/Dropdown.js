import React, { PureComponent } from 'react';
import uuid from 'uuid';
import css from './Dropdown.module.scss';

// autre option : CSS in JS
// https://github.com/MicheleBertoli/css-in-js

class Dropdown extends PureComponent {
  state = {
    showList: false,
  };

  /*
  shouldComponentUpdate(nextProps) {
    return this.state.items !== nextProps.items;
  }
  */

  static getDerivedStateFromProps(props, state) {
    return {
      selected: state.selected || props.selected || props.items[0],
      items: props.items,
    };
  }

  handleClickSelected = () => {
    this.setState({
      showList: !this.state.showList,
    });
  }

  handleClickItem = (item) => {
    this.setState({
      showList: false,
      selected: item,
    });
    this.props.onSelected(item);
  }

  render() {
    let dropdownList;

    const {items = ['Value'], selected = items[0] } = this.state;
    const dropdownListItems = items.map((item) => 
      <div key={uuid()} 
           className={css.DropdownListItem}
           onClick={() => this.handleClickItem(item)}>
        {item}
      </div>
    );

    if (this.state.showList) {
      dropdownList = (
        <div className={css.DropdownList}>
          {dropdownListItems}
        </div>
      );
    }

    return (
      <div className={css.Dropdown}>
        <div className={css.DropdownSelected} onClick={this.handleClickSelected}>
          {selected}
        </div>
        {dropdownList}
      </div>
    );
  }
}

export default Dropdown;