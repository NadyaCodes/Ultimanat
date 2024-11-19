import { anatomicalTerms, bodyPartMovements } from "./anatomicalTerms";
import { lab1Terms, lab2Terms } from "./labTerms";
import { ListObject, mnemonics } from "./mnemonics";
import { tissuesA, tissuesB, tissuesC, tissuesD } from "./tissues";

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
  "2.1" : {
    group: "Module 2",
    chapter: "Epithelial Tissues",
    unitCode: "tissues",
    unitName: "Tissues A",
    deckType: "tri",
    data: tissuesA
  },
  "2.2" : {
    group: "Module 2",
    chapter: "Connective Tissues",
    unitCode: "tissuesB",
    unitName: "Tissues B",
    deckType: "tri",
    data: tissuesB
  },
  "2.3" : {
    group: "Module 2",
    chapter: "Connective Tissues 2",
    unitCode: "tissuesC",
    unitName: "Tissues C",
    deckType: "tri",
    data: tissuesC
  },
  "2.4" : {
    group: "Module 2",
    chapter: "Assorted Tissues",
    unitCode: "tissuesD",
    unitName: "Tissues D",
    deckType: "tri",
    data: tissuesD
  },
  "Lab1" : {
    group: "Labs",
    chapter: "Axial Skeleton",
    unitCode: "axialS",
    unitName: "Lab 1",
    deckType: "tri",
    data: lab1Terms
  },
  "Lab2" : {
    group: "Labs",
    chapter: "Appendicular Skeleton",
    unitCode: "appendS",
    unitName: "Lab 2",
    deckType: "tri",
    data: lab2Terms
  },
  "mnem" : {
    group: "Lab Terms List",
    chapter: "Lab Terms List for Exam 2",
    unitCode: "lab-2",
    unitName: "Lab List",
    deckType: "list",
    data: mnemonics
  }

}