import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { nextQuestion, previousQuestion, reset} from './flashCardsStore';

function Card() {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(state => state.questions.currentQuestion);
    const previousQuestion = useSelector(state => state.questions.previousQuestion);
    const [revealed, setRevealed] = useState(false);
    const onNext = () => {
        setRevealed(false);
        dispatch(nextQuestion());
    };
    const onPrev = () => {
        setRevealed(false);
        dispatch(previousQuestion());
    };

    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            background: '#f9fafb',
            width: '50vw',
            margin: '0 auto',
            border: '5px solid blue',
            borderRadius:'5rem'
            }}>
            <h1>{currentQuestion.question} </h1>
            <p style={{ fontSize: 18, minHeight: 40 }}>
                {revealed ? currentQuestion.answer : ''}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                <button onClick={onPrev} disabled={!previousQuestion}>Previous</button>
                <button onClick={() => setRevealed(r => !r)}>
                    {revealed ? 'Hide' : 'Reveal'}
                </button>
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    );
}

export default Card;