// here we want to return the cost / yearBillingCycle to be rendered in plan and confirm step
// used in plan and confirm components

const plans = [
  {
    id: 0,
    planDesc: "Arcade",
    yearBillCycle: false,
    desc: "$10/Month",
  },
  {
    id: 1,
    planDesc: "Arcade",
    yearBillCycle: true,
    desc: "$90/Year",
  },
  {
    id: 2,
    planDesc: "Advanced",
    yearBillCycle: false,
    desc: "$12/Month",
  },
  {
    id: 3,
    planDesc: "Advanced",
    yearBillCycle: true,
    desc: "$120/Year",
  },
  {
    id: 4,
    planDesc: "Pro",
    yearBillCycle: false,
    desc: "$15/Month",
  },
  {
    id: 5,
    planDesc: "Pro",
    yearBillCycle: true,
    desc: "$150/Year",
  },
];

export const RenderCost = (props) => {
  console.log(props);
  const matchedPlan = plans
    .filter((plan) => {
      return plan.planDesc.toLowerCase().includes(props.plan);
    })
    .filter((plan) => {
      return plan.yearBillCycle == props.yearBillingCycle;
    });

  const planDescription = matchedPlan[0]?.desc;

  // console.log(matchedPlan);
  // console.log(props);
  return <span>{" " + planDescription ? planDescription : null}</span>;
  //   return <>renderedcost here</>;
};
