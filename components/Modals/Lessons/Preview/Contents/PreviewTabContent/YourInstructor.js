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
import { NarrowGetter } from "../../../../../DataGetters";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class YourInstructor extends React.Component {
  render() {
    const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore;

    // Extract data props
    const { artist_slug = "" } = modalData || {};
    const artistNameWithSpaces = artist_slug
      ? artist_slug.replace(/([A-Z]+)/g, " $1").trim()
      : null;

    return (
      <div className="previewTab yourInstructor position-relative w-100 paddingLeft-md paddingRight-md breakMd-paddingLeft-lg breakMd-paddingRight-lg">
        {
          // Artist Image + One Liner
        }
        <SectionTitle size="small" title={`About ${artistNameWithSpaces}`} />
        <div
          className="artistInfo w-100 d-flex flex-row flex-noWrap cursor-pointer"
          onClick={ModalStore.openModal("artistProfileModal", {
            slug: artist_slug
          })}
        >
          <div className="artistImage partImage d-flex alignItems-start justifyContent-center w-25 min-w-25 max-w-180px marginTop-xs breakMd-marginTop-0">
            <div
              className="artistImageInner position-relative w-100 h-0 bg-cover bg-no-repeat bg-center borderRadius-50 overflow-hidden"
              style={{
                paddingTop: "100%",
                backgroundImage: `url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/artists/profiles/lg/${artist_slug}.jpg`})`
              }}
            />
          </div>
          <div className="artistDescription min-w-75 max-w-75 paddingLeft-sm breakMd-paddingLeft-md">
            <div className="artistMetadata">
              <h6
                className={`${getLessonTypeColorClass(
                  modalData.lesson_type
                )} fontSize-xs breakMd-fontSize-sm breakXl-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-lg`}
              >
                Artist
                <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
                  &nbsp;&middot;&nbsp;
                </span>
                <NarrowGetter
                  type="artist"
                  slug={artist_slug}
                  property="num_lessons"
                />
                &nbsp;Lessons
              </h6>
            </div>
            <div className="artistTitle">
              <h4 className="fontSize-xl breakMd-fontSize-xxxl breakLg-fontSize-xxxl fontFamily-primary fontWeight-xl textTransform-uppercase letterSpacing-xs lineHeight-lg breakMd-lineHeight-md color-white--main">
                {artistNameWithSpaces}
              </h4>
            </div>
            <div className="artistDescription paddingTop-xs paddingRight-xl">
              <p className="color-black--text fontSize-sm breakMd-fontSize-md lineHeight-lg">
                <NarrowGetter
                  type="artist"
                  slug={artist_slug}
                  property="one_liner"
                />
              </p>
            </div>
            <div className="artistProfileLink paddingTop-sm cursor-pointer">
              <h6
                className={`d-inline-block color-white--main fontSize-xxs breakMd-fontSize-xs breakXl-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-lg`}
                style={{ borderBottom: `1px solid #e14f3d` }}
              >
                View Profile &rarr;
              </h6>
            </div>
          </div>
        </div>
        <Spacer vertical space={48} />
        {
          // Artist Lessons
        }
        <SectionTitle
          size="small"
          title={`Also From ${artistNameWithSpaces}`}
        />
        <SectionContentWithFetchedData
          dataURL={`/lessons/byArtist?slug=${artist_slug}`}
          wrapperClass="col col-xs-6 col-md-4"
          excludeSlug={modalData.slug}
          hasArtist={false}
        />
      </div>
    );
  }
}

export default view(YourInstructor);
