import{r as s,u as st,l as rt,j as e,w as o,a as Xe,b as Ye,x as m}from"./index-B05ZULVS.js";/* empty css              */const ot=()=>{const[f,N]=s.useState(""),[j,w]=s.useState(""),[v,y]=s.useState(""),[k,C]=s.useState(""),[x,p]=s.useState("HP"),[R,P]=s.useState(""),[S,D]=s.useState(""),[L,K]=s.useState(""),[Q,E]=s.useState(""),[X,A]=s.useState(""),[Y,F]=s.useState(""),[Z,H]=s.useState(""),[ee,V]=s.useState(""),[te,M]=s.useState(""),[ae,T]=s.useState(""),[se,W]=s.useState(""),[re,O]=s.useState(""),[i,q]=s.useState([]),[c,z]=s.useState({}),[le,J]=s.useState(!1),$=s.useRef(null),ne=st(),{id:b}=rt(),Ze=s.useRef(null),I=s.useRef(null),oe=s.useRef(null),_=s.useRef(null),B=s.useRef(null),U=s.useRef(null),G=s.useRef(null),ce=s.useRef(null),ie=s.useRef(null),de=s.useRef(null),ue=s.useRef(null),me=s.useRef(null),xe=s.useRef(null),he=s.useRef(null),fe=s.useRef(null),pe=s.useRef(null),l=(t,n)=>{if(t.key==="Enter"){if(t.shiftKey)return;t.preventDefault(),n&&n.current&&n.current.focus()}},d=t=>{const{value:n}=t.target;q(r=>r.includes(n)?r.filter(u=>u!==n):[...r,n])},et=()=>{N(""),w(""),y(""),C(""),p("HP"),P(""),D(""),K(""),E(""),A(""),F(""),H(""),V(""),M(""),T(""),W(""),O(""),q([]),z({}),J(!1)},tt=()=>{const t={};return(!f||f.trim()==="")&&(t.cusName="Customer name is required."),j||(t.cusAddress="Customer address is required."),v||(t.cusPhone="Customer phone is required."),k||(t.make="Make is required."),!R&&!S&&(t.hpkva="HP/KVA  is required."),t},at=async t=>{z({}),t.preventDefault();const n=tt();if(Object.keys(n).length>0){z(n);return}try{const r=await Xe.put(`${Ye}/jobcard/edit-card`,{customerName:f,customerAddress:j,phoneNumber:v,Make:k,HP:R,KVA:S,RPM:L,Type:Q,Frame:X,SrNo:Y,DealerName:Z,DealerNumber:ee,works:te,spares:ae,industrialworks:se,attachments:i,warranty:le,others:re,id:b});console.log(r),(r==null?void 0:r.status)===200&&(m.success("Job card Updated successfully"),ne(`/admin/jobcard/${b}`))}catch(r){if(console.error("Error while submitting:",r),r.response){const{status:u,data:g}=r.response;u===400?m.error(g.message||"Validation error. Please check your input."):u===500?m.error("Server error. Please try again later."):m.error("Something went wrong. Please try again.")}else r.request?m.error("No response from server. Please check your network."):m.error("An unexpected error occurred.")}};s.useEffect(()=>{b||ne("/admin/jobcard"),(async()=>{var n,r,u,g,be,ge,Ne,je,we,ve,ye,ke,Ce,Re,Pe,Se,De,Ke,Ee,Ae,Fe,He,Ve,Me,Te,We,Oe,qe,ze,Je,$e,Ie,_e,Be,Ue,Ge,Le,Qe;try{const a=await Xe.get(`${Ye}/jobcard/get-a-single-card/${b}`);console.log(a.data),a.status==200&&(N(((r=(n=a.data)==null?void 0:n.data)==null?void 0:r.customerName)||""),w(((g=(u=a.data)==null?void 0:u.data)==null?void 0:g.customerAddress)||""),y(((ge=(be=a.data)==null?void 0:be.data)==null?void 0:ge.phoneNumber)||""),C(((je=(Ne=a==null?void 0:a.data)==null?void 0:Ne.data)==null?void 0:je.Make)||""),p((ve=(we=a==null?void 0:a.data)==null?void 0:we.data)!=null&&ve.HP?"HP":"KVA"),P(((ke=(ye=a==null?void 0:a.data)==null?void 0:ye.data)==null?void 0:ke.HP)||""),D(((Re=(Ce=a==null?void 0:a.data)==null?void 0:Ce.data)==null?void 0:Re.KVA)||""),K(((Se=(Pe=a==null?void 0:a.data)==null?void 0:Pe.data)==null?void 0:Se.RPM)||""),E(((Ke=(De=a==null?void 0:a.data)==null?void 0:De.data)==null?void 0:Ke.Type)||""),A(((Ae=(Ee=a==null?void 0:a.data)==null?void 0:Ee.data)==null?void 0:Ae.Frame)||""),F(((He=(Fe=a==null?void 0:a.data)==null?void 0:Fe.data)==null?void 0:He.SrNo)||""),H(((Me=(Ve=a==null?void 0:a.data)==null?void 0:Ve.data)==null?void 0:Me.DealerName)||""),V(((We=(Te=a==null?void 0:a.data)==null?void 0:Te.data)==null?void 0:We.DealerNumber)||""),M(((qe=(Oe=a==null?void 0:a.data)==null?void 0:Oe.data)==null?void 0:qe.works)||""),T(((Je=(ze=a==null?void 0:a.data)==null?void 0:ze.data)==null?void 0:Je.spares)||""),W(((Ie=($e=a==null?void 0:a.data)==null?void 0:$e.data)==null?void 0:Ie.industrialworks)||""),O(((Be=(_e=a==null?void 0:a.data)==null?void 0:_e.data)==null?void 0:Be.others)||""),q(((Ge=(Ue=a==null?void 0:a.data)==null?void 0:Ue.data)==null?void 0:Ge.attachments)||[]),J((Qe=(Le=a==null?void 0:a.data)==null?void 0:Le.data)==null?void 0:Qe.warranty))}catch(a){console.log(a),m.error("Something went wrong")}})()},[]),s.useEffect(()=>{Object.keys(c).length>0&&$.current&&$.current.scrollIntoView({behavior:"smooth"})},[c]);const h=(t,n,r)=>{n(t.target.value),r.current&&(r.current.style.height="auto",r.current.style.height=`${r.current.scrollHeight}px`)};return e.jsx("div",{className:"flex flex-col items-start w-full justify-start min-h-screen  px-4",ref:$,children:e.jsxs("div",{className:"w-full  rounded-lg sm:p-8 p-1",children:[e.jsx("h1",{className:"text-3xl font-bold mb-2 text-white",children:"JobCard"}),e.jsx("p",{className:"text-white mb-6",children:"Hi-Tech Engineering company"}),e.jsxs("form",{className:" border-dashed border border-white lg:p-10 p-4 sm:p-6 md:p-8 rounded-lg",children:[e.jsxs("div",{className:"flex flex-col border border-dashed border-white px-8 py-10 rounded-lg lg:flex-row gap-8",children:[e.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-1",children:"Customer Name"}),e.jsx("input",{type:"text",placeholder:"Enter name",value:f,onChange:t=>N(t.target.value),className:"w-full px-4 py-2 border bg-[#282a2c] text-white border-[#022213] rounded-lg focus:outline-[#220211]",ref:Ze,onKeyDown:t=>l(t,I)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"}),c.cusName&&e.jsx("p",{className:"text-red-500 text-sm",children:c.cusName})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Customer address"}),e.jsx("textarea",{placeholder:"Enter address",value:j,onChange:t=>h(t,w,I),className:"w-full px-4 text-start lg:py-4 py-2 border bg-[#282a2c] text-white border-[#022213] rounded-lg focus:outline-[#220211] resize-none no-scrollbar",rows:"4",ref:I,onKeyDown:t=>l(t,oe)}),e.jsx(o,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"}),c.cusAddress&&e.jsx("p",{className:"text-red-500 text-sm",children:c.cusAddress})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Customer Phone"}),e.jsx("input",{type:"text",placeholder:"Enter phone",value:v,onChange:t=>y(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white   rounded-lg focus:outline-[#220211] ",ref:oe,onKeyDown:t=>l(t,_)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"}),c.cusPhone&&e.jsx("p",{className:"text-red-500 text-sm",children:c.cusPhone})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Works"}),e.jsx("textarea",{placeholder:"Enter Works",value:te,onChange:t=>h(t,M,_),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg  focus:outline-[#220211] resize-none no-scrollbar",rows:"4",ref:_,onKeyDown:t=>l(t,B)}),e.jsx(o,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Spares"}),e.jsx("textarea",{placeholder:"Enter Works",value:ae,onChange:t=>h(t,T,B),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213]  bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar",rows:"4",ref:B,onKeyDown:t=>l(t,U)}),e.jsx(o,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Industrial works"}),e.jsx("textarea",{placeholder:"Enter Works",value:se,onChange:t=>h(t,W,U),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar",rows:"4",ref:U,onKeyDown:t=>l(t,G)}),e.jsx(o,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Select Additional fittings"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"fan",name:"features",value:"fan",checked:i.includes("fan"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"fan",className:"text-white",children:"Fan"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"fan_cover",name:"features",value:"fan cover",checked:i.includes("fan cover"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"fan_cover",className:"text-white",children:"Fan cover"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"terminal",name:"features",value:"terminal",checked:i.includes("terminal"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"terminal",className:"text-white",children:"Terminal"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"terminal_box",name:"features",value:"terminal box",checked:i.includes("terminal box"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"terminal_box",className:"text-white",children:"Terminal Box"})]})]}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"pulli",name:"features",value:"pulli",checked:i.includes("pulli"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"pulli",className:"text-white",children:"Pulli"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"avr",name:"features",value:"AVR",checked:i.includes("AVR"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"avr",className:"text-white",children:"AVR"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"diode",name:"features",value:"diode",checked:i.includes("diode"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"diode",className:"text-white",children:"Diode"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"checkbox",id:"grill",name:"features",value:"grill",checked:i.includes("grill"),onChange:t=>d(t),className:"mr-2"}),e.jsx("label",{htmlFor:"grill",className:"text-white",children:"Grill"})]})]})]})]})]}),e.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col gap-y-1.5",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Other"}),e.jsx("textarea",{placeholder:"Enter Other",value:re,onChange:t=>h(t,O,G),className:"w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar",rows:"4",ref:G,onKeyDown:t=>l(t,ce)}),e.jsx(o,{className:"absolute right-3 top-11 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Make"}),e.jsx("input",{type:"text",placeholder:"Enter make",value:k,onChange:t=>C(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:ce,onKeyDown:t=>l(t,de)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full pt-1",children:[e.jsxs("label",{className:"flex items-center gap-5 text-white font-medium mb-2 ",children:["HP/KVA ",e.jsxs("div",{className:"flex items-center gap-2 justify-center",children:[e.jsxs("div",{className:"flex items-center justify-center ",children:[e.jsx("input",{type:"radio",id:"HP",name:"planType",value:"HP",checked:x==="HP",onChange:t=>p(t.target.value),className:"mr-2 "}),e.jsx("label",{htmlFor:"HP",className:"text-white",children:"HP"})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("input",{type:"radio",id:"KVA",name:"planType",value:"KVA",checked:x==="KVA",onChange:t=>p(t.target.value),className:"mr-2"}),e.jsx("label",{htmlFor:"KVA",className:"text-white",children:"KVA"})]})]})]}),e.jsx("input",{type:"number",placeholder:x==="HP"?"Enter HP":"Enter KVA",value:x==="HP"?R:S,onChange:t=>{x==="HP"?P(t.target.value):D(t.target.value)},className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 no-spinners",ref:de,onKeyDown:t=>l(t,ie)}),e.jsx(o,{className:"absolute right-3 top-12 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"RPM"}),e.jsxs("select",{value:L,onChange:t=>K(t.target.value),className:"w-full px-4 py-2 border border-[#022213] rounded-lg bg-[#282a2c] text-white focus:outline-gray-300",ref:ie,onKeyDown:t=>l(t,ue),children:[e.jsx("option",{value:"",children:"Select RPM"})," ",e.jsx("option",{value:"710",children:"710 RPM"}),e.jsx("option",{value:"960",children:"960 RPM"}),e.jsx("option",{value:"1440",children:"1440 RPM"}),e.jsx("option",{value:"2800",children:"2800 RPM"})]}),c.rpm&&e.jsx("p",{className:"text-red-500 text-sm",children:c.rpm})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Type"}),e.jsx("input",{type:"text",placeholder:"Enter Type",value:Q,onChange:t=>E(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:ue,onKeyDown:t=>l(t,me)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Frame"}),e.jsx("input",{type:"text",placeholder:"Enter Frame",value:X,onChange:t=>A(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:me,onKeyDown:t=>l(t,xe)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Sr.no"}),e.jsx("input",{type:"text",placeholder:"Enter Sr.no",value:Y,onChange:t=>F(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:xe,onKeyDown:t=>l(t,he)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"}),c.srNo&&e.jsx("p",{className:"text-red-500 text-sm",children:c.srNo})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Dealer Name"}),e.jsx("input",{type:"text",placeholder:"Enter Dealer name",value:Z,onChange:t=>H(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:he,onKeyDown:t=>l(t,fe)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsxs("div",{className:"relative w-full mt-2.5",children:[e.jsx("label",{className:"block text-white font-medium mb-2",children:"Dealer Number"}),e.jsx("input",{type:"text",placeholder:"Enter Dealer Number",value:ee,onChange:t=>V(t.target.value),className:"w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300",ref:fe,onKeyDown:t=>l(t,pe)}),e.jsx(o,{className:"absolute right-3 top-10 text-[#d65f63] cursor-pointer"})]}),e.jsx("div",{className:"text-lg pt-4",children:e.jsxs("label",{className:"flex items-center text-white",children:["Does the product have a warranty?",e.jsx("input",{type:"checkbox",checked:le,onChange:t=>J(t.target.checked),className:"hidden peer",ref:pe}),e.jsx("span",{className:"w-6 h-6 ml-2 border-2 border-white rounded-md cursor-pointer peer-checked:before:content-['✅'] peer-checked:before:text-[#022213] flex items-center justify-center transition-all duration-200"})]})})]})]}),e.jsxs("div",{className:"flex items-center lg:justify-end justify-center space-x-4 mt-6",children:[e.jsx("button",{type:"button",className:"sm:px-12 px-8 py-1 sm:py-2 border border-[#d65f63] rounded-lg text-[#d65f63] font-medium hover:bg-[#d65f63] transition duration-300 hover:text-white",onClick:et,children:"Clear"}),e.jsx("button",{type:"submit",onClick:t=>at(t),className:"sm:px-12 px-8 py-1 sm:py-2 bg-[#d65f63] hover:bg-[#3890d8] transition duration-300 text-white rounded-lg ",children:"Submit"})]})]})]})})};export{ot as default};
