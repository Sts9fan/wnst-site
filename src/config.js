// ============================================================
//  WEST NEWTON SAFETY TRAINING — SITE CONFIGURATION
//  Edit this file to update prices, course info, and contact
//  details. Changes here update everywhere on the site.
// ============================================================

export const CONTACT = {
  email: "westnewtonsafetytraining@gmail.com",
  domain: "westnewtonsafetytraining.com",
  location: "Newton, Massachusetts",
  phone: "",
};

export const COURSES = [
  {
    id: "ltc-fid",
    title: "MA LTC / FID Safety Course",
    subtitle: "State-certified • Required for MA license applications",
    description:
      "This state-approved course fulfills the Massachusetts safety requirement for both License to Carry (LTC) and Firearms Identification Card (FID) applications. We cover safe handling, storage, MA firearms law, and responsible ownership — taught in a relaxed, judgment-free environment.",
    duration: "8 hours",
    maxStudents: 4,
    price: 75,
    priceLabel: "$200 per person",
    tag: "State certified",
    stripeLink: "https://buy.stripe.com/5kQ6oHft23Q2aSZ2Nv2Fa00",
    icon: "shield",
  },
  
  {
    id: "private",
    title: "Private Instruction",
    subtitle: "One-on-one • Fully customized",
    description:
      "Work directly with the instructor at your own pace. Whether you're a complete beginner, an experienced owner looking to sharpen skills, or someone returning to firearms ownership after a long break — sessions are tailored entirely to your goals.",
    duration: "Flexible",
    maxStudents: 1,
    price: 150,
    priceLabel: "$150 per session",
    tag: "Flexible scheduling",
    stripeLink: "https://buy.stripe.com/9B6aEXa8Ibiue5bco52Fa01",
    icon: "person",
  },
];

export const HERO = {
  badge: "Newton, Massachusetts",
  heading: "Safe, confident,",
  headingAccent: "welcomed here.",
  subheading:
    "State-certified firearms safety instruction for everyone — first-timers, new owners, returning shooters, and anyone curious. No prior experience needed. No judgment.",
  ctaPrimary: "Browse courses",
  ctaSecondary: "Get in touch",
};

export const ABOUT = {
  heading: "Everyone deserves good instruction",
  body: [
    "West Newton Safety Training was founded on a simple belief: responsible firearm ownership is for everyone, and great instruction makes all the difference.",
    "Our classes are structured, thorough, and welcoming — no matter your background, identity, or starting point.",
    "All courses meet Massachusetts statutory requirements and are taught by a state-certified instructor based in Newton.",
  ],
  credentials: [
    "MA State-Certified Firearms Safety Instructor",
    "Newton, MA resident",
  ],
};

export const FAQ = [
  {
    q: "Do I need any prior experience?",
    a: "None at all. Most of our students have never handled a firearm before. We start from the ground up and go at your pace.",
  },
  {
    q: "What do I need to bring?",
    a: "Just yourself and a valid ID. We provide all materials, targets, and range equipment for the course. Wear comfortable closed-toe shoes.",
  },
  {
    q: "Will this course satisfy the MA safety requirement for my LTC (License to Carry) or FID application?",
    a: "Yes. Our LTC/FID Safety Course is state-approved and fulfills the Massachusetts safety training requirement under MGL c.140 §131P.",
  },
  {
    q: "I'm nervous about handling firearms. Is that okay?",
    a: "Absolutely — it's actually a good sign. We take safety seriously and create a calm, low-pressure environment. Many students arrive anxious and leave feeling confident.",
  },
  {
    q: "What is your refund/cancellation policy?",
    a: "Full refund if you cancel 48 hours or more before your session. Within 48 hours, you can reschedule at no charge. No-shows are non-refundable.",
  },
 
];

export const INTAKE_QUESTIONS = [
  {
    id: "reason",
    label: "What is your primary reason for taking this course?",
    type: "radio",
    options: [
      "MA LTC application",
      "FID application",
      "New firearm owner",
      "Refresher / continuing education",
      "Curious / general interest",
      "Other",
    ],
  },
  {
    id: "experience",
    label: "How would you describe your prior experience with firearms?",
    type: "radio",
    options: [
      "None — this is my first time",
      "Handled before, but not formally trained",
      "Some formal training",
      "Experienced owner",
      "Military or law enforcement background",
    ],
  },
  {
    id: "owns",
    label: "Do you currently own any firearms?",
    type: "radio",
    options: ["No", "Yes — handgun(s)", "Yes — long gun(s)", "Yes — both"],
  },
  {
    id: "storage",
    label: "Do you have a secure storage solution at home (safe, lockbox, etc.)?",
    type: "radio",
    options: ["Yes", "No", "Not yet, planning to get one", "Not applicable"],
  },
  {
    id: "goals",
    label: "Is there anything specific you'd like to focus on or any questions you'd like us to address?",
    sublabel: "Optional — shared only with your instructor, kept confidential.",
    type: "textarea",
    placeholder:
      "e.g. storage options, cleaning and maintenance, anxiety about handling, a specific firearm type...",
  },
];