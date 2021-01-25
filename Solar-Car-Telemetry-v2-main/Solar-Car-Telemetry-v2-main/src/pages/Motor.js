import React from 'react'
import Rpm from '../components/Motor/Rpm'
import Speed from '../components/Motor/Speed'
import Regen from '../components/Motor/Regen'
import GridLayout from 'react-grid-layout';

function Motor() {
    return (
        <div className='motor'>
        <GridLayout className="layout" cols={12} rowHeight={40} width={1900}>
            <div key="rpmWidget" data-grid={{x: 0, y: 0, w: 5, h: 6, minW: 6, minH: 4}}><Rpm /></div>
            <div key="speedWidget" data-grid={{x: 0, y: 10, w: 5, h: 6, minW: 3, minH: 3}}><Speed /></div>
            <div key="regenWidget" data-grid={{x: 5, y: 0, w: 5, h: 8, minW: 3, minH: 3}}><Regen /></div>
        </GridLayout>
        </div>
    );
}

export default Motor;