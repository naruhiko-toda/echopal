"use client";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";

import { createProject } from "@actions/createProject";

export const ProjectForm: () => React.JSX.Element = () => {
  const textFieldRef = useRef(null);

  useEffect(() => {
    textFieldRef.current.focus();
  }, []);
  return (
    <form action={createProject}>
      <TextField
        fullWidth
        id={"name"}
        name="name"
        label={"プロジェクト名"}
        variant="standard"
        placeholder={"例）誕生日プレゼント"}
        inputRef={textFieldRef}
      />
      <TextField
        fullWidth
        type={"number"}
        id={"price"}
        name={"price"}
        label={"金額"}
        variant="standard"
        placeholder={"金額を入力してください"}
        InputProps={{
          startAdornment: <InputAdornment position="start">￥</InputAdornment>,
          inputMode: "numeric",
          pattern: "/^-?d+(?:.d+)?$/g",
        }}
      />
      <Button type={"submit"}>登録する</Button>
    </form>
  );
};
