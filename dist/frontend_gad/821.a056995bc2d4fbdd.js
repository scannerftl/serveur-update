"use strict";(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[821],{821:(S,P,i)=>{i.r(P),i.d(P,{ProblemeModule:()=>pe});var r=i(6814),t=i(9468),h=i(1227),m=i(95);let d=(()=>{class e{constructor(){}createForm(o){return new m.cw({code:new m.NI(o.code,{nonNullable:!0,validators:[m.kI.required]}),libelle:new m.NI(o.libelle,{nonNullable:!0,validators:[m.kI.required]}),description:new m.NI(o.description),utilisateurModification:new m.NI(o.utilisateurModification),utilisateurCreation:new m.NI(o.utilisateurCreation),dateCreation:new m.NI(o.dateCreation),dateDerniereModification:new m.NI(o.dateDerniereModification)})}createSearchForm(){return new m.cw({code:new m.NI("",{nonNullable:!0,validators:[m.kI.required]}),libelle:new m.NI("",{nonNullable:!0,validators:[m.kI.required]})})}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var n=i(676);const a="Probleme",_=(0,n.PH)(`[${a} API] Load All`),y=(0,n.PH)(`[${a} API] Load All Success`,(0,n.Ky)()),u=(0,n.PH)(`[${a} API] Create`,(0,n.Ky)()),M=(0,n.PH)(`[${a} API] Create Success`,(0,n.Ky)()),f=(0,n.PH)(`[${a} API] Load`,(0,n.Ky)()),C=(0,n.PH)(`[${a} API] Load Success`,(0,n.Ky)()),T=(0,n.PH)(`[${a} API] Create Error`,(0,n.Ky)()),I=(0,n.PH)(`[${a} API] Reset Error`),O=(0,n.PH)(`[${a} API] Reset Error Field`,(0,n.Ky)()),N=(0,n.PH)(`[${a} API] Reset`),R=(0,n.PH)(`[${a} API] Delete`,(0,n.Ky)()),ot=(0,n.PH)(`[${a} API] Delete Success`,(0,n.Ky)()),l={loadItems:_,loadItemsSuccess:y,resetItem:N,createItem:u,createItemSuccess:M,loadItem:f,loadItemSuccess:C,updateItem:(0,n.PH)(`[${a} API] Update`,(0,n.Ky)()),updateItemSuccess:(0,n.PH)(`[${a} API] Update Success`,(0,n.Ky)()),deleteItem:R,deleteItemSuccess:ot,setError:T,resetError:I,resetErrorField:O,loadFormModel:(0,n.PH)(`[${a} API] Load Form Model`),resetFormModel:(0,n.PH)(`[${a} API] Reset Form Model`),loadFormModelSuccess:(0,n.PH)(`[${a} API] Load Form Model Success`,(0,n.Ky)()),resetSearch:(0,n.PH)(`[${a} API] Reset Search`),search:(0,n.PH)(`[${a} API] Search`,(0,n.Ky)()),changePage:(0,n.PH)(`[${a} API] Change Page`,(0,n.Ky)()),changePageSize:(0,n.PH)(`[${a} API] Change Page Size`,(0,n.Ky)())};var A=i(7398),mt=i(2572);const ht=(0,n.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,n.on)(l.loadItemsSuccess,(e,c)=>(console.log(c.items),{...e,items:c.items,totalElement:c.totalElement})),(0,n.on)(l.resetItem,(e,c)=>({...e,currentItem:null})),(0,n.on)(l.createItemSuccess,(e,c)=>({...e})),(0,n.on)(l.deleteItemSuccess,(e,c)=>({...e})),(0,n.on)(l.loadItemSuccess,(e,c)=>({...e,currentItem:c.item})),(0,n.on)(l.updateItemSuccess,(e,c)=>({...e})),(0,n.on)(l.loadFormModel,(e,c)=>({...e,formModel:null})),(0,n.on)(l.loadFormModelSuccess,(e,c)=>({...e,formModel:c.formModel})),(0,n.on)(l.resetSearch,(e,c)=>({...e,searchModel:{}})),(0,n.on)(l.search,(e,c)=>({...e,searchModel:c.searchModel})),(0,n.on)(l.changePage,(e,c)=>({...e,page:c.page})),(0,n.on)(l.changePageSize,(e,c)=>({...e,pageSize:c.pageSize})),(0,n.on)(l.setError,(e,c)=>({...e,errors:c.errors})),(0,n.on)(l.resetError,(e,c)=>({...e,errors:null})),(0,n.on)(l.resetErrorField,(e,c)=>{let o={};return null!==e.errors&&Object.entries(e.errors).forEach(([s,p])=>{s!==c.fieldName&&(o[`${s}`]=p)}),{...e,errors:o}})),D=(0,n.ZF)("problemes"),ft=(0,n.P1)(D,e=>e.items),_t=(0,n.P1)(D,e=>e.currentItem),K=(0,n.P1)(D,e=>e.formModel),gt=(0,n.P1)(D,e=>e.searchModel),W=(0,n.P1)(D,e=>e.page),Q=(0,n.P1)(D,e=>e.pageSize),bt=(0,n.P1)(D,e=>e.totalElement),Ct=(0,n.P1)(D,e=>e.errors);var vt=i(4849),$=i(8281),z=i(797),Y=i(3849),Pt=i(7251),xt=i(166),yt=i(6327),Mt=i(8564),Et=i(8223),Tt=i(602),Zt=i(1469),It=i(6326),j=i(8346),X=i(1171),V=i(547),J=i(362);function St(e,c){1&e&&(t.TgZ(0,"th",35),t._uU(1,"R\xe9f\xe9rence"),t.qZA())}function Ot(e,c){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const o=c.$implicit;t.xp6(1),t.Oqu(o.refSys)}}function At(e,c){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Code"),t.qZA())}function Dt(e,c){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const o=c.$implicit;t.xp6(1),t.Oqu(o.code)}}function Ft(e,c){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Libell\xe9"),t.qZA())}function Lt(e,c){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const o=c.$implicit;t.xp6(1),t.Oqu(o.libelle)}}function Bt(e,c){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Description"),t.qZA())}function Ut(e,c){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const o=c.$implicit;t.xp6(1),t.Oqu(o.description)}}function $t(e,c){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Date cr\xe9ation"),t.qZA())}function Nt(e,c){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=c.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,o.dateCreation,"dd/MM/y \xe0 HH:mm:ss"))}}function kt(e,c){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Date Derni\xe8re Modif"),t.qZA())}function Kt(e,c){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=c.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,o.dateDerniereModification,"dd/MM/y \xe0 HH:mm:ss"))}}function zt(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"table",25),t.NdJ("itemSelected",function(p){t.CHM(o);const x=t.oxw(2);return t.KtG(x.itemSelected(p))}),t.ynx(1,26),t.YNc(2,St,2,0,"th",27),t.YNc(3,Ot,2,1,"td",28),t.BQk(),t.ynx(4,29),t.YNc(5,At,2,0,"th",27),t.YNc(6,Dt,2,1,"td",30),t.BQk(),t.ynx(7,31),t.YNc(8,Ft,2,0,"th",27),t.YNc(9,Lt,2,1,"td",30),t.BQk(),t.ynx(10,32),t.YNc(11,Bt,2,0,"th",27),t.YNc(12,Ut,2,1,"td",30),t.BQk(),t.ynx(13,33),t.YNc(14,$t,2,0,"th",27),t.YNc(15,Nt,3,4,"td",30),t.BQk(),t.ynx(16,34),t.YNc(17,kt,2,0,"th",27),t.YNc(18,Kt,3,4,"td",30),t.BQk(),t.qZA()}if(2&e){const o=c.ngIf,s=t.oxw(2);t.Q6J("items",o)("headers",s.headerTable)("selectable",!0)}}function Jt(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"app-crud-list",3),t.NdJ("searchButtonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.searchButtonClicked())})("refreshButtonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.refreshButtonClicked())})("pageSelected",function(p){t.CHM(o);const x=t.oxw();return t.KtG(x.pageSelected(p))})("pageSizeChange",function(p){t.CHM(o);const x=t.oxw();return t.KtG(x.pageSizeChange(p))})("closeButtonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.closeButtonClicked())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6),t._UZ(4,"app-form-label",7),t.qZA(),t.TgZ(5,"div",8),t._UZ(6,"app-custom-textfield",9),t.qZA()()(),t.TgZ(7,"div",10)(8,"div",11)(9,"div",12),t._UZ(10,"app-form-label",13),t.qZA(),t.TgZ(11,"div",8),t._UZ(12,"app-custom-textfield",14),t.qZA()()(),t.TgZ(13,"div",15)(14,"app-custom-button",16),t.NdJ("buttonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.addButtonClicked())}),t.qZA(),t.TgZ(15,"app-custom-button",17),t.NdJ("buttonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.editButtonClicked())}),t.qZA(),t.TgZ(16,"app-custom-button",18),t.NdJ("buttonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.deleteButtonClicked())}),t.qZA()(),t.TgZ(17,"div",19),t._UZ(18,"app-custom-button",20)(19,"app-custom-button",21),t.TgZ(20,"app-print-button",22),t.NdJ("printButtonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.printButtonClicked())}),t.qZA()(),t.TgZ(21,"div",23),t.YNc(22,zt,19,3,"table",24),t.ALo(23,"async"),t.qZA()()}if(2&e){const o=c.ngIf,s=t.oxw();t.Q6J("itemSelected",s.isItemSelected())("pageSize",o.pageSize)("currentPage",o.page)("totalElements",o.totalElement),t.xp6(1),t.Q6J("formGroup",s.searchForm),t.xp6(6),t.Q6J("formGroup",s.searchForm),t.xp6(8),t.Q6J("disabled",!s.isItemSelected()),t.xp6(1),t.Q6J("disabled",!s.isItemSelected()),t.xp6(6),t.Q6J("ngIf",t.lcZ(23,9,s.items$))}}(0,r.qS)(h.Z,"fr-Fr");let wt=(()=>{class e{constructor(o,s,p,x){this.router=o,this.modalService=s,this.store=p,this.problemeFormService=x,this.headerTable=["R\xe9f\xe9rence","Code","Lib\xe9ll\xe9","Description","Date Cr\xe9ation","Date Derni\xe8re Modif"],this.items$=this.store.select(ft),this.page$=this.store.select(W),this.pageSize$=this.store.select(Q),this.totalElement$=this.store.select(bt),this.data$=(0,mt.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,A.U)(([L,H,g])=>({page:L,pageSize:H,totalElement:g}))),this.selectedItem=null}ngOnInit(){this.searchForm=this.problemeFormService.createSearchForm(),this.store.dispatch(l.loadItems())}addButtonClicked(){this.router.navigate(["incidents","probleme","add"])}editButtonClicked(){const o=this.selectedItem?.id;o&&(this.store.dispatch(l.resetItem()),this.router.navigate(["incidents","probleme","edit",o]))}deleteButtonClicked(){const o=this.selectedItem;o&&this.modalService.openComponent(vt.n,{size:"md",otherclass:"custom-modal-height"}).afterClosed.subscribe(s=>{s&&"yes"===s&&this.store.dispatch(l.deleteItem({item:o}))})}itemSelected(o){this.selectedItem=o}pageSelected(o){this.store.dispatch(l.changePage({page:o}))}pageSizeChange(o){this.store.dispatch(l.changePageSize({pageSize:o}))}closeButtonClicked(){this.router.navigate(["incidents"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(l.resetSearch())}searchButtonClicked(){this.store.dispatch(l.search({searchModel:this.searchForm.value}))}printButtonClicked(){}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36($.F0),t.Y36(z.Z),t.Y36(n.yh),t.Y36(d))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-probleme-list"]],features:[t._Bn([d,{provide:t.soG,useValue:"fr-FR"}])],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","R\xe9f\xe9rentiels","pathLevelTwo","Probl\xe8me","pathLevelThree","Liste"],["title","liste des Probl\xe8mes",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","liste des Probl\xe8mes",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row","align-items-center"],[1,"text-end","me-2","width-label-search-2"],["title","Code"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","code"],[1,"advance-search",3,"formGroup"],[1,"d-flex","flex-row","mt-2","align-items-center"],[1,"text-end","me-1","width-label-search-2"],["title","Libell\xe9"],["placeholder","","otherclass","item-input","formControlName","libelle"],[1,"primary-actions"],["icon","icon-plus btn-icon-add fw-bold","title","Ajouter",1,"me-1",3,"buttonClicked"],["icon","icon-edit-alt btn-icon-edit","title","Modifier",1,"me-1",3,"disabled","buttonClicked"],["icon","icon-trash btn-icon-delete","title","Supprimer",3,"disabled","buttonClicked"],[1,"secondary-actions","d-flex"],["customClass","btn btn-sm button-action","title","Importer","url","import.svg"],["customClass","btn btn-sm button-action","title","Exporter","url","export.svg",1,"me-1","ms-1"],[3,"printButtonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","R\xe9f\xe9rence"],["app-header-attribute-def-template","",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","text-start",4,"appCellDefTemplate"],["appCellDef","Code"],["app-cell-def-template","",4,"appCellDefTemplate"],["appCellDef","Lib\xe9ll\xe9"],["appCellDef","Description"],["appCellDef","Date Cr\xe9ation"],["appCellDef","Date Derni\xe8re Modif"],["app-header-attribute-def-template",""],["app-cell-def-template","",1,"text-start"],["app-cell-def-template",""]],template:function(s,p){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,Jt,24,11,"app-crud-list",2),t.ALo(3,"async")),2&s&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,p.data$)))},dependencies:[r.O5,Y.L,m.JJ,m.JL,m.sg,m.u,Pt._,xt.x,yt.N,Mt.D,Et.h,Tt.u,Zt.O,It.q,j.W,X.h,V.Z,J.V,r.Ov,r.uU],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}"]})}return e})();var q=i(7394),Ht=i(8819),Gt=i(9543),Rt=i(7426),Wt=i(9887);function Qt(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"form",2)(1,"div",3)(2,"app-panel-custom",4)(3,"div",5)(4,"div",6),t._UZ(5,"app-form-label",7),t.TgZ(6,"div",8),t._UZ(7,"app-custom-textfield",9),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"app-form-label",10),t.TgZ(10,"div",8),t._UZ(11,"app-custom-textfield",11),t.qZA()()(),t.TgZ(12,"div",5)(13,"div",6),t._UZ(14,"app-form-label",12),t.TgZ(15,"div",8),t._UZ(16,"app-custom-textfield",13),t.qZA()(),t.TgZ(17,"div",6),t._UZ(18,"app-form-label",14),t.TgZ(19,"div",8),t._UZ(20,"app-custom-textfield",15),t.qZA()()()(),t.TgZ(21,"app-panel-custom",16)(22,"div",5)(23,"div",6),t._UZ(24,"app-form-label",17),t.TgZ(25,"div",8)(26,"app-field-error-wrapper",18),t.NdJ("resetField",function(p){t.CHM(o);const x=t.oxw();return t.KtG(x.resetBackendError(p))}),t._UZ(27,"app-custom-textfield",19),t.qZA()()(),t.TgZ(28,"div",6),t._UZ(29,"app-form-label",20),t.TgZ(30,"div",8)(31,"app-field-error-wrapper",18),t.NdJ("resetField",function(p){t.CHM(o);const x=t.oxw();return t.KtG(x.resetBackendError(p))}),t._UZ(32,"app-custom-textfield",21),t.qZA()()()(),t.TgZ(33,"div",5)(34,"div",6),t._UZ(35,"app-form-label",22),t.TgZ(36,"div",23),t._UZ(37,"app-custom-textfield",24),t.qZA()()()(),t.TgZ(38,"div",25)(39,"app-primary-button",26),t.NdJ("buttonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.submitForm())}),t.qZA(),t.TgZ(40,"app-cancel-button",27),t.NdJ("buttonClicked",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.returnToList())}),t.qZA()()()()}if(2&e){const o=t.oxw();t.Q6J("formGroup",o.form),t.xp6(7),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(5),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(6),t.Q6J("errors",o.errors),t.xp6(5),t.Q6J("errors",o.errors)}}let tt=(()=>{class e{constructor(o,s,p,x){this.problemeFormService=o,this.modalService=s,this.router=p,this.store=x,this.errors=null,this.formSubmitted=new t.vpe,this.subscription=new q.w0,this.headers=["S\xe9lection","Lib\xe9ll\xe9","Description","Participant"],this.items=[{label:"Hello",description:"Salutation",participant:"Victor"},{label:"Hello",description:"Salutation",participant:"Tanguy"}],this.itemCritterias={label:"Libell\xe9",description:"Description",participant:"Participant"},this.formControl=new m.NI(this.items[0],{nonNullable:!1}),this.itemDescription=L=>L.participant}ngOnInit(){this.store.select(Ct).subscribe(o=>{this.errors=o}),this.store.dispatch(l.resetError()),this.subscription=this.store.select(K).subscribe(o=>{o&&(this.formModel={...this.formModel,...o},this.form=this.problemeFormService.createForm(this.probleme))}),this.form=this.problemeFormService.createForm(this.probleme)}ngOnDestroy(){this.subscription.unsubscribe()}submitForm(){this.formSubmitted.emit(this.form.value)}returnToList(){this.router.navigateByUrl("incidents/probleme")}resetBackendError(o){this.store.dispatch(l.resetErrorField({fieldName:o}))}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(d),t.Y36(z.Z),t.Y36($.F0),t.Y36(n.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-probleme-form"]],inputs:{probleme:"probleme"},outputs:{formSubmitted:"formSubmitted"},features:[t._Bn([d])],decls:2,vars:1,consts:[[1,"pe-3","ps-3","pt-0"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-main","p-2"],["icon","fa fa-angle-right","title","Historique"],[1,"general-info"],[1,"input-container","col-4"],["title","Date Cr\xe9ation",1,"col-5","text-end"],[1,"input-textfield-container","col"],["otherclass","custom-style-form","placeholder","","formControlName","dateCreation",3,"readonly"],["title","Cr\xe9\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurCreation",3,"readonly"],["title","Date Derni\xe8re Modif",1,"col-5","text-end"],["otherclass","custom-style-form","formControlName","dateDerniereModification","placeholder","",3,"readonly"],["title","Modifi\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurModification",3,"readonly"],["icon","fa fa-angle-right","title","Informations g\xe9n\xe9rales"],["title","Code",1,"col-5","text-end"],[3,"errors","resetField"],["otherclass","custom-style-form","placeholder","","formControlName","code"],["title","Libell\xe9",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","libelle"],["title","Description",1,"col-5","text-end"],[1,"input-textfield-container"],["otherclass","custom-style-form","placeholder","","formControlName","description"],[1,"form-actions"],["title","Enregistrer",1,"me-1",3,"buttonClicked"],["otherclass","custom-cancel-button","title","Annuler",3,"buttonClicked"]],template:function(s,p){1&s&&(t.TgZ(0,"div",0),t.YNc(1,Qt,41,7,"form",1),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngIf",p.form))},dependencies:[r.O5,m._Y,m.JJ,m.JL,m.sg,m.u,Ht.F,j.W,X.h,Gt.C,V.Z,Rt.p,Wt.l],styles:["[_nghost-%COMP%]{font-size:12px}.general-info[_ngcontent-%COMP%]{display:flex;padding:5px 0}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.input-container[_ngcontent-%COMP%] + .input-container[_ngcontent-%COMP%]{//margin-left: 32px}.input-textfield-container[_ngcontent-%COMP%]{width:250px;margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}"]})}return e})(),Yt=(()=>{class e{constructor(o){this.store=o,this.formModel$=this.store.select(K),this.probleme={id:"",libelle:"",code:"",description:"",dateDerniereModification:null,dateCreation:null,utilisateurCreation:"",utilisateurModification:""}}ngOnInit(){this.store.dispatch(l.resetItem()),this.store.dispatch(l.resetFormModel())}addProbleme(o){this.store.dispatch(l.createItem({item:{libelle:o.libelle,code:o.code,description:o.description}}))}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(n.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-probleme-add"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","R\xe9f\xe9rentiels","pathLevelTwo","Probl\xe8me","pathLevelThree","Ajouter"],[3,"probleme","formSubmitted"]],template:function(s,p){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.TgZ(2,"app-probleme-form",2),t.NdJ("formSubmitted",function(L){return p.addProbleme(L)}),t.qZA()),2&s&&(t.xp6(2),t.Q6J("probleme",p.probleme))},dependencies:[J.V,tt],styles:["[_nghost-%COMP%]{width:100%}"]})}return e})();function jt(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"app-probleme-form",3),t.NdJ("formSubmitted",function(p){t.CHM(o);const x=t.oxw();return t.KtG(x.editProbleme(p))}),t.qZA()}if(2&e){const o=t.oxw();t.Q6J("probleme",o.problemeDto)}}let Xt=(()=>{class e{constructor(o,s){this.store=o,this.route=s,this.formModel$=this.store.select(K),this.probleme$=this.store.select(_t),this.problemeDto=null,this.subscription=new q.w0}ngOnInit(){this.store.dispatch(l.resetFormModel()),this.subscription=this.route.params.subscribe(o=>{this.id=o.id,this.id&&this.store.dispatch(l.loadItem({id:this.id}))}),this.probleme$.subscribe(o=>{o&&(this.problemeDto={id:o.id,libelle:o.libelle,code:o.code,description:o.description,dateDerniereModification:null===o.dateDerniereModification?"":this.formatDate(o.dateDerniereModification),dateCreation:null===o.dateCreation?"":this.formatDate(o.dateCreation),utilisateurCreation:o.utilisateurCreation,utilisateurModification:o.utilisateurModification})})}formatDate(o){if(o){const s=new Date(o);return s.toLocaleDateString()+" \xe0 "+s.toLocaleTimeString()}return null}ngOnDestroy(){this.subscription.unsubscribe()}editProbleme(o){this.store.dispatch(l.updateItem({id:this.id,item:{id:o.id,libelle:o.libelle,code:o.code,description:o.description}}))}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(n.yh),t.Y36($.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-probleme-edit"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","R\xe9f\xe9rentiels","pathLevelTwo","Probl\xe8me","pathLevelThree","Editer"],[3,"probleme","formSubmitted",4,"ngIf"],[3,"probleme","formSubmitted"]],template:function(s,p){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,jt,1,1,"app-probleme-form",2)),2&s&&(t.xp6(2),t.Q6J("ngIf",p.problemeDto))},dependencies:[r.O5,J.V,tt],styles:["[_nghost-%COMP%]{width:100%}"]})}return e})();var b=i(6465),Vt=i(9207),E=i(6063),qt=i(9862),te=i(2460),F=i(6328),ee=i(9026),B=i(6306),w=i(9397),oe=i(1631),Z=i(2096),re=i(3186),ne=i(4664),ie=i(9989),se=i(1946);let et=(()=>{class e extends ie.v{getResourceBasePath(){return`${se.y}/probleme`}static#t=this.\u0275fac=function(){let o;return function(p){return(o||(o=t.n5z(e)))(p||e)}}();static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var le=i(6366);let ae=(()=>{class e{constructor(o,s,p,x,L,H){this.problemeService=o,this.authService=s,this.actions$=p,this.router=x,this.modalService=L,this.store=H,this.loadItems$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.loadItems),(0,te.M)(this.store.select(W),this.store.select(Q),this.store.select(gt)),(0,F.b)(([g,v,k,G])=>(console.log(v),this.store.dispatch((0,E.Q)()),(0,ee.$)(this.problemeService.getAllWithPagination(v,k,G),this.problemeService.count(G)).pipe((0,A.U)(([U,de])=>(this.store.dispatch((0,E.Z)()),l.loadItemsSuccess({items:U,totalElement:de}))),(0,B.K)(U=>(this.store.dispatch((0,E.Z)()),(0,Z.of)(l.setError({errors:U})))))))),{dispatch:!0}),this.createItem$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.createItem),(0,F.b)(g=>(this.store.dispatch((0,E.Q)()),this.problemeService.add(g.item).pipe((0,w.b)(()=>{this.store.dispatch((0,E.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Probl\xe8me ajout\xe9 avec succ\xe8s"}),this.router.navigateByUrl("incidents/probleme")}),(0,A.U)(v=>l.createItemSuccess({item:v})),(0,B.K)(v=>(this.store.dispatch((0,E.Z)()),(0,Z.of)(l.setError({errors:v})))))))),{dispatch:!0}),this.loadItem$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.loadItem),(0,oe.z)(g=>this.problemeService.findById(g.id).pipe((0,A.U)(v=>l.loadItemSuccess({item:v})),(0,B.K)(v=>(this.store.dispatch((0,E.Z)()),(0,Z.of)(l.setError({errors:v}))))))),{dispatch:!0}),this.deleteItem$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.deleteItem),(0,F.b)(g=>this.problemeService.delete(g.item.id,g.item)),(0,w.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Probl\xe8me supprim\xe9 avec succ\xe8s"})}),(0,A.U)(()=>l.loadItems()),(0,B.K)(g=>(this.store.dispatch((0,E.Z)()),(0,Z.of)(l.setError({errors:g}))))),{dispatch:!0}),this.updateItem$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.updateItem),(0,F.b)(g=>(this.store.dispatch((0,E.Q)()),this.problemeService.update(g.id,g.item).pipe((0,w.b)(()=>{this.store.dispatch((0,E.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Probl\xe8me modifi\xe9 avec succ\xe8s"}),this.router.navigateByUrl("incidents/probleme")}),(0,A.U)(v=>l.createItemSuccess({item:v})),(0,B.K)(v=>(this.store.dispatch((0,E.Z)()),(0,Z.of)(l.setError({errors:v})))))))),{dispatch:!0}),this.loadFormModel$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.loadFormModel),(0,F.b)(()=>this.problemeService.getFormModel()),(0,A.U)(g=>l.loadFormModelSuccess({formModel:g})),(0,B.K)(g=>(0,Z.of)(l.setError({errors:g}))))),this.resetSearch$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.resetSearch),(0,F.b)(()=>(0,Z.of)(l.changePage({page:1}))))),this.search$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.search),(0,F.b)(()=>(0,Z.of)(l.changePage({page:1}))))),this.changePage$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.changePage),(0,A.U)(g=>l.loadItems()))),this.changePageSize$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.changePageSize),(0,F.b)(()=>(0,Z.of)(l.changePage({page:1}))))),this.handleError$=(0,b.GW)(()=>this.actions$.pipe((0,b.l4)(l.setError),(0,ne.w)(g=>{if(this.store.dispatch((0,E.Q)()),g.errors instanceof qt.UA){if(422===g.errors.status){let v="",k=0;for(const[G,U]of Object.entries(g.errors.error))v+=0===k?U:"\n"+U,k++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:v})}if(403===g.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===g.errors.status){let v="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,E.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:v}),(0,Z.of)(re.jM())}}return this.store.dispatch((0,E.Z)()),(0,Z.of)({type:"noop"})})),{dispatch:!0})}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(et),t.LFG(le.e),t.LFG(b.eX),t.LFG($.F0),t.LFG(z.Z),t.LFG(n.yh))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();const ce=[{path:"",component:wt,pathMatch:"prefix"},{path:"add",component:Yt,pathMatch:"prefix"},{path:"edit/:id",component:Xt,pathMatch:"prefix"}];let pe=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({providers:[et],imports:[r.ez,Y.L,n.Aw.forFeature("problemes",ht),b.sQ.forFeature(ae),Vt.m,$.Bz.forChild(ce)]})}return e})()},8819:(S,P,i)=>{i.d(P,{F:()=>t});var r=i(9468);let t=(()=>{class h{constructor(){this.disabled=!1,this.buttonClicked=new r.vpe}emitButtonClicked(){this.buttonClicked.emit()}static#t=this.\u0275fac=function(n){return new(n||h)};static#e=this.\u0275cmp=r.Xpm({type:h,selectors:[["app-cancel-button"]],inputs:{title:"title",url:"url",otherclass:"otherclass",disabled:"disabled"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:5,consts:[[3,"disabled","click"]],template:function(n,a){1&n&&(r.TgZ(0,"button",0),r.NdJ("click",function(){return a.emitButtonClicked()}),r._uU(1),r.qZA()),2&n&&(r.Gre("cancel-button ",a.otherclass,""),r.Q6J("disabled",a.disabled),r.xp6(1),r.hij(" ",a.title,"\n"))},styles:[".cancel-button[_ngcontent-%COMP%]{color:#000;border:1px solid #6d7582;background-color:#fff;min-width:120px;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:25px;padding:.75rem 0rem;border-radius:3px}"]})}return h})()},4849:(S,P,i)=>{i.d(P,{n:()=>a});var r=i(1892),t=i(6814),h=i(8666),m=i(2463),d=i(9468),n=i(166);let a=(()=>{class _{constructor(u,M){this.modalData=u,this.modalRef=M}close(){this.modalRef.close(void 0)}confirmAction(){this.modalRef.close("yes")}static#t=this.\u0275fac=function(M){return new(M||_)(d.Y36(r.S),d.Y36(r.R))};static#e=this.\u0275cmp=d.Xpm({type:_,selectors:[["app-confirm-alert"]],standalone:!0,features:[d.jDz],decls:13,vars:0,consts:[[1,"alert-header","mb-3"],[1,"alert-header-title"],[1,"mb-0"],[1,"pe-3","ps-3","pt-0"],[1,"d-flex","align-items-center","p-2"],[1,"me-3"],["src","assets/images/warning.svg","width","45px","alt",""],[1,"text"],[1,"form-actions"],["otherclass","custom-cancel-button color-warning","title","Oui",1,"me-1",3,"buttonClicked"],["otherclass","custom-cancel-button","title","Fermer",3,"buttonClicked"]],template:function(M,f){1&M&&(d.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),d._uU(3,"Confirmation de Suppression"),d.qZA()()(),d.TgZ(4,"div",3)(5,"div",4)(6,"div",5),d._UZ(7,"img",6),d.qZA(),d.TgZ(8,"div",7),d._uU(9," Voulez-vous vraiment effectuer cette action ? "),d.qZA()(),d.TgZ(10,"div",8)(11,"app-custom-button",9),d.NdJ("buttonClicked",function(){return f.confirmAction()}),d.qZA(),d.TgZ(12,"app-custom-button",10),d.NdJ("buttonClicked",function(){return f.close()}),d.qZA()()())},dependencies:[t.ez,h.a,m.v,n.x],styles:[".general-info[_ngcontent-%COMP%]{display:flex;padding:5px 0;width:100%}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.input-textfield-container[_ngcontent-%COMP%]{margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}.alert-header[_ngcontent-%COMP%]{background-color:#ed6f25;color:#fff;padding:.5rem 1rem;display:flex;align-items:center}.alert-header-title[_ngcontent-%COMP%]{display:flex;align-items:center;flex-grow:1}.close-icon[_ngcontent-%COMP%]{cursor:pointer}.alert-header-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}input[type=file][_ngcontent-%COMP%]{font-size:13px}.circle-content-error[_ngcontent-%COMP%]{border-radius:50%;border:1px solid #ed6f25;color:#ed6f25;width:70px;height:70px;display:flex;align-items:center;justify-content:center}.circle-content-error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}.text[_ngcontent-%COMP%]{font-size:14px!important}"]})}return _})()},8346:(S,P,i)=>{i.d(P,{W:()=>m});var r=i(9468),t=i(95),h=i(7394);let m=(()=>{class d{constructor(){this.placeholder="",this.type="text",this.readonly=!1,this.otherclass="",this.subscription=new h.w0,this.disabled=!1,this.onTouched=()=>{},this.onChange=()=>{},this.control=new t.NI}writeValue(a){this.control.setValue(a)}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.disabled=a,a?this.control.disable():this.control.enable()}ngOnInit(){this.subscription=this.control.valueChanges.subscribe(a=>{this.onChange(a)})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(_){return new(_||d)};static#e=this.\u0275cmp=r.Xpm({type:d,selectors:[["app-custom-textfield"]],inputs:{placeholder:"placeholder",type:"type",readonly:"readonly",otherclass:"otherclass"},features:[r._Bn([{provide:t.JU,useExisting:(0,r.Gpc)(()=>d),multi:!0}])],decls:1,vars:7,consts:[[3,"type","placeholder","formControl","readonly"]],template:function(_,y){1&_&&r._UZ(0,"input",0),2&_&&(r.Gre("custom-text-field m-0 form-control-sm ",y.otherclass,""),r.s9C("placeholder",y.placeholder),r.Q6J("type",y.type)("formControl",y.control)("readonly",y.readonly))},dependencies:[t.Fj,t.JJ,t.oH],styles:[".custom-text-field[_ngcontent-%COMP%]{display:block;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;appearance:none;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:1px solid #878787!important;margin-bottom:2px}.form-control-sm[_ngcontent-%COMP%]{font-size:12px!important;border-radius:0;min-width:100%}.custom-text-field[_ngcontent-%COMP%]:focus{background-color:#f0f4f5;border:0px!important;outline:0}.custom-text-field[_ngcontent-%COMP%]:read-only:focus{outline:0!important;border:1px solid #878787!important}"]})}return d})()},1171:(S,P,i)=>{i.d(P,{h:()=>t});var r=i(9468);let t=(()=>{class h{constructor(){this.title="",this.class=""}static#t=this.\u0275fac=function(n){return new(n||h)};static#e=this.\u0275cmp=r.Xpm({type:h,selectors:[["app-form-label"]],inputs:{title:"title",class:"class"},decls:2,vars:4,template:function(n,a){1&n&&(r.TgZ(0,"label"),r._uU(1),r.qZA()),2&n&&(r.Tol(a.class),r.xp6(1),r.Oqu(a.title))},styles:["label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#464445;margin-right:5px;min-width:100%;max-width:100%}"]})}return h})()},9887:(S,P,i)=>{i.d(P,{l:()=>a});var r=i(9468),t=i(6814);function h(_,y){if(1&_&&(r.TgZ(0,"h5",3),r._UZ(1,"span"),r._uU(2),r.Hsn(3,1),r.qZA()),2&_){const u=r.oxw();r.xp6(1),r.Tol(u.icon),r.xp6(1),r.hij(" ",u.title," ")}}function m(_,y){1&_&&r._UZ(0,"hr",4)}const d=["*",[["",8,"button-head"]]],n=["*",".button-head"];let a=(()=>{class _{constructor(){this.title="",this.icon="",this.background="white",this.otherclass=""}static#t=this.\u0275fac=function(M){return new(M||_)};static#e=this.\u0275cmp=r.Xpm({type:_,selectors:[["app-panel-custom"]],inputs:{title:"title",icon:"icon",background:"background",otherclass:"otherclass"},ngContentSelectors:n,decls:5,vars:6,consts:[["class","title-panel-custom mb-1",4,"ngIf"],["class","mt-0",4,"ngIf"],[1,"panel-custom-body"],[1,"title-panel-custom","mb-1"],[1,"mt-0"]],template:function(M,f){1&M&&(r.F$t(d),r.TgZ(0,"div"),r.YNc(1,h,4,4,"h5",0),r.YNc(2,m,1,0,"hr",1),r.TgZ(3,"div",2),r.Hsn(4),r.qZA()()),2&M&&(r.MT6("panel-custom ",f.background," ",f.otherclass,""),r.xp6(1),r.Q6J("ngIf",f.title),r.xp6(1),r.Q6J("ngIf",f.title))},dependencies:[t.O5],styles:[".panel-custom[_ngcontent-%COMP%]{border:1px solid #c7c5c6;padding:15px;margin-bottom:3px}.title-panel-custom[_ngcontent-%COMP%]{display:flex;align-items:center;color:#045a5e;font-size:15px;font-family:aileronbold}.title-panel-custom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#46ad7e;margin-right:5px}"]})}return _})()},9543:(S,P,i)=>{i.d(P,{C:()=>t});var r=i(9468);let t=(()=>{class h{constructor(){this.otherclass="",this.disabled=!1,this.buttonClicked=new r.vpe}emitButtonClicked(d){d.preventDefault(),this.buttonClicked.emit()}static#t=this.\u0275fac=function(n){return new(n||h)};static#e=this.\u0275cmp=r.Xpm({type:h,selectors:[["app-primary-button"]],inputs:{title:"title",otherclass:"otherclass",disabled:"disabled"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:5,consts:[[3,"disabled","click"]],template:function(n,a){1&n&&(r.TgZ(0,"button",0),r.NdJ("click",function(y){return a.emitButtonClicked(y)}),r._uU(1),r.qZA()),2&n&&(r.Gre("primary-button ",a.otherclass,""),r.Q6J("disabled",a.disabled),r.xp6(1),r.hij(" ",a.title,"\n"))},styles:[".primary-button[_ngcontent-%COMP%]{color:#fff;border:1px solid #1EA860;background-color:#1ea860;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:30px;padding:.75rem 1rem;border-radius:6px}.primary-button[_ngcontent-%COMP%]:hover{background-color:#2da899;border:1px solid #2DA899}.primary-button[_ngcontent-%COMP%]:disabled{color:#fff;border:1px solid #3d4957;background-color:#3d4957;min-width:80px;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:24px;opacity:.7;padding:.75rem 0rem}"]})}return h})()},3849:(S,P,i)=>{i.d(P,{L:()=>d});var r=i(9468),t=i(2463),h=i(6814),m=i(166);let d=(()=>{class n{constructor(){this.printButtonClicked=new r.vpe}emitPrintButtonClicked(){this.printButtonClicked.emit()}static#t=this.\u0275fac=function(y){return new(y||n)};static#e=this.\u0275cmp=r.Xpm({type:n,selectors:[["app-print-button"]],outputs:{printButtonClicked:"printButtonClicked"},standalone:!0,features:[r.jDz],decls:1,vars:0,consts:[["customClass","btn btn-sm button-action","title","Imprimer","url","print.svg",3,"buttonClicked"]],template:function(y,u){1&y&&(r.TgZ(0,"app-custom-button",0),r.NdJ("buttonClicked",function(){return u.emitPrintButtonClicked()}),r.qZA())},dependencies:[h.ez,t.v,m.x],styles:["[_nghost-%COMP%]{display:block}"]})}return n})()},7426:(S,P,i)=>{i.d(P,{p:()=>y});var r=i(9468),t=i(547);const h={required:u=>"Ce champ est obligatoire",minlength:({requiredLength:u})=>`La valeur entr\xe9e doit avoir au minimum ${u} ${u>1?"caract\xe8res":"caract\xe8re"}`,maxlength:({requiredLength:u})=>`La valeur entr\xe9e doit avoir au maximum ${u} ${u>1?"caract\xe8res":"caract\xe8re"}`,actionsLength:u=>"Au moins une action doit \xeatre associ\xe9e au groupe utilisateur",problemeInvalide:u=>"Erreur sur le champ Probl\xe8me",impactInvalide:u=>"Erreur sur le champ Impact",gestionnaireInvalide:u=>"Erreur sur le champ Gestionnaire",demandeurInvalide:u=>"Erreur sur le champ Demandeur",categorieInvalide:u=>"Erreur sur le champ Cat\xe9gorie"};var m=i(8645),d=i(9773),n=i(6814);function a(u,M){if(1&u&&(r.TgZ(0,"div",1),r._uU(1),r.qZA()),2&u){const f=r.oxw();r.xp6(1),r.Oqu(f.errorMessage)}}const _=["*"];let y=(()=>{class u{constructor(){this.errors=null,this.resetField=new r.vpe,this.destoy$=new m.x}ngOnInit(){if(!this.myDirective)throw new Error("MyInputDirective is required!")}ngAfterViewInit(){this.myDirective&&this.myDirective.ngControl.valueChanges?.pipe((0,d.R)(this.destoy$)).subscribe(f=>{const C=this.myDirective.ngControl.control?this.getControlName(this.myDirective.ngControl.control):"";"string"==typeof C&&this.resetField.emit(C)})}ngOnDestroy(){this.destoy$.next(null),this.destoy$.complete()}get errorMessage(){let f=this.getExternErrorMessage();return null===f&&(f=this.getLocalErrorMessage()),f}getExternErrorMessage(){let f=null;return this.errors&&Object.entries(this.errors).forEach(([C,T])=>{C===(this.myDirective.ngControl.control?this.getControlName(this.myDirective.ngControl.control):"")&&(f=T)}),f}getLocalErrorMessage(){const f=this.myDirective?.ngControl.control?.errors;if(f){const C=Object.entries(f||{});if(!C.length)return null;const[T,I]=C[0];let O=null;return Object.entries(h).forEach(([N,R])=>{N===T&&this.myDirective?.ngControl.control?.dirty&&(O=h[N](I))}),O}return null}getControlName(f){let C=f.parent;if(!C)return null;let T="";return Object.keys(C.controls).forEach(I=>{C.get(I)===f&&(T=I)}),T}static#t=this.\u0275fac=function(C){return new(C||u)};static#e=this.\u0275cmp=r.Xpm({type:u,selectors:[["app-field-error-wrapper"]],contentQueries:function(C,T,I){if(1&C&&r.Suo(I,t.Z,7),2&C){let O;r.iGM(O=r.CRH())&&(T.myDirective=O.first)}},inputs:{errors:"errors"},outputs:{resetField:"resetField"},ngContentSelectors:_,decls:2,vars:1,consts:[["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(C,T){1&C&&(r.F$t(),r.Hsn(0),r.YNc(1,a,2,1,"div",0)),2&C&&(r.xp6(1),r.Q6J("ngIf",T.errorMessage))},dependencies:[n.O5],styles:[".error-message[_ngcontent-%COMP%]{color:red;font-size:.75rem}"]})}return u})()},547:(S,P,i)=>{i.d(P,{Z:()=>h});var r=i(9468),t=i(95);let h=(()=>{class m{constructor(n){this.ngControl=n}static#t=this.\u0275fac=function(a){return new(a||m)(r.Y36(t.a5,10))};static#e=this.\u0275dir=r.lG2({type:m,selectors:[["","formControl",""],["","formControlName",""]]})}return m})()}}]);