---
title: "CDS BDL - field characteristics"
description: |
  Syntax ... field(readonly) Field1, Field2, ...;  (mandatory) Field1, Field2, ...;  (features:instance) Field1, Field2, ...;  (mandatory:create) Field1, Field2, ...;  (readonly:update) Field1, Field2, ...; Variants: 1. ... field(readonly) Field1, Field2, ...(#!ABAP_VARIANT_1@1@) 2. .
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_char.htm"
abapFile: "abenbdl_field_char.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "abenbdl", "field", "char"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) → 

CDS BDL - field characteristics

Syntax

... field(readonly) Field1, Field2, ...;
       *|* (mandatory) Field1, Field2, ...;
       *|* (features:instance) Field1, Field2, ...;
       *|* (mandatory:create) Field1, Field2, ...;
       *|* (readonly:update) Field1, Field2, ...;

Variants:

[1\. ... field(readonly) Field1, Field2, ...](#!ABAP_VARIANT_1@1@)
[2\. ... field(mandatory) Field1, Field2, ...](#!ABAP_VARIANT_2@2@)
[3\. ... field(features:instance) Field1, Field2, ...](#!ABAP_VARIANT_3@3@)
[4\. ... field(mandatory:create) Field1, Field2, ...](#!ABAP_VARIANT_4@4@)
[5\. ... field(readonly:update) Field1, Field2, ...](#!ABAP_VARIANT_5@5@)

Effect

This topic lists field attributes for the for a [fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_field_glosry.htm "Glossary Entry") of a [RAP BO entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").

Commas can be used to classify multiple fields in the same way. Example: field(readonly) Field1, Field2, Field3;

A field can have multiple characteristics, divided by commas within the brackets. Example: field(mandatory:create, readonly:update) Field1, Field2, Field3;. Certain restrictions apply on the combination of field characteristics. They are indicated by a syntax check warning.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   In case of [projection BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), automatic inheritance takes place. To newly define field characteristics in a projection BO, special rules apply. See topic [CDS BDL - field characteristics, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_projection.htm).
-   For [abstract BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"), only one field characteristic is available, see [the respective topic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_abstract.htm).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Feature Control Definition: Fields

Hint

In UI scenarios, field characteristics are displayed as [RAP consumer hint](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_consumer_hint_glosry.htm "Glossary Entry").

Variant 1   

... field(readonly) Field1, Field2, ...

Effect

-   Defines that the values of the specified fields must not be created or updated by the [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry").
-   [Static field attribute](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_static_field_char_glosry.htm "Glossary Entry").
-   No implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") required.
-   If a [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") tries to modify a field specified as readonly in the BDEF using [ABAP EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_eml_glosry.htm "Glossary Entry") [CREATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) or [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm), a [runtime error](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_glosry.htm "Glossary Entry") occurs.

Variant 2   

... field(mandatory) Field1, Field2, ...

Effect

-   Defines that it is mandatory to enter values into the specified fields before persisting them on the database. These fields are marked as mandatory on the user interface in an OData scenario. However, there's no runtime check for mandatory fields and no runtime error occurs if a mandatory field is not filled. If a runtime check is required, the application developer should implement it using a [validation on save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm).
-   [Static field attribute](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_static_field_char_glosry.htm "Glossary Entry").
-   No implementation in the ABAP behavior pool required.

Example

The following example shows a managed BDEF that defines the field char\_field1 as mandatory.

managed;
define behavior for DEMO\_RAP\_FIELD\_MANDATORY
persistent table demo\_dbtab\_field
lock master
{
  create;
  update;
  delete;
  field ( mandatory ) char\_field1;
}

The ABAP program DEMO\_RAP\_MANAGED\_MANDATORY uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access to RAP business object. It creates three entity instances by specifying a value for the primary key field key\_field. No value is entered for the mandatory field char\_field1. It commits the three new entity instances to the database. Using the ABAP SQL SELECT statement, it displays the content of the underlying database table.

Code Snippet:

DELETE FROM demo\_dbtab\_field.
    MODIFY ENTITIES OF demo\_rap\_field\_mandatory
         ENTITY DEMO\_RAP\_FIELD\_MANDATORY
           CREATE
             SET FIELDS WITH VALUE #(
              ( %cid = '1'
                key\_field = '0894EF1643A01EDB989329BF29E8FD27' )
              ( %cid = '2'
                key\_field = '0894EF1643A01EDB989329BF29E81D27' )
              ( %cid = '3'
                key\_field = '0894EF1643A01EDB989329BF29E83D27' ) )
               MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.

Result: The mandatory field char\_field1 contains the [initial value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_value_glosry.htm "Glossary Entry"), no syntax check warning or syntax check error occurs.

![Figure](bdoc_mandatory.png)

Variant 3   

... field(features:instance) Field1, Field2,...

Effect

-   [Dynamic field attribute](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_dyn_field_char_glosry.htm "Glossary Entry") that defines access restrictions for fields depending on the state of the BO entity instance.
-   Must be implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR INSTANCE FEATURES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_features.htm). In the ABAP behavior pool, it can be specified that a field is dynamically mandatory, read-only, has no restrictions, or that it is mandatory and read-only.
-   If a RAP BO consumer tries to breach the dynamic access restrictions, it is ignored. There's no error or warning message. In a managed RAP BO, there's also no entry in the response structures. In an unmanaged RAP BO, the reported structure can be filled, depending on the BO implementation.

Example

The following example shows a managed BDEF that defines dynamic feature control for field int\_field2.

managed implementation in class bp\_demo\_rap\_instance\_features unique;
define behavior for DEMO\_RAP\_INSTANCE\_FEATURES
persistent table demo\_dbtab\_field
lock master
{
  create;
  update;
  delete;
  field ( features : instance ) int\_field2;
}

In the ABAP behavior pool, it specifies the following condition: if field int\_field1 contains the value '1', then int\_field2 is read-only.

Code snippet:

... %field-int\_field2 = COND #(
                        WHEN ls\_variable-int\_field1 = '1'
                        THEN if\_abap\_behv=>fc-f-read\_only
                        ELSE if\_abap\_behv=>fc-f-unrestricted
                        ) ) ).

The ABAP program DEMO\_RAP\_INSTANCE\_FEATURES uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access to RAP business object.

-   First, it inserts an entity instance directly onto the database using ABAP SQL INSERT. This entity instance has the value '1' for field int\_field1. Therefore, it fulfills the condition that triggers feature control: if this instance is updated, field int\_field2 should be read-only.
-   An EML [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) operation is executed on the same instance. This update operation tries to enter a value into field int\_field2.
-   The updated entity instance is committed to the database. Using the ABAP SQL SELECT statement, the content of the underlying database table is displayed.

Result: The update operation is prevented by the dynamic feature control. Field int\_field2 contains the initial value. No syntax check warning or syntax check error occurs.

![Figure](bdoc_instance_features.png)

Executable Example

[ABAP EML - RAP Calculator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_calculator_abexa.htm)

Variant 4   

... field(mandatory:create) Field1, Field2, ...

Effect

-   [Dynamic field attribute](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_dyn_field_char_glosry.htm "Glossary Entry") that defines that it is mandatory to enter a value when an instance is created.
-   No implementation in the ABAP behavior pool required.
-   If a RAP BO consumer tries to create a new entity instance without entering a value into the field defined as mandatory:create, a runtime error occurs.

Hint

A typical use case is to combine mandatory:create with readonly:update for key fields (external numbering by RAP BO consumer).

Variant 5   

... field(readonly:update) Field1, Field2, ...

Effect

-   [Dynamic field attribute](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_dyn_field_char_glosry.htm "Glossary Entry") that defines a field as read-only during update operations, that means, the field in question cannot be changed anymore after the create operation.
-   No implementation in the ABAP behavior pool required.
-   If a RAP BO consumer tries to update a field defined as readonly:update, a runtime error occurs.