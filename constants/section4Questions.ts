export const LEAVE_OPTIONS = [
    { value: "sick-leave", label: "Sick Leave" },
    { value: "long-term-disability", label: "Long-term Disability" },
    { value: "family-medical-leave", label: "Family Medical Leave" },
  ];
  
  export const TRANSPORT_OPTIONS = [
    { value: "drivers-license", label: "I have a driver's license" },
    { value: "reliable-vehicle", label: "I have a reliable vehicle and will drive myself" },
    { value: "ride-with-family", label: "I will ride with a family member or friend" },
    { value: "public-transport", label: "I will use public transportation (bus, train, etc.)" },
    { value: "ride-share", label: "I will use a ride-sharing service (e.g., Uber, Lyft)" },
    { value: "paratransit", label: "I will use a paratransit service (e.g., accessible transportation for individuals with disabilities)" },
    { value: "walk-bike", label: "I will walk or bike" },
    { value: "no-transport", label: "I currently have no transportation to work" },
    { value: "other", label: "Other (fill in the blank)" },
  ];
  
  export const RELATIONSHIP_OPTIONS = [
    { value: "married", label: "Married / Partnership" },
    { value: "divorced", label: "Divorced" },
    { value: "separated", label: "Separated" },
    { value: "widowed", label: "Widowed / Widower" },
    { value: "single", label: "Single" },
    { value: "other", label: "Other (fill in the blank)" },
  ];
  
  export const CAREGIVER_OPTIONS = [
    { value: "minor-child", label: "Minor child/children" },
    { value: "family-member", label: "Family member - elderly/disabled" },
    { value: "neither", label: "Neither" },
  ];
  
  export const RESIDENCE_OPTIONS = [
    { value: "house-owned", label: "House - owned" },
    { value: "house-rented", label: "House - rented" },
    { value: "apartment", label: "Apartment" },
    { value: "mobile-home", label: "Mobile Home" },
    { value: "living-with-friend", label: "Living with a friend or family member" },
    { value: "homeless", label: "Homeless" },
    { value: "other", label: "Other (fill in the blank)" },
  ];
  
  export const YES_NO_OPTIONS = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  
  export const housingFollowups = [
    {
      key: "housingSafe",
      label: "Do you feel safe in your current housing situation?",
    },
    {
      key: "behindOnPayments",
      label: "Are you behind on rent or mortgage payments?",
    },
    {
      key: "evictionNotice",
      label: "Have you received an eviction notice or foreclosure warning?",
    },
    {
      key: "atRisk",
      label: "Are you at risk of losing your housing?",
    },
    {
      key: "needHousingHelp",
      label: "Do you need help finding affordable housing or applying for housing assistance programs (e.g., Section 8, public housing)?",
    },
  ];
  
  export const economicFollowups = [
    {
      key: "financialHardship",
      label: "Are you experiencing financial hardship due to medical expenses, job loss, or other unexpected costs?",
    },
    {
      key: "needFoodHelp",
      label: "Are you in need of food assistance or help with groceries?",
    },
    {
      key: "basicNeedsConcerns",
      label: "Do you have concerns about paying for other basic needs (e.g., utilities, transportation, childcare, healthcare)?",
    },
  ];
  
  export const SECTION4_LABELS = {
    title: "Disability & Income",
    ssdiReceiving: "Are you currently receiving Social Security Disability Insurance (SSDI) benefits?",
    ssdiApplied: "Have you applied for Social Security Disability Insurance (SSDI) benefits?",
    ssiReceiving: "Are you currently receiving Supplemental Security Income (SSI) Benefits?",
    ssiApplied: "Have you applied for Supplemental Security Income (SSI) benefits?",
    shortTerm: "Are you currently receiving short-term disability benefits through your employer?",
    leave: "Other than short-term disability benefits, are you using any of the following types of leave through your employer when needing to miss work due to your acquired disability?",
    transport: "For transportation to work (Select all that apply):",
    relationship: "Relationship Status",
    caregiver: "Are you currently a primary caregiver for one of the following? (Select all that apply)",
    householdSize: "Including you, how many people live in your home?",
    residence: "Type of Residence",
    housingProblems: "Do you have any problems related to your housing circumstance?",
    economicProblems: "Do you have problems related to your economic circumstance?",
  };