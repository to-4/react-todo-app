import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import TodoInput from "../components/TodoInput";

describe("TodoInput", () => {
  test("入力して追加ボタンを押すとonAddが呼ばれる", () => {
    const onAdd = vi.fn();

    render(<TodoInput onAdd={onAdd} />);

    fireEvent.change(
      screen.getByPlaceholderText("Todoを入力"),
      {
        target: {
          value: "牛乳を買う",
        },
      }
    );

    fireEvent.click(screen.getByText("追加"));

    expect(onAdd).toHaveBeenCalledWith("牛乳を買う");
  });
});
