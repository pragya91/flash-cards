import React from 'react';

function Welcome({ onBegin }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            background: '#f9fafb'
        }}>
            <h1>Welcome to Flash Cards!</h1>
            <p>
                Ready to test your knowledge? Challenge yourself with our flash card game and see how many you can get right!
            </p>
            <button
                style={{
                    marginTop: '2rem',
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    background: '#2563eb',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
                onClick={onBegin}
            >
                Begin Game
            </button>
        </div>
    );
}

export default Welcome;