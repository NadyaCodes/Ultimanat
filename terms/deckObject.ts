import { anatomicalTerms, bodyPartMovements } from "./anatomicalTerms";
import { ListObject, mnemonics } from "./mnemonics";

export type TermObject = {
  [key: string]: string;
};


export type Deck = {
  group: string;
  chapter: string;
  unitCode: string;
  unitName: string;
  deckType: string;
  data: TermObject | ListObject
};

export type DeckObject = Record<string, Deck>;

export const emptyDeckObject = {
  group: "no-group",
  chapter: "no-chapter",
  unitCode: "no-chapter",
  unitName: "no-chapter",
  deckType: "tri",
  data: { none: "none" },
}

export const deckObject: DeckObject = {
  "1.1" : {
    group: "Module 1",
    chapter: "Basic Terms, Planes & Order",
    unitCode: "anatomical-terms",
    unitName: "Anatomical Terms",
    deckType: "tri",
    data: anatomicalTerms
  },
  "1.2" : {
    group: "Module 1",
    chapter: "Movements & Directions",
    unitCode: "body-movements",
    unitName: "Body Part Movements",
    deckType: "tri",
    data: bodyPartMovements
  },
  "mnem" : {
    group: "One day this will have a purpose",
    chapter: "Mnemonics & Acronyms",
    unitCode: "mnmnonics-acronyms",
    unitName: "Mna Mna",
    deckType: "list",
    data: mnemonics
  }

}