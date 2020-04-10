import React from "react";
import { useSelector, useDispatch } from "react-redux";

function addCourseAction(title) {
  return { type: "ADD_COURSE", title: "GraphQL" };
}

export default function Components() {
  const qty = 10;
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.data.slice(0, qty), [qty]);

  function addCourse() {
    dispatch(addCourseAction("GraphQL"));
  }

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}
