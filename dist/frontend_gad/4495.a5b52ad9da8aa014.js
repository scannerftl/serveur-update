(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[4495],{4495:(P,Z,i)=>{"use strict";i.r(Z),i.d(Z,{RetourMaintenanceModule:()=>Lt});var m=i(6814),e=i(9468),d=i(95);let C=(()=>{class t{constructor(){}createForm(n){return new d.cw({libelle:new d.NI(n.libelle,{nonNullable:!0,validators:[d.kI.required]}),description:new d.NI(n.description),materiel:new d.NI(n.materiel)})}createSearchForm(){return new d.cw({libelle:new d.NI("",{nonNullable:!0,validators:[d.kI.required]}),description:new d.NI("",{nonNullable:!0,validators:[d.kI.required]})})}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})();var y=i(2572),f=i(7398),o=i(676);const u="Retour Maintenance",E=(0,o.PH)(`[${u} API] Load All`),l=(0,o.PH)(`[${u} API] Load All Success`,(0,o.Ky)()),p=(0,o.PH)(`[${u} API] Create`,(0,o.Ky)()),M=(0,o.PH)(`[${u} API] Create Success`,(0,o.Ky)()),h=(0,o.PH)(`[${u} API] Load`,(0,o.Ky)()),v=(0,o.PH)(`[${u} API] Load Success`,(0,o.Ky)()),w=(0,o.PH)(`[${u} API] Create Error`,(0,o.Ky)()),N=(0,o.PH)(`[${u} API] Reset Error`),$=(0,o.PH)(`[${u} API] Reset Error Field`,(0,o.Ky)()),k=(0,o.PH)(`[${u} API] Reset`),O=(0,o.PH)(`[${u} API] Delete`,(0,o.Ky)()),F=(0,o.PH)(`[${u} API] Delete Success`,(0,o.Ky)()),s={loadItems:E,loadItemsSuccess:l,resetItem:k,createItem:p,createItemSuccess:M,loadItem:h,loadItemSuccess:v,updateItem:(0,o.PH)(`[${u} API] Update`,(0,o.Ky)()),updateItemSuccess:(0,o.PH)(`[${u} API] Update Success`,(0,o.Ky)()),deleteItem:O,deleteItemSuccess:F,setError:w,resetError:N,resetErrorField:$,loadFormModel:(0,o.PH)(`[${u} API] Load Form Model`),resetFormModel:(0,o.PH)(`[${u} API] Reset Form Model`),loadFormModelSuccess:(0,o.PH)(`[${u} API] Load Form Model Success`,(0,o.Ky)()),resetSearch:(0,o.PH)(`[${u} API] Reset Search`),search:(0,o.PH)(`[${u} API] Search`,(0,o.Ky)()),changePage:(0,o.PH)(`[${u} API] Change Page`,(0,o.Ky)()),changePageSize:(0,o.PH)(`[${u} API] Change Page Size`,(0,o.Ky)()),downloadFile:(0,o.PH)(`[${u} API] Download File`),downloadFileSuccess:(0,o.PH)(`[${u} API] Download File Success`)},Me=(0,o.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,o.on)(s.loadItemsSuccess,(t,r)=>(console.log(r.items),{...t,items:r.items,totalElement:r.totalElement})),(0,o.on)(s.resetItem,(t,r)=>({...t,currentItem:null})),(0,o.on)(s.createItemSuccess,(t,r)=>({...t})),(0,o.on)(s.deleteItemSuccess,(t,r)=>({...t})),(0,o.on)(s.loadItemSuccess,(t,r)=>({...t,currentItem:r.item})),(0,o.on)(s.updateItemSuccess,(t,r)=>({...t})),(0,o.on)(s.loadFormModel,(t,r)=>({...t,formModel:null})),(0,o.on)(s.loadFormModelSuccess,(t,r)=>({...t,formModel:r.formModel})),(0,o.on)(s.resetSearch,(t,r)=>({...t,searchModel:{}})),(0,o.on)(s.search,(t,r)=>({...t,searchModel:r.searchModel})),(0,o.on)(s.changePage,(t,r)=>({...t,page:r.page})),(0,o.on)(s.changePageSize,(t,r)=>({...t,pageSize:r.pageSize})),(0,o.on)(s.setError,(t,r)=>({...t,errors:r.errors})),(0,o.on)(s.resetError,(t,r)=>({...t,errors:null})),(0,o.on)(s.resetErrorField,(t,r)=>{let n={};return null!==t.errors&&Object.entries(t.errors).forEach(([a,c])=>{a!==r.fieldName&&(n[`${a}`]=c)}),{...t,errors:n}})),A=(0,o.ZF)("retour-maintenances"),Te=(0,o.P1)(A,t=>t.items),G=((0,o.P1)(A,t=>t.currentItem),(0,o.P1)(A,t=>t.formModel)),xe=(0,o.P1)(A,t=>t.searchModel),Y=(0,o.P1)(A,t=>t.page),Q=(0,o.P1)(A,t=>t.pageSize),Ze=(0,o.P1)(A,t=>t.totalElement),Ee=(0,o.P1)(A,t=>t.errors);var K=i(8281),J=i(3849),Se=i(7251),z=i(166),j=i(6327),W=i(8564),X=i(8223),V=i(602),ee=i(1469),te=i(6326),ne=i(8346),oe=i(1171),ie=i(547),re=i(362);function ye(t,r){1&t&&(e.TgZ(0,"th",27),e._uU(1,"R\xe9f\xe9rence"),e.qZA())}function Ae(t,r){if(1&t&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.Oqu(n.refSys)}}function Ie(t,r){1&t&&(e.TgZ(0,"th",27),e._uU(1,"Libell\xe9"),e.qZA())}function Pe(t,r){if(1&t&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.Oqu(n.libelle)}}function Fe(t,r){1&t&&(e.TgZ(0,"th",27),e._uU(1,"Description"),e.qZA())}function Re(t,r){if(1&t&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.Oqu(n.description)}}function Ue(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"table",21),e.NdJ("itemSelected",function(c){e.CHM(n);const x=e.oxw(2);return e.KtG(x.itemSelected(c))}),e.ynx(1,22),e.YNc(2,ye,2,0,"th",23),e.YNc(3,Ae,2,1,"td",24),e.BQk(),e.ynx(4,25),e.YNc(5,Ie,2,0,"th",23),e.YNc(6,Pe,2,1,"td",24),e.BQk(),e.ynx(7,26),e.YNc(8,Fe,2,0,"th",23),e.YNc(9,Re,2,1,"td",24),e.BQk(),e.qZA()}if(2&t){const n=r.ngIf,a=e.oxw(2);e.Q6J("items",n)("headers",a.headerTable)("selectable",!0)}}function Le(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-crud-list",3),e.NdJ("searchButtonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.searchButtonClicked())})("refreshButtonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.refreshButtonClicked())})("pageSelected",function(c){e.CHM(n);const x=e.oxw();return e.KtG(x.pageSelected(c))})("pageSizeChange",function(c){e.CHM(n);const x=e.oxw();return e.KtG(x.pageSizeChange(c))})("closeButtonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.closeButtonClicked())}),e.TgZ(1,"div",4)(2,"div",5)(3,"div",6),e._UZ(4,"app-form-label",7),e.qZA(),e.TgZ(5,"div",8),e._UZ(6,"app-custom-textfield",9),e.qZA()()(),e.TgZ(7,"div",10)(8,"div",11)(9,"div",6),e._UZ(10,"app-form-label",12),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"app-custom-textfield",13),e.qZA()()(),e.TgZ(13,"div",14)(14,"app-custom-button",15),e.NdJ("buttonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.addButtonClicked())}),e.qZA()(),e.TgZ(15,"div",16),e._UZ(16,"app-custom-button",17),e.TgZ(17,"app-print-button",18),e.NdJ("printButtonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.printButtonClicked())}),e.qZA()(),e.TgZ(18,"div",19),e.YNc(19,Ue,10,3,"table",20),e.ALo(20,"async"),e.qZA()()}if(2&t){const n=r.ngIf,a=e.oxw();e.Q6J("itemSelected",a.isItemSelected())("pageSize",n.pageSize)("currentPage",n.page)("totalElements",n.totalElement),e.xp6(1),e.Q6J("formGroup",a.searchForm),e.xp6(6),e.Q6J("formGroup",a.searchForm),e.xp6(12),e.Q6J("ngIf",e.lcZ(20,7,a.items$))}}let Be=(()=>{class t{constructor(n,a,c,x){this.router=n,this.store=a,this.retourMaintenanceFormService=c,this.headerTable=["R\xe9f\xe9rence","Libell\xe9","Description"],this.items$=this.store.select(Te),this.page$=this.store.select(Y),this.pageSize$=this.store.select(Q),this.totalElement$=this.store.select(Ze),this.data$=(0,y.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,f.U)(([U,q,b])=>({page:U,pageSize:q,totalElement:b}))),this.selectedItem=null,this.dateTest=new Date}ngOnInit(){this.searchForm=this.retourMaintenanceFormService.createSearchForm(),this.store.dispatch(s.loadItems())}addButtonClicked(){this.router.navigate(["parc-informatique","retour-maintenance","add"])}editButtonClicked(){const n=this.selectedItem?.id;n&&(this.store.dispatch(s.resetItem()),this.router.navigate(["parc-informatique","retour-maintenance","edit",n]))}deleteButtonClicked(){const n=this.selectedItem;n&&this.store.dispatch(s.deleteItem({item:n}))}itemSelected(n){this.selectedItem=n}pageSelected(n){this.store.dispatch(s.changePage({page:n}))}pageSizeChange(n){this.store.dispatch(s.changePageSize({pageSize:n}))}closeButtonClicked(){this.router.navigate(["parc-informatique"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(s.resetSearch())}searchButtonClicked(){this.store.dispatch(s.search({searchModel:this.searchForm.value}))}printButtonClicked(){this.store.dispatch(s.downloadFile())}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(K.F0),e.Y36(o.yh),e.Y36(C),e.Y36(e.soG))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-retour-maintenance-list"]],features:[e._Bn([C,{provide:e.soG,useValue:"fr-FR"}])],decls:4,vars:3,consts:[[1,"ps-3","pb-0","mb-0"],["pathLevelOne","Mouvements Equipements","pathLevelTwo","Retours en Maintenance","pathLevelThree","Liste"],["title","Liste des Retours en Maintenance",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","Liste des Retours en Maintenance",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row","align-items-center"],[1,"text-end","me-1","width-label-search"],["title","Libell\xe9"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","libelle"],[1,"advance-search",3,"formGroup"],[1,"d-flex","flex-row","mt-2","align-items-center"],["title","Description"],["placeholder","","otherclass","item-input","formControlName","description"],[1,"primary-actions"],["icon","icon-plus btn-icon-add fw-bold","title","Effectuer Un Retour en Maintenance",1,"me-1",3,"buttonClicked"],[1,"secondary-actions","d-flex"],["customClass","btn btn-sm button-action","title","Exporter","url","export.svg",1,"me-1","ms-1"],[3,"printButtonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","R\xe9f\xe9rence"],["app-header-attribute-def-template","","class","table-align-left ps-2",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","table-align-left",4,"appCellDefTemplate"],["appCellDef","Libell\xe9"],["appCellDef","Description"],["app-header-attribute-def-template","",1,"table-align-left","ps-2"],["app-cell-def-template","",1,"table-align-left"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-custom-breadcrumb",1),e.qZA(),e.YNc(2,Le,21,9,"app-crud-list",2),e.ALo(3,"async")),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,c.data$)))},dependencies:[J.L,m.O5,d.JJ,d.JL,d.sg,d.u,Se._,z.x,j.N,W.D,X.h,V.u,ee.O,te.q,ne.W,oe.h,ie.Z,re.V,m.Ov],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}"]})}return t})();var ae=i(797),$e=i(8819),Oe=i(9543),De=i(7426),Ne=i(9887),ke=i(6219),Ke=i(2113),we=i(5973),He=i(4944),qe=i(2093),Ge=i(6136),Ye=i(8513),Qe=i(586),Je=i(1327),ze=i(5188);function je(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1,"Num\xe9ro S\xe9rie "),e.qZA())}function We(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.numeroSerie," ")}}function Xe(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1," Libell\xe9 "),e.qZA())}function Ve(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.libelle," ")}}function et(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1," Description "),e.qZA())}function tt(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.description," ")}}function nt(t,r){1&t&&(e.TgZ(0,"th",59),e._uU(1," Etat Actuel "),e.qZA())}function ot(t,r){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.etatEquipement," ")}}function it(t,r){1&t&&(e.TgZ(0,"table",52),e.ynx(1,53),e.YNc(2,je,2,0,"th",54),e.YNc(3,We,2,1,"td",55),e.BQk(),e.ynx(4,56),e.YNc(5,Xe,2,0,"th",54),e.YNc(6,Ve,2,1,"td",55),e.BQk(),e.ynx(7,57),e.YNc(8,et,2,0,"th",54),e.YNc(9,tt,2,1,"td",55),e.BQk(),e.ynx(10,58),e.YNc(11,nt,2,0,"th",54),e.YNc(12,ot,2,1,"td",55),e.BQk(),e.qZA())}function rt(t,r){if(1&t&&(e.TgZ(0,"div",49)(1,"app-item-search",50),e.YNc(2,it,13,0,"table",51),e.qZA()()),2&t){const n=r.ngIf,a=e.oxw(2);e.xp6(1),e.Q6J("headers",a.equipementSelectItemsHeader)("items",n.equipements)("criterias",a.equipementItemCritterias)("itemDescription",a.equipementItemDescription)}}function at(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Num\xe9ro S\xe9rie"),e.qZA())}function st(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.numeroSerie," ")}}function ct(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Libell\xe9"),e.qZA())}function lt(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij("",n.libelle," ")}}function pt(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Mod\xe8le"),e.qZA())}function ut(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.modelEquip.libelle," ")}}function mt(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Fabricant"),e.qZA())}function dt(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.modelEquip.makerEquip.libelle," ")}}function ht(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Groupe Equipement"),e.qZA())}function ft(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.modelEquip.categoryEquip.groupEquip.libelle," ")}}function _t(t,r){1&t&&(e.TgZ(0,"th",61),e._uU(1,"Cat\xe9gorie"),e.qZA())}function gt(t,r){if(1&t&&(e.TgZ(0,"td",62),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.hij(" ",n.modelEquip.categoryEquip.groupEquip.libelle," ")}}function bt(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"form",2)(1,"div",3)(2,"app-panel-custom",4)(3,"div",5)(4,"div",6),e._UZ(5,"app-form-label",7),e.TgZ(6,"div",8),e._UZ(7,"app-custom-textfield",9),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",10),e._UZ(10,"app-form-label",11),e.TgZ(11,"div",8),e._UZ(12,"app-custom-textfield",12),e.qZA()(),e.TgZ(13,"div",6),e._UZ(14,"app-form-label",13),e.TgZ(15,"div",14),e._UZ(16,"app-custom-textfield",12),e.qZA()()(),e.TgZ(17,"div",5)(18,"div",10),e._UZ(19,"app-form-label",15),e.TgZ(20,"div",8),e._UZ(21,"app-custom-textfield",12),e.qZA()(),e.TgZ(22,"div",6),e._UZ(23,"app-form-label",16),e.TgZ(24,"div",14),e._UZ(25,"app-custom-textfield",12),e.qZA()()()(),e.TgZ(26,"app-panel-custom",17)(27,"app-tabs",18)(28,"app-tab",19)(29,"div",20)(30,"h6",21),e._uU(31," Retour en Maintenance "),e.qZA()(),e._UZ(32,"hr",22),e.TgZ(33,"div",23)(34,"div",24)(35,"div",25),e._UZ(36,"app-form-label",26),e.TgZ(37,"div",8)(38,"app-field-error-wrapper",27),e.NdJ("resetField",function(c){e.CHM(n);const x=e.oxw();return e.KtG(x.resetBackendError(c))}),e._UZ(39,"app-custom-textfield",28),e.qZA()()()(),e.TgZ(40,"div",29)(41,"div",30),e._UZ(42,"app-form-label",31),e.TgZ(43,"div",8),e._UZ(44,"textarea",32),e.qZA()()()()(),e.TgZ(45,"app-tab",33)(46,"div",34),e.YNc(47,rt,3,4,"div",35),e.ALo(48,"async"),e.TgZ(49,"app-custom-button",36),e.NdJ("buttonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.removeEquipement())}),e.qZA()(),e.TgZ(50,"div",5)(51,"table",37),e.NdJ("itemSelected",function(c){e.CHM(n);const x=e.oxw();return e.KtG(x.itemSelected(c))}),e.ynx(52,38),e.YNc(53,at,2,0,"th",39),e.YNc(54,st,2,1,"td",40),e.BQk(),e.ynx(55,41),e.YNc(56,ct,2,0,"th",39),e.YNc(57,lt,2,1,"td",40),e.BQk(),e.ynx(58,42),e.YNc(59,pt,2,0,"th",39),e.YNc(60,ut,2,1,"td",40),e.BQk(),e.ynx(61,43),e.YNc(62,mt,2,0,"th",39),e.YNc(63,dt,2,1,"td",40),e.BQk(),e.ynx(64,44),e.YNc(65,ht,2,0,"th",39),e.YNc(66,ft,2,1,"td",40),e.BQk(),e.ynx(67,45),e.YNc(68,_t,2,0,"th",39),e.YNc(69,gt,2,1,"td",40),e.BQk(),e.qZA()()()()(),e.TgZ(70,"div",46)(71,"app-primary-button",47),e.NdJ("buttonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.submitForm())}),e.qZA(),e.TgZ(72,"app-cancel-button",48),e.NdJ("buttonClicked",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.returnToList())}),e.qZA()()()()}if(2&t){const n=e.oxw();e.Q6J("formGroup",n.form),e.xp6(7),e.Q6J("readonly",!0),e.xp6(5),e.Q6J("readonly",!0),e.xp6(4),e.Q6J("readonly",!0),e.xp6(5),e.Q6J("readonly",!0),e.xp6(4),e.Q6J("readonly",!0),e.xp6(13),e.Q6J("errors",n.errors),e.xp6(9),e.Q6J("ngIf",e.lcZ(48,12,n.formModel$)),e.xp6(2),e.Q6J("disabled",!n.isItemSelected()),e.xp6(2),e.Q6J("items",n.materiels)("headers",n.headerTable)("selectable",!0)}}let vt=(()=>{class t{constructor(n,a,c,x){this.formService=n,this.modalService=a,this.router=c,this.store=x,this.formModel$=this.store.select(G),this.errors=null,this.materiels=[],this.tempMateriels=[],this.selectedItem=null,this.action="",this.formSubmitted=new e.vpe,this.equipementSelectItemsHeader=["Num\xe9ro S\xe9rie","Libell\xe9","Description","Etat Actuel"],this.equipementItemDescription=U=>U.libelle,this.equipementItemCritterias={numeroSerie:"Num\xe9ro S\xe9rie",libelle:"Libell\xe9",description:"Description"},this.headerTable=["Num\xe9ro S\xe9rie","Libell\xe9","Mod\xe8le","Fabricant","Groupe Equipement","Cat\xe9gorie","Etat Actuel"]}ngOnInit(){this.store.dispatch(s.loadFormModel()),this.store.select(Ee).subscribe(n=>{this.errors=n}),this.store.dispatch(s.resetError()),this.form=this.formService.createForm(this.retourMaintenance),this.form.get("materiel")?.valueChanges.subscribe(n=>{n&&this.initEquipements(n)}),"edit"===this.action&&(this.materiels=this.retourMaintenance.equipements)}ngOnDestroy(){}submitForm(){if("add"===this.action){const n={...this.form.getRawValue(),equipements:this.materiels};this.formSubmitted.emit(n)}else this.formSubmitted.emit(this.form.getRawValue())}initEquipements(n){const a=[];this.materiels.length>0?(this.materiels.forEach(c=>{a.push(c)}),this.materiels=[],a.forEach(c=>{this.materiels.push(c)}),this.materiels.push(n)):(this.materiels=[],this.materiels.push(n))}removeEquipement(){null!==this.selectedItem&&(this.materiels=this.materiels.filter(n=>n.id!==this.selectedItem?.id),console.log(this.materiels))}returnToList(){this.router.navigateByUrl("parc-informatique/retour-maintenance")}resetBackendError(n){this.store.dispatch(s.resetErrorField({fieldName:n}))}itemSelected(n){this.selectedItem=n}isItemSelected(){return null!==this.selectedItem}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(C),e.Y36(ae.Z),e.Y36(K.F0),e.Y36(o.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-retour-maintenance-form"]],inputs:{action:"action",retourMaintenance:"retourMaintenance"},outputs:{formSubmitted:"formSubmitted"},features:[e._Bn([C])],decls:2,vars:1,consts:[[1,"pe-3","ps-3","pb-3","pt-0"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-main","p-2"],["icon","fa fa-angle-right","title","Historique"],[1,"general-info"],[1,"input-container","col-5"],["title","R\xe9f\xe9rence",1,"w-form","text-end"],[1,"input-textfield-container","col"],["otherclass","emphase h-form","placeholder","",3,"readonly"],[1,"input-container","col-4"],["title","Date Cr\xe9ation",1,"w-form","text-end"],["otherclass","custom-style-form","placeholder","",3,"readonly"],["title","Cr\xe9\xe9 Par",1,"col-4","text-end"],[1,"input-textfield-container","col-7"],["title","Date Derni\xe8re Modif",1,"w-form","text-end"],["title","Modifi\xe9 Par",1,"col-4","text-end"],["icon","fa fa-angle-right","background","background-style custom-padding"],["background","background-tabs"],["tabTitle","Informations g\xe9n\xe9rales"],[1,"d-flex","align-items-center",2,"margin-bottom","0px"],[1,"mb-0","pt-1","text-success","me-auto"],[1,"mt-0"],[1,"general-info","flex-column"],[1,"col-12","mb-2"],[1,"input-container","col"],["title","Libell\xe9",1,"w-form","text-end"],[3,"errors","resetField"],["otherclass","custom-style-form emphase","placeholder","","formControlName","libelle"],[1,"col-12"],[1,"input-container","col","d-flex","align-items-center"],["title","Description",1,"w-form","text-end"],["placeholder","","formControlName","description",1,"custom-style-textarea","emphase"],["tabTitle","Liste des \xe9quipements"],[1,"button-head","d-flex","ms-auto"],["class","col-auto",4,"ngIf"],["otherclass","custom-button-item-search col-auto","icon","icon-trash m-custom btn-icon-delete",3,"disabled","buttonClicked"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","Num\xe9ro S\xe9rie"],["app-header-attribute-def-template","","class","custom-head",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","custom-head",4,"appCellDefTemplate"],["appCellDef","Libell\xe9"],["appCellDef","Mod\xe8le"],["appCellDef","Fabricant"],["appCellDef","Groupe Equipement"],["appCellDef","Cat\xe9gorie"],[1,"form-actions"],["title","Enregistrer",1,"me-1",3,"buttonClicked"],["otherclass","custom-cancel-button","title","Annuler",3,"buttonClicked"],[1,"col-auto"],["otherclass","custom-button-item-search col-auto","icon","icon-plus btn-icon-add","formControlName","materiel",3,"headers","items","criterias","itemDescription"],["app-item-search-template-attribute","",4,"appItemSearchTemplate"],["app-item-search-template-attribute",""],["appItemSearchCellDef","Num\xe9ro S\xe9rie"],["app-item-search-header-def-template","","class","custom-head",4,"appItemSearchHeaderDefTemplate"],["app-item-search-cell-def-template","","class","custom-head",4,"appItemSearchCellDefTemplate"],["appItemSearchCellDef","Libell\xe9"],["appItemSearchCellDef","Description"],["appItemSearchCellDef","Etat Actuel"],["app-item-search-header-def-template","",1,"custom-head"],["app-item-search-cell-def-template","",1,"custom-head"],["app-header-attribute-def-template","",1,"custom-head"],["app-cell-def-template","",1,"custom-head"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0),e.YNc(1,bt,73,14,"form",1),e.qZA()),2&a&&(e.xp6(1),e.Q6J("ngIf",c.form))},dependencies:[m.O5,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,z.x,$e.F,j.N,W.D,X.h,V.u,ee.O,te.q,ne.W,oe.h,Oe.C,ie.Z,De.p,Ne.l,ke.n,Ke.i,we.v,He.K,qe.d,Ge.D,Ye.T,Qe.o,Je.g,ze.K,m.Ov],styles:["[_nghost-%COMP%]{font-size:12px}.general-info[_ngcontent-%COMP%]{display:flex;padding:3px 0}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.input-container[_ngcontent-%COMP%] + .input-container[_ngcontent-%COMP%]{//margin-left: 32px}.input-textfield-container[_ngcontent-%COMP%]{//width: 250px;margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}"]})}return t})(),Ct=(()=>{class t{constructor(n){this.store=n,this.formModel$=this.store.select(G),this.retourMaintenanceDto={id:"",libelle:"",description:"",materiel:null,equipements:[]}}ngOnInit(){this.store.dispatch(s.resetItem()),this.store.dispatch(s.resetFormModel())}addRetourMaintenance(n){this.store.dispatch(s.createItem({item:{equipements:n.equipements,libelle:n.libelle,description:n.description}}))}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(o.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-retour-maintenance-add"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Mouvements Equipements","pathLevelTwo","Retour en Maintenance","pathLevelThree","Ajouter"],["action","add",3,"retourMaintenance","formSubmitted"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-custom-breadcrumb",1),e.qZA(),e.TgZ(2,"app-retour-maintenance-form",2),e.NdJ("formSubmitted",function(U){return c.addRetourMaintenance(U)}),e.qZA()),2&a&&(e.xp6(2),e.Q6J("retourMaintenance",c.retourMaintenanceDto))},dependencies:[re.V,vt],styles:["[_nghost-%COMP%]{width:100%}"]})}return t})(),Mt=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-retour-maintenance-edit"]],decls:2,vars:0,template:function(a,c){1&a&&(e.TgZ(0,"p"),e._uU(1,"retour-maintenance-edit works!"),e.qZA())}})}return t})();var Tt=i(9207),g=i(6465),xt=i(2460),I=i(6328),Zt=i(9026),R=i(6306),H=i(9397),se=i(1631),T=i(6063),Et=i(9862),S=i(2096),St=i(3186),yt=i(4664),At=i(217),It=i(1946),Pt=i(9989);let ce=(()=>{class t extends Pt.v{getResourceBasePath(){return`${It.y}/retour-equipement-maintenance`}getPrintAll(){return this.http.post(`${this.url}/${this.getResourceBasePath()}/print/all`,{},{observe:"response",responseType:"blob"})}static#e=this.\u0275fac=function(){let n;return function(c){return(n||(n=e.n5z(t)))(c||t)}}();static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})();var Ft=i(6366);let Rt=(()=>{class t{constructor(n,a,c,x,U,q){this.retourMaintenanceService=n,this.authService=a,this.actions$=c,this.router=x,this.modalService=U,this.store=q,this.loadItems$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.loadItems),(0,xt.M)(this.store.select(Y),this.store.select(Q),this.store.select(xe)),(0,I.b)(([b,_,L,D])=>(console.log(_),this.store.dispatch((0,T.Q)()),(0,Zt.$)(this.retourMaintenanceService.getAllWithPagination(_,L,D),this.retourMaintenanceService.count(D)).pipe((0,f.U)(([B,Bt])=>(this.store.dispatch((0,T.Z)()),s.loadItemsSuccess({items:B,totalElement:Bt}))),(0,R.K)(B=>(this.store.dispatch((0,T.Z)()),(0,S.of)(s.setError({errors:B})))))))),{dispatch:!0}),this.createItem$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.createItem),(0,I.b)(b=>(this.store.dispatch((0,T.Q)()),this.retourMaintenanceService.add(b.item).pipe((0,H.b)(()=>{this.store.dispatch((0,T.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Retour en maintenance effectu\xe9 avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/retour-maintenance")}),(0,f.U)(_=>s.createItemSuccess({item:_})),(0,R.K)(_=>(this.store.dispatch((0,T.Z)()),(0,S.of)(s.setError({errors:_})))))))),{dispatch:!0}),this.loadItem$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.loadItem),(0,se.z)(b=>this.retourMaintenanceService.findById(b.id).pipe((0,f.U)(_=>s.loadItemSuccess({item:_})),(0,R.K)(_=>(this.store.dispatch((0,T.Z)()),(0,S.of)(s.setError({errors:_}))))))),{dispatch:!0}),this.deleteItem$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.deleteItem),(0,I.b)(b=>this.retourMaintenanceService.delete(b.item.id,b.item)),(0,H.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Retour en maintenance supprim\xe9 avec succ\xe8s"})}),(0,f.U)(()=>s.loadItems()),(0,R.K)(b=>(this.store.dispatch((0,T.Z)()),(0,S.of)(s.setError({errors:b}))))),{dispatch:!0}),this.updateItem$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.updateItem),(0,I.b)(b=>(this.store.dispatch((0,T.Q)()),this.retourMaintenanceService.update(b.id,b.item).pipe((0,H.b)(()=>{this.store.dispatch((0,T.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Retour en maintenance modifi\xe9 avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/retour-maintenance")}),(0,f.U)(_=>s.updateItemSuccess({item:_})),(0,R.K)(_=>(this.store.dispatch((0,T.Z)()),(0,S.of)(s.setError({errors:_})))))))),{dispatch:!0}),this.downloadFile$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.downloadFile),(0,se.z)(b=>(this.store.dispatch((0,T.Q)()),this.retourMaintenanceService.getPrintAll().pipe((0,f.U)(_=>{console.log(_),this.store.dispatch((0,T.Z)());let L=_.headers.get("content-disposition")?.split(";")[1].split("=")[1];return(0,At.saveAs)(_.body,L),s.loadItems()}),(0,R.K)(_=>(this.store.dispatch((0,T.Z)()),(0,S.of)(s.setError({errors:_})))))))),{dispatch:!0}),this.loadFormModel$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.loadFormModel),(0,I.b)(()=>this.retourMaintenanceService.getFormModel()),(0,f.U)(b=>s.loadFormModelSuccess({formModel:b})),(0,R.K)(b=>(0,S.of)(s.setError({errors:b}))))),this.resetSearch$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.resetSearch),(0,I.b)(()=>(0,S.of)(s.changePage({page:1}))))),this.search$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.search),(0,I.b)(()=>(0,S.of)(s.changePage({page:1}))))),this.changePage$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.changePage),(0,f.U)(b=>s.loadItems()))),this.changePageSize$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.changePageSize),(0,I.b)(()=>(0,S.of)(s.changePage({page:1}))))),this.handleError$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(s.setError),(0,yt.w)(b=>{if(this.store.dispatch((0,T.Q)()),b.errors instanceof Et.UA){if(422===b.errors.status){let _="",L=0;for(const[D,B]of Object.entries(b.errors.error))_+=0===L?B:"\n"+B,L++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:_})}if(403===b.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===b.errors.status){let _="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,T.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:_}),(0,S.of)(St.jM())}}return this.store.dispatch((0,T.Z)()),(0,S.of)({type:"noop"})})),{dispatch:!0})}static#e=this.\u0275fac=function(a){return new(a||t)(e.LFG(ce),e.LFG(Ft.e),e.LFG(g.eX),e.LFG(K.F0),e.LFG(ae.Z),e.LFG(o.yh))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})();const Ut=[{path:"",component:Be,pathMatch:"prefix"},{path:"add",component:Ct,pathMatch:"prefix"},{path:"edit/:id",component:Mt,pathMatch:"prefix"}];let Lt=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({providers:[ce],imports:[J.L,m.ez,o.Aw.forFeature("retour-maintenances",Me),g.sQ.forFeature(Rt),Tt.m,K.Bz.forChild(Ut)]})}return t})()},8819:(P,Z,i)=>{"use strict";i.d(Z,{F:()=>e});var m=i(9468);let e=(()=>{class d{constructor(){this.disabled=!1,this.buttonClicked=new m.vpe}emitButtonClicked(){this.buttonClicked.emit()}static#e=this.\u0275fac=function(f){return new(f||d)};static#t=this.\u0275cmp=m.Xpm({type:d,selectors:[["app-cancel-button"]],inputs:{title:"title",url:"url",otherclass:"otherclass",disabled:"disabled"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:5,consts:[[3,"disabled","click"]],template:function(f,o){1&f&&(m.TgZ(0,"button",0),m.NdJ("click",function(){return o.emitButtonClicked()}),m._uU(1),m.qZA()),2&f&&(m.Gre("cancel-button ",o.otherclass,""),m.Q6J("disabled",o.disabled),m.xp6(1),m.hij(" ",o.title,"\n"))},styles:[".cancel-button[_ngcontent-%COMP%]{color:#000;border:1px solid #6d7582;background-color:#fff;min-width:120px;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:25px;padding:.75rem 0rem;border-radius:3px}"]})}return d})()},3849:(P,Z,i)=>{"use strict";i.d(Z,{L:()=>y});var m=i(9468),e=i(2463),d=i(6814),C=i(166);let y=(()=>{class f{constructor(){this.printButtonClicked=new m.vpe}emitPrintButtonClicked(){this.printButtonClicked.emit()}static#e=this.\u0275fac=function(E){return new(E||f)};static#t=this.\u0275cmp=m.Xpm({type:f,selectors:[["app-print-button"]],outputs:{printButtonClicked:"printButtonClicked"},standalone:!0,features:[m.jDz],decls:1,vars:0,consts:[["customClass","btn btn-sm button-action","title","Imprimer","url","print.svg",3,"buttonClicked"]],template:function(E,l){1&E&&(m.TgZ(0,"app-custom-button",0),m.NdJ("buttonClicked",function(){return l.emitPrintButtonClicked()}),m.qZA())},dependencies:[d.ez,e.v,C.x],styles:["[_nghost-%COMP%]{display:block}"]})}return f})()},2113:(P,Z,i)=>{"use strict";i.d(Z,{i:()=>d});var m=i(9468);const e=["*"];let d=(()=>{class C{constructor(){this.tabTitle="",this.active=!1}static#e=this.\u0275fac=function(o){return new(o||C)};static#t=this.\u0275cmp=m.Xpm({type:C,selectors:[["app-tab"]],inputs:{tabTitle:"tabTitle",active:"active"},ngContentSelectors:e,decls:2,vars:1,consts:[[1,"pane",3,"hidden"]],template:function(o,u){1&o&&(m.F$t(),m.TgZ(0,"div",0),m.Hsn(1),m.qZA()),2&o&&m.Q6J("hidden",!u.active)},styles:[".pane[_ngcontent-%COMP%]{padding:1rem}"]})}return C})()},6219:(P,Z,i)=>{"use strict";i.d(Z,{n:()=>o});var m=i(2113),e=i(9468),d=i(6814);const C=function(u){return{active:u}};function y(u,E){if(1&u){const l=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){const h=e.CHM(l).$implicit,v=e.oxw();return e.KtG(v.selectTab(h))}),e._uU(1),e.qZA()}if(2&u){const l=E.$implicit;e.Q6J("ngClass",e.VKq(2,C,!0===l.active)),e.xp6(1),e.hij(" ",l.tabTitle," ")}}const f=["*"];let o=(()=>{class u{constructor(){}ngAfterContentInit(){0===this.tabs.filter(p=>p.active).length&&this.selectTab(this.tabs.first)}selectTab(l){this.tabs.toArray().forEach(p=>p.active=!1),l.active=!0}static#e=this.\u0275fac=function(p){return new(p||u)};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-tabs"]],contentQueries:function(p,M,h){if(1&p&&e.Suo(h,m.i,4),2&p){let v;e.iGM(v=e.CRH())&&(M.tabs=v)}},inputs:{background:"background"},ngContentSelectors:f,decls:5,vars:4,consts:[[1,"tabs-container"],["class","tab",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"active-tab-content"],[1,"tab",3,"ngClass","click"]],template:function(p,M){1&p&&(e.F$t(),e.TgZ(0,"div",0)(1,"ul"),e.YNc(2,y,2,4,"li",1),e.qZA(),e.TgZ(3,"div",2),e.Hsn(4),e.qZA()()),2&p&&(e.xp6(1),e.Gre("list-unstyled tab-title-container ",M.background,""),e.xp6(1),e.Q6J("ngForOf",M.tabs))},dependencies:[d.mk,d.sg],styles:['.tabs-container[_ngcontent-%COMP%]{margin:2px;border-top:0px;background-color:#fff}.tab-title-container[_ngcontent-%COMP%]{font-size:.875rem;display:flex;margin-bottom:0}.active-tab-content[_ngcontent-%COMP%]{border:1px solid #c7c5c6;border-top:0px;margin-top:0}.tab-title-container[_ngcontent-%COMP%]:after{content:"";display:inline-block;width:12px;flex-grow:1;border-bottom:1px solid #c7c5c6}.tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{padding:.25rem 1rem;text-align:center;border:0px;border-bottom:1px solid #c7c5c6;cursor:pointer}.tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{border-radius:2px;opacity:90%}.tabs-container[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #c7c5c6;border-bottom:0px;color:#69696b;font-family:aileronbold;border-top-left-radius:8px;border-top-right-radius:8px}']})}return u})()},217:function(P,Z){var i,e;void 0!==(e="function"==typeof(i=function(){"use strict";function C(l,p,M){var h=new XMLHttpRequest;h.open("GET",l),h.responseType="blob",h.onload=function(){E(h.response,p,M)},h.onerror=function(){console.error("could not download file")},h.send()}function y(l){var p=new XMLHttpRequest;p.open("HEAD",l,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function f(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(p)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,u=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),E=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(l,p,M){var h=o.URL||o.webkitURL,v=document.createElement("a");v.download=p=p||l.name||"download",v.rel="noopener","string"==typeof l?(v.href=l,v.origin===location.origin?f(v):y(v.href)?C(l,p,M):f(v,v.target="_blank")):(v.href=h.createObjectURL(l),setTimeout(function(){h.revokeObjectURL(v.href)},4e4),setTimeout(function(){f(v)},0))}:"msSaveOrOpenBlob"in navigator?function(l,p,M){if(p=p||l.name||"download","string"!=typeof l)navigator.msSaveOrOpenBlob(function d(l,p){return typeof p>"u"?p={autoBom:!1}:"object"!=typeof p&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\ufeff",l],{type:l.type}):l}(l,M),p);else if(y(l))C(l,p,M);else{var h=document.createElement("a");h.href=l,h.target="_blank",setTimeout(function(){f(h)})}}:function(l,p,M,h){if((h=h||open("","_blank"))&&(h.document.title=h.document.body.innerText="downloading..."),"string"==typeof l)return C(l,p,M);var v="application/octet-stream"===l.type,w=/constructor/i.test(o.HTMLElement)||o.safari,N=/CriOS\/[\d]+/.test(navigator.userAgent);if((N||v&&w||u)&&typeof FileReader<"u"){var $=new FileReader;$.onloadend=function(){var F=$.result;F=N?F:F.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=F:location=F,h=null},$.readAsDataURL(l)}else{var k=o.URL||o.webkitURL,O=k.createObjectURL(l);h?h.location=O:location.href=O,h=null,setTimeout(function(){k.revokeObjectURL(O)},4e4)}});o.saveAs=E.saveAs=E,P.exports=E})?i.apply(Z,[]):i)&&(P.exports=e)}}]);