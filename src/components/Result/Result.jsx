import "./result.css"
import Reaction from "/images/icon-reaction.svg"
import Memory from "/images/icon-memory.svg"
import Verbal from "/images/icon-verbal.svg"
import Visual from "/images/icon-visual.svg"

export default function Result() {
  return (
    <div className="container">
        <div className="left">
            <h4>Your Result</h4>
        <div className="score-left">
            <span className="big-score">76</span>
            <span className="small-score"> of 100</span>
        </div>
        <div className="left-text">
            <h3>Great</h3>
            <p>
            You scored higher than 65% of the people who have taken these
            tests.
            </p>
        </div>
        </div>

        <div className="right">
            <h4>Summary</h4>
            <div className="scores">
            <div className="score-reaction score">
                <div className="score-con">
                    <img src={Reaction} alt="icon-reaction" />
                    <span>Reaction</span>
                </div>
                <span className="black-text">80 / <span className="grey">100</span></span>
            </div>
            <div className="score-memory score">
                <div className="score-con">
                    <img src={Memory} alt="icon-memory" />
                    <span>Memory</span>
                </div>
                <span className="black-text">63 / <span className="grey">100</span></span>
            </div>
            <div className="score-verbal score">
                <div className="score-con">
                    <img src={Verbal} alt="icon-verbal" />
                    <span>Verbal</span>
                </div>
                <span className="black-text">72 / <span className="grey">100</span></span>
            </div>
            <div className="score-visual score">
                <div className="score-con">
                    <img src={Visual} alt="icon-visual" />
                    <span>Visual</span>
                </div>
                <span className="black-text">95 / <span className="grey">100</span></span>
            </div>
            </div>
            <button class="button-56" role="button">Button</button>
        </div>
    </div>
  )
}
