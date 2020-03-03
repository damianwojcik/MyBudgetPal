import React from 'react';
import EntryItem from '../components/styles/EntryItem';
import salaryIcon from '../assets/icons/salary.svg';
import rentIcon from '../assets/icons/rent.svg';
import transferIcon from '../assets/icons/transfer.svg';
import giftIcon from '../assets/icons/gift.svg';
import groceryIcon from '../assets/icons/grocery.svg';
import houseIcon from '../assets/icons/house.svg';
import travelIcon from '../assets/icons/travel.svg';
import transportIcon from '../assets/icons/transport.svg';
import joyIcon from '../assets/icons/joy.svg';

const Entry = ({ id, category, notes, type, amount, clicked }) => {
  let categoryIcon;

  // TODO: DRY with EntryAdd.js - change labels to <i> with onClick
  switch (category) {
    case 'salary':
      categoryIcon = (
        <i className="salary">
          <img src={salaryIcon} alt="Salary" />
        </i>
      );
      break;
    case 'rent':
      categoryIcon = (
        <i className="rent">
          <img src={rentIcon} alt="Rent" />
        </i>
      );
      break;
    case 'transfer':
      categoryIcon = (
        <i className="transfer">
          <img src={transferIcon} alt="Transfer" />
        </i>
      );
      break;
    case 'gift':
      categoryIcon = (
        <i className="gift">
          <img src={giftIcon} alt="Gift" />
        </i>
      );
      break;
    case 'grocery':
      categoryIcon = (
        <i className="grocery">
          <img src={groceryIcon} alt="Grocery" />
        </i>
      );
      break;
    case 'house':
      categoryIcon = (
        <i className="house">
          <img src={houseIcon} alt="House" />
        </i>
      );
      break;
    case 'travel':
      categoryIcon = (
        <i className="travel">
          <img src={travelIcon} alt="Travel" />
        </i>
      );
      break;
    case 'transport':
      categoryIcon = (
        <i className="transport">
          <img src={transportIcon} alt="Transport" />
        </i>
      );
      break;
    case 'joy':
      categoryIcon = (
        <i className="joy">
          <img src={joyIcon} alt="Joy" />
        </i>
      );
      break;
    default:
      categoryIcon = category;
  }
  return (
    <EntryItem>
      {categoryIcon}
      <span className="title">{notes}</span>
      <span className="price">
        {type === 'expense' ? '-' : ''}
        {amount} PLN
      </span>
      <button onClick={() => clicked(id)}>&times;</button>
    </EntryItem>
  );
};

export default Entry;
