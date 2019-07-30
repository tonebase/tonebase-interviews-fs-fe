// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../stores";
import { view } from "react-easy-state";

// === HELPERS ===
import {
  getLessonDifficultyText,
  getLessonTypeText,
  getLessonTypeColorClass
} from "../../../../../lib/helpers/content/lessons";

// === CUSTOM ===
import { Spacer } from "../../../../Molecules/Layout";
import { TabNav, TabNavItem } from "../../../../Molecules/Navigation";
import {
  PreviewVideo,
  PreviewCoreData,
  PreviewActionTriggers,
  LessonMetadata,
  PreviewTabContent
} from "../Contents";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class PreviewModalContent extends React.Component {
  render() {
    const modalData = ModalStore.modalData || null;
    const modalSlug = ModalStore.openModalSlug || null;
    const artistNameWithSpaces = ModalStore.modalData
      ? ModalStore.modalData.artist_slug.replace(/([A-Z]+)/g, " $1").trim()
      : null;

    return (
      <div className="modalContentInner d-flex flex-col paddingBottom-xxl">
        {
          // === PREVIEW VIDEO
        }
        <PreviewVideo />
        {
          // === LESSON CORE DATA
        }
        <PreviewCoreData />
        <div className="d-flex flex-row flex-wrapAll paddingLeft-md paddingRight-md breakMd-paddingLeft-xl breakMd-paddingRight-xl breakMd-paddingTop-md breakLg-paddingTop-sm">
          {
            // === LESSON METADATA
          }
          <LessonMetadata />
          {
            // === ACTION TRIGGERS
          }
          <PreviewActionTriggers />
        </div>
        <Spacer vertical space={8} />
        {
          // === TABS
        }
        <div
          className="previewTabNavigation w-100 min-w-100 marginTop-xl"
          style={{ borderTop: `1px solid #222222` }}
        >
          <TabNav>
            <TabNavItem
              first
              active={ModalStore.currentModalTab === "inThisLesson"}
              onClick={() => ModalStore.switchToModalTab("inThisLesson")}
            >
              In This Lesson
            </TabNavItem>
            <TabNavItem
              active={ModalStore.currentModalTab === "yourInstructor"}
              onClick={() => ModalStore.switchToModalTab("yourInstructor")}
            >
              Your Instructor
            </TabNavItem>
            <TabNavItem
              active={ModalStore.currentModalTab === "whatsIncluded"}
              onClick={() => ModalStore.switchToModalTab("whatsIncluded")}
            >
              What's Included
            </TabNavItem>
            <TabNavItem
              active={ModalStore.currentModalTab === "moreLikeThis"}
              onClick={() => ModalStore.switchToModalTab("moreLikeThis")}
            >
              More Like This
            </TabNavItem>
          </TabNav>
        </div>
        {
          // TAB CONTENT
        }
        <PreviewTabContent />
      </div>
    );
  }
}

export default view(PreviewModalContent);
