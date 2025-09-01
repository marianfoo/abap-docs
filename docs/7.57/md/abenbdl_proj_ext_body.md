  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) →  [CDS BDL - Entity Projection Extension](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extension_body, Projection Extension, ABENBDL_PROJ_EXT_BODY, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extension\_body, Projection Extension

Syntax

...
  *\[*field characteristics*\]*;
  *\[*use*\]*;
  *\[*actions and functions*\]*;
  *\[*mapping for*\]*;
  *\[*extend mapping for*\]*;

Effect

Defines the [behavior extension body](javascript:call_link\('abenrap_behavior_ext_body_glosry.htm'\) "Glossary Entry") to extend an existing [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") in a [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

Components:

-   field characteristics:
    -   Adds [field attributes](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") to extension fields in a BDEF projection extension.
    -   Field attributes can be added only for extension fields. Extension fields are fields which are not part of the original BO, but are added via [RAP data model extension](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").
    -   The following field attributes are available in BDEF projection extensions for extension fields: readonly, suppress, readonly:update.
    -   These field attributes work as described in topic [Field Characteristics, Projection BDEF](javascript:call_link\('abenbdl_field_projection.htm'\)).
        
        Note: The field characteristics mandatory, modify, and features:instance are not available in [BDEF projection extensions](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry").
        
-   use:
    -   The keyword use allows the reuse of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry").
    -   The following operations can be reused: [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry"), [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), and [associations](javascript:call_link\('abenbdl_association.htm'\)).
        
        Limitation: The [operation augmentation](javascript:call_link\('abenrap_bo_augmentation_glosry.htm'\) "Glossary Entry") is not available in BDEF projection extensions. As a consequence, the following is not supported: use association \_child {create(augment);}.
        
    -   Only extension operations that were created in the same software component can be reused. Operations from the original BDEF of type managed or unmanaged must not be reused.
    -   Actions, functions, and associations from the projection layer cannot be reused.
    -   Reuse works as described in topic [CDS BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   Actions and functions:
    -   New [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") can be defined and implemented in a BDEF projection extension.
    -   The syntax is exactly the same as for actions and functions in projection BDEFs, see topic [Actions and Functions, Projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).
    -   An implementation in an extension ABP is required. The rules for extension ABPs apply, see topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)):
    -   [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") can be added. This type mapping can only contain extension fields. It must not contain any fields from the original BDEF. The syntax is exactly the same as for RAP BOs, see topic [CDS BDL - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)).
-   [extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)):
    -   An existing RAP type mapping can be extended with extension fields using the syntax [extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)) as described in topic [CDS BDL - extend mapping](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)).

Executable Examples

-   [BDEF Projection Extension, Node Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\))
-   [BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\))