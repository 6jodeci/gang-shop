import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'caps',
          price: '2.100'
        }, {
          id: 2,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'shorts',
          price: '2.100'
        }, {
          id: 3,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'sale',
          price: '2.100'
        },
        {
          id: 4,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'sale',
          price: '2.100'
        },
        {
          id: 5,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'sale',
          price: '2.100'
        },
        {
          id: 6,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'jackets',
          price: '2.100'
        },
        {
          id: 7,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'hoodies',
          price: '2.100'
        },
        {
          id: 8,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'hoodies',
          price: '2.100'
        },
        {
          id: 9,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img: 'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'sale',
          price: '2.100',
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
