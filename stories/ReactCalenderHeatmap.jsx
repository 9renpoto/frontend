/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'

import CalendarHeatmap from 'react-calendar-heatmap'
import '../src/components/ReactCalenderHeatmap.css'

storiesOf('ReactCalenderHeatmap', module).add('default', () =>
  <CalendarHeatmap
    endDate={new Date('2016-04-01')}
    numDays={200}
    values={[
      { date: '2016-01-01', count: 1 },
      { date: '2016-01-22', count: 1 },
      { date: '2016-01-30', count: 1 }
    ]}
  />
)
