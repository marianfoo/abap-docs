---
title: "ABAP EML - MODIFY, Variants"
description: |
  This example demonstrates the variants of the ABAP EML MODIFY statement to manipulate a simple managed RAP BO(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm 'Glossary Entry'): -   MODIFY ENTITY bdef -   MODIFY ENTITIES OF bdef -   MODIFY ENTITIES OPERATIONS op_ta
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_modify_alternatives_abexa.htm"
abapFile: "abeneml_modify_alternatives_abexa.htm"
keywords: ["select", "update", "delete", "do", "while", "if", "case", "try", "method", "class", "data", "internal-table", "abeneml", "modify", "alternatives", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities.htm) →  [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_modify_examples.htm) → 

ABAP EML - MODIFY, Variants

This example demonstrates the variants of the ABAP EML MODIFY statement to manipulate a simple managed [RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry"):

-   MODIFY ENTITY bdef
-   MODIFY ENTITIES OF bdef
-   MODIFY ENTITIES OPERATIONS op\_tab

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT and its child entity DEMO\_MANAGED\_CHILD. Furthermore, it contains an association to an entity (DEMO\_MANAGED\_ASSOC) that is not part of the [composition tree](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_tree_glosry.htm "Glossary Entry").

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

For the above CDS behavior definition, there is no [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") created and needed since only standard [CRUD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry") operations are used in the example.

Source Code

REPORT demo\_rap\_eml\_modify.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
               \`MODIFY Statements Alternatives\`
                   ).
    out->begin\_section(
                 \`MODIFY ENTITY bdef\`
                ).
    "MODIFY ENTITY
    MODIFY ENTITY demo\_managed\_root
      CREATE SET FIELDS WITH VALUE #(
        ( %cid = 'cid1' key\_field = 1
                        data\_field1\_root = 'aaa'
                        data\_field2\_root = 'bbb' )
        ( %cid = 'cid2' key\_field = 2
                        data\_field1\_root = 'ccc'
                        data\_field2\_root = 'ddd' ) )
      CREATE BY \\\_child SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #( ( %cid = 'cid3'
                               data\_field1\_child = 'eee'
                               data\_field2\_child = 'fff' )
                           ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #( ( %cid = 'cid4'
                               data\_field1\_child = 'ggg'
                               data\_field2\_child = 'hhh' )
                           ) )
        )
        FAILED   DATA(fail\_mod)
        REPORTED DATA(rep\_mod)
        MAPPED   DATA(map\_mod).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @DATA(create\_tab).
    SELECT \* FROM demo\_tab\_child INTO TABLE @DATA(cba\_tab).
    out->write\_text(
       \`Database table entries after operations using MODIFY ENTITY:\`
               )->write( create\_tab
               )->write( cba\_tab ).
    out->begin\_section(
                 \`MODIFY ENTITIES OF bdef\`
                ).
    initialize\_dbtabs( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "MODIFY ENTITIES OF bdef
    MODIFY ENTITIES OF demo\_managed\_root
    ENTITY demo\_managed\_root
        CREATE SET FIELDS WITH VALUE #(
          ( %cid = 'cid5'
            key\_field = 3
            data\_field1\_root = 'iii'
            data\_field2\_root = 'jjj')
          ( %cid = 'cid6'
            key\_field = 4
            data\_field1\_root = 'kkk'
            data\_field2\_root = 'lll') )
    ENTITY demo\_managed\_root
        UPDATE SET FIELDS WITH VALUE #(
          ( %cid\_ref = 'cid6'
            data\_field1\_root = 'mmm'
            data\_field2\_root = 'nnn') )
    ENTITY demo\_managed\_root
        CREATE BY \\\_child SET FIELDS WITH VALUE #(
          ( %cid\_ref = 'cid5'
            %target = VALUE #( ( %cid = 'cid7'
                                 data\_field1\_child = 'eee'
                                 data\_field2\_child = 'fff' )
                             ) )
          ( %cid\_ref = 'cid6'
            %target = VALUE #( ( %cid = 'cid8'
                                 data\_field1\_child = 'ggg'
                                 data\_field2\_child = 'hhh' )
                             ) ) )
    ENTITY child
        UPDATE SET FIELDS WITH VALUE #(
          ( %cid\_ref = 'cid8'
            data\_field1\_child = 'ooo'
            data\_field2\_child = 'ppp') )
        FAILED   DATA(fail\_mod2)
        REPORTED DATA(rep\_mod2)
        MAPPED   DATA(map\_mod2).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @DATA(create\_tab2).
    SELECT \* FROM demo\_tab\_child INTO TABLE @DATA(cba\_tab2).
    out->write\_text(
   \`Database table entries after operations using MODIFY ENTITIES:\`
               )->write( create\_tab2
               )->write( cba\_tab2 ).
    initialize\_dbtabs( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section(
                 \`MODIFY ENTITIES OPERATIONS op\_tab\`
                ).
    "MODIFY ENTITIES OPERATIONS op\_tab
    DATA: op\_tab           TYPE abp\_behv\_changes\_tab,
          create\_root\_tab  TYPE TABLE FOR CREATE demo\_managed\_root,
          update\_root\_tab  TYPE TABLE FOR UPDATE demo\_managed\_root,
          delete\_root\_tab  TYPE TABLE FOR UPDATE demo\_managed\_root,
          cba       TYPE TABLE FOR CREATE demo\_managed\_root\\\_child,
          update\_child\_tab TYPE TABLE FOR UPDATE demo\_managed\_child,
          delete\_child\_tab TYPE TABLE FOR DELETE demo\_managed\_child.
    create\_root\_tab = VALUE #(
                ( %cid = 'cid1'
                  key\_field = 5
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'aaa'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'bbb'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on )
                ( %cid = 'cid2'
                  key\_field = 6
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'ccc'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'ddd'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on )
                ( %cid = 'cid3'
                  key\_field = 7
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
    cba = VALUE #(
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
               ( key\_field = 6
                 %control-key\_field = if\_abap\_behv=>mk-off
                 data\_field1\_child = 'OOO'
                 %control-data\_field1\_child = if\_abap\_behv=>mk-on
                 data\_field2\_child = 'PPP'
                 %control-data\_field2\_child = if\_abap\_behv=>mk-on ) ).
    delete\_root\_tab = VALUE #( ( key\_field = 7 ) ).
    delete\_child\_tab = VALUE #( ( key\_field = 7 ) ).
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
             sub\_name    = '\_CHILD'
             instances   = REF #( cba ) )
           ( op = if\_abap\_behv=>op-m-update
             entity\_name = 'DEMO\_MANAGED\_CHILD'
             instances   = REF #( update\_child\_tab ) )
           ( op = if\_abap\_behv=>op-m-delete
             entity\_name = 'DEMO\_MANAGED\_CHILD'
             instances   = REF #( delete\_child\_tab ) )
           ).
    MODIFY ENTITIES OPERATIONS op\_tab
      FAILED   DATA(fail\_mod3)
      REPORTED DATA(rep\_mod3)
      MAPPED   DATA(map\_mod3).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @DATA(create\_tab3).
    SELECT \* FROM demo\_tab\_child INTO TABLE @DATA(cba\_tab3).
    out->write\_text(
      \`Database table entries after operations \` &&
      \`using MODIFY ENTITIES OPERATIONS:\`
               )->write( create\_tab3
               )->write( cba\_tab3 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root.
    DELETE FROM demo\_tab\_child.
    DELETE FROM demo\_tab\_assoc.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   MODIFY ENTITY bdef
    
    Two create operations are executed with the statement MODIFY ENTITY for single entities. The one for the root entity, the other for the child entity. For that purpose, two internal tables with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") are created. They include demo values to be shown in the output. The RAP query engine reads the data from the respective database tables into a managed [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") in which the create operations take place using the SET FIELDS additions. The changes are saved with the statement [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm), and, thus, the changed data are persisted to the database tables.
    
-   MODIFY ENTITIES OF bdef
    
    Multiple operations are executed on multiple RAP BO entities. In this case, the following is demonstrated: an update and create operation on data sets of the root entity, a create by association operation and an update operation on the child entity directly. The addition SET FIELDS is used while the internal tables are declared inline holding demo data.
    
-   MODIFY ENTITIES OPERATIONS op\_tab
    
    The example demonstrates a dynamic modify operation. There are various operations on data sets of the root and child entity. For that purpose, an internal table with type ABP\_BEHV\_CHANGES\_TAB must be defined. This table includes parameters (in this case, among others, other tables holding demo data and being typed with the required BDEF derived type) to carry out the modifications.