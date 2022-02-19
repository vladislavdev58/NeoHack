import React, {useEffect} from 'react'
import {LayoutAsSidebar} from '../../layouts/LayoutAsSidebar/LayoutAsSidebar'
import {StockChart} from '../../components/common/StockChart/StockChart'
import './DashboardPage.scss'
import data from '../../json/stockData.json'
import {TwoColumnLayout} from '../../layouts/TwoColoumnLayout/TwoColumnLayout'
import {NotificationList} from '../../components/NotificationList/NotificationList'
import {getOne} from '../../services/candles.services'

export const DashboardPage = () => {

    useEffect(() => {
        getOne()
    }, [])

    return (
        <LayoutAsSidebar>
            <TwoColumnLayout infoComponent={<NotificationList/>}>
                <div className="dashboard-page">
                    <div className="dashboard-page__content">
                        <StockChart name="BITOC" data={data}/>
                        <StockChart name="BITOC" data={data}/>
                        <StockChart name="BITOC" data={data}/>
                    </div>
                </div>
            </TwoColumnLayout>
        </LayoutAsSidebar>
    )
}