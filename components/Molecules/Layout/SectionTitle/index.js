function SectionTitle(props = {}) {
  const { size = "regular" } = props || {};

  let titleWrapperClasses = "sectionTitleInner w-100 paddingBottom-lg";
  let titleClasses =
    "fontSize-xl breakLg-fontSize-xxl lineHeight-lg fontFamily-primary color-white--main textTransform-uppercase letterSpacing-sm";
  let subTitleClasses = "fontSize-sm breakMd-fontSize-sm lineHeight-lg";

  // Adjust title size
  if (props.size === "small") {
    titleWrapperClasses = "sectionTitleInner w-100 paddingBottom-md";
    titleClasses =
      "fontSize-lg breakLg-fontSize-xl lineHeight-md fontFamily-primary color-white--main textTransform-uppercase letterSpacing-sm";
    subTitleClasses = "fontSize-xs breakMd-fontSize-sm lineHeight-lg";
  } else if (props.size === "large") {
    titleClasses =
      "fontSize-xxl breakLg-fontSize-xxxl lineHeight-xl fontFamily-primary color-white--main textTransform-uppercase letterSpacing-sm";
    subTitleClasses = "fontSize-md breakMd-fontSize-lg lineHeight-lg";
  }

  return (
    <div className="sectionTitle pageContentItem paddingLeft-xs paddingRight-xs">
      <div className={titleWrapperClasses}>
        <div className="titleText">
          <h2 className={titleClasses}>{props.title}</h2>
        </div>
        {props.subtitle && (
          <div className="subtitleText">
            <p className={subTitleClasses}>{props.subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionTitle;
