// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === CORE ===
import { Fragment } from "react";
import NextLink from "next/link";

// === STORES ===
import { view } from "react-easy-state";
import { TabNavStore } from "../../../../stores";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================
function TabNavItem(props = {}) {
  const {
    first = false,
    last = false,
    initialActive = false,
    active = false,
    href = "",
    onClick = null
  } = props || {};

  // Define the classes
  let itemClasses =
    "tabBarLink position-relative fontFamily-primary textTransform-uppercase letterSpacing-sm float-left whiteSpace-noWrap lineHeight-sm fontSize-sm marginRight-lg breakMd-marginRight-xl";
  if (first) itemClasses += " marginLeft-md paddingLeft-xxs";
  if (last && !active) itemClasses += " paddingRight-lg";

  if (active)
    itemClasses +=
      " fontWeight-xl paddingTop-sm paddingBottom-sm paddingLeft-sm breakMd-paddingLeft-md paddingRight-sm breakMd-paddingRight-md bgColor-primary--main borderRadius-sm color-white--main pointerEvents-none";
  else itemClasses += " color-black--text cursor-pointer";

  return (
    <Fragment>
      {onClick && (
        <a onClick={props.onClick} className={itemClasses}>
          {props.children}
        </a>
      )}
      {href && (
        <NextLink href={href} passHref>
          <a className={itemClasses}>{props.children}</a>
        </NextLink>
      )}
    </Fragment>
  );
}

export default TabNavItem;
