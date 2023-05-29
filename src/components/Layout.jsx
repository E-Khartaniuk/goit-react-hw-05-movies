import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/Layout.module.css';

export function Layout() {
  return (
    <div>
      <nav>
        <ul className={css.navigation}>
          <li className={css.navItem}>
            <NavLink to="/" className={css.navLink}>
              Home{' '}
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/movies" className={css.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
