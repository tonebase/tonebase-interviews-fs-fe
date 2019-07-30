// === STYLING ===
import style from "../PreviewModal.scss";

function PlayIcon(props) {
  return (
    <svg
      className="previewPlayIcon position-absolute"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M118.5 60C118.5 92.3087 92.3087 118.5 60 118.5C27.6913 118.5 1.5 92.3087 1.5 60C1.5 27.6913 27.6913 1.5 60 1.5C92.3087 1.5 118.5 27.6913 118.5 60Z"
        fill="black"
        fillOpacity="0.42"
        stroke="white"
        strokeWidth="3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.6665 78.3334V41.6667L83.3332 60.0001L46.6665 78.3334Z"
        fill="white"
      />
      <style jsx>{`
        .previewPlayIcon {
          top: 50%;
          left: 50%;
          margin-top: -32px;
          margin-left: -32px;
          z-index: 2;

          width: 64px;
          height: 64px;

          transition: transform 0.12s ease;
        }

        .previewPlayIcon:hover {
          transform: scale(1.2);
        }

        @media (min-width: 768px) {
          .previewPlayIcon {
            margin-top: -40px;
            margin-left: -40px;

            width: 80px;
            height: 80px;
          }
        }
        @media (min-width: 992px) {
          .previewPlayIcon {
            margin-top: -55px;
            margin-left: -55px;

            width: 110px;
            height: 110px;
          }
        }
      `}</style>
    </svg>
  );
}

export default PlayIcon;
