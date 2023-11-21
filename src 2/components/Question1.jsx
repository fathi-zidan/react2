import './Question1.css'
export default function QuestionOne(){
    return(
        <div className="question-one">
            <label id="l1">How Much Do You Love Front End?</label>
            <input type="range" min={0} max={10} />
        </div>
    );

}