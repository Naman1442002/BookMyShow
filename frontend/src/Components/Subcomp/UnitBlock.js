import React from 'react';

// The UnitBlock component takes several props: text, selectBlock, selectBlockContent, and visit.
function UnitBlock({ text, selectBlock, selectBlockContent, visit }) {
  // ClickUnitBlock function is called when the div is clicked.
  const ClickUnitBlock = () => {
    // Call the selectBlock and selectBlockContent functions with the 'text' prop as an argument.
    selectBlock(text);
    selectBlockContent(text);
  }

  return (
    // Render a div with a className of 'UnitBlock' and additional class specified in 'visit'.
    // Attach the ClickUnitBlock function to the onClick event of the div.
    // Display the 'text' prop within the div.
    <div className={`UnitBlock ${visit}`} onClick={ClickUnitBlock}>
      {text}
    </div>
  );
}

export default UnitBlock;
