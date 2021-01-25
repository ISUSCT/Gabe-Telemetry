import React from 'react'
import Coordinates from '../components/Gps/Coordinates'
import Voltage from '../components/Battery/Voltage'
import Amperage from '../components/Battery/Amperage'
import Rpm from '../components/Motor/Rpm'
import Speed from '../components/Motor/Speed'
import Output from '../components/Solar/Output'
import GridLayout from 'react-grid-layout';
import CellData from '../components/Battery/CellData'

function Battery() {
    return (
    <div className="battery">
        <GridLayout className="layout" cols={12} rowHeight={40} width={1900}>
            <div key="speedWidget" data-grid={{x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 4}}><Speed /></div>
            <div key="rpmWidget" data-grid={{x: 4, y: 0, w: 4, h: 4, minW: 4, minH: 4}}><Rpm /></div>
            <div key="voltageWidget" data-grid={{x: 0, y: 1, w: 4, h: 5, minW: 3, minH: 3}}><Voltage /></div>
            <div key="amperageWidget" data-grid={{x: 8, y: 1, w: 4, h: 4, minW: 3, minH: 3}}><Amperage /></div>
            <div key="solarOutputWidget" data-grid={{x: 0, y: 2, w: 4, h: 6, minW: 3, minH: 3}}><Output /></div>
            <div key="coordinatesWidget" data-grid={{x: 4, y: 0, w: 4, h: 4, minW: 3, minH: 3}}><Coordinates /></div>
            <div key="cellsWidget" data-grid={{x: 4, y: 0, w: 4, h: 10, minW: 3, minH: 3}}><CellData /></div>
        </GridLayout>
        </div>
    );
}

export default Battery;
