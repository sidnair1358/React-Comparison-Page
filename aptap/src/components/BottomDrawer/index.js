// import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CompareDeals from "../CompareDeals";

import DialogBox from "../DialogBox";

export default function BottomDrawer({
  isOpen,
  setIsOpen,
  selectedDeals,
  removeDeal,
}) {
  // const handleClick = (data) => {
  //   console.log(data);
  //   setIsOpen(false);
  //   return <DialogBox />;
  // };

  return (
    <div>
      <Drawer
        anchor={"bottom"}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedDeals &&
            selectedDeals.map((dealCompare) => {
              return (
                <CompareDeals
                  selectedDeal={dealCompare}
                  removeDeal={removeDeal}
                />
              );
            })}
        </div>
        <DialogBox selectedDeals={selectedDeals} />
      </Drawer>
    </div>
  );
}
