import React, {FC} from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import DarkUnica from 'highcharts/themes/dark-unica'
import {Card} from '../Card/Card'
import './StockChart.scss'
import {setHighchartsOptions} from '../../../config/highcharts.options'

type MyProps = {
    name: string
    data: number[][]
}

export const StockChart: FC<MyProps> = ({name, data}) => {
    setHighchartsOptions(Highcharts)
    DarkUnica(Highcharts)

    const options = {
        rangeSelector: {
            selected: 1
        },
        series: [{
            type: 'candlestick',
            data: data
        }]
    }

    return (
        <Card>
            <h1 className="stock-chart__title">{name}</h1>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </Card>
    )
}