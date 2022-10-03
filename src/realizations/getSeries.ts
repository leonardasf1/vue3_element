import { Ivalue } from './getChartValues'

interface Iseries {
  name: string
  data: number[]
}

export function getSeries( values: Array<Ivalue>, data_elements: Array<object> ): Array<Iseries> {
  const serieS: Array<Iseries> = []
  let i = 0

  data_elements.forEach(( element_data: any ) => {

    values.forEach(( value: Ivalue ) => {
      for ( let v_at of value.values_at_timepoint ) {
        if ( v_at.id == element_data.id ) {
          if ( !serieS[i] || serieS[i].name !== element_data.name ) {
            serieS.push({
              "name": element_data.name,
              "data": []
            })
          }
          serieS[i].data.push( v_at.value )
          break
        }
      }
    })
    i++
  })
  return (serieS)
}
