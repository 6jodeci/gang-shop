import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },{
          id: 2,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },{
          id: 3,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 4,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 5,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 6,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 7,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 8,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100'
        },
        {
          id: 9,
          title: 'Кепка ISSAYA Thistle Logo Cord',
          img:'cap.jpg',
          desc: 'Кепка классической формы, декорированная вышивкой с лого.\n Регулируемый размер.\n Выполнена из плотного вельвета.',
          category: 'cap',
          price: '2.100',
        },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
