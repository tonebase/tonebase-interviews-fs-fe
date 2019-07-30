// === STORES ===
import { view } from "react-easy-state";

function UpgradeOption(props) {
  return (
    <div className="upgradeOption yearly d-flex flex-col max-w-480px marginLeft-auto marginRight-auto bgColor-black--darker padding-sm paddingLeft-lg paddingRight-lg borderRadius-xl boxShadow-close">
      {props.primary && (
        <div
          className="primaryWrapper w-100 max-w-240px marginLeft-auto marginRight-auto paddingTop-xs paddingBottom-xs marginBottom-sm lineHeight-sm bgColor-primary--darker textAlign-center borderRadius-lg boxShadow-close"
          style={{ marginTop: "-24px" }}
        >
          <h6 className="fontFamily-primary fontSize-sm color-white--main textTransform-uppercase letterSpacing-md">
            Most Popular
          </h6>
        </div>
      )}
      <div className="textWrapper w-100 min-w-100 textAlign-center paddingBottom-md">
        <div className="labelWrapper paddingBottom-xs">
          <h6 className="fontFamily-primary fontSize-sm color-primary--main textTransform-uppercase letterSpacing-md">
            {props.label}
          </h6>
        </div>
        <div className="pricingWrapper">
          <span className="main fontSize-xxl breakMd-fontSize-xxxl fontFamily-primary fontWeight-xl letterSpacing-md color-white--main">
            {props.price}
          </span>
          <span className="duration fontSize-md fontFamily-primary letterSpacing-md textTransform-uppercase color-black--text">
            {props.duration}
          </span>
        </div>
      </div>
      <div className="actionTriggers w-100 min-w-100 d-flex flex-col h-100 alignItems-center justifyContent-center paddingBottom-xs">
        <button
          className={`actionButton w-100 max-w-420px d-flex flex-row alignItems-center justifyContent-center fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-md paddingBottom-md lineHeight-lg textAlign-center borderRadius-lg ${
            props.primary
              ? "bgColor-primary--main fontWeight-xl"
              : "bgColor-black--main"
          }`}
        >
          <span className="buttonText">{props.buttonText}</span>
        </button>
        <div className="disclaimerText max-w-320px paddingTop-md paddingLeft-md breakMd-paddingLeft-0 paddingRight-md breakMd-paddingRight-0 textAlign-center color-black--text fontSize-xxs breakSm-fontSize-xs lineHeight-lg">
          {props.disclaimer}
        </div>
      </div>
    </div>
  );
}

export default view(UpgradeOption);
