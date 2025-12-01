import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Container from "../Utility/Container";

const RiderRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return <p>Loading.......</p>;
  }

  if (role !== "rider") {
    return (
      <Container className={"mt-20"}>
        You are not allowed to access this page.
      </Container>
    );
  }

  return children;
};

export default RiderRoute;
