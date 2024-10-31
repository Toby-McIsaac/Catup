import React from "react";

const ImBringing: React.FC = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		alert("You entered: " + JSON.stringify(Object.fromEntries(data)));
	}

  return (
    <div>
      <h1>I'm bringing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="food">Food: </label>
          <input type="text" id="food" name="food" />
        </div>
        <div>
          <label htmlFor="drink">Drink: </label>
          <input type="text" id="drink" name="drink" />
        </div>
        <div>
          <label htmlFor="games">Games: </label>
          <input type="text" id="games" name="games" />
        </div>
        <div>
          <label htmlFor="technology">Technology: </label>
          <input type="text" id="technology" name="technology" />
        </div>
        <div>
          <label htmlFor="other">Other: </label>
          <input type="text" id="other" name="other" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImBringing;
