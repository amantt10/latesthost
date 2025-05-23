"use client"
import React, { useState } from "react";

const QOL_OPTIONS = [
  { value: 1, label: "Very Dissatisfied" },
  { value: 2, label: "Dissatisfied" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Satisfied" },
  { value: 5, label: "Very Satisfied" },
];

const LOCUS_OPTIONS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Agree" },
  { value: 4, label: "Strongly Agree" },
];

const ACCEPTANCE_OPTIONS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

const GLOBAL_HEALTH_OPTIONS = [
  { value: 1, label: "Excellent" },
  { value: 2, label: "Very Good" },
  { value: 3, label: "Good" },
  { value: 4, label: "Fair" },
  { value: 5, label: "Poor" },
];

const SOCIAL_SUPPORT_OPTIONS = [
  { value: 1, label: "Never" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Usually" },
  { value: 5, label: "Always" },
];

const QOL_QUESTIONS = [
  "Social life & experiences",
  "Family-life & experiences",
  "Hobbies & recreational activities",
  "Educational/intellectual development",
  "Experiences of daily living (e.g., work)",
  "Romantic experiences",
  "Expectations & hopes for the future",
];

const LOCUS_QUESTIONS = [
  "I don't have enough control over the direction of my life is taking.",
  "In my life, good luck is more important than hard work for success.",
  "Every time I try to get ahead, something or somebody stops me.",
  "My plans hardly ever work out, so planning only makes me unhappy.",
  "Chance and luck are very important for what happens in my life.",
];

const ACCEPTANCE_QUESTIONS = [
  "I've come to terms with my health condition.",
  "I'd give all my money to get rid of my health condition.",
  "I think of my health condition as a curse.",
  "I can't conquer my health condition but I can adapt to it.",
  "My fondest dream is that I'll awaken without my health condition.",
  "Having a disease like my health condition is just a part of my life.",
  "My health condition is a focal point of my life.",
  "I spend a lot of time wondering why I have my health condition.",
  "I think of my health condition as just part of who I am.",
  "I think a lot about what my life would be like without my health condition.",
];

const GLOBAL_HEALTH_QUESTIONS = [
  "In general, would you say your health is:",
  "In general, would you say your quality of life is:",
  "In general, how would you rate your physical health?",
  "In general, how would you rate your mental health, including your mood and your ability to think?",
  "In general, how would you rate your satisfaction with your social activities and relationships?",
  "In general, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.).",
  "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
  "In the past 7 days... How often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
  "How would you rate your fatigue on average?",
  "How would you rate your pain on average?",
];

const SOCIAL_SUPPORT_QUESTIONS = [
  "I have someone who will listen to me when I need to talk...",
  "I have someone to confide in or talk to about myself or my problems ...",
  "I have someone who makes me feel appreciated ...",
  "I have someone to talk with when I have a bad day ...",
];

function HorizontalScale({
  question,
  options,
  value,
  setValue,
  name,
}: {
  question: string;
  options: { value: number; label: string }[];
  value: number | null;
  setValue: (v: number) => void;
  name: string;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 font-medium text-gray-700">{question}</div>
      <div className="flex flex-row items-center space-x-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex flex-col items-center text-xs">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => setValue(opt.value)}
              className="mb-1"
            />
            <span className="w-20 text-center">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

const SectionNine = ({ step }: { step: string }) => {
  // Quality of Life
  const [qol, setQol] = useState<(number | null)[]>(Array(QOL_QUESTIONS.length).fill(null));
  // Locus of Control
  const [locus, setLocus] = useState<(number | null)[]>(Array(LOCUS_QUESTIONS.length).fill(null));
  // Acceptance
  const [acceptance, setAcceptance] = useState<(number | null)[]>(Array(ACCEPTANCE_QUESTIONS.length).fill(null));
  // Global Health
  const [globalHealth, setGlobalHealth] = useState<(number | null)[]>(Array(GLOBAL_HEALTH_QUESTIONS.length).fill(null));
  // Social Support
  const [socialSupport, setSocialSupport] = useState<(number | null)[]>(Array(SOCIAL_SUPPORT_QUESTIONS.length).fill(null));

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 9 - Quality of Life & Wellbeing
      </h2>
      <form className="my-8">
        <h3 className="font-semibold text-lg mb-2">Quality of Life Scale</h3>
        {QOL_QUESTIONS.map((q, i) => (
          <HorizontalScale
            key={q}
            question={q}
            options={QOL_OPTIONS}
            value={qol[i]}
            setValue={(v) => setQol(qol.map((val, idx) => (idx === i ? v : val)))}
            name={`qol-${i}`}
          />
        ))}

        <h3 className="font-semibold text-lg mb-2 mt-8">Locus of Control Scale</h3>
        {LOCUS_QUESTIONS.map((q, i) => (
          <HorizontalScale
            key={q}
            question={q}
            options={LOCUS_OPTIONS}
            value={locus[i]}
            setValue={(v) => setLocus(locus.map((val, idx) => (idx === i ? v : val)))}
            name={`locus-${i}`}
          />
        ))}

        <h3 className="font-semibold text-lg mb-2 mt-8">Acceptance of Chronic Health Conditions Scale</h3>
        {ACCEPTANCE_QUESTIONS.map((q, i) => (
          <HorizontalScale
            key={q}
            question={q}
            options={ACCEPTANCE_OPTIONS}
            value={acceptance[i]}
            setValue={(v) => setAcceptance(acceptance.map((val, idx) => (idx === i ? v : val)))}
            name={`acceptance-${i}`}
          />
        ))}

        <h3 className="font-semibold text-lg mb-2 mt-8">Global Health</h3>
        {GLOBAL_HEALTH_QUESTIONS.map((q, i) => (
          <HorizontalScale
            key={q}
            question={q}
            options={GLOBAL_HEALTH_OPTIONS}
            value={globalHealth[i]}
            setValue={(v) => setGlobalHealth(globalHealth.map((val, idx) => (idx === i ? v : val)))}
            name={`globalHealth-${i}`}
          />
        ))}

        <h3 className="font-semibold text-lg mb-2 mt-8">Social Support</h3>
        {SOCIAL_SUPPORT_QUESTIONS.map((q, i) => (
          <HorizontalScale
            key={q}
            question={q}
            options={SOCIAL_SUPPORT_OPTIONS}
            value={socialSupport[i]}
            setValue={(v) => setSocialSupport(socialSupport.map((val, idx) => (idx === i ? v : val)))}
            name={`socialSupport-${i}`}
          />
        ))}
      </form>
    </div>
  );
};

export default SectionNine;