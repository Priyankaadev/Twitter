import { useState} from "react";

function AddTweet({ onAddTweet }) {
    const [text, setText] = useState(""); //usestate state the components memory
    return (
        <>
            <input
                placeholder="Add new tweet...."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                console.log( 'clicked')
                onAddTweet(text);
                setText('');

            }}>
                Tweet
            </button>
        </>
    );
}

export default AddTweet;