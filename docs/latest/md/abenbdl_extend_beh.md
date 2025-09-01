  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Extension%2C%20ABENBDL_EXTEND_BEH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Entity Behavior Extension

Syntax

extend behavior for EntityName
*\[*[implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm)*\]*
*\[*[with additional save *\[*with full data*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm)*\]*
{
    [extension\_body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_entity_beh_extension.htm)
  *|**\[*[implementation\_grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_group_extension.htm)*\]*
}
...

Effect

Extends the behavior of an existing RAP BO entity.

Syntax additions and components:

-   [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm): specifies an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") for the [extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_prefix_extension_glosry.htm "Glossary Entry") behavior of the particular entity.
-   [with additional save *\[*with full data*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm):
    -   Adds additional steps to the default [save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry").
    -   As a prerequisite, the extended BDEF must explicitly allow extensions with additional save (see topic [RAP - Extensibility Enabling for Base BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm)).
    -   Possible only if the underlying BO has implementation type [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").
    -   The [saving options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm) specified in the original BO do not affect the additional save of the extension. The original BO can specify an [additional save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_add_save_glosry.htm "Glossary Entry"), an [unmanaged save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_unman_save_glosry.htm "Glossary Entry"), or use the default save sequence. The original saving option is applied to original behavior and the additional save specified in the extension is applied to extension behavior.
    -   In an extension, an additional save can be specified per entity in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_properties_glosry.htm "Glossary Entry"). Notation in the [behavior definition header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef_header_glosry.htm "Glossary Entry"), like in the extended BDEF, is not allowed.
    -   The implementation takes place in the [save\_modified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_saver_meth_save_modified.htm) method of the [RAP saver class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class.htm) in the respective extension [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method parameters of this save\_modified method are typed according to the particular BDEF extension that enables the additional save. In other words, the ABP reflects exactly the BDEF components of the BDEF it belongs to and not the entire RAP BO. Furthermore, the rules for [extension ABPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm) apply. Data is passed to the save\_modified method. It works as described in topic [RAP BDL - Saving Options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm). If this addition is specified either in the original RAP BO or in an extension, then it is enabled each time an additional save is implemented. Multiple extensions may exist and all of them may specify an additional save, but only one of them may specify with full data. In this case, full instance data is passed each time the save\_modified method is called, even for extensions which do not specify this addition.
    -   The addition with additional save *\[*with full data*\]* in a BDEF extension works as described in topic [RAP BDL - Saving Options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm).
-   [extension\_body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_entity_beh_extension.htm): extends the [entity behavior body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_body_glosry.htm "Glossary Entry").
-   [implementation\_grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_group_extension.htm): divides the implementation-relevant parts of an extended RAP BO's business logic into multiple groups for behavior implementation, each with its own [implementation class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm).

Continue
[RAP - extension\_body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_entity_beh_extension.htm)
[RAP - Implementation Grouping, Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_group_extension.htm)