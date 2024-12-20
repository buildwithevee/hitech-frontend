import{r as n,k as x,u as h,j as e,l as b,m as t,n as j,o as g,p as N,M as p,q as u,s as v,I as f,t as w,a as y,_ as k}from"./index-8zyf2noZ.js";import{I as D}from"./index-tMuo9WUw.js";const S=()=>{var c;const[s,o]=n.useState({}),{id:a}=x(),d=h();console.log(a);const m=l=>{switch(l){case"Pending":return"bg-yellow-300 text-yellow-900 font-semibold";case"Completed":return"bg-green-300 text-green-900 font-semibold";case"Cancelled":return"bg-red-300 text-red-900 font-semibold";default:return"bg-gray-300 text-gray-900 font-semibold"}};return n.useEffect(()=>{a||d("/admin/jobcard"),(async()=>{var r;try{const i=await y.get(`http://localhost:3000/api/jobcard/get-a-single-card/${a}`);console.log(i.data),i.status==200&&o((r=i.data)==null?void 0:r.data)}catch(i){console.log(i),k.error("Something went wrong")}})()},[]),e.jsxs("div",{className:"max-w-4xl mx-auto my-8 p-6 text-white bg-[#1e2125] shadow-lg rounded-lg border border-gray-700",children:[e.jsxs("div",{className:"mb-6 flex items-center border-b border-gray-500 pb-4",children:[e.jsx(b,{className:"text-blue-500 text-2xl mr-2"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Job Card Details"})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold border-b border-gray-500 pb-2 mb-4",children:"Customer Info"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(t,{className:"inline-block text-blue-500 mr-2"}),e.jsx("strong",{className:"uppercase",children:"Name:"})," ",s==null?void 0:s.customerName]}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{className:"inline-block text-blue-500 mr-2"}),e.jsx("strong",{className:"uppercase",children:"Address:"}),e.jsx("p",{className:"whitespace-pre-wrap",children:s==null?void 0:s.customerAddress})]}),e.jsxs("div",{children:[e.jsx(g,{className:"inline-block text-blue-500 mr-2"}),e.jsx("strong",{className:"uppercase",children:"Phone:"})," ",s==null?void 0:s.phoneNumber]}),e.jsxs("div",{children:[e.jsx(N,{className:"inline-block text-blue-500 mr-2"}),e.jsx("strong",{className:"uppercase",children:"In Date:"})," ",new Date(s==null?void 0:s.InDate).toLocaleDateString()]}),e.jsxs("div",{children:[e.jsx(p,{className:"inline-block text-blue-500 mr-2"}),e.jsx("strong",{className:"uppercase",children:"Job Card Number:"})," ",s==null?void 0:s.jobCardNumber]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold border-b border-gray-500 pb-2 mb-4",children:"Specifications"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Make:"})," ",s==null?void 0:s.Make]}),e.jsxs("div",{children:[e.jsx("strong",{children:"HP:"})," ",(s==null?void 0:s.HP)||"N/A"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"KVA:"})," ",(s==null?void 0:s.KVA)||"N/A"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"RPM:"})," ",s==null?void 0:s.RPM]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Type:"})," ",s==null?void 0:s.Type]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Frame:"})," ",s==null?void 0:s.Frame]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Serial No:"})," ",s==null?void 0:s.SrNo]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold border-b border-gray-500 pb-2 mb-4",children:"Dealer and Work Details"}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("h4",{className:"text-lg font-semibold mb-4",children:[e.jsx(t,{className:"inline-block text-blue-500 mr-2"}),"Dealer Information"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Dealer Name:"})," ",s==null?void 0:s.DealerName]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Dealer Number:"})," ",s==null?void 0:s.DealerNumber]})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-lg font-semibold mb-4",children:[e.jsx(u,{className:"inline-block text-blue-500 mr-2"}),"Work Details"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg shadow",children:[e.jsx("h5",{className:"text-sm font-semibold text-blue-400",children:"Works"}),e.jsx("p",{className:"text-sm text-gray-300 whitespace-pre-wrap",children:s==null?void 0:s.works})]}),e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg shadow",children:[e.jsx("h5",{className:"text-sm font-semibold text-blue-400",children:"Spares"}),e.jsx("p",{className:"text-sm text-gray-300 whitespace-pre-wrap",children:s==null?void 0:s.spares})]}),e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg shadow",children:[e.jsx("h5",{className:"text-sm font-semibold text-blue-400",children:"Industrial Works"}),e.jsx("p",{className:"text-sm text-gray-300 whitespace-pre-wrap",children:s==null?void 0:s.industrialworks})]})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsxs("h3",{className:"text-xl font-semibold border-b border-gray-500 pb-2 mb-4",children:[e.jsx(v,{className:"inline-block text-blue-500 mr-2"})," Attachments"]}),e.jsx("div",{children:s!=null&&s.attachments?e.jsx("ul",{className:"list-disc list-inside",children:(c=s==null?void 0:s.attachments)==null?void 0:c.map((l,r)=>e.jsx("li",{children:l},r))}):e.jsx("p",{children:"No attachments available."})})]}),e.jsxs("div",{className:"mb-8 grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(f,{className:"inline-block text-blue-500 mr-2"}),e.jsx("strong",{children:"Warranty:"})," ",s!=null&&s.warranty?"Yes":"No"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Status: "}),e.jsx("span",{className:`px-2 py-1 rounded text-sm font-semibold ${m(s==null?void 0:s.jobCardStatus)}`,children:s==null?void 0:s.jobCardStatus})]})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:"text-xl font-semibold border-b border-gray-500 pb-2 mb-4",children:[e.jsx(w,{className:"inline-block text-blue-500 mr-2"})," Images"]}),e.jsx("div",{children:s!=null&&s.images?e.jsx("div",{className:"flex space-x-4",children:s==null?void 0:s.images.map((l,r)=>e.jsx(D,{src:l.image,alt:`Job image ${r+1}`,width:100,height:100,className:"w-24 h-24 object-cover rounded shadow"},r))}):e.jsx("p",{children:"No images available."})})]})]})};export{S as default};
