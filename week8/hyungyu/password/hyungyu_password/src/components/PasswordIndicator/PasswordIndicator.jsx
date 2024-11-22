/* eslint-disable react/prop-types */
import './PasswordIndicator.css';

/**
 *
 * @param {number} length - The number of password digits. (required)
 * @param {string} value - The current password value. (required)
 */
export default function PasswordIndicator({ length, value }) {
  return (
    <div className="password-indicator-container">
      {Array.from({ length }).map((_, index) => {
        if (index < value.length) {
          return <div key={index} className="password-indicator-dot filled" />;
        }
        return <div key={index} className="password-indicator-dot empty" />;
      })}
    </div>
  );
}