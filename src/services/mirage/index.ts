import { createServer, Model } from "miragejs";
import Schema from "miragejs/orm/schema";

export function makeServer() {
  const server = createServer({

    models: {
      continents: Model.extend({}),
    },

    routes() {
      this.namespace = 'mock';
      this.timing = 750;

      this.get("continents", () => {
        return [
        { 
          id: 1, 
          continent: "Europa",
          description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          number_of_countries: 50,
          languages: 60,
          image: 'https://images.unsplash.com/photo-1581289068946-ba5dbd4f7911?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXVyb3BhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        { 
          id: 2, 
          continent: "América do Sul",
          description: "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.",
          number_of_countries: 12,
          languages: 60,
          image: 'https://images.unsplash.com/photo-1591533985302-42123fa9240b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYSUyMGRvJTIwc3VsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        { 
          id: 3, 
          continent: "América do Norte",
          description: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.",
          number_of_countries: 12,
          image: 'https://images.unsplash.com/photo-1624981015247-697f0b9e24a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFtJUMzJUE5cmljYSUyMGRvJTIwbm9ydGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        { 
          id: 4, 
          continent: "África",
          description: "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.",
          number_of_countries: 12,
          image: 'https://images.unsplash.com/photo-1456957473806-cba22e0839cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUMzJUExZnJpY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },]
      })
      
      this.get("/continents/:id", (schema: any, request) => {
        let id = request.params.id
      
        return schema.continents.find(id)
      })
    }
  })

  return server;
}