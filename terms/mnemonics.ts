export type ListObject = {
  [key: string]: [string[], string[], string];
};


export const mnemonics: ListObject = {
  // "Bones of the Arm": [["Ultra", "Red", "Hair"], ["Ulna", "Radius", "Humerus"], "ordered"],
  // "Bones of the Hand": [["Please", "Make", "Cookies"], ["Phalanges", "Metacarpal bones", "Carpal bones"], "ordered"],
  // "Rotator Cuff Muscles": [["Sit", "In", "The", "Seat"], ["Supraspinatus", "Infraspinatus", "Teres Minor", "Subscapularis"], "unordered"],
  // "Systems of the Body": [["M", "U", "R", "D", "E", "R", "S", "L", "I", "N", "C"], ["Muscular", "Urinary", "Respiratory", "Digestive", "Endocrine", "Reproductive", "Skeletal", "Lymphatic", "Integumentary", "Nervous", "Cardiovascular"], "unordered"],
  // "4 Functions of Epithelial Tissue" : [["P", "A", "S", "S"], ["physical protection", "absorption", "sensation", "secretion"], "unordered"],
  // "Epithelial Tissue Layers" : [["Any", "BS", "is BLatant", "Ridiculousness"], ["apical surface", "basal surface", "basal lamina" , "reticular lamina"], "ordered"],
  // "4 Types of Connective Tissue" : [["Please", "Call", "Back", "Beethoven"], ["connective tissue proper", "cartilage", "bone" , "blood"], "unordered"],
  // "6 Functions of Connective Tissue" : [["Steven", "Barely", "Sat", "Tonight", "Perchance", "I"], ["support", "binding", "storage" , "transport", "protection", "immune protection"], "unordered"],
  // "5 Types of Defence Cells" : [["Many", "Prissy", "Mothers", "Eat", "Nothing"], ["macrophage", "plasma", "mast" , "eosinophil", "neutrophil"], "unordered"],
  "12 Shoulder Girdle Muscles": [["T", "R", "LD", "SA", "LS", "PM", "Pm", "D", "TM", "S", "I", "Sub"], ["trapezius", "rhomboids", "latissimus dorsi", "serratus anterior", "levator scapulae", "pectoralis major", "pectoralis minor", "deltoid", "teres major", "supraspinatus", "infraspinatus", "subscapularis"], "unordered"],
  "8 arm muscles" : [["BBL", "BBS", "TBL", "TBM", "TBl", "C", "B", "BR"], ["biceps brachii long head", "biceps brachii short head", "triceps brachii long head", "triceps brachii medial head", "biceps brachii lateral head", "coracobrachialis", "brachialis", "brachioradialis"], "unordered"],
  "8 anterior forearm muscles" : [["PT", "FCR", "PL", "FCU", "FDS", "FPL", "FDP", "PQ"], ["pronator teres", "flexor carpi radialis", "palmaris longus", "flexor carpi ulnaris", "flexor digitorum superficialis", "flexor pollicis longus", "flexor digitorum profundus", "pronator quadratus"], "ordered"],
  "10 posterior forarm muscles" : [["ECRL", "ECRB", "ED", "ECU", "A", "S", "APL", "EPB", "EPL", "EI"], ["extensor carpi radialis longus", "extensor carpi radialis brevis", "extensor digitorum", "extensor carpi ulnaris", "anconeus", "supinator", "abductor pollicis longus", "extensor pollicis brevis", "extensor pollicis longus", "extensor indicis"], "ordered"],
  "12 upper limb features" : [["GT", "LT", "IG", "ME", "LE", "C", "T", "HR", "RSP", "RT", "O", "USP"], ["greater tubercle", "lesser tubercle", "intertubercular groove", "medial epicondyle", "lateral epicondyle", "capitulum", "trochlea", "head of radius", "radial styloid process", "radial tuberosity", "olecranon", "ulnar styloid process"], "unordered"],
  "12 wrist/hand features" : [["S", "L", "T", "P", "T", "To", "C", "H", "M", "PP", "DP", "MP"], ["scaphoid", "lunate", "triquetrum", "pisiform", "trapezium", "trapezoid", "capitate", "hamate", "metacarpal 1", "proximal phalanx of hand", "distal phalanx of hand", "middle phalanx of hand"], "unordered"],
  "7 pelvic features" : [["Il", "Is", "P", "PS", "AS", "IC", "IT"], ["illium", "ischium", "pubis", "pubic symphysis", "anterior superior iliac spine", "iliac crest", "ischial tuberosity"], "unordered"],
  "14 lower limb features" : [["HF", "NF", "GT", "LT", "LE", "ME", "LCF", "MCF", "MCT", "LCT", "TT", "MM", "HF", "LM"], ["head of femur", "neck of femur", "greater trochanter", "lesser trochanter", "lateral epicondyle of femur", "medial epicondyle of femur", "lateral condyle of femur", "medial condyle of femur", "medial condyle of tibia", "lateral condyle of tibia", "tibial tuberosity", "medial malleolus"], "unordered"],
  "11 ankle/foot bones" : [["C", "T", "N", "C", "LC", "MC", "IC", "M", "PP", "MP", "DP"], ["calcaneus", "talus", "navicular", "cuboid", "lateral cuneiform", "medial cuneiform", "intermediate cuneiform", "metatarsal 1", "proximal phalanx of foot", "middle phalanx of foot", "distal phalanx of foot"], "unordered"],
  "16 vertebral column features" : [["CV", "TV", "LV", "SV", "S", "C", "At", "Ax", "Clong", "VB", "D", "SP", "TP", "SAP", "IAP", "VF"], ["cervical vertebrae", "thoracic vertebrae", "lumbar vertebrae", "sacral vertebrae", "sacrum", "coccyx", "atlas", "axis", "C7", "vertebral body", "dens", "spinous process", "transverse process", "superior articular process", "inferior articular process", "vertebral foramen"], "unordered"],
  "10 skull bones" : [["F", "M", "O", "S", "V", "Z", "N", "M", "T", "P"], ["frontal", "mandible", "occipital", "sphenoid", "vomer", "zygomatic", "nasal", "maxilla", "temporal", "parietal"], "unordered"],
  "5 thorax features" : [["M", "BS", "XP", "R", "C"], ["manubrium", "body of sternum", "xiphoid process", "rib", "clavicle"], "unordered"],
  "6 scapula features" : [["GF", "CP", "AP", "SS", "PS", "AS"], ["glenoid fossa", "coracoid process", "acromion process", "spine of scapula", "posterior scapula", "anterior scapula"], "unordered"]
}