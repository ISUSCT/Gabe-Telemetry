import React from 'react'
import Voltage from '../components/Battery/Voltage'
import Amperage from '../components/Battery/Amperage'
import CellData from '../components/Battery/CellData'
import EstimatedRange from '../components/Battery/EstimatedRange'
import GridLayout from 'react-grid-layout';

function Battery() {
    return (
    <div className="battery">
        <GridLayout className="layout" cols={12} rowHeight={40} width={1900}>
            <div key="rangeWidget" data-grid={{x: 0, y: 0, w: 5, h: 5, minW: 6, minH: 4}}><EstimatedRange /></div>
            <div key="voltageWidget" data-grid={{x: 0, y: 10, w: 5, h: 5, minW: 3, minH: 3}}><Voltage /></div>
            <div key="amperageWidget" data-grid={{x: 0, y: 15, w: 5, h: 5, minW: 3, minH: 3}}><Amperage /></div>
            <div key="cellWidget" data-grid={{x: 5, y: 0, w: 7, h: 10, minW: 4, minH: 6, maxH:10}}><CellData /></div>
        </GridLayout>

    </div> 

    );
}

export default Battery;
