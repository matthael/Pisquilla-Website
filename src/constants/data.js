import images from './images';

const wines = [
  {
    title: 'Jantinha completa',
    price: 'R$18,50',
    tags: 'Arroz, Feijão Tropeiro, Mandioca, Vinagrete e um Espetinho',
  },
  {
    title: 'Jantinha simples',
    price: 'R$ 13,00',
    tags: 'Arroz, Feijão Tropeiro, Mandioca a e Vinagrete',
  },
  {
    title: 'Porções',
    price: 'R$8,00',
    tags: 'Arroz; Feijão Tropeiro; Mandioca; Vinagrete',
  },
  {
    title: 'Carne Bovina',
    price: 'R$9,00',
    tags: 'Alcatra;Contrafilé c/s gordura; Carne de Sol; Kafta c/ Queijo',
  },
  {
    title: 'Carne de Frango',
    price: 'R$9,00',
    tags: 'Asinha; Filé de Frango; Medalhão de Frango',
  },
];

const cocktails = [
  {
    title: 'Refrigerante 1,5L',
    price: 'R$9,00',
    tags: 'Coca-Cola, Fanta, Guaraná e Sprite',
  },
  {
    title: "Refrigerante Lata",
    price: 'R$5,00',
    tags: 'Coca-Cola, Fanta, Guaraná e Sprite',
  },
  {
    title: 'Suco 1L',
    price: 'R$8,00',
    tags: 'Laranja, Uva, Abacaxi e Manga',
  },
  {
    title: 'Cerveja 269ml',
    price: 'R$4,50',
    tags: 'Corona, Amstel e Heineken',
  },
  {
    title: 'Cerveja 350ml',
    price: 'R$5,50',
    tags: 'Corona, Amstel e Heineken',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Alexandre Moraes',
    subtitle: 'Levamos nossa família para desfrutar de um churrasquinho neste restaurante, saimos muito satisfeitos com churrasquinho',
  },
  {
    imgUrl: images.award02,
    title: 'José Lucio',
    subtitle: 'Adorei o churrasquinho deste lugar! A carne estava suculenta e saborosa, perfeitamente grelhada.',
  },
  {
    imgUrl: images.award03,
    title: 'Roberto Alves',
    subtitle: 'Sou um amante de churrasco e posso dizer que este lugar realmente sabe como preparar um bom churrasquinho.',
  },
  {
    imgUrl: images.award05,
    title: 'Francisco Melo ',
    subtitle: 'Adoro a atmosfera descontraída deste lugar! O churrasquinho é feito na hora e servido quentinho, o que é ótimo.',
  },
];

export default { wines, cocktails, awards };
