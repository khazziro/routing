import Accordion from "../components/Accordion.jsx";

function AccordionPage() {
  const items = [
    {
      id: 0,
      label: "Can I use React on any project?",
      content: "Yes, you can use React on any project you want!",
    },
    {
      id: 1,
      label: "Can I use Javascript on any project?",
      content: "Yes, you can use Javascript on any project you want!",
    },
    {
      id: 2,
      label: "Can I use CSS on any project?",
      content: "Yes, you can use CSS on any project you want!",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
