"use client";

import * as Styles from '../components/index.css'
import Search from '../components/Search'
import SettingIcon from '../svgs/setting.svg'
import { useEffect } from 'react'

export default function () {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=124e2fd18582d8ab99f4e5b57ee8e7f1&autoload=false';
    document.body.appendChild(script);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);


        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

            var locPosition = new kakao.maps.LatLng(lat, lon);

            displayMarker(locPosition);

            function displayMarker(locPosition) {
              const marker = new kakao.maps.Marker({
                map: map,
                position: locPosition,
                image: new kakao.maps.MarkerImage(
                  '/imgs/my-marker.png',
                  new kakao.maps.Size(40, 40),
                  { offset: new kakao.maps.Point(20, 20) }
                ),
              });
              map.setCenter(locPosition);
            }
          });

        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

          var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
            message = 'geolocation을 사용할수 없어요..'

          displayMarker(locPosition, message);
        }
      });
    };
    script.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div className={Styles.container} style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      {/* 상단 바 */}
      <div className={Styles.topBar} style={{
        gap: 16,
        padding: '18px 21px 18px 17px',
      }}>
        <Search placeholder="지역, 주소, 건물명을 입력해보세요" />
        <SettingIcon />
      </div>
      <div id="map" style={{
        width: '100%',
        flex: 1,
      }} />
    </div>
  )
}