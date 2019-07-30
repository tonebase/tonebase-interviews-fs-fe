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

class InThisLesson extends React.Component {
  render() {
    const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore;
    const artistNameWithSpaces = modalData
      ? modalData.artist_slug.replace(/([A-Z]+)/g, " $1").trim()
      : null;

    return (
      <div className="previewTab inThisLesson position-relative w-100 paddingLeft-md paddingRight-md breakMd-paddingLeft-xl breakMd-paddingRight-lg">
        {
          // Lesson Details
        }
        <div
          className="previewSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
          style={{ borderBottom: `1px solid #222222` }}
        >
          <SectionTitle size="small" title={`Lesson Details`} />
          <div className="lessonDetails color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs">
            {modalData.lesson_type === 0 && (
              <span>
                Join {artistNameWithSpaces} {modalData.title.toLowerCase()}.{" "}
                {artistNameWithSpaces} expertly breaks down the technique,
                analyzing its effectiveness and demonstrating how to execute
                flawless {modalData.title.toLowerCase().replace("on ", "")}.
                <span className="hidden-xs hidden-sm">
                  Polish and elevate your technique with instructions from the
                  legends on tonebase and get ready to take your playing to next
                  level!
                </span>
              </span>
            )}
            {modalData.lesson_type === 1 && (
              <span>
                Join {artistNameWithSpaces} on a break down of {modalData.title}
                . {artistNameWithSpaces} covers the major problem areas in the
                piece, stepping through note-by-note with demonstrations,
                explanations, ideas &amp; more.{" "}
                <span className="hidden-xs hidden-sm">
                  tonebase Repertoire lessons are your inside look into how the
                  greatest performers and educators of our time tackle pieces -
                  from beginner level etudes to the most awe-inspiring melodies
                  in our catalog.
                </span>
              </span>
            )}
            {modalData.lesson_type === 2 && (
              <span>
                Join us on a journey insidethe mind of the one and only{" "}
                {artistNameWithSpaces} in this exclusive, in-depth tonebase
                Interview covering the artists musical background,
                inspiratioons, advice, tips, tricks &amp; more.{" "}
                <span className="hidden-xs hidden-sm">
                  tonebase Interviews are your inside look behind the lives of
                  the some of the greatest performers, pedagogues and composers
                  of our time.
                </span>
              </span>
            )}
          </div>
          {
            // Part List
          }
          <div className="lessonPartList position-relative w-100">
            {modalData.metadata.parts &&
              modalData.metadata.parts.length &&
              modalData.metadata.parts.map((lessonPart, index) => {
                const partTitle = modalData.metadata.parts[index].part_title;
                const partTitleWithNoPartNumber = partTitle.substring(
                  partTitle.indexOf(":") + 1,
                  partTitle.length
                );

                return (
                  <div
                    key={index}
                    className="lessonPart cursor-pointer marginTop-lg breakMd-marginTop-xl marginBottom-lg breakMd-marginBottom-xl position-relative w-100 d-flex flex-row alignItems-start justifyContent-start overflow-hidden"
                    onClick={ModalStore.openModal("upgradeModal")}
                  >
                    <div className="partImage d-flex alignItems-center justifyContent-center w-25 min-w-25 max-w-180px marginTop-xs breakMd-marginTop-0">
                      <div
                        className="partImageInner position-relative w-100 h-0 bg-cover bg-no-repeat bg-center borderRadius-md overflow-hidden overlay-dark"
                        style={{
                          paddingTop: "56.25%",
                          backgroundImage: `url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/lessons/parts/sm/${modalSlug}_${index +
                            1}.jpg`})`
                        }}
                      >
                        <div className="lockIcon position-absolute z-2 w-100 h-100 t-0 l-0 d-flex alignItems-center justifyContent-center">
                          <svg
                            className="lockIconSVG"
                            viewBox="0 0 21 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.79014 30H18.2078C19.7437 30 21 28.7597 21 27.2434V14.0219C21 12.5615 19.8339 11.3582 18.376 11.2712V7.66639C18.376 -2.55496 2.62297 -2.55596 2.62297 7.66639V11.2712C1.16509 11.3582 0 12.5615 0 14.0219V27.2434C0 28.7597 1.25526 30 2.79115 30H2.79014ZM10.499 15.7633C12.6093 15.7633 13.3276 18.5339 11.5192 19.5561V21.5936C11.5192 22.9259 9.47979 22.9259 9.47979 21.5936V19.5561C7.67136 18.5339 8.38865 15.7633 10.499 15.7633ZM16.139 11.2662H4.85995V7.66639C4.85995 0.300694 16.139 0.300694 16.139 7.66639V11.2662Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="partMetadata min-w-75 max-w-75 paddingLeft-sm breakMd-paddingLeft-md">
                      <div className="partNumber">
                        <h6
                          className={`${getLessonTypeColorClass(
                            modalData.lesson_type
                          )} fontSize-xs breakMd-fontSize-sm breakXl-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-lg`}
                        >
                          Part {index + 1} of {modalData.num_parts}
                        </h6>
                      </div>
                      <div className="partTitle">
                        <p className="color-white--main fontSize-sm breakMd-fontSize-md lineHeight-lg">
                          {partTitleWithNoPartNumber}
                        </p>
                      </div>
                      <div className="partUnlock paddingTop-xs">
                        <h6
                          className={`d-inline-block color-white--main fontSize-xxs breakMd-fontSize-xs breakXl-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-lg`}
                          style={{ borderBottom: `1px solid #e14f3d` }}
                        >
                          Access Full Lesson &rarr;
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="previewSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg">
          {
            // Lesson Collections
          }
          <SectionTitle size="small" title="Found In These Collections" />
          <SectionContentWithFetchedData
            dataURL={`/collections/byLesson?slug=${modalSlug}`}
            wrapperClass="col col-xs-6 col-md-3"
          />
        </div>
        <style jsx>{`
          .lockIconSVG {
            width: 14px;
            height: 20px;
          }

          @media (min-width: 768px) {
            .lockIconSVG {
              width: 21px;
              height: 30px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default view(InThisLesson);
