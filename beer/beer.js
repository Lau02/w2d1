let beer = [
  {
    id: 113,
    name: "Hello My Name Is Ingrid",
    tagline: "Sophisticated Bergmanesque Beer.",
    first_brewed: "12/2010",
    description:
      "A Double IPA with cloudberries added to the conditioning tank. One thing is certain – this Swedish inspired Double IPA is not as innocent as she first appears. A seductive body of rich malts and a buxom amount of Citra, Nelson Sauvin and Bramling Cross hops have been added to fresh Scandinavian cloudberries to deliver this beer’s tart finish.",
    image_url: "https://images.punkapi.com/v2/113.png",
    abv: 8.2,
    ibu: 42,
    target_fg: 1013,
    target_og: 1078,
    ebc: 70,
    srm: 35,
    ph: 4.4,
    attenuation_level: 83.3,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: null }],
      fermentation: { temp: { value: 22, unit: "celsius" } },
      twist: "Cloudberries: 1kg"
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: { value: 6.86, unit: "kilograms" }
        },
        { name: "Caramalt", amount: { value: 0.93, unit: "kilograms" } }
      ],
      hops: [
        {
          name: "Columbus",
          amount: { value: 25, unit: "grams" },
          add: "start",
          attribute: "bitter"
        },
        {
          name: "Centennial",
          amount: { value: 25, unit: "grams" },
          add: "start",
          attribute: "bitter"
        },
        {
          name: "Columbus",
          amount: { value: 12.5, unit: "grams" },
          add: "end",
          attribute: "flavour"
        },
        {
          name: "Centennial",
          amount: { value: 12.5, unit: "grams" },
          add: "end",
          attribute: "flavour"
        },
        {
          name: "Nelson Sauvin",
          amount: { value: 25, unit: "grams" },
          add: "end",
          attribute: "flavour"
        },
        {
          name: "Bramling Cross/ First Gold",
          amount: { value: 37.5, unit: "grams" },
          add: "end",
          attribute: "flavour"
        },
        {
          name: "NZ Nelson Sauvin",
          amount: { value: 71.5, unit: "grams" },
          add: "dry hop",
          attribute: "aroma"
        },
        {
          name: "Bramling Cross",
          amount: { value: 71.5, unit: "grams" },
          add: "dry hop",
          attribute: "aroma"
        },
        {
          name: "Simcoe",
          amount: { value: 71.5, unit: "grams" },
          add: "dry hop",
          attribute: "aroma"
        }
      ],
      yeast: "Wyeast 1272 - American Ale II™"
    },
    food_pairing: [
      "Crayfish with a chilli, coriander infused butter dip",
      "Smörgås with cream topping",
      "Cardamom cake with powder sugar and cloudberry jam"
    ],
    brewers_tips:
      "Add the cloudberries to your beer when racking the beer after primary fermentation. Grind them into a paste to allow maximum flavour extraction.",
    contributed_by: "Sam Mason <samjbmason>"
  }
];

beer = beer[0]

// let amount = 0

// beer.ingredients.hops.forEach(hop => {
//     amount += hop.amount.value
//     console.log(`${hop.name}, ${hop.amount.value}gr`)
// });

// console.log(amount)

let acumulatorInitialValue = 0;

// as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
let totalGrams = beer.ingredients.hops.reduce((ac, hop) => ac += hop.amount.value, acumulatorInitialValue)
console.log(totalGrams)

// // obj initialization
// let obj = {}

// // creating dynamically object properties
// for (let i = 0 ; i < 100; i++) {
//     obj["prop" + i] = Math.random()
// }

// // reading dynamically object properties
// for (let i = 10 ; i < 20; i++) {
//     console.log(obj["prop" + i]);
// }