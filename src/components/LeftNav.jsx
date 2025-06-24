import React from 'react';
import PropTypes from 'prop-types';
import './LeftNav.css'; // Optional: for styling

const LeftNav = ({ questions, onSelect, selectedId }) => {
    return (
        <nav className="left-nav">
            <ul className="left-nav-list">
                {questions.map((q) => (
                    <li
                        key={q.id}
                        className={`left-nav-item${selectedId === q.id ? ' selected' : ''}`}
                        onClick={() => onSelect && onSelect(q.id)}
                        tabIndex={0}
                        role="button"
                        aria-pressed={selectedId === q.id}
                    >
                        {q.topic}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

LeftNav.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            topic: PropTypes.string.isRequired,
        })
    ).isRequired,
    onSelect: PropTypes.func,
    selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LeftNav;