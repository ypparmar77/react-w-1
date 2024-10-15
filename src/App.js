
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
//  import Froms from "./froms.js";
// import ParentComponent from "./use_callback/ParentComponent";
// import UseMemoComponent from "./UseMemoComponent";jo
// import ManageCount  from './UseReducerComponent';
// import UseEffectHookComponent from './UseEffectHookComponent';
// import UseRefHookComponent from './UseRefHookComponent';

import RouterComponent from "./router/RouterComponent";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Page1Component from "./router/Page1Component";
import Page2Component from "./router/Page2Component";
import DashboardComponent from "./router/DashboardComponent";



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
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    {/* <Froms/> */}
    {/* <ParentComponent/> */}
    {/* <UseMemoComponent/> */}
    {/* <ManageCount/> */}
    {/* <UseRefHookComponent/> */}
    {/* <UseEffectHookComponent/> */}
   
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterComponent />}>
            <Route index element={<DashboardComponent />} />
            <Route path="/page-1" element={<Page1Component />} />
            <Route path="/page-2" element={<Page2Component />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}
export default App;




