import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["A Technical Writer", "A Frontend Deveploper"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeEffect;
