/**
 * Type: Component
 * Name: Spacer
 * Description: Provider an easy way to add spacing in an app without resorting
 * to custom styling or layout elements.
 *
 */

function Spacer(props) {
  const {
    horizontal = false,
    vertical = false,
    space = 0,
    unit = "px"
  } = props;

  const spaceInt = parseInt(space, 10);

  // Default
  const spacerStyles = {
    fontSize: "0px"
  };

  if (horizontal && !vertical) {
    spacerStyles.display = "inline-block";
    spacerStyles.paddingLeft = spaceInt / 2 + unit;
    spacerStyles.paddingRight = spaceInt / 2 + unit;
  } else if (vertical && !horizontal) {
    spacerStyles.display = "block";
    spacerStyles.paddingTop = spaceInt / 2 + unit;
    spacerStyles.paddingBottom = spaceInt / 2 + unit;
  } else if (horizontal && vertical) {
    spacerStyles.padding = `${space / 2 + unit} ${space / 2}${unit}`;
  }

  return <div className="spacer" style={spacerStyles} />;
}

export default Spacer;
