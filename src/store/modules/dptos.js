export default {
    namespaced: true,
    state: {
      dpto: {},
      dptos: []
    },
    mutations: {
      setDpto(state, dpto) {
        state.dpto = dpto;
      },
      setDptos(state, data) {
        state.dptos = data;
      },
    },
    actions: {
      guardarDpto({ commit }, dpto) {
        commit("setDpto", dpto);
      },
      getDpto({ commit }) {
        let dptos = [
          {
            imgUser:
              "https://cdn2.infocasas.com.uy/repo/img/5f8dc193deff7_avita.jpg",
            imgCard:
              "https://cdn2.infocasas.com.uy/web/5f8f47974da0e_infocdn__02.jpg",
            username: "Avita",
            start: "4",
            location: "Villa Biarritz",
            price: "280.500",
            title: "Edificio Osher",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            bed_rooms: 2,
            bath_rooms: 2,
            wifi: true,
            mts: 95
          },
          {
            imgUser:
              "https://cdn2.infocasas.com.uy/repo/img/5f34435112d50_cipia.jpg",
            imgCard:
              "https://cdn2.infocasas.com.uy/web/5f34b85a19e5b_infocdn__unidades-122-1222-min.jpg",
            username: "Cipia",
            start: "4",
            location: "Cordón",
            price: "80.040",
            title: "Cordón Design",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            bed_rooms: 1,
            bath_rooms: 1,
            wifi: false,
            mts: 29
          },
          {
            imgUser:
              "https://cdn2.infocasas.com.uy/repo/img/5ea2f7796924a_fischer.jpg",
            imgCard:
              "https://cdn2.infocasas.com.uy/repo/img/9ae1e74aca0563c71d88d90df716ccac313d4b2c.jpg",
            username: "Fischer / Rubio",
            start: "3",
            location: "Arcobaleno",
            price: "92.400",
            title: "Mansa Inn",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            bed_rooms: 2,
            bath_rooms: 1,
            wifi: true,
            mts: 53
          },
          {
            imgUser:
              "https://fs.puntaprop.com/files/images/26ca69d0-057a-11ea-b486-8366fb1bc774-default.jpg",
            imgCard:
              "https://cdn2.infocasas.com.uy/repo/img/148805_PBI-PBI-1551_650.jpg.th810.jpg",
            username: "Punta Ballena Inmobiliaria",
            start: "3",
            location: "Punta Ballena",
            price: "300.000",
            title: "Apto. con vista al Mar",
            description: "",
            bed_rooms: 2,
            bath_rooms: 2,
            wifi: true,
            mts: 95
          },
          {
            imgUser:
              "https://lh3.googleusercontent.com/proxy/GIf1lESw5JqPukvrnd2qKTSoubeKVRrKhqrHm6xpZPEssrHDdUIY4lNypWFDFh2K6LjSswmDAHfk9-pgdF0wMaZ08XMGKMvCBc1U1wLdJnEvV8Q-9bTH3m2VIvvVnZrX-xDqxNzKffk",
            imgCard:
              "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            username: "Pallares Asociados",
            start: "4",
            location: "Malvín",
            price: "224.700",
            title: "Apto. 2 dormitorios en Malvín",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            bed_rooms: 2,
            bath_rooms: 1,
            wifi: true,
            mts: 83
          },
        ]
        commit("setDptos", dptos);
      }
    },
  };