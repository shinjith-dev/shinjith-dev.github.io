/* eslint-disable */
const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString =
      options.resolveString ||
      options.element.getAttribute("data-target-resolver");
    const combinedOptions = { ...options, resolveString };

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    }

    function doRandomiserEffect(options, callback) {
      const { characters } = options;
      const { timeout } = options;
      const { element } = options;
      const { partialString } = options;

      const { iterations } = options;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = { ...options, iterations: iterations - 1 };

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent =
              partialString.substring(0, partialString.length - 1) +
              randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    }

    function doResolverEffect(options, callback) {
      const { resolveString } = options;
      const { characters } = options;
      const { offset } = options;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = { ...options, partialString };

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = { ...options, offset: offset + 1 };

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    }

    doResolverEffect(combinedOptions, callback);
  },
};

export default function run(element) {
  const strings = [
    "an enginering student,",
    "full stack developer in training,",
    "... and just a wandering soul.",
  ];

  let counter = 0;

  const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 10,
    // Number of random characters to show
    iterations: 3,
    // Random characters to pick from
    characters: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "x",
      "y",
      "x",
      "#",
      "%",
      "&",
      "-",
      "+",
      "_",
      "?",
      "/",
      "\\",
      "=",
    ],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element, //: document.querySelector("[data-target-resolver]"),
  };

  // Callback function when resolve completes
  function callback() {
    setTimeout(() => {
      counter++;

      if (counter >= strings.length) {
        counter = 0;
      }

      const nextOptions = { ...options, resolveString: strings[counter] };
      resolver.resolve(nextOptions, callback);
    }, 1000);
  }

  resolver.resolve(options, callback);
}
