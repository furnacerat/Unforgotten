export type ProductDetail = {
  slug: string;
  name: string;
  chapter: string;
  tagline: string;
  imageSrc?: string;
  imageAlt?: string;
  story: string[];
  scripture: string;
  scriptureRef: string;
  details: string[];
  hiddenDetails: [string, string][];
  galleryLabels?: string[];
};

const sharedDetails = [
  "Premium Heavyweight Cotton",
  "Garment Dyed",
  "Relaxed Fit",
  "Built to Last",
  "Story Driven Design",
];

const hiddenDetails: [string, string][] = [
  ["Inside Neck Print", "A quiet mark placed close to the wearer."],
  ["Inside Hood Message", "A hidden reminder for the moments no one sees."],
  ["Woven Sleeve Tag", "A small chapter signal stitched into the garment."],
  ["Hem Tag", "A finishing detail that carries the story forward."],
  ["Embroidery Detail", "Subtle threadwork designed to feel discovered."],
];

export const productDetails: Record<string, ProductDetail> = {
  "the-shepherd-hoodie": {
    slug: "the-shepherd-hoodie",
    name: "The Shepherd Hoodie",
    chapter: "Chapter 01",
    tagline: "You were worth searching for.",
    imageSrc: "/images/shepherd-hoodie.png",
    imageAlt:
      "Front and back views of The Shepherd Hoodie with UNFORGOTTEN branding and Chapter 01 artwork.",
    story: [
      "The Shepherd Hoodie was created for the ones still walking through weather, silence, and long roads home.",
      "Inspired by the shepherd who leaves the ninety-nine, this piece carries the reminder that being lost is not the same as being abandoned.",
      "Every garment in Chapter 01 carries part of this story.",
    ],
    scripture:
      "\"What do you think? If a man has a hundred sheep, and one of them has gone astray, does he not leave the ninety-nine on the mountains and go in search of the one that went astray?\"",
    scriptureRef: "Matthew 18:12",
    details: sharedDetails,
    hiddenDetails,
  },
  "the-one-tee": {
    slug: "the-one-tee",
    name: "The One Tee",
    chapter: "Chapter 01",
    tagline: "The one still matters.",
    imageSrc: "/images/one-tee.png",
    imageAlt:
      "Front and back views of The One Tee with UNFORGOTTEN branding and sheep artwork.",
    story: [
      "The One Tee was created as a reminder that a single life is never small in the eyes of God.",
      "This chapter speaks to anyone who has felt hidden inside the crowd, overlooked in the room, or too far away to be noticed.",
      "Every garment in Chapter 01 carries part of this story.",
    ],
    scripture:
      "\"Rejoice with me, for I have found my sheep that was lost.\"",
    scriptureRef: "Luke 15:6",
    details: sharedDetails,
    hiddenDetails,
  },
  "the-valley-tee": {
    slug: "the-valley-tee",
    name: "The Valley Tee",
    chapter: "Chapter 01",
    tagline: "Even in the valley,\nyou are not alone.",
    imageSrc: "/images/valley-tee.png",
    imageAlt:
      "Front and back mockup of The Valley Tee in olive with valley artwork.",
    story: [
      "The Valley Tee was created as a reminder that the lowest places in life are often where hope begins.",
      "Inspired by Psalm 23, this chapter reminds us that valleys are not places where God abandons us. They are often where He walks closest beside us.",
      "Every garment in Chapter 01 carries part of this story.",
    ],
    scripture:
      "\"Even though I walk through the valley of the shadow of death,\nI will fear no evil,\nfor You are with me.\"",
    scriptureRef: "Psalm 23",
    details: sharedDetails,
    hiddenDetails,
  },
  "the-lantern-hat": {
    slug: "the-lantern-hat",
    name: "The Lantern Hat",
    chapter: "Chapter 01",
    tagline: "You were worth searching for.",
    imageSrc: "/images/lantern-hat.png",
    imageAlt:
      "Multiple views of The Lantern Hat in deep olive with antique gold embroidery.",
    story: [
      "The Lantern Hat was created as a small signal of hope for long roads and quiet searches.",
      "The lantern represents the light that keeps looking, even when the path is hard to see and the night feels longer than expected.",
      "Every garment in Chapter 01 carries part of this story.",
    ],
    scripture:
      "\"Your word is a lamp to my feet and a light to my path.\"",
    scriptureRef: "Psalm 119:105",
    details: [
      "Structured Premium Crown",
      "Antique Gold Embroidery",
      "Deep Olive Finish",
      "Built to Last",
      "Story Driven Design",
    ],
    hiddenDetails,
  },
  "field-journal": {
    slug: "field-journal",
    name: "Field Journal",
    chapter: "Chapter 01",
    tagline: "Built for the story you're living.",
    imageSrc: "/images/field-journal.png",
    imageAlt:
      "UNFORGOTTEN pocket field journal with cover, back, spine, inside pages, and detail views.",
    story: [
      "The Field Journal was created as a place to carry the chapter beyond the garment.",
      "It begins with the story being told, then leaves room for reflection, prayers, names, lessons, and the honest sentences that shape a life.",
      "Every order includes a pocket-sized UNFORGOTTEN Field Journal because every story deserves somewhere to be held.",
    ],
    scripture:
      "\"Write the vision and make it plain on tablets, that he may run who reads it.\"",
    scriptureRef: "Habakkuk 2:2",
    details: [
      "Pocket Sized",
      "Premium Finish",
      "Durable Closure",
      "Ribbon Marker",
      "Story Driven Design",
    ],
    hiddenDetails: [
      ["Premium Finish", "A soft, refined cover made to feel carried."],
      ["Embossed Logo", "Subtle UNFORGOTTEN marks pressed into the story."],
      ["Secure Closure", "An elastic band keeps your notes protected."],
      ["Meaningful Reminder", "Words to carry with you wherever you go."],
      ["Premium Paper", "Smooth pages designed for writing and reflection."],
    ],
    galleryLabels: [
      "Full Preview",
      "Front Cover",
      "Back Cover",
      "Spine",
      "Inside Pages",
      "Ribbon Marker",
      "Premium Paper",
      "Packaging",
      "Certificate",
    ],
  },
};
