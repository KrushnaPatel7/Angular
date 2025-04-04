import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cities = [
    {
      name: 'Delhi',
      description:
        'The capital city of India, known for its rich history and vibrant culture.',
      image:
        'https://th.bing.com/th/id/R.4497d0dcdcda12265350cbac6a399b93?rik=R4uXNrSYdLYsRg&riu=http%3a%2f%2fwww.spholidays.com%2fimages%2fdelhi-travel-packages.jpg&ehk=6b0lX2ySW00z3Oyz7BhLjJxSL7UG6ckxI3%2btZvDLB9I%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      name: 'Mumbai',
      description:
        'The financial capital of India, home to Bollywood, and a city of dreams.',
      image:
        'https://www.tripsavvy.com/thmb/XpGx4Z2ebrK0-mn3_DzHaPHFqMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1008831236-70a74d9b3fd84f6087d37f1d739a8186.jpg',
    },
    {
      name: 'Jaipur',
      description:
        'Known as the Pink City, Jaipur is famous for its palaces, forts, and rich culture.',
      image: 'https://www.traveldailymedia.com/assets/2019/07/jaipur.jpg',
    },
    {
      name: 'Varanasi',
      description:
        'One of the oldest cities in the world, located on the banks of the Ganges River.',
      image:
        'https://th.bing.com/th/id/OIP.30hazX-3HnSADgCPsn784wHaE8?w=289&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    },
    {
      name: 'Ahmedabad',
      description:
        'A vibrant city in Gujarat known for its rich history, culture, and famous textile industry.',
      image:
        'https://th.bing.com/th/id/OIP.TcwCWTd3sBUozyYuoLDAhQHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    },
    {
      name: 'Chennai',
      description:
        'A coastal city known for its classical music, temples, and beautiful beaches.',
      image:
        'https://ts2.mm.bing.net/th?id=OIP.s1mL4NakxkzaWRuG1O6AsAHaFj&pid=15.1',
    },
  ];

  ngOnInit(): void {
    console.log('Cities component initialized');
  }
}
