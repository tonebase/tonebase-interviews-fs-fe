// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { view } from "react-easy-state";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class LessonImage extends React.Component {
  render() {
    return (
      <div className="itemImage __lesson __regular w-100">
        <div className="itemImageInner w-100 position-relative">
          <div className="itemImageWrapper position-relative w-100 h-0">
            <div
              className="itemImageBackground position-absolute t-0 l-0 w-100 h-100 bg-cover bg-no-repeat bg-center borderRadius-md overflow-hidden"
              style={{
                backgroundImage: `url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/collections/profiles/lg/${
                  this.props.slug
                }.jpg`})`
              }}
            >
              {
                // Length Metadata
              }
              <div className="itemImageMetadata position-absolute w-100 h-100 z-2">
                <div className="itemNumLessons position-absolute t-0 r-0 marginTop-xs marginRight-xs d-inline-block paddingLeft-sm paddingRight-sm paddingTop-xxs paddingBottom-xxs lineHeight-sm bgColor-primary--darker color-white--main borderRadius-md">
                  <span className="fontSize-xxs breakLg-fontSize-xs fontFamily-primary textTransform-uppercase letterSpacing-md">
                    {this.props.num_lessons} Lessons
                  </span>
                </div>
              </div>
              {
                // Play Icon
              }
              <div className="itemPlayIcon position-absolute w-100 h-100 z-1 hidden-xs hidden-sm">
                <svg
                  className="contentPlayIcon position-absolute"
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
                </svg>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .itemImageWrapper {
            padding-top: 210px;
          }
          @media (min-width: 768px) {
            .itemImageWrapper {
              padding-top: 180px;
            }
          }
          @media (min-width: 992px) {
            .itemImageWrapper {
              padding-top: 240px;
            }
          }

          .itemPlayIcon {
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.42);

            will-change: opacity;
            transition: opacity 0.12s ease;
          }
          .itemImage:hover .itemPlayIcon {
            opacity: 1;
          }

          .itemPlayIcon svg {
            top: 50%;
            left: 50%;
            margin-top: -24px;
            margin-left: -24px;
            z-index: 2;

            width: 48px;
            height: 48px;

            transform: scale(0.8);
            will-change: transform;
            transition: transform 0.12s ease;
          }
          .itemImage:hover .itemPlayIcon svg {
            transform: scale(1);
          }

          @media (min-width: 992px) {
            .itemPlayIcon svg {
              margin-top: -32px;
              margin-left: -32px;

              width: 64px;
              height: 64px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default view(LessonImage);
