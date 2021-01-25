import React from 'react'
import Coordinates from '../components/Gps/Coordinates'
import Elevation from '../components/Gps/Elevation'
import GridLayout from 'react-grid-layout';

function Gps() {
    return (
        <div className='gps'>
        <GridLayout className="layout" cols={12} rowHeight={40} width={1900}>
            <div key="coordinatesWidget" data-grid={{x: 0, y: 0, w: 5, h: 6, minW: 6, minH: 4}}><Coordinates/></div>
            <div key="elevationWidget" data-grid={{x: 0, y: 0, w: 5, h: 6, minW: 6, minH: 4}}><Elevation/></div>
        </GridLayout>
        </div>
    );
}

export default Gps;