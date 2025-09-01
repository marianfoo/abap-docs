---
title: "RAP - field numbering"
description: |
  Syntax ... field(numbering:managed) Field1, Field2, ...; Effect Defines managed internal numbering(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_numbering_glosry.htm 'Glossary Entry') for a RAP BO field(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_b
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_numbering.htm"
abapFile: "abenbdl_field_numbering.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "class", "data", "abenbdl", "field", "numbering"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20field%20numbering%2C%20ABENBDL_FIELD_NUMBERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - field numbering

Syntax

... field(numbering:managed) Field1, Field2, ...;

Effect

Defines managed [internal numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_numbering_glosry.htm "Glossary Entry") for a [RAP BO field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_field_glosry.htm "Glossary Entry"). The field in question is automatically assigned values upon creation of a new entity instance. The RAP BO consumer does not have to provide any input for those fields.

-   Can be applied only to primary key fields with ABAP type raw(16) (UUID).
-   Managed internal numbering is only available in [managed RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").
-   It is managed by the [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry"), no implementation in the ABAP behavior pool is required.
-   The field in question can also be defined as readonly to ensure that no values are passed from the RAP BO consumer. However, this is optional. If you do not set the key field to readonly, the key value can also be given by the consumer.

Hint

For user-defined numbering, the keyword early numbering is available, see topic [RAP BDL - early numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_early_numb.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Automatically Drawing Primary Key Values in Managed BOs.

Example

The following example shows a managed BDEF that defines internal numbering for the key field key\_field.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. It does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_RAP\_FIELD\_CHARACTERISTICS alias RootEntity
persistent table demo\_dbtab\_field
lock master
{
  create;
  update;
  delete;
  field ( numbering:managed, readonly ) key\_field;
  field(readonly) int\_field1;
}

The ABAP class CL\_DEMO\_RAP\_MANAGED\_FIELDS uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access to [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") and performs the following steps:

-   It creates three entity instances by specifying a value for the field char\_field1.
-   It commits the three new entity instances to the database.
-   Using the ABAP SQL SELECT statement, it displays the content of the underlying database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of managed early numbering.

Code Snippet:

DELETE FROM demo\_dbtab\_field.
    MODIFY ENTITIES OF DEMO\_RAP\_FIELD\_CHARACTERISTICS
         ENTITY RootEntity
         CREATE FIELDS ( char\_field1 ) WITH VALUE #(
              ( %cid = '1' char\_field1 = 'A'  )
              ( %cid = '2' char\_field1 = 'B'  )
              ( %cid = '3' char\_field1 = 'C'  ) )
                MAPPED FINAL(mapped)
               FAILED FINAL(failed)
               REPORTED FINAL(reported).
    COMMIT ENTITIES.

Result: values for the primary key field are generated automatically.

![Figure](abdoc_internal_numb.png)