(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[6234],{6234:(F,x,i)=>{"use strict";i.r(x),i.d(x,{EnvoiPerteModule:()=>Bt});var d=i(6814),e=i(9468),u=i(95);let C=(()=>{class t{constructor(){}createForm(o){return new u.cw({libelle:new u.NI(o.libelle,{nonNullable:!0,validators:[u.kI.required]}),description:new u.NI(o.description),materiel:new u.NI(o.materiel)})}createSearchForm(){return new u.cw({libelle:new u.NI("",{nonNullable:!0,validators:[u.kI.required]}),description:new u.NI("",{nonNullable:!0,validators:[u.kI.required]})})}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})();var y=i(2572),f=i(7398),n=i(676);const m="Envoi Perte",Z=(0,n.PH)(`[${m} API] Load All`),l=(0,n.PH)(`[${m} API] Load All Success`,(0,n.Ky)()),p=(0,n.PH)(`[${m} API] Create`,(0,n.Ky)()),E=(0,n.PH)(`[${m} API] Create Success`,(0,n.Ky)()),h=(0,n.PH)(`[${m} API] Load`,(0,n.Ky)()),b=(0,n.PH)(`[${m} API] Load Success`,(0,n.Ky)()),H=(0,n.PH)(`[${m} API] Create Error`,(0,n.Ky)()),k=(0,n.PH)(`[${m} API] Reset Error`),O=(0,n.PH)(`[${m} API] Reset Error Field`,(0,n.Ky)()),K=(0,n.PH)(`[${m} API] Reset`),D=(0,n.PH)(`[${m} API] Delete`,(0,n.Ky)()),M=(0,n.PH)(`[${m} API] Delete Success`,(0,n.Ky)()),a={loadItems:Z,loadItemsSuccess:l,resetItem:K,createItem:p,createItemSuccess:E,loadItem:h,loadItemSuccess:b,updateItem:(0,n.PH)(`[${m} API] Update`,(0,n.Ky)()),updateItemSuccess:(0,n.PH)(`[${m} API] Update Success`,(0,n.Ky)()),deleteItem:D,deleteItemSuccess:M,setError:H,resetError:k,resetErrorField:O,loadFormModel:(0,n.PH)(`[${m} API] Load Form Model`),resetFormModel:(0,n.PH)(`[${m} API] Reset Form Model`),loadFormModelSuccess:(0,n.PH)(`[${m} API] Load Form Model Success`,(0,n.Ky)()),resetSearch:(0,n.PH)(`[${m} API] Reset Search`),search:(0,n.PH)(`[${m} API] Search`,(0,n.Ky)()),changePage:(0,n.PH)(`[${m} API] Change Page`,(0,n.Ky)()),changePageSize:(0,n.PH)(`[${m} API] Change Page Size`,(0,n.Ky)()),downloadFile:(0,n.PH)(`[${m} API] Download File`),downloadFileSuccess:(0,n.PH)(`[${m} API] Download File Success`)},Ee=(0,n.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,n.on)(a.loadItemsSuccess,(t,r)=>(console.log(r.items),{...t,items:r.items,totalElement:r.totalElement})),(0,n.on)(a.resetItem,(t,r)=>({...t,currentItem:null})),(0,n.on)(a.createItemSuccess,(t,r)=>({...t})),(0,n.on)(a.deleteItemSuccess,(t,r)=>({...t})),(0,n.on)(a.loadItemSuccess,(t,r)=>({...t,currentItem:r.item})),(0,n.on)(a.updateItemSuccess,(t,r)=>({...t})),(0,n.on)(a.loadFormModel,(t,r)=>({...t,formModel:null})),(0,n.on)(a.loadFormModelSuccess,(t,r)=>({...t,formModel:r.formModel})),(0,n.on)(a.resetSearch,(t,r)=>({...t,searchModel:{}})),(0,n.on)(a.search,(t,r)=>({...t,searchModel:r.searchModel})),(0,n.on)(a.changePage,(t,r)=>({...t,page:r.page})),(0,n.on)(a.changePageSize,(t,r)=>({...t,pageSize:r.pageSize})),(0,n.on)(a.setError,(t,r)=>({...t,errors:r.errors})),(0,n.on)(a.resetError,(t,r)=>({...t,errors:null})),(0,n.on)(a.resetErrorField,(t,r)=>{let o={};return null!==t.errors&&Object.entries(t.errors).forEach(([s,c])=>{s!==r.fieldName&&(o[`${s}`]=c)}),{...t,errors:o}})),A=(0,n.ZF)("envoi-pertes"),Pe=(0,n.P1)(A,t=>t.items),Y=((0,n.P1)(A,t=>t.currentItem),(0,n.P1)(A,t=>t.formModel)),Te=(0,n.P1)(A,t=>t.searchModel),Q=(0,n.P1)(A,t=>t.page),J=(0,n.P1)(A,t=>t.pageSize),xe=(0,n.P1)(A,t=>t.totalElement),Ze=(0,n.P1)(A,t=>t.errors);var w=i(8281),R=i(3849),Se=i(7251),z=i(166),j=i(6327),W=i(8564),X=i(8223),V=i(602),ee=i(1469),te=i(6326),oe=i(8346),ne=i(1171),ie=i(547),re=i(362);function ye(t,r){1&t&&(e.TgZ(0,"th",27),e._uU(1,"R\xe9f\xe9rence"),e.qZA())}function Ae(t,r){if(1&t&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Oqu(o.refSys)}}function Ie(t,r){1&t&&(e.TgZ(0,"th",27),e._uU(1,"Libell\xe9"),e.qZA())}function Fe(t,r){if(1&t&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Oqu(o.libelle)}}function Me(t,r){1&t&&(e.TgZ(0,"th",27),e._uU(1,"Description"),e.qZA())}function Ue(t,r){if(1&t&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Oqu(o.description)}}function Le(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"table",21),e.NdJ("itemSelected",function(c){e.CHM(o);const T=e.oxw(2);return e.KtG(T.itemSelected(c))}),e.ynx(1,22),e.YNc(2,ye,2,0,"th",23),e.YNc(3,Ae,2,1,"td",24),e.BQk(),e.ynx(4,25),e.YNc(5,Ie,2,0,"th",23),e.YNc(6,Fe,2,1,"td",24),e.BQk(),e.ynx(7,26),e.YNc(8,Me,2,0,"th",23),e.YNc(9,Ue,2,1,"td",24),e.BQk(),e.qZA()}if(2&t){const o=r.ngIf,s=e.oxw(2);e.Q6J("items",o)("headers",s.headerTable)("selectable",!0)}}function Be(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"app-crud-list",3),e.NdJ("searchButtonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.searchButtonClicked())})("refreshButtonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.refreshButtonClicked())})("pageSelected",function(c){e.CHM(o);const T=e.oxw();return e.KtG(T.pageSelected(c))})("pageSizeChange",function(c){e.CHM(o);const T=e.oxw();return e.KtG(T.pageSizeChange(c))})("closeButtonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.closeButtonClicked())}),e.TgZ(1,"div",4)(2,"div",5)(3,"div",6),e._UZ(4,"app-form-label",7),e.qZA(),e.TgZ(5,"div",8),e._UZ(6,"app-custom-textfield",9),e.qZA()()(),e.TgZ(7,"div",10)(8,"div",11)(9,"div",6),e._UZ(10,"app-form-label",12),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"app-custom-textfield",13),e.qZA()()(),e.TgZ(13,"div",14)(14,"app-custom-button",15),e.NdJ("buttonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.addButtonClicked())}),e.qZA()(),e.TgZ(15,"div",16),e._UZ(16,"app-custom-button",17),e.TgZ(17,"app-print-button",18),e.NdJ("printButtonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.printButtonClicked())}),e.qZA()(),e.TgZ(18,"div",19),e.YNc(19,Le,10,3,"table",20),e.ALo(20,"async"),e.qZA()()}if(2&t){const o=r.ngIf,s=e.oxw();e.Q6J("itemSelected",s.isItemSelected())("pageSize",o.pageSize)("currentPage",o.page)("totalElements",o.totalElement),e.xp6(1),e.Q6J("formGroup",s.searchForm),e.xp6(6),e.Q6J("formGroup",s.searchForm),e.xp6(12),e.Q6J("ngIf",e.lcZ(20,7,s.items$))}}let $e=(()=>{class t{constructor(o,s,c,T){this.router=o,this.store=s,this.envoiPerteFormService=c,this.headerTable=["R\xe9f\xe9rence","Libell\xe9","Description"],this.items$=this.store.select(Pe),this.page$=this.store.select(Q),this.pageSize$=this.store.select(J),this.totalElement$=this.store.select(xe),this.data$=(0,y.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,f.U)(([L,G,g])=>({page:L,pageSize:G,totalElement:g}))),this.selectedItem=null,this.dateTest=new Date}ngOnInit(){this.searchForm=this.envoiPerteFormService.createSearchForm(),this.store.dispatch(a.loadItems())}addButtonClicked(){this.router.navigate(["parc-informatique","envoi-perte","add"])}editButtonClicked(){const o=this.selectedItem?.id;o&&(this.store.dispatch(a.resetItem()),this.router.navigate(["parc-informatique","envoi-perte","edit",o]))}deleteButtonClicked(){const o=this.selectedItem;o&&this.store.dispatch(a.deleteItem({item:o}))}itemSelected(o){this.selectedItem=o}pageSelected(o){this.store.dispatch(a.changePage({page:o}))}pageSizeChange(o){this.store.dispatch(a.changePageSize({pageSize:o}))}closeButtonClicked(){this.router.navigate(["parc-informatique"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(a.resetSearch())}searchButtonClicked(){this.store.dispatch(a.search({searchModel:this.searchForm.value}))}printButtonClicked(){this.store.dispatch(a.downloadFile())}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(w.F0),e.Y36(n.yh),e.Y36(C),e.Y36(e.soG))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-envoi-perte-list"]],features:[e._Bn([C,{provide:e.soG,useValue:"fr-FR"}])],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Mouvements Equipements","pathLevelTwo","Envois en Perte","pathLevelThree","Liste"],["title","Liste des Envois en Perte",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","Liste des Envois en Perte",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row","align-items-center"],[1,"text-end","me-1","width-label-search"],["title","Libell\xe9"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","libelle"],[1,"advance-search",3,"formGroup"],[1,"d-flex","flex-row","mt-2","align-items-center"],["title","Description"],["placeholder","","otherclass","item-input","formControlName","description"],[1,"primary-actions"],["icon","icon-plus btn-icon-add fw-bold","title","Effectuer Un Envoi en Perte",1,"me-1",3,"buttonClicked"],[1,"secondary-actions","d-flex"],["customClass","btn btn-sm button-action","title","Exporter","url","export.svg",1,"me-1","ms-1"],[3,"printButtonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","R\xe9f\xe9rence"],["app-header-attribute-def-template","",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","table-align-left",4,"appCellDefTemplate"],["appCellDef","Libell\xe9"],["appCellDef","Description"],["app-header-attribute-def-template",""],["app-cell-def-template","",1,"table-align-left"]],template:function(s,c){1&s&&(e.TgZ(0,"div",0),e._UZ(1,"app-custom-breadcrumb",1),e.qZA(),e.YNc(2,Be,21,9,"app-crud-list",2),e.ALo(3,"async")),2&s&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,c.data$)))},dependencies:[R.L,d.O5,u.JJ,u.JL,u.sg,u.u,Se._,z.x,j.N,W.D,X.h,V.u,ee.O,te.q,oe.W,ne.h,ie.Z,re.V,d.Ov],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}"]})}return t})();var se=i(797),Oe=i(8819),De=i(9543),Ne=i(7426),ke=i(9887),Ke=i(6219),we=i(2113),He=i(5973),qe=i(4944),Ge=i(2093),Ye=i(6136),Qe=i(8513),Je=i(586),Re=i(1327),ze=i(5188);function je(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1,"Num\xe9ro S\xe9rie "),e.qZA())}function We(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.numeroSerie," ")}}function Xe(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1," Libell\xe9 "),e.qZA())}function Ve(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.libelle," ")}}function et(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1," Description "),e.qZA())}function tt(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.description," ")}}function ot(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1," Etat Actuel "),e.qZA())}function nt(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.etatEquipement," ")}}function it(t,r){1&t&&(e.TgZ(0,"table",52),e.ynx(1,53),e.YNc(2,je,2,0,"th",54),e.YNc(3,We,2,1,"td",55),e.BQk(),e.ynx(4,56),e.YNc(5,Xe,2,0,"th",54),e.YNc(6,Ve,2,1,"td",55),e.BQk(),e.ynx(7,57),e.YNc(8,et,2,0,"th",54),e.YNc(9,tt,2,1,"td",55),e.BQk(),e.ynx(10,58),e.YNc(11,ot,2,0,"th",54),e.YNc(12,nt,2,1,"td",55),e.BQk(),e.qZA())}function rt(t,r){if(1&t&&(e.TgZ(0,"div",49)(1,"app-item-search",50),e.YNc(2,it,13,0,"table",51),e.qZA()()),2&t){const o=r.ngIf,s=e.oxw(2);e.xp6(1),e.Q6J("headers",s.equipementSelectItemsHeader)("items",o.equipements)("criterias",s.equipementItemCritterias)("itemDescription",s.equipementItemDescription)}}function st(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Num\xe9ro S\xe9rie"),e.qZA())}function at(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.numeroSerie," ")}}function ct(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Libell\xe9"),e.qZA())}function lt(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij("",o.libelle," ")}}function pt(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Mod\xe8le"),e.qZA())}function mt(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.modelEquip.libelle," ")}}function dt(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Fabricant"),e.qZA())}function ut(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.modelEquip.makerEquip.libelle," ")}}function ht(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Groupe Equipement"),e.qZA())}function ft(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.modelEquip.categoryEquip.groupEquip.libelle," ")}}function _t(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Cat\xe9gorie"),e.qZA())}function vt(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.modelEquip.categoryEquip.groupEquip.libelle," ")}}function gt(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"form",2)(1,"div",3)(2,"app-panel-custom",4)(3,"div",5)(4,"div",6),e._UZ(5,"app-form-label",7),e.TgZ(6,"div",8),e._UZ(7,"app-custom-textfield",9),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",10),e._UZ(10,"app-form-label",11),e.TgZ(11,"div",8),e._UZ(12,"app-custom-textfield",12),e.qZA()(),e.TgZ(13,"div",6),e._UZ(14,"app-form-label",13),e.TgZ(15,"div",14),e._UZ(16,"app-custom-textfield",12),e.qZA()()(),e.TgZ(17,"div",5)(18,"div",10),e._UZ(19,"app-form-label",15),e.TgZ(20,"div",8),e._UZ(21,"app-custom-textfield",12),e.qZA()(),e.TgZ(22,"div",6),e._UZ(23,"app-form-label",16),e.TgZ(24,"div",14),e._UZ(25,"app-custom-textfield",12),e.qZA()()()(),e.TgZ(26,"app-panel-custom",17)(27,"app-tabs",18)(28,"app-tab",19)(29,"div",20)(30,"h6",21),e._uU(31," Envoi en Perte "),e.qZA()(),e._UZ(32,"hr",22),e.TgZ(33,"div",23)(34,"div",24)(35,"div",25),e._UZ(36,"app-form-label",26),e.TgZ(37,"div",8)(38,"app-field-error-wrapper",27),e.NdJ("resetField",function(c){e.CHM(o);const T=e.oxw();return e.KtG(T.resetBackendError(c))}),e._UZ(39,"app-custom-textfield",28),e.qZA()()()(),e.TgZ(40,"div",29)(41,"div",30),e._UZ(42,"app-form-label",31),e.TgZ(43,"div",8),e._UZ(44,"textarea",32),e.qZA()()()()(),e.TgZ(45,"app-tab",33)(46,"div",34),e.YNc(47,rt,3,4,"div",35),e.ALo(48,"async"),e.TgZ(49,"app-custom-button",36),e.NdJ("buttonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.removeEquipement())}),e.qZA()(),e.TgZ(50,"div",5)(51,"table",37),e.NdJ("itemSelected",function(c){e.CHM(o);const T=e.oxw();return e.KtG(T.itemSelected(c))}),e.ynx(52,38),e.YNc(53,st,2,0,"th",39),e.YNc(54,at,2,1,"td",40),e.BQk(),e.ynx(55,41),e.YNc(56,ct,2,0,"th",39),e.YNc(57,lt,2,1,"td",40),e.BQk(),e.ynx(58,42),e.YNc(59,pt,2,0,"th",39),e.YNc(60,mt,2,1,"td",40),e.BQk(),e.ynx(61,43),e.YNc(62,dt,2,0,"th",39),e.YNc(63,ut,2,1,"td",40),e.BQk(),e.ynx(64,44),e.YNc(65,ht,2,0,"th",39),e.YNc(66,ft,2,1,"td",40),e.BQk(),e.ynx(67,45),e.YNc(68,_t,2,0,"th",39),e.YNc(69,vt,2,1,"td",40),e.BQk(),e.qZA()()()()(),e.TgZ(70,"div",46)(71,"app-primary-button",47),e.NdJ("buttonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.submitForm())}),e.qZA(),e.TgZ(72,"app-cancel-button",48),e.NdJ("buttonClicked",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.returnToList())}),e.qZA()()()()}if(2&t){const o=e.oxw();e.Q6J("formGroup",o.form),e.xp6(7),e.Q6J("readonly",!0),e.xp6(5),e.Q6J("readonly",!0),e.xp6(4),e.Q6J("readonly",!0),e.xp6(5),e.Q6J("readonly",!0),e.xp6(4),e.Q6J("readonly",!0),e.xp6(13),e.Q6J("errors",o.errors),e.xp6(9),e.Q6J("ngIf",e.lcZ(48,12,o.formModel$)),e.xp6(2),e.Q6J("disabled",!o.isItemSelected()),e.xp6(2),e.Q6J("items",o.materiels)("headers",o.headerTable)("selectable",!0)}}let bt=(()=>{class t{constructor(o,s,c,T){this.formService=o,this.modalService=s,this.router=c,this.store=T,this.formModel$=this.store.select(Y),this.errors=null,this.materiels=[],this.tempMateriels=[],this.selectedItem=null,this.action="",this.formSubmitted=new e.vpe,this.equipementSelectItemsHeader=["Num\xe9ro S\xe9rie","Libell\xe9","Description","Etat Actuel"],this.equipementItemDescription=L=>L.libelle,this.equipementItemCritterias={numeroSerie:"Num\xe9ro S\xe9rie",libelle:"Libell\xe9",description:"Description"},this.headerTable=["Num\xe9ro S\xe9rie","Libell\xe9","Mod\xe8le","Fabricant","Groupe Equipement","Cat\xe9gorie","Etat Actuel"]}ngOnInit(){this.store.dispatch(a.loadFormModel()),this.store.select(Ze).subscribe(o=>{this.errors=o}),this.store.dispatch(a.resetError()),this.form=this.formService.createForm(this.envoiPerte),this.form.get("materiel")?.valueChanges.subscribe(o=>{o&&this.initEquipements(o)}),"edit"===this.action&&(this.materiels=this.envoiPerte.equipements)}ngOnDestroy(){}submitForm(){if("add"===this.action){const o={...this.form.getRawValue(),equipements:this.materiels};this.formSubmitted.emit(o)}else this.formSubmitted.emit(this.form.getRawValue())}initEquipements(o){const s=[];this.materiels.length>0?(this.materiels.forEach(c=>{s.push(c)}),this.materiels=[],s.forEach(c=>{this.materiels.push(c)}),this.materiels.push(o)):(this.materiels=[],this.materiels.push(o))}removeEquipement(){null!==this.selectedItem&&(this.materiels=this.materiels.filter(o=>o.id!==this.selectedItem?.id),console.log(this.materiels))}returnToList(){this.router.navigateByUrl("parc-informatique/envoi-perte")}resetBackendError(o){this.store.dispatch(a.resetErrorField({fieldName:o}))}itemSelected(o){this.selectedItem=o}isItemSelected(){return null!==this.selectedItem}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(C),e.Y36(se.Z),e.Y36(w.F0),e.Y36(n.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-envoi-perte-form"]],inputs:{action:"action",envoiPerte:"envoiPerte"},outputs:{formSubmitted:"formSubmitted"},features:[e._Bn([C])],decls:2,vars:1,consts:[[1,"pe-3","ps-3","pb-3","pt-0"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-main","p-2"],["icon","fa fa-angle-right","title","Historique"],[1,"general-info"],[1,"input-container","col-5"],["title","R\xe9f\xe9rence",1,"w-form","text-end"],[1,"input-textfield-container","col"],["otherclass","emphase h-form","placeholder","",3,"readonly"],[1,"input-container","col-4"],["title","Date Cr\xe9ation",1,"w-form","text-end"],["otherclass","custom-style-form","placeholder","",3,"readonly"],["title","Cr\xe9\xe9 Par",1,"col-4","text-end"],[1,"input-textfield-container","col-7"],["title","Date Derni\xe8re Modif",1,"w-form","text-end"],["title","Modifi\xe9 Par",1,"col-4","text-end"],["icon","fa fa-angle-right","background","background-style custom-padding"],["background","background-tabs"],["tabTitle","Informations g\xe9n\xe9rales"],[1,"d-flex","align-items-center",2,"margin-bottom","0px"],[1,"mb-0","pt-1","text-success","me-auto"],[1,"mt-0"],[1,"general-info","flex-column"],[1,"col-12","mb-2"],[1,"input-container","col"],["title","Libell\xe9",1,"w-form","text-end"],[3,"errors","resetField"],["otherclass","custom-style-form emphase","placeholder","","formControlName","libelle"],[1,"col-12"],[1,"input-container","col","d-flex","align-items-center"],["title","Description",1,"w-form","text-end"],["placeholder","","formControlName","description",1,"custom-style-textarea","emphase"],["tabTitle","Liste des \xe9quipements"],[1,"button-head","d-flex","ms-auto"],["class","col-auto",4,"ngIf"],["otherclass","custom-button-item-search col-auto","icon","icon-trash m-custom btn-icon-delete",3,"disabled","buttonClicked"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","Num\xe9ro S\xe9rie"],["app-header-attribute-def-template","","class","custom-head",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","custom-head",4,"appCellDefTemplate"],["appCellDef","Libell\xe9"],["appCellDef","Mod\xe8le"],["appCellDef","Fabricant"],["appCellDef","Groupe Equipement"],["appCellDef","Cat\xe9gorie"],[1,"form-actions"],["title","Enregistrer",1,"me-1",3,"buttonClicked"],["otherclass","custom-cancel-button","title","Annuler",3,"buttonClicked"],[1,"col-auto"],["otherclass","custom-button-item-search col-auto","icon","icon-plus btn-icon-add","formControlName","materiel",3,"headers","items","criterias","itemDescription"],["app-item-search-template-attribute","",4,"appItemSearchTemplate"],["app-item-search-template-attribute",""],["appItemSearchCellDef","Num\xe9ro S\xe9rie"],["app-item-search-header-def-template","","class","custom-head",4,"appItemSearchHeaderDefTemplate"],["app-item-search-cell-def-template","","class","custom-head",4,"appItemSearchCellDefTemplate"],["appItemSearchCellDef","Libell\xe9"],["appItemSearchCellDef","Description"],["appItemSearchCellDef","Etat Actuel"],["app-item-search-header-def-template","",1,"custom-head"],["app-item-search-cell-def-template","",1,"custom-head"],["app-header-attribute-def-template","",1,"custom-head"],["app-cell-def-template","",1,"custom-head"]],template:function(s,c){1&s&&(e.TgZ(0,"div",0),e.YNc(1,gt,73,14,"form",1),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngIf",c.form))},dependencies:[d.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,z.x,Oe.F,j.N,W.D,X.h,V.u,ee.O,te.q,oe.W,ne.h,De.C,ie.Z,Ne.p,ke.l,Ke.n,we.i,He.v,qe.K,Ge.d,Ye.D,Qe.T,Je.o,Re.g,ze.K,d.Ov],styles:["[_nghost-%COMP%]{font-size:12px}.general-info[_ngcontent-%COMP%]{display:flex;padding:3px 0}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.input-container[_ngcontent-%COMP%] + .input-container[_ngcontent-%COMP%]{//margin-left: 32px}.input-textfield-container[_ngcontent-%COMP%]{//width: 250px;margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}"]})}return t})(),Ct=(()=>{class t{constructor(o){this.store=o,this.formModel$=this.store.select(Y),this.envoiPerteDto={id:"",libelle:"",description:"",materiel:null,equipements:[]}}ngOnInit(){this.store.dispatch(a.resetItem()),this.store.dispatch(a.resetFormModel())}addEnvoiPerte(o){this.store.dispatch(a.createItem({item:{equipements:o.equipements,libelle:o.libelle,description:o.description}}))}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(n.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-envoi-perte-add"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Mouvements Equipements","pathLevelTwo","Envois en Perte","pathLevelThree","Ajouter"],["action","add",3,"envoiPerte","formSubmitted"]],template:function(s,c){1&s&&(e.TgZ(0,"div",0),e._UZ(1,"app-custom-breadcrumb",1),e.qZA(),e.TgZ(2,"app-envoi-perte-form",2),e.NdJ("formSubmitted",function(L){return c.addEnvoiPerte(L)}),e.qZA()),2&s&&(e.xp6(2),e.Q6J("envoiPerte",c.envoiPerteDto))},dependencies:[re.V,bt],styles:["[_nghost-%COMP%]{width:100%}"]})}return t})(),Et=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-envoi-perte-edit"]],decls:2,vars:0,template:function(s,c){1&s&&(e.TgZ(0,"p"),e._uU(1,"envoi-perte-edit works!"),e.qZA())}})}return t})();var Pt=i(9207),v=i(6465),Tt=i(2460),I=i(6328),xt=i(9026),U=i(6306),q=i(9397),ae=i(1631),P=i(6063),Zt=i(9862),S=i(2096),St=i(3186),yt=i(4664),At=i(217),It=i(1946),Ft=i(9989);let ce=(()=>{class t extends Ft.v{getResourceBasePath(){return`${It.y}/envoi-equipement-perte`}getPrintAll(){return this.http.post(`${this.url}/${this.getResourceBasePath()}/print/all`,{},{observe:"response",responseType:"blob"})}static#e=this.\u0275fac=function(){let o;return function(c){return(o||(o=e.n5z(t)))(c||t)}}();static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})();var Mt=i(6366);let Ut=(()=>{class t{constructor(o,s,c,T,L,G){this.envoiPerteService=o,this.authService=s,this.actions$=c,this.router=T,this.modalService=L,this.store=G,this.loadItems$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.loadItems),(0,Tt.M)(this.store.select(Q),this.store.select(J),this.store.select(Te)),(0,I.b)(([g,_,B,N])=>(console.log(_),this.store.dispatch((0,P.Q)()),(0,xt.$)(this.envoiPerteService.getAllWithPagination(_,B,N),this.envoiPerteService.count(N)).pipe((0,f.U)(([$,$t])=>(this.store.dispatch((0,P.Z)()),a.loadItemsSuccess({items:$,totalElement:$t}))),(0,U.K)($=>(this.store.dispatch((0,P.Z)()),(0,S.of)(a.setError({errors:$})))))))),{dispatch:!0}),this.createItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.createItem),(0,I.b)(g=>(this.store.dispatch((0,P.Q)()),this.envoiPerteService.add(g.item).pipe((0,q.b)(()=>{this.store.dispatch((0,P.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Envoi aux Pertes effectu\xe9 avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/envoi-perte")}),(0,f.U)(_=>a.createItemSuccess({item:_})),(0,U.K)(_=>(this.store.dispatch((0,P.Z)()),(0,S.of)(a.setError({errors:_})))))))),{dispatch:!0}),this.loadItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.loadItem),(0,ae.z)(g=>this.envoiPerteService.findById(g.id).pipe((0,f.U)(_=>a.loadItemSuccess({item:_})),(0,U.K)(_=>(this.store.dispatch((0,P.Z)()),(0,S.of)(a.setError({errors:_}))))))),{dispatch:!0}),this.deleteItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.deleteItem),(0,I.b)(g=>this.envoiPerteService.delete(g.item.id,g.item)),(0,q.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Envoi aux Pertes supprim\xe9e avec succ\xe8s"})}),(0,f.U)(()=>a.loadItems()),(0,U.K)(g=>(this.store.dispatch((0,P.Z)()),(0,S.of)(a.setError({errors:g}))))),{dispatch:!0}),this.updateItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.updateItem),(0,I.b)(g=>(this.store.dispatch((0,P.Q)()),this.envoiPerteService.update(g.id,g.item).pipe((0,q.b)(()=>{this.store.dispatch((0,P.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Envoi aux Pertes modifi\xe9e avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/envoi-perte")}),(0,f.U)(_=>a.updateItemSuccess({item:_})),(0,U.K)(_=>(this.store.dispatch((0,P.Z)()),(0,S.of)(a.setError({errors:_})))))))),{dispatch:!0}),this.downloadFile$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.downloadFile),(0,ae.z)(g=>(this.store.dispatch((0,P.Q)()),this.envoiPerteService.getPrintAll().pipe((0,f.U)(_=>{console.log(_),this.store.dispatch((0,P.Z)());let B=_.headers.get("content-disposition")?.split(";")[1].split("=")[1];return(0,At.saveAs)(_.body,B),a.loadItems()}),(0,U.K)(_=>(this.store.dispatch((0,P.Z)()),(0,S.of)(a.setError({errors:_})))))))),{dispatch:!0}),this.loadFormModel$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.loadFormModel),(0,I.b)(()=>this.envoiPerteService.getFormModel()),(0,f.U)(g=>a.loadFormModelSuccess({formModel:g})),(0,U.K)(g=>(0,S.of)(a.setError({errors:g}))))),this.resetSearch$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.resetSearch),(0,I.b)(()=>(0,S.of)(a.changePage({page:1}))))),this.search$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.search),(0,I.b)(()=>(0,S.of)(a.changePage({page:1}))))),this.changePage$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.changePage),(0,f.U)(g=>a.loadItems()))),this.changePageSize$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.changePageSize),(0,I.b)(()=>(0,S.of)(a.changePage({page:1}))))),this.handleError$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(a.setError),(0,yt.w)(g=>{if(this.store.dispatch((0,P.Q)()),g.errors instanceof Zt.UA){if(422===g.errors.status){let _="",B=0;for(const[N,$]of Object.entries(g.errors.error))_+=0===B?$:"\n"+$,B++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:_})}if(403===g.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===g.errors.status){let _="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,P.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:_}),(0,S.of)(St.jM())}}return this.store.dispatch((0,P.Z)()),(0,S.of)({type:"noop"})})),{dispatch:!0})}static#e=this.\u0275fac=function(s){return new(s||t)(e.LFG(ce),e.LFG(Mt.e),e.LFG(v.eX),e.LFG(w.F0),e.LFG(se.Z),e.LFG(n.yh))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})();const Lt=[{path:"",component:$e,pathMatch:"prefix"},{path:"add",component:Ct,pathMatch:"prefix"},{path:"edit/:id",component:Et,pathMatch:"prefix"}];let Bt=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({providers:[ce],imports:[R.L,d.ez,n.Aw.forFeature("envoi-pertes",Ee),v.sQ.forFeature(Ut),Pt.m,w.Bz.forChild(Lt)]})}return t})()},8819:(F,x,i)=>{"use strict";i.d(x,{F:()=>e});var d=i(9468);let e=(()=>{class u{constructor(){this.disabled=!1,this.buttonClicked=new d.vpe}emitButtonClicked(){this.buttonClicked.emit()}static#e=this.\u0275fac=function(f){return new(f||u)};static#t=this.\u0275cmp=d.Xpm({type:u,selectors:[["app-cancel-button"]],inputs:{title:"title",url:"url",otherclass:"otherclass",disabled:"disabled"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:5,consts:[[3,"disabled","click"]],template:function(f,n){1&f&&(d.TgZ(0,"button",0),d.NdJ("click",function(){return n.emitButtonClicked()}),d._uU(1),d.qZA()),2&f&&(d.Gre("cancel-button ",n.otherclass,""),d.Q6J("disabled",n.disabled),d.xp6(1),d.hij(" ",n.title,"\n"))},styles:[".cancel-button[_ngcontent-%COMP%]{color:#000;border:1px solid #6d7582;background-color:#fff;min-width:120px;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:25px;padding:.75rem 0rem;border-radius:3px}"]})}return u})()},3849:(F,x,i)=>{"use strict";i.d(x,{L:()=>y});var d=i(9468),e=i(2463),u=i(6814),C=i(166);let y=(()=>{class f{constructor(){this.printButtonClicked=new d.vpe}emitPrintButtonClicked(){this.printButtonClicked.emit()}static#e=this.\u0275fac=function(Z){return new(Z||f)};static#t=this.\u0275cmp=d.Xpm({type:f,selectors:[["app-print-button"]],outputs:{printButtonClicked:"printButtonClicked"},standalone:!0,features:[d.jDz],decls:1,vars:0,consts:[["customClass","btn btn-sm button-action","title","Imprimer","url","print.svg",3,"buttonClicked"]],template:function(Z,l){1&Z&&(d.TgZ(0,"app-custom-button",0),d.NdJ("buttonClicked",function(){return l.emitPrintButtonClicked()}),d.qZA())},dependencies:[u.ez,e.v,C.x],styles:["[_nghost-%COMP%]{display:block}"]})}return f})()},2113:(F,x,i)=>{"use strict";i.d(x,{i:()=>u});var d=i(9468);const e=["*"];let u=(()=>{class C{constructor(){this.tabTitle="",this.active=!1}static#e=this.\u0275fac=function(n){return new(n||C)};static#t=this.\u0275cmp=d.Xpm({type:C,selectors:[["app-tab"]],inputs:{tabTitle:"tabTitle",active:"active"},ngContentSelectors:e,decls:2,vars:1,consts:[[1,"pane",3,"hidden"]],template:function(n,m){1&n&&(d.F$t(),d.TgZ(0,"div",0),d.Hsn(1),d.qZA()),2&n&&d.Q6J("hidden",!m.active)},styles:[".pane[_ngcontent-%COMP%]{padding:1rem}"]})}return C})()},6219:(F,x,i)=>{"use strict";i.d(x,{n:()=>n});var d=i(2113),e=i(9468),u=i(6814);const C=function(m){return{active:m}};function y(m,Z){if(1&m){const l=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){const h=e.CHM(l).$implicit,b=e.oxw();return e.KtG(b.selectTab(h))}),e._uU(1),e.qZA()}if(2&m){const l=Z.$implicit;e.Q6J("ngClass",e.VKq(2,C,!0===l.active)),e.xp6(1),e.hij(" ",l.tabTitle," ")}}const f=["*"];let n=(()=>{class m{constructor(){}ngAfterContentInit(){0===this.tabs.filter(p=>p.active).length&&this.selectTab(this.tabs.first)}selectTab(l){this.tabs.toArray().forEach(p=>p.active=!1),l.active=!0}static#e=this.\u0275fac=function(p){return new(p||m)};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["app-tabs"]],contentQueries:function(p,E,h){if(1&p&&e.Suo(h,d.i,4),2&p){let b;e.iGM(b=e.CRH())&&(E.tabs=b)}},inputs:{background:"background"},ngContentSelectors:f,decls:5,vars:4,consts:[[1,"tabs-container"],["class","tab",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"active-tab-content"],[1,"tab",3,"ngClass","click"]],template:function(p,E){1&p&&(e.F$t(),e.TgZ(0,"div",0)(1,"ul"),e.YNc(2,y,2,4,"li",1),e.qZA(),e.TgZ(3,"div",2),e.Hsn(4),e.qZA()()),2&p&&(e.xp6(1),e.Gre("list-unstyled tab-title-container ",E.background,""),e.xp6(1),e.Q6J("ngForOf",E.tabs))},dependencies:[u.mk,u.sg],styles:['.tabs-container[_ngcontent-%COMP%]{margin:2px;border-top:0px;background-color:#fff}.tab-title-container[_ngcontent-%COMP%]{font-size:.875rem;display:flex;margin-bottom:0}.active-tab-content[_ngcontent-%COMP%]{border:1px solid #c7c5c6;border-top:0px;margin-top:0}.tab-title-container[_ngcontent-%COMP%]:after{content:"";display:inline-block;width:12px;flex-grow:1;border-bottom:1px solid #c7c5c6}.tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{padding:.25rem 1rem;text-align:center;border:0px;border-bottom:1px solid #c7c5c6;cursor:pointer}.tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{border-radius:2px;opacity:90%}.tabs-container[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #c7c5c6;border-bottom:0px;color:#69696b;font-family:aileronbold;border-top-left-radius:8px;border-top-right-radius:8px}']})}return m})()},217:function(F,x){var i,e;void 0!==(e="function"==typeof(i=function(){"use strict";function C(l,p,E){var h=new XMLHttpRequest;h.open("GET",l),h.responseType="blob",h.onload=function(){Z(h.response,p,E)},h.onerror=function(){console.error("could not download file")},h.send()}function y(l){var p=new XMLHttpRequest;p.open("HEAD",l,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function f(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(p)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,m=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Z=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(l,p,E){var h=n.URL||n.webkitURL,b=document.createElement("a");b.download=p=p||l.name||"download",b.rel="noopener","string"==typeof l?(b.href=l,b.origin===location.origin?f(b):y(b.href)?C(l,p,E):f(b,b.target="_blank")):(b.href=h.createObjectURL(l),setTimeout(function(){h.revokeObjectURL(b.href)},4e4),setTimeout(function(){f(b)},0))}:"msSaveOrOpenBlob"in navigator?function(l,p,E){if(p=p||l.name||"download","string"!=typeof l)navigator.msSaveOrOpenBlob(function u(l,p){return typeof p>"u"?p={autoBom:!1}:"object"!=typeof p&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\ufeff",l],{type:l.type}):l}(l,E),p);else if(y(l))C(l,p,E);else{var h=document.createElement("a");h.href=l,h.target="_blank",setTimeout(function(){f(h)})}}:function(l,p,E,h){if((h=h||open("","_blank"))&&(h.document.title=h.document.body.innerText="downloading..."),"string"==typeof l)return C(l,p,E);var b="application/octet-stream"===l.type,H=/constructor/i.test(n.HTMLElement)||n.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||b&&H||m)&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var M=O.result;M=k?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=M:location=M,h=null},O.readAsDataURL(l)}else{var K=n.URL||n.webkitURL,D=K.createObjectURL(l);h?h.location=D:location.href=D,h=null,setTimeout(function(){K.revokeObjectURL(D)},4e4)}});n.saveAs=Z.saveAs=Z,F.exports=Z})?i.apply(x,[]):i)&&(F.exports=e)}}]);