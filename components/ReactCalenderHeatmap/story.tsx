import { storiesOf } from '@storybook/react'
import { date, random } from 'faker'
import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'

const DATE = new Date()

function createRows (max: number = random.number({ max: 365 })) {
  const rows = []
  for (let i = 0; i < max; i++) {
    const d = date.past()
    rows.push({
      date: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
      count: random.number({ max: 4 })
    })
  }
  return rows
}

storiesOf('ReactCalenderHeatmap DontTest', module).add('default', () => (
  <CalendarHeatmap
    startDate={(d => d.setMonth(d.getMonth() - 12))(new Date())}
    endDate={DATE}
    values={createRows()}
    classForValue={(value: any) => {
      let data = value
      if (!data) {
        data = { date: '', count: 0 }
      }
      return `color-github-${data.count}`
    }}
  />
))
