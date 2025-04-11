export interface DataPoint {
  year: number
  value: number
}

export interface Dataset {
  id: number
  name: string
  description: string
  source: string
  unit: string
  data: DataPoint[]
}
