  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [RAP - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) →  [RAP - Entity Projection Extension](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extension_body%2C%20Projection%20Extension%2C%20ABENBDL_PROJ_EXT_BODY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

RAP - extension\_body, Projection Extension

Syntax

...
  *\[*field characteristics*\]*;
  *\[*use*\]*;
  *\[*actions and functions*\]*;
  *\[*mapping for*\]*;
  *\[*extend mapping for*\]*;

Effect

Defines the [behavior extension body](javascript:call_link\('abenrap_behavior_ext_body_glosry.htm'\) "Glossary Entry") to extend an existing [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") in a [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

Components:

-   field characteristics:
    -   Adds [field attributes](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") to extension fields in a BDEF projection extension.
    -   Field attributes can be added only for extension fields. Extension fields are fields which are added via [RAP data model extension](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").
    -   The following field attributes are available in BDEF projection extensions for extension fields: readonly, suppress, readonly:update.
    -   These field attributes work as described in topic [Field Characteristics, Projection BDEF](javascript:call_link\('abenbdl_field_projection.htm'\)).
        
        Note: The field characteristics mandatory, modify, and features:instance are not available in [BDEF projection extensions](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry").
        
-   use:
    -   The keyword use allows the reuse of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry").
    -   The following operations can be reused: [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry"), [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), and [associations](javascript:call_link\('abenbdl_association.htm'\)).
        
        Limitation: The [operation augmentation](javascript:call_link\('abenrap_bo_augmentation_glosry.htm'\) "Glossary Entry") is not available in BDEF projection extensions. As a consequence, the following is not supported: use association \_child {create(augment);}.
        
    -   Only extension operations that were created in the same software component can be reused. Operations from the original base BDEF of type managed or unmanaged must not be reused.
    -   Actions, functions, and associations from the projection layer cannot be reused.
    -   Reuse works as described in topic [RAP BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   Actions and functions:
    -   New [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") can be defined and implemented in a BDEF projection extension.
    -   The syntax is exactly the same as for actions and functions in projection BDEFs, see topic [RAP - Actions and Functions, Projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)) with one difference: The optional addition [default](javascript:call_link\('abenbdl_action_default_factory.htm'\)) to define a factory action as default factory action is not available in BDEF projection extensions.
    -   An implementation in an extension ABP is required. The rules for extension ABPs apply, see topic [RAP - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)):
    -   [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") can be added. This type mapping can only contain extension fields. It must not contain any fields from the original BDEF. The syntax is exactly the same as for RAP BOs, see topic [RAP - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)).
-   [extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)):
    -   An existing RAP type mapping can be extended with extension fields using the syntax [extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)) as described in topic [RAP BDL - extend mapping](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)).

Executable Examples

-   [BDEF Projection Extension, Node Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\))
-   [BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\))