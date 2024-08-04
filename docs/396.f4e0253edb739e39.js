"use strict";(self.webpackChunkDraftDex=self.webpackChunkDraftDex||[]).push([[396],{396:($,d,a)=>{a.r(d),a.d(d,{BankingDashboardModule:()=>B});var l=a(177),p=a(1141),c=a(4582),u=a(7480),g=a(8157),f=a(563),v=a(935),x=a(8542),b=a(4007),t=a(4438),h=a(7693),k=a(5779);function j(e,r){1&e&&(t.j41(0,"tr")(1,"th",73),t.EFF(2,"Name"),t.k0s(),t.j41(3,"th",73),t.EFF(4,"Amount"),t.k0s(),t.j41(5,"th",73),t.EFF(6,"Date"),t.k0s(),t.j41(7,"th",73),t.EFF(8,"Status"),t.k0s()())}function y(e,r){1&e&&t.nrm(0,"p-tag",77)}function E(e,r){1&e&&t.nrm(0,"p-tag",78)}function w(e,r){if(1&e&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.nI1(5,"currency"),t.k0s(),t.j41(6,"td"),t.EFF(7),t.k0s(),t.j41(8,"td",74),t.DNE(9,y,1,0,"p-tag",75)(10,E,1,0,"p-tag",76),t.k0s()()),2&e){const n=r.$implicit;t.R7$(2),t.JRh(n.name),t.R7$(2),t.JRh(t.bMT(5,5,n.amount)),t.R7$(3),t.JRh(n.date),t.R7$(2),t.Y8G("ngIf",n.paid),t.R7$(),t.Y8G("ngIf",!n.paid)}}let C=(()=>{class e{constructor(n){this.layoutService=n,this.payments=[],this.subscription=this.layoutService.configUpdate$.subscribe(i=>{this.initChart()})}ngOnInit(){this.initChart(),this.payments=[{name:"Electric Bill",amount:75.6,paid:!0,date:"06/04/2022"},{name:"Water Bill",amount:45.5,paid:!0,date:"07/04/2022"},{name:"Gas Bill",amount:45.2,paid:!1,date:"12/04/2022"},{name:"Internet Bill",amount:25.9,paid:!0,date:"17/04/2022"},{name:"Streaming",amount:40.9,paid:!1,date:"20/04/2022"}]}initChart(){const n=getComputedStyle(document.documentElement),i=n.getPropertyValue("--text-color"),s=n.getPropertyValue("--text-color-secondary"),F=n.getPropertyValue("--surface-border");this.chartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Income",data:[6500,5900,8e3,8100,5600,5500,4e3],fill:!1,tension:.4,borderColor:n.getPropertyValue("--green-500")},{label:"Expenses",data:[1200,5100,6200,3300,2100,6200,4500],fill:!0,borderColor:"#6366f1",tension:.4,backgroundColor:"rgba(99,102,220,0.2)"}]},this.chartOptions={animation:{duration:0},plugins:{legend:{labels:{color:i}},tooltip:{callbacks:{label:function(m){let o=m.dataset.label||"";return o&&(o+=": "),null!==m.parsed.y&&(o+=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(m.parsed.y)),o}}}},scales:{x:{ticks:{color:s},grid:{color:F}},y:{ticks:{color:s},grid:{color:F}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.rXU(h.Y))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["ng-component"]],decls:160,vars:3,consts:[[1,"grid"],[1,"col-12"],[1,"flex","flex-column","sm:flex-row","align-items-center","gap-4"],[1,"flex","flex-column","sm:flex-row","align-items-center","gap-3"],["src","assets/demo/images/avatar/circle/avatar-f-1.png",1,"w-4rem","h-4rem","flex-shrink-0"],[1,"flex","flex-column","align-items-center","sm:align-items-start"],[1,"text-900","font-bold","text-4xl"],[1,"text-600","m-0"],[1,"flex","gap-2","sm:ml-auto"],["type","button","pButton","","pTooltip","Exchange","tooltipPosition","bottom","icon","pi pi-arrows-h",1,"p-button-rounded","p-button-outlined"],["type","button","pButton","","pTooltip","Withdraw","tooltipPosition","bottom","icon","pi pi-download",1,"p-button-rounded","p-button-outlined"],["type","button","pButton","","pTooltip","Send","tooltipPosition","bottom","icon","pi pi-send",1,"p-button-rounded"],[1,"col-12","md:col-6","xl:col-4"],[1,"card","h-full","relative","overflow-hidden"],["id","visual","viewBox","0 0 900 600","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","preserveAspectRatio","none",1,"absolute","left-0","top-0","h-full","w-full","z-1"],["x","0","y","0","width","900","height","600","fill","var(--primary-600)"],["d","M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z","fill","var(--primary-500)","stroke-linecap","round","stroke-linejoin","miter"],[1,"z-2","relative","text-white"],[1,"text-xl","font-semibold","mb-3"],[1,"mb-1","font-semibold"],[1,"text-2xl","mb-5","font-bold"],[1,"flex","align-items-center","justify-content-between"],[1,"text-lg"],[1,"font-medium","text-lg"],[1,"card","h-full"],[1,"flex","align-items-center","justify-content-between","mb-3"],[1,"text-900","text-xl","font-semibold"],["src","assets/demo/images/banking/visa.svg",1,"h-1rem"],[1,"text-600","mb-1","font-semibold"],[1,"text-900","text-2xl","text-primary","mb-5","font-bold"],[1,"text-900","text-lg"],[1,"text-600","font-medium","text-lg"],[1,"col-12","md:col-6","xl:col-2"],[1,"card","h-full","flex","flex-column","align-items-center","justify-content-center"],[1,"pi","pi-dollar","text-primary","text-4xl","mb-4"],[1,"text-900","text-lg","mb-4","font-medium"],[1,"text-900","text-2xl","text-primary","font-bold"],[1,"pi","pi-euro","text-primary","text-4xl","mb-4"],[1,"col-12","xl:col-4"],[1,"card"],[1,"text-900","text-xl","font-semibold","mb-3"],[1,"list-none","p-0","m-0"],[1,"flex","align-items-center","p-3","mb-3","border-bottom-1","surface-border"],["src","assets/demo/images/banking/airbnb.png",1,"w-3rem","flex-shrink-0","mr-3"],[1,"flex","flex-column"],[1,"text-xl","font-medium","text-900","mb-1"],[1,"text-xl","text-900","ml-auto","font-semibold"],["src","assets/demo/images/banking/amazon.png",1,"w-3rem","flex-shrink-0","mr-3"],["src","assets/demo/images/banking/nike.svg",1,"w-3rem","flex-shrink-0","mr-3","border-circle"],["src","assets/demo/images/banking/starbucks.svg",1,"w-3rem","flex-shrink-0","mr-3"],[1,"flex","align-items-center","p-3","mb-3"],[1,"col-12","xl:col-8"],["type","line",3,"data","options"],[1,"col-12","lg:col-6"],["pButton","","pRipple","","type","button","icon","pi pi-plus","label","Add New",1,"p-button-outlined","p-button-sm"],[1,"flex","flex-column","row-gap-3"],[1,"flex","flex-column","lg:flex-row","gap-3"],[1,"w-full","lg:w-6","p-3","border-1","border-round","surface-border","flex","align-items-center","hover:surface-100","cursor-pointer","border-radius"],["src","assets/demo/images/avatar/circle/avatar-f-1.png",1,"w-2rem","flex-shrink-0","mr-2"],[1,"text-900","text-lg","font-medium"],["src","assets/demo/images/avatar/circle/avatar-f-2.png",1,"w-2rem","flex-shrink-0","mr-2"],["src","assets/demo/images/avatar/circle/avatar-m-1.png",1,"w-2rem","flex-shrink-0","mr-2"],["src","assets/demo/images/avatar/circle/avatar-f-3.png",1,"w-2rem","flex-shrink-0","mr-2"],["src","assets/demo/images/avatar/circle/avatar-m-2.png",1,"w-2rem","flex-shrink-0","mr-2"],[1,"w-full","lg:w-6","p-3","border-1","border-round","surface-border","flex","align-items-center","hover:surface-100","cursor-pointer"],["src","assets/demo/images/avatar/circle/avatar-f-4.png",1,"w-2rem","flex-shrink-0","mr-2"],[1,"flex","flex-column","sm:flex-row","gap-3","mt-5"],[1,"flex-1","p-fluid"],["type","text","mode","currency","currency","USD","locale","en-US"],["type","button","pButton","","label","Send"],["responsiveLayout","scroll",3,"value"],["pTemplate","header"],["pTemplate","body"],[1,"white-space-nowrap","w-4"],[1,"text-right"],["value","COMPLETED","severity","success",4,"ngIf"],["value","PENDING","severity","warning",4,"ngIf"],["value","COMPLETED","severity","success"],["value","PENDING","severity","warning"]],template:function(i,s){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.nrm(4,"img",4),t.j41(5,"div",5)(6,"span",6),t.EFF(7,"Welcome Isabel"),t.k0s(),t.j41(8,"p",7),t.EFF(9,"Your last login was on 04/05/2022 at 10:24 am"),t.k0s()()(),t.j41(10,"div",8),t.nrm(11,"button",9)(12,"button",10)(13,"button",11),t.k0s()()(),t.j41(14,"div",12)(15,"div",13),t.qSk(),t.j41(16,"svg",14),t.nrm(17,"rect",15)(18,"path",16),t.k0s(),t.joV(),t.j41(19,"div",17)(20,"div",18),t.EFF(21,"Debit Card"),t.k0s(),t.j41(22,"div",19),t.EFF(23,"Balance"),t.k0s(),t.j41(24,"div",20),t.EFF(25,"$2.000,00"),t.k0s(),t.j41(26,"div",21)(27,"span",22),t.EFF(28,"**** **** **** 1412"),t.k0s(),t.j41(29,"span",23),t.EFF(30,"12/26"),t.k0s()()()()(),t.j41(31,"div",12)(32,"div",24)(33,"div",25)(34,"div",26),t.EFF(35,"Credit Card"),t.k0s(),t.nrm(36,"img",27),t.k0s(),t.j41(37,"div",28),t.EFF(38,"Debt"),t.k0s(),t.j41(39,"div",29),t.EFF(40,"$1.500,00"),t.k0s(),t.j41(41,"div",21)(42,"span",30),t.EFF(43,"**** **** **** 1231"),t.k0s(),t.j41(44,"span",31),t.EFF(45,"12/24"),t.k0s()()()(),t.j41(46,"div",32)(47,"div",33),t.nrm(48,"i",34),t.j41(49,"span",35),t.EFF(50,"Primary"),t.k0s(),t.j41(51,"span",36),t.EFF(52,"$24,345.21"),t.k0s()()(),t.j41(53,"div",32)(54,"div",33),t.nrm(55,"i",37),t.j41(56,"span",35),t.EFF(57,"Currency"),t.k0s(),t.j41(58,"span",36),t.EFF(59,"$10,416.11"),t.k0s()()(),t.j41(60,"div",38)(61,"div",39)(62,"div",40),t.EFF(63,"Recent Transactions"),t.k0s(),t.j41(64,"ul",41)(65,"li",42),t.nrm(66,"img",43),t.j41(67,"div",44)(68,"span",45),t.EFF(69,"Airbnb"),t.k0s(),t.j41(70,"span"),t.EFF(71,"05/23/2022"),t.k0s()(),t.j41(72,"span",46),t.EFF(73,"$250.00"),t.k0s()(),t.j41(74,"li",42),t.nrm(75,"img",47),t.j41(76,"div",44)(77,"span",45),t.EFF(78,"Amazon"),t.k0s(),t.j41(79,"span"),t.EFF(80,"04/12/2022"),t.k0s()(),t.j41(81,"span",46),t.EFF(82,"$50.00"),t.k0s()(),t.j41(83,"li",42),t.nrm(84,"img",48),t.j41(85,"div",44)(86,"span",45),t.EFF(87,"Nike Store"),t.k0s(),t.j41(88,"span"),t.EFF(89,"04/29/2022"),t.k0s()(),t.j41(90,"span",46),t.EFF(91,"$60.00"),t.k0s()(),t.j41(92,"li",42),t.nrm(93,"img",49),t.j41(94,"div",44)(95,"span",45),t.EFF(96,"Starbucks"),t.k0s(),t.j41(97,"span"),t.EFF(98,"04/15/2022"),t.k0s()(),t.j41(99,"span",46),t.EFF(100,"$15.24"),t.k0s()(),t.j41(101,"li",50),t.nrm(102,"img",47),t.j41(103,"div",44)(104,"span",45),t.EFF(105,"Amazon"),t.k0s(),t.j41(106,"span"),t.EFF(107,"04/12/2022"),t.k0s()(),t.j41(108,"span",46),t.EFF(109,"$12.50"),t.k0s()()()()(),t.j41(110,"div",51)(111,"div",39)(112,"div",40),t.EFF(113,"Overview"),t.k0s(),t.nrm(114,"p-chart",52),t.k0s()(),t.j41(115,"div",53)(116,"div",24)(117,"div",25)(118,"div",26),t.EFF(119,"Recent Transactions"),t.k0s(),t.nrm(120,"button",54),t.k0s(),t.j41(121,"div",55)(122,"div",56)(123,"div",57),t.nrm(124,"img",58),t.j41(125,"span",59),t.EFF(126,"Aisha Williams"),t.k0s()(),t.j41(127,"div",57),t.nrm(128,"img",60),t.j41(129,"span",59),t.EFF(130,"Jane Watson"),t.k0s()()(),t.j41(131,"div",56)(132,"div",57),t.nrm(133,"img",61),t.j41(134,"span",59),t.EFF(135,"Brad Curry"),t.k0s()(),t.j41(136,"div",57),t.nrm(137,"img",62),t.j41(138,"span",59),t.EFF(139,"Claire Dunphy"),t.k0s()()(),t.j41(140,"div",56)(141,"div",57),t.nrm(142,"img",63),t.j41(143,"span",59),t.EFF(144,"Kevin James"),t.k0s()(),t.j41(145,"div",64),t.nrm(146,"img",65),t.j41(147,"span",59),t.EFF(148,"Sarah McTamish"),t.k0s()()()(),t.j41(149,"div",66)(150,"div",67),t.nrm(151,"p-inputNumber",68),t.k0s(),t.nrm(152,"button",69),t.k0s()()(),t.j41(153,"div",53)(154,"div",39)(155,"div",40),t.EFF(156,"Monthly Payments"),t.k0s(),t.j41(157,"p-table",70),t.DNE(158,j,9,0,"ng-template",71)(159,w,11,7,"ng-template",72),t.k0s()()()()),2&i&&(t.R7$(114),t.Y8G("data",s.chartData)("options",s.chartOptions),t.R7$(43),t.Y8G("value",s.payments))},dependencies:[l.bT,p._f,k.Ei,f.n,v.v,x.m,c.XI,u.YI,g.X,l.oe],encapsulation:2})}return e})(),D=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[b.iI.forChild([{path:"",component:C}]),b.iI]})}return e})(),B=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[l.MD,p.tm,f.Z,v.$,x.S,c.bG,u.O3,g.F,D]})}return e})()}}]);