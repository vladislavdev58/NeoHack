import React, {useEffect} from 'react'
import './NotificationPage.scss'
import {LayoutAsSidebar} from '../../layouts/LayoutAsSidebar/LayoutAsSidebar'
import {Card} from '../../components/common/Card/Card'
import {NotificationSubs} from '../../components/NotificationSubs/NotificationSubs'
import CoinStore from '../../store/CoinStore'
import {observer} from 'mobx-react-lite'
import {TypeCoin} from '../../types/TypeCoin'

export const NotificationPage = observer(() => {
    useEffect(() => {
        CoinStore.getCoins()
    }, [])
    return (
        <LayoutAsSidebar>
            <Card className="personal-page">
                <h1 className="personal-page__title">Подписка на уведомления</h1>

                <div className="personal-page__list">
                    {CoinStore.coins &&
                        CoinStore.coins.map((item: TypeCoin) =>
                            <NotificationSubs
                                key={item._id}
                                name={item.name}
                                isSubscribe={false}
                                id={item._id}/>
                        )
                    }
                </div>
            </Card>
        </LayoutAsSidebar>
    )
})