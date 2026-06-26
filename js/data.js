const products = [
  {
    id: 'derby',
    name: 'Il Derby Fiorentino',
    price: 895,
    tag: 'Oxford · Full-Grain Calfskin · Goodyear Welt',
    image: 'assets/hero_derby.png',
    description: 'A masterpiece of Florentine craftsmanship. This classic derby is cut from a single piece of full-grain calfskin and finished with a traditional Goodyear welt for lifelong durability. Designed in Firenze.',
    details: ['100% Full-Grain Florentine Calfskin', 'Goodyear Welt Construction', 'Hand-stitched leather sole', 'Made in Italy']
  },
  {
    id: 'loafer',
    name: 'Il Morsetto Romano',
    price: 720,
    tag: 'Horsebit Loafer · Vitello Liscio',
    image: 'assets/loafer_romano.png',
    description: 'The definitive Roman horsebit loafer. Unlined for immediate comfort, this shoe molds to your foot effortlessly. Features our signature gold-tone brass hardware.',
    details: ['Vitello Liscio (Smooth Calfskin)', 'Gold-tone brass horsebit', 'Unlined for summer comfort', 'Blake stitched sole']
  },
  {
    id: 'belt',
    name: 'La Cintura Milano',
    price: 285,
    tag: 'Cintura · Full-Grain',
    image: 'assets/cintura_milano.png',
    description: 'An essential accessory for the tailored wardrobe. Crafted from the same vegetable-tanned leather as our footwear, ensuring a perfect patina match over time.',
    details: ['Vegetable-tanned full-grain leather', 'Solid brass buckle, antique finish', '3.5cm width', 'Hand-painted edges']
  },
  {
    id: 'weekender',
    name: 'Il Viaggio Veneziano',
    price: 1480,
    tag: 'Borsa Weekender · Cuoio Naturale',
    image: 'assets/weekender_bag.png',
    description: 'The ultimate travel companion. Constructed from heavy-duty natural Cuoio leather that develops a deep, rich patina with every journey. Features solid brass hardware and a detachable shoulder strap.',
    details: ['Cuoio Naturale leather', 'Solid brass hardware', 'Cotton twill lining', 'Cabin approved size']
  },
  {
    id: 'brogue',
    name: 'Il Brogue Britannico',
    price: 945,
    tag: 'Full Brogue · Vitello Verde Inglese',
    image: 'assets/brogue_shoe.png',
    description: 'A Neapolitan interpretation of the classic British brogue. Rendered in an exclusive deep English green calfskin, featuring intricate hand-punched detailing and a robust storm welt.',
    details: ['Vitello Verde Inglese (Green Calfskin)', 'Hand-punched broguing', 'Storm welt for weather resistance', 'Double leather sole']
  }
];

function getProductById(id) {
  return products.find(p => p.id === id);
}
