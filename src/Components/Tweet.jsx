// can also make this a js or jsx file both works same 
//its good to put jsx syntax i personally like the syntax else reader will better understand the jsx component
import '../CSS/Tweet.css'
function Tweet({ content, likeCount, createdAt }) {
    return (
        <div className='tweet-wrapper'>
            <div className="tweet-content">
                {content}
            </div>
            <div className='like-createdAt-wrapper'>
                  <div className="likes">
                {likeCount} likes
            </div>
            <div className='created-at'>
               <b>Tweeted at</b>  {createdAt}
            </div>
            </div>
          
        </div>
    )
}

export default Tweet;