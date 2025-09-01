  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) → 

CDS BDL - entity behavior body

Syntax

... *{**\[*[field characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_char.htm)*\]*
     *\[*[field numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_numbering.htm)*\]*
     *\[*[RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm)*\]*
     *\[*[validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm)*\]*
     *\[*[determinations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm)*\]*
     *\[*[type mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm)*\]**}*
*|* *\[*[implementation grouping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm)*\]*
...

Effect

The [entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_body_glosry.htm "Glossary Entry") can consist of the following elements:

-   [Field characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_char.htm): additions for [fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_field_glosry.htm "Glossary Entry") of a [RAP BO entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") can be defined. For example, it can be defined that it is mandatory to enter a value into a field or that a field is read-only.
-   [Field numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_numbering.htm): defines managed internal numbering for a key field.
-   [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm): [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") implement the [RAP BO behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry").
-   [Validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm): [validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_validation_glosry.htm "Glossary Entry") check the consistency of a RAP business object instance.
-   [Determinations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm): [determinations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_determination_glosry.htm "Glossary Entry") calculate or determine field values at runtime.
-   [Type mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm): a type mapping is required if the field names from database tables differ from field names of the CDS data model.
-   [Implementation grouping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm): Makes it possible to divide the implementation-relevant parts of a business object's business logic into multiple groups for behavior implementation, each with its own [implementation class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm).

Continue
[CDS BDL - field characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_char.htm)
[CDS BDL - field numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_numbering.htm)
[CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm)
[CDS BDL - validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm)
[CDS BDL - determinations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm)
[CDS BDL - type mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm)
[CDS BDL - implementation grouping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_grouping.htm)