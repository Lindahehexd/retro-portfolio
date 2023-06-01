import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["A Technical Writer", "A Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeEffect;
