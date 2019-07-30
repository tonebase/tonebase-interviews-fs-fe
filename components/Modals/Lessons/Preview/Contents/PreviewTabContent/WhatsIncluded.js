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
import { Spacer, SectionTitle } from "../../../../../Molecules/Layout";

// === DATA ===
const faqList = [
  {
    question: "What is tonebase?",
    answer:
      "tonebase is the world's largest Classical Guitar learning platform. We create the best online guitar lessons, taught by the educators, players and professionals who are amongst the brightest minds of our instrument. To learn more, visit tonebase.co/about."
  },
  {
    question: "What is a Premium Membership?",
    answer:
      "tonebase Premium is the upgraded tier of tonebase. It gives you unlimited access to all lessons, courses, supplements, and future updates made to the tonebase Platform. We have Monthly and Yearly options for subscriptions, as well as a no-questions-asked 90-day money back guarantee and a 100% satisfaction guarantee. For more information or if you have any questions, contact us at team@tonebase.co."
  },
  {
    question: "How do I watch this lesson?",
    answer:
      "You can access this lesson and all associated supplements (PDFs, Workbooks, Scores, etc.) by upgrading to a tonebase Premium membership. Membership gives you access to this lesson, and 200+ other lessons, courses and more across the tonebase Platform for a low Monthly or Yearly fee. Alternatively you may also choose to purchase this single lesson for the one time fee listed above."
  },
  {
    question: "When will I have access to the lessons and supplements?",
    answer:
      "Once you upgrade to tonebase Premium or purchase a single lesson, you will have immediate access to all lessons, courses, collections and supplements (if applicable). If you purchase a single lesson, you will retain access forever. For Monthly or Yearly tonebase Premium subscriptions, you will continue to have access till the end of your final billing period, or indefinitely so long as you continue to hold a valid membership."
  },
  {
    question: "What is your refund & guarantee policy?",
    answer:
      "Your happiness, satisfaction, and learning is our #1 concern. You will be eligible for a 100% refund for upto 90 days after your purchase of a tonebase Premium membership or single lesson. In addition we have a 100% satisfaction-guarantee, so if you ever feel dissatisfied beyond the 90-day period, please reach out and we will more than likely refund any fees incurred during the period where we failed to meet your expectations."
  },
  {
    question: "Who is this lesson for?",
    answer:
      "The difficulty rating can be seen below the 'Lesson Details' section on our Lesson Preview pages, though that difficulty is simple a suggestion and members of all stripes have gained both education and inspiration from the materials covered in our lessons."
  },
  {
    question: "Is the lesson live?",
    answer:
      "Each lesson is taught through exclusive pre-recorded videos. Additional lesson materials including PDFs, Workbooks, Annotated Scores and tonebase Editions are available to download when logged in to your Premium account."
  },
  {
    question: "Can I download the videos?",
    answer:
      "All lessons can be streamed on-demand, and watched at any time through our website at tonebase.co. We do not currently offer the ability to download videos for offline viewing. For more questions about downloading lessons please contact us at team@tonebase.co."
  },
  {
    question: "Do you offer educational discounts or payment plans?",
    answer:
      "We offer educational discounts for students, and bulk pricing for conservatories and music schools. Please contact us at team@tonebase.co to discuss your unique situation and a team member will help with the discounts that are right for you."
  },

  {
    question: "Can I give a lesson as a gift?",
    answer:
      "To purchase a tonebase Premium membership or a single lesson as a gift, please visit tonebase.co/gift."
  },
  {
    question: "How do I contact tonebase?",
    answer:
      "We're always available to help! Email us at team@tonebase.co or use the chat-box on the bottom right of your screen for the fastest response. A member of our team will get back to you within 24-48 hours!"
  }
];

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class WhatsIncluded extends React.Component {
  render() {
    const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore;
    const artistNameWithSpaces = modalData
      ? modalData.artist_slug.replace(/([A-Z]+)/g, " $1").trim()
      : null;

    return (
      <div className="previewTab whatsIncluded position-relative w-100 paddingLeft-md paddingRight-md breakMd-paddingLeft-lg breakMd-paddingRight-lg">
        {
          // Item List
        }
        <SectionTitle size="small" title="What You'll Get" />
        <div className="itemList fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs">
          <ul className="marginLeft-md paddingLeft-xxs fontSize-sm breakMd-fontSize-md lineHeight-md color-white--main">
            {modalData.num_parts > 1 && (
              <li className="marginBottom-md marginTop-xs">
                {modalData.num_parts} Lesson Sections
              </li>
            )}
            <li className="marginBottom-md marginTop-xs">
              100% Exclusive Materials
            </li>
            <li className="marginBottom-md marginTop-xs">
              Free Downloadable Workbook
            </li>
            {modalData.lesson_type === 1 && (
              <li className="marginBottom-md marginTop-xs">
                Free Annotated Scores &amp; Sheet Music
              </li>
            )}
            <li className="marginBottom-md marginTop-xs">
              Access On All Devices
            </li>
            <li className="marginBottom-md marginTop-xs">
              90-Day Money-back Guarantee
            </li>
          </ul>
        </div>
        <Spacer vertical space={32} />
        {
          // Frequently Asked Questions
        }
        <SectionTitle size="small" title="Frequently Asked Questions" />
        <div className="faqSection position-relative w-100 max-w-100 fontSize-sm breakMd-fontSize-md lineHeight-xl breakMd-paddingRight-xl paddingLeft-xs">
          {faqList.map((item, index) => {
            return (
              <details
                key={index}
                className="faq-details w-100 paddingRight-xl marginBottom-md marginTop-xs cursor-pointer"
              >
                <summary
                  className="faq-summary fontSize-sm breakMd-fontSize-md lineHeight-md color-white--main"
                  style={{ outline: "none" }}
                >
                  {item.question}
                </summary>
                <pre
                  className="faq-pre paddingTop-sm paddingBottom-sm color-black--text"
                  style={{
                    whiteSpace: `pre-wrap`,
                    fontFamily: "Arial"
                  }}
                >
                  {item.answer}
                </pre>
              </details>
            );
          })}
        </div>
        <style jsx>{`
          ul li::before {
            content: "\\2022";
            color: #777;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }

          summary::-webkit-details-marker {
            color: #777777 !important;
          }
        `}</style>
      </div>
    );
  }
}

export default view(WhatsIncluded);
