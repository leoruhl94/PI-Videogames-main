import "./Loading.css";
export const Loading = () => {
  return (
    <div className="loading-card">
      <div className="loading_icon rotated">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
    </div>
  );
};
