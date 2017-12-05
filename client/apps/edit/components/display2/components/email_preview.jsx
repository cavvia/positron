import PropTypes from 'prop-types'
import React from 'react'
import { crop } from 'client/components/resizer/index.coffee'

export const EmailPreview = (props) => {
  const { article } = props
  const { author, headline, image_url } = article.get('email_metadata')
  const image = image_url || article.get('thumbnail_image')

  return (
    <div className='edit-display__prev-email'>
      <div className='edit-display__prev-email--placeholder'>
        {image
          ? <img src={crop(image, { width: 320, height: 188 })} />
          : <div className='edit-display__prev--x' />
        }
      </div>
      <div className='edit-display__prev-email--headline'>
        {headline || article.get('thumbnail_title')}
      </div>
      <div className='edit-display__prev-email--author'>
        {`By ${author || article.getByline()}`}
      </div>
      <div className='edit-display__prev-email--placeholder' />
    </div>
  )
}

EmailPreview.propTypes = {
  article: PropTypes.object
}
