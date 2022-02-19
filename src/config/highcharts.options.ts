export const setHighchartsOptions = (H:any) => {
    H.setOptions({
        chart: {
            style: {
                fontFamily: "'Roboto', 'Arial', sans-serif"
            }
        },
        lang: {
            loading: 'Загрузка...',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
            rangeSelectorFrom: 'С',
            rangeSelectorTo: 'По',
            rangeSelectorZoom: 'Период',
            downloadPNG: 'Скачать PNG',
            downloadJPEG: 'Скачать JPEG',
            downloadPDF: 'Скачать PDF',
            downloadSVG: 'Скачать SVG',
            printChart: 'Напечатать график'
        },
        rangeSelector: {
            buttons: [
                {
                    count: 1,
                    type: 'month',
                    text: '1М'
                },
                {
                    count: 3,
                    type: 'month',
                    text: '3M'
                },
                {
                    count: 6,
                    type: 'month',
                    text: '6M'
                },
                {
                    count: 1,
                    type: 'year',
                    text: 'Год'
                },
                {
                    type: 'all',
                    text: 'Все'
                }
            ],
            inputEnabled: false,
            selected: 0
        },
        xAxis: {
            labels: {
                style: {
                    fontSize: '14px'
                }
            }
        }
    })
}