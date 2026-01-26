import { styled } from "styled-components";

export const TokensGridContainer = styled.table`
  width: 100%;
  font-family: sans-serif;
  color: #fff;
  border-collapse: collapse;

  thead th {
    padding: 0.75rem 1rem;
    text-align: left;
  }

  tbody tr:nth-child(even) td {
    background: #444;
  }

  tbody td {
    padding: 0.75rem 1rem;
    color: #ccc;
  }
`;
