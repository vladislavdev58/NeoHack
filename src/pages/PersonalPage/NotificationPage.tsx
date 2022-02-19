import React from 'react'
import './NotificationPage.scss'
import {LayoutAsSidebar} from '../../layouts/LayoutAsSidebar/LayoutAsSidebar'
import {Card} from '../../components/common/Card/Card'
import {NotificationSubs} from '../../components/NotificationSubs/NotificationSubs'

export const NotificationPage = () => {
    return (
        <LayoutAsSidebar>
            <Card className="personal-page">
                <h1 className="personal-page__title">Подписка на уведомления</h1>


                <div className="personal-page__list">
                    <NotificationSubs name="Все криптовалюты" isSubscribe={true} isAll={true}/>

                    <NotificationSubs name="Bitoc" isSubscribe={true}/>
                    <NotificationSubs name="Hrenoc" isSubscribe={false}/>
                    <NotificationSubs name="Pupok" isSubscribe={false}/>
                </div>
            </Card>
        </LayoutAsSidebar>
    )
}