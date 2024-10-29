import React, { useState } from "react";
import ImBringing from "./ImBringing";

const CreateImBringing: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

return (
	<div>
		<button onClick={handleClick}>
			{showComponent ? "Close" : "Update what you are bringing"}
		</button>
		{showComponent && <ImBringing />}
	</div>
);
};

export default CreateImBringing;
