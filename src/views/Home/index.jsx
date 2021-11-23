import React from 'react'
import "../../../src/assets/css/style.css"
import Product from "../../components/Product"

function Home() {
  return (
    <div className="home">
      <img className="home__img" src="https://m.media-amazon.com/images/I/61IkiPz43DL._SX3000_.jpg" alt="" />
      <div className="home__row">
        <Product
          id="123"
          title="Algum titulo"
          price={20.30}
          rating={4}
          img="https://m.media-amazon.com/images/I/41GZCWFJB1L._AC_SY200_.jpg"
        />
        <Product
          id="123"
          title="Algum titulo"
          price={20.30}
          rating={4}
          img="https://m.media-amazon.com/images/I/51pZFZqWQuL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Algum titulo"
          price={20.30}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/new_dashcard/quadimagecard_tools2_186x116._SY116_CB422516659_.jpg"
        />
        <Product
          id="123"
          title="Algum titulo"
          price={20.30}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/G/32/kindle/email/Novembro_2021/379x304._SY304_CB638474534_.jpg"
        />
        <Product
          id="123"
          title="Algum titulo"
          price={20.30}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Sheldon/FTV_379x304_vermelho._SY304_CB416171296_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Algum titulo"
          price={20.30}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/2020/NTA_Bubbles/473_CardsRedesign_Reembolso_Alt_200x200._CB432149031_.jpg"
        />
      </div>


    </div>
  )
}

export default Home
