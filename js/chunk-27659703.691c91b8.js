(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27659703"],{"2c5b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"页面设置",width:e.isMobile()?"100%":"480",placement:"right",closable:"",destroyOnClose:"",visible:e.visible,afterVisibleChange:e.handleAfterVisibleChanged},on:{close:e.onClose}},[a("div",{staticClass:"post-setting-drawer-content"},[a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"post-setting-drawer-title"},[e._v("基本设置")]),a("div",{staticClass:"post-setting-drawer-item"},[a("a-form",{attrs:{layout:"vertical"}},[e.needTitle?a("a-form-item",{attrs:{label:"页面标题："}},[a("a-input",{model:{value:e.selectedSheet.title,callback:function(t){e.$set(e.selectedSheet,"title",t)},expression:"selectedSheet.title"}})],1):e._e(),a("a-form-item",{attrs:{label:"页面别名：",help:e.fullPath}},[a("a-input",{model:{value:e.selectedSheet.slug,callback:function(t){e.$set(e.selectedSheet,"slug",t)},expression:"selectedSheet.slug"}})],1),a("a-form-item",{attrs:{label:"发表时间："}},[a("a-date-picker",{attrs:{showTime:"",defaultValue:e.pickerDefaultValue,format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择页面发表时间"},on:{change:e.onSheetDateChange,ok:e.onSheetDateOk}})],1),a("a-form-item",{attrs:{label:"开启评论："}},[a("a-radio-group",{attrs:{defaultValue:!1},model:{value:e.selectedSheet.disallowComment,callback:function(t){e.$set(e.selectedSheet,"disallowComment",t)},expression:"selectedSheet.disallowComment"}},[a("a-radio",{attrs:{value:!1}},[e._v("开启")]),a("a-radio",{attrs:{value:!0}},[e._v("关闭")])],1)],1),e.customTpls.length>0?a("a-form-item",{attrs:{label:"自定义模板："}},[a("a-select",{attrs:{loading:e.customTplsLoading},model:{value:e.selectedSheet.template,callback:function(t){e.$set(e.selectedSheet,"template",t)},expression:"selectedSheet.template"}},[a("a-select-option",{key:"",attrs:{value:""}},[e._v("无")]),e._l(e.customTpls,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1):e._e()],1)],1)]),a("a-divider"),a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"post-setting-drawer-title"},[e._v("摘要")]),a("div",{staticClass:"post-setting-drawer-item"},[a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",[a("a-input",{attrs:{type:"textarea",autoSize:{minRows:5},placeholder:"不填写则会自动生成"},model:{value:e.selectedSheet.summary,callback:function(t){e.$set(e.selectedSheet,"summary",t)},expression:"selectedSheet.summary"}})],1)],1)],1)]),a("a-divider"),a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"post-setting-drawer-title"},[e._v("封面图")]),a("div",{staticClass:"post-setting-drawer-item"},[a("div",{staticClass:"sheet-thumb"},[a("img",{staticClass:"img",attrs:{src:e.selectedSheet.thumbnail||"/images/placeholder.jpg"},on:{click:function(t){e.thumbDrawerVisible=!0}}}),a("a-form",{attrs:{layout:"vertial"}},[a("a-form-item",[a("a-input",{attrs:{placeholder:"点击封面图选择图片，或者输入外部链接"},model:{value:e.selectedSheet.thumbnail,callback:function(t){e.$set(e.selectedSheet,"thumbnail",t)},expression:"selectedSheet.thumbnail"}})],1)],1),a("a-button",{staticClass:"sheet-thumb-remove",attrs:{type:"dashed"},on:{click:function(t){e.selectedSheet.thumbnail=null}}},[e._v("移除")])],1)])]),a("a-divider",{staticClass:"divider-transparent"})],1),a("AttachmentSelectDrawer",{attrs:{drawerWidth:480},on:{listenToSelect:e.handleSelectSheetThumb},model:{value:e.thumbDrawerVisible,callback:function(t){e.thumbDrawerVisible=t},expression:"thumbDrawerVisible"}}),a("a-drawer",{attrs:{title:"高级设置",width:e.isMobile()?"100%":"480",placement:"right",closable:"",destroyOnClose:"",visible:e.advancedVisible},on:{close:function(t){e.advancedVisible=!1}}},[a("div",{staticClass:"post-setting-drawer-content"},[a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"post-setting-drawer-title"},[e._v("SEO 设置")]),a("div",{staticClass:"post-setting-drawer-item"},[a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{label:"自定义关键词："}},[a("a-input",{attrs:{placeholder:"多个关键词以英文逗号隔开"},model:{value:e.selectedSheet.metaKeywords,callback:function(t){e.$set(e.selectedSheet,"metaKeywords",t)},expression:"selectedSheet.metaKeywords"}})],1),a("a-form-item",{attrs:{label:"自定义描述："}},[a("a-input",{attrs:{type:"textarea",autoSize:{minRows:5},placeholder:"如不填写，会从页面中自动截取"},model:{value:e.selectedSheet.metaDescription,callback:function(t){e.$set(e.selectedSheet,"metaDescription",t)},expression:"selectedSheet.metaDescription"}})],1)],1)],1)]),a("a-divider"),a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"post-setting-drawer-title"},[e._v("元数据")]),a("a-form",{attrs:{layout:"vertical"}},[e._l(e.selectedMetas,(function(t,s){return a("a-form-item",{key:s,attrs:{prop:"meta."+s+".value"}},[a("a-row",{attrs:{gutter:5}},[a("a-col",{attrs:{span:12}},[a("a-input",{model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"meta.key"}},[a("i",{attrs:{slot:"addonBefore"},slot:"addonBefore"},[e._v("K")])])],1),a("a-col",{attrs:{span:12}},[a("a-input",{model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"meta.value"}},[a("i",{attrs:{slot:"addonBefore"},slot:"addonBefore"},[e._v("V")]),a("a",{attrs:{slot:"addonAfter",href:"javascript:void(0);"},on:{click:function(a){return a.preventDefault(),e.handleRemoveSheetMeta(t)}},slot:"addonAfter"},[a("a-icon",{attrs:{type:"close"}})],1)])],1)],1)],1)})),a("a-form-item",[a("a-button",{attrs:{type:"dashed"},on:{click:function(t){return e.handleInsertSheetMeta()}}},[e._v("新增")])],1)],2)],1),a("a-divider",{staticClass:"divider-transparent"})],1),a("div",{staticClass:"bottom-control"},[a("a-space",[a("a-button",{attrs:{type:"primary"},on:{click:function(t){e.advancedVisible=!1}}},[e._v("返回")])],1)],1)]),a("div",{staticClass:"bottom-control"},[a("a-space",[a("a-button",{attrs:{type:"dashed"},on:{click:function(t){e.advancedVisible=!0}}},[e._v("高级")]),e.saveDraftButton?a("ReactiveButton",{attrs:{type:"danger",loading:e.draftSaving,errored:e.draftSavedErrored,text:"保存草稿",loadedText:"保存成功",erroredText:"保存失败"},on:{click:e.handleDraftClick,callback:e.handleSavedCallback}}):e._e(),a("ReactiveButton",{attrs:{loading:e.saving,errored:e.savedErrored,text:e.selectedSheet.id?"保存":"发布",loadedText:(e.selectedSheet.id?"保存":"发布")+"成功",erroredText:(e.selectedSheet.id?"保存":"发布")+"失败"},on:{click:function(t){return e.handlePublishClick()},callback:e.handleSavedCallback}})],1)],1)],1)},n=[],i=(a("7ad2"),a("0277"),a("7c02"),a("3598")),r=a("1a86"),o=a("9158"),l=a("6c71"),c=a("8613"),d=a.n(c),h=a("12de"),u=a("ed66");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={name:"SheetSettingDrawer",mixins:[r["a"],r["b"]],data:function(){return{thumbDrawerVisible:!1,advancedVisible:!1,customTplsLoading:!1,selectedSheet:this.sheet,customTpls:[],saving:!1,savedErrored:!1,draftSaving:!1,draftSavedErrored:!1}},props:{sheet:{type:Object,required:!0},metas:{type:Array,required:!0},needTitle:{type:Boolean,required:!1,default:!1},saveDraftButton:{type:Boolean,required:!1,default:!0},visible:{type:Boolean,required:!1,default:!0}},watch:{sheet:function(e){this.selectedSheet=e},selectedSheet:function(e){this.$emit("onRefreshSheet",e)},selectedMetas:function(e){this.$emit("onRefreshSheetMetas",e)}},computed:S(S({},Object(l["c"])(["options"])),{},{selectedMetas:function(){return this.metas},pickerDefaultValue:function(){if(this.selectedSheet.createTime){var e=new Date(this.selectedSheet.createTime);return Object(o["a"])(e,"YYYY-MM-DD HH:mm:ss")}return Object(o["a"])(new Date,"YYYY-MM-DD HH:mm:ss")},fullPath:function(){var e=this.options.sheet_permalink_type,t=this.options.blog_url,a=this.options.sheet_prefix,s=this.options.path_suffix?this.options.path_suffix:"";switch(e){case"SECONDARY":return"".concat(t,"/").concat(a,"/").concat(this.selectedSheet.slug?this.selectedSheet.slug:"{slug}").concat(s);case"ROOT":return"".concat(t,"/").concat(this.selectedSheet.slug?this.selectedSheet.slug:"{slug}").concat(s);default:return""}}}),methods:{handleAfterVisibleChanged:function(e){e&&(this.handleListCustomTpls(),this.handleListPresetMetasField(),this.handleSetPinyinSlug())},handleListPresetMetasField:function(){var e=this;this.metas.length<=0&&h["a"].getActivatedTheme().then((function(t){var a=t.data.data.sheetMetaField;if(a&&a.length>0)for(var s=0,n=a.length;s<n;s++)e.selectedMetas.push({value:"",key:a[s]})}))},handleListCustomTpls:function(){var e=this;this.customTplsLoading=!0,h["a"].customSheetTpls().then((function(t){e.customTpls=t.data.data})).finally((function(){setTimeout((function(){e.customTplsLoading=!1}),200)}))},handleSelectSheetThumb:function(e){this.selectedSheet.thumbnail=encodeURI(e.path),this.thumbDrawerVisible=!1},handlePublishClick:function(){this.selectedSheet.status="PUBLISHED",this.createOrUpdateSheet()},handleDraftClick:function(){this.selectedSheet.status="DRAFT",this.createOrUpdateSheet()},createOrUpdateSheet:function(){var e=this;this.selectedSheet.title?(this.selectedSheet.metas=this.selectedMetas,"DRAFT"===this.selectedSheet.status?this.draftSaving=!0:this.saving=!0,this.selectedSheet.id?u["a"].update(this.selectedSheet.id,this.selectedSheet,!1).catch((function(){"DRAFT"===e.selectedSheet.status?e.draftSavedErrored=!0:e.savedErrored=!0})).finally((function(){setTimeout((function(){e.saving=!1,e.draftSaving=!1}),400)})):u["a"].create(this.selectedSheet,!1).catch((function(){"DRAFT"===e.selectedSheet.status?e.draftSavedErrored=!0:e.savedErrored=!0})).then((function(t){e.selectedSheet=t.data.data})).finally((function(){setTimeout((function(){e.saving=!1,e.draftSaving=!1}),400)}))):this.$notification["error"]({message:"提示",description:"页面标题不能为空！"})},handleSavedCallback:function(){this.draftSavedErrored||this.savedErrored?(this.draftSavedErrored=!1,this.savedErrored=!1):(this.$emit("onSaved",!0),this.$router.push({name:"SheetList",query:{activeKey:"custom"}}))},onClose:function(){this.$emit("close",!1)},onSheetDateChange:function(e){this.selectedSheet.createTime=e.valueOf()},onSheetDateOk:function(e){this.selectedSheet.createTime=e.valueOf()},handleRemoveSheetMeta:function(e){var t=this.selectedMetas.indexOf(e);-1!==t&&this.selectedMetas.splice(t,1)},handleInsertSheetMeta:function(){this.selectedMetas.push({value:"",key:""})},handleSetPinyinSlug:function(){if(this.selectedSheet.title&&!this.selectedSheet.id&&d.a.isSupported()){var e,t="",a=d.a.parse(this.selectedSheet.title);a.forEach((function(a){if(2===a.type){var s=a.target?a.target.toLowerCase():"";t+=t&&!/\n|\s/.test(e.target)?"-"+s:s}else t+=(e&&2===e.type?"-":"")+a.target;e=a})),this.$set(this.selectedSheet,"slug",t)}}}},v=m,p=a("bdd7"),g=Object(p["a"])(v,s,n,!1,null,null,null);t["a"]=g.exports},ed66:function(e,t,a){"use strict";var s=a("9efd"),n="/api/admin/sheets",i={list:function(e){return Object(s["a"])({url:n,params:e,method:"get"})},listIndependent:function(){return Object(s["a"])({url:"".concat(n,"/independent"),method:"get"})},get:function(e){return Object(s["a"])({url:"".concat(n,"/").concat(e),method:"get"})},create:function(e,t){return Object(s["a"])({url:n,method:"post",data:e,params:{autoSave:t}})},update:function(e,t,a){return Object(s["a"])({url:"".concat(n,"/").concat(e),method:"put",data:t,params:{autoSave:a}})},updateDraft:function(e,t){return Object(s["a"])({url:"".concat(n,"/").concat(e,"/status/draft/content"),method:"put",data:{content:t}})},updateStatus:function(e,t){return Object(s["a"])({url:"".concat(n,"/").concat(e,"/").concat(t),method:"put"})},delete:function(e){return Object(s["a"])({url:"".concat(n,"/").concat(e),method:"delete"})},preview:function(e){return Object(s["a"])({url:"".concat(n,"/preview/").concat(e),method:"get"})},sheetStatus:{PUBLISHED:{color:"green",status:"success",text:"已发布"},DRAFT:{color:"yellow",status:"warning",text:"草稿"},RECYCLE:{color:"red",status:"error",text:"回收站"}},permalinkType:{SECONDARY:{type:"SECONDARY",text:"二级路径"},ROOT:{type:"ROOT",text:"根路径"}}};t["a"]=i},f585:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",{attrs:{title:e.sheetToStage.title?e.sheetToStage.title:"新页面",affix:""}},[a("template",{slot:"extra"},[a("a-space",[a("ReactiveButton",{attrs:{errored:e.draftSavedErrored,loading:e.draftSaving,erroredText:"保存失败",loadedText:"保存成功",text:"保存草稿",type:"danger"},on:{callback:function(t){e.draftSavedErrored=!1},click:function(t){return e.handleSaveDraft(!1)}}}),a("a-button",{attrs:{loading:e.previewSaving},on:{click:e.handlePreview}},[e._v("预览")]),a("a-button",{attrs:{type:"primary"},on:{click:function(t){e.sheetSettingVisible=!0}}},[e._v("发布")]),a("a-button",{attrs:{type:"dashed"},on:{click:function(t){e.attachmentDrawerVisible=!0}}},[e._v("附件库")])],1)],1),a("a-row",{attrs:{gutter:12}},[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"mb-4"},[a("a-input",{attrs:{placeholder:"请输入页面标题",size:"large"},model:{value:e.sheetToStage.title,callback:function(t){e.$set(e.sheetToStage,"title",t)},expression:"sheetToStage.title"}})],1),a("div",{style:{height:e.editorHeight},attrs:{id:"editor"}},[a("MarkdownEditor",{attrs:{originalContent:e.sheetToStage.originalContent},on:{onContentChange:e.onContentChange,onSaveDraft:function(t){return e.handleSaveDraft(!0)}}})],1)])],1),a("SheetSettingDrawer",{attrs:{metas:e.selectedMetas,sheet:e.sheetToStage,visible:e.sheetSettingVisible},on:{close:function(t){e.sheetSettingVisible=!1},onRefreshSheet:e.onRefreshSheetFromSetting,onRefreshSheetMetas:e.onRefreshSheetMetasFromSetting,onSaved:e.handleRestoreSavedStatus}}),a("AttachmentDrawer",{model:{value:e.attachmentDrawerVisible,callback:function(t){e.attachmentDrawerVisible=t},expression:"attachmentDrawerVisible"}})],2)},n=[],i=a("1a86"),r=a("9158"),o=a("680a"),l=a("2c5b"),c=a("ed4e"),d=a("cd9f"),h=a("ed66"),u={components:{PageView:o["c"],AttachmentDrawer:c["a"],SheetSettingDrawer:l["a"],MarkdownEditor:d["a"]},mixins:[i["a"],i["b"],i["c"]],data:function(){return{attachmentDrawerVisible:!1,sheetSettingVisible:!1,sheetToStage:{},selectedMetas:[],contentChanges:0,draftSaving:!1,draftSavederrored:!1,previewSaving:!1}},beforeRouteEnter:function(e,t,a){var s=e.query.sheetId;a((function(e){s&&h["a"].get(s).then((function(t){var a=t.data.data;e.sheetToStage=a,e.selectedMetas=a.metas}))}))},destroyed:function(){this.sheetSettingVisible&&(this.sheetSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),window.onbeforeunload&&(window.onbeforeunload=null)},beforeRouteLeave:function(e,t,a){var s=this.$createElement;this.sheetSettingVisible&&(this.sheetSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),this.contentChanges<=1?a():this.$confirm({title:"当前页面数据未保存，确定要离开吗？",content:function(){return s("div",{style:"color:red;"},["如果离开当面页面，你的数据很可能会丢失！"])},onOk:function(){a()},onCancel:function(){a(!1)}})},mounted:function(){window.onbeforeunload=function(e){return e=e||window.event,e&&(e.returnValue="当前页面数据未保存，确定要离开吗？"),"当前页面数据未保存，确定要离开吗？"}},methods:{handleSaveDraft:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$log.debug("Draft only: "+t),this.sheetToStage.status="DRAFT",this.sheetToStage.title||(this.sheetToStage.title=Object(r["a"])(new Date,"YYYY-MM-DD-HH-mm-ss")),this.draftSaving=!0,this.sheetToStage.id?t?h["a"].updateDraft(this.sheetToStage.id,this.sheetToStage.originalContent).then((function(){e.handleRestoreSavedStatus()})).catch((function(){e.draftSavedErrored=!0})).finally((function(){setTimeout((function(){e.draftSaving=!1}),400)})):h["a"].update(this.sheetToStage.id,this.sheetToStage,!1).then((function(t){e.sheetToStage=t.data.data,e.handleRestoreSavedStatus()})).catch((function(){e.draftSavedErrored=!0})).finally((function(){setTimeout((function(){e.draftSaving=!1}),400)})):h["a"].create(this.sheetToStage,!1).then((function(t){e.sheetToStage=t.data.data,e.handleRestoreSavedStatus()})).catch((function(){e.draftSavedErrored=!0})).finally((function(){setTimeout((function(){e.draftSaving=!1}),400)}))},handlePreview:function(){var e=this;this.sheetToStage.status="DRAFT",this.sheetToStage.title||(this.sheetToStage.title=Object(r["a"])(new Date,"YYYY-MM-DD-HH-mm-ss")),this.previewSaving=!0,this.sheetToStage.id?h["a"].update(this.sheetToStage.id,this.sheetToStage,!1).then((function(t){e.$log.debug("Updated sheet",t.data.data),h["a"].preview(e.sheetToStage.id).then((function(t){window.open(t.data,"_blank"),e.handleRestoreSavedStatus()})).finally((function(){setTimeout((function(){e.previewSaving=!1}),400)}))})):h["a"].create(this.sheetToStage,!1).then((function(t){e.$log.debug("Created sheet",t.data.data),e.sheetToStage=t.data.data,h["a"].preview(e.sheetToStage.id).then((function(t){window.open(t.data,"_blank"),e.handleRestoreSavedStatus()})).finally((function(){setTimeout((function(){e.previewSaving=!1}),400)}))}))},handleRestoreSavedStatus:function(){this.contentChanges=0},onContentChange:function(e){this.contentChanges++,this.sheetToStage.originalContent=e},onRefreshSheetFromSetting:function(e){this.sheetToStage=e},onRefreshSheetMetasFromSetting:function(e){this.selectedMetas=e}}},f=u,S=a("bdd7"),m=Object(S["a"])(f,s,n,!1,null,null,null);t["default"]=m.exports}}]);