
export interface Ivalue {
  timepoint: number
  values_at_timepoint: [
    {
      id: number
      value: number
    }
  ]
}

export interface Ichart {
  id: number
  name: string
  description: string | undefined
  de_refs: [
    {
      id: number
      name: string
      description: string | undefined
      values: number[]
    }
  ]
}

export function getChartValues(values: Array<Ivalue>, tab: Ichart, block?: any) {
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
  const chart = {
    "id": charT.id,
    "name": charT.name,
    "description": charT.description,
    "de_refs": block ? new Array(charT.de_refs[block - 1]) : charT.de_refs,
  }
  return chart
}
