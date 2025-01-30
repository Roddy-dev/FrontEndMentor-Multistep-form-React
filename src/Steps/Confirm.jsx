import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";

import { prices } from "../data";
import { Button, Form, RenderCost, RenderAddons } from "../Forms";
import { useEffect, useState } from "react";

export const Confirm = () => {
  const [state, setState] = useAppState();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  // the useEffect dependency array shold catch changes in billing cycle

  useEffect(() => {
    calculateTotals(prices, state, setTotal);
    // }, [state.yearBillingCycle]);may not be needed as "React guarantees that setState function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list."
  });

  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    navigate("/thanks");
    console.log("data", data);
    // this is where we could submit to the server
  };

  const handleChangeYear = (data) => {
    if (state.yearBillingCycle !== true) {
      data.yearBillingCycle = true;
    } else {
      data.yearBillingCycle = false;
    }
    setState({ ...state, ...data });
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
    const matchedPrices = prices.filter((pricedItem) =>
      relevantKeys.includes(pricedItem.type)
    );
    // map prices that are relevant and stuff yearly or monthly in array
    const workingTotalArr = matchedPrices.map((itemLine) => {
      if (state.yearBillingCycle == true) {
        return itemLine.priceMY.yearly;
      } else {
        return itemLine.priceMY.monthly;
      }
    });

    // then do array reduce to get total
    const totalToDisplay = workingTotalArr.reduce((acc, num) => acc + num);

    // use setTotal so that react will rerender total to screen
    setTotal(totalToDisplay);
  };

  return (
    <Form onSubmit={handleSubmit(submitData)} className="flow-content">
      <h2 className="mb-4">Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      <div className="summary-table flow-content">
        <div className="summary-plan">
          <div className="summary-plan-flex">
            <div className="">
              {state.plan?.charAt(0).toUpperCase() + state.plan?.slice(1)}
              <>&nbsp;</>
              {state.yearBillingCycle ? "(Yearly)" : "(Monthly)"}
              <p>
                <Link onClick={handleChangeYear}>Change</Link>
              </p>
            </div>
            <div>
              <RenderCost
                plan={state.plan}
                yearBillingCycle={state.yearBillingCycle}
                className="confirm-cost"
              />
            </div>
          </div>
        </div>

        <div className="summary-addons">
          {state.hasService ? (
            <RenderAddons
              servicesAdded="hasService"
              yearly={state.yearBillingCycle}
              className="confirm-cost"
            />
          ) : null}
        </div>
        <div className="summary-addons">
          {state.hasStorage ? (
            <RenderAddons
              servicesAdded="hasStorage"
              yearly={state.yearBillingCycle}
              className="confirm-cost"
            />
          ) : null}
        </div>
        <div className="summary-addons">
          {state.hasProfile ? (
            <RenderAddons
              servicesAdded="hasProfile"
              yearly={state.yearBillingCycle}
              className="confirm-cost"
            />
          ) : null}
        </div>
      </div>
      {/* end of summary table */}
      <div className="summary-total">
        <span>
          Total {state.yearBillingCycle == true ? "(per Year)" : "(per month)"}
        </span>

        <span className="confirm-cost">
          {"$ " + total}
          {state.yearBillingCycle == true ? "/yr" : "/mth"}
        </span>
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
