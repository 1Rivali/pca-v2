
import { metrics1, metrics2, metrics3 } from '../../../assets/metrics'

export interface Metric {
  icon: string
  value: string
  label: string
}

export const METRICS: Metric[] = [
  {
    icon:
      metrics1,
    value: '19',
    label: 'Years Of Experience',
  },
  {
    icon:
      metrics2,
    value: '100+',
    label: 'Skilled Professionals',
  },
  {
    icon:
      metrics3,
    value: '1500+',
    label: 'Project Delivered',
  },
]
