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
  public actionFilms: HomeInterface;
  public comedyFilms: HomeInterface;
  public dramaFilms: HomeInterface;

    
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
      {
        title: "Castle in the Sky",
        image: {
          src: "./assets/Anime/laputa.webp",
          alt: "Castle in the Sky"
        }
      },
      {
        title: "Princess Mononoke",
        image: {
          src: "./assets/Anime/mononoke.webp",
          alt: "Princess Mononoke"
        }
      },
      {
        title: "Ni no Kuni",
        image: {
          src: "./assets/Anime/ninokuni.webp",
          alt: "Ni no Kuni"
        }
      },
      {
        title: "Perfect Blue",
        image: {
          src: "./assets/Anime/perfectblue.webp",
          alt: "Perfect Blue"
        }
      },
      {
        title: "Porco Rosso",
        image: {
          src: "./assets/Anime/porcorosso.webp",
          alt: "Porco Rosso"
        }
      }
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
      {
        title: "Doom",
        image: {
          src: "./assets/Sci-fi/doom.webp",
          alt: "Doom"
        }
      },
      {
        title: "Ghost in the Shell",
        image: {
          src: "./assets/Sci-fi/gits.webp",
          alt: "Ghost in the Shell"
        }
      },
      {
        title: "Jumper",
        image: {
          src: "./assets/Sci-fi/jumper.webp",
          alt: "Jumper"
        }
      },
      {
        title: "Passengers",
        image: {
          src: "./assets/Sci-fi/passengers.webp",
          alt: "Passengers"
        }
      },
      {
        title: "DooStar trekm",
        image: {
          src: "./assets/Sci-fi/startrek.webp",
          alt: "Star trek"
        }
      },
      {
        title: "Transformers",
        image: {
          src: "./assets/Sci-fi/transformers.webp",
          alt: "Transformers"
        }
      },
      {
        title: "Watchmen",
        image: {
          src: "./assets/Sci-fi/watchmen.webp",
          alt: "Watchmen"
        }
      }
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
      {
        title: "Multiple",
        image: {
          src: "./assets/Terror/multiple.webp",
          alt: "Multiple"
        }
      },
      {
        title: "Mirrors",
        image: {
          src: "./assets/Terror/reflejos.webp",
          alt: "Mirrors"
        }
      }
      ]
    };

    this.actionFilms = {
      section: "Action",
      films: [{
        title: "Army of the Dead",
        image: {
          src: "./assets/Accion/ejercitomuertos.jpg",
          alt: "Army of the Dead"
        }
      },
      {
        title: "The Enforcer",
        image: {
          src: "./assets/Accion/elprotector.webp",
          alt: "The Enforcer"
        }
      },
      {
        title: "The Equalizer 2",
        image: {
          src: "./assets/Accion/equalizer2.webp",
          alt: "The Equalizer 2"
        }
      },
      {
        title: "Heat",
        image: {
          src: "./assets/Accion/heat.webp",
          alt: "Heat"
        }
      },
      {
        title: "Jack Reacher",
        image: {
          src: "./assets/Accion/jackreacher.webp",
          alt: "Jack Reacher"
        }
      },
      {
        title: "John Wick: Chapter 2",
        image: {
          src: "./assets/Accion/johnwick2.webp",
          alt: "John Wick: Chapter 2"
        }
      },
      {
        title: "Kill Bill: Volume 2",
        image: {
          src: "./assets/Accion/killbill2.webp",
          alt: "Kill Bill: Volume 2"
        }
      },
      {
        title: "Mission: Impossible – Rogue Nation",
        image: {
          src: "./assets/Accion/misioninposiblenacion.webp",
          alt: "Mission: Impossible – Rogue Nation"
        }
      },
      {
        title: "The Revenant",
        image: {
          src: "./assets/Accion/renacido.webp",
          alt: "The Revenant"
        }
      },
      {
        title: "Terminator 2",
        image: {
          src: "./assets/Accion/terminator2.webp",
          alt: "Terminator 2"
        }
      },
      {
        title: "World War Z",
        image: {
          src: "./assets/Accion/worldwarz.webp",
          alt: "World War Z"
        }
      }
      ]
    };

    this.comedyFilms = {
      section: "Comedy",
      films: [{
        title: "Meet the Spartans",
        image: {
          src: "./assets/Comedia/casi300.webp",
          alt: "Meet the Spartans"
        }
      },
      {
        title: "Ghostbusters",
        image: {
          src: "./assets/Comedia/cazafantasmas.webp",
          alt: "Ghostbusters"
        }
      },
      {
        title: "The Dictator",
        image: {
          src: "./assets/Comedia/dictador.webp",
          alt: "The Dictator"
        }
      },
      {
        title: "Once Upon a Time... in Hollywood",
        image: {
          src: "./assets/Comedia/eraseholliwood.webp",
          alt: "Once Upon a Time... in Hollywood"
        }
      },
      {
        title: "Family Guy",
        image: {
          src: "./assets/Comedia/familyguy.webp",
          alt: "Family Guy"
        }
      },
      {
        title: "La Grande Vadrouille",
        image: {
          src: "./assets/Comedia/juerga.webp",
          alt: "La Grande Vadrouille"
        }
      },
      {
        title: "The Terminal",
        image: {
          src: "./assets/Comedia/laterminal.webp",
          alt: "The Terminal"
        }
      },
      {
        title: "Meet the Parents",
        image: {
          src: "./assets/Comedia/padresella.webp",
          alt: "Meet the Parents"
        }
      },
      {
        title: "Back to the Future",
        image: {
          src: "./assets/Comedia/regresofuturo.webp",
          alt: "Back to the Future"
        }
      },
      {
        title: "Rick and Morty",
        image: {
          src: "./assets/Comedia/rickandmorty.webp",
          alt: "Rick and Morty"
        }
      },
      {
        title: "Scary Movie 3",
        image: {
          src: "./assets/Comedia/scarymovie3.webp",
          alt: "Scary Movie 3"
        }
      },
      {
        title: "Ted 2",
        image: {
          src: "./assets/Comedia/ted2.webp",
          alt: "Ted 2"
        }
      }
      ]
    };

    this.dramaFilms = {
      section: "Drama",
      films: [{
        title: "1917",
        image: {
          src: "./assets/Drama/1917.webp",
          alt: "1917"
        }
      },
      {
        title: "Arrival",
        image: {
          src: "./assets/Drama/arrival.webp",
          alt: "Arrival"
        }
        },
        {
          title: "Fight Club",
          image: {
            src: "./assets/Drama/clublucha.webp",
            alt: "Fight Club"
          }
        },
        {
          title: "Fury",
          image: {
            src: "./assets/Drama/corazones.webp",
            alt: "Fury"
          }
        },
        {
          title: "The Guilty",
          image: {
            src: "./assets/Drama/culpable.webp",
            alt: "The Guilty"
          }
        },
        {
          title: "The Green Mile",
          image: {
            src: "./assets/Drama/millaverde.webp",
            alt: "The Green Mile"
          }
        },
        {
          title: "Cast Away",
          image: {
            src: "./assets/Drama/naufrago.webp",
            alt: "Cast Away"
          }
        },
        {
          title: "No Country for Old Men",
          image: {
            src: "./assets/Drama/noespais.webp",
            alt: "No Country for Old Men"
          }
        },
        {
          title: "Saving Private Ryan",
          image: {
            src: "./assets/Drama/salvaralsoldado.webp",
            alt: "Saving Private Ryan"
          }
        },
        {
          title: "Scarface",
          image: {
            src: "./assets/Drama/scarface.webp",
            alt: "Scarface"
          }
        },
        {
          title: "Schindler's List",
          image: {
            src: "./assets/Drama/schindler.webp",
            alt: "Schindler's List"
          }
        },
        {
          title: "The Devil's Own",
          image: {
            src: "./assets/Drama/sombradiablo.webp",
            alt: "The Devil's Own"
          }
        },
        {
          title: "Lone Survivor",
          image: {
            src: "./assets/Drama/unicosuperviviente.webp",
            alt: "Lone Survivor"
          }
        }
      ]
    }
  }
}
