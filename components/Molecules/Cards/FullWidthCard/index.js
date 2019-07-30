// === CORE ===
import { Fragment } from "react";

class FullWidthCard extends React.Component {
  state = {
    playing: false
  };

  togglePlaying = () => {
    this.setState({ playing: !this.state.playing });
  };

  render() {
    return (
      <div className="pageContentItem fullWidthCard w-100">
        <div
          className={`fullWidthCardPadding position-relative d-flex alignItems-center borderRadius-lg overflow-hidden ${
            this.props.onClick ? "cursor-pointer" : ""
          }`}
          onClick={this.props.onClick || null}
        >
          {
            // === IMAGE/VIDEO CONTENT + BACKGROUND
          }
          <div className="cardInner cardVisualWrapper position-absolute t-0 b-0 l-0 r-0 w-100 h-100 overflow-hidden">
            {this.props.hasVideo && (
              <div className="videoWrapper w-100 h-100">
                <iframe
                  id={this.props.videoID}
                  className="cardVideo z-1"
                  src={`https://player.vimeo.com/video/${
                    this.props.videoID
                  }?controls=0&background=true&loop=true&autoplay=${
                    this.state.playing
                  }&autopause=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  controls={false}
                  speed="true"
                  loop={true}
                  muted={true}
                  // Experimental
                  responsive={true}
                />
                <div
                  className="cardControls position-absolute"
                  onClick={this.togglePlaying}
                >
                  <div className="controlButton color-white--main cursor-pointer">
                    {this.state.playing ? (
                      <span
                        className="pause d-block fontSize-xxxl"
                        style={{ transform: `rotate(90deg)` }}
                      >
                        =
                      </span>
                    ) : (
                      <span className="play d-block fontSize-xl">
                        &#9654;&#xFE0E;
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
            {this.props.hasImage && (
              <div className="imageWrapper w-100 h-100">
                <div
                  className="cardImage z-1 w-100 h-100 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${this.props.imageURL})` }}
                />
              </div>
            )}
          </div>
          {
            // === TEXT CONTENT
          }
          <div className="cardInner position-absolute t-0 b-0 l-0 r-0 z-2">
            <div className="cardTextContent position-relative d-table w-100 h-100 padding-lg breakMd-padding-xl">
              <div className="cardTextInner d-table-cell breakLg-padding-md">
                <div className="position-relative marginLeft-auto marginRight-auto max-w-100 textAlign-left">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          /* SIZING */
          .fullWidthCardPadding {
            padding-top: 372px;

            height: 0;

            overflow: hidden;
          }

          /* BACKGROUND */
          .cardVisualWrapper:after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            width: 100%;
            height: 100%;

            background-color: rgba(0, 0, 0, 0.72);
            z-index: 2;
          }

          .cardVideo {
            position: absolute;
            top: 50%;
            left: 50%;

            width: 100vw;
            min-width: 177.7vw;
            height: 100vh;
            min-height: 100vh;

            transform: translate(-50%, -50%);
          }
          .cardControls {
            bottom: 16px;
            right: 16px;
            z-index: 3;
          }

          /* TEXT */
          .cardTextInner {
            vertical-align: bottom;
          }

          /* RESPONSIVE */

          @media (min-width: 768px) {
            .fullWidthCardPadding {
              padding-top: 375px;
            }

            .cardVideo {
              min-width: 100vw;
              min-height: 100vh;
            }

            .cardTextInner {
              vertical-align: middle;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default FullWidthCard;
