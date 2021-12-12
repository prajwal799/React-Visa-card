import styled from "styled-components";

const ToolBar = styled.div`
  max-width: 600px;
  background: #3f51b5;
  height: 50px;
  display: flex;
  margin-left: 30%;
  color: white;
`;
const SiteName = styled.div`
  margin-right: 105px;
`;
const DrawerItem = ({ lable }) => {
  return <h4 style={{ marginLeft: "19px" }}>{lable}</h4>;
};
const Navbar = () => {
  return (
    <ToolBar>
      <SiteName>
        <DrawerItem lable={"Sitename"} />
      </SiteName>
      <DrawerItem lable={"About as"} />
      <DrawerItem lable={"Price"} />
      <DrawerItem lable={"Start page"} />
      <DrawerItem lable={"Offer"} />
      <DrawerItem lable={"Contact"} />
    </ToolBar>
  );
};

export default Navbar;
