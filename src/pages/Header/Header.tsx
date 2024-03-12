import { FC } from "react";
import { Container, Stack, Typography, Button } from "@mui/material";
import { navbarItem } from "../../components/common/utils";
import { Link, useLocation } from "react-router-dom";
// import useTodoStore from "../../services/state/store";
const Header: FC = () => {
  const location = useLocation();
  const navbarItems: navbarItem[] = [
    {
      title: "All",
      path: "/",
    },
    {
      title: "Todo",
      path: "/todo",
    },
    {
      title: "Pending",
      path: "/pending",
    },
    {
      title: "Done",
      path: "/done",
    },
  ];

  return (
    <Container>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "start",
          textAlign: "start",
        }}
      >
        <Typography variant="h4">Tasks</Typography>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          pt: "30px",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {navbarItems.map((element, index) => {
            return (
              <Link to={element.path}>
                <Typography
                  key={index}
                  sx={{
                    textDecoration:
                      location.pathname === element.path ? "underline" : "none",
                  }}
                >
                  {" "}
                  {element.title}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
