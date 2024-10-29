
// import Cls_com1 from "./Class_Components/Components1";
// import OneFun from "./compontents_function/one-function.js";
// import OneClass from "./components_class/oneclass";
// import Handling_Forms from "./Forms/Handling_Forms";
// import Useeffect from "./hook_works/Useeffect";
// import UseRef from "./hook_works/useRef";
// import Usestate_pro from "./hook_works/Usestate_pro";
// import Usestate from "./hook_works/usestate";
// import Props_validation1 from "./props_work/props_validation1";
// import Filter_List from "./React Lists/Filter_List";
// import Lists from "./React Lists/Lists";
// import Event_work from "./React_events/Events_w";
// import FormValidationDemo from "./react_forms/forms_work1";
// import R_style from "./react_style/r_style";
// import Parent from "./lifting_work/ParentComponent";
// import ParentComponent from "./props_work/props_par_chlid/ParentComponent.js";
// import Frome_work from "./Forms/Frome_work";
// import CounterComponent from "./hook_works/custom_hook/CounterComponent";
// import ParentComponent from "./hook_works/forwarding_ref/ParentComponent";
// import Froms from "./froms.js";
// import ParentComponent from "./use_callback/ParentComponent";
// import UseMemoComponent from "./UseMemoComponent";jo
// import ManageCount  from './UseReducerComponent';
// import UseEffectHookComponent from './UseEffectHookComponent';
// import UseRefHookComponent from './UseRefHookComponent';
// import { BrowserRouter , Routes , Route } from "react-router-dom";
// import About from "./React_router/About";
// import Help from "./React_router/Help";
// import Home from "./React_router/Home";
// import Nevbar from "./React_router/Nevbar";

import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Nevbar from './router_work/Nevbar';
import About from './router_work/About';
import Home from './router_work/Home';
import Help from './router_work/Help';
import Email from './router_work/Email';
import Api_work from './router_work/post_work/Api_work';
import Post_Work from './router_work/post_work/Post_api_work';


function App() {
  return (
    <>
    {/* <Cls_com1/> */}
    {/* <OneFun/> */}
    {/* <OneClass/> */}
    {/* <OneClass/> */}
    {/* <Handling_Forms/> */}
    {/* <Useeffect/> */}
    {/* <UseRef/> */}
    {/* <Usestate_pro/> */}
    {/* <Usestate/> */}
    {/* <Props_validation1/> */}
    {/* <Filter_List/> */}
    {/* <Lists/> */}
    {/* <Event_work/> */}
    {/* <FormValidationDemo/> */}
    {/* <R_style/> */}
    {/* <ParentComponent/> */}
    {/* <Parent/> */}
    {/* <Frome_work/> */}
    {/* <ParentComponent/> */}
    {/* <CounterComponent/> */}
    {/* <Froms/> */}
    {/* <ParentComponent/> */}
    {/* <UseMemoComponent/> */}
    {/* <ManageCount/> */}
    {/* <UseRefHookComponent/> */}
    {/* <UseEffectHookComponent/> */}

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Nevbar/>}>
    <Route index  element={<About/>} />
    <Route path='/Help'  element={<Help/>} />
    <Route path='/Home'  element={<Home/>} />
    <Route path='/Email' element={<Email/>}/>
    <Route path='/Api_work' element={<Api_work/>} />
    <Route path='/Api_work/Post_Work/:id' element={<Post_Work/>} />
    </Route>
   </Routes> 
   </BrowserRouter>

    </>
  )
}
export default App;




