import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Laptops',
      description:
        'HP 245 G9 Silver AMD Ryzen 5 Hexa Core 5625U - (8 GB/512 GB SSD/Windows 11 Home) 245 G9 Laptop  (14.1 inch, Silver, 1.47 kg)',
      imageUrl:
        'https://th.bing.com/th/id/R.394d42a12a654a01aff55a4ac589de48?rik=8meqYWp%2fRiAmDw&riu=http%3a%2f%2fstore.hp.com%2fUKStore%2fHtml%2fMerch%2fImages%2fc05475056_1750x1285.jpg&ehk=hFHW0bsoA4Vrq9NqTnBn9ZROJe9jXLuXOG2U%2bb2O7Wk%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 2,
      name: 'Headphones',
      description:
        'boAt Rockerz 430 w/ Beast Mode(40ms Low Latency),40HRS Playback & 40MM Drivers Bluetooth  (On the Ear).',
      imageUrl:
        'https://th.bing.com/th/id/OIP.CtpgqK58UFOSKzpNwy2AswHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    },
    {
      id: 3,
      name: 'Televisions',
      description:
        'VW 140 cm (55 inches) Pro Series 4K Ultra HD Smart QLED Google TV VW55GQ1 (Black)',
      imageUrl:
        'https://www.sencor.com/Sencor/media/content/Products/SLE32S700TCS-2.jpg',
    },
  ];

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
