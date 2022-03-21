<template>
  <div class="row row-cols-1 row-cols-md-4">
    <div
      class="col md-4 p-3 baseBlock"
      v-for="item in items"
      :key="item.itemName"
    >
      <div class="card">
        <img
          :src="item.imagePath"
          class="card-img-top image-responsive"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.itemName }}</h5>
          <p class="card-text">{{ item.itemDescription }}</p>
          <div>
            <div class="price float-start">&euro;{{ item.price }}</div>
            <a
              class="btn btn-outline-success float-end"
              href="/add-to-cart/#"
              role="button"
              >Add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1>{{names}}</h1>
</template>
<script>

import useStore from 'vuex';

const store=useStore()

export default {
  name: "gallery-view",
  
  data(){
return { items : [
    {
        id:1,
        imagePath:
            "https://cdn11.bigcommerce.com/s-zgr9xks/images/stencil/1280x1280/products/418/882/duracell_batteries__74167__02229.1566415619.jpg?c=2",
        itemName: "Duracell",
        itemDescription: "2 x 3V battery pack.",
        price: 20,
        inventory: 2,
    },
    {
        id:2,
        imagePath:
            "https://images.homedepot-static.com/productImages/db677207-5610-4302-8212-68373b20a95a/svn/milwaukee-power-tool-batteries-48-11-2412-64_1000.jpg",
        itemName: "Li-Ion battery",
        itemDescription:
            "Improving run-time, power and speed; the M12 XC 3.0Ah High Capacity REDLITHIUM Battery 2-Pack will provide 2X the run-time and increased performance .",
        price: 60,
        inventory: 3,
    },
    {
        id:3,
        imagePath:
            "https://multibat.nl/5200-pdt_540/optima-yellowtop-yts-55l-12v-75ah.jpg",
        itemName: "Max Max Battery D",
        itemDescription:
            "Energizer Max batteries deliver dependable, powerful performance that keeps going and going, providing long life for the devices you use every day.",
        price: 45,
        inventory: 5,
    },
    {
        id:4,
        imagePath:
            "https://m.media-amazon.com/images/I/41r48BHi41L._SL500_.jpg",
        itemName: "2 x Energizer",
        itemDescription:
            "2 BATTERY 9V LITHIUM BATTERY ENERGIZER L522 750MAH EM9V VERY HIGH CAPACITY BATTERIES.",
        price: 35,
        inventory: 4,
    },
    {
        id:5,
        imagePath:
            "https://canadiantire.scene7.com/is/image/CanadianTire/0102498_1?defaultImage=image_na_EN&imageSet=CanadianTire/0102498_1?defaultImage=image_na_EN&id:3rmrp0&fmt=jpg&fit=constrain,1&wid:323&hei=323",
        itemName: "MotoMaster Nautilus Ultra group",
        itemDescription:
            "MotoMaster Nautilus Ultra Group 24 AGM Deep Cycle Battery premium AGM technology provides extra power and durability with no maintenance",
        price: 224,
        inventory: 3,
    },
    {
        id:6,
        imagePath:
            "https://i1.adis.ws/i/washford/105605/Yuasa-U1R-Garden-Battery.webp?$sfcc_tile$&w=340",
        itemName: "Yuasa U1 Specialist and Garden Battery",
        itemDescription:
            "The Yuasa U1 Specialist and Garden Battery is designed for ride on mowers, kit cars, garden tractors and specialist applications.",
        price: 101,
        inventory: 4,
    },
    {
        id:7,
        imagePath:
            "https://www.inventelectronics.com/wp-content/uploads/2015/01/9vHW1.png",
        itemName: "Hi-Watt 9V battery",
        itemDescription:
            "The Hi Watt 9V battery is an affordable, reliable, dedicated low-power solution to provide sufficient energy to your circuit. Ideally used in circuits with low power consumption so that it can work for longer durations.",
        price: 5,
        inventory: 6,
    },
    {
        id:8,
        imagePath:
            "https://cdn.getfpv.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/z/_zohd-lionpack-18650-lithium-ion-battery-14.8v-3.5ah-_4s1p-3500mah_5.jpg",
        itemName: "ZOHD Lionpack 18650",
        itemDescription:
            "4S1P 3500mAh 14.8V Li-ion Battery  The Hi Watt 9V battery is an affordable, reliable, dedicated low-power solution to provide sufficient energy to your circuit. Ideally used in circuits with low power consumption so that it can work for longer durations.",
        price: 41,
        inventory: 5,
    }
],

}
  },
  mounted() {
    // this.$store.dispatch("setProducts");
  },
  computed: {
    //items() {
     // console.log("hello "+  this.$store.getters.getNames);
     // return this.$store.getters.getNames
   // },
   names () {
      return $store.state.names
    }
  },
};  
</script>
<style>
body {
  background: #eee;
}
.baseBlock {
  margin: 0px 0px 35px 0px;
  padding: 0 0 15px 0px;
  border-radius: 5px;
  overflow: hidden;
  min-height: 390px;
  background: #fff;
  -moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.baseBlock:hover {
  -webkit-transform: translate(0, -8px);
  -moz-transform: translate(0, -8px);
  -ms-transform: translate(0, -8px);
  -o-transform: translate(0, -8px);
  transform: translate(0, -8px);
  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
}

.price {
  color: #303030;
  font-size: 20px;
}
</style>