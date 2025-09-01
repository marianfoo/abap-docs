  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - BDEF Extension, Extensibility Enabling](javascript:call_link\('abenbdl_extensibility_enabling.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Extensibility%20Enabling%20for%20Base%20BOs%2C%20ABENBDL_EXTENSIBILITY_ENABLING_M_U%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

RAP - Extensibility Enabling for Base BOs

Syntax

[managed](javascript:call_link\('abenbdl_impl_type.htm'\)) *|* [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\))
[strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\));
[extensible](javascript:call_link\('abenbdl_extensible.htm'\)) *\[*{
  *\[*with validations on save;*\]*
  *\[*with determinations on save;*\]*
  *\[*with determinations on modify;*\]*
  *\[*with additional save;*\]*
}*\]*;
*\[*...*\]*
[define behavior for RootEntity](javascript:call_link\('abenbdl_define_beh.htm'\))
  [extensible](javascript:call_link\('abenbdl_extensible.htm'\))
  *\[*...*\]*
{
  *\[*...*\]*
  *\[* [mapping for PartnerType corresponding extensible](javascript:call_link\('abenbdl_type_mapping.htm'\))*\]*
  *\[*[determine action Name extensible](javascript:call_link\('abenbdl_determine_action.htm'\)) { ... }*\]*
  *\[*[draft determine action Prepare extensible { ... }](javascript:call_link\('abenbdl_draft_action.htm'\))*\]*
  ...
}
...

Prerequisite

To allow [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") to a managed or unmanaged RAP behavior definition, [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") must be switched on using the keyword [strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\)).

Effect

The keyword extensible can be specified at different places to allow for extensions:

-   extensible in the [RAP behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry")
    
    Prerequisite for extensibility. If it is not specified, extensions are not allowed. If specified, at least one [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") must be declared as extensible in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry").
    
    Allows the following components to be added to a RAP BO via a BDEF extensions:
    
    -   [RAP foreign entity](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry")
    -   Adding a new [RAP authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") and extending an existing [full authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") from the extended entity.
    -   Defining behavior for an extension node by means of a [RAP extension entity behavior](javascript:call_link\('abenrap_ext_entity_behavior_glosry.htm'\) "Glossary Entry").
    
    In the header declaration, the following optional additions are available:
    
    -   with validations on save
    -   with determinations on save
    -   with determinations on modify
    -   with additional save
        
        These additions explicitly allow [validations](javascript:call_link\('abenbdl_validations.htm'\)), [determinations](javascript:call_link\('abenbdl_determinations.htm'\)), or a [RAP additional save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry") in a [RAP entity behavior extension](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry"). If not declared explicitly, the respective type of determination, validation, or the additional save must not be defined in an extension to an existing RAP BO entity.
        
        Note: This declaration refers only to extensions of existing RAP BO entities. In extension nodes, validations, determinations, and an additional save are always possible and no explicit permission is required.
        
-   extensible in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry")
    
    Mandatory for each individual [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that allows extensions.
    
    Allows the following behavior extensions to be added via a BDEF extension for the RAP BO entity in question:
    
    -   [RAP determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [RAP validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") can be defined for the RAP BO entity in question, under the precondition that the particular kind of determination and validation is allowed in the header definition.
    -   [RAP field characteristics](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") can be added to [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") fields.
    -   [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") including [RAP feature control](javascript:call_link\('abenrap_feature_control_glosry.htm'\) "Glossary Entry").
    -   [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry").
    -   [RAP BO determine actions](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").
    -   Behavior-enabling of [associations](javascript:call_link\('abenassociation_glosry.htm'\) "Glossary Entry") that have an extension node as association target.
    -   [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry").
    -   [RAP foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry").
    -   [RAP additional save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry").
-   extensible can be specified in different places in the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry"):
    -   [mapping for PartnerType corresponding extensible](javascript:call_link\('abenbdl_type_mapping.htm'\)): a [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") defined in the extended RAP business object can be extended with extension fields. extensible can only be used in combination with corresponding, so that components with the same name are automatically mapped to each other.
    -   [determine action Name extensible { ... }](javascript:call_link\('abenbdl_determine_action.htm'\)): only allowed for [draft-enabled BOs](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry"). Allows validations or determinations to be added to the [determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry") in question.
        
        Internal determine actions must not be declared as extensible.
        
    -   [draft determine action Prepare extensible { ... }](javascript:call_link\('abenbdl_draft_action.htm'\)): only allowed for draft-enabled BOs. Allows validations or determinations to be added to the [draft determine action Prepare](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") in question.
        
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