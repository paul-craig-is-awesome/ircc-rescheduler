import React, { Component } from 'react'
import { Trans } from 'lingui-react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'react-emotion'
import { theme, mediaQuery, CalHeader, CalReminder, Bold } from './styles'
import Layout from './Layout'
import Button from './forms/Button'
import { Calendar } from './Calendar'
import { Form, Field } from 'react-final-form'

const TopContainer = styled.div`
  margin-bottom: ${theme.spacing.lg};
`

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  > div {
    margin-left: ${theme.spacing.xxxl};
  }

  ${mediaQuery.xs(css`
    text-align: center;
    flex-direction: column;

    > a,
    > div {
      width: 100%;
    }

    > div {
      margin-left: 0;
      margin-top: ${theme.spacing.xl};
    }
  `)};
`

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class CalendarPage extends Component {
  render() {
    return (
      <Layout>
        <TopContainer>
          <nav>
            <NavLink to="/register">
              <Trans>← Go Back</Trans>
            </NavLink>
          </nav>
        </TopContainer>

        <CalHeader>
          <Trans>
            Citizenship Tests are scheduled on <Bold>Tuesdays</Bold> and{' '}
            <Bold>Fridays</Bold>. Use the calendar to select{' '}
            <Bold>at least four days you’re available</Bold> in June and July.
          </Trans>
        </CalHeader>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="textarea"
                  type="textarea"
                  placeholder="First Name"
                />
              </div>
              <div>
                <Field name="calendar" component={Calendar} />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />

        <CalReminder>
          <Trans>
            Remember: make sure to stay available on all of the days you select
          </Trans>
        </CalReminder>
        <BottomContainer>
          <NavLink to="/confirmation">
            <Button>
              <Trans>Review →</Trans>
            </Button>
          </NavLink>

          <div>
            <NavLink to="/">
              <Trans>Cancel</Trans>
            </NavLink>
          </div>
        </BottomContainer>
      </Layout>
    )
  }
}

export default CalendarPage
