---
title: "RAP - Factory Action"
description: |
  This example demonstrates how factory actions are defined, implemented, and consumed in a managed RAP BO. Data model The CDS data model consists of a single root entity DEMO_RAP_FACTORY_ACTION: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUserText.label: 'test' define root view entity de
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action3_abexa.htm"
abapFile: "abenbdl_action3_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "try", "method", "class", "data", "abenbdl", "action3", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard.htm) →  [RAP - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) →  [RAP - Examples of Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Factory%20Action%2C%20ABENBDL_ACTION3_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Factory Action

This example demonstrates how factory actions are defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of a single root entity DEMO\_RAP\_FACTORY\_ACTION:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'test'
define root view entity demo\_rap\_factory\_action
  as select from demo\_dbtab\_root
{
  key key\_field,
      data\_field,
      char\_field,
      char\_field\_2,
      dec\_field
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_FACTORY\_ACTION is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_rap\_factory\_action unique;
strict(2);
define behavior for demo\_rap\_factory\_action
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
  // copy instance, assign new unique key value
  factory action copy\_instance \[1\];
  // create new instance with default values
  static factory action new\_instance \[1\];
}

Action definition

Two factory actions are defined:

-   The instance factory action copy\_instance copies all values of the requested entity instance and assigns a new key value.
-   The static factory action new\_instance creates new entity instances with default values.

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_FACTORY\_ACTION. This global class implements the local handler class LHC\_DEMO\_RAP\_FACTORY\_ACTION, which contains two methods, copy\_instance and new\_instance, to implement the factory actions. The actual implementation takes place in the CCIMP include:

copy\_instance:

METHOD copy\_instance.
  READ ENTITIES OF demo\_rap\_factory\_action IN LOCAL MODE
      ENTITY demo\_rap\_factory\_action
      ALL FIELDS WITH CORRESPONDING #( keys )
      RESULT DATA(result)
      FAILED failed.
  SELECT
  FROM demo\_dbtab\_root
  FIELDS MAX( key\_field )
  INTO @DATA(lv\_max\_key\_field).
  DATA: ls\_create TYPE STRUCTURE FOR  CREATE demo\_rap\_factory\_action.
  DATA: lt\_create TYPE TABLE FOR CREATE demo\_rap\_factory\_action.
  LOOP AT keys INTO DATA(key).
    lv\_max\_key\_field = lv\_max\_key\_field + 1.
    IF line\_exists( result\[
                        KEY entity  key\_field = key-key\_field \] ).
      ls\_create-%data = CORRESPONDING #( result\[
                          KEY entity  key\_field = key-key\_field \]  ).
      ls\_create-key\_field = lv\_max\_key\_field.
    ENDIF.
    APPEND ls\_create TO lt\_create.
  ENDLOOP.
  MODIFY ENTITIES OF demo\_rap\_factory\_action IN LOCAL MODE
    ENTITY demo\_rap\_factory\_action
    CREATE
    AUTO FILL CID
    FIELDS ( key\_field char\_field char\_field\_2 data\_field dec\_field )
    WITH lt\_create
    MAPPED   mapped
    REPORTED reported
    FAILED   failed.
ENDMETHOD.

new\_instance:

METHOD new\_instance.
  MODIFY ENTITIES OF demo\_rap\_factory\_action IN LOCAL MODE
      ENTITY demo\_rap\_factory\_action
        CREATE FROM VALUE #( FOR <instance> IN keys
                               ( %cid      = <instance>-%cid
                                 key\_field = '4'
                                 char\_field    = 'C'
                                 %control  =
                                 VALUE #(
                                   key\_field = if\_abap\_behv=>mk-on
                                   char\_field = if\_abap\_behv=>mk-on )
                                   ) )
        MAPPED mapped
        FAILED failed
        REPORTED reported.
ENDMETHOD.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_factory\_action DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_factory\_action IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_dbtab\_root.
    MODIFY ENTITIES OF demo\_rap\_factory\_action
      ENTITY demo\_rap\_factory\_action
        CREATE FIELDS ( key\_field char\_field ) WITH VALUE #(
        ( %cid = 'cid1' key\_field = 1 char\_field = 'A' )
         ( %cid = 'cid2' key\_field = 2 char\_field = 'B' )
        )
        MAPPED FINAL(create\_mapped)
        FAILED FINAL(create\_failed)
        REPORTED FINAL(create\_reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, char\_field
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(result).
    MODIFY ENTITIES OF demo\_rap\_factory\_action
          ENTITY demo\_rap\_factory\_action
    EXECUTE copy\_instance
    AUTO FILL CID WITH VALUE #( ( key\_field = 1 ) )
    FAILED FINAL(failed)
    REPORTED FINAL(reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, char\_field
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(result1).
    MODIFY ENTITIES OF demo\_rap\_factory\_action
      ENTITY demo\_rap\_factory\_action
    EXECUTE new\_instance
    AUTO FILL CID WITH VALUE #( ( %cid = 'My%CID' ) )
    FAILED FINAL(failed1)
    REPORTED FINAL(reported1).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, char\_field
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(result2).
    out->next\_section( 'result create'
        )->write( result
        )->next\_section( 'result instance factory action'
        )->write( result1
        )->next\_section( 'result static factory action'
        )->write( result2 ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two BO entity instances are created with the statement MODIFY ENTITY.
-   The action copy\_instance is executed on one of the two instances with the statement EXECUTE and the changes that were performed by the action in the transactional buffer are committed to the database with the statement COMMIT ENTITIES.
-   The action new\_instance is executed with the statement EXECUTE and the changes that were performed by the action in the transactional buffer are committed to the database with the statement COMMIT ENTITIES.
-   A SELECT statement is used to read the changed data from the persistent table DEMO\_DBTAB\_ROOT. As a result, two new entity instances are created: one is a duplicate of the entity instance with key value '1', but is has a new key value. One is created with default values.