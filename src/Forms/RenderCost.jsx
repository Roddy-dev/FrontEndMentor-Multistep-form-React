// here we want to return the cost / yearBillingCycle to be rendered in plan and confirm step
// hard coded

export const RenderCost = (props) => {
  console.log(props);
  return (
    <span>
      {" "}
      $5 /{props.plan} {props.yearBillingCycle}
    </span>
  );
};
