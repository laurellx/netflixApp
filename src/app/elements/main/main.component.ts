import { Component, Input } from '@angular/core';
import { FilmsInterface, HomeInterface, ImageInterface } from 'src/app/models/home-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
  
export class MainComponent {

  public animeFilms: HomeInterface;
  public sciFiFilms: HomeInterface;
  public terrorFilms: HomeInterface;
  public top5Films: HomeInterface;
  // public actionFilms: HomeInterface;
  // public comedyFilms: HomeInterface;
  // public dramaFilms: HomeInterface;

    
  constructor() {

    this.top5Films = {
      section: "top5 Films",
      films: [{
        title: "La casa de Papel",
        image: {
          src: "/assets/Top10/1-papel.webp",
          alt: "La casa de Papel"
        }
      },
      {
        title: "Lost in Space",
        image: {
          src: "/assets/Top10/4-lostinspace.webp",
          alt: "Lost in Space"
        }
      },
      {
        title: "Titans",
        image: {
          src: "/assets/Top10/3-titanes.webp",
          alt: "Titans"
        }
      },
      {
        title: "The Power of the Dog",
        image: {
          src: "./assets/Top10/9-poder.webp",
          alt: "The Power of the Dog"
        }
      },
      {
        title: "Blacklist",
        image: {
          src: "./assets/Top10/7-blacklist.webp",
          alt: "Blacklist"
        }
        }
      ]
    }
        
      
    this.animeFilms = {
      section: "Anime",
      films: [{
        title: "Ajin: Demi-Human",
        image: {
          src: "./assets/Anime/ajin.jpg",
          alt: "Ajin: Demi-Human"
        }
      },
      {
        title: "Howl's Moving Castle",
        image: {
          src: "./assets/Anime/castilloambulante.webp",
          alt: "Howl's Moving Castle"
        }
      },
      {
        title: "Spirited Away",
        image: {
          src: "./assets/Anime/chihiro.webp",
          alt: "Spirited Away"
        }
      },
      {
        title: "Neon Genesis Evangelion",
        image: {
          src: "./assets/Anime/evangelion.webp",
          alt: "Neon Genesis Evangelion"
        }
      },
      {
        title: "Ghost in the Shell: Arise",
        image: {
          src: "./assets/Anime/gitsarise.webp",
          alt: "Ghost in the Shell: Arise"
        }
      },
      {
        title: "Gundam",
        image: {
          src: "./assets/Anime/gundam.webp",
          alt: "Gundam"
        }
      },
    //   {
    //     title: "Castle in the Sky",
    //     image: {
    //       src: "./assets/Anime/laputa.webp",
    //       alt: "Castle in the Sky"
    //     }
    //   },
    // //   {
    //     title: "Princess Mononoke",
    //     image: {
    //       src: "./assets/Anime/mononoke.webp",
    //       alt: "Princess Mononoke"
    //     }
    //   },
    //   {
    //     title: "Ni no Kuni",
    //     image: {
    //       src: "./assets/Anime/ninokuni.webp",
    //       alt: "Ni no Kuni"
    //     }
    //   },
    //   {
    //     title: "Perfect Blue",
    //     image: {
    //       src: "./assets/Anime/perfectblue.webp",
    //       alt: "Perfect Blue"
    //     }
    //   },
    //   {
    //     title: "Porco Rosso",
    //     image: {
    //       src: "./assets/Anime/porcorosso.webp",
    //       alt: "Porco Rosso"
    //     }
    //   }
      ]
    };
   
    this.sciFiFilms = {
      section: "Sci-Fi",
      films: [{
        title: "The 6th Day",
        image: {
          src: "./assets/Sci-fi/6dia.webp",
          alt: "The 6th Day"
        }
      },
      {
        title: "12 Monkeys",
        image: {
          src: "./assets/Sci-fi/12monos.webp",
          alt: "Apos12 Monkeystle"
        }
      },
      {
        title: "After Earth",
        image: {
          src: "./assets/Sci-fi/afterearth.webp",
          alt: "After Earth"
        }
      },
      {
        title: "The Cloverfield Paradox",
        image: {
          src: "./assets/Sci-fi/colverparadox.jpg",
          alt: "The Cloverfield Paradox"
        }
      },
      {
        title: "The Core",
        image: {
          src: "./assets/Sci-fi/core.webp",
          alt: "The Core"
        }
      },
      {
        title: "Deep Impact",
        image: {
          src: "./assets/Sci-fi/deepimpact.webp",
          alt: "Deep Impact"
        }
      },
      // {
      //   title: "Doom",
      //   image: {
      //     src: "./assets/Sci-fi/doom.webp",
      //     alt: "Doom"
      //   }
      // },
      // {
      //   title: "Ghost in the Shell",
      //   image: {
      //     src: "./assets/Sci-fi/gits.webp",
      //     alt: "Ghost in the Shell"
      //   }
      // },
      // {
      //   title: "Jumper",
      //   image: {
      //     src: "./assets/Sci-fi/jumper.webp",
      //     alt: "Jumper"
      //   }
      // },
      // {
      //   title: "Passengers",
      //   image: {
      //     src: "./assets/Sci-fi/passengers.webp",
      //     alt: "Passengers"
      //   }
      // },
      // {
      //   title: "DooStar trekm",
      //   image: {
      //     src: "./assets/Sci-fi/startrek.webp",
      //     alt: "Star trek"
      //   }
      // },
      // {
      //   title: "Transformers",
      //   image: {
      //     src: "./assets/Sci-fi/transformers.webp",
      //     alt: "Transformers"
      //   }
      // },
      // {
      //   title: "Watchmen",
      //   image: {
      //     src: "./assets/Sci-fi/watchmen.webp",
      //     alt: "Watchmen"
      //   }
      // }
      ]
    };
      

    this.terrorFilms = {
      section: "Terror",
      films: [{
        title: "Apostle",
        image: {
          src: "./assets/Terror/apostol.jpg",
          alt: "Apostle"
        }
      },
      {
        title: "Fear Street",
        image: {
          src: "./assets/Terror/calleterror.jpg",
          alt: "Fear Street"
        }
      },
      {
        title: "Crawl",
        image: {
          src: "./assets/Terror/infiernoagua.webp",
          alt: "Crawl"
        }
      },
      {
        title: "Insidious 2",
        image: {
          src: "./assets/Terror/insidious2.webp",
          alt: "Insidious 2"
        }
        },
        {
          title: "Life",
          image: {
            src: "./assets/Terror/life.webp",
            alt: "Life"
          }
        },
        {
          title: "32 Malasana Street",
          image: {
            src: "./assets/Terror/malasana.webp",
            alt: "32 Malasana Street"
          }
        },
        // {
        //   title: "Multiple",
        //   image: {
        //     src: "./assets/Terror/multiple.webp",
        //     alt: "Multiple"
        //   }
        // },
        // {
        //   title: "Mirrors",
        //   image: {
        //     src: "./assets/Terror/reflejos.webp",
        //     alt: "Mirrors"
        //   }
        // }
      ]
    };    
  }
  
  
}
