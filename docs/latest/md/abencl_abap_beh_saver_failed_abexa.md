---
title: "Data model"
description: |
  The CDS data model consists of the root entity DEMO_SAVE_F_UNM_S_M. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define root view entity DEMO_SAVE_F_UNM_S_M as select from demo_tab_root_7  key key_field, char1, char2, num1, num2  Behavior definition The RAP behavio
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_beh_saver_failed_abexa.htm"
abapFile: "abencl_abap_beh_saver_failed_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "abencl", "abap", "beh", "saver", "failed", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class.htm) →  [CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED, RAP Saver Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_cl_abap_beh_saver_failed.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%20for%20CL_ABAP_BEHAVIOR_SAVER_FAILED%2C%20ABENCL_ABAP_BEH_SAVER_FAILED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Example for CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED

This example demonstrates the RAP saver class CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED using a simple managed RAP BO [with unmanaged save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm).

Data model

The CDS data model consists of the root entity DEMO\_SAVE\_F\_UNM\_S\_M.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_SAVE\_F\_UNM\_S\_M as select from demo\_tab\_root\_7
{
  key key\_field,
  char1,
  char2,
  num1,
  num2
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_SAVE\_F\_UNM\_S\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed with unmanaged save
implementation in class bp\_demo\_save\_f\_unm\_s\_m unique;
strict ( 2 );
define behavior for DEMO\_SAVE\_F\_UNM\_S\_M alias root
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
  validation validate on save { create; update; delete; }
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_SAVE\_F\_UNM\_S\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The ABP includes the implementation of a validation. In this simple example, the validation fails if particular fields have particular values.

The class LSC\_DEMO\_SAVE\_F\_UNM\_S\_M is the RAP saver class that inherits from CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED. The SAVE\_MODIFIED saver method is implemented in a way that a save is denied for a RAP BO instance if particular fields have particular values in a RAP create operation.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_saver\_failed DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      f\_early   TYPE RESPONSE FOR FAILED EARLY demo\_save\_f\_unm\_s\_m,
      rep\_early TYPE RESPONSE FOR REPORTED EARLY demo\_save\_f\_unm\_s\_m,
      f\_late    TYPE RESPONSE FOR FAILED LATE demo\_save\_f\_unm\_s\_m,
      rep\_late  TYPE RESPONSE FOR REPORTED LATE demo\_save\_f\_unm\_s\_m.
    METHODS:
      select\_from\_dbtab,
      display\_responses.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_saver\_failed IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demonstrating cl\_abap\_behavior\_saver\_failed\`
    )->line(
    )->write( \`----- Successful saving \` &&
    \`(sy-subcr = 0 after committing) -----\` ).
    MODIFY ENTITY demo\_save\_f\_unm\_s\_m
      CREATE FIELDS ( key\_field char1 char2 num1 num2 )
      WITH VALUE #(
        ( %cid = 'cid1'
          key\_field = 1
          char1 = 'aaa'
          char2 = 'bbb'
          num1 = 11
          num2 = 111 ) )
      REPORTED rep\_early
      FAILED f\_early.
    COMMIT ENTITIES RESPONSE OF demo\_save\_f\_unm\_s\_m
      FAILED f\_late
      REPORTED rep\_late.
    IF sy-subrc <> 0.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
      out->write(  \`Issue in the save sequence.\`  ).
    ELSE.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
    ENDIF.
    "If there are entries, displaying early and late
    "FAILED and REPORTED responses
    display\_responses( ).
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`----- Failure in RAP interaction phase \` &&
    \`-----\` ).
    MODIFY ENTITY demo\_save\_f\_unm\_s\_m
      CREATE FIELDS ( key\_field char1 char2 num1 num2 )
      WITH VALUE #(
        ( %cid = 'cid2'  "instance to fail
          key\_field = 1
          char1 = 'yyy'
          char2 = 'zzz'
          num1 = 12
          num2 = 345 )
        ( %cid = 'cid3'
          key\_field = 10
          char1 = 'ccc'
          char2 = 'ddd'
          num1 = 100
          num2 = 1000 ) )
      REPORTED rep\_early
      FAILED f\_early.
    "Demonstrating that the failed instance is not available
    "in the transactional buffer. The read instance is from
    "the database.
    DATA(key) = 1.
    READ ENTITY demo\_save\_f\_unm\_s\_m
      ALL FIELDS  WITH VALUE #(
        ( key\_field = key ) )
      RESULT DATA(res1).
    IF res1 IS INITIAL.
      out->write(  \`Read result is empty for key field with value \`
                 && key && \`.\`  ).
    ELSE.
      out->write(  res1  ).
    ENDIF.
    COMMIT ENTITIES RESPONSE OF demo\_save\_f\_unm\_s\_m
      FAILED f\_late
      REPORTED rep\_late.
    IF sy-subrc <> 0.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
      out->write(  \`Issue in the save sequence.\`  ).
    ELSE.
      out->write( |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
    ENDIF.
    "If there are entries, displaying early and late
    "FAILED and REPORTED responses
    display\_responses( ).
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`----- Failure in early save phase \` &&
    \`(sy-subcr = 4 after committing) -----\` ).
    MODIFY ENTITY demo\_save\_f\_unm\_s\_m
      CREATE FIELDS ( key\_field char1 char2 num1 num2 )
      WITH VALUE #(
        ( %cid = 'cid4'
          key\_field = 2
          char1 = 'eee'
          char2 = 'fff'
          num1 = 22
          num2 = 222 ) )
      REPORTED rep\_early
      FAILED f\_early.
    COMMIT ENTITIES RESPONSE OF demo\_save\_f\_unm\_s\_m
      FAILED f\_late
      REPORTED rep\_late.
    IF sy-subrc <> 0.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
      out->write(  \`Issue in the save sequence.\`  ).
      "Demonstrating that the RAP BO instance with the key
      "is still available in the transactional buffer.
      key = 2.
      READ ENTITY demo\_save\_f\_unm\_s\_m
        ALL FIELDS  WITH VALUE #(
          ( key\_field = key ) )
        RESULT DATA(res2).
      IF res2 IS INITIAL.
        out->write(  \`Read result is empty for key field with value \`
                   && key && \`.\`  ).
      ELSE.
        out->write(  res2  ).
        "Correcting failed entry
        MODIFY ENTITY demo\_save\_f\_unm\_s\_m
          UPDATE FIELDS ( num2 ) WITH VALUE #(
            ( key\_field = 2
              num2 = 2222 ) ).
        COMMIT ENTITIES.
      ENDIF.
    ELSE.
      out->write( |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
    ENDIF.
    "If there are entries, displaying early and late
    "FAILED and REPORTED responses
    display\_responses( ).
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`----- Failure in late save phase \` &&
    \`(sy-subcr = 8 after committing) -----\` ).
    MODIFY ENTITY demo\_save\_f\_unm\_s\_m
      CREATE FIELDS ( key\_field char1 char2 num1 num2 ) WITH VALUE #(
        ( %cid = 'cid5'
          key\_field = 3
          char1 = 'ggg'
          char2 = 'hhh'
          num1 = 33
          num2 = 333 ) )
      REPORTED rep\_early
      FAILED f\_early.
    "Note: The example is implemented in a way that a RAP BO
    "cannot be saved if particular values are present in
    "particular fields.
    COMMIT ENTITIES RESPONSE OF demo\_save\_f\_unm\_s\_m
      FAILED f\_late
      REPORTED rep\_late.
    IF sy-subrc <> 0.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
      out->write(  \`Issue in the save sequence.\`  ).
      key = 3.
      "Demonstrating that there is no RAP BO instance in the
      "transactional buffer with the key used for the create
      "operation above.
      READ ENTITY demo\_save\_f\_unm\_s\_m
        ALL FIELDS  WITH VALUE #(
          ( key\_field = key ) )
        RESULT DATA(res3).
      IF res3 IS INITIAL.
        out->write(  \`Read result is empty for key field with value \`
        && key && \`.\` ).
      ELSE.
        out->write(  res3  ).
      ENDIF.
    ELSE.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }|  ).
    ENDIF.
    "If there are entries, displaying early and late
    "FAILED and REPORTED responses
    display\_responses( ).
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`----- RAP BO consumer to proceed after an issue in\` &&
    \` the late save phase and setting sy-subcr to 8 -----\` ).
    "Without a rollback, the exception CX\_SADL\_DUMP\_APPL\_MODEL\_ERROR
    "is raised.
    ROLLBACK ENTITIES.
    MODIFY ENTITY demo\_save\_f\_unm\_s\_m
      CREATE FIELDS ( key\_field char1 char2 num1 num2 ) WITH VALUE #(
        ( %cid = 'cid6'
          key\_field = 4
          char1 = 'iii'
          char2 = 'jjj'
          num1 = 44
          num2 = 444 ) )
      REPORTED rep\_early
      FAILED f\_early.
    COMMIT ENTITIES RESPONSE OF demo\_save\_f\_unm\_s\_m
      FAILED f\_late
      REPORTED rep\_late.
    IF sy-subrc <> 0.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }| ).
      out->write(  \`Issue in the save sequence.\`  ).
    ELSE.
      out->write(  |sy-subrc after COMMIT ENTITIES: { sy-subrc }|  ).
    ENDIF.
    "If there are entries, displaying early and late
    "FAILED and REPORTED responses
    display\_responses( ).
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
  ENDMETHOD.
  METHOD display\_responses.
    IF f\_early IS NOT INITIAL.
      out->write( \`Failed early: Key: \` &&
                f\_early-root\[ 1 \]-%key-key\_field &&
                \`, Fail cause: \` &&
                f\_early-root\[ 1 \]-%fail-cause ).
    ENDIF.
    IF rep\_early IS NOT INITIAL.
      out->write( \`Reported early: \` &&
                rep\_early-root\[ 1 \]-%msg->m\_severity &&
                \`, Key: \` &&
                rep\_early-root\[ 1 \]-%key-key\_field &&
                \`, Message: \` &&
                rep\_early-root\[ 1 \]-%msg->if\_message~get\_text( ) ).
    ENDIF.
    IF f\_late IS NOT INITIAL.
      out->write( \`Failed late: Key: \` &&
            f\_late-root\[ 1 \]-%key-key\_field &&
            \`, Fail cause: \` &&
            f\_late-root\[ 1 \]-%fail-cause ).
    ENDIF.
    IF rep\_late IS NOT INITIAL.
      out->write( \`Reported late: \` &&
                rep\_late-root\[ 1 \]-%msg->m\_severity &&
                \`, Key: \` &&
                rep\_late-root\[ 1 \]-%key-key\_field &&
                \`, Message: \` &&
                rep\_late-root\[ 1 \]-%msg->if\_message~get\_text( ) ).
    ENDIF.
  ENDMETHOD.
  METHOD select\_from\_dbtab.
    SELECT \* FROM demo\_tab\_root\_7
      ORDER BY key\_field
      INTO TABLE @FINAL(db\_entries).
    out->write( db\_entries ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_tab\_root\_7.
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The example demonstrates different ABAP EML requests. Among them, there are modify requests including a create operation to create one instance in most cases. COMMIT ENTITIES statements trigger the save sequence. These statements include the retrieval of the [RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry") failed and reported. After most modify requests, the responses - if there are any - are displayed. A SELECT statement retrieves the entries on the database table to show the effect of the RAP operations.

The following is covered:

1.  Successful saving of a RAP BO instance
    
    Demonstrates a successful RAP create operation. The validation and the saving is carried out successfully. The value of sy-subrc is 0 after the COMMIT ENTITIES statement. There are no early and late responses.
    
2.  Failure in the RAP interaction phase
    
    Demonstrates a failure in the RAP interaction phase. The RAP create operation includes two RAP BO instances. One of these includes a key value that is already available in the database table. Hence, the creation of this instance fails. The early failed response includes an entry. A subsequent read operation shows that the erroneous instance is not present in the transactional buffer. The other instance is then saved to the database.
    
3.  Failure in the early save phase
    
    Demonstrates a failure in the early phase of the RAP save sequence (the validation fails). The value of sy-subrc is 4 after the COMMIT ENTITIES statement. A read operation demonstrates that the RAP BO instance that has failed is still available in the [RAP transactional buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"). A RAP update operation is carried out on the failed instance to correct the issue.
    
4.  Failure in the late save phase
    
    Demonstrates a failure in the late phase of the RAP save sequence (in the SAVE\_MODIFIED method). Due to the implementation mentioned above, the saving of the RAP BO instance is denied. The response parameters are filled in the SAVE\_MODIFIED method. The value of sy-subrc is 8 after the COMMIT ENTITIES statement. A read operation demonstrates that the RAP BO instance that has failed is not available in the transactional buffer.
    
5.  RAP BO consumer proceeds after a failure in the late save phase
    
    After an issue occurred earlier in the late save phase, sy-subrc was set to 8. The RAP BO consumer cannot continue unless there is an explicit rollback. Therefore, the example includes a ROLLBACK ENTITIES statement that precedes another RAP create operation. If the statement is not specified, the runtime error CX\_SADL\_DUMP\_APPL\_MODEL\_ERROR will be raised.