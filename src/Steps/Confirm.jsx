import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";

import { prices } from "../data";
import {
  Button,
  Form,
  RenderCost,
  RenderAddons,
  Section,
  SectionRow,
} from "../Forms";
import { useEffect, useState } from "react";

export const Confirm = () => {
  const [state] = useAppState();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  // the useEffect dependency array shold catch changes in billing cycle

  useEffect(() => {
    calculateTotals(prices, state, setTotal);
  }, [state.yearBillingCycle]);

  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    navigate("/thanks");
    // this is where we could submit to the server
  };

  const calculateTotals = (prices, state, setTotal) => {
    // map the state for matching hasprofile, hasService, hasStorage
    const relevantKeys = Object.keys(state).filter(
      (k) => k.startsWith("has") && state[k] == "true"
    );
    // add to the list array the plan from state
    relevantKeys.push(state.plan);

    // return an array of objects relating to select things to bill from state and prices data
    // you could then render each item to screen and total prices
    // the prices in data file could be a replacement for previous render
    // cost and addon methods and could be the single source of truth.
    //

    // filter relevant keys to associated costs in prices data file
    let matchedPrices = prices.filter((pricedItem) =>
      relevantKeys.includes(pricedItem.type)
    );
    // map prices that are relevant and stuff yearly or monthly in array
    let workingTotalArr = matchedPrices.map((itemLine) => {
      // return itemLine.priceMY.monthly;
      if (state.yearBillingCycle == true) {
        return itemLine.priceMY.yearly;
      } else {
        return itemLine.priceMY.monthly;
      }
    });

    // then do array reduce to get total
    let totalToDisplay = workingTotalArr.reduce((acc, num) => acc + num);

    // use setTotal so that react will rerender total to screen
    setTotal(totalToDisplay);
  };

  return (
    <Form onSubmit={handleSubmit(submitData)} className="flow-content">
      <h2 className="mb-4">Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      <Section title="Personal info" url="/">
        <SectionRow>
          <div>Full name</div>
          <div>{state.name}</div>
        </SectionRow>
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
        <SectionRow>
          <div>Last name</div>
          <div>{state.phoneno}</div>
        </SectionRow>
      </Section>
      <Section title="Plan" url="/plan">
        <SectionRow>
          <div>Plan</div>
          <div>
            {state.plan?.charAt(0).toUpperCase() + state.plan?.slice(1)}
            <>&nbsp;</>

            <RenderCost
              plan={state.plan}
              yearBillingCycle={state.yearBillingCycle}
              // addupTotals={addupTotals}
            />
          </div>
        </SectionRow>
        <SectionRow>
          <div>Monthly or Yearly payment</div>
          <div>{state.yearBillingCycle ? "yearly" : "monthly"}</div>
        </SectionRow>
      </Section>
      <Section title="Add-ons" url="/addons">
        <SectionRow>
          {/* <ul>
            {state.servicesAdded.map(
              (item, index) => item && <li key={index}>{item}</li>
            )}
          </ul> */}
          <div>
            {state.hasService ? (
              <RenderAddons
                servicesAdded="hasService"
                yearly={state.yearBillingCycle}
              />
            ) : null}
          </div>
          <div>
            {state.hasStorage ? (
              <RenderAddons
                servicesAdded="hasStorage"
                yearly={state.yearBillingCycle}
              />
            ) : null}
          </div>
          <div>
            {state.hasProfile ? (
              <RenderAddons
                servicesAdded="hasProfile"
                yearly={state.yearBillingCycle}
              />
            ) : null}
          </div>
        </SectionRow>
        {console.log(state)}
      </Section>
      {/* <div className="d-flex justify-content-start">
        <Button className={`btn btn-secondary`}>Submit</Button>
      </div> */}
      {/* <PriceContext.Provider value={prices}>
        <h1>{prices}</h1>
      </PriceContext.Provider> */}
      <div>
        Total {total}{" "}
        {state.yearBillingCycle == true ? "per Year" : "per month"}
      </div>
      <div className="button-row">
        <Link className={`btn btn-prev`} to="/addons">
          Go Back
        </Link>
        <Button className={`btn btn-secondary`}>Confirm</Button>
      </div>
    </Form>
  );
};
