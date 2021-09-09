import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { fetchAllMarkets } from '../redux/categories/categories';
import { fetchCompanies } from '../redux/companies/companies';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMarkets());
  }, []);

  const selectMarket = (market) => {
    dispatch(fetchCompanies(market));
  };

  const state = useSelector((state) => state.stockmarketReducer);
  return (
    <div>
      <Header title="Market" count={state.totalCap} />
      <ul className="categories">
        {state.markets.map((market) => (
          <li key={market.name}>
            <NavLink to="/details" onClick={() => selectMarket(market.name)}>
              <span>{market.name}</span>
              <div>
                $
                {market.marketCap}
                <span>billion</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
