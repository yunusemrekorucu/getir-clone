const loader = {
  position: "fixed",
  background: "rgba(0,0,0,0.6)",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex:999
};

export const Loader = () => {
   return (
    <div style={loader}>
      <img src="/images/loader.gif" alt="" />
    </div>
  );
};
