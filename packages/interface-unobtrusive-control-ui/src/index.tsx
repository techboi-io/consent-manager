import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Form } from 'react-final-form'
import clsx from 'clsx'
import {
  DecisionsFormProps,
  IntegrationConfigOptions,
} from '@techboi/consent-manager'
import { FiChevronUp } from 'react-icons/fi'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import defaultStyles from './index.module.css'
import { Introduction } from './introduction'
import { Integration } from './integration'

export interface UnobtrusiveConsentControlUIProps extends DecisionsFormProps {
  slideDuration: number
  styles: { [key: string]: string }
  ToggleIcon: React.ComponentType
  Switch: React.ComponentType<SwitchProps>
  Button: React.ComponentType
}

interface FormState {
  [key: string]: boolean
}

export const UnobtrusiveConsentControlUI: React.FC<UnobtrusiveConsentControlUIProps> = ({
  integrations,
  initialValues,
  onSubmit,
  slideDuration = 300,
  styles = defaultStyles,
  ToggleIcon = FiChevronUp,
  Switch = DefaultSwitch,
  Button = props => <button {...props} />,
}) => {
  const [showIntroduction, setShowIntroduction] = useState(false)
  const [slideUp, setSlideUp] = useState(false)

  const toggleControlForm = useCallback(
    e => {
      e.preventDefault()
      setShowIntroduction(false)
      setSlideUp(v => !v)
    },
    [setSlideUp, setShowIntroduction]
  )

  // @todo calling onSubmit causes rerender
  const onSubmitCb = useCallback(
    values => {
      const enabled = []
      for (const [key, value] of Object.entries(values)) {
        if (value) {
          enabled.push(key)
        }
      }
      setSlideUp(false)
      onSubmit({ enabled })
    },
    [onSubmit]
  )

  const initial = useMemo(() => {
    const initialState: FormState = {}
    for (const integration of integrations) {
      initialState[integration.id] = initialValues.enabled.includes(
        integration.id
      )
    }

    return initialState
  }, [integrations, initialValues])

  // Check if component was mounted for SSR
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  // Do not render the interface on SSR.
  if (!isMounted) {
    return null
  }

  return (
    <div
      className={clsx(
        styles.wrapper,
        styles.pane,
        styles.slide,
        slideUp && styles.slideUp
      )}
      style={{
        transitionDuration: `${slideDuration}ms`,
      }}
      id="consent-control-ui"
    >
      <button
        className={clsx(styles.toggleButton)}
        title={`Toggle website settings visibility`}
        onClick={toggleControlForm}
      >
        <div className={clsx(styles.pane, styles.toggleButtonContent)}>
          <ToggleIcon className={clsx(slideUp && styles.inverted)} />
        </div>
      </button>
      {showIntroduction ? (
        <Introduction
          setShowIntroduction={setShowIntroduction}
          setSlideUp={setSlideUp}
        />
      ) : (
        <Form
          onSubmit={onSubmitCb}
          initialValues={initial}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={clsx(styles.content)}>
                <h2>Website Settings</h2>
                <p>
                  Some features are disabled by default to protect your privacy:
                </p>
                {integrations.map((integration: IntegrationConfigOptions) => (
                  <Integration {...integration} Switch={Switch} />
                ))}
                <Button>Save</Button>
              </div>
            </form>
          )}
        />
      )}
    </div>
  )
}
