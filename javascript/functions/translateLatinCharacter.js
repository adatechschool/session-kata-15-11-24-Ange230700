// javascript\functions\translateLatinCharacter.js

import latinToMorse from "../data/latinToMorse";

function translateLatinCharacter(characterToTranslate) {
  return latinToMorse[characterToTranslate];
}

export default translateLatinCharacter;
