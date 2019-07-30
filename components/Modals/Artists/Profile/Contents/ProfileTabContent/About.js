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
          <SectionTitle size="small" title="Meet Your New Instructor" />
          <div
            className="artistBioButtons paddingBottom-md d-flex flex-row max-w-600px paddingTop-md paddingBottom-sm"
            style={{ marginLeft: "-4px" }}
          >
            {modalData.metadata.youtube_url && (
              <a
                href={modalData.metadata.youtube_url}
                target="_blank"
                className="d-inline-block w-50 paddingLeft-sm paddingRight-sm"
              >
                <button className="actionButton w-100 d-flex flex-row alignItems-center justifyContent-center bgColor-black--lighter fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md floatOnHover">
                  <span className="buttonText">Youtube Profile &rarr;</span>
                </button>
              </a>
            )}
            {modalData.metadata.website_url && (
              <a
                href={modalData.metadata.website_url}
                target="_blank"
                className="d-inline-block w-50 paddingLeft-sm paddingRight-sm"
              >
                <button
                  className="actionButton w-100 d-flex flex-row alignItems-center justifyContent-center fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md"
                  style={{ border: `1px solid #e14f3d` }}
                >
                  <span className="buttonText">Artist Website &rarr;</span>
                </button>
              </a>
            )}
          </div>
          <div
            className="artistBio position-relative w-100 color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs paddingBottom-xl cursor-pointer"
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
          {modalData.metadata.performance_video && (
            <div className="artistPerformance position-relative w-100 breakMd-paddingRight-xl paddingLeft-xs paddingBottom-xl">
              <div
                className="artistPerformanceInnerposition-relative w-100 h-0"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="performanceVideoPlayer position-absolute w-100 h-100 t-0 l-0"
                  style={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${
                    modalData.metadata.performance_video
                  }`}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
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
            <SectionTitle size="small" title="Stream Artist Recordings" />
            <div className="recordingsSection w-100 position-relative">
              <iframe
                src={`https://open.spotify.com/embed/artist/${
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
        {modalData.metadata.concert_schedule_url && (
          <div className="profileSection paddingBottom-lg">
            <SectionTitle size="small" title="Concert Schedule" />
            <div className="concertScheduleLink position-relative w-100 marginBottom-lg">
              <p className="w-100 color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs paddingBottom-md">
                View the artists past, current and future concert/touring
                schedule below. Please note that you will be leaving the
                tonebase website and accuracy of any information is not
                guaranteed by tonebase.
              </p>
              <a
                href={modalData.metadata.concert_schedule_url}
                target="_blank"
                className="d-inline-block paddingLeft-xs"
              >
                <button className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-black--lighter fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm paddingLeft-md paddingRight-md lineHeight-lg textAlign-center borderRadius-md floatOnHover">
                  <span className="buttonText">
                    View Concert Schedule &rarr;
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
