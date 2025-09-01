---
title: "CDS BDL - precheck"
description: |
  Syntax ... precheck ... Effect A method that is called before a modify request is executed on the transactional buffer to prevent unwanted changes from reaching the application buffer. A precheck can be defined for the following RAP BO operations(https://help.sap.com/doc/abapdocu_757_index_htm/7.5
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm"
abapFile: "abenbdl_precheck.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "abenbdl", "precheck"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm) →  [CDS BDL - Entity Behavior Body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations.htm) →  [CDS BDL - RAP BO Operation, Additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations_additions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - precheck, ABENBDL_PRECHECK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

CDS BDL - precheck

Syntax

... precheck ...

Effect

A method that is called before a modify request is executed on the transactional buffer to prevent unwanted changes from reaching the application buffer.

A precheck can be defined for the following [RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry"):

-   [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm)
-   [operations for associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_association.htm)
-   [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard.htm)

An implementation in the [RAP handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR PRECHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_precheck.htm) in the local [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry")

Projection Implementation

If a precheck is defined in a projection implementation, an ABAP behavior pool is required.

If the base BO defines a precheck, this is automatically reused. The projection can also define a new precheck. Also, it is possible to define a precheck for both layers. In this case, first, the precheck of the projection layer is called and afterwards the precheck of the base layer.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Operation Precheck.

Hint

Cannot be used for internal operations using the keyword [internal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_internal.htm).

Example

The following example shows an unmanaged BDEF based on the CDS view entity DEMO\_RAP\_UNMANAGED\_PRECHECK. It defines the RAP BO operation addition precheck for the standard operation create.

unmanaged
implementation in class bp\_demo\_rap\_unmanaged\_precheck unique;
strict(2);
define behavior for DEMO\_RAP\_UNMANAGED\_PRECHECK
lock master
authorization master ( instance )
{
  create(precheck);
  update;
  delete;
}

In the ABAP behavior pool BP\_DEMO\_RAP\_UNMANAGED\_PRECHECK, the precheck method implements a uniqueness check. It checks that the primary keys for new entity instances are unique. If the primary key values already exist, an entry is written into the failed and reported structures and the respective entity instance does not reach the application buffer.

Code snippet:

METHOD precheck\_create.
"prep buffer
LOOP AT entities ASSIGNING FIELD-SYMBOL(<buffer>).
      IF line\_exists( lcl\_buffer=>root\_buffer\[ key\_field
                      = <buffer>-KeyFieldRoot \] ).
      ELSE.
        SELECT SINGLE @abap\_true
         FROM demo\_dbtab\_root
         WHERE key\_field = @<buffer>-KeyFieldRoot
         INTO @DATA(exists).
        IF sy-subrc = 0.
          SELECT \*
          FROM demo\_dbtab\_root
          WHERE key\_field = @<buffer>-KeyFieldRoot
          APPENDING CORRESPONDING FIELDS
          OF TABLE @lcl\_buffer=>root\_buffer.
        ENDIF.
      ENDIF.
    ENDLOOP.
    "Uniqueness Check
    LOOP AT entities ASSIGNING FIELD-SYMBOL(<entity>).
      "Conditions for adding instances to the transactional buffer:
      " - %control of key field must not be flagged with 00
      " - key field must not be initial
      " - line with the key must not exist (but if the line exists
      "   and it is marked as deleted, it can be added)
      "It is assumed that %cid is always unique.
      IF <entity>-KeyFieldRoot IS INITIAL
      OR <entity>-%control-KeyFieldRoot = if\_abap\_behv=>mk-off
      OR line\_exists( lcl\_buffer=>root\_buffer\[ key\_field
      = <entity>-KeyFieldRoot \] )
      AND lcl\_buffer=>root\_buffer\[ key\_field
      = <entity>-KeyFieldRoot \]-deleted IS INITIAL.
        "Fill FAILED/REPORTED response structures.
        APPEND VALUE #( keyfieldroot = <entity>-KeyFieldRoot
                        %cid         = <entity>-%cid
                        %delete      = if\_abap\_behv=>mk-off
                        %update      = if\_abap\_behv=>mk-off
                        %create      = if\_abap\_behv=>mk-on
                        %fail-cause  = if\_abap\_behv=>cause-unspecific
                      )
                  TO failed-demo\_rap\_unmanaged\_precheck.
        APPEND VALUE #( %msg      = new\_message\_with\_text(
                     severity  = if\_abap\_behv\_message=>severity-error
                     text      = 'Create operation failed.' )
                     keyfieldroot = <entity>-KeyFieldRoot
                     %cid      = <entity>-%cid )
                     TO reported-demo\_rap\_unmanaged\_precheck.
   ENDIF.
   ENDLOOP.
ENDMETHOD.

For the complete implementation in the ABAP behavior pool, see CCIMP include.

The program DEMO\_RAP\_UNMANAGED\_PRECHECK accesses the business object using [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following steps:

-   It inserts data into the database using ABAP SQL [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_dbtab.htm).
-   It creates two valid new entity instances with unique keys. They pass the precheck and are written to the database.
-   It creates two more new entity instances - one is valid, one has a duplicate key value (value '1' already exists).
-   The entity instance with duplicate key is written into the failed and reported structures. The valid entity instance is committed to the database.