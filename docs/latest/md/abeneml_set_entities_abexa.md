  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_in_abp.htm) →  [SET ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20ENTITIES%2C%20ABENEML_SET_ENTITIES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET ENTITIES

This example demonstrates the SET ENTITIES statements with a managed RAP BO. Note that this example produces a short dump.

Data model

The CDS data model consists of the root entity DEMO\_ROOT\_M:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_root\_m as select from demo\_tab\_root
{
  key key\_field,
  data\_field1\_root,
  data\_field2\_root
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_ROOT\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_root\_m unique;
strict ( 2 );
define behavior for demo\_root\_m alias root
persistent table demo\_tab\_root
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly : update ) key\_field;
  action act;
  action act\_block;
}

Behavior implementation

For the above BDEF, one [behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_ROOT\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The [handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm) for the two actions are implemented in a way to demonstrate the effect of the statement SET ENTITIES.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_set\_entities DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      i TYPE REF TO if\_demo\_input,
      a TYPE abap\_bool,
      b TYPE abap\_bool,
      f TYPE RESPONSE FOR FAILED demo\_root\_m,
      r TYPE RESPONSE FOR REPORTED demo\_root\_m.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_set\_entities IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
    \`Demo: SET ENTITIES ... BLOCKED/UNBLOCKED\` ).
    "Creating instances
    MODIFY ENTITY demo\_root\_m
       CREATE FIELDS ( key\_field data\_field1\_root
                       data\_field2\_root )
       WITH VALUE #(
         ( %cid = 'cid1'
           key\_field = 1
           data\_field1\_root = \`aaa\`
           data\_field2\_root = \`bbb\` )
          ( %cid = 'cid2'
            key\_field = 2
            data\_field1\_root = \`ccc\`
            data\_field2\_root = \`ddd\` ) )
       FAILED f
       REPORTED r.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root
      ORDER BY key\_field
      INTO TABLE @DATA(itab).
    out->write\_doc( \`Entries after RAP modify operation\` ).
    out->write( itab ).
    "Providing input
    i->add\_text( \`Select one of the following options:\` ).
    i->add\_field(
      EXPORTING as\_checkbox = abap\_true
                text = \`without SET ENTITIES OF ... BLOCKED/UNBLOCKED\`
      CHANGING field = a ).
    i->add\_line( ).
    "Note: When executing this action, a short dump occurs
    "for demonstration purposes.
    i->add\_field(
      EXPORTING as\_checkbox = abap\_true
      text = \`with SET ENTITIES OF ... BLOCKED/UNBLOCKED (Dump!)\`
      CHANGING field = b ).
    i->request( ).
    IF ( a = abap\_true AND b = abap\_true )
    OR ( a = abap\_false AND b = abap\_false ).
      out->write\_doc( \`Action execution has not been triggered. \` &&
      \`Select one of the options.\` ).
    ENDIF.
    IF a = abap\_true AND b = abap\_false.
      MODIFY ENTITY demo\_root\_m
             EXECUTE act FROM VALUE #( ( key\_field = 1 )
                                       ( key\_field = 2 ) )
             FAILED f
             REPORTED r.
      COMMIT ENTITIES.
      IF sy-subrc <> 0.
        out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
      ENDIF.
      SELECT \* FROM demo\_tab\_root
        ORDER BY key\_field
        INTO TABLE @DATA(itab1).
      out->write\_doc( \`Entries after executing action without SET \` &&
      \`ENTITIES OF ... BLOCKED/UNBLOCKED statement\` ).
      out->write( itab1 ).
    ENDIF.
    IF a = abap\_false AND b = abap\_true.
      MODIFY ENTITY demo\_root\_m
         EXECUTE act\_block FROM VALUE #( ( key\_field = 1 )
                                         ( key\_field = 2 ) )
         FAILED f
         REPORTED r.
      COMMIT ENTITIES.
      IF sy-subrc <> 0.
        out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
      ENDIF.
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    i = cl\_demo\_input=>new( ).
    DELETE FROM demo\_tab\_root.
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two RAP BO instances are created in a [RAP modify operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") and persisted to the database.
-   Depending on the selection, either the first or the second action is executed. Both actions include another modify operation to update instances. One action includes SET ENTITIES statements. If this action is executed, a short dump is produced. In the short dump message, you will also see value for the counter.