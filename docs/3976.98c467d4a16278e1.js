"use strict";(self.webpackChunkDraftDex=self.webpackChunkDraftDex||[]).push([[3976],{3976:(L,h,r)=>{r.r(h),r.d(h,{FileAppModule:()=>D});var d=r(177),y=r(4341),u=r(1141),f=r(563),c=r(4582),v=r(5144),x=r(320),F=r(8157),t=r(4438),C=r(1626);let b=(()=>{class n{constructor(e){this.http=e}getFiles(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.files).then(e=>e)}getMetrics(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.metrics).then(e=>e)}getFoldersSmall(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.folders_small).then(e=>e)}getFoldersLarge(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.folders_large).then(e=>e)}static#t=this.\u0275fac=function(o){return new(o||n)(t.KVO(C.Qq))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac})}return n})();var _=r(9998),j=r(4007),R=r(7693),m=r(5779);const E=["buttonEl"];function k(n,s){1&n&&(t.j41(0,"div",9),t.nrm(1,"i",10),t.j41(2,"span",11),t.EFF(3,"Upload Files"),t.k0s(),t.j41(4,"span",12),t.EFF(5,"Drop or select files"),t.k0s()())}function U(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",15),t.bIt("mouseenter",function(){const i=t.eBV(e).$implicit,l=t.XpG(3);return t.Njj(l.onImageMouseOver(i))})("mouseleave",function(){const i=t.eBV(e).$implicit,l=t.XpG(3);return t.Njj(l.onImageMouseLeave(i))}),t.nrm(1,"img",16),t.j41(2,"button",17,1),t.bIt("click",function(i){const l=t.eBV(e).$implicit,a=t.XpG(3);return t.Njj(a.removeImage(i,l))}),t.k0s()()}if(2&n){const e=s.$implicit;t.R7$(),t.Y8G("src",e.objectURL,t.B4B)("alt",e.name),t.R7$(),t.Y8G("id",e.name)}}function $(n,s){if(1&n&&(t.j41(0,"div",13),t.DNE(1,U,4,3,"div",14),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.Y8G("ngForOf",e.uploadedFiles)}}function w(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",6),t.bIt("click",function(){t.eBV(e),t.XpG();const i=t.sdS(3);return t.Njj(i.advancedFileInput.nativeElement.click())}),t.DNE(1,k,6,0,"div",7)(2,$,2,1,"div",8),t.k0s()}if(2&n){const e=t.XpG();t.R7$(),t.Y8G("ngIf",!e.uploadedFiles.length),t.R7$(),t.Y8G("ngIf",e.uploadedFiles.length)}}let S=(()=>{class n{constructor(e){this.messageService=e,this.uploadedFiles=[]}onUpload(e){for(let o of e.files)this.uploadedFiles.push(o);this.messageService.add({severity:"success",summary:"Success",detail:"File uploaded successfully"})}onImageMouseOver(e){this.buttonEl.toArray().forEach(o=>{o.nativeElement.id===e.name&&(o.nativeElement.style.display="flex")})}onImageMouseLeave(e){this.buttonEl.toArray().forEach(o=>{o.nativeElement.id===e.name&&(o.nativeElement.style.display="none")})}removeImage(e,o){e.stopPropagation(),this.uploadedFiles=this.uploadedFiles.filter(i=>i!==o)}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(m.bg))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-file-uploader"]],viewQuery:function(o,i){if(1&o&&t.GBs(E,5),2&o){let l;t.mGM(l=t.lsd())&&(i.buttonEl=l)}},features:[t.Jv_([m.bg])],decls:5,vars:5,consts:[["fileUploader",""],["buttonEl",""],["key","fu"],[1,"card"],["name","demo[]","url","./upload.php","accept","image/*",1,"w-full",3,"onUpload","onSelect","customUpload","multiple","showUploadButton","showCancelButton","auto"],["pTemplate","content"],[1,"w-full","py-3",2,"cursor","copy",3,"click"],["class","h-full flex flex-column justify-content-center align-items-center",4,"ngIf"],["class","flex flex-wrap gap-5",4,"ngIf"],[1,"h-full","flex","flex-column","justify-content-center","align-items-center"],[1,"pi","pi-upload","text-900","text-2xl","mb-3"],[1,"font-bold","text-900","text-xl","mb-3"],[1,"font-medium","text-600","text-md","text-center"],[1,"flex","flex-wrap","gap-5"],["class","h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto","style","padding: 1px;",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"h-full","relative","w-7rem","h-7rem","border-3","border-transparent","border-round","hover:bg-primary","transition-duration-100","cursor-auto",2,"padding","1px",3,"mouseenter","mouseleave"],[1,"w-full","h-full","border-round","shadow-2",3,"src","alt"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-primary","text-sm","absolute","justify-content-center","align-items-center","cursor-pointer",2,"top","-10px","right","-10px","display","none",3,"click","id"]],template:function(o,i){if(1&o){const l=t.RV6();t.nrm(0,"p-toast",2),t.j41(1,"div",3)(2,"p-fileUpload",4,0),t.bIt("onUpload",function(p){return t.eBV(l),t.Njj(i.onUpload(p))})("onSelect",function(p){return t.eBV(l),t.Njj(i.onUpload(p))}),t.DNE(4,w,3,2,"ng-template",5),t.k0s()()}2&o&&(t.R7$(2),t.Y8G("customUpload",!0)("multiple",!0)("showUploadButton",!0)("showCancelButton",!1)("auto",!0))},dependencies:[d.Sq,d.bT,u._f,m.Ei,f.n,_.y8,x.N],encapsulation:2})}return n})();const G=()=>({width:"75%"});function B(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",27)(1,"div",28)(2,"div",29)(3,"span",30),t.EFF(4),t.k0s(),t.j41(5,"div")(6,"button",31),t.bIt("click",function(i){t.eBV(e);const l=t.sdS(8);return t.Njj(l.toggle(i))}),t.k0s(),t.nrm(7,"p-menu",32,1),t.k0s()(),t.j41(9,"div")(10,"div",33),t.nrm(11,"div",34),t.k0s(),t.j41(12,"div",35)(13,"span",36),t.EFF(14),t.k0s(),t.j41(15,"span",36),t.EFF(16),t.k0s()()()()()}if(2&n){const e=s.$implicit,o=t.XpG();t.R7$(4),t.JRh(e.title),t.R7$(2),t.Y8G("icon",e.icon),t.R7$(),t.Y8G("popup",!0)("model",o.menuitems),t.R7$(3),t.Y8G("ngClass",e.color),t.R7$(),t.Y8G("ngClass",e.fieldColor),t.R7$(3),t.JRh(e.files),t.R7$(2),t.JRh(e.fileSize)}}function T(n,s){if(1&n&&(t.j41(0,"div",37)(1,"div",38)(2,"div",13),t.nrm(3,"i",39),t.j41(4,"span",40),t.EFF(5),t.k0s()(),t.j41(6,"span",41),t.EFF(7),t.k0s()()()),2&n){const e=s.$implicit;t.R7$(3),t.Y8G("ngClass",e.icon),t.R7$(2),t.JRh(e.name),t.R7$(2),t.JRh(e.size)}}function I(n,s){1&n&&(t.j41(0,"tr")(1,"th",42),t.EFF(2,"Name "),t.nrm(3,"p-sortIcon",43),t.k0s(),t.j41(4,"th",44),t.EFF(5,"Date "),t.nrm(6,"p-sortIcon",45),t.k0s(),t.j41(7,"th",46),t.EFF(8,"File Size "),t.nrm(9,"p-sortIcon",43),t.k0s(),t.nrm(10,"th",47),t.k0s())}function V(n,s){if(1&n&&(t.j41(0,"tr")(1,"td")(2,"div",13),t.nrm(3,"i"),t.j41(4,"span"),t.EFF(5),t.k0s()()(),t.j41(6,"td")(7,"span"),t.EFF(8),t.k0s()(),t.j41(9,"td")(10,"span"),t.EFF(11),t.k0s()(),t.j41(12,"td",48),t.nrm(13,"button",49)(14,"button",50),t.k0s()()),2&n){const e=s.$implicit;t.R7$(3),t.HbH("text-xl text-primary mr-2 "+e.icon),t.R7$(2),t.JRh(e.name),t.R7$(3),t.JRh(e.date),t.R7$(3),t.JRh(e.fileSize)}}let M=(()=>{class n{constructor(e,o){this.fileService=e,this.layoutService=o,this.files=[],this.metrics=[],this.folders=[],this.menuitems=[],this.subscription=this.layoutService.configUpdate$.subscribe(i=>{this.initChart()})}ngOnInit(){this.fileService.getFiles().then(e=>this.files=e),this.fileService.getMetrics().then(e=>this.metrics=e),this.fileService.getFoldersLarge().then(e=>this.folders=e),this.initChart(),this.menuitems=[{label:"View",icon:"pi pi-search"},{label:"Refresh",icon:"pi pi-refresh"}]}initChart(){const e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color");this.chartPlugins=[{beforeDraw:function(i){let l=i.ctx,a=i.width,p=i.height,P=l.fillStyle;l.restore(),l.font="1.5rem sans-serif",l.textBaseline="middle";let g="Free Space",N=Math.round((a-l.measureText(g).width)/2),X=(p+i.chartArea.top)/2.25,J=Math.round((a-l.measureText(g).width)/2.1),z=(p+i.chartArea.top)/1.75;l.fillStyle=i.config.data.datasets[0].backgroundColor[0],l.fillText(g,N,X),l.fillText("50GB / 80GB",J,z),l.fillStyle=P,l.save()}}],this.fileChart={datasets:[{data:[300,100],backgroundColor:[e.getPropertyValue("--primary-600"),e.getPropertyValue("--primary-100")],hoverBackgroundColor:[e.getPropertyValue("--primary-700"),e.getPropertyValue("--primary-200")],borderColor:"transparent",fill:!0}]},this.fileChartOptions={animation:{duration:0},cutout:"90%",plugins:{legend:{labels:{color:o}}}}}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(b),t.rXU(R.Y))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["ng-component"]],decls:50,vars:11,consts:[["dt",""],["menu",""],[1,"grid"],["class","col-12 md:col-6 lg:col-3",4,"ngFor","ngForOf"],[1,"col-12","md:col-5","xl:col-3"],[1,"card"],[1,"text-900","text-xl","font-semibold","mb-3"],["type","doughnut","id","country-chart",3,"plugins","data","options"],[1,"mt-5","flex","gap-3"],["pButton","","pRipple","","icon","pi pi-search","label","Details",1,"p-button-outlined","flex-1"],["pButton","","pRipple","","icon","pi pi-upload","label","Upgrade",1,"flex-1"],[1,"list-none","p-0","m-0"],[1,"p-3","mb-3","flex","align-items-center","justify-content-between","cursor-pointer","border-round","bg-indigo-50","text-indigo-900"],[1,"flex","align-items-center"],[1,"pi","pi-image","text-2xl","mr-3"],[1,"ext-lg","font-medium"],[1,"text-lg","font-bold"],[1,"p-3","mb-3","flex","align-items-center","justify-content-between","cursor-pointer","border-round","bg-purple-50","text-purple-900"],[1,"pi","pi-file","text-2xl","mr-3"],[1,"p-3","flex","align-items-center","justify-content-between","cursor-pointer","border-round","bg-teal-50","text-teal-900"],[1,"pi","pi-video","text-2xl","mr-3"],[1,"card","p-0"],[1,"col-12","md:col-7","xl:col-9"],["class","col-12 md:col-6 xl:col-4",4,"ngFor","ngForOf"],["responsiveLayout","scroll",3,"value","rows","paginator"],["pTemplate","header"],["pTemplate","body"],[1,"col-12","md:col-6","lg:col-3"],[1,"card","h-full"],[1,"flex","align-items-center","justify-content-between","mb-3"],[1,"text-900","text-xl","font-semibold"],["pButton","","pRipple","",1,"p-button-text","p-button-sm","p-button-rounded",3,"click","icon"],["appendTo","body",3,"popup","model"],[1,"border-round",2,"height","6px",3,"ngClass"],[1,"h-full","border-round",2,"width","34%",3,"ngClass"],[1,"flex","align-item-center","justify-content-between"],[1,"text-900","mt-3","text-md","font-medium"],[1,"col-12","md:col-6","xl:col-4"],[1,"p-3","border-1","surface-border","flex","align-items-center","justify-content-between","hover:surface-100","cursor-pointer","border-round"],[1,"text-2xl","mr-3",3,"ngClass"],[1,"text-900","text-lg","font-medium"],[1,"text-600","text-lg","font-semibold"],["pSortableColumn","name",1,"white-space-nowrap",2,"min-width","12rem"],["field","name"],["pSortableColumn","date",1,"white-space-nowrap",2,"min-width","12rem"],["field","date"],["pSortableColumn","fileSize",1,"white-space-nowrap",2,"min-width","12rem"],[2,"width","10rem"],[1,"text-center"],["pButton","","pRipple","","icon","pi pi-times",1,"p-button-danger","p-button-text","p-button-rounded","mr-2"],["pButton","","pRipple","","icon","pi pi-search",1,"p-button-text","p-button-rounded"]],template:function(o,i){1&o&&(t.j41(0,"div",2),t.DNE(1,B,17,8,"div",3),t.j41(2,"div",4)(3,"div",5)(4,"div",6),t.EFF(5,"Account Storage"),t.k0s(),t.nrm(6,"p-chart",7),t.j41(7,"div",8),t.nrm(8,"button",9)(9,"button",10),t.k0s()(),t.j41(10,"div",5)(11,"div",6),t.EFF(12,"Categories"),t.k0s(),t.j41(13,"ul",11)(14,"li",12)(15,"div",13),t.nrm(16,"i",14),t.j41(17,"span",15),t.EFF(18,"Images"),t.k0s()(),t.j41(19,"span",16),t.EFF(20,"85"),t.k0s()(),t.j41(21,"li",17)(22,"div",13),t.nrm(23,"i",18),t.j41(24,"span",15),t.EFF(25,"Documents"),t.k0s()(),t.j41(26,"span",16),t.EFF(27,"231"),t.k0s()(),t.j41(28,"li",19)(29,"div",13),t.nrm(30,"i",20),t.j41(31,"span",15),t.EFF(32,"Videos"),t.k0s()(),t.j41(33,"span",16),t.EFF(34,"40"),t.k0s()()()(),t.j41(35,"div",21),t.nrm(36,"app-file-uploader"),t.k0s()(),t.j41(37,"div",22)(38,"div",5)(39,"div",6),t.EFF(40,"Folders"),t.k0s(),t.j41(41,"div",2),t.DNE(42,T,8,3,"div",23),t.k0s()(),t.j41(43,"div",5)(44,"div",6),t.EFF(45,"Recent Uploads"),t.k0s(),t.j41(46,"p-table",24,0),t.DNE(48,I,11,0,"ng-template",25)(49,V,15,5,"ng-template",26),t.k0s()()()()),2&o&&(t.R7$(),t.Y8G("ngForOf",i.metrics),t.R7$(5),t.Aen(t.lJ4(10,G)),t.Y8G("plugins",i.chartPlugins)("data",i.fileChart)("options",i.fileChartOptions),t.R7$(36),t.Y8G("ngForOf",i.folders),t.R7$(4),t.Y8G("value",i.files)("rows",8)("paginator",!0))},dependencies:[d.YU,d.Sq,u._f,m.Ei,f.n,c.XI,c.Tg,c.yc,v.W1,F.X,S],styles:["[_nghost-%COMP%]     .p-fileupload-content{border:0 none}[_nghost-%COMP%]     .p-fileupload-row{display:none}[_nghost-%COMP%]     .p-progressbar{display:none}[_nghost-%COMP%]     .p-fileupload{padding:0}[_nghost-%COMP%]     .p-fileupload-buttonbar{display:none}"]})}return n})(),Y=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[j.iI.forChild([{path:"",component:M}]),j.iI]})}return n})(),D=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({providers:[b],imports:[d.MD,Y,y.YN,u.tm,f.Z,_.MB,c.bG,v.Mk,x.e,F.F]})}return n})()}}]);