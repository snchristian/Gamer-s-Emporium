import React from 'react'

function Review({gameReview}) {
  const {content} = gameReview
  return (
    <main>
      <div>Review</div>
      {content}
    </main>
    

  )
}

export default Review