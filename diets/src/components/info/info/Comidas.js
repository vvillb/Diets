import Food from "./Food";

const Comidas=[{
    id:2,
    name:"Desayuno",
    items:[
        {
            id:1_1,
            name:"Tortitas",
            ingredients:[Food[1_11],Food[1_12],[Food[3_5]],Food[2_12],Food[3_7],Food[1_7]]
        },
        //a las tostadas agregar un texto para o pavo y para los frutos secos
        {
            id:1_2,
            name:"Tostadas con Jamón cocido",
            ingredients:[Food[1_4],Food[2_2],[Food[3_2]]]
        },{
            id:1_3,
            name:"Tostadas con Jamón Serrano y Tomate",
            ingredients:[Food[1_5],Food[2_1],[Food[2_2]],Food[3_6],Food[3_11]]
        },{
            id:1_4,
            name:"Huevos Revueltos",
            ingredients:[Food[1_11],Food[1_7],[Food[2_2]],Food[3_6]]
        },{
            id:1_5,
            name:"Smoothie Bowl",
            ingredients:[Food[1_7],Food[2_3],Food[3_3],Food[4_2],Food[4_3]]
        }
    ]
},{
    id:2,
    name:"Comidas",
    items:[
        {
            id:2_1,
            name:"Poke Bowl",
            ingredients:[Food[1_9],Food[2_11],Food[2_2],Food[3_2],Food[3_6]]
        },{
            id:2_2,
            name:"Filetes de ternera o cerdo con Patatas",
            ingredients:[Food[1_2],Food[2_6],Food[3_6],Food[1_6]]
        },{
            id:2_3,
            name:" Ensalada de garbanzos",
            ingredients:[Food[1_13],Food[2_7]]
        },{
            id:2_4,
            name:"Filetes de pollo o pavo",
            ingredients:[Food[1_1],Food[2_5]]
        },
    ]
}]

export default Comidas