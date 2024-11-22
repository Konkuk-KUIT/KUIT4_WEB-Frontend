import "./index.css";

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
