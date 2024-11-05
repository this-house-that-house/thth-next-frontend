"use client";

import * as Styles from '../components/index.css'
import Search from '../components/Search'
import SettingIcon from '../svgs/setting.svg'
import { useEffect, useState } from 'react'
import { reqGetHouse } from '../apis/house'
import Drawer from '../components/Drawer'
import HouseSummary from '../components/HouseSummary'

export default function () {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [isOpenHouseDrawer, setIsOpenHouseDrawer] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=124e2fd18582d8ab99f4e5b57ee8e7f1&autoload=false&libraries=clusterer';
    document.body.appendChild(script);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(async () => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        // marker cluster
        const clusterer = new kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
          minLevel: 10,
          calculator: [1],
          styles: [{
            width: '40px', height: '40px',
            background: 'rgba(250, 250, 250, .8)',
            borderRadius: '20px',
            border: '2px solid #FF7D7D',
            color: '#FF7D7D',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '40px',
            fontSize: '20px'
          }]
        });
        const displayMarker = (locPosition, img) => {
          const marker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
            clickable: true,
            image: new kakao.maps.MarkerImage(
              img,
              new kakao.maps.Size(40, 40),
              { offset: new kakao.maps.Point(20, 20) }
            ),
          });
          // map.setCenter(locPosition);
          clusterer.addMarker(marker);
          return marker;
        }

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
          setIsOpenHouseDrawer(false);
        });

        // 내 위치 표시
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

            var locPosition = new kakao.maps.LatLng(lat, lon);

            displayMarker(locPosition, '/imgs/my-marker.png');
          });
        }

        // 집 정보 불러오기
        const res = await reqGetHouse({});
        const houses = res.data;

        houses.forEach((house) => {
          const locPosition = new kakao.maps.LatLng(house.wgs84_latitude, house.wgs84_longitude);
          const marker = displayMarker(locPosition, '/imgs/marker.png');
          kakao.maps.event.addListener(marker, 'click', () => {
            setSelectedHouse(house);
            setIsOpenHouseDrawer(true);
          });
        });


        map.setCenter(new kakao.maps.LatLng(37.450354, 126.659156));
      });
    };
    script.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div className={Styles.container} style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative',
    }}>
      {/* 상단 바 */}
      <div className={Styles.topBar} style={{
        gap: 16,
        padding: '18px 21px 18px 17px',
        zIndex: 100,
      }}>
        <Search placeholder="지역, 주소, 건물명을 입력해보세요" />
        <SettingIcon />
      </div>
      <div id="map" style={{
        width: '100%',
        flex: 1,
      }} />
      <Drawer open={isOpenHouseDrawer}>
        <HouseSummary house={selectedHouse} />
      </Drawer>
    </div>
  )
}