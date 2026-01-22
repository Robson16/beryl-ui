import{c as d,j as e}from"./iframe-Bi8X2TAS.js";const i=d.table`
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
`;function o({tokens:n,hasRemValue:r=!1}){return e.jsxs(i,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),r&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(n).map(([t,s])=>e.jsxs("tr",{children:[e.jsx("td",{children:t}),e.jsx("td",{children:s}),r&&e.jsxs("td",{children:[Number(s.replace("rem",""))*16,"px"]})]},t))})]})}o.__docgenInfo={description:"",methods:[],displayName:"TokensGrid",props:{tokens:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},hasRemValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{o as T};
