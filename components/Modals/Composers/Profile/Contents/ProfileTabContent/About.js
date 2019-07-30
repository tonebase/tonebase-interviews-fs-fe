// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../../stores";
import { view } from "react-easy-state";

// === HELPERS ===
import {
  getLessonDifficultyText,
  getLessonTypeText,
  getLessonTypeColorClass
} from "../../../../../../lib/helpers/content/lessons";

// === CUSTOM ===
import {
  SectionTitle,
  SectionContentWithFetchedData
} from "../../../../../Molecules/Layout";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class About extends React.Component {
  state = {
    fullDescription: false
  };

  toggleDescription = () => {
    this.setState({ fullDescription: !this.state.fullDescription });
  };

  render() {
    const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore;

    return (
      <div className="profileTab moreLikeThis position-relative w-100 paddingLeft-md paddingRight-md breakMd-paddingLeft-lg breakMd-paddingRight-lg">
        {
          // Biography
        }
        <div
          className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
          style={{ borderBottom: `1px solid #222222` }}
        >
          <SectionTitle size="small" title={`Learn More About ${modalSlug}`} />
          {modalData.metadata.description.length > 250 ? (
            <div
              className="composerBio position-relative w-100 color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs paddingBottom-xl cursor-pointer"
              onClick={this.toggleDescription}
            >
              {this.state.fullDescription ? (
                <span className="long">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: modalData.metadata.description
                    }}
                  />
                  <span className="fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md color-primary--main cursor-pointer">
                    &nbsp;Show Less
                  </span>
                </span>
              ) : (
                <span className="short">
                  {modalData.metadata.description
                    .replace("<br/><br/>", " ")
                    .replace("<br /><br />", " ")
                    .replace("<br><br>", " ")
                    .replace("<br>", "")
                    .replace("<br/>", "")
                    .substring(0, 244) + "..."}
                  <span className="fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md color-primary--main">
                    &nbsp;Read More
                  </span>
                </span>
              )}
            </div>
          ) : (
            <div className="composerBio position-relative w-100 color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs paddingBottom-xl cursor-pointer">
              <span className="long">
                <span
                  dangerouslySetInnerHTML={{
                    __html: modalData.metadata.description
                  }}
                />
              </span>
            </div>
          )}
        </div>
        {
          // Stream Recordings
        }
        {modalData.metadata.spotify_url && (
          <div
            className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
            style={{ borderBottom: `1px solid #222222` }}
          >
            <SectionTitle size="small" title="Stream Composer Recordings" />
            <div className="recordingsSection w-100 position-relative">
              <iframe
                src={`https://open.spotify.com/embed/Composer/${
                  modalData.metadata.spotify_url
                }`}
                width="100%"
                height="auto"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </div>
          </div>
        )}
        {
          // Concert Schedule
        }
        {modalData.metadata.webiste_url && (
          <div className="profileSection paddingBottom-lg">
            <SectionTitle size="small" title="Concert Schedule" />
            <div className="websiteLink position-relative w-100 marginBottom-lg">
              <p className="w-100 color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs paddingBottom-md">
                Learn more about the composer, their background, history and
                facts. Please note that you will be leaving the tonebase website
                and accuracy of any information is not guaranteed by tonebase.
              </p>
              <a
                href={modalData.metadata.website_url}
                target="_blank"
                className="d-inline-block paddingLeft-xs"
              >
                <button className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-black--lighter fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm paddingLeft-md paddingRight-md lineHeight-lg textAlign-center borderRadius-md floatOnHover">
                  <span className="buttonText">
                    Learn More About {modalSlug}&rarr;
                  </span>
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default view(About);
