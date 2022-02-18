import React, {FC} from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import DarkUnica from 'highcharts/themes/dark-unica'
import {Card} from '../Card/Card'

type MyProps = {
    name: string
    data: number[][]
}

export const StockChart:FC<MyProps> = ({name, data}) => {
    DarkUnica(Highcharts)

    const options = {
        rangeSelector: {
            selected: 1
        },
        title: {
            text: name
        },
        series: [{
            type: 'candlestick',
            data: data
        }]
    }

    return (
        <Card>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </Card>
    )
}