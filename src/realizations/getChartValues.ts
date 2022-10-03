
export interface Ivalue {
  timepoint: number
  values_at_timepoint: [
    {
      id: string
      value: number
    }
  ]
}

export interface Ichart {
  id: string
  name: string
  description?: string
  de_refs: [
    {
      id: string
      name: string
      description?: string
      values: number[]
    }
  ]
}

export function getChartValues(values: Array<Ivalue>, tab: Ichart, block?: any): Ichart {
  const charT: Ichart = tab

  for ( let de_ref of charT.de_refs ) {
    de_ref.values = []

    values.forEach(( value: Ivalue ) => {

      for ( let v_at of value.values_at_timepoint ) {
        if ( v_at.id == de_ref.id ) {
          de_ref.values.push( v_at.value )
          break
        }
      }
    })
  }
  return {
    "id": charT.id,
    "name": charT.name,
    "description": charT.description,
    "de_refs": block ? new Array(charT.de_refs[block - 1]) : charT.de_refs,
  }
}
