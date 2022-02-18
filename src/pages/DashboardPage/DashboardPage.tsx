import React from 'react'
import {LayoutAsSidebar} from '../../layouts/LayoutAsSidebar/LayoutAsSidebar'
import {StockChart} from '../../components/common/StockChart/StockChart'
import './DashboardPage.scss'
import data from '../../json/stockData.json'

export const DashboardPage = () => {

    return (
        <LayoutAsSidebar>
            <div className="dashboard-page">
                <StockChart name="BITOC" data={data}/>
                <StockChart name="BITOC" data={data}/>
                <StockChart name="BITOC" data={data}/>
            </div>
        </LayoutAsSidebar>
    )
}