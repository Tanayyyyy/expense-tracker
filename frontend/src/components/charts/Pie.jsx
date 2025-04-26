import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useUIStore } from '../../context/uiStore';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
    const { currentMode } = useUIStore();

    return (
        <div className=''>
            <AccumulationChartComponent
                id={id}
                legendSettings={{ visible: legendVisiblity, background: 'white' }}
                height={height}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                tooltip={{ enable: true }}
            >
                <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective
                        name="Sale"
                        dataSource={data}
                        xName="x"
                        yName="y"
                        innerRadius="60%"
                        startAngle={0}
                        endAngle={360}
                        radius="100%"
                        explode
                        explodeOffset="10%"
                        explodeIndex={2}
                        dataLabel={{
                            visible: true,
                            name: 'text',
                            position: 'Inside',
                            font: {
                                fontWeight: '600',
                                color: '#fff',
                            },
                        }}
                    />
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>

    );
};

export default Doughnut;
