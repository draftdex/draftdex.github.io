"use strict";(self.webpackChunkDraftDex=self.webpackChunkDraftDex||[]).push([[179],{179:(I,m,s)=>{s.r(m),s.d(m,{VerificationModule:()=>S});var p=s(177),o=s(4341),d=s(4007),e=s(4438),D=s(7693),h=s(2242),u=s(1455);const M={provide:o.cz,useExisting:(0,e.Rfq)(()=>v),multi:!0},g={pint:/^[\d]*$/,int:/^[-]?[\d]*$/,pnum:/^[\d\.]*$/,money:/^[\d\.\s,]*$/,num:/^[-]?[\d\.]*$/,hex:/^[0-9a-f]*$/i,email:/^[a-z0-9_\.\-@]*$/i,alpha:/^[a-z_]*$/i,alphanum:/^[a-z0-9_]*$/i},y={63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35};let v=(()=>{class a{document;platformId;el;pValidateOnly;set pattern(i){this._pattern=i,this.regex=i instanceof RegExp?i:i in g?g[i]:/./}get pattern(){return this._pattern}ngModelChange=new e.bkB;regex=/./;_pattern;isAndroid;lastValue;constructor(i,t,n){this.document=i,this.platformId=t,this.el=n,this.isAndroid=!!(0,p.UE)(this.platformId)&&u.D.isAndroid()}isNavKeyPress(i){let t=i.keyCode;return t=u.D.getBrowser().safari&&y[t]||t,t>=33&&t<=40||13==t||9==t||27==t}isSpecialKey(i){let t=i.keyCode||i.charCode;return 9==t||13==t||27==t||16==t||17==t||t>=18&&t<=20||u.D.getBrowser().opera&&!i.shiftKey&&(8==t||t>=33&&t<=35||t>=36&&t<=39||t>=44&&t<=45)}getKey(i){let t=i.keyCode||i.charCode;return u.D.getBrowser().safari&&y[t]||t}getCharCode(i){return i.charCode||i.keyCode||i.which}findDelta(i,t){let n="";for(let r=0;r<i.length;r++)i.substr(0,r)+i.substr(r+i.length-t.length)===t&&(n=i.substr(r,i.length-t.length));return n}isValidChar(i){return this.regex.test(i)}isValidString(i){for(let t=0;t<i.length;t++)if(!this.isValidChar(i.substr(t,1)))return!1;return!0}onInput(i){if(this.isAndroid&&!this.pValidateOnly){let t=this.el.nativeElement.value,n=this.lastValue||"",r=this.findDelta(t,n),l=this.findDelta(n,t);r.length>1||!r&&!l?this.isValidString(t)||(this.el.nativeElement.value=n,this.ngModelChange.emit(n)):l||this.isValidChar(r)||(this.el.nativeElement.value=n,this.ngModelChange.emit(n)),t=this.el.nativeElement.value,this.isValidString(t)&&(this.lastValue=t)}}onKeyPress(i){if(this.isAndroid||this.pValidateOnly)return;let t=u.D.getBrowser(),n=this.getKey(i);if(t.mozilla&&(i.ctrlKey||i.altKey))return;if(17==n||18==n||13==n)return;let r=this.getCharCode(i),l=String.fromCharCode(r),f=!0;(t.mozilla||!this.isSpecialKey(i)&&l)&&(f=this.regex.test(this.el.nativeElement.value+l),f||i.preventDefault())}onPaste(i){const t=i.clipboardData||this.document.defaultView.clipboardData.getData("text");if(t){let n=/\{[0-9]+\}/;const r=t.getData("text");if(n.test(this.regex.toString())){if(!this.regex.test(r))return void i.preventDefault()}else for(let l of r.toString())if(!this.regex.test(l))return void i.preventDefault()}}validate(i){if(this.pValidateOnly){let t=this.el.nativeElement.value;if(t&&!this.regex.test(t))return{validatePattern:!1}}}static \u0275fac=function(t){return new(t||a)(e.rXU(p.qQ),e.rXU(e.Agw),e.rXU(e.aKT))};static \u0275dir=e.FsC({type:a,selectors:[["","pKeyFilter",""]],hostAttrs:[1,"p-element"],hostBindings:function(t,n){1&t&&e.bIt("input",function(l){return n.onInput(l)})("keypress",function(l){return n.onKeyPress(l)})("paste",function(l){return n.onPaste(l)})},inputs:{pValidateOnly:[e.Mj6.HasDecoratorInputTransform,"pValidateOnly","pValidateOnly",e.L39],pattern:[e.Mj6.None,"pKeyFilter","pattern"]},outputs:{ngModelChange:"ngModelChange"},features:[e.Jv_([M]),e.GFd]})}return a})(),x=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=e.$C({type:a});static \u0275inj=e.G2t({imports:[p.MD]})}return a})();var C=s(1141),V=s(563),E=s(8526);const k=()=>["/"];let B=(()=>{class a{constructor(i){this.layoutService=i}get dark(){return"light"!==this.layoutService.config.colorScheme}onDigitInput(i){let t;"Backspace"!==i.code&&(i.code.includes("Numpad")||i.code.includes("Digit"))&&(t=i.srcElement.nextElementSibling),"Backspace"===i.code&&(t=i.srcElement.previousElementSibling),t?.focus()}static#t=this.\u0275fac=function(t){return new(t||a)(e.rXU(D.Y))};static#e=this.\u0275cmp=e.VBU({type:a,selectors:[["ng-component"]],decls:27,vars:10,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1600 800","preserveAspectRatio","none",1,"fixed","left-0","top-0","min-h-screen","min-w-screen"],["width","1600","height","800"],["d","M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z"],["d","M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z"],["d","M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z"],["d","M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z"],[1,"px-5","min-h-screen","flex","justify-content-center","align-items-center"],[1,"border-1","surface-border","surface-card","border-round","py-7","px-4","md:px-7","z-1"],[1,"mb-4"],[1,"text-900","text-xl","font-bold","mb-2"],[1,"text-600","font-medium"],[1,"flex","align-items-center","mt-1"],[1,"pi","pi-envelope","text-600"],[1,"text-900","font-bold","ml-2"],[1,"flex","flex-column"],[1,"flex","justify-content-between","w-full","align-items-center","mb-4","gap-3"],["pInputText","","pKeyFilter","num","maxlength","1",1,"w-3rem","text-center",3,"ngModel","keyup"],[1,"flex","flex-wrap","gap-2","justify-content-between"],["pButton","","pRipple","","label","Cancel",1,"flex-auto","p-button-outlined",3,"routerLink"],["pButton","","pRipple","","label","Verify",1,"flex-auto",3,"routerLink"],[3,"minimal"]],template:function(t,n){1&t&&(e.qSk(),e.j41(0,"svg",0),e.nrm(1,"rect",1)(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5),e.k0s(),e.joV(),e.j41(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),e.EFF(10,"Verification"),e.k0s(),e.j41(11,"span",10),e.EFF(12,"We have sent code to you email:"),e.k0s(),e.j41(13,"div",11),e.nrm(14,"i",12),e.j41(15,"span",13),e.EFF(16,"dm**@gmail.com"),e.k0s()()(),e.j41(17,"div",14)(18,"div",15)(19,"input",16),e.bIt("ngModel",function(){return n.val1})("keyup",function(l){return n.onDigitInput(l)}),e.k0s(),e.j41(20,"input",16),e.bIt("ngModel",function(){return n.val2})("keyup",function(l){return n.onDigitInput(l)}),e.k0s(),e.j41(21,"input",16),e.bIt("ngModel",function(){return n.val3})("keyup",function(l){return n.onDigitInput(l)}),e.k0s(),e.j41(22,"input",16),e.bIt("ngModel",function(){return n.val4})("keyup",function(l){return n.onDigitInput(l)}),e.k0s()(),e.j41(23,"div",17),e.nrm(24,"button",18)(25,"button",19),e.k0s()()()(),e.nrm(26,"app-config",20)),2&t&&(e.R7$(),e.BMQ("fill",n.dark?"var(--primary-900)":"var(--primary-500)"),e.R7$(),e.BMQ("fill",n.dark?"var(--primary-800)":"var(--primary-400)"),e.R7$(),e.BMQ("fill",n.dark?"var(--primary-700)":"var(--primary-300)"),e.R7$(),e.BMQ("fill",n.dark?"var(--primary-600)":"var(--primary-200)"),e.R7$(),e.BMQ("fill",n.dark?"var(--primary-500)":"var(--primary-100)"),e.R7$(19),e.Y8G("routerLink",e.lJ4(8,k)),e.R7$(),e.Y8G("routerLink",e.lJ4(9,k)),e.R7$(),e.Y8G("minimal",!0))},dependencies:[d.Wk,o.me,o.BC,o.tU,o.vS,h.S,v,C._f,V.n,E.l],encapsulation:2})}return a})(),F=(()=>{class a{static#t=this.\u0275fac=function(t){return new(t||a)};static#e=this.\u0275mod=e.$C({type:a});static#i=this.\u0275inj=e.G2t({imports:[d.iI.forChild([{path:"",component:B}]),d.iI]})}return a})();var K=s(6497);let S=(()=>{class a{static#t=this.\u0275fac=function(t){return new(t||a)};static#e=this.\u0275mod=e.$C({type:a});static#i=this.\u0275inj=e.G2t({imports:[p.MD,F,o.YN,h.u,x,C.tm,V.Z,K.G]})}return a})()}}]);