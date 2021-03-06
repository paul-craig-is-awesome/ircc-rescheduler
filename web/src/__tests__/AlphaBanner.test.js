import { shallow } from 'enzyme'
import AlphaBanner from '../AlphaBanner'
import React from 'react'

describe('AlphaBanner', () => {
  it('can be instantiated', () => {
    const alphaBanner = shallow(<AlphaBanner>contact us</AlphaBanner>)
    expect(alphaBanner.find('.alphaBanner--badge').text()).toMatch(/Alpha/)
    expect(alphaBanner.find('.alphaBanner--message').text()).toMatch(
      /contact us/,
    )
  })
})
