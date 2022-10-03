// import {charts} from './APIv1/tabs.js'
// import {data} from './APIv1/data.js'

export async function req_APIv1() {
  // return fetch("http://localhost:6006/APIv1/tabs")
  // JSON.stringify(charts)
  // return fetch("@/realizations/APIv1/tabs.json")
  // .then(response => response.json())
  return charts.charts
}

export async function req_APIv0() {
  // return fetch("http://localhost:6006/APIv0/data/1")
  // return fetch("@/realizations/APIv1/data.json")
  // .then(response => response.json())
  return data
}
const charts = {
  "charts": [
    {
      "id": 101,
      "name": "График температур",
      "description": "Температура воздуха с датчиков",
      "de_refs": [
        {
          "id": 101,
          "name": "Температура воздуха на входе верх",
          "description": "Температура воздуха на входе, верх (T3)"
        },
        {
          "id": 102,
          "name": "Температура воздуха на входе низ",
          "description": "Температура воздуха на входе, низ (T4)"
        },
        {
          "id": 103,
          "name": "Температура воздуха на выходе верх",
          "description": "Температура воздуха на выходе, верх (T1)"
        },
        {
          "id": 104,
          "name": "Температура воздуха на выходе низ",
          "description": "Температура воздуха на выходе, низ (T2)"
        },
        {
          "id": 105,
          "name": "Температура воздуха с датчика 1",
          "description": "Температура воздуха с выносного датчика 1 (T5)"
        },
        {
          "id": 106,
          "name": "Температура воздуха с датчика 2",
          "description": "Температура воздуха с выносного датчика 2 (T6)"
        }
      ]
    },
    {
      "id": 102,
      "name": "Температура охл. жидкости",
      "description": "Температура охлаждающей жидкости на входе и выходе",
      "de_refs": [
        {
          "id": 108,
          "name": "Температура воды на входе",
          "description": "Температура охлаждающей жидкости на входе (T7)"
        },
        {
          "id": 109,
          "name": "Температура воды на выходе",
          "description": "Температура охлаждающей жидкости на выходе (T8)"
        }
      ]
    },
    {
      "id": 103,
      "name": "График 1_3",
      "description": "Описание графика 1_3",
      "de_refs": [
        {
          "id": 107,
          "name": "Воздушный поток",
          "description": "Расход воздуха"
        }
      ]
    },
    {
      "id": 104,
      "name": " График 1_4",
      "description": "Описание графика 1_4",
      "de_refs": [
        {
          "id": 110,
          "name": "Расход воды",
          "description": "Расход охлаждающей жидкости"
        }
      ]
    },
    {
      "id": 105,
      "name": "График 1_5",
      "description": " Описание графика 1_5",
      "de_refs": [
        {
          "id": 112,
          "name": "Интенсивность вращения вентиляторов",
          "description": "Доля скорости вращения от максимальной"
        }
      ]
    },
    {
      "id": 106,
      "name": "График 1_6",
      "de_refs": [
        {
          "id": 120,
          "name": "Обороты вентилятора 8"
        },
        {
          "id": 113,
          "name": "Обороты вентилятора 1"
        },
        {
          "id": 114,
          "name": "Обороты вентилятора 2"
        },
        {
          "id": 115,
          "name": "Обороты вентилятора 3"
        },
        {
          "id": 116,
          "name": "Обороты вентилятора 4"
        },
        {
          "id": 117,
          "name": "Обороты вентилятора 5"
        },
        {
          "id": 118,
          "name": "Обороты вентилятора 6"
        },
        {
          "id": 119,
          "name": "Обороты вентилятора 7"
        }
      ]
    }
  ]
}
const data = {
  "values": [
    {
      "timepoint": 1662967680,
      "values_at_timepoint": [
        {
          "id": 101,
          "value": 24.451629
        },
        {
          "id": 102,
          "value": 25.43711
        },
        {
          "id": 103,
          "value": 18.855724
        },
        {
          "id": 104,
          "value": 15.949055
        },
        {
          "id": 105,
          "value": 24.96649
        },
        {
          "id": 106,
          "value": 24.125773
        },
        {
          "id": 107,
          "value": 2863.876292
        },
        {
          "id": 108,
          "value": 11.90102
        },
        {
          "id": 109,
          "value": 20.705403
        },
        {
          "id": 110,
          "value": 45.509226
        },
        {
          "id": 112,
          "value": 84.234961
        },
        {
          "id": 113,
          "value": 3569.912771
        },
        {
          "id": 114,
          "value": 3039.511784
        },
        {
          "id": 115,
          "value": 3979.727347
        },
        {
          "id": 116,
          "value": 2577.936021
        },
        {
          "id": 117,
          "value": 2103.161337
        },
        {
          "id": 118,
          "value": 311.626158
        },
        {
          "id": 119,
          "value": 2600.373872
        },
        {
          "id": 120,
          "value": 2693.613126
        },
        {
          "id": 121,
          "value": 16.915653
        },
        {
          "id": 122,
          "value": 505.166511
        }
      ]
    },
    {
      "timepoint": 1662967740,
      "values_at_timepoint": [
        {
          "id": 101,
          "value": 25.700029
        },
        {
          "id": 102,
          "value": 21.599556
        },
        {
          "id": 103,
          "value": 15.634128
        },
        {
          "id": 104,
          "value": 17.749334
        },
        {
          "id": 105,
          "value": 21.139912
        },
        {
          "id": 106,
          "value": 24.252613
        },
        {
          "id": 107,
          "value": 4293.366721
        },
        {
          "id": 108,
          "value": 12.128836
        },
        {
          "id": 109,
          "value": 18.181694
        },
        {
          "id": 110,
          "value": 43.441464
        },
        {
          "id": 112,
          "value": 38.276883
        },
        {
          "id": 113,
          "value": 2250.797802
        },
        {
          "id": 114,
          "value": 3042.539079
        },
        {
          "id": 115,
          "value": 2185.526874
        },
        {
          "id": 116,
          "value": 2542.419981
        },
        {
          "id": 117,
          "value": 2254.95754
        },
        {
          "id": 118,
          "value": 4703.660644
        },
        {
          "id": 119,
          "value": 3906.000229
        },
        {
          "id": 120,
          "value": 2477.867419
        },
        {
          "id": 121,
          "value": 18.071084
        },
        {
          "id": 122,
          "value": 457.869751
        }
      ]
    },
    {
      "timepoint": 1662967920,
      "values_at_timepoint": [
        {
          "id": 101,
          "value": 30.982807
        },
        {
          "id": 102,
          "value": 20.565274
        },
        {
          "id": 103,
          "value": 18.128833
        },
        {
          "id": 104,
          "value": 18.36948
        },
        {
          "id": 105,
          "value": 23.33091
        },
        {
          "id": 106,
          "value": 9.606725
        },
        {
          "id": 107,
          "value": 2935.881514
        },
        {
          "id": 108,
          "value": 12.118958
        },
        {
          "id": 109,
          "value": 13.736177
        },
        {
          "id": 110,
          "value": 58.594903
        },
        {
          "id": 112,
          "value": 56.603802
        },
        {
          "id": 113,
          "value": 2155.206714
        },
        {
          "id": 114,
          "value": 1402.243335
        },
        {
          "id": 115,
          "value": 2062.873735
        },
        {
          "id": 116,
          "value": 1360.706855
        },
        {
          "id": 117,
          "value": 2724.692951
        },
        {
          "id": 118,
          "value": 2955.126664
        },
        {
          "id": 119,
          "value": 2134.212962
        },
        {
          "id": 120,
          "value": 2249.526012
        },
        {
          "id": 121,
          "value": 17.993766
        },
        {
          "id": 122,
          "value": 429.934867
        }
      ]
    },
    {
      "timepoint": 1662967950,
      "values_at_timepoint": [
        {
          "id": 101,
          "value": 30.982807
        },
        {
          "id": 102,
          "value": 20.565274
        },
        {
          "id": 103,
          "value": 18.128833
        },
        {
          "id": 104,
          "value": 18.36948
        },
        {
          "id": 105,
          "value": 23.33091
        },
        {
          "id": 106,
          "value": 9.606725
        },
        {
          "id": 107,
          "value": 2935.881514
        },
        {
          "id": 108,
          "value": 12.118958
        },
        {
          "id": 109,
          "value": 13.736177
        },
        {
          "id": 110,
          "value": 58.594903
        },
        {
          "id": 112,
          "value": 56.603802
        },
        {
          "id": 113,
          "value": 2155.206714
        },
        {
          "id": 114,
          "value": 1402.243335
        },
        {
          "id": 115,
          "value": 2062.873735
        },
        {
          "id": 116,
          "value": 1360.706855
        },
        {
          "id": 117,
          "value": 2724.692951
        },
        {
          "id": 118,
          "value": 2955.126664
        },
        {
          "id": 119,
          "value": 2134.212962
        },
        {
          "id": 120,
          "value": 2249.526012
        },
        {
          "id": 121,
          "value": 17.993766
        },
        {
          "id": 122,
          "value": 429.934867
        }
      ]
    },
    {
      "timepoint": 1662967980,
      "values_at_timepoint": [
        {
          "id": 101,
          "value": 23.373254
        },
        {
          "id": 102,
          "value": 18.418486
        },
        {
          "id": 103,
          "value": 18.45819
        },
        {
          "id": 104,
          "value": 16.635645
        },
        {
          "id": 105,
          "value": 14.592948
        },
        {
          "id": 106,
          "value": 21.625996
        },
        {
          "id": 107,
          "value": 3677.423111
        },
        {
          "id": 108,
          "value": 11.500979
        },
        {
          "id": 109,
          "value": 16.636351
        },
        {
          "id": 110,
          "value": 51.086201
        },
        {
          "id": 112,
          "value": 49.027564
        },
        {
          "id": 113,
          "value": 4613.855124
        },
        {
          "id": 114,
          "value": 3810.705844
        },
        {
          "id": 115,
          "value": 2729.15631
        },
        {
          "id": 116,
          "value": 2778.243187
        },
        {
          "id": 117,
          "value": 2580.116919
        },
        {
          "id": 118,
          "value": 2891.79292
        },
        {
          "id": 119,
          "value": 2482.988797
        },
        {
          "id": 120,
          "value": 3932.906452
        },
        {
          "id": 121,
          "value": 18.28933
        },
        {
          "id": 122,
          "value": 506.979794
        }
      ]
    }
  ],
  "data_elements": [
    {
      "id": 122,
      "name": "Текущая потребляемая мощность",
      "description": ""
    },
    {
      "id": 103,
      "name": "Температура воздуха на выходе верх",
      "description": "Температура воздуха на выходе, верх (T1)"
    },
    {
      "id": 104,
      "name": "Температура воздуха на выходе низ",
      "description": "Температура воздуха на выходе, низ (T2)"
    },
    {
      "id": 108,
      "name": "Температура воды на входе",
      "description": "Температура охлаждающей жидкости на входе (T7)"
    },
    {
      "id": 116,
      "name": "Обороты вентилятора 4",
      "description": ""
    },
    {
      "id": 117,
      "name": "Обороты вентилятора 5",
      "description": ""
    },
    {
      "id": 121,
      "name": "Мощность охлаждения",
      "description": ""
    },
    {
      "id": 101,
      "name": "Температура воздуха на входе верх",
      "description": "Температура воздуха на входе, верх (T3)"
    },
    {
      "id": 106,
      "name": "Температура воздуха с датчика 2",
      "description": "Температура воздуха с выносного датчика 2 (T6)"
    },
    {
      "id": 107,
      "name": "Воздушный поток",
      "description": "Расход воздуха"
    },
    {
      "id": 114,
      "name": "Обороты вентилятора 2",
      "description": ""
    },
    {
      "id": 115,
      "name": "Обороты вентилятора 3",
      "description": ""
    },
    {
      "id": 105,
      "name": "Температура воздуха с датчика 1",
      "description": "Температура воздуха с выносного датчика 1 (T5)"
    },
    {
      "id": 113,
      "name": "Обороты вентилятора 1",
      "description": ""
    },
    {
      "id": 118,
      "name": "Обороты вентилятора 6",
      "description": ""
    },
    {
      "id": 102,
      "name": "Температура воздуха на входе низ",
      "description": "Температура воздуха на входе, низ (T4)"
    },
    {
      "id": 109,
      "name": "Температура воды на выходе",
      "description": "Температура охлаждающей жидкости на выходе(T8)"
    },
    {
      "id": 110,
      "name": "Расход воды",
      "description": "Расход охлаждающей жидкости"
    },
    {
      "id": 112,
      "name": "Интенсивность вращения вентиляторов",
      "description": "Доля скорости вращения от максимальной"
    },
    {
      "id": 119,
      "name": "Обороты вентилятора 7",
      "description": ""
    },
    {
      "id": 120,
      "name": "Обороты вентилятора 8",
      "description": ""
    }
  ]
}
