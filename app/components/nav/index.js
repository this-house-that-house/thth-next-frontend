'use client'

import Link from 'next/link';
import { ROUTES } from '../../constants/routes';
import * as style from './index.css';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Home from '../../svgs/home.svg';
import Map from '../../svgs/map.svg';
import Checklist from '../../svgs/checklist.svg';
import MyPage from '../../svgs/my-page.svg';

export const Nav = () => {
  const pathname = usePathname() || ROUTES.HOME;
  const isSamePath = (path) => pathname === path;

  const navs = [
    { name: '이집저집', path: ROUTES.HOME, icon: Home },
    { name: '지도', path: ROUTES.MAP, icon: Map },
    { name: '체크리스트', path: ROUTES.CHECKLIST, icon: Checklist },
    { name: '마이페이지', path: ROUTES.MY_PAGE, icon: MyPage },
  ]
  return (
    <nav>
      <ul className={style.nav}>
        {
          navs.map(({ name, path, icon }) => (
            <li key={path} className={style.link({ isActive: isSamePath(path) })} >
              <Image src={icon} alt={name} />
              <Link className={style.a} href={path}>{name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};