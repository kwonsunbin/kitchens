import React, { Component } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';

class Mapboxnaver extends Component {
  render() {
    const navermaps = window.naver.maps;
    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          heith: '100%', // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 35.889129, lng: 128.581343 }} // 지도 초기 위치35.889129, 128.581343
        defaultZoom={15}
      >
        <Marker
          key={1}
          position={new navermaps.LatLng(35.889129, 128.581343)}
          animation={2}
        />
      </NaverMap>
    );
  }
}

export default Mapboxnaver;
