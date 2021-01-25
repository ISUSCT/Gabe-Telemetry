import React from 'react'
import OutputGraph from '../components/Solar/OutputGraph'
import Output from '../components/Solar/Output'
import GridLayout from 'react-grid-layout';
import PowerTrackers from '../components/Solar/PowerTracker'

function Solar() {
    return (
        <div className='solar'>
        <GridLayout className="layout" cols={12} rowHeight={40} width={1900}>
            <div key="outputWidget" data-grid={{x: 0, y: 0, w: 5, h: 6, minW: 6, minH: 4}}><Output/></div>
            <div key="graphWidget" data-grid={{x: 0, y: 10, w: 5, h: 6, minW: 3, minH: 3}}><OutputGraph /></div>
            <div key="powerTrackerWidget" data-grid={{x: 0, y: 10, w: 5, h: 6, minW: 3, minH: 3}}><PowerTrackers /></div>
        </GridLayout>
        </div>
    );
}

export default Solar;