import React from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import styled from "styled-components";

//------------Styled Components-------------
// If you're unfamiliar with styled components
// start here https://styled-components.com/docs/basics#getting-started
const Source = styled.div`
  font-size: 1rem;
`;

//=========================================

// Your UI logic goes here.
// `data` prop is exactly what is returned by queryToData.
function Component(props) {
  console.log(props.data.language, props.data.code);
  return (
    <div>
      <Editor
        height="50vh"
        width="60vw"
        theme="vs-dark"
        defaultLanguage={props.data.language}
        defaultValue={JSON.parse(props.data.code)}
      />
      <Source>
        Source : <a href={props.data.source}>{props.data.name}</a>
      </Source>
    </div>
  );
}

//=========================================

// This where you can process the query and try to convert it into some meaningful data.
const queryToData = async ({ query }) => {
  //  Query would have two different parts
  //  -> Algorithm - may be multi word
  //  -> Language - Mostly Single Word

  query = query.toLowerCase();

  const searchQuery = query;
  const value = await axios.get(
    "https://felvin-service.herokuapp.com/api/code",
    { params: { searchQuery } }
  );
  if (value.status == 200) {
    return value.data;
  }
  return;
};

export { queryToData, Component };
