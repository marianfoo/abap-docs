  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) →  [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\)) →  [CDS BDL - Examples of Actions](javascript:call_link\('abenbdl_action_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Factory Action, ABENBDL_ACTION3_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

CDS BDL - Factory Action

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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_FACTORY\_ACTION is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

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

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_FACTORY\_ACTION. This global class implements the local handler class LHC\_DEMO\_RAP\_FACTORY\_ACTION, which contains two methods, copy\_instance and new\_instance, to implement the factory actions. The actual implementation takes place in the CCIMP include:

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

REPORT demo\_rap\_factory\_action.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new(  ).
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
    SELECT key\_field, char\_field
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(result2).
    out->next\_section( 'result create'
        )->write( result
        )->next\_section( 'result instance factory action'
        )->write( result1
        )->next\_section( 'result static factory action'
        )->write( result2
         )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program:

-   Two BO entity instances are created with the statement MODIFY ENTITY.
-   The action copy\_instance is executed on one of the two instances with the statement EXECUTE and the changes that were performed by the action in the transactional buffer are committed to the database with the statement COMMIT ENTITIES.
-   The action new\_instance is executed with the statement EXECUTE and the changes that were performed by the action in the transactional buffer are committed to the database with the statement COMMIT ENTITIES.
-   A SELECT statement is used to read the changed data from the persistent table DEMO\_DBTAB\_ROOT. As a result, two new entity instances are created: one is a duplicate of the entity instance with key value '1', but is has a new key value. One is created with default values.