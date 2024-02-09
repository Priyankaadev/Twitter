// can also make this a js or jsx file both works same 
//its good to put jsx syntax i personally like the syntax else reader will better understand the jsx component
import { useState } from 'react';
import '../CSS/Tweet.css'
function Tweet({ tweetId, content, likeCount, createdAt , onEdit}) {
    const [isEditting, setIsEditting] = useState(false);
    return (
        <div className='tweet-wrapper'>
            <div className='tweet-edit-wrapper'>
                <div className="tweet-content">

                    {(isEditting) ? (<input 
                type='text'
                value={content}
                onChange={( e) =>
                {
                    onEdit( {
                        id : tweetId,
                        content: e.target.value,
                        likeCount: likeCount,
                        createdAt : createdAt
                    })
                }}    
                /> ) : content}
                </div>
                <div>
                    <button onClick={() => setIsEditting(!isEditting)}>
                        {(isEditting) ? 'Save' : 'Edit'}
                    </button>
                </div>
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