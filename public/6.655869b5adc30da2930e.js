(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7UCR":function(b,e,t){"use strict";t.r(e),t.d(e,"UserModule",function(){return U});var i=t("ofXK"),n=t("tyNb"),o=t("fXoL"),r=t("tk/3"),a=t("/9VY");const c="http://localhost:3000/api/v1";let l=(()=>{class b{constructor(b,e){this._http=b,this._authService=e}getUserInfo(){return this._http.get(c+"/userInfo",{observe:"body",headers:new r.c({Accept:"application/json",Authorization:"Bearer "+this._authService.getToken()})})}getwalletHistory(){return this._http.get(c+"/user/wallet_history",{observe:"body",headers:new r.c({Accept:"application/json",Authorization:"Bearer "+this._authService.getToken()})})}requestWithdraw(b){return this._http.post(c+"/user/withdraw",b,{observe:"body",headers:new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this._authService.getToken()})})}getwithdrawHistory(){return this._http.get(c+"/user/withdraw_list",{observe:"body",headers:new r.c({Accept:"application/json",Authorization:"Bearer "+this._authService.getToken()})})}getTotalWithdraw(){return this._http.get(c+"/user/total_withdraw",{observe:"body",headers:new r.c({Accept:"application/json",Authorization:"Bearer "+this._authService.getToken()})})}getTotalDeposit(){return this._http.get(c+"/user/total_deposit",{observe:"body",headers:new r.c({Accept:"application/json",Authorization:"Bearer "+this._authService.getToken()})})}}return b.\u0275fac=function(e){return new(e||b)(o.Ob(r.a),o.Ob(a.a))},b.\u0275prov=o.Cb({token:b,factory:b.\u0275fac,providedIn:"root"}),b})();const d=function(){return["/"]},s=function(){return["/user"]},h=function(){return["/contact"]};let u=(()=>{class b{constructor(b){this._userService=b}ngOnInit(){this._userService.getTotalWithdraw().subscribe(b=>{this.totalwithdraw=b.result},b=>{console.log(b)}),this._userService.getTotalDeposit().subscribe(b=>{this.totaldeposit=b.result},b=>{console.log(b)})}}return b.\u0275fac=function(e){return new(e||b)(o.Gb(l))},b.\u0275cmp=o.Ab({type:b,selectors:[["app-dashboard"]],decls:104,vars:14,consts:[["id","page-banner"],["data-background","assets/img/bg/slide1.jpg",1,"single-page-title-area","overlay","bg"],[1,"auto-container"],[1,"row"],[1,"col-12","text-center"],[1,"single-page-title"],[1,"single-page-title-area-bottom"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["id","wallet",1,"section-padding"],[1,"container"],[1,"section-title-2"],[1,"col-12"],[1,"stepwizard"],[1,"stepwizard-row"],[1,"stepwizard-step"],["type","button",1,"active","btn","btn-circle"],[1,"fab","fa-wpforms"],["type","button",1,"btn","btn-circle"],[1,"fa","fa-list-alt"],["type","button","disabled","disabled",1,"btn","btn-circle"],[1,"fab","fa-opencart"],[1,"buysell-tab-content","tab-content"],["id","one",1,"tab-pane","animated","fadeInRight","active","show"],[1,"col-lg-4","col-md-4","col-12","text-center","mb-lg-0","mb-md-0","mb-5"],[1,"single-buy-box"],[1,"single-buy-box-header"],[1,"single-buy-box-dec"],[1,"btn-style","btn-filled","btn-filled-2","mb-5",3,"routerLink"],[1,"col-lg-4","col-md-4","col-12","text-center"],["id","three",1,"tab-pane","animated","fadeInRight"],["id","calltoaction",1,"calltoaction-padding","section-padding","bg-theme"],[1,"calltoaction-two-wrap","mb-4"],[1,"text-uppercase"],[1,"wow","fadeInDown","btn-style","btn-border","btn-border-3",3,"routerLink"],[1,"icofont","icofont-hand-right"]],template:function(b,e){1&b&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Kb(4,"div",4),o.Kb(5,"div",5),o.Kb(6,"h2"),o.hc(7,"Alliace Investment Management ltd Wallet"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(8,"div",6),o.Kb(9,"div",2),o.Kb(10,"div",3),o.Kb(11,"div",4),o.Kb(12,"ol",7),o.Kb(13,"li",8),o.Kb(14,"a",9),o.hc(15,"Home"),o.Jb(),o.Jb(),o.Kb(16,"li",10),o.hc(17,"Dashboard"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(18,"section",11),o.Kb(19,"div",12),o.Kb(20,"div",3),o.Kb(21,"div",4),o.Kb(22,"div",13),o.Kb(23,"h3"),o.hc(24,"Alliace Investment Management ltd Dashboard"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(25,"div",3),o.Kb(26,"div",14),o.Kb(27,"div",15),o.Kb(28,"div",16),o.Kb(29,"div",17),o.Kb(30,"button",18),o.Hb(31,"i",19),o.Jb(),o.Kb(32,"h6"),o.Kb(33,"a"),o.hc(34,"Wallet Ballance"),o.Jb(),o.Jb(),o.Jb(),o.Kb(35,"div",17),o.Kb(36,"button",20),o.Hb(37,"i",21),o.Jb(),o.Kb(38,"h6"),o.Kb(39,"a"),o.hc(40,"Credit Wallet"),o.Jb(),o.Jb(),o.Jb(),o.Kb(41,"div",17),o.Kb(42,"button",22),o.Hb(43,"i",23),o.Jb(),o.Kb(44,"h6"),o.Kb(45,"a"),o.hc(46,"Total Transaction"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(47,"div",24),o.Kb(48,"div",25),o.Kb(49,"div",3),o.Kb(50,"div",26),o.Kb(51,"div",27),o.Kb(52,"div",28),o.Kb(53,"h5"),o.hc(54,"Balance"),o.Jb(),o.Jb(),o.Kb(55,"div",29),o.Kb(56,"h2"),o.hc(57,"$"),o.Jb(),o.Kb(58,"a",30),o.hc(59,"Check Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(60,"div",26),o.Kb(61,"div",27),o.Kb(62,"div",28),o.Kb(63,"h5"),o.hc(64,"Deposits"),o.Jb(),o.Jb(),o.Kb(65,"div",29),o.Kb(66,"h2"),o.hc(67),o.Jb(),o.Kb(68,"a",30),o.hc(69,"Check Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(70,"div",31),o.Kb(71,"div",27),o.Kb(72,"div",28),o.Kb(73,"h5"),o.hc(74,"Total Withdraws"),o.Jb(),o.Jb(),o.Kb(75,"div",29),o.Kb(76,"h2"),o.hc(77),o.Jb(),o.Kb(78,"a",30),o.hc(79,"Check Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(80,"div",32),o.Kb(81,"div",3),o.Kb(82,"div",26),o.Kb(83,"div",27),o.Kb(84,"div",28),o.Kb(85,"h5"),o.hc(86,"3 Bitcoin"),o.Jb(),o.Jb(),o.Kb(87,"div",29),o.Kb(88,"h2"),o.hc(89,"\u20ac2360"),o.Jb(),o.Kb(90,"p"),o.hc(91,"*You can Save 20%"),o.Jb(),o.Kb(92,"a",30),o.hc(93,"Buy Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(94,"section",33),o.Kb(95,"div",12),o.Kb(96,"div",3),o.Kb(97,"div",4),o.Kb(98,"div",34),o.Kb(99,"h4",35),o.hc(100,"Want to knowe more?"),o.Jb(),o.Jb(),o.Kb(101,"a",36),o.hc(102,"Contact Us "),o.Hb(103,"i",37),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&b&&(o.wb(14),o.Xb("routerLink",o.Yb(8,d)),o.wb(44),o.Xb("routerLink",o.Yb(9,s)),o.wb(9),o.jc("$",e.totaldeposit,""),o.wb(1),o.Xb("routerLink",o.Yb(10,s)),o.wb(9),o.jc("$ ",e.totalwithdraw,""),o.wb(1),o.Xb("routerLink",o.Yb(11,s)),o.wb(14),o.Xb("routerLink",o.Yb(12,s)),o.wb(9),o.Xb("routerLink",o.Yb(13,h)))},directives:[n.c],styles:[".bg[_ngcontent-%COMP%]{background-image:url(slide1.185d592bc6ca11614b7c.jpg)}"]}),b})(),J=(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=o.Ab({type:b,selectors:[["app-investments"]],decls:0,vars:0,template:function(b,e){},styles:[""]}),b})();const K=function(){return["/"]},m=function(){return["/pricing"]};let p=(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=o.Ab({type:b,selectors:[["app-new-invest"]],decls:174,vars:10,consts:[["id","page-banner"],["data-background","assets/img/bg/slide1.jpg",1,"single-page-title-area","overlay","bg"],[1,"auto-container"],[1,"row"],[1,"col-12","text-center"],[1,"single-page-title"],[1,"single-page-title-area-bottom"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","",3,"routerLink"],[1,"breadcrumb-item","active"],["id","price",1,"section-padding","bg-gray"],[1,"container"],[1,"section-title"],[1,"col-lg-4","col-md-4","col-12","mb-lg-0","mb-md-0","mb-5"],[1,"single-pricing"],[1,"single-pricing-head","text-center"],[1,"price"],[1,"price-digit"],[1,"single-pricing-body"],[1,"single-pricing-list"],[1,"icofont","icofont-check-alt"],[1,"single-pricing-button"],[1,"mt-3","d-block","text-center","rounded-0",3,"routerLink"]],template:function(b,e){1&b&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Kb(4,"div",4),o.Kb(5,"div",5),o.Kb(6,"h2"),o.hc(7,"Alliance Investment Management Ltd"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(8,"div",6),o.Kb(9,"div",2),o.Kb(10,"div",3),o.Kb(11,"div",4),o.Kb(12,"ol",7),o.Kb(13,"li",8),o.Kb(14,"a",9),o.hc(15,"Home"),o.Jb(),o.Jb(),o.Kb(16,"li",10),o.hc(17,"Investment Plan"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(18,"section",11),o.Kb(19,"div",12),o.Kb(20,"div",3),o.Kb(21,"div",4),o.Kb(22,"div",13),o.Kb(23,"h5"),o.hc(24,"Alliance Investment Management Ltd"),o.Jb(),o.Kb(25,"h3"),o.hc(26,"Our "),o.Kb(27,"span"),o.hc(28,"Investment packages"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(29,"div",3),o.Kb(30,"div",14),o.Kb(31,"div",15),o.Kb(32,"div",16),o.Kb(33,"h3"),o.hc(34,"Alliance Investment"),o.Hb(35,"br"),o.hc(36," Management Ltd"),o.Jb(),o.Kb(37,"h5"),o.hc(38,"Basic Investment"),o.Jb(),o.Kb(39,"span",17),o.Kb(40,"sup"),o.hc(41,"$"),o.Jb(),o.Kb(42,"span",18),o.hc(43,"100"),o.Jb(),o.hc(44,"/7 Days"),o.Jb(),o.Jb(),o.Kb(45,"div",19),o.Kb(46,"div",20),o.Kb(47,"ul"),o.Kb(48,"li"),o.Hb(49,"i",21),o.hc(50," $100 Minimum"),o.Jb(),o.Kb(51,"li"),o.Hb(52,"i",21),o.hc(53,"$4,999 Maximum"),o.Jb(),o.Kb(54,"li"),o.Hb(55,"i",21),o.hc(56,"1.2% on Investment"),o.Jb(),o.Kb(57,"li"),o.Hb(58,"i",21),o.hc(59," 7 Days Investment Period"),o.Jb(),o.Kb(60,"li"),o.Hb(61,"i",21),o.hc(62,"Refreral Bonus: 6%"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(63,"div",22),o.Kb(64,"a",23),o.hc(65,"Invest Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(66,"div",14),o.Kb(67,"div",15),o.Kb(68,"div",16),o.Kb(69,"h3"),o.hc(70,"Alliance Investment"),o.Hb(71,"br"),o.hc(72," Management Ltd"),o.Jb(),o.Kb(73,"h5"),o.hc(74,"Standard Investment"),o.Jb(),o.Kb(75,"span",17),o.Kb(76,"sup"),o.hc(77,"$"),o.Jb(),o.Kb(78,"span",18),o.hc(79,"5,000"),o.Jb(),o.hc(80,"/14 Days"),o.Jb(),o.Jb(),o.Kb(81,"div",19),o.Kb(82,"div",20),o.Kb(83,"ul"),o.Kb(84,"li"),o.Hb(85,"i",21),o.hc(86,"$5000 Minimum"),o.Jb(),o.Kb(87,"li"),o.Hb(88,"i",21),o.hc(89,"$9,999 Maximum"),o.Jb(),o.Kb(90,"li"),o.Hb(91,"i",21),o.hc(92,"2% on investment"),o.Jb(),o.Kb(93,"li"),o.Hb(94,"i",21),o.hc(95,"14 Days Investment Period"),o.Jb(),o.Kb(96,"li"),o.Hb(97,"i",21),o.hc(98,"Refreral Bonus: 6%"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(99,"div",22),o.Kb(100,"a",23),o.hc(101,"Invest Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(102,"div",14),o.Kb(103,"div",15),o.Kb(104,"div",16),o.Kb(105,"h3"),o.hc(106,"Alliance Investment"),o.Hb(107,"br"),o.hc(108," Management Ltd"),o.Jb(),o.Kb(109,"h5"),o.hc(110,"Premium Investment"),o.Jb(),o.Kb(111,"span",17),o.Kb(112,"sup"),o.hc(113,"$"),o.Jb(),o.Kb(114,"span",18),o.hc(115,"10,000"),o.Jb(),o.hc(116,"/21 Days"),o.Jb(),o.Jb(),o.Kb(117,"div",19),o.Kb(118,"div",20),o.Kb(119,"ul"),o.Kb(120,"li"),o.Hb(121,"i",21),o.hc(122,"$10,000 Minimum"),o.Jb(),o.Kb(123,"li"),o.Hb(124,"i",21),o.hc(125,"$99,999 Maximum"),o.Jb(),o.Kb(126,"li"),o.Hb(127,"i",21),o.hc(128,"3% on investment"),o.Jb(),o.Kb(129,"li"),o.Hb(130,"i",21),o.hc(131,"21 Days Investment Period"),o.Jb(),o.Kb(132,"li"),o.Hb(133,"i",21),o.hc(134,"Refreral Bonus: 6%"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(135,"div",22),o.Kb(136,"a",23),o.hc(137,"Invest Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(138,"div",14),o.Kb(139,"div",15),o.Kb(140,"div",16),o.Kb(141,"h3"),o.hc(142,"Alliance Investment"),o.Hb(143,"br"),o.hc(144," Management Ltd"),o.Jb(),o.Kb(145,"h5"),o.hc(146,"plantium Investments"),o.Jb(),o.Kb(147,"span",17),o.Kb(148,"sup"),o.hc(149,"$"),o.Jb(),o.Kb(150,"span",18),o.hc(151,"100,000"),o.Jb(),o.hc(152,"/90 Days"),o.Jb(),o.Jb(),o.Kb(153,"div",19),o.Kb(154,"div",20),o.Kb(155,"ul"),o.Kb(156,"li"),o.Hb(157,"i",21),o.hc(158,"$100,000 Minimum"),o.Jb(),o.Kb(159,"li"),o.Hb(160,"i",21),o.hc(161,"$unlimited Maximum"),o.Jb(),o.Kb(162,"li"),o.Hb(163,"i",21),o.hc(164,"5% on investment"),o.Jb(),o.Kb(165,"li"),o.Hb(166,"i",21),o.hc(167,"90 Days Investment Period"),o.Jb(),o.Kb(168,"li"),o.Hb(169,"i",21),o.hc(170,"Refreral Bonus: 6%"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(171,"div",22),o.Kb(172,"a",23),o.hc(173,"Invest Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&b&&(o.wb(14),o.Xb("routerLink",o.Yb(5,K)),o.wb(50),o.Xb("routerLink",o.Yb(6,m)),o.wb(36),o.Xb("routerLink",o.Yb(7,m)),o.wb(36),o.Xb("routerLink",o.Yb(8,m)),o.wb(36),o.Xb("routerLink",o.Yb(9,m)))},directives:[n.c],styles:[".bg[_ngcontent-%COMP%]{background-image:url(slide1.185d592bc6ca11614b7c.jpg)}"]}),b})(),v=(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=o.Ab({type:b,selectors:[["app-transactions"]],decls:2,vars:0,template:function(b,e){1&b&&(o.Kb(0,"p"),o.hc(1,"transactions works!"),o.Jb())},styles:[""]}),b})();const g=function(){return["/"]},w=function(){return["/user"]},f=function(){return["/user/new-invest"]},y=function(){return["/user/invest-history"]},_=function(){return["/user/recent"]},k=function(){return["/user/withdraw"]},H=function(){return["/user/withdraws"]},I=function(){return["/user/wallet"]},S=function(){return["/user/wallets"]},A=function(){return["/user/profile"]},L=function(){return["/user/password_change"]};let C=(()=>{class b{constructor(b,e){this._authService=b,this._router=e}ngOnInit(){this._authService.getUserInfo().subscribe(b=>{this.userdetail=b.user})}logout(){this._authService.deleteToken(),this._router.navigate(["/login"])}}return b.\u0275fac=function(e){return new(e||b)(o.Gb(a.a),o.Gb(n.a))},b.\u0275cmp=o.Ab({type:b,selectors:[["app-user"]],decls:86,vars:25,consts:[[1,"main-header","header-1"],[1,"top-area"],[1,"auto-container"],[1,"row"],[1,"col-lg-8","col-md-12","col-sm-12","col-12"],[1,"col-lg-4","col-md-12","col-sm-12","col-12"],[1,"info-menu"],[1,"logo-area"],[1,"col-lg-5","col-md-3","col-sm-6","col-7","mx-auto","pl-0","mb-lg-0","mb-5"],[1,"logo"],["href","",3,"routerLink"],["src","../../../assets/img/images/aliance.JPG","alt","",1,"img-fluid"],[1,"col-lg-7","col-md-12","col-sm-12","col-12"],[1,"header-info-box"],[1,"header-info-icon"],[1,"icofont","icofont-phone"],["href","",1,"quote-btn",3,"routerLink"],[1,"icofont","icofont-caret-right"],[1,"sticky-menu"],[1,"mainmenu-area"],[1,"col-lg-9","d-none","d-lg-block","d-md-none"],[1,"navbar","navbar-expand-lg","justify-content-left"],[1,"navbar-nav"],[1,"dropdown"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],["href","#",1,"nav-link"],[1,"dropdown-menu"],["routerLinkActive","active",3,"routerLink"],[1,"nav-link"],["href","service.html",1,"nav-link"],["href","",3,"click"],["href","",1,"nav-link"],[2,"float","right !important"]],template:function(b,e){1&b&&(o.Kb(0,"header",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Hb(4,"div",4),o.Kb(5,"div",5),o.Hb(6,"div",6),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(7,"div",7),o.Kb(8,"div",2),o.Kb(9,"div",3),o.Kb(10,"div",8),o.Kb(11,"div",9),o.Kb(12,"a",10),o.Hb(13,"img",11),o.Jb(),o.Jb(),o.Jb(),o.Kb(14,"div",12),o.Hb(15,"div",13),o.Kb(16,"div",13),o.Kb(17,"div",14),o.Hb(18,"i",15),o.Jb(),o.Kb(19,"p"),o.hc(20,"Call Us"),o.Jb(),o.Kb(21,"h6"),o.hc(22,"+447520627388"),o.Jb(),o.Jb(),o.Kb(23,"div",13),o.Kb(24,"a",16),o.hc(25,"Home "),o.Hb(26,"i",17),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(27,"div",18),o.Kb(28,"div",19),o.Kb(29,"div",2),o.Kb(30,"div",3),o.Kb(31,"div",20),o.Kb(32,"nav",21),o.Kb(33,"ul",22),o.Kb(34,"P",23),o.Kb(35,"a",24),o.hc(36,"Dashboard"),o.Jb(),o.Jb(),o.Kb(37,"li",23),o.Kb(38,"a",25),o.hc(39,"Investment"),o.Jb(),o.Kb(40,"ul",26),o.Kb(41,"li"),o.Kb(42,"a",27),o.hc(43,"New Investment"),o.Jb(),o.Jb(),o.Kb(44,"li"),o.Kb(45,"a",27),o.hc(46,"Investment Histroy"),o.Jb(),o.Jb(),o.Kb(47,"li"),o.Kb(48,"a",27),o.hc(49,"Recent Investment"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(50,"li",23),o.Kb(51,"a",28),o.hc(52,"Transaction"),o.Jb(),o.Kb(53,"ul",26),o.Kb(54,"li"),o.Kb(55,"a",27),o.hc(56,"Withdraw Fund"),o.Jb(),o.Jb(),o.Kb(57,"li"),o.Kb(58,"a",27),o.hc(59,"Withdraw Histroy"),o.Jb(),o.Jb(),o.Kb(60,"li"),o.Kb(61,"a",27),o.hc(62,"Desposit Fund"),o.Jb(),o.Jb(),o.Kb(63,"li"),o.Kb(64,"a",27),o.hc(65,"Deposit Histroy"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(66,"li",23),o.Kb(67,"a",29),o.hc(68,"MY PROFILE"),o.Jb(),o.Kb(69,"ul",26),o.Kb(70,"li"),o.Kb(71,"a",27),o.hc(72,"Edit Profile"),o.Jb(),o.Jb(),o.Kb(73,"li"),o.Kb(74,"a",27),o.hc(75,"Change Password"),o.Jb(),o.Jb(),o.Kb(76,"li"),o.Kb(77,"a",30),o.Rb("click",function(){return e.logout()}),o.hc(78,"Logout"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(79,"li"),o.Kb(80,"a",31),o.hc(81,"Contact"),o.Jb(),o.Jb(),o.Kb(82,"li",32),o.Kb(83,"a",28),o.hc(84),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Hb(85,"router-outlet")),2&b&&(o.wb(12),o.Xb("routerLink",o.Yb(13,g)),o.wb(12),o.Xb("routerLink",o.Yb(14,g)),o.wb(11),o.Xb("routerLink",o.Yb(15,w)),o.wb(7),o.Xb("routerLink",o.Yb(16,f)),o.wb(3),o.Xb("routerLink",o.Yb(17,y)),o.wb(3),o.Xb("routerLink",o.Yb(18,_)),o.wb(7),o.Xb("routerLink",o.Yb(19,k)),o.wb(3),o.Xb("routerLink",o.Yb(20,H)),o.wb(3),o.Xb("routerLink",o.Yb(21,I)),o.wb(3),o.Xb("routerLink",o.Yb(22,S)),o.wb(7),o.Xb("routerLink",o.Yb(23,A)),o.wb(3),o.Xb("routerLink",o.Yb(24,L)),o.wb(10),o.jc("Welcome ",null==e.userdetail?null:e.userdetail.name,""))},directives:[n.c,n.b,n.e],styles:[""]}),b})();var P=t("3Pt+");function D(b,e){if(1&b&&(o.Kb(0,"tr"),o.Kb(1,"td"),o.hc(2),o.Jb(),o.Kb(3,"td"),o.hc(4),o.Jb(),o.Kb(5,"td"),o.hc(6),o.Jb(),o.Kb(7,"td"),o.hc(8),o.Jb(),o.Kb(9,"td"),o.hc(10),o.Vb(11,"date"),o.Jb(),o.Jb()),2&b){const b=e.$implicit,t=e.index;o.wb(2),o.ic(t+1),o.wb(2),o.ic(null==b?null:b.depositor_source),o.wb(2),o.ic(null==b?null:b.deposited_amount),o.wb(2),o.ic(null==b?null:b.deposit_status),o.wb(2),o.ic(o.Wb(11,5,null==b?null:b.created_at))}}const F=function(){return["/"]},M=function(){return["/"]};function x(b,e){if(1&b&&(o.Kb(0,"tr"),o.Kb(1,"td"),o.hc(2),o.Jb(),o.Kb(3,"td"),o.hc(4),o.Jb(),o.Kb(5,"td"),o.hc(6),o.Jb(),o.Kb(7,"td"),o.hc(8),o.Jb(),o.Kb(9,"td"),o.hc(10),o.Vb(11,"date"),o.Jb(),o.Jb()),2&b){const b=e.$implicit,t=e.index;o.wb(2),o.jc(" ",t+1,""),o.wb(2),o.ic(null==b?null:b.withdraw_method),o.wb(2),o.ic(null==b?null:b.amount),o.wb(2),o.ic(null==b?null:b.withdraw_status),o.wb(2),o.ic(o.Wb(11,5,null==b?null:b.created_at))}}const N=function(){return["/"]},X=[{path:"",component:C,children:[{path:"",component:u},{path:"wallet",component:(()=>{class b{constructor(b,e,t,i,n){this._userService=b,this.formBuilder=e,this._router=t,this._authService=i,this.http=n,this.walletForm=this.formBuilder.group({deposited_amount:new P.c("",P.n.compose([P.n.required])),depositor_source:new P.c("",P.n.compose([P.n.required])),depositor_message:new P.c("",P.n.compose([P.n.required])),deposited_proof:""}),this.deposited_proof=[]}ngOnInit(){}handleFileUpload(b){for(var e=0;e<b.target.files.length;e++)this.deposited_proof.push(b.target.files[e])}submit(b){const e=new FormData,t={headers:new r.c({Accept:"application/json",Authorization:"Bearer "+this._authService.getToken()})},i={deposited_amount:this.walletForm.value.deposited_amount,depositor_source:this.walletForm.value.depositor_source,depositor_message:this.walletForm.value.depositor_message};e.append("deposited_amount",i.deposited_amount),e.append("depositor_source",i.depositor_source),e.append("depositor_message",i.depositor_message),e.append("deposited_proof",this.deposited_proof),console.log(b),this.http.post("https://allianceapi.herokuapp.com/api/v1/user/deposit",e,t).subscribe(b=>{console.log(b)},b=>{console.log(b)})}pay_btc_modal(){console.log("I want to pay with this platform.")}pay_ethereum_modal(){}pay_payeer_modal(){}pay_perfect_modal(){}pay_cash_modal(){}}return b.\u0275fac=function(e){return new(e||b)(o.Gb(l),o.Gb(P.b),o.Gb(n.a),o.Gb(a.a),o.Gb(r.a))},b.\u0275cmp=o.Ab({type:b,selectors:[["app-wallet"]],decls:285,vars:5,consts:[["id","page-banner"],["data-background","BBTC.png",1,"single-page-title-area","overlay","bg"],[1,"auto-container"],[1,"row"],[1,"col-12","text-center"],[1,"single-page-title"],[1,"single-page-title-area-bottom"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],["id","price",1,"section-padding","bg-gray"],[1,"container"],[1,"section-title"],[1,"col-lg-4","col-md-3","col-12","mb-lg-0","mb-md-0","mb-5"],[1,"single-pricing"],[1,"single-pricing-head","text-center"],["type","image","src","../../../assets/img/images/BBTC.png","width","100%","height","150",1,"img-thumbnail"],[1,"single-pricing-body"],[1,"single-pricing-button"],["data-toggle","modal","data-target","#btc",1,"mt-3","d-block","text-center","rounded-0","color_white",3,"click"],["type","image","src","../../../assets/img/cash.png","width","100%","height","150",1,"img-thumbnail"],["data-toggle","modal","data-target","#bitcash",1,"mt-3","d-block","text-center","rounded-0","color_white",3,"click"],["type","image","src","../../../assets/img/images/perfect.png","width","100%","height","150",1,"img-thumbnail"],["data-toggle","modal","data-target","#perfect",1,"mt-3","d-block","text-center","rounded-0","color_white",3,"click"],["type","image","src","../../../assets/img/images/payeer.png","width","100%","height","150",1,"img-thumbnail"],["data-toggle","modal","data-target","#payeer",1,"mt-3","color_white","d-block","text-center","rounded-0",3,"click"],["type","image","src","../../../assets/img/ethereum.png","width","100%","height","100",1,"img-thumbnail"],["data-toggle","modal","data-target","#ethereum",1,"mt-3","color_white","d-block","text-center","rounded-0",3,"click"],["id","btc",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","orange_color"],["type","button orange_color","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"col-12"],["return","","false","",1,"checkout-form","row",3,"formGroup"],[1,"form-group","col-12"],["for",""],["formControlName","deposited_amount","type","number","placeholder","Amount in Usd",1,"form-control"],["formControlName","depositor_source",1,"form-control"],["label","Payment Method"],["value","btc"],["type","file","formControlName","deposited_proof","multiple","","required","",1,"form-control",3,"change"],["type","text","formControlName","depositor_message","placeholder","Message",1,"form-control",2,"height","100px"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["id","bitcash",1,"modal","fade"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","orange_color"],["value","bitcoin_cash"],["id","perfect",1,"modal","fade"],["value","perfect_money"],["id","payeer",1,"modal","fade"],["value","payeer"],["id","ethereum",1,"modal","fade"],["value","ethereum"]],template:function(b,e){1&b&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Kb(4,"div",4),o.Kb(5,"div",5),o.Kb(6,"h2"),o.hc(7,"Deposit Preview "),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(8,"div",6),o.Kb(9,"div",2),o.Kb(10,"div",3),o.Kb(11,"div",4),o.Kb(12,"ol",7),o.Kb(13,"li",8),o.Kb(14,"a",9),o.hc(15,"Home"),o.Jb(),o.Jb(),o.Kb(16,"li",10),o.hc(17,"Deposit Preview"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(18,"section",11),o.Kb(19,"div",12),o.Kb(20,"div",3),o.Kb(21,"div",4),o.Kb(22,"div",13),o.Kb(23,"h5"),o.hc(24,"Alliance Investment Management Ltd"),o.Jb(),o.Kb(25,"h3"),o.hc(26,"Fund Your "),o.Kb(27,"span"),o.hc(28,"Using any of the detail below:"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(29,"div",3),o.Kb(30,"div",14),o.Kb(31,"div",15),o.Kb(32,"div",16),o.Hb(33,"img",17),o.Jb(),o.Hb(34,"div",18),o.Kb(35,"div",19),o.Kb(36,"a",20),o.Rb("click",function(){return e.pay_btc_modal()}),o.hc(37,"Fund Wallet Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(38,"div",14),o.Kb(39,"div",15),o.Kb(40,"div",16),o.Hb(41,"img",21),o.Jb(),o.Hb(42,"div",18),o.Kb(43,"div",19),o.Kb(44,"a",22),o.Rb("click",function(){return e.pay_cash_modal()}),o.hc(45,"Fund Wallet Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(46,"div",14),o.Kb(47,"div",15),o.Kb(48,"div",16),o.Hb(49,"img",23),o.Jb(),o.Hb(50,"div",18),o.Kb(51,"div",19),o.Kb(52,"a",24),o.Rb("click",function(){return e.pay_perfect_modal()}),o.hc(53,"Fund Wallet Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(54,"div",14),o.Kb(55,"div",15),o.Kb(56,"div",16),o.Hb(57,"img",25),o.Jb(),o.Hb(58,"div",18),o.Kb(59,"div",19),o.Kb(60,"a",26),o.Rb("click",function(){return e.pay_payeer_modal()}),o.hc(61,"Fund Wallet Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(62,"div",14),o.Kb(63,"div",15),o.Kb(64,"div",16),o.Hb(65,"img",27),o.Jb(),o.Hb(66,"div",18),o.Kb(67,"div",19),o.Kb(68,"a",28),o.Rb("click",function(){return e.pay_ethereum_modal()}),o.hc(69,"Fund Wallet Now"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(70,"div",29),o.Kb(71,"div",30),o.Kb(72,"div",31),o.Kb(73,"div",32),o.Kb(74,"h5",33),o.hc(75,"Pay Using BTC"),o.Jb(),o.Kb(76,"button",34),o.Kb(77,"span",35),o.hc(78,"\xd7"),o.Jb(),o.Jb(),o.Jb(),o.Kb(79,"div",36),o.Kb(80,"div",37),o.Kb(81,"h6"),o.hc(82,"SENDING DETAILS"),o.Jb(),o.Kb(83,"h6"),o.hc(84,"Send Amount:"),o.Jb(),o.Hb(85,"br"),o.Kb(86,"h6"),o.hc(87,"TO"),o.Jb(),o.Hb(88,"br"),o.Kb(89,"h6"),o.hc(90,"15yZCjbre5i3PFJgk81dWqkPEL9hBPoidr"),o.Jb(),o.Jb(),o.Hb(91,"br"),o.Kb(92,"form",38),o.Kb(93,"div",39),o.Kb(94,"label",40),o.hc(95,"Amount in USD"),o.Jb(),o.Hb(96,"input",41),o.Jb(),o.Kb(97,"div",39),o.Kb(98,"select",42),o.Kb(99,"optgroup",43),o.Kb(100,"option",44),o.hc(101,"BTC"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(102,"div",39),o.Kb(103,"label",40),o.hc(104,"Upload Deposit Proof"),o.Jb(),o.Kb(105,"input",45),o.Rb("change",function(b){return e.handleFileUpload(b)}),o.Jb(),o.Jb(),o.Kb(106,"div",39),o.Hb(107,"input",46),o.Jb(),o.Jb(),o.Jb(),o.Kb(108,"div",47),o.Kb(109,"button",48),o.Rb("click",function(){return e.submit(e.walletForm.value)}),o.hc(110,"Save changes"),o.Jb(),o.Kb(111,"button",49),o.hc(112,"Close"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(113,"div",50),o.Kb(114,"div",30),o.Kb(115,"div",31),o.Kb(116,"div",32),o.Kb(117,"h5",33),o.hc(118,"Pay Using Bitcash"),o.Jb(),o.Kb(119,"button",51),o.Kb(120,"span",35),o.hc(121,"\xd7"),o.Jb(),o.Jb(),o.Jb(),o.Kb(122,"div",36),o.Kb(123,"div",37),o.Kb(124,"h6"),o.hc(125,"SENDING DETAILS"),o.Jb(),o.Kb(126,"h6"),o.hc(127,"Send Amount:"),o.Jb(),o.Hb(128,"br"),o.Kb(129,"h6"),o.hc(130,"TO Bitcoin Cash Address:"),o.Jb(),o.Hb(131,"br"),o.Kb(132,"h6"),o.hc(133,"qqmf9tv6dfcjt8xp4dq252eg3yutlp8ehurlq5t9zr"),o.Jb(),o.Jb(),o.Hb(134,"br"),o.Kb(135,"form",38),o.Kb(136,"div",39),o.Kb(137,"label",40),o.hc(138,"Amount in USD"),o.Jb(),o.Hb(139,"input",41),o.Jb(),o.Kb(140,"div",39),o.Kb(141,"select",42),o.Kb(142,"optgroup",43),o.Kb(143,"option",52),o.hc(144,"Bitcoin Cash"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(145,"div",39),o.Kb(146,"label",40),o.hc(147,"Upload Deposit Proof"),o.Jb(),o.Kb(148,"input",45),o.Rb("change",function(b){return e.handleFileUpload(b)}),o.Jb(),o.Jb(),o.Kb(149,"div",39),o.Hb(150,"input",46),o.Jb(),o.Jb(),o.Jb(),o.Kb(151,"div",47),o.Kb(152,"button",48),o.Rb("click",function(){return e.submit(e.walletForm.value)}),o.hc(153,"Save changes"),o.Jb(),o.Kb(154,"button",49),o.hc(155,"Close"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(156,"div",53),o.Kb(157,"div",30),o.Kb(158,"div",31),o.Kb(159,"div",32),o.Kb(160,"h5",33),o.hc(161,"Using Perfect Money"),o.Jb(),o.Kb(162,"button",51),o.Kb(163,"span",35),o.hc(164,"\xd7"),o.Jb(),o.Jb(),o.Jb(),o.Kb(165,"div",36),o.Kb(166,"div",37),o.Kb(167,"h6"),o.hc(168,"SENDING DETAILS"),o.Jb(),o.Kb(169,"h6"),o.hc(170,"Send Amount:"),o.Jb(),o.Hb(171,"br"),o.Kb(172,"h6"),o.hc(173,"TO Perfectmoney account:"),o.Jb(),o.Hb(174,"br"),o.Kb(175,"h6"),o.hc(176,"U28219496"),o.Jb(),o.Jb(),o.Hb(177,"br"),o.Kb(178,"form",38),o.Kb(179,"div",39),o.Kb(180,"label",40),o.hc(181,"Amount in USD"),o.Jb(),o.Hb(182,"input",41),o.Jb(),o.Kb(183,"div",39),o.Kb(184,"select",42),o.Kb(185,"optgroup",43),o.Kb(186,"option",54),o.hc(187,"Perfect Money"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(188,"div",39),o.Kb(189,"label",40),o.hc(190,"Upload Deposit Proof"),o.Jb(),o.Kb(191,"input",45),o.Rb("change",function(b){return e.handleFileUpload(b)}),o.Jb(),o.Jb(),o.Kb(192,"div",39),o.Hb(193,"input",46),o.Jb(),o.Jb(),o.Jb(),o.Kb(194,"div",47),o.Kb(195,"button",48),o.Rb("click",function(){return e.submit(e.walletForm.value)}),o.hc(196,"Save changes"),o.Jb(),o.Kb(197,"button",49),o.hc(198,"Close"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(199,"div",55),o.Kb(200,"div",30),o.Kb(201,"div",31),o.Kb(202,"div",32),o.Kb(203,"h5",33),o.hc(204,"Pay Using Payeer"),o.Jb(),o.Kb(205,"button",51),o.Kb(206,"span",35),o.hc(207,"\xd7"),o.Jb(),o.Jb(),o.Jb(),o.Kb(208,"div",36),o.Kb(209,"div",37),o.Kb(210,"h6"),o.hc(211,"SENDING DETAILS"),o.Jb(),o.Kb(212,"h6"),o.hc(213,"Send Amount:"),o.Jb(),o.Hb(214,"br"),o.Kb(215,"h6"),o.hc(216,"TO Perfectmoney account:"),o.Jb(),o.Hb(217,"br"),o.Kb(218,"h6"),o.hc(219,"U28219496"),o.Jb(),o.Jb(),o.Hb(220,"br"),o.Kb(221,"form",38),o.Kb(222,"div",39),o.Kb(223,"label",40),o.hc(224,"Amount in USD"),o.Jb(),o.Hb(225,"input",41),o.Jb(),o.Kb(226,"div",39),o.Kb(227,"select",42),o.Kb(228,"optgroup",43),o.Kb(229,"option",56),o.hc(230,"Payeer Money"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(231,"div",39),o.Kb(232,"label",40),o.hc(233,"Upload Deposit Proof"),o.Jb(),o.Kb(234,"input",45),o.Rb("change",function(b){return e.handleFileUpload(b)}),o.Jb(),o.Jb(),o.Kb(235,"div",39),o.Hb(236,"input",46),o.Jb(),o.Jb(),o.Jb(),o.Kb(237,"div",47),o.Kb(238,"button",48),o.Rb("click",function(){return e.submit(e.walletForm.value)}),o.hc(239,"Save changes"),o.Jb(),o.Kb(240,"button",49),o.hc(241,"Close"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(242,"div",57),o.Kb(243,"div",30),o.Kb(244,"div",31),o.Kb(245,"div",32),o.Kb(246,"h5",33),o.hc(247,"Pay Using Ethereum"),o.Jb(),o.Kb(248,"button",51),o.Kb(249,"span",35),o.hc(250,"\xd7"),o.Jb(),o.Jb(),o.Jb(),o.Kb(251,"div",36),o.Kb(252,"div",37),o.Kb(253,"h6"),o.hc(254,"SENDING DETAILS"),o.Jb(),o.Kb(255,"h6"),o.hc(256,"Send Amount:"),o.Jb(),o.Hb(257,"br"),o.Kb(258,"h6"),o.hc(259,"TO Ethereum:"),o.Jb(),o.Hb(260,"br"),o.Kb(261,"h6"),o.hc(262,"0x93F05e75E224d1cE6cc122eCbCF43065d8B287fF"),o.Jb(),o.Jb(),o.Hb(263,"br"),o.Kb(264,"form",38),o.Kb(265,"div",39),o.Kb(266,"label",40),o.hc(267,"Amount in USD"),o.Jb(),o.Hb(268,"input",41),o.Jb(),o.Kb(269,"div",39),o.Kb(270,"select",42),o.Kb(271,"optgroup",43),o.Kb(272,"option",58),o.hc(273,"Ethereum"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(274,"div",39),o.Kb(275,"label",40),o.hc(276,"Upload Deposit Proof"),o.Jb(),o.Kb(277,"input",45),o.Rb("change",function(b){return e.handleFileUpload(b)}),o.Jb(),o.Jb(),o.Kb(278,"div",39),o.Hb(279,"input",46),o.Jb(),o.Jb(),o.Jb(),o.Kb(280,"div",47),o.Kb(281,"button",48),o.Rb("click",function(){return e.submit(e.walletForm.value)}),o.hc(282,"Save changes"),o.Jb(),o.Kb(283,"button",49),o.hc(284,"Close"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&b&&(o.wb(92),o.Xb("formGroup",e.walletForm),o.wb(43),o.Xb("formGroup",e.walletForm),o.wb(43),o.Xb("formGroup",e.walletForm),o.wb(43),o.Xb("formGroup",e.walletForm),o.wb(43),o.Xb("formGroup",e.walletForm))},directives:[P.p,P.h,P.e,P.a,P.j,P.g,P.d,P.m,P.i,P.o,P.l],styles:[".bg[_ngcontent-%COMP%]{background-image:url(BBTC.35f798d1cf53d56a621a.png)}.color_white[_ngcontent-%COMP%]{color:#fff!important;cursor:pointer}.orange_color[_ngcontent-%COMP%]{color:#e63205!important}.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover{background-color:#e63205!important;border-color:#e63205!important}.btn-primary[_ngcontent-%COMP%]:hover{color:#fff}"]}),b})()},{path:"wallets",component:(()=>{class b{constructor(b){this._userService=b}ngOnInit(){this.getHistory()}getHistory(){this._userService.getwalletHistory().subscribe(b=>{console.log(b),this.wallets=b.data},b=>{console.log(b)})}}return b.\u0275fac=function(e){return new(e||b)(o.Gb(l))},b.\u0275cmp=o.Ab({type:b,selectors:[["app-wallets"]],decls:38,vars:3,consts:[["id","page-banner"],["data-background","assets/img/bg/slide1.jpg",1,"single-page-title-area","overlay","bg"],[1,"auto-container"],[1,"row"],[1,"col-12","text-center"],[1,"single-page-title"],[1,"single-page-title-area-bottom"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["id","wallet",1,"section-padding"],[1,"container"],[1,"col-md-12"],[1,"table-responsive"],[1,"table","table-striped","table-sm"],[4,"ngFor","ngForOf"]],template:function(b,e){1&b&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Kb(4,"div",4),o.Kb(5,"div",5),o.Kb(6,"h2"),o.hc(7,"Alliace Investment Management ltd Wallet"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(8,"div",6),o.Kb(9,"div",2),o.Kb(10,"div",3),o.Kb(11,"div",4),o.Kb(12,"ol",7),o.Kb(13,"li",8),o.Kb(14,"a",9),o.hc(15,"Home"),o.Jb(),o.Jb(),o.Kb(16,"li",10),o.hc(17,"Wallet History"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(18,"section",11),o.Kb(19,"div",12),o.Kb(20,"div",3),o.Kb(21,"div",13),o.Kb(22,"div",14),o.Kb(23,"table",15),o.Kb(24,"thead"),o.Kb(25,"tr"),o.Kb(26,"th"),o.hc(27,"S/N"),o.Jb(),o.Kb(28,"th"),o.hc(29,"Payment Source"),o.Jb(),o.Kb(30,"th"),o.hc(31,"Amount"),o.Jb(),o.Kb(32,"th"),o.hc(33,"Status"),o.Jb(),o.Kb(34,"th"),o.hc(35,"Date"),o.Jb(),o.Jb(),o.Jb(),o.Kb(36,"tbody"),o.fc(37,D,12,7,"tr",16),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&b&&(o.wb(14),o.Xb("routerLink",o.Yb(2,F)),o.wb(23),o.Xb("ngForOf",e.wallets))},directives:[n.c,i.i],pipes:[i.d],styles:[".bg[_ngcontent-%COMP%]{background-image:url(slide1.185d592bc6ca11614b7c.jpg)}"]}),b})()},{path:"withdraw",component:(()=>{class b{constructor(b,e,t,i){this._userService=b,this.formBuilder=e,this._router=t,this._authService=i,this.withdrawForm=this.formBuilder.group({amount:new P.c("",P.n.compose([P.n.required])),token:new P.c("",P.n.compose([P.n.required])),message:new P.c("",P.n.compose([P.n.required])),withdraw_method:new P.c("",P.n.compose([P.n.required]))}),this.deposited_proof=[]}ngOnInit(){}submit(b){this._userService.requestWithdraw(this.withdrawForm.value).subscribe(b=>{this.withdrawForm.reset(),console.log(b),this._router.navigate(["/user/withdraws"])},b=>{console.log(b),console.log(b)})}}return b.\u0275fac=function(e){return new(e||b)(o.Gb(l),o.Gb(P.b),o.Gb(n.a),o.Gb(a.a))},b.\u0275cmp=o.Ab({type:b,selectors:[["app-withdraw"]],decls:53,vars:3,consts:[["id","page-banner"],["data-background","assets/img/bg/slide1.jpg",1,"single-page-title-area","overlay","bg"],[1,"auto-container"],[1,"row"],[1,"col-12","text-center"],[1,"single-page-title"],[1,"single-page-title-area-bottom"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["id","wallet",1,"section-padding"],[1,"container"],[1,"col-md-6"],["src","./../../../assets/img/Withdraw.jpg","alt","",1,"img-thumbnail"],["return","","false","",1,"checkout-form","row",3,"formGroup"],[1,"form-group","col-12"],["for",""],["formControlName","amount","type","text","placeholder","Amount in Usd",1,"form-control"],["formControlName","token","type","text","placeholder","Your Wallet ID",1,"form-control"],["name","cars","formControlName","withdraw_method",1,"form-control"],["label","Payment Method"],["value","btc"],["value","bitcoin_cash"],["value","perfect_money"],["value","payeer"],["value","ethereum"],["type","text","formControlName","message","name","city","placeholder","Drop a Message",1,"form-control",2,"height","100px"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(b,e){1&b&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Kb(4,"div",4),o.Kb(5,"div",5),o.Kb(6,"h2"),o.hc(7,"Alliace Investment Management ltd Wallet"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(8,"div",6),o.Kb(9,"div",2),o.Kb(10,"div",3),o.Kb(11,"div",4),o.Kb(12,"ol",7),o.Kb(13,"li",8),o.Kb(14,"a",9),o.hc(15,"Home"),o.Jb(),o.Jb(),o.Kb(16,"li",10),o.hc(17,"Withdraw"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(18,"section",11),o.Kb(19,"div",12),o.Kb(20,"div",3),o.Kb(21,"div",13),o.Hb(22,"img",14),o.Jb(),o.Kb(23,"div",13),o.Kb(24,"form",15),o.Kb(25,"div",16),o.Kb(26,"label",17),o.hc(27,"Amount in USD"),o.Jb(),o.Hb(28,"input",18),o.Jb(),o.Kb(29,"div",16),o.Kb(30,"label",17),o.hc(31,"Wallet ID"),o.Jb(),o.Hb(32,"input",19),o.Jb(),o.Kb(33,"div",16),o.Kb(34,"label",17),o.hc(35,"Payment Method"),o.Jb(),o.Kb(36,"select",20),o.Kb(37,"optgroup",21),o.Kb(38,"option",22),o.hc(39,"BTC"),o.Jb(),o.Kb(40,"option",23),o.hc(41,"Bitcoin Cash"),o.Jb(),o.Kb(42,"option",24),o.hc(43,"Perfect Money"),o.Jb(),o.Kb(44,"option",25),o.hc(45,"Payeer Money"),o.Jb(),o.Kb(46,"option",26),o.hc(47,"Ethereum"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(48,"div",16),o.Hb(49,"input",27),o.Jb(),o.Kb(50,"div",16),o.Kb(51,"button",28),o.Rb("click",function(){return e.submit(e.withdrawForm.value)}),o.hc(52,"Save changes"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&b&&(o.wb(14),o.Xb("routerLink",o.Yb(2,M)),o.wb(10),o.Xb("formGroup",e.withdrawForm))},directives:[n.c,P.p,P.h,P.e,P.a,P.g,P.d,P.m,P.i,P.o],styles:[".bg[_ngcontent-%COMP%]{background-image:url(slide1.185d592bc6ca11614b7c.jpg)}"]}),b})()},{path:"withdraws",component:(()=>{class b{constructor(b){this._userService=b}ngOnInit(){this._userService.getwithdrawHistory().subscribe(b=>{this.withdraws=b.data,console.log(this.withdraws)},b=>{console.log(b)})}}return b.\u0275fac=function(e){return new(e||b)(o.Gb(l))},b.\u0275cmp=o.Ab({type:b,selectors:[["app-withdraws"]],decls:38,vars:3,consts:[["id","page-banner"],["data-background","assets/img/bg/slide1.jpg",1,"single-page-title-area","overlay","bg"],[1,"auto-container"],[1,"row"],[1,"col-12","text-center"],[1,"single-page-title"],[1,"single-page-title-area-bottom"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["id","wallet",1,"section-padding"],[1,"container"],[1,"col-md-12"],[1,"table-responsive"],[1,"table","table-striped","table-sm"],[4,"ngFor","ngForOf"]],template:function(b,e){1&b&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Kb(4,"div",4),o.Kb(5,"div",5),o.Kb(6,"h2"),o.hc(7,"Alliace Investment Management ltd Wallet"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(8,"div",6),o.Kb(9,"div",2),o.Kb(10,"div",3),o.Kb(11,"div",4),o.Kb(12,"ol",7),o.Kb(13,"li",8),o.Kb(14,"a",9),o.hc(15,"Home"),o.Jb(),o.Jb(),o.Kb(16,"li",10),o.hc(17,"Withdraw History"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(18,"section",11),o.Kb(19,"div",12),o.Kb(20,"div",3),o.Kb(21,"div",13),o.Kb(22,"div",14),o.Kb(23,"table",15),o.Kb(24,"thead"),o.Kb(25,"tr"),o.Kb(26,"th"),o.hc(27,"S/N"),o.Jb(),o.Kb(28,"th"),o.hc(29,"Payment Source"),o.Jb(),o.Kb(30,"th"),o.hc(31,"Amount"),o.Jb(),o.Kb(32,"th"),o.hc(33,"Status"),o.Jb(),o.Kb(34,"th"),o.hc(35,"Date"),o.Jb(),o.Jb(),o.Jb(),o.Kb(36,"tbody"),o.fc(37,x,12,7,"tr",16),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&b&&(o.wb(14),o.Xb("routerLink",o.Yb(2,N)),o.wb(23),o.Xb("ngForOf",e.withdraws))},directives:[n.c,i.i],pipes:[i.d],styles:[""]}),b})()},{path:"transactions",component:v},{path:"new-invest",component:p},{path:"invest-history",component:J}]}];let B=(()=>{class b{}return b.\u0275mod=o.Eb({type:b}),b.\u0275inj=o.Db({factory:function(e){return new(e||b)},imports:[[n.d.forChild(X)],n.d]}),b})();var T=t("PCNd");let U=(()=>{class b{}return b.\u0275mod=o.Eb({type:b}),b.\u0275inj=o.Db({factory:function(e){return new(e||b)},imports:[[i.b,B,T.a,n.d,P.f,P.k]]}),b})()}}]);