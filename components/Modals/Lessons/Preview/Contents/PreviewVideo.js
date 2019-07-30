// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../stores";
import { view } from "react-easy-state";

// === ASSETS ===
import { upgrade } from "../../../../../lib/assets/icons/general";

// === CUSTOM ===
import { Spacer } from "../../../../Molecules/Layout";
import PlayIcon from "./PlayIcon";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class PreviewVideo extends React.Component {
  state = {
    playing: false,
    playingBlocked: false
  };

  startPreviewVideo = () => {
    if (!this.state.playingBlocked) {
      this.setState({
        playing: true
      });
    } else {
      this.loadPreviewGate();
    }
  };

  loadPreviewGate = () => {
    return null;
  };

  render() {
    const modalData = ModalStore.modalData ? ModalStore.modalData : null;
    const modalSlug = ModalStore.modalData ? ModalStore.openModalSlug : null;

    return (
      <div className="previewVideo w-100 min-w-100 cursor-pointer">
        <div
          className="previewVideoInner position-relative w-100 h-0"
          style={{ paddingTop: "56.25%" }}
        >
          {this.state.playing ? (
            <div className="previewVideoPlayer position-absolute t-0 l-0 r-0 w-100 h-100">
              {
                // Preview Add Ons
              }
              <div className="addOnWrapper position-absolute w-100 h-0 z-2">
                {
                  // Upgrade Prompt
                }
                <div
                  className="prompt position-absolute t-0 l-0 marginTop-md marginLeft-lg"
                  onClick={ModalStore.openModal("upgradeModal")}
                >
                  <h6
                    className={`color-black--text fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md`}
                    style={{ textShadow: `0px 0px 16px rgba(0,0,0,0.6)` }}
                  >
                    &mdash; Access the full lesson &mdash;
                  </h6>
                  <Spacer vertical space={8} />
                  <div className="buttonWrapper max-w-320px position-relative marginLeft-0">
                    <div className="upgradeButton d-block w-100">
                      <button className="actionButton d-flex flex-row alignItems-center justifyContent-center w-100 bgColor-primary--main fontSize-md fontWeight-xl fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md floatOnHover">
                        <span className="buttonIcon d-inline-block paddingRight-xxs breakLg-paddingRight-xs">
                          <svg
                            className="upgradeSVG"
                            viewBox="0 0 16 16"
                            fill="#ffffff"
                            dangerouslySetInnerHTML={{ __html: upgrade }}
                          />
                        </span>
                        <span className="buttonText">Go Premium &rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {
                // Preview Player
              }
              <iframe
                id={modalData.preview_url}
                className="previewIframe z-1 w-100 h-100 position-absolute t-0 l-0"
                src={`https://player.vimeo.com/video/${
                  modalData.preview_url
                }?controls=1&background=false&loop=false&autoplay=1&autopause=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; encrypted-media"
                controls={true}
                speed="true"
                loop={false}
                muted={false}
                // Experimental
                responsive={true}
              />
            </div>
          ) : (
            <div
              onClick={this.startPreviewVideo}
              className="previewVideoImage position-absolute t-0 l-0 r-0 w-100 h-100 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(16, 16, 18, 1)), url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/lessons/cards/lg/${modalSlug}.jpg`})`
              }}
            >
              <PlayIcon />
              <div className="playPulse position-absolute t-0 b-0 r-0 l-0 borderRadius-50" />
            </div>
          )}
        </div>
        {this.state.playing && <Spacer vertical space={16} />}
        <style jsx>{`
          .playPulse {
            width: 64px;
            height: 64px;

            top: 50%;
            left: 50%;
            margin-top: -32px;
            margin-left: -32px;
            z-index: 1;

            border: 3px solid hsla(0, 0%, 100%, 0);

            animation-name: pulse;
            animation-duration: 3.2s;
            animation-timing-function: ease-out;
            animation-iteration-count: infinite;
            animation-play-state: running;
          }

          @media (min-width: 768px) {
            .playPulse {
              margin-top: -40px;
              margin-left: -40px;

              width: 80px;
              height: 80px;
            }
          }
          @media (min-width: 992px) {
            .playPulse {
              margin-top: -55px;
              margin-left: -55px;

              width: 110px;
              height: 110px;
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              border-color: hsla(0, 0%, 100%, 0.55);
            }
            100% {
              transform: scale(1.4);
              border-color: hsla(0, 0%, 100%, 0);
            }
          }
        `}</style>
      </div>
    );
  }
}

export default view(PreviewVideo);
