---
title: "RAP - Extensibility Enabling for Base BOs"
description: |
  Syntax managed(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm)  unmanaged(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm) strict(version)(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_enabling_m_u.htm"
abapFile: "abenbdl_extensibility_enabling_m_u.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "extensibility", "enabling"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) →  [RAP - BDEF Extension, Extensibility Enabling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_enabling.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Extensibility%20Enabling%20for%20Base%20BOs%2C%20ABENBDL_EXTENSIBILITY_ENABLING_M_U%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

RAP - Extensibility Enabling for Base BOs

Syntax

[managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm) *|* [unmanaged](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm)
[strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm);
[extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm) *\[*{
  *\[*with validations on save;*\]*
  *\[*with determinations on save;*\]*
  *\[*with determinations on modify;*\]*
  *\[*with additional save;*\]*
}*\]*;
*\[*...*\]*
[define behavior for RootEntity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm)
  [extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm)
  *\[*...*\]*
{
  *\[*...*\]*
  *\[* [mapping for PartnerType corresponding extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping.htm)*\]*
  *\[*[determine action Name extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determine_action.htm) { ... }*\]*
  *\[*[draft determine action Prepare extensible { ... }](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm)*\]*
  ...
}
...

Prerequisite

To allow [BDEF extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry") to a managed or unmanaged RAP behavior definition, [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") must be switched on using the keyword [strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm).

Effect

The keyword extensible can be specified at different places to allow for extensions:

-   extensible in the [RAP behavior definition header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry")
    
    Prerequisite for extensibility. If it is not specified, extensions are not allowed. If specified, at least one [RAP BO entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") must be declared as extensible in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_properties_glosry.htm "Glossary Entry").
    
    Allows the following components to be added to a RAP BO via a BDEF extensions:
    
    -   [RAP foreign entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry")
    -   Adding a new [RAP authorization context for disable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_auth_context_glosry.htm "Glossary Entry") and extending an existing [full authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_own_ac_glosry.htm "Glossary Entry") from the extended entity.
    -   Defining behavior for an extension node by means of a [RAP extension entity behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_ext_entity_behavior_glosry.htm "Glossary Entry").
    
    In the header declaration, the following optional additions are available:
    
    -   with validations on save
    -   with determinations on save
    -   with determinations on modify
    -   with additional save
        
        These additions explicitly allow [validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_validations.htm), [determinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determinations.htm), or a [RAP additional save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_add_save_glosry.htm "Glossary Entry") in a [RAP entity behavior extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_behavior_extension_glosry.htm "Glossary Entry"). If not declared explicitly, the respective type of determination, validation, or the additional save must not be defined in an extension to an existing RAP BO entity.
        
        Note: This declaration refers only to extensions of existing RAP BO entities. In extension nodes, validations, determinations, and an additional save are always possible and no explicit permission is required.
        
-   extensible in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_properties_glosry.htm "Glossary Entry")
    
    Mandatory for each individual [RAP BO entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") that allows extensions.
    
    Allows the following behavior extensions to be added via a BDEF extension for the RAP BO entity in question:
    
    -   [RAP determinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [RAP validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_validation_glosry.htm "Glossary Entry") can be defined for the RAP BO entity in question, under the precondition that the particular kind of determination and validation is allowed in the header definition.
    -   [RAP field characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_field_char_glosry.htm "Glossary Entry") can be added to [extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_prefix_extension_glosry.htm "Glossary Entry") fields.
    -   [RAP actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry") including [RAP feature control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_feature_control_glosry.htm "Glossary Entry").
    -   [RAP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_function_glosry.htm "Glossary Entry").
    -   [RAP BO determine actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry").
    -   Behavior-enabling of [associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_glosry.htm "Glossary Entry") that have an extension node as association target.
    -   [RAP type mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry").
    -   [RAP foreign entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry").
    -   [RAP additional save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_add_save_glosry.htm "Glossary Entry").
-   extensible can be specified in different places in the [entity behavior body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_body_glosry.htm "Glossary Entry"):
    -   [mapping for PartnerType corresponding extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping.htm): a [RAP type mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") defined in the extended RAP business object can be extended with extension fields. extensible can only be used in combination with corresponding, so that components with the same name are automatically mapped to each other.
    -   [determine action Name extensible { ... }](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determine_action.htm): only allowed for [draft-enabled BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry"). Allows validations or determinations to be added to the [determine action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry") in question.
        
        Internal determine actions must not be declared as extensible.
        
    -   [draft determine action Prepare extensible { ... }](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm): only allowed for draft-enabled BOs. Allows validations or determinations to be added to the [draft determine action Prepare](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_draft_action_glosry.htm "Glossary Entry") in question.
        
        Internal draft determine actions must not be declared as extensible.
        

Example

The RAP behavior definition for DEMO\_RAP\_EXTENSIBLE enables BDEF extensions by specifying multiple extension points.

managed implementation in class bp\_demo\_rap\_extensible unique;
strict(2);
with draft;
extensible
{
  with validations on save;
  with determinations on save;
  with determinations on modify;
  with additional save;
}
define behavior for DEMO\_RAP\_EXTENSIBLE
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draf1
lock master
total etag Timestamp
authorization master ( global )
extensible
{
  create;
  update;
  delete;
  draft action Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
  field(readonly:update) KeyField;
  determination setID on save { create; }
  determine action trigger\_all extensible
  {
    determination ( always ) setID;
  }
  mapping for demo\_dbtab\_root corresponding extensible
  {
    KeyField = key\_field;
    DataField = data\_field;
    Timestamp = crea\_date\_time;
  }
}

The extension DEMO\_RAP\_EXTEND1 extends the RAP behavior definition DEMO\_RAP\_EXTENSIBLE.

extension implementation in class bp\_demo\_rap\_extend1 unique;
extend behavior for DEMO\_RAP\_EXTENSIBLE {
determination MyDet1 on save { create; update; }
extend determine action trigger\_all {determination MyDet1; }
}