  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Body%2C%20ABENBDL_BODY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Entity Behavior Body

Syntax

... *{**\[*[field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm)*\]*
     *\[*[field numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_numbering.htm)*\]*
     *\[*[RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm)*\]*
     *\[*[validations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validations.htm)*\]*
     *\[*[determinations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm)*\]*
     *\[*[type mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm)*\]**}*
*|* *\[*[implementation grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_grouping.htm)*\]*
...

Effect

The [entity behavior body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_body_glosry.htm "Glossary Entry") can consist of the following elements:

-   [Field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm): additions for [fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_field_glosry.htm "Glossary Entry") of a [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") can be defined. For example, it can be defined that it is mandatory to enter a value into a field or that a field is read-only.
-   [Field numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_numbering.htm): defines managed internal numbering for a key field.
-   [RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm): [RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") implement the [RAP BO behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry").
-   [Validations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validations.htm): [validations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_validation_glosry.htm "Glossary Entry") check the consistency of a RAP business object instance.
-   [Determinations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm): [determinations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_determination_glosry.htm "Glossary Entry") calculate or determine field values at runtime.
-   [Type mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm): a type mapping is required if the field names from database tables differ from field names of the CDS data model.
-   [Implementation grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique.htm): Makes it possible to divide the implementation-relevant parts of a business object's business logic into multiple groups for behavior implementation, each with its own [implementation class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique.htm).

Continue
[RAP - field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm)
[RAP - field numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_numbering.htm)
[RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm)
[RAP - validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validations.htm)
[RAP - determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm)
[RAP - Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_event_overview.htm)
[RAP - side effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_side_effects.htm)
[RAP - Type Mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm)
[RAP - Implementation Grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_grouping.htm)