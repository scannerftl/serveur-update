"use strict";(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[9161],{9161:(Ce,E,a)=>{a.r(E),a.d(E,{MarqueModule:()=>ge});var b=a(6814),T=a(8281),z=a(9989),K=a(1946),t=a(9468);let L=(()=>{class e extends z.v{getResourceBasePath(){return`${K.y}/maker-equipement`}getPrintAll(){return this.http.post(`${this.url}/${this.getResourceBasePath()}/print/all`,{},{observe:"response",responseType:"blob"})}static#t=this.\u0275fac=function(){let i;return function(c){return(i||(i=t.n5z(e)))(c||e)}}();static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var p=a(95);let y=(()=>{class e{constructor(){}createForm(i){return new p.cw({libelle:new p.NI(i.libelle,{nonNullable:!0,validators:[p.kI.required]}),description:new p.NI(i.description),activityDomain:new p.NI(i.activityDomain),webSite:new p.NI(i.webSite),address:new p.NI(i.address),utilisateurModification:new p.NI(i.utilisateurModification),utilisateurCreation:new p.NI(i.utilisateurCreation),dateCreation:new p.NI(i.dateCreation),dateDerniereModification:new p.NI(i.dateDerniereModification)})}createSearchForm(){return new p.cw({libelle:new p.NI("",{nonNullable:!0,validators:[p.kI.required]}),description:new p.NI("",{nonNullable:!0,validators:[p.kI.required]})})}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var Y=a(2572),g=a(7398),o=a(676);const m="Marque",Q=(0,o.PH)(`[${m} API] Load All`),k=(0,o.PH)(`[${m} API] Load All Success`,(0,o.Ky)()),R=(0,o.PH)(`[${m} API] Create`,(0,o.Ky)()),W=(0,o.PH)(`[${m} API] Create Success`,(0,o.Ky)()),j=(0,o.PH)(`[${m} API] Create Error`,(0,o.Ky)()),V=(0,o.PH)(`[${m} API] Reset Error`),X=(0,o.PH)(`[${m} API] Reset Error Field`,(0,o.Ky)()),tt=(0,o.PH)(`[${m} API] Load`,(0,o.Ky)()),et=(0,o.PH)(`[${m} API] Load Success`,(0,o.Ky)()),it=(0,o.PH)(`[${m} API] Reset`),rt=(0,o.PH)(`[${m} API] Delete`,(0,o.Ky)()),ot=(0,o.PH)(`[${m} API] Delete Success`,(0,o.Ky)()),s={loadItems:Q,loadItemsSuccess:k,resetItem:it,createItem:R,createItemSuccess:W,loadItem:tt,loadItemSuccess:et,updateItem:(0,o.PH)(`[${m} API] Update`,(0,o.Ky)()),updateItemSuccess:(0,o.PH)(`[${m} API] Update Success`,(0,o.Ky)()),deleteItem:rt,deleteItemSuccess:ot,setError:j,resetError:V,resetErrorField:X,loadFormModel:(0,o.PH)(`[${m} API] Load Form Model`),resetFormModel:(0,o.PH)(`[${m} API] Reset Form Model`),loadFormModelSuccess:(0,o.PH)(`[${m} API] Load Form Model Success`,(0,o.Ky)()),resetSearch:(0,o.PH)(`[${m} API] Reset Search`),search:(0,o.PH)(`[${m} API] Search`,(0,o.Ky)()),changePage:(0,o.PH)(`[${m} API] Change Page`,(0,o.Ky)()),changePageSize:(0,o.PH)(`[${m} API] Change Page Size`,(0,o.Ky)()),downloadFile:(0,o.PH)(`[${m} API] Download File`),downloadFileSuccess:(0,o.PH)(`[${m} API] Download File Success`)},gt=(0,o.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,o.on)(s.loadItemsSuccess,(e,n)=>(console.log(n.items),{...e,items:n.items,totalElement:n.totalElement})),(0,o.on)(s.resetItem,(e,n)=>({...e,currentItem:null})),(0,o.on)(s.createItemSuccess,(e,n)=>({...e})),(0,o.on)(s.deleteItemSuccess,(e,n)=>({...e})),(0,o.on)(s.loadItemSuccess,(e,n)=>({...e,currentItem:n.item})),(0,o.on)(s.updateItemSuccess,(e,n)=>({...e})),(0,o.on)(s.loadFormModel,(e,n)=>({...e,formModel:null})),(0,o.on)(s.loadFormModelSuccess,(e,n)=>({...e,formModel:n.formModel})),(0,o.on)(s.resetSearch,(e,n)=>({...e,searchModel:{}})),(0,o.on)(s.search,(e,n)=>(console.log(n.searchModel),{...e,searchModel:n.searchModel})),(0,o.on)(s.changePage,(e,n)=>({...e,page:n.page})),(0,o.on)(s.changePageSize,(e,n)=>({...e,pageSize:n.pageSize})),(0,o.on)(s.setError,(e,n)=>({...e,errors:n.errors})),(0,o.on)(s.resetError,(e,n)=>({...e,errors:null})),(0,o.on)(s.resetErrorField,(e,n)=>{let i={};return null!==e.errors&&Object.entries(e.errors).forEach(([r,c])=>{r!==n.fieldName&&(i[`${r}`]=c)}),{...e,errors:i}})),v=(0,o.ZF)("marques"),vt=(0,o.P1)(v,e=>e.items),Ct=(0,o.P1)(v,e=>e.currentItem),$=(0,o.P1)(v,e=>e.formModel),bt=(0,o.P1)(v,e=>e.searchModel),D=(0,o.P1)(v,e=>e.page),N=(0,o.P1)(v,e=>e.pageSize),Mt=(0,o.P1)(v,e=>e.totalElement),Zt=(0,o.P1)(v,e=>e.errors);var St=a(1227),xt=a(4849),I=a(797),U=a(3849),Tt=a(7251),qt=a(166),yt=a(6327),It=a(8564),At=a(8223),Pt=a(602),Ft=a(1469),Et=a(6326),B=a(8346),w=a(1171),H=a(547),A=a(362);function Lt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"R\xe9f\xe9rence"),t.qZA())}function $t(e,n){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.refSys)}}function Dt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Libell\xe9"),t.qZA())}function Nt(e,n){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.libelle)}}function Ut(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Description"),t.qZA())}function Bt(e,n){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.description)}}function wt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Domaine d'Activit\xe9"),t.qZA())}function Ht(e,n){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.activityDomain)}}function Ot(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Site Web"),t.qZA())}function Gt(e,n){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.webSite)}}function Jt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Adresse"),t.qZA())}function zt(e,n){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.address)}}function Kt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Date cr\xe9ation"),t.qZA())}function Yt(e,n){if(1&e&&(t.TgZ(0,"td",38),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,i.dateCreation,"dd/MM/y \xe0 HH:mm:ss"))}}function Qt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Date Derni\xe8re Modif"),t.qZA())}function kt(e,n){if(1&e&&(t.TgZ(0,"td",38),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,i.dateDerniereModification,"dd/MM/y \xe0 HH:mm:ss"))}}function Rt(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"table",24),t.NdJ("itemSelected",function(c){t.CHM(i);const f=t.oxw(2);return t.KtG(f.itemSelected(c))}),t.ynx(1,25),t.YNc(2,Lt,2,0,"th",26),t.YNc(3,$t,2,1,"td",27),t.BQk(),t.ynx(4,28),t.YNc(5,Dt,2,0,"th",26),t.YNc(6,Nt,2,1,"td",27),t.BQk(),t.ynx(7,29),t.YNc(8,Ut,2,0,"th",26),t.YNc(9,Bt,2,1,"td",27),t.BQk(),t.ynx(10,30),t.YNc(11,wt,2,0,"th",26),t.YNc(12,Ht,2,1,"td",27),t.BQk(),t.ynx(13,31),t.YNc(14,Ot,2,0,"th",26),t.YNc(15,Gt,2,1,"td",27),t.BQk(),t.ynx(16,32),t.YNc(17,Jt,2,0,"th",26),t.YNc(18,zt,2,1,"td",27),t.BQk(),t.ynx(19,33),t.YNc(20,Kt,2,0,"th",26),t.YNc(21,Yt,3,4,"td",34),t.BQk(),t.ynx(22,35),t.YNc(23,Qt,2,0,"th",26),t.YNc(24,kt,3,4,"td",34),t.BQk(),t.qZA()}if(2&e){const i=n.ngIf,r=t.oxw(2);t.Q6J("items",i)("headers",r.headerTable)("selectable",!0)}}function Wt(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"app-crud-list",3),t.NdJ("searchButtonClicked",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.searchButtonClicked())})("refreshButtonClicked",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.refreshButtonClicked())})("pageSelected",function(c){t.CHM(i);const f=t.oxw();return t.KtG(f.pageSelected(c))})("pageSizeChange",function(c){t.CHM(i);const f=t.oxw();return t.KtG(f.pageSizeChange(c))})("closeButtonClicked",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.closeButtonClicked())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6),t._UZ(4,"app-form-label",7),t.qZA(),t.TgZ(5,"div",8),t._UZ(6,"app-custom-textfield",9),t.qZA()()(),t.TgZ(7,"div",10)(8,"div",11)(9,"div",6),t._UZ(10,"app-form-label",12),t.qZA(),t.TgZ(11,"div",8),t._UZ(12,"app-custom-textfield",13),t.qZA()()(),t.TgZ(13,"div",14)(14,"app-custom-button",15),t.NdJ("buttonClicked",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.addButtonClicked())}),t.qZA(),t.TgZ(15,"app-custom-button",16),t.NdJ("buttonClicked",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.editButtonClicked())}),t.qZA(),t.TgZ(16,"app-custom-button",17),t.NdJ("buttonClicked",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.deleteButtonClicked())}),t.qZA()(),t.TgZ(17,"div",18),t._UZ(18,"app-custom-button",19)(19,"app-custom-button",20),t.TgZ(20,"app-print-button",21),t.NdJ("printButtonClicked",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.printButtonClicked())}),t.qZA()(),t.TgZ(21,"div",22),t.YNc(22,Rt,25,3,"table",23),t.ALo(23,"async"),t.qZA()()}if(2&e){const i=n.ngIf,r=t.oxw();t.Q6J("itemSelected",r.isItemSelected())("pageSize",i.pageSize)("currentPage",i.page)("totalElements",i.totalElement),t.xp6(1),t.Q6J("formGroup",r.searchForm),t.xp6(6),t.Q6J("formGroup",r.searchForm),t.xp6(8),t.Q6J("disabled",!r.isItemSelected()),t.xp6(1),t.Q6J("disabled",!r.isItemSelected()),t.xp6(6),t.Q6J("ngIf",t.lcZ(23,9,r.items$))}}(0,b.qS)(St.Z,"fr-Fr");let jt=(()=>{class e{constructor(i,r,c,f){this.router=i,this.modalService=r,this.store=c,this.marqueFormService=f,this.headerTable=["R\xe9f\xe9rence","Lib\xe9ll\xe9","Description","DomaineActivit\xe9","Site web","Adresse","Date Cr\xe9ation","Date Derni\xe8re Modif"],this.items$=this.store.select(vt),this.page$=this.store.select(D),this.pageSize$=this.store.select(N),this.totalElement$=this.store.select(Mt),this.data$=(0,Y.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,g.U)(([Z,F,u])=>({page:Z,pageSize:F,totalElement:u}))),this.selectedItem=null}ngOnInit(){this.searchForm=this.marqueFormService.createSearchForm(),this.store.dispatch(s.loadItems())}addButtonClicked(){this.router.navigate(["parc-informatique","marque","add"])}editButtonClicked(){const i=this.selectedItem?.id;i&&(this.store.dispatch(s.resetItem()),this.router.navigate(["parc-informatique","marque","edit",i]))}deleteButtonClicked(){const i=this.selectedItem;i&&this.modalService.openComponent(xt.n,{size:"md",otherclass:"custom-modal-height"}).afterClosed.subscribe(r=>{r&&"yes"===r&&this.store.dispatch(s.deleteItem({item:i}))})}itemSelected(i){this.selectedItem=i}pageSelected(i){this.store.dispatch(s.changePage({page:i}))}pageSizeChange(i){this.store.dispatch(s.changePageSize({pageSize:i}))}closeButtonClicked(){this.router.navigate(["parc-informatique"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(s.resetSearch())}searchButtonClicked(){this.store.dispatch(s.search({searchModel:this.searchForm.value}))}printButtonClicked(){this.store.dispatch(s.downloadFile())}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(T.F0),t.Y36(I.Z),t.Y36(o.yh),t.Y36(y))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-marque-list"]],features:[t._Bn([y,{provide:t.soG,useValue:"fr-FR"}])],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","R\xe9f\xe9rentiel","pathLevelTwo","Fabricants","pathLevelThree","Liste"],["title","Liste des fabricants",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","Liste des fabricants",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row","align-items-center"],[1,"text-end","me-1","width-label-search"],["title","Libell\xe9"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","libelle"],[1,"advance-search",3,"formGroup"],[1,"d-flex","flex-row","mt-2","align-items-center"],["title","Description"],["placeholder","","otherclass","item-input","formControlName","description"],[1,"primary-actions"],["icon","icon-plus btn-icon-add fw-bold","title","Ajouter",1,"me-1",3,"buttonClicked"],["icon","icon-edit-alt btn-icon-edit","title","Modifier",1,"me-1",3,"disabled","buttonClicked"],["icon","icon-trash btn-icon-delete","title","Supprimer",3,"disabled","buttonClicked"],[1,"secondary-actions","d-flex"],["customClass","btn btn-sm button-action","title","Importer","url","import.svg"],["customClass","btn btn-sm button-action","title","Exporter","url","export.svg",1,"me-1","ms-1"],[3,"printButtonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","R\xe9f\xe9rence"],["app-header-attribute-def-template","",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","text-start",4,"appCellDefTemplate"],["appCellDef","Lib\xe9ll\xe9"],["appCellDef","Description"],["appCellDef","DomaineActivit\xe9"],["appCellDef","Site web"],["appCellDef","Adresse"],["appCellDef","Date Cr\xe9ation"],["app-cell-def-template","",4,"appCellDefTemplate"],["appCellDef","Date Derni\xe8re Modif"],["app-header-attribute-def-template",""],["app-cell-def-template","",1,"text-start"],["app-cell-def-template",""]],template:function(r,c){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,Wt,24,11,"app-crud-list",2),t.ALo(3,"async")),2&r&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,c.data$)))},dependencies:[U.L,b.O5,p.JJ,p.JL,p.sg,p.u,Tt._,qt.x,yt.N,It.D,At.h,Pt.u,Ft.O,Et.q,B.W,w.h,H.Z,A.V,b.Ov,b.uU],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}"]})}return e})();var d=a(6465),Vt=a(9207),C=a(6328),Xt=a(9026),P=a(9397),O=a(1631),_=a(2096),te=a(9862),M=a(6306),h=a(6063),ee=a(2460),ie=a(3186),re=a(4664),oe=a(217),se=a(6366);let ne=(()=>{class e{constructor(i,r,c,f,Z,F){this.marqueService=i,this.authService=r,this.actions$=c,this.router=f,this.modalService=Z,this.store=F,this.loadItems$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.loadItems),(0,ee.M)(this.store.select(D),this.store.select(N),this.store.select(bt)),(0,C.b)(([u,l,S,q])=>(console.log(l),this.store.dispatch((0,h.Q)()),(0,Xt.$)(this.marqueService.getAllWithPagination(l,S,q),this.marqueService.count(q)).pipe((0,g.U)(([x,ve])=>(this.store.dispatch((0,h.Z)()),s.loadItemsSuccess({items:x,totalElement:ve}))),(0,M.K)(x=>(this.store.dispatch((0,h.Z)()),(0,_.of)(s.setError({errors:x})))))))),{dispatch:!0}),this.createItem$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.createItem),(0,C.b)(u=>(this.store.dispatch((0,h.Q)()),this.marqueService.add(u.item).pipe((0,P.b)(()=>{this.store.dispatch((0,h.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Marque ajout\xe9e avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/marque")}),(0,g.U)(l=>s.createItemSuccess({item:l})),(0,M.K)(l=>(this.store.dispatch((0,h.Z)()),(0,_.of)(s.setError({errors:l})))))))),{dispatch:!0}),this.loadItem$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.loadItem),(0,O.z)(u=>this.marqueService.findById(u.id).pipe((0,g.U)(l=>s.loadItemSuccess({item:l})),(0,M.K)(l=>(this.store.dispatch((0,h.Z)()),(0,_.of)(s.setError({errors:l}))))))),{dispatch:!0}),this.deleteItem$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.deleteItem),(0,C.b)(u=>this.marqueService.delete(u.item.id,u.item)),(0,P.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Marque supprim\xe9e avec succ\xe8s"})}),(0,g.U)(()=>s.loadItems()),(0,M.K)(u=>(this.store.dispatch((0,h.Z)()),(0,_.of)(s.setError({errors:u}))))),{dispatch:!0}),this.updateItem$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.updateItem),(0,C.b)(u=>(this.store.dispatch((0,h.Q)()),this.marqueService.update(u.id,u.item).pipe((0,P.b)(()=>{this.store.dispatch((0,h.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Marque modifi\xe9e avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/marque")}),(0,g.U)(l=>s.updateItemSuccess({item:l})),(0,M.K)(l=>(this.store.dispatch((0,h.Z)()),(0,_.of)(s.setError({errors:l})))))))),{dispatch:!0}),this.downloadFile$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.downloadFile),(0,O.z)(u=>(this.store.dispatch((0,h.Q)()),this.marqueService.getPrintAll().pipe((0,g.U)(l=>{console.log(l),this.store.dispatch((0,h.Z)());let S=l.headers.get("content-disposition")?.split(";")[1].split("=")[1];return(0,oe.saveAs)(l.body,S),s.loadItems()}),(0,M.K)(l=>(this.store.dispatch((0,h.Z)()),(0,_.of)(s.setError({errors:l})))))))),{dispatch:!0}),this.loadFormModel$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.loadFormModel),(0,C.b)(()=>this.marqueService.getFormModel()),(0,g.U)(u=>s.loadFormModelSuccess({formModel:u})),(0,M.K)(u=>(0,_.of)(s.setError({errors:u}))))),this.resetSearch$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.resetSearch),(0,C.b)(()=>(0,_.of)(s.changePage({page:1}))))),this.search$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.search),(0,C.b)(()=>(0,_.of)(s.changePage({page:1}))))),this.changePage$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.changePage),(0,g.U)(u=>s.loadItems()))),this.changePageSize$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.changePageSize),(0,C.b)(()=>(0,_.of)(s.changePage({page:1}))))),this.handleError$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(s.setError),(0,re.w)(u=>{if(this.store.dispatch((0,h.Q)()),u.errors instanceof te.UA){if(422===u.errors.status){let l="",S=0;for(const[q,x]of Object.entries(u.errors.error))l+=0===S?x:"\n"+x,S++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:l})}if(403===u.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===u.errors.status){let l="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,h.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:l}),(0,_.of)(ie.jM())}}return this.store.dispatch((0,h.Z)()),(0,_.of)({type:"noop"})})),{dispatch:!0})}static#t=this.\u0275fac=function(r){return new(r||e)(t.LFG(L),t.LFG(se.e),t.LFG(d.eX),t.LFG(T.F0),t.LFG(I.Z),t.LFG(o.yh))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var ae=a(925),G=a(7394),ce=a(8819),le=a(9543),pe=a(7426),de=a(9887);function ue(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"form",3)(1,"div",4)(2,"app-panel-custom",5)(3,"div",6)(4,"div",7),t._UZ(5,"app-form-label",8),t.TgZ(6,"div",9),t._UZ(7,"app-custom-textfield",10),t.qZA()(),t.TgZ(8,"div",7),t._UZ(9,"app-form-label",11),t.TgZ(10,"div",9),t._UZ(11,"app-custom-textfield",12),t.qZA()()(),t.TgZ(12,"div",6)(13,"div",7),t._UZ(14,"app-form-label",13),t.TgZ(15,"div",9),t._UZ(16,"app-custom-textfield",14),t.qZA()(),t.TgZ(17,"div",7),t._UZ(18,"app-form-label",15),t.TgZ(19,"div",9),t._UZ(20,"app-custom-textfield",16),t.qZA()()()(),t.TgZ(21,"app-panel-custom",17)(22,"div",18)(23,"div",19)(24,"div",20),t._UZ(25,"app-form-label",21),t.TgZ(26,"div",9)(27,"app-field-error-wrapper",22),t.NdJ("resetField",function(c){t.CHM(i);const f=t.oxw(2);return t.KtG(f.resetBackendError(c))}),t._UZ(28,"app-custom-textfield",23),t.qZA()()()(),t.TgZ(29,"div",24)(30,"div",25),t._UZ(31,"app-form-label",26),t.TgZ(32,"div",9),t._UZ(33,"textarea",27),t.qZA()()()()(),t.TgZ(34,"app-panel-custom",28)(35,"div",6)(36,"div",7),t._UZ(37,"app-form-label",29),t.TgZ(38,"div",9),t._UZ(39,"app-custom-textfield",30),t.qZA()(),t.TgZ(40,"div",7),t._UZ(41,"app-form-label",31),t.TgZ(42,"div",9),t._UZ(43,"app-custom-textfield",32),t.qZA()(),t._UZ(44,"br"),t.qZA(),t.TgZ(45,"div",6)(46,"div",7),t._UZ(47,"app-form-label",33),t.TgZ(48,"div",9),t._UZ(49,"app-custom-textfield",34),t.qZA()()()(),t.TgZ(50,"div",35)(51,"app-primary-button",36),t.NdJ("buttonClicked",function(){t.CHM(i);const c=t.oxw(2);return t.KtG(c.submitForm())}),t.qZA(),t.TgZ(52,"app-cancel-button",37),t.NdJ("buttonClicked",function(){t.CHM(i);const c=t.oxw(2);return t.KtG(c.returnToList())}),t.qZA()()()()}if(2&e){const i=t.oxw(2);t.Q6J("formGroup",i.form),t.xp6(7),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(5),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(7),t.Q6J("errors",i.errors)}}function me(e,n){if(1&e&&(t.TgZ(0,"div",1),t.YNc(1,ue,53,6,"form",2),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.form)}}let J=(()=>{class e{constructor(i,r,c,f){this.formService=i,this.modalService=r,this.router=c,this.store=f,this.errors=null,this.formSubmitted=new t.vpe,this.subscription=new G.w0,this.headers=["S\xe9lection","Lib\xe9ll\xe9","Description","Participant"],this.items=[{label:"Hello",description:"Salutation",participant:"Victor"},{label:"Hello",description:"Salutation",participant:"Tanguy"}],this.itemCritterias={label:"Libell\xe9",description:"Description",participant:"Participant"},this.formControl=new p.NI(this.items[0],{nonNullable:!1}),this.itemDescription=Z=>Z.participant}ngOnInit(){this.store.select(Zt).subscribe(i=>{this.errors=i}),this.store.dispatch(s.resetError()),this.subscription=this.store.select(ae.Gi).subscribe(i=>{i&&(this.formModel={...this.formModel,...i},this.form=this.formService.createForm(this.marque))}),this.form=this.formService.createForm(this.marque)}ngOnDestroy(){this.subscription.unsubscribe()}submitForm(){this.formSubmitted.emit(this.form.value)}returnToList(){this.router.navigateByUrl("parc-informatique/marque")}resetBackendError(i){this.store.dispatch(s.resetErrorField({fieldName:i}))}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(y),t.Y36(I.Z),t.Y36(T.F0),t.Y36(o.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-marque-form"]],inputs:{marque:"marque"},outputs:{formSubmitted:"formSubmitted"},features:[t._Bn([y])],decls:1,vars:1,consts:[["class","ps-3 pe-3 pt-0 pb-3",4,"ngIf"],[1,"ps-3","pe-3","pt-0","pb-3"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-main","p-2","pb-2"],["icon","fa fa-angle-right","title","Historique"],[1,"general-info"],[1,"input-container","col-4"],["title","Date Cr\xe9ation",1,"col-5","text-end"],[1,"input-textfield-container","col"],["otherclass","custom-style-form","placeholder","","formControlName","dateCreation",3,"readonly"],["title","Cr\xe9\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurCreation",3,"readonly"],["title","Date Derni\xe8re Modif",1,"col-5","text-end"],["otherclass","custom-style-form","formControlName","dateDerniereModification","placeholder","",3,"readonly"],["title","Modifi\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurModification",3,"readonly"],["icon","fa fa-angle-right","title","Informations g\xe9n\xe9rales"],[1,"general-info","flex-column"],[1,"col-12","mb-2"],[1,"input-container","col-6"],["title","Libell\xe9",1,"col-3","text-end","me-1"],[3,"errors","resetField"],["otherclass","custom-style-form","placeholder","","formControlName","libelle"],[1,"col-12","mb-0"],[1,"input-container","col-6","d-flex","align-items-center"],["title","Description",1,"col-3","text-end","me-1"],["placeholder","","formControlName","description",1,"custom-style-textarea"],["icon","fa fa-angle-right","title","Adresse et Site web"],["title","Domaine d'activit\xe9",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","activityDomain"],["title","Adresse",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","address"],["title","Site web",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","webSite"],[1,"form-actions"],["title","Enregistrer",1,"me-1",3,"buttonClicked"],["title","Annuler","otherclass","custom-cancel-button",3,"buttonClicked"]],template:function(r,c){1&r&&t.YNc(0,me,2,1,"div",0),2&r&&t.Q6J("ngIf",!c.formModel)},dependencies:[b.O5,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,ce.F,B.W,w.h,le.C,H.Z,pe.p,de.l],styles:[".general-info[_ngcontent-%COMP%]{display:flex;padding:5px 0}.input-container[_ngcontent-%COMP%]{display:flex}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%] + .input-container[_ngcontent-%COMP%]{margin-left:32px}.input-textfield-container[_ngcontent-%COMP%]{width:250px;margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}"]})}return e})();function fe(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"app-marque-form",3),t.NdJ("formSubmitted",function(c){t.CHM(i);const f=t.oxw();return t.KtG(f.editMarque(c))}),t.qZA()}if(2&e){const i=t.oxw();t.Q6J("marque",i.marqueDto)}}const _e=[{path:"",component:jt,pathMatch:"prefix"},{path:"add",component:(()=>{class e{constructor(i){this.store=i,this.formModel$=this.store.select($),this.marque={id:"",libelle:"",description:"",activityDomain:"",address:"",webSite:"",dateDerniereModification:null,dateCreation:null,utilisateurCreation:"",utilisateurModification:""}}ngOnInit(){this.store.dispatch(s.resetItem()),this.store.dispatch(s.resetFormModel())}addMarque(i){this.store.dispatch(s.createItem({item:{libelle:i.libelle,description:i.description,activityDomain:i.activityDomain,address:i.address,webSite:i.webSite}}))}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(o.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-marque-add"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","R\xe9f\xe9rentiel","pathLevelTwo","Fabricants","pathLevelThree","Ajouter"],[3,"marque","formSubmitted"]],template:function(r,c){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.TgZ(2,"app-marque-form",2),t.NdJ("formSubmitted",function(Z){return c.addMarque(Z)}),t.qZA()),2&r&&(t.xp6(2),t.Q6J("marque",c.marque))},dependencies:[A.V,J],styles:["[_nghost-%COMP%]{width:100%}"]})}return e})(),pathMatch:"prefix"},{path:"edit/:id",component:(()=>{class e{constructor(i,r){this.store=i,this.route=r,this.formModel$=this.store.select($),this.marque$=this.store.select(Ct),this.marqueDto=null,this.subscription=new G.w0}ngOnInit(){this.store.dispatch(s.resetFormModel()),this.subscription=this.route.params.subscribe(i=>{this.id=i.id,this.id&&this.store.dispatch(s.loadItem({id:this.id}))}),this.marque$.subscribe(i=>{i&&(this.marqueDto={id:i.id,libelle:i.libelle,description:i.description,activityDomain:i.activityDomain,address:i.address,webSite:i.webSite,dateDerniereModification:null===i.dateDerniereModification?"":this.formatDate(i.dateDerniereModification),dateCreation:null===i.dateCreation?"":this.formatDate(i.dateCreation),utilisateurCreation:i.utilisateurCreation,utilisateurModification:i.utilisateurModification})})}formatDate(i){if(i){const r=new Date(i);return r.toLocaleDateString()+" \xe0 "+r.toLocaleTimeString()}return null}ngOnDestroy(){this.subscription.unsubscribe()}editMarque(i){this.store.dispatch(s.updateItem({id:this.id,item:{id:this.id,libelle:i.libelle,description:i.description,activityDomain:i.activityDomain,address:i.address,webSite:i.webSite}}))}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(o.yh),t.Y36(T.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-marque-edit"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","R\xe9f\xe9rentiel","pathLevelTwo","Fabricants","pathLevelThree","Editer"],[3,"marque","formSubmitted",4,"ngIf"],[3,"marque","formSubmitted"]],template:function(r,c){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,fe,1,1,"app-marque-form",2)),2&r&&(t.xp6(2),t.Q6J("ngIf",c.marqueDto))},dependencies:[b.O5,A.V,J],styles:["[_nghost-%COMP%]{width:100%}"]})}return e})(),pathMatch:"prefix"}];let ge=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({providers:[L],imports:[U.L,b.ez,o.Aw.forFeature("marques",gt),d.sQ.forFeature(ne),Vt.m,T.Bz.forChild(_e)]})}return e})()}}]);