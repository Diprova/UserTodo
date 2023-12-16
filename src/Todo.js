import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import translate from "translate";

const Todo = ({ todo, setTodo, activeUser }) => {
  const handleClick = (id) => {
    let index = todo.findIndex((ele) => ele.id === id);
    setTodo([
      ...todo.slice(0, index),
      { ...todo[index], completed: true },
      ...todo.slice(index + 1),
    ]);
  };

  const PaperContent = styled("div")(({ theme }) => ({
    width: "20rem",
    height: "1.5rem",
    padding: "1rem",
  }));

  const ButtonContent = styled("div")(({ theme }) => ({
    padding: "0 10px",
  }));

  const handleTranslate = async (id) => {
    const result = await translate(`${todo[id - 1].title}`, {
      from: "la",
      to: "en",
    });
    setTodo([...todo, (todo[id - 1].title = result)]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      {todo
        .filter((e) => e.userId === activeUser && e.completed === false)
        .map((work) => {
          return (
            <Paper
              variant={"elevation"}
              elevation={3}
              square={false}
              key={work.id}
            >
              <Grid container spacing={2} direction="column">
                <Grid item xs={6}>
                  <PaperContent>{work.title}</PaperContent>
                </Grid>
                <Grid item xs={6}>
                  <ButtonContent>
                    <Button onClick={() => handleTranslate(work.id)}>
                      Translate
                    </Button>
                    <Button onClick={() => handleClick(work.id)}>Done</Button>
                  </ButtonContent>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
    </Box>
  );
};

export default Todo;
