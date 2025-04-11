export interface DataPoint {
  year: number
  value: number
}

export interface Dataset {
  name: string
  label: string
  description: string
  source: string
  data: DataPoint[]
}

export interface Correlation {
  id: string
  title: string
  dataset1: Dataset
  dataset2: Dataset
}

export interface GameDataset {
  id: string
  label: string
  description: string
  source: string
  data: DataPoint[]
}

export interface OptionItem {
  id: string
  label: string
}

export interface GameCorrelation {
  id: string
  title: string
  dataset1: GameDataset
  dataset2: GameDataset
  options: {
    dataset1: OptionItem[]
    dataset2: OptionItem[]
  }
  explanation: string
}
