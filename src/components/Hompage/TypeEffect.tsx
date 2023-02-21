import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["曾是技術文件工程師", "正往前端工程師邁進"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeEffect;
