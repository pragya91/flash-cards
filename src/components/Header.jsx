import React from 'react';

function Header({ onLearn, onReset }) {
    return (
        <header style={{
            display: 'flex',
            //justifyContent: 'space-between',
            //alignItems: 'center',
            padding: '1rem',
            background: '#f5f5f5',
            borderBottom: '1px solid #ddd'
        }}>
            <button onClick={onLearn} style={{ fontSize: '1rem' }}>
                Learn About Game
            </button>
            <h1 style={{ margin: 0, fontSize: '1.5rem', flex: 1, textAlign: 'center' }}>
                Flashcard Game
            </h1>
            <button onClick={onReset} style={{ fontSize: '1rem' }}>
                Reset Progress
            </button>
        </header>
    );
}

export default Header;