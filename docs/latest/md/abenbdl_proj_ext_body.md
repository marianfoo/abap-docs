  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - BDEF Projection Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_projection.htm) →  [RAP - extension for projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_projection.htm) →  [RAP - Entity Projection Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extend_beh_proj.htm) → 

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

Defines the [behavior extension body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_behavior_ext_body_glosry.htm "Glossary Entry") to extend an existing [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") in a [RAP projection behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Components:

-   field characteristics:
    -   Adds [field attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_field_char_glosry.htm "Glossary Entry") to extension fields in a BDEF projection extension.
    -   Field attributes can be added only for extension fields. Extension fields are fields which are added via [RAP data model extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_data_model_ext_glosry.htm "Glossary Entry").
    -   The following field attributes are available in BDEF projection extensions for extension fields: readonly, suppress, readonly:update.
    -   These field attributes work as described in topic [Field Characteristics, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_projection.htm).
        
        Note: The field characteristics mandatory, modify, and features:instance are not available in [BDEF projection extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry").
        
-   use:
    -   The keyword use allows the reuse of [RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry").
    -   The following operations can be reused: [RAP actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry"), [RAP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry"), and [associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association.htm).
        
        Limitation: The [operation augmentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_augmentation_glosry.htm "Glossary Entry") is not available in BDEF projection extensions. As a consequence, the following is not supported: use association \_child {create(augment);}.
        
    -   Only extension operations that were created in the same software component can be reused. Operations from the original base BDEF of type managed or unmanaged must not be reused.
    -   Actions, functions, and associations from the projection layer cannot be reused.
    -   Reuse works as described in topic [RAP BDL - use](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm).
-   Actions and functions:
    -   New [RAP actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") and [RAP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry") can be defined and implemented in a BDEF projection extension.
    -   The syntax is exactly the same as for actions and functions in projection BDEFs, see topic [RAP - Actions and Functions, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard_projection.htm) with one difference: The optional addition [default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_default_factory.htm) to define a factory action as default factory action is not available in BDEF projection extensions.
    -   An implementation in an extension ABP is required. The rules for extension ABPs apply, see topic [RAP - implementation in class unique, Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm).
-   [mapping for](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm):
    -   [RAP type mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") can be added. This type mapping can only contain extension fields. It must not contain any fields from the original BDEF. The syntax is exactly the same as for RAP BOs, see topic [RAP - Type Mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm).
-   [extend mapping for](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping_ext.htm):
    -   An existing RAP type mapping can be extended with extension fields using the syntax [extend mapping for](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping_ext.htm) as described in topic [RAP BDL - extend mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping_ext.htm).

Executable Examples

-   [BDEF Projection Extension, Node Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_entity_proj_ext_abexa.htm)
-   [BDEF Projection Extension, Field Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_entity_proj_ext_1_abexa.htm)