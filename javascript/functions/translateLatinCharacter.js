// javascript\functions\translateLatinCharacter.js

import latinToMorse from "../data/latinToMorse";

function translateLatinCharacter(characterToTranslate) {
  if (characterToTranslate === " ") {
    return "/";
  }

  if (latinToMorse[characterToTranslate] === undefined) {
    return characterToTranslate;
  }

  return latinToMorse[characterToTranslate];
}

export default translateLatinCharacter;
