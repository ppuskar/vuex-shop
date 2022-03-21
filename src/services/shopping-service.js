/**
 * Mocking client-server processing
 */


 const _products = [
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
]

export default {
    getProducts(cb) {
        setTimeout(() => cb(_products), 100)
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver)
                ? cb()
                : errorCb()
        }, 100)
    }
}