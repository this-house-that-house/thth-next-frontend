'use client'

import Link from 'next/link';
import { ROUTES } from '../../constants/routes';
import * as style from './index.css';
import { usePathname } from 'next/navigation'
import Home from '../../svgs/home.svg';
import Map from '../../svgs/map.svg';
import Checklist from '../../svgs/checklist.svg';
import MyPage from '../../svgs/my-page.svg';
import { icon } from '../theme.css';

export const Nav = () => {
  const pathname = usePathname() || ROUTES.HOME;
  const isSamePath = (path) => pathname === path;

  const navs = [
    { name: '이집저집', path: ROUTES.HOME, Icon: Home },
    { name: '지도', path: ROUTES.MAP, Icon: Map },
    { name: '체크리스트', path: ROUTES.CHECKLIST, Icon: Checklist },
    { name: '마이페이지', path: ROUTES.MY_PAGE, Icon: MyPage },
  ]
  return (
    <nav>
      <ul className={style.nav}>
        {
          navs.map(({ name, path, Icon }) => (
            <li key={path}>
              <Link className={style.link({ isActive: isSamePath(path) })} href={path}>
                <Icon alt={name} className={icon({ color: isSamePath(path) ? 'primary' : 'gray' })} />
                <span>{name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};