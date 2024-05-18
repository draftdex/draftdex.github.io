"use strict";(self.webpackChunkDraftDex=self.webpackChunkDraftDex||[]).push([[1917],{1917:(I,l,r)=>{r.r(l),r.d(l,{UtilitiesModule:()=>C});var c=r(177),p=r(4007),e=r(4438),f=r(7693);const F=(t,n)=>({backgroundColor:t,color:n});function m(t,n){if(1&t&&(e.j41(0,"div",14),e.EFF(1),e.k0s()),2&t){const s=e.XpG().$implicit,o=e.XpG().$implicit;e.Y8G("ngStyle",e.l_i(3,F,"var(--"+o+"-"+s,s>500?"#fff":"#000")),e.R7$(),e.Lme(" ",o,"-",s," ")}}function h(t,n){if(1&t&&(e.j41(0,"div"),e.DNE(1,m,2,6,"div",13),e.k0s()),2&t){const s=n.$implicit;e.R7$(),e.Y8G("ngIf",0!==s)}}function u(t,n){if(1&t&&(e.j41(0,"div",12),e.DNE(1,h,2,1,"div",11),e.k0s()),2&t){const s=e.XpG();e.R7$(),e.Y8G("ngForOf",s.shades)}}function k(t,n){if(1&t&&(e.j41(0,"div")(1,"div",14),e.EFF(2),e.k0s()()),2&t){const s=n.$implicit,o=e.XpG();e.R7$(),e.Y8G("ngStyle",e.l_i(2,F,"var(--surface-"+s,o.colorScheme?s>400?"#000":"#fff":s>500?"#fff":"#000")),e.R7$(),e.SpI(" surface-",s," ")}}let E=(()=>{class t{constructor(s){this.layoutService=s,this.colors=["blue","green","yellow","cyan","pink","indigo","red","teal","orange","bluegray","purple","gray","primary"],this.shades=[0,50,100,200,300,400,500,600,700,800,900]}get colorScheme(){return"light"!==this.layoutService.config.colorScheme}static#e=this.\u0275fac=function(o){return new(o||t)(e.rXU(f.Y))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["ng-component"]],decls:136,vars:2,consts:[[1,"card"],[1,"text-primary","font-medium"],[1,"app-code"],[1,"w-full"],[1,"text-900","text-left","p-2"],[1,"border-bottom-1","surface-border","p-2"],[1,"font-medium"],[1,"p-2"],[1,"flex","flex-wrap"],["class","flex flex-column mr-6 mb-6",4,"ngFor","ngForOf"],[1,"flex","flex-column"],[4,"ngFor","ngForOf"],[1,"flex","flex-column","mr-6","mb-6"],["class","flex align-items-center w-19rem  p-3 font-bold",3,"ngStyle",4,"ngIf"],[1,"flex","align-items-center","w-19rem","p-3","font-bold",3,"ngStyle"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"h2"),e.EFF(2,"Colors"),e.k0s(),e.j41(3,"p"),e.EFF(4,"Each PrimeNG theme exports its own color palette."),e.k0s(),e.j41(5,"h4"),e.EFF(6,"Getting Started"),e.k0s(),e.j41(7,"p"),e.EFF(8,"Colors are exported as CSS variables and used with the standard "),e.j41(9,"span",1),e.EFF(10,"var"),e.k0s(),e.EFF(11," syntax e.g. "),e.j41(12,"span",1),e.EFF(13,"var(--text-color)"),e.k0s(),e.EFF(14,"."),e.k0s(),e.j41(15,"pre",2)(16,"code"),e.EFF(17,"<span [ngStyle]=\"{color:'var(--text-color)'}\"></span>"),e.k0s()(),e.j41(18,"h4"),e.EFF(19,"PrimeFlex Integration"),e.k0s(),e.j41(20,"p"),e.EFF(21,"Color utility classes of PrimeFlex such as background, text and border use the exported CSS variables from the theme so PrimeFlex or PrimeBlocks are perfectly compatible with the provided themes. "),e.k0s(),e.j41(22,"pre",2)(23,"code"),e.EFF(24,'<div class="bg-blue-500"></div>'),e.k0s()(),e.j41(25,"h4"),e.EFF(26,"Exported Colors"),e.k0s(),e.j41(27,"p"),e.EFF(28,"Following is the list of colors exported as CSS variables from the theme."),e.k0s(),e.j41(29,"div",0)(30,"table",3)(31,"thead")(32,"tr")(33,"th",4),e.EFF(34,"Variable"),e.k0s(),e.j41(35,"th",4),e.EFF(36,"Description"),e.k0s()()(),e.j41(37,"tbody")(38,"tr")(39,"td",5)(40,"span",6),e.EFF(41,"--text-color"),e.k0s()(),e.j41(42,"td",5),e.EFF(43,"Font text color."),e.k0s()(),e.j41(44,"tr")(45,"td",5)(46,"span",6),e.EFF(47,"--text-color-secondary"),e.k0s()(),e.j41(48,"td",5),e.EFF(49,"Muted font text color with a secondary level."),e.k0s()(),e.j41(50,"tr")(51,"td",5)(52,"span",6),e.EFF(53,"--primary-color"),e.k0s()(),e.j41(54,"td",5),e.EFF(55,"Primary color of the theme."),e.k0s()(),e.j41(56,"tr")(57,"td",5)(58,"span",6),e.EFF(59,"--primary-color-text"),e.k0s()(),e.j41(60,"td",5),e.EFF(61,"Text color when background is primary color."),e.k0s()(),e.j41(62,"tr")(63,"td",5)(64,"span",6),e.EFF(65,"--font-family"),e.k0s()(),e.j41(66,"td",5),e.EFF(67,"Font family of the theme."),e.k0s()(),e.j41(68,"tr")(69,"td",5)(70,"span",6),e.EFF(71,"--surface-ground"),e.k0s()(),e.j41(72,"td",5),e.EFF(73,"Base ground color."),e.k0s()(),e.j41(74,"tr")(75,"td",5)(76,"span",6),e.EFF(77,"--surface-section"),e.k0s()(),e.j41(78,"td",5),e.EFF(79,"Color of a section on a ground surface."),e.k0s()(),e.j41(80,"tr")(81,"td",5)(82,"span",6),e.EFF(83,"--surface-card"),e.k0s()(),e.j41(84,"td",5),e.EFF(85,"Color of a surface used as a card."),e.k0s()(),e.j41(86,"tr")(87,"td",5)(88,"span",6),e.EFF(89,"--surface-overlay"),e.k0s()(),e.j41(90,"td",5),e.EFF(91,"Color of overlay surfaces."),e.k0s()(),e.j41(92,"tr")(93,"td",5)(94,"span",6),e.EFF(95,"--surface-border"),e.k0s()(),e.j41(96,"td",5),e.EFF(97,"Color of a divider."),e.k0s()(),e.j41(98,"tr")(99,"td",5)(100,"span",6),e.EFF(101,"--surface-hover"),e.k0s()(),e.j41(102,"td",5),e.EFF(103,"Color of an element in hover state."),e.k0s()(),e.j41(104,"tr")(105,"td",5)(106,"span",6),e.EFF(107,"--focus-ring"),e.k0s()(),e.j41(108,"td",5),e.EFF(109,"Box shadow of a focused item."),e.k0s()(),e.j41(110,"tr")(111,"td",5)(112,"span",6),e.EFF(113,"--maskbg"),e.k0s()(),e.j41(114,"td",5),e.EFF(115,"Background color of an overlay mask."),e.k0s()(),e.j41(116,"tr")(117,"td",7)(118,"span",6),e.EFF(119,"--border-radius"),e.k0s()(),e.j41(120,"td",7),e.EFF(121,"Border radius of an element."),e.k0s()()()()(),e.j41(122,"h4"),e.EFF(123,"Color Palette"),e.k0s(),e.j41(124,"p"),e.EFF(125,"A palette consists of 9 colors where each color provides tints/shades from 50 to 900."),e.k0s(),e.j41(126,"div",0)(127,"div",8),e.DNE(128,u,2,1,"div",9),e.k0s()(),e.j41(129,"h4"),e.EFF(130,"Surfaces"),e.k0s(),e.j41(131,"p"),e.EFF(132,"In addition, a theme brings a special palette called surfaces that can be used as the base when designing the surface layers and separators."),e.k0s(),e.j41(133,"div",0)(134,"div",10),e.DNE(135,k,3,5,"div",11),e.k0s()()()),2&o&&(e.R7$(128),e.Y8G("ngForOf",i.colors),e.R7$(7),e.Y8G("ngForOf",i.shades))},dependencies:[c.Sq,c.bT,c.B3],encapsulation:2})}return t})();var j=r(6354),g=r(1626);let v=(()=>{class t{constructor(s){this.http=s,this.icons=[],this.apiUrl="assets/demo/data/icons.json"}getIcons(){return this.http.get(this.apiUrl).pipe((0,j.T)(s=>(this.icons=s.icons,this.icons)))}static#e=this.\u0275fac=function(o){return new(o||t)(e.KVO(g.Qq))};static#t=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var d=r(2242);function y(t,n){if(1&t&&(e.j41(0,"div",11),e.nrm(1,"i"),e.j41(2,"div"),e.EFF(3),e.k0s()()),2&t){const s=n.$implicit;e.R7$(),e.ZvI("text-2xl pi pi-",s.properties.name,""),e.R7$(2),e.SpI("pi-",s.properties.name,"")}}let x=(()=>{class t{constructor(s){this.iconService=s,this.icons=[],this.filteredIcons=[]}ngOnInit(){this.iconService.getIcons().subscribe(s=>{let o=s=s.filter(i=>-1===i.icon.tags.indexOf("deprecate"));o.sort((i,a)=>i.properties.name<a.properties.name?-1:i.properties.name<a.properties.name?1:0),this.icons=o,this.filteredIcons=s})}onFilter(s){const o=s.target.value;this.filteredIcons=o?this.icons.filter(i=>i.icon.tags[0].includes(o)):this.icons}static#e=this.\u0275fac=function(o){return new(o||t)(e.rXU(v))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["ng-component"]],decls:59,vars:1,consts:[[1,"card"],[1,"app-code"],[1,"pi","pi-check",2,"margin-right",".5rem"],[1,"pi","pi-times"],[1,"pi","pi-check"],[1,"pi","pi-check",2,"font-size","2rem"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],["href","https://github.com/primefaces/primeicons/issues",1,"text-primary","hover:underline"],["pInputText","","placeholder","Search an icon",1,"w-full","p-3","mt-3","mb-5","w-full","p-3","mt-3","mb-5",3,"input"],[1,"grid","text-center"],["class","col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",4,"ngFor","ngForOf"],[1,"col-6","sm:col-4","lg:col-3","xl:col-2","pb-5"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"h2"),e.EFF(2,"Icons"),e.k0s(),e.j41(3,"h4"),e.EFF(4,"Download"),e.k0s(),e.j41(5,"pre",1)(6,"code"),e.EFF(7,"npm install primeicons --save"),e.k0s()(),e.j41(8,"h4"),e.EFF(9,"Getting Started"),e.k0s(),e.j41(10,"p"),e.EFF(11,"PrimeIcons use the "),e.j41(12,"strong"),e.EFF(13,"pi pi-{icon}"),e.k0s(),e.EFF(14," syntax such as "),e.j41(15,"strong"),e.EFF(16,"pi pi-check"),e.k0s(),e.EFF(17,". A standalone icon can be displayed using an element such as "),e.j41(18,"i"),e.EFF(19,"i"),e.k0s(),e.EFF(20," or "),e.j41(21,"i"),e.EFF(22,"span"),e.k0s()(),e.j41(23,"pre",1)(24,"code"),e.EFF(25,'<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>'),e.k0s()(),e.nrm(26,"i",2)(27,"i",3),e.j41(28,"h4"),e.EFF(29,"Size"),e.k0s(),e.j41(30,"p"),e.EFF(31,"Size of the icons can easily be changed using font-size property."),e.k0s(),e.j41(32,"pre",1)(33,"code"),e.EFF(34,'<i class="pi pi-check"></i>'),e.k0s()(),e.nrm(35,"i",4),e.j41(36,"pre",1)(37,"code"),e.EFF(38,'<i class="pi pi-check" style="font-size: 2rem"></i>'),e.k0s()(),e.nrm(39,"i",5),e.j41(40,"h4"),e.EFF(41,"Spinning Animation"),e.k0s(),e.j41(42,"p"),e.EFF(43,"Special pi-spin class applies infinite rotate to an icon."),e.k0s(),e.j41(44,"pre",1)(45,"code"),e.EFF(46,'<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>'),e.k0s()(),e.nrm(47,"i",6),e.j41(48,"h4"),e.EFF(49,"List of Icons"),e.k0s(),e.j41(50,"p"),e.EFF(51,"Here is the current list of PrimeIcons, more icons will be added periodically. You may also "),e.j41(52,"a",7),e.EFF(53,"request new icons"),e.k0s(),e.EFF(54," at the issue tracker."),e.k0s(),e.j41(55,"div")(56,"input",8),e.bIt("input",function(S){return i.onFilter(S)}),e.k0s()(),e.j41(57,"div",9),e.DNE(58,y,4,4,"div",10),e.k0s()()),2&o&&(e.R7$(58),e.Y8G("ngForOf",i.filteredIcons))},dependencies:[c.Sq,d.S],encapsulation:2})}return t})(),b=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.$C({type:t});static#s=this.\u0275inj=e.G2t({imports:[p.iI.forChild([{path:"icons",data:{breadcrumb:"Prime Icons"},component:x},{path:"colors",data:{breadcrumb:"Colors"},component:E},{path:"**",redirectTo:"/notfound"}]),p.iI]})}return t})(),C=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.$C({type:t});static#s=this.\u0275inj=e.G2t({imports:[c.MD,b,d.u]})}return t})()}}]);