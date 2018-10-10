import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import forumsIcon from './icons/forums.svg'
import googleIcon from './icons/google.svg'
import slackIcon from './icons/slack.svg'

export default class Icon extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired
  }

  render () {
    switch (this.props.icon) {
      case 'twitter':
        return <FontAwesomeIcon className="menu-item-icon" icon={['fab', 'twitter']} />
      case 'facebook':
        return <FontAwesomeIcon className="menu-item-icon" icon={['fab', 'facebook-square']} />
      case 'github':
        return <FontAwesomeIcon className="menu-item-icon" icon={['fab', 'github']} />
      case 'discord':
        return <FontAwesomeIcon className="menu-item-icon" icon={['fab', 'discord']} />
      case 'slack':
        return <img className="menu-item-icon" src={slackIcon} alt="" />
      case 'forums':
        return <img className="menu-item-icon" src={forumsIcon} alt="" />
      case 'google':
        return <img className="menu-item-icon" src={googleIcon} alt="" />
      default:
        // Ancient fallback (should no longer be used)
        return (
          <svg className="menu-item-icon">
            <use xlinkHref={`#icon-${this.props.icon}`} />
          </svg>
        )
    }
  }
}
