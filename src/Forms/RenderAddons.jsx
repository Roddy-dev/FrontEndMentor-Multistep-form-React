// here we store the cost of add on services for monthly and yearly.
// my future self would use a data.js file for single source of truth
//

const addons = [
  {
    id: 0,
    type: "hasService",
    yearly: false,
    title: "Online Service",
    costDesc: "$1/mo",
    tagLine: "Access to multiplayer games",
  },
  {
    id: 1,
    type: "hasService",
    yearly: true,
    title: "Online Service",
    costDesc: "$10/yr",
    tagLine: "Access to multiplayer games",
  },
  {
    id: 2,
    type: "hasStorage",
    yearly: false,
    title: "Additional Storage",
    costDesc: "$2/mo",
    tagLine: "Extra 1TB of cloud save",
  },
  {
    id: 3,
    type: "hasStorage",
    yearly: true,
    title: "Additional Storage",
    costDesc: "$20/yr",
    tagLine: "Extra 1TB of cloud save",
  },
  {
    id: 4,
    type: "hasProfile",
    yearly: false,
    title: "Customizable profile",
    costDesc: "$2/mo",
    tagLine: "Custom theme on your profile",
  },
  {
    id: 5,
    type: "hasProfile",
    yearly: true,
    title: "Customizable profile",
    costDesc: "$20/yr",
    tagLine: "Custom theme on your profile",
  },
];

export const RenderAddons = (props) => {
  //   filter by type and yearly, only one match for each condition. So just return the 1st and only in the matched array
  // after that decide in the jsx if we want to return tagline or not. tagline is used in addons page.

  const matchedAddon = addons
    .filter((addon) => {
      return addon.type
        .toLowerCase()
        .includes(props.servicesAdded.toLowerCase());
    })
    .filter((addon) => {
      return addon.yearly == props.yearly;
    });

  if (props?.displayTagline) {
    return (
      <>
        <div className="add-on-details">
          <p>{matchedAddon[0]?.title}</p>
          <p>{matchedAddon[0]?.tagLine}</p>
        </div>
        <p className="add-on-price">{matchedAddon[0]?.costDesc}</p>
      </>
    );
  }
  return (
    <>
      <div>{matchedAddon[0].title}</div>
      <div>{matchedAddon[0].costDesc}</div>
    </>
  );
};
