import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoris: [
                {
                    key: 'all',
                    name: 'Все товары'
                },
                {
                    key: 'caps',
                    name: 'Кепки'
                },
                {
                    key: 'jackets',
                    name: 'Куртки'
                },
                {
                    key: 'shorts',
                    name: 'Шорты'
                },
                {
                    key: 'accessories',
                    name: 'Аксессуары'
                },
                {
                    key: 'pants',
                    name: 'Штаны'
                },
                {
                    key: 'sale',
                    name: 'Sale'
                },
                {
                    key: 't-shirts',
                    name: 'Футболки'
                },
                {
                    key: 'longsleeves',
                    name: 'Лонгсливы'
                },
                {
                    key: 'hoodies',
                    name: 'Толстовки'
                },
                {
                    key: 'shirts',
                    name: 'Рубашки'
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categoris.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories