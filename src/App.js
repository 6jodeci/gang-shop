import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        }, {
          id: 2,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        }, {
          id: 3,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 4,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 5,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 6,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 7,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 8,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 9,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100',
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
