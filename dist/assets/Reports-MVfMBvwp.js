import{r as e,j as a,a as l,b as c}from"./index-DQcph4hN.js";const x=()=>{const[r,o]=e.useState([]),d=async()=>{var t;const s=await l.get(`${c}/jobcard/reports`);s.status===200&&o((t=s.data)==null?void 0:t.data)};return e.useEffect(()=>{d()},[]),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-8",children:r.map((s,t)=>a.jsxs("div",{className:"flex flex-col gap-y-2 p-6 shadow-lg border rounded-md",children:[a.jsx("h1",{className:"text-2xl text-gray-700 font-semibold",children:s.status}),a.jsx("h1",{className:"text-3xl font-bold text-[#72A10F]",children:s.count})]},t))})};export{x as default};
