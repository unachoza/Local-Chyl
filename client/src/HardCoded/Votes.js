// import Group2 from '../assets/icons/Group2.svg'
import thumbsDown from '../assets/icons/thumbs-down.svg'
import thumbsUp from '../assets/icons/thumbs-up.svg'
import React from 'react' 

const Votes = (props) => {
    console.log("this is ", props.onVote, props.vote)
    return (
        <div className="vote">
            <img src={thumbsUp} name="yes" onClick={(e) => props.onVote(e)} className={props.seletected? "voteSelected": "voteNotSelected"} alt="yes" />
            {/* <img src={Group2} name="maybe" onClick={(e) => props.onVote(e)} className={props.seletected? "voteSelected": "voteNotSelected"} alt="maybe" /> */}
            <img src={thumbsDown} name="no" onClick={(e) => props.onVote(e)} className={props.seletected? "voteSelected": "voteNotSelected"} alt="no" />
        </div>
    )
}

export default Votes
