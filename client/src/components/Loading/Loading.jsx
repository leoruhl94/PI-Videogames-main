import "./Loading.css";
export const Loading = () => {
  return (
    <div className="loading-card">
      {/* <p className="loading-card_title">Loading...</p> */}
      <div className="loading_icon rotated">
        <svg class="spinner" viewBox="0 0 50 50">
          <circle
            class="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="5"
          ></circle>
        </svg>
      </div>
    </div>
  );
};
