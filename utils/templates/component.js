module.exports = (componentName) => ({
  content: `// Generated with utils/create-component.js
import React from "react";
import "./${componentName}.scss";

export const ${componentName} = ({ foo }) => (
	<div className="foo-bar">{foo}</div>
);
`,
  extension: `.tsx`,
});
