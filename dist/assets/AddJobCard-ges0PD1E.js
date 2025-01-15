import{r as s,u as we,j as e,w as r,a as ve,b as ye,x as u}from"./index-Bru2VB64.js";/* empty css              */const Re=()=>{const[h,D]=s.useState(""),[p,K]=s.useState(""),[b,E]=s.useState(""),[g,A]=s.useState(""),[m,N]=s.useState("HP"),[j,F]=s.useState(""),[w,H]=s.useState(""),[V,M]=s.useState(""),[T,W]=s.useState(""),[O,q]=s.useState(""),[z,_]=s.useState(""),[I,J]=s.useState(""),[$,B]=s.useState(""),[G,U]=s.useState(""),[L,Q]=s.useState(""),[X,Y]=s.useState(""),[Z,ee]=s.useState(""),[i,te]=s.useState([]),[a,v]=s.useState({}),[se,le]=s.useState(!1),y=s.useRef(null),fe=we(),pe=s.useRef(null),k=s.useRef(null),ae=s.useRef(null),C=s.useRef(null),R=s.useRef(null),P=s.useRef(null),S=s.useRef(null),re=s.useRef(null),ne=s.useRef(null),oe=s.useRef(null),ce=s.useRef(null),ie=s.useRef(null),de=s.useRef(null),ue=s.useRef(null),me=s.useRef(null),xe=s.useRef(null),l=(t,n)=>{if(t.key==="Enter"){if(t.shiftKey)return;t.preventDefault(),n&&n.current&&n.current.focus()}},d=t=>{const{value:n}=t.target;te(c=>c.includes(n)?c.filter(f=>f!==n):[...c,n])},be=()=>{D(""),K(""),E(""),A(""),N("HP"),F(""),H(""),M(""),W(""),q(""),_(""),J(""),B(""),U(""),Q(""),Y(""),ee(""),te([]),v({}),le(!1)},ge=()=>{const t={};return(!h||h.trim()==="")&&(t.cusName="Customer name is required."),p||(t.cusAddress="Customer address is required."),b||(t.cusPhone="Customer phone is required."),g||(t.make="Make is required."),!j&&!w&&(t.hpkva="HP/KVA  is required."),t},Ne=async t=>{var c,f;v({}),t.preventDefault();const n=ge();if(Object.keys(n).length>0){v(n);return}try{const o=await ve.post(`${ye}/jobcard`,{customerName:h,customerAddress:p,phoneNumber:b,Make:g,HP:j,KVA:w,RPM:V,Type:T,Frame:O,SrNo:z,DealerName:I,DealerNumber:$,works:G,spares:L,industrialworks:X,attachments:i,warranty:se,others:Z});console.log(o),(o==null?void 0:o.status)===201&&(u.success("Job card created successfully"),fe(`/admin/complete-jobcard/${(f=(c=o==null?void 0:o.data)==null?void 0:c.data)==null?void 0:f._id}`,{state:{type:"add-image"}}))}catch(o){if(console.error("Error while submitting:",o),o.response){const{status:he,data:je}=o.response;he===400?u.error(je.message||"Validation error. Please check your input."):he===500?u.error("Server error. Please try again later."):u.error("Something went wrong. Please try again.")}else o.request?u.error("No response from server. Please check your network."):u.error("An unexpected error occurred.")}};s.useEffect(()=>{Object.keys(a).length>0&&y.current&&y.current.scrollIntoView({behavior:"smooth"})},[a]);const x=(t,n,c)=>{n(t.target.value),c.current&&(c.current.style.height="auto",c.current.style.height=`${c.current.scrollHeight}px`)};return e.jsx("div",{className:"flex flex-col items-start w-full justify-start min-h-screen  px-4",ref:y,children:e.jsxs("div",{className:"w-full  rounded-lg sm:p-8 p-1",children:[e.jsx("h1",{className:"text-3xl font-bold mb-2 text-white",children:"JobCard"}),e.jsx("p",{className:"text-white mb-6",children:"Hi-Tech Engineering company"}),e.jsxs("form",{className:" border-dashed border border-white lg:p-10 p-4 sm:p-6 md:p-8 rounded-lg",children:[e.jsxs("div",{className:"flex flex-col border border-dashed border-white px-8 py-10 rounded-lg lg:flex-row gap-8",children:[e.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-1",children:"Customer Name"}),e.jsx("input",{type:"text",placeholder:"Enter name",value:h,onChange:t=>D(t.target.value),className:"w-full px-4 py-2 border bg-[#282a2c] text-white border-[#022213] rounded-lg focus:outline-[#220211]",ref:pe,onKeyDown:t=>l(t,k)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"}),a.cusName&&e.jsx("p",{className:"text-red-500 text-sm",children:a.cusName})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Customer address"}),e.jsx("textarea",{placeholder:"Enter address",value:p,onChange:t=>x(t,K,k),className:"w-full px-4 text-start lg:py-4 py-2 border bg-[#282a2c] text-white border-[#022213] rounded-lg focus:outline-[#220211] resize-none no-scrollbar",rows:"4",ref:k,onKeyDown:t=>l(t,ae)}),e.jsx(r,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"}),a.cusAddress&&e.jsx("p",{className:"text-red-500 text-sm",children:a.cusAddress})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Customer Phone"}),e.jsx("input",{type:"text",placeholder:"Enter phone",value:b,onChange:t=>E(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white   rounded-lg focus:outline-[#220211] ",ref:ae,onKeyDown:t=>l(t,C)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"}),a.cusPhone&&e.jsx("p",{className:"text-red-500 text-sm",children:a.cusPhone})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Works"}),e.jsx("textarea",{placeholder:"Enter Works",value:G,onChange:t=>x(t,U,C),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg  focus:outline-[#220211] resize-none no-scrollbar",rows:"4",ref:C,onKeyDown:t=>l(t,R)}),e.jsx(r,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Spares"}),e.jsx("textarea",{placeholder:"Enter Works",value:L,onChange:t=>x(t,Q,R),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213]  bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar",rows:"4",ref:R,onKeyDown:t=>l(t,P)}),e.jsx(r,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Industrial works"}),e.jsx("textarea",{placeholder:"Enter Works",value:X,onChange:t=>x(t,Y,P),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar",rows:"4",ref:P,onKeyDown:t=>l(t,S)}),e.jsx(r,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Select Additional fittings"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"fan",name:"features",value:"fan",checked:i.includes("fan"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"fan",className:"text-white",children:"Fan"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"fan_cover",name:"features",value:"fan cover",checked:i.includes("fan cover"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"fan_cover",className:"text-white",children:"Fan cover"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"terminal",name:"features",value:"terminal",checked:i.includes("terminal"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"terminal",className:"text-white",children:"Terminal"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"terminal_box",name:"features",value:"terminal box",checked:i.includes("terminal box"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"terminal_box",className:"text-white",children:"Terminal Box"})]})]}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"pulli",name:"features",value:"pulli",checked:i.includes("pulli"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"pulli",className:"text-white",children:"Pulli"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"avr",name:"features",value:"AVR",checked:i.includes("AVR"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"avr",className:"text-white",children:"AVR"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"diode",name:"features",value:"diode",checked:i.includes("diode"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"diode",className:"text-white",children:"Diode"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"grill",name:"features",value:"grill",checked:i.includes("grill"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"grill",className:"text-white",children:"Grill"})]})]})]})]})]}),e.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col gap-y-1.5",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Other"}),e.jsx("textarea",{placeholder:"Enter Other",value:Z,onChange:t=>x(t,ee,S),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar",rows:"4",ref:S,onKeyDown:t=>l(t,re)}),e.jsx(r,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Make"}),e.jsx("input",{type:"text",placeholder:"Enter make",value:g,onChange:t=>A(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:re,onKeyDown:t=>l(t,oe)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"}),a.make&&e.jsx("p",{className:"text-red-500 text-sm",children:a.make})]}),e.jsxs("div",{className:"relative w-full pt-1",children:[e.jsxs("label",{className:"flex items-center gap-5 text-white font-medium mb-2 ",children:["HP/KVA ",e.jsxs("div",{className:"flex items-center gap-2 justify-center",children:[e.jsxs("div",{className:"flex items-center justify-center ",children:[e.jsx("input",{type:"radio",id:"HP",name:"planType",value:"HP",checked:m==="HP",onChange:t=>N(t.target.value),className:"mr-2 "}),e.jsx("label",{htmlFor:"HP",className:"text-white",children:"HP"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"radio",id:"KVA",name:"planType",value:"KVA",checked:m==="KVA",onChange:t=>N(t.target.value),className:"mr-2"}),e.jsx("label",{htmlFor:"KVA",className:"text-white",children:"KVA"})]})]})]}),e.jsx("input",{type:"number",placeholder:m==="HP"?"Enter HP":"Enter KVA",value:m==="HP"?j:w,onChange:t=>{m==="HP"?F(t.target.value):H(t.target.value)},className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 no-spinners",ref:oe,onKeyDown:t=>l(t,ne)}),e.jsx(r,{className:"absolute right-3 top-12 text-[#d65f63] cursor-pointer"}),a.hpkva&&e.jsx("p",{className:"text-red-500 text-sm",children:a.hpkva})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"RPM"}),e.jsxs("select",{value:V,onChange:t=>M(t.target.value),className:"w-full px-4 py-2 border border-[#022213] rounded-lg bg-[#282a2c] text-white focus:outline-gray-300",ref:ne,onKeyDown:t=>l(t,ce),children:[e.jsx("option",{value:"",children:"Select RPM"})," ",e.jsx("option",{value:"710",children:"710 RPM"}),e.jsx("option",{value:"960",children:"960 RPM"}),e.jsx("option",{value:"1440",children:"1440 RPM"}),e.jsx("option",{value:"2800",children:"2800 RPM"})]}),a.rpm&&e.jsx("p",{className:"text-red-500 text-sm",children:a.rpm})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Type"}),e.jsx("input",{type:"text",placeholder:"Enter Type",value:T,onChange:t=>W(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:ce,onKeyDown:t=>l(t,ie)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Frame"}),e.jsx("input",{type:"text",placeholder:"Enter Frame",value:O,onChange:t=>q(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:ie,onKeyDown:t=>l(t,de)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Sr.no"}),e.jsx("input",{type:"text",placeholder:"Enter Sr.no",value:z,onChange:t=>_(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:de,onKeyDown:t=>l(t,ue)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Dealer Name"}),e.jsx("input",{type:"text",placeholder:"Enter Dealer name",value:I,onChange:t=>J(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:ue,onKeyDown:t=>l(t,me)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Dealer Number"}),e.jsx("input",{type:"text",placeholder:"Enter Dealer Number",value:$,onChange:t=>B(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:me,onKeyDown:t=>l(t,xe)}),e.jsx(r,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsx("div",{className:"text-lg pt-4",children:e.jsxs("label",{className:"flex items-center text-white",children:["Does the product have a warranty?",e.jsx("input",{type:"checkbox",checked:se,onChange:t=>le(t.target.checked),className:"hidden peer",ref:xe}),e.jsx("span",{className:"w-6 h-6 ml-2 border-2 border-white rounded-md cursor-pointer peer-checked:before:content-['✅'] peer-checked:before:text-[#022213] flex items-center justify-center transition-all duration-200"})]})})]})]}),e.jsxs("div",{className:"flex items-center lg:justify-end justify-center space-x-4 mt-6",children:[e.jsx("button",{type:"button",className:"sm:px-12 px-8 py-1 sm:py-2 border border-[#d65f63] rounded-lg text-[#d65f63] font-medium hover:bg-[#d65f63] transition duration-300 hover:text-white",onClick:be,children:"Clear"}),e.jsx("button",{type:"submit",onClick:t=>Ne(t),className:"sm:px-12 px-8 py-1 sm:py-2 bg-[#d65f63] hover:bg-[#3890d8] transition duration-300 text-white rounded-lg ",children:"Submit"})]})]})]})})};export{Re as default};
