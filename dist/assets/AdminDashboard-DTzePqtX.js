import{r as a,A as i,j as e,a as n,b as x}from"./index-HHpk9hU4.js";const b=()=>{const[r,d]=a.useState(0),[o,c]=a.useState([]);i.init({duration:1800,offset:0});const l=async()=>{try{const s=await n.get(`${x}/analysis/get-stats`);if(s.data.success)c(s.data.data);else throw new Error("Failed to fetch dashboard data")}catch(s){console.error("Error fetching dashboard reports:",s)}};return a.useEffect(()=>{l()},[]),e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-white",children:"Dashboard"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:o&&o.map((s,t)=>e.jsxs("div",{className:`p-7  rounded-3xl shadow-md border border-gray-300 flex flex-col justify-between cursor-pointer transition duration-300
            ${r===t?"bg-gradient-to-r from-[#d65f63] to-[#3890d8] text-black":"bg-[#282a2c] text-white"}`,onClick:()=>d(t),children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsx("div",{className:`flex items-center text-xs px-4 py-1 rounded-3xl xl:hidden
  ${r===t?"bg-[#282a2c] text-white":"bg-[#AAF49B] text-black"}`})}),e.jsx("h3",{className:"text-xl font-semibold",children:s.title}),e.jsx("div",{className:"flex flex-row gap-x-2",children:e.jsx("p",{className:"text-4xl font-bold",children:s.count})}),e.jsx("p",{className:"text-sm mt-2",children:s.description})]},t))})]})};export{b as default};