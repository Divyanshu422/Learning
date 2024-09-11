/*
 * Writing some functional component code
 */

const code1 = () => (
  <div>
    <h1>I am a functional component without a return keyword</h1>
    <h2>
      There is no return keyword because we are using parentheses `()` after the
      arrow function, which implies an implicit return.
    </h2>
  </div>
);

const code2 = () => {
  return (
    <div>
      <h1>I am a functional component with a return keyword</h1>
      <h2>
        There is a return keyword because we are using curly braces `{}` to
        define the function body, which requires an explicit return statement.
      </h2>
    </div>
  );
};


