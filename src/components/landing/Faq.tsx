import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./shared";

const faqs = [
  {
    question: "Who is Interneefy for?",
    answer:
      "Any organisation that runs internships, from small businesses to large teams, including companies hosting SIWES and IT students. HR admins run the program, supervisors manage their interns day to day, and interns keep track of their own work.",
  },
  {
    question: "How do I add interns and supervisors?",
    answer:
      "From your admin dashboard, add each person with their name, email and role. For interns you can also set their domain, start and end dates, and assign a supervisor. Interneefy creates a secure password and emails them their login details, so there’s nothing for them to set up.",
  },
  {
    question: "What can each person see?",
    answer:
      "Admins see the whole program: every intern and supervisor, plus enrollment and domain stats. Supervisors see only the interns assigned to them, with their tasks and evaluations. Interns see their own tasks, their supervisor and the feedback they’ve received.",
  },
  {
    question: "How does task tracking work?",
    answer:
      "Supervisors create tasks with a description, category, priority (High, Medium or Low) and due date, then assign them to an intern. Interns move each task from To Do to In Progress to Completed, and supervisors can approve finished work. Each intern’s progress shows the share of their tasks that are complete.",
  },
  {
    question: "How are interns evaluated?",
    answer:
      "Supervisors score each intern out of 10 on technical skills, communication and teamwork, and add written comments. Interneefy calculates an overall score and keeps a full evaluation history, and interns can read their feedback on their profile.",
  },
  {
    question: "Can we use it for SIWES or IT students?",
    answer:
      "Yes. Add each student as an intern with their placement start and end dates and assign a supervisor. You can then track their tasks and give structured evaluations throughout their Industrial Training.",
  },
  {
    question: "Is our company’s data private?",
    answer:
      "Yes. Every company gets its own private workspace, and people can only see data from their own company. Passwords are stored securely hashed, never in plain text.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "You can create your company account in a few minutes, then add your supervisors and interns. Each of them gets their login details by email as soon as you add them.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[420px_1fr] lg:gap-20 lg:px-20 lg:py-28">
        <div className="flex flex-col gap-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground lg:text-5xl">
            Questions, answered.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Can’t find what you’re looking for? Email us at{" "}
            <a
              href="mailto:support@interneefy.com"
              className="font-semibold text-primary hover:underline"
            >
              support@interneefy.com
            </a>
            .
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="border-y border-slate-200"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-slate-200"
            >
              <AccordionTrigger className="py-6 text-[19px] font-semibold text-foreground hover:no-underline [&>svg]:size-5 [&>svg]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-[700px] pb-6 text-base leading-relaxed text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
