"use strict";(self.webpackChunkDraftDex=self.webpackChunkDraftDex||[]).push([[5275],{5275:(E,p,s)=>{s.r(p),s.d(p,{ProductoverviewModule:()=>w});var c=s(177),u=s(4341),v=s(4007),e=s(4438),b=s(7480),g=s(1141),F=s(563),m=s(4945);const l=i=>({"border-blue-500 border-2 text-blue-500":i}),f=(i,a)=>({"pi-heart text-600":i,"pi-heart-fill text-orange-500":a}),k=i=>({"border-primary":i});function h(i,a){if(1&i){const o=e.RV6();e.j41(0,"img",70),e.bIt("click",function(){const t=e.eBV(o).index,r=e.XpG();return e.Njj(r.selectedImageIndex=t)}),e.k0s()}if(2&i){const o=a.$implicit,n=a.index,t=e.XpG();e.Mz_("src","assets/demo/images/ecommerce/productoverview/",o,"",e.B4B),e.Y8G("ngClass",e.eq3(3,k,t.selectedImageIndex===n))}}let j=(()=>{class i{constructor(){this.color="bluegray",this.size="M",this.liked=!1,this.images=[],this.selectedImageIndex=0,this.quantity=1}ngOnInit(){this.images=["product-overview-3-1.png","product-overview-3-2.png","product-overview-3-3.png","product-overview-3-4.png"]}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ng-component"]],decls:170,vars:31,consts:[[1,"card"],[1,"grid","mb-7"],[1,"col-12","lg:col-7"],[1,"flex"],[1,"flex","flex-column","w-2","justify-content-between",2,"row-gap","1rem"],["class","w-full cursor-pointer border-2 border-transparent transition-colors transition-duration-150 border-round",3,"ngClass","src","click",4,"ngFor","ngForOf"],[1,"pl-3","w-10","flex"],[1,"w-full","border-2","border-transparent","border-round",3,"src"],[1,"col-12","lg:col-4","py-3","lg:pl-6"],[1,"flex","align-items-center","text-xl","font-medium","text-900","mb-4"],[1,"flex","align-items-center","justify-content-between","mb-5"],[1,"text-900","font-medium","text-3xl","block"],[1,"flex","align-items-center"],[1,"mr-3"],[1,"pi","pi-star-fill","text-yellow-500","mr-1"],[1,"pi","pi-star","text-600","mr-1"],[1,"text-sm"],[1,"text-900","mr-1"],[1,"text-500"],[1,"font-bold","text-900","mb-3"],[1,"flex","align-items-center","mb-5"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-bluegray-500","mr-3","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-green-500","mr-3","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-blue-500","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"mb-3","flex","align-items-center","justify-content-between"],[1,"font-bold","text-900"],["tabindex","0",1,"cursor-pointer","text-600","text-sm","flex","align-items-center"],[1,"ml-1","pi","pi-angle-right"],[1,"grid","grid-nogutter","align-items-center","mb-5"],[1,"col","h-3rem","border-1","border-300","text-900","inline-flex","justify-content-center","align-items-center","flex-shrink-0","border-round","mr-3","cursor-pointer","hover:surface-100","transition-duration-150","transition-colors",3,"click","ngClass"],[1,"col","h-3rem","border-1","border-300","text-900","inline-flex","justify-content-center","align-items-center","flex-shrink-0","border-round","cursor-pointer","hover:surface-100","transition-duration-150","transition-colors",3,"click","ngClass"],[1,"flex","flex-column","sm:flex-row","sm:align-items-center","sm:justify-content-between"],["buttonLayout","horizontal","spinnerMode","horizontal","inputStyleClass","w-3rem text-center","decrementButtonClass","p-button-text","incrementButtonClass","p-button-text","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"ngModelChange","showButtons","min","ngModel"],[1,"flex","align-items-center","flex-1","mt-3","sm:mt-0","ml-0","sm:ml-5"],["pButton","","pRipple","","label","Add to Cart",1,"flex-1","mr-5"],[1,"pi","text-2xl","cursor-pointer",3,"click","ngClass"],["header","Details"],[1,"text-900","font-bold","text-3xl","mb-4","mt-2"],[1,"line-height-3","text-600","p-0","mx-0","mt-0","mb-4"],[1,"grid"],[1,"col-12","lg:col-4"],[1,"text-900","block","font-medium","mb-3","font-bold"],[1,"py-0","pl-3","m-0","text-600","mb-3"],[1,"mb-2"],[1,"text-900","block","mb-3","font-bold"],[1,"list-none","p-0","m-0","text-600","mb-4","text-600"],[1,"mb-3"],[1,"font-semibold"],[1,"p-0","m-0","flex","flex-wrap","flex-column","xl:flex-row","text-600"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mr-2","mb-3"],[1,"pi","pi-sun","mr-2","text-900"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mb-3"],[1,"pi","pi-times-circle","mr-2","text-900"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mb-3","mr-2"],[1,"pi","pi-sliders-h","mr-2","text-900"],[1,"pi","pi-minus-circle","mr-2","text-900"],["header","Reviews"],[1,"list-none","p-0","m-0"],[1,"pb-5","border-bottom-1","surface-border"],[1,"pi","pi-star-fill","text-gray-500"],[1,"text-900","font-bold","text-xl","my-3"],[1,"mx-0","mt-0","mb-3","text-600","line-height-3"],[1,"font-medium"],[1,"py-5","border-bottom-1","surface-border"],[1,"pi","pi-star-fill","text-yellow-500"],["header","Shipping and Returns"],[1,"col-12","md:col-6"],[1,"text-900","block","font-bold","mb-3","font-bold"],[1,"text-900","block","font-bold","mb-3"],[1,"line-height-3","text-600","p-0","m-0"],[1,"w-full","cursor-pointer","border-2","border-transparent","transition-colors","transition-duration-150","border-round",3,"click","ngClass","src"]],template:function(n,t){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.DNE(5,h,1,5,"img",5),e.k0s(),e.j41(6,"div",6),e.nrm(7,"img",7),e.k0s()()(),e.j41(8,"div",8)(9,"div",9),e.EFF(10,"Product Title Placeholder"),e.k0s(),e.j41(11,"div",10)(12,"span",11),e.EFF(13,"$120"),e.k0s(),e.j41(14,"div",12)(15,"span",13),e.nrm(16,"i",14)(17,"i",14)(18,"i",14)(19,"i",14)(20,"i",15),e.k0s(),e.j41(21,"span",16)(22,"b",17),e.EFF(23,"24"),e.k0s(),e.nrm(24,"span",18),e.EFF(25,"reviews"),e.k0s()()(),e.j41(26,"div",19),e.EFF(27,"Color"),e.k0s(),e.j41(28,"div",20)(29,"div",21),e.bIt("click",function(){return t.color="bluegray"}),e.k0s(),e.j41(30,"div",22),e.bIt("click",function(){return t.color="green"}),e.k0s(),e.j41(31,"div",23),e.bIt("click",function(){return t.color="blue"}),e.k0s()(),e.j41(32,"div",24)(33,"span",25),e.EFF(34,"Size"),e.k0s(),e.j41(35,"a",26),e.EFF(36,"Size Guide "),e.nrm(37,"i",27),e.k0s()(),e.j41(38,"div",28)(39,"div",29),e.bIt("click",function(){return t.size="XS"}),e.EFF(40,"XS"),e.k0s(),e.j41(41,"div",29),e.bIt("click",function(){return t.size="S"}),e.EFF(42,"S"),e.k0s(),e.j41(43,"div",29),e.bIt("click",function(){return t.size="M"}),e.EFF(44,"M"),e.k0s(),e.j41(45,"div",29),e.bIt("click",function(){return t.size="L"}),e.EFF(46,"L"),e.k0s(),e.j41(47,"div",30),e.bIt("click",function(){return t.size="XL"}),e.EFF(48,"XL"),e.k0s()(),e.j41(49,"div",19),e.EFF(50,"Quantity"),e.k0s(),e.j41(51,"div",31)(52,"p-inputNumber",32),e.mxI("ngModelChange",function(d){return e.DH7(t.quantity,d)||(t.quantity=d),d}),e.k0s(),e.j41(53,"div",33),e.nrm(54,"button",34),e.j41(55,"i",35),e.bIt("click",function(){return t.liked=!t.liked}),e.k0s()()()()(),e.j41(56,"p-tabView")(57,"p-tabPanel",36)(58,"div",37),e.EFF(59,"Product Details"),e.k0s(),e.j41(60,"p",38),e.EFF(61,"Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus."),e.k0s(),e.j41(62,"div",39)(63,"div",40)(64,"span",41),e.EFF(65,"Highlights"),e.k0s(),e.j41(66,"ul",42)(67,"li",43),e.EFF(68,"Vulputate sapien nec."),e.k0s(),e.j41(69,"li",43),e.EFF(70,"Purus gravida quis blandit."),e.k0s(),e.j41(71,"li",43),e.EFF(72,"Nisi quis eleifend quam adipiscing."),e.k0s(),e.j41(73,"li"),e.EFF(74,"Imperdiet proin fermentum."),e.k0s()()(),e.j41(75,"div",40)(76,"span",44),e.EFF(77,"Size and Fit"),e.k0s(),e.j41(78,"ul",45)(79,"li",46)(80,"span",47),e.EFF(81,"Leo vel:"),e.k0s(),e.EFF(82," Egestas congue."),e.k0s(),e.j41(83,"li",46)(84,"span",47),e.EFF(85,"Sociis natoque:"),e.k0s(),e.EFF(86," Parturient montes nascetur."),e.k0s(),e.j41(87,"li")(88,"span",47),e.EFF(89,"Suspendisse in:"),e.k0s(),e.EFF(90," Purus sit amet volutpat."),e.k0s()()(),e.j41(91,"div",40)(92,"span",44),e.EFF(93,"Material & Care"),e.k0s(),e.j41(94,"ul",48)(95,"li",49),e.nrm(96,"i",50),e.j41(97,"span"),e.EFF(98,"Not dryer safe"),e.k0s()(),e.j41(99,"li",51),e.nrm(100,"i",52),e.j41(101,"span"),e.EFF(102,"No chemical wash"),e.k0s()(),e.j41(103,"li",53),e.nrm(104,"i",54),e.j41(105,"span"),e.EFF(106,"Iron medium heat"),e.k0s()(),e.j41(107,"li",51),e.nrm(108,"i",55),e.j41(109,"span"),e.EFF(110,"Dry flat"),e.k0s()()()()()(),e.j41(111,"p-tabPanel",56)(112,"div",37),e.EFF(113,"Customer Reviews"),e.k0s(),e.j41(114,"ul",57)(115,"li",58)(116,"span"),e.nrm(117,"i",14)(118,"i",14)(119,"i",14)(120,"i",14)(121,"i",59),e.k0s(),e.j41(122,"div",60),e.EFF(123,"Absolute Perfection!"),e.k0s(),e.j41(124,"p",61),e.EFF(125,"Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non."),e.k0s(),e.j41(126,"span",62),e.EFF(127,"Darlene Robertson, 2 days ago"),e.k0s()(),e.j41(128,"li",63)(129,"span"),e.nrm(130,"i",14)(131,"i",14)(132,"i",14)(133,"i",14)(134,"i",64),e.k0s(),e.j41(135,"div",60),e.EFF(136,"Classy"),e.k0s(),e.j41(137,"p",61),e.EFF(138,"Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum."),e.k0s(),e.j41(139,"span",62),e.EFF(140,"Kristin Watson, 2 days ago"),e.k0s()()()(),e.j41(141,"p-tabPanel",65)(142,"div",37),e.EFF(143,"Shipping Placeholder"),e.k0s(),e.j41(144,"p",38),e.EFF(145,"Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus. Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum."),e.k0s(),e.j41(146,"div",39)(147,"div",66)(148,"span",67),e.EFF(149,"Shipping Costs"),e.k0s(),e.j41(150,"ul",42)(151,"li",43),e.EFF(152,"Japan - JPY 2,500."),e.k0s(),e.j41(153,"li",43),e.EFF(154,"Europe - EUR 10"),e.k0s(),e.j41(155,"li",43),e.EFF(156,"Switzerland - CHF 10"),e.k0s(),e.j41(157,"li",43),e.EFF(158,"Canada - CAD 25"),e.k0s(),e.j41(159,"li",43),e.EFF(160,"USA - USD 20"),e.k0s(),e.j41(161,"li",43),e.EFF(162,"Australia - AUD 30"),e.k0s(),e.j41(163,"li",43),e.EFF(164,"United Kingdom - GBP 10"),e.k0s()()(),e.j41(165,"div",66)(166,"span",68),e.EFF(167,"Return Policy"),e.k0s(),e.j41(168,"p",69),e.EFF(169,"Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. "),e.k0s()()()()()()),2&n&&(e.R7$(5),e.Y8G("ngForOf",t.images),e.R7$(2),e.Mz_("src","assets/demo/images/ecommerce/productoverview/",t.images[t.selectedImageIndex],"",e.B4B),e.R7$(22),e.xc7("box-shadow","bluegray"===t.color?"0 0 0 0.2rem var(--bluegray-500)":null),e.R7$(),e.xc7("box-shadow","green"===t.color?"0 0 0 0.2rem var(--green-500)":null),e.R7$(),e.xc7("box-shadow","blue"===t.color?"0 0 0 0.2rem var(--blue-500)":null),e.R7$(8),e.Y8G("ngClass",e.eq3(18,l,"XS"===t.size)),e.R7$(2),e.Y8G("ngClass",e.eq3(20,l,"S"===t.size)),e.R7$(2),e.Y8G("ngClass",e.eq3(22,l,"M"===t.size)),e.R7$(2),e.Y8G("ngClass",e.eq3(24,l,"L"===t.size)),e.R7$(2),e.Y8G("ngClass",e.eq3(26,l,"XL"===t.size)),e.R7$(5),e.Y8G("showButtons",!0)("min",0),e.R50("ngModel",t.quantity),e.R7$(3),e.Y8G("ngClass",e.l_i(28,f,!t.liked,t.liked)))},dependencies:[c.YU,c.Sq,u.BC,u.vS,b.YI,g._f,F.n,m.JQ,m.Kp],encapsulation:2})}return i})(),x=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.$C({type:i});static#i=this.\u0275inj=e.G2t({imports:[v.iI.forChild([{path:"",component:j}]),v.iI]})}return i})(),w=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.$C({type:i});static#i=this.\u0275inj=e.G2t({imports:[c.MD,u.YN,b.O3,g.tm,F.Z,m.fd,x]})}return i})()}}]);