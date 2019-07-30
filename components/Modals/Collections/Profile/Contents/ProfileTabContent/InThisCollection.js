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
  Spacer,
  SectionTitle,
  SectionContentWithFetchedData
} from "../../../../../Molecules/Layout";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class Overview extends React.Component {
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
        <div
          className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
          style={{ borderBottom: `1px solid #222222` }}
        >
          <Spacer vertical space={8} />
          {
            // About Collection
          }
          <SectionTitle size="small" title="About This Collection" />
          <div
            className="artistBio position-relative w-100 color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs paddingBottom-xl cursor-pointer"
            onClick={this.toggleDescription}
          >
            {modalData.description.length <= 250 ? (
              <span className="long">
                <span
                  dangerouslySetInnerHTML={{
                    __html: modalData.description
                  }}
                />
              </span>
            ) : (
              <span>
                {this.state.fullDescription ? (
                  <span className="long">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: modalData.description
                      }}
                    />
                    <span className="fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md color-primary--main cursor-pointer">
                      &nbsp;Show Less
                    </span>
                  </span>
                ) : (
                  <span className="short">
                    {modalData.description
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
              </span>
            )}
          </div>
          {
            // Collection Lessons
          }
          <SectionTitle size="small" title="Lessons In This Collection" />
          <SectionContentWithFetchedData
            dataURL={`/lessons/byCollection?slug=${modalSlug}`}
            wrapperClass="col col-xs-6 col-md-4"
            hasArtist={false}
          />
        </div>
        <div
          className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
          style={{ borderBottom: `1px solid #222222` }}
        >
          {
            // Collection Artists
          }
          <SectionTitle size="small" title="Artists In This Collection" />
          <SectionContentWithFetchedData
            dataURL={`/artists/byCollection?slug=${modalSlug}`}
            wrapperClass="col col-xs-6 col-md-3"
          />
        </div>
        {modalData.metadata.composer_slugs.length && (
          <div
            className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
            style={{ borderBottom: `1px solid #222222` }}
          >
            {
              // Collection Composers
            }
            <SectionTitle size="small" title="Composers In This Collection" />
            <SectionContentWithFetchedData
              dataURL={`/composers/byCollection?slug=${modalSlug}`}
              wrapperClass="col col-xs-6 col-md-3"
            />
          </div>
        )}
      </div>
    );
  }
}

export default view(Overview);
