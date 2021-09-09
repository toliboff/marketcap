import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { fetchAllMarkets } from '../redux/categories/categories';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMarkets());
  }, []);

  const state = useSelector((state) => state.stockmarketReducer);
  return (
    <div>
      <Header title="Markets" count={state.totalCap} />
      <ul className="categories">
        {state.markets.map((market) => (
          <li key={market.name}>
            <NavLink to="/details">
              <span>{market.name}</span>
              <div>
                {market.marketCap}
                <span>USD</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
