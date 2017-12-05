import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { DisplayEmail } from './components/email'
import { DisplayMagazine } from './components/magazine'
import { DisplaySearch } from './components/search'
import { DisplaySocial } from './components/social'
import { DropDownList } from 'client/components/drop_down/drop_down_list'

export class EditDisplay extends Component {
  static propTypes = {
    article: PropTypes.object,
    channel: PropTypes.object,
    onChange: PropTypes.func
  }

  render () {
    const { article, channel, onChange } = this.props
    const sections = [
      {title: 'Magazine'},
      {title: 'Social'},
      {title: 'Search'},
      {title: 'Email'}
    ]

    if (channel.isEditorial()) {
      return (
        <DropDownList
          className='EditDisplay admin-form-container'
          activeSections={[0]}
          openMany
          sections={sections}
        >
          <DisplayMagazine
            article={article}
            onChange={onChange}
          />
          <DisplaySocial
            article={article}
            onChange={onChange}
          />
          <DisplaySearch
            article={article}
            onChange={onChange}
          />
          <DisplayEmail
            article={article}
            onChange={onChange}
          />
        </DropDownList>
      )
    } else {
      return (
        <div>Hello</div>
      )
    }
  }
}
