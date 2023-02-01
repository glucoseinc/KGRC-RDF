import axios from "axios";
import { NamedNode } from "rdf-js";
import { fetchActivityTypes, PREFIXES } from "./sparql";

const MovieStoreURL = "http://kgrc4si.ml/movies/";

export const makeMoviePath = async (
  activity: NamedNode<string>,
  label: string,
  scene: string
): Promise<string | null> => {
  const results = await fetchActivityTypes(activity);
  console.log(activity);
  const sceneFilename = `${scene.replace(PREFIXES.ex, "")}/${label.replaceAll(
    " ",
    "_"
  )}0.mp4`;
  for (const result of results) {
    const url = `${MovieStoreURL}${result.subClassOf.value.replace(
      PREFIXES.ho,
      ""
    )}/${sceneFilename}`;
    try {
      await axios.head(url);
      return url;
    } catch (error) {
      console.log("get", error);
    }
  }
  return null;
};
