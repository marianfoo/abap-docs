  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Extension, ABENBDL_EXTEND_BEH, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Extension

Syntax

extend behavior for EntityName
*\[*[implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))*\]*
*\[*[with additional save *\[*with full data*\]*](javascript:call_link\('abenbdl_saving.htm'\))*\]*
{
    [extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\))
  *|**\[*[implementation\_grouping](javascript:call_link\('abenbdl_group_extension.htm'\))*\]*
}
...

Effect

Extends the behavior of an existing RAP BO entity.

Syntax additions and components:

-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)): specifies an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") behavior of the particular entity.
-   [with additional save *\[*with full data*\]*](javascript:call_link\('abenbdl_saving.htm'\)):
    -   Adds additional steps to the default [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").
    -   As a prerequisite, the extended BDEF must explicitly allow extensions with additional save (see topic about [extensibility enabling](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))).
    -   Possible only if the underlying BO has implementation type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
    -   The [saving options](javascript:call_link\('abenbdl_saving.htm'\)) specified in the original BO do not affect the additional save of the extension. The original BO can specify an [additional save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry"), an [unmanaged save](javascript:call_link\('abenrap_unman_save_glosry.htm'\) "Glossary Entry"), or use the default save sequence. The original saving option is applied to original behavior and the additional save specified in the extension is applied to extension behavior.
    -   In an extension, an additional save can be specified per entity in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"). Notation in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry"), like in the extended BDEF, is not allowed.
    -   The implementation takes place in the [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) method of the [RAP saver class](javascript:call_link\('abenabp_saver_class.htm'\)) in the respective extension [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method parameters of this save\_modified method are typed according to the particular BDEF extension that enables the additional save. In other words, the ABP reflects exactly the BDEF components of the BDEF it belongs to and not the entire RAP BO. Furthermore, the rules for [extension ABPs](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)) apply. Data is passed to the save\_modified method. It works as described in topic [CDS BDL - Saving Options](javascript:call_link\('abenbdl_saving.htm'\)). If this addition is specified either in the original RAP BO or in an extension, then it is enabled each time an additional save is implemented. Multiple extensions may exist and all of them may specify an additional save, but only one of them may specify with full data. In this case, full instance data is passed each time the save\_modified method is called, even for extensions which do not specify this addition.
    -   The addition with additional save *\[*with full data*\]* in a BDEF extension works as described in topic [CDS BDL - Saving Options](javascript:call_link\('abenbdl_saving.htm'\)).
-   [extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\)): extends the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry").
-   [implementation\_grouping](javascript:call_link\('abenbdl_group_extension.htm'\)): divides the implementation-relevant parts of an extended RAP BO's business logic into multiple groups for behavior implementation, each with its own [implementation class](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Continue
[CDS BDL - extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\))
[CDS BDL - Implementation Grouping, Extension](javascript:call_link\('abenbdl_group_extension.htm'\))