import React from 'react'

export default function PageTitle({ pageTitleRef }) {
  return (
    <h1 ref={pageTitleRef} className="t-title page-title"><span className="t-cyan">Publish your podcasts</span><br/><span className="t-white">everywhere.</span></h1>
  )
}
