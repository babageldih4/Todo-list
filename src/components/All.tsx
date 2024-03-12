import { Button, Container, Typography, Stack } from "@mui/material";
import { TextField, Paper } from "@mui/material";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import Checkbox from "@mui/material/Checkbox";
import { FC, useState } from "react";
import useTodoStore from "../services/state/store";

const All: FC = () => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState<string | string[]>(" ");
  const { todos, addTodo, completedTodo } = useTodoStore();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [id, setId] = useState(1);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    if (Array.isArray(dateString)) {
      setDate(dateString[0]); // If dateString is an array, take the first element
    } else {
      setDate(dateString); // Otherwise, set the date string directly
    }
  };

  const handleSubmit = () => {
    console.log(text);
    if (text.length === 0) {
      return;
    }
    const todo = {
      task: text,
      date: date,
      id,
      completed: false,
    };

    addTodo(todo);
    setId(id + 1);
    setDate(" ");
    setText("");
  };

  return (
    <Container>
      <Stack
        flexDirection={"row"}
        width={"fullwidth"}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between  ",
          textAlign: "center",
          alignItems: "center",
          height: "58px",
        }}
      >
        <Stack
          sx={{
            width: "75%",
          }}
        >
          <TextField
            placeholder="Tasks"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Stack>
        <Stack
          sx={{
            width: "20%",
            height: "100%",
            pl: "5px",
            pr: "5px",
          }}
        >
          <DatePicker
            onChange={onChange}
            style={{
              height: "100%",
            }}
          />
        </Stack>
        <Stack>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{
              background: "black",
            }}
          >
            Add
          </Button>
        </Stack>
      </Stack>
      {todos.map((task, index) => {
        return (
          <Stack
            // flexDirection={"row"}
            mt={5}
            key={index}
            spacing={4}
            sx={{
              display: "flex",
              pt: "10px",
              width: "100%",
            }}
          >
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Stack
                sx={{
                  display: " flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack>
                  <Checkbox
                    {...label}
                    color="success"
                    checked={task.completed}
                    onChange={() => completedTodo(task.id, !task.completed)}
                  />
                </Stack>

                <Stack
                  sx={{
                    pl: "5px",
                  }}
                >
                  <Typography>{task.task}</Typography>
                  <Typography color={"gray"}>
                    Completion date: {task.date}
                  </Typography>
                </Stack>
              </Stack>
              <Button
                variant="contained"
                onClick={() => completedTodo(task.id, true)}
              >
                Do it
              </Button>
            </Paper>
          </Stack>
        );
      })}
    </Container>
  );
};

export default All;
