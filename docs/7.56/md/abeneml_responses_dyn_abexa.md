---
title: "ABAP EML - Responses (Dynamic Forms of ABAP EML Statements)"
description: |
  This example demonstrates responses for the dynamic form of the ABAP EML MODIFY and READ statements with a simple managed RAP BO(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm 'Glossary Entry'). Data model The CDS data model consists of the root entity DEMO_MANAG
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_responses_dyn_abexa.htm"
abapFile: "abeneml_responses_dyn_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abeneml", "responses", "dyn", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommon_eml_elements.htm) →  [ABAP EML - response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) →  [Examples for responses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_responses_abexas.htm) → 

ABAP EML - Responses (Dynamic Forms of ABAP EML Statements)

This example demonstrates responses for the dynamic form of the ABAP EML MODIFY and READ statements with a simple managed [RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT and its child entity DEMO\_MANAGED\_CHILD. Furthermore, it contains an association to an entity (DEMO\_MANAGED\_ASSOC) that is not part of the [composition tree](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_tree_glosry.htm "Glossary Entry"). It is not used in the example.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT
  as select from demo\_tab\_root
  composition \[1..1\] of DEMO\_MANAGED\_CHILD as \_child
  association \[1..1\] to DEMO\_MANAGED\_ASSOC as \_assoc  
    on $projection.key\_field = \_assoc.key\_field
  {
        \_child,
        \_assoc,
    key demo\_tab\_root.key\_field,
        demo\_tab\_root.data\_field1\_root,
        demo\_tab\_root.data\_field2\_root
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_MANAGED\_CHILD
  as select from demo\_tab\_child
  association to parent DEMO\_MANAGED\_ROOT as \_parent  
    on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key demo\_tab\_child.key\_field,
        demo\_tab\_child.data\_field1\_child,
        demo\_tab\_child.data\_field2\_child
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed;
define behavior for DEMO\_MANAGED\_ROOT
persistent table DEMO\_TAB\_ROOT
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_assoc { create; }
}
define behavior for DEMO\_MANAGED\_CHILD alias child
persistent table DEMO\_TAB\_CHILD
lock dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
}

Behavior implementation

For the above CDS behavior definition, there is no [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") created.

Source Code

REPORT demo\_rap\_eml\_responses\_dyn.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out          TYPE REF TO if\_demo\_output,
      failed\_dyn   TYPE abp\_behv\_response\_tab,
      reported\_dyn TYPE abp\_behv\_response\_tab,
      mapped\_dyn   TYPE abp\_behv\_response\_tab,
      failed\_tab   TYPE TABLE FOR FAILED demo\_managed\_root,
      reported\_tab TYPE TABLE FOR REPORTED demo\_managed\_root,
      mapped\_tab   TYPE TABLE FOR MAPPED demo\_managed\_root.
    CLASS-METHODS:
      initialize\_dbtabs,
      output\_failed\_tab IMPORTING f\_tab LIKE failed\_dyn,
      output\_reported\_tab IMPORTING r\_tab LIKE reported\_dyn,
      output\_mapped\_tab IMPORTING m\_tab LIKE mapped\_dyn.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
               \`Responses for dynamic forms of ABAP EML Statements\`
                   ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section(
      \`Responses for the dynamic form MODIFY ENTITIES OPERATIONS\`
                ).
    DATA: op\_tab           TYPE abp\_behv\_changes\_tab,
          create\_root\_tab  TYPE TABLE FOR CREATE demo\_managed\_root,
          update\_root\_tab  TYPE TABLE FOR UPDATE demo\_managed\_root,
          delete\_root\_tab  TYPE TABLE FOR DELETE demo\_managed\_root,
          cba\_tab       TYPE TABLE FOR CREATE demo\_managed\_root\\\_child,
          update\_child\_tab TYPE TABLE FOR UPDATE demo\_managed\_child,
          delete\_child\_tab TYPE TABLE FOR DELETE demo\_managed\_child.
    create\_root\_tab = VALUE #(
                ( %cid = 'cid1'
                  key\_field = 1
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'aaa'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'bbb'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on )
                ( %cid = 'cid2'
                  key\_field = 2
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'ccc'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'ddd'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on )
                ( %cid = 'cid3'
                  key\_field = 3
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'eee'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'fff'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on ) ).
    update\_root\_tab = VALUE #(
              ( %cid\_ref = 'cid2'
                %control-key\_field = if\_abap\_behv=>mk-on
                data\_field1\_root = 'GGG'
                %control-data\_field1\_root = if\_abap\_behv=>mk-on
                data\_field2\_root = 'HHH'
                %control-data\_field2\_root = if\_abap\_behv=>mk-on ) ).
    cba\_tab = VALUE #(
                ( %cid\_ref = 'cid1'
                  %target = VALUE #( (
                    %control-key\_field = if\_abap\_behv=>mk-off
                    data\_field1\_child = 'iii'
                    %control-data\_field1\_child = if\_abap\_behv=>mk-on
                    data\_field2\_child = 'jjj'
                    %control-data\_field2\_child = if\_abap\_behv=>mk-on
                ) ) )
                ( %cid\_ref = 'cid2'
                  %target = VALUE #( (
                    %control-key\_field = if\_abap\_behv=>mk-off
                    data\_field1\_child = 'kkk'
                    %control-data\_field1\_child = if\_abap\_behv=>mk-on
                    data\_field2\_child = 'lll'
                    %control-data\_field2\_child = if\_abap\_behv=>mk-on
                ) ) )
                ( %cid\_ref = 'cid3'
                  %target = VALUE #( (
                    %control-key\_field = if\_abap\_behv=>mk-off
                    data\_field1\_child = 'mmm'
                    %control-data\_field1\_child = if\_abap\_behv=>mk-on
                    data\_field2\_child = 'nnn'
                    %control-data\_field2\_child = if\_abap\_behv=>mk-on
                ) ) ) ).
    update\_child\_tab = VALUE #(
               ( key\_field = 2
                 %control-key\_field = if\_abap\_behv=>mk-off
                 data\_field1\_child = 'OOO'
                 %control-data\_field1\_child = if\_abap\_behv=>mk-on
                 data\_field2\_child = 'PPP'
                 %control-data\_field2\_child = if\_abap\_behv=>mk-on )
               ( key\_field = 5
                 %control-key\_field = if\_abap\_behv=>mk-off
                 data\_field1\_child = 'QQQ'
                 %control-data\_field1\_child = if\_abap\_behv=>mk-on
                 data\_field2\_child = 'RRR'
                 %control-data\_field2\_child = if\_abap\_behv=>mk-on ) ).
    delete\_root\_tab = VALUE #( ( key\_field = 3 )
                               ( key\_field = 4 ) ).
    delete\_child\_tab = VALUE #( ( key\_field = 3 )
                                ( key\_field = 6 ) ).
    op\_tab = VALUE #(
           ( op = if\_abap\_behv=>op-m-create
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             instances   = REF #( create\_root\_tab ) )
           ( op = if\_abap\_behv=>op-m-update
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             instances   = REF #( update\_root\_tab ) )
           ( op = if\_abap\_behv=>op-m-delete
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             instances   = REF #( delete\_root\_tab ) )
           ( op = if\_abap\_behv=>op-m-create\_ba
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             sub\_name = '\_CHILD'
             instances   = REF #( cba\_tab ) )
           ( op = if\_abap\_behv=>op-m-update
             entity\_name = 'DEMO\_MANAGED\_CHILD'
             instances   = REF #( update\_child\_tab ) )
           ( op = if\_abap\_behv=>op-m-delete
             entity\_name = 'DEMO\_MANAGED\_CHILD'
             instances   = REF #( delete\_child\_tab ) )
           ).
    MODIFY ENTITIES OPERATIONS op\_tab
      FAILED   DATA(failed1)
      REPORTED DATA(reported1)
      MAPPED   DATA(mapped1).
    out->write\_text( \`Responses for EML MODIFY operation:\` ).
    output\_failed\_tab( f\_tab = failed1 ).
    output\_reported\_tab( r\_tab = reported1 ).
    output\_mapped\_tab( m\_tab = mapped1 ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @DATA(root\_tab).
    SELECT \* FROM demo\_tab\_child INTO TABLE @DATA(child\_tab).
    out->write\_text( \`Database entries of root and child entity\` &&
                     \`after EML MODIFY operations:\`
               )->write( root\_tab
               )->write( child\_tab ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
      )->begin\_section(
            \`Responses for the dynamic form READ ENTITIES OPERATIONS\`
                ).
    DATA:
     op\_tab\_read TYPE ABP\_BEHV\_RETRIEVALS\_TAB,
     read\_dyn  TYPE TABLE FOR READ IMPORT demo\_managed\_root,
     read\_dyn\_result TYPE TABLE FOR READ RESULT demo\_managed\_root,
     rba\_dyn TYPE TABLE FOR READ IMPORT demo\_managed\_root\\\_child,
     rba\_dyn\_result TYPE TABLE FOR
                      READ RESULT demo\_managed\_root\\\_child,
     read2\_dyn  TYPE TABLE FOR READ IMPORT demo\_managed\_child,
     read2\_dyn\_result TYPE TABLE FOR READ RESULT demo\_managed\_child.
    read\_dyn = value #(
      ( key\_field = 1
        %control = value #(
           key\_field  = if\_abap\_behv=>mk-on
           data\_field1\_root    = if\_abap\_behv=>mk-on
           data\_field2\_root   = if\_abap\_behv=>mk-on ) )
      ( key\_field = 2
        %control = value #(
           key\_field  = if\_abap\_behv=>mk-on
           data\_field1\_root    = if\_abap\_behv=>mk-on
           data\_field2\_root   = if\_abap\_behv=>mk-on ) )
      ( key\_field = 3
        %control = value #(
           key\_field  = if\_abap\_behv=>mk-on
           data\_field1\_root    = if\_abap\_behv=>mk-on
           data\_field2\_root   = if\_abap\_behv=>mk-on ) )
       ).
    rba\_dyn = value #(
     ( key\_field = 1
       %control = value #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
     ( key\_field = 2
       %control = value #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
         ).
    read2\_dyn = value #(
     ( key\_field = 1
       %control = value #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
     ( key\_field = 4
       %control = value #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
         ).
    op\_tab\_read = value #(
       ( op = IF\_ABAP\_BEHV=>op-r-read
         entity\_name = 'DEMO\_MANAGED\_ROOT'
         instances   = ref #( read\_dyn )
         results     = ref #( read\_dyn\_result ) )
       ( op = IF\_ABAP\_BEHV=>op-r-read\_ba
         entity\_name = 'DEMO\_MANAGED\_ROOT'
         sub\_name    = '\_CHILD'
         instances   = ref #( rba\_dyn )
         results     = ref #( rba\_dyn\_result ) )
       ( op = IF\_ABAP\_BEHV=>op-r-read
         entity\_name = 'DEMO\_MANAGED\_CHILD'
         instances   = ref #( read2\_dyn )
         results     = ref #( read2\_dyn\_result ) )
                          ).
    READ ENTITIES OPERATIONS op\_tab\_read
      FAILED   DATA(failed2)
      REPORTED DATA(reported2).
    out->write\_text( \`Responses for EML READ operation:\` ).
    output\_failed\_tab( f\_tab = failed2 ).
    output\_reported\_tab( r\_tab = reported2 ).
    out->write\_text( \`Database entries of root and child entity \` &&
                     \`according to EML READ operations:\`
               )->write( read\_dyn\_result
               )->write( rba\_dyn\_result
               )->write( read2\_dyn\_result ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root.
    DELETE FROM demo\_tab\_child.
  ENDMETHOD.
  METHOD output\_failed\_tab.
    TYPES:
      BEGIN OF ls\_failed\_log,
        root\_name   TYPE abp\_root\_entity\_name,
        entity\_name TYPE abp\_entity\_name,
        key\_field   TYPE i,
        create      TYPE abp\_behv\_flag,
        update      TYPE abp\_behv\_flag,
        delete      TYPE abp\_behv\_flag,
        fail\_cause  TYPE if\_abap\_behv=>t\_fail\_cause,
      END OF ls\_failed\_log.
    DATA:
      lt\_failed\_log TYPE STANDARD TABLE OF ls\_failed\_log
        WITH EMPTY KEY.
    LOOP AT f\_tab ASSIGNING FIELD-SYMBOL(<fail>).
     FIELD-SYMBOLS <lt\_failed\_data> TYPE STANDARD TABLE.
     ASSIGN <fail>-entries->\* TO <lt\_failed\_data>.
     failed\_tab = CORRESPONDING #( DEEP <lt\_failed\_data>  ).
      LOOP AT failed\_tab ASSIGNING FIELD-SYMBOL(<failed\_tab>).
        APPEND VALUE #(   root\_name   = <fail>-root\_name
                          entity\_name = <fail>-entity\_name
                          key\_field   = <failed\_tab>-key\_field
                          create      = <failed\_tab>-%create
                          update      = <failed\_tab>-%update
                          delete      = <failed\_tab>-%delete
                          fail\_cause  = <failed\_tab>-%fail-cause
                      ) TO  lt\_failed\_log.
        ENDLOOP.
    ENDLOOP.
    IF lt\_failed\_log IS NOT INITIAL.
      out->write\_text(
             \`FAILED response:\`
             )->write( lt\_failed\_log ).
     ELSE.
      out->write\_text( \`No FAILED response.\` ).
     ENDIF.
  ENDMETHOD.
  METHOD output\_reported\_tab.
    TYPES:
      BEGIN OF ls\_reported\_log,
        root\_name   TYPE abp\_root\_entity\_name,
        entity\_name TYPE abp\_entity\_name,
        key\_field   TYPE i,
        severity    TYPE if\_abap\_behv\_message=>t\_severity,
        message     TYPE string,
      END OF ls\_reported\_log.
    DATA:
      lt\_reported\_log TYPE STANDARD TABLE OF
          ls\_reported\_log WITH EMPTY KEY.
    LOOP AT r\_tab ASSIGNING FIELD-SYMBOL(<report>).
      FIELD-SYMBOLS <lt\_reported\_data> TYPE STANDARD TABLE.
      ASSIGN <report>-entries->\* TO <lt\_reported\_data>.
      reported\_tab = CORRESPONDING #( DEEP <lt\_reported\_data> ).
    LOOP AT reported\_tab ASSIGNING FIELD-SYMBOL(<reported\_tab>).
        APPEND VALUE #(
          root\_name   = <report>-root\_name
          entity\_name = <report>-entity\_name
          key\_field   = <reported\_tab>-key\_field
          message     = <reported\_tab>-%msg->if\_message~get\_text( )
          severity    = <reported\_tab>-%msg->m\_severity
                      ) TO  lt\_reported\_log.
        ENDLOOP.
    ENDLOOP.
    IF lt\_reported\_log IS NOT INITIAL.
      out->write\_text(
             \`REPORTED response:\`
             )->write( lt\_reported\_log ).
     ELSE.
      out->write\_text( \`No REPORTED response.\` ).
    ENDIF.
  ENDMETHOD.
  METHOD output\_mapped\_tab.
  TYPES:
      BEGIN OF ls\_mapped\_log,
       root\_name   TYPE abp\_root\_entity\_name,
       entity\_name TYPE abp\_entity\_name,
       cid TYPE abp\_behv\_cid,
       key\_field type i,
      END OF ls\_mapped\_log.
    DATA:
      lt\_mapped\_log TYPE STANDARD TABLE OF
          ls\_mapped\_log WITH EMPTY KEY.
    LOOP AT m\_tab ASSIGNING FIELD-SYMBOL(<mapped>).
      FIELD-SYMBOLS <lt\_mapped\_data> TYPE STANDARD TABLE.
      ASSIGN <mapped>-entries->\* TO <lt\_mapped\_data>.
      mapped\_tab = CORRESPONDING #( DEEP <lt\_mapped\_data> ).
    LOOP AT mapped\_tab ASSIGNING FIELD-SYMBOL(<mapped\_tab>).
        APPEND VALUE #(
          root\_name   = <mapped>-root\_name
          entity\_name = <mapped>-entity\_name
          key\_field   = <mapped\_tab>-key\_field
          cid         = <mapped\_tab>-%cid
                      ) TO  lt\_mapped\_log.
        ENDLOOP.
    ENDLOOP.
    IF lt\_mapped\_log IS NOT INITIAL.
      out->write\_text(
             \`MAPPED response:\`
             )->write( lt\_mapped\_log ).
     ELSE.
      out->write\_text( \`No MAPPED response.\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   Dynamic ABAP EML modify operations using MODIFY ENTITIES OPERATIONS
    
    Various operations on data sets of the root and child entity are executed. For that purpose, an internal table with type ABP\_BEHV\_CHANGES\_TAB must be defined. This table includes parameters (in this case, among others, other tables holding demo data and being typed with the required BDEF derived type) to carry out the modifications. Errors are intentionally caused for the modify operations so that the FAILED and REPORTED parameters are filled with entries. Furthermore, the MAPPED response is included. All three response parameters are of type ABP\_BEHV\_RESPONSE\_TAB. The program provides methods to display selected parts of those responses that are put into internal tables that are displayed in the output screen as well as the database table entries after the modifications. The saving of the modification is triggered by a COMMIT ENTITIES statement.
    
-   Dynamic ABAP EML read operations using READ ENTITIES OPERATIONS
    
    Various read operations on data sets of the root and child entity are executed. For that purpose, an internal table with type ABP\_BEHV\_RETRIEVALS\_TAB must be defined. This table includes parameters (in this case, among others, other tables holding demo data and being typed with the required BDEF derived type) to carry out the reading. Errors are intentionally caused for the read operations so that the FAILED parameter is filled with entries (the REPORTED parameter does not get filled by the [RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") in this example). Also here, the response parameter is of type ABP\_BEHV\_RESPONSE\_TAB. Same as above, the responses are put into an internal table that are displayed in the output screen (note that this internal table is shared for the output of failures for the modify and read operations in this example, i. e. the columns for create, delete and update are not relevant for read operations and must be ignored) as well as the database table entries after the read operation.