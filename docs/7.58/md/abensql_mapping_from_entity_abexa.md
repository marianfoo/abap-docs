---
title: "ABAP SQL Statements with the Addition MAPPING FROM ENTITY"
description: |
  This example demonstrates ABAP SQL statements using the additions MAPPING FROM ENTITY. The internal tables and work areas used in the example are typed with BDEF derived types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). These types
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_mapping_from_entity_abexa.htm"
abapFile: "abensql_mapping_from_entity_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abensql", "mapping", "from", "entity", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [Type Mapping for RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_type_mapping.htm) →  [ABAP SQL Statements with MAPPING FROM ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmapping_from_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Statements%20with%20the%20Addition%20MAPPING%20FROM%20ENTITY%2C%20ABENSQL_MAPPING_FROM_ENTITY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion%20for%20improvement:)

ABAP SQL Statements with the Addition MAPPING FROM ENTITY

This example demonstrates ABAP SQL statements using the additions MAPPING FROM ENTITY. The internal tables and work areas used in the example are typed with [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). These types are based on a simple [managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm) [RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_MAP and its child entity DEMO\_MANAGED\_CHILD\_MAP which is not used in this example.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_MAP
  as select from demo\_tab\_root\_3
  composition \[1..\*\] of DEMO\_MANAGED\_CHILD\_MAP as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_MAP is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_map unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT\_MAP
persistent table demo\_tab\_root\_3
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  field(readonly:update) key\_field;
  mapping for demo\_struc corresponding
  {
    key\_field = b\_key\_field;
    field1 = b\_field1;
    field2 = b\_field2;
    field3 = b\_field3;
    field4 = b\_field4;
  }
  mapping for demo\_struc2 control demo\_struc2\_ctrl corresponding
  {
    key\_field = a\_key\_field control a\_ctrl\_key\_field;
    field1 = a\_field1 control a\_ctrl\_field1;
    field2 = a\_field2 control a\_ctrl\_field2;
    field3 = a\_field3 control a\_ctrl\_field3;
    field4 = a\_field4 control a\_ctrl\_field4;
  }
  mapping for demo\_struc3 control demo\_struc3\_ctrl corresponding
  {
     key\_field = z\_key\_field control z\_ctrl\_key\_field;
     field1 = z\_field1 control z\_ctrl\_field1;
     field2 = z\_field2 control z\_ctrl\_field2;
     field3 = z\_field3 control z\_ctrl\_field3;
     field4 = z\_field4 control z\_ctrl\_field4;
  }
}
define behavior for DEMO\_MANAGED\_CHILD\_MAP alias child
persistent table demo\_tab\_child\_3
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  field(readonly:update) key\_field\_child;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, one ABP is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_MAP. It is not relevant in this example.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_mapping\_from\_entty DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs,
      display\_dbtab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_mapping\_from\_entty IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for ABAP SQL addition \` &&
                      \`MAPPING FROM ENTITY\`
    )->line( ).
    "INSERT
    DATA ins\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map.
    DATA ins\_wa TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
    DATA ins\_wa2 TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
    ins\_wa = VALUE #( key\_field = 1
                      field1 = \`ins\_1\`
                      field2 = \`ins\_2\`
                      field3 = 100
                      field4 = 101 ).
    ins\_wa2 = VALUE #( key\_field = 2
                       field1 = \`ins\_3\`
                       field2 = \`ins\_4\`
                       field3 = 102
                       field4 = 103 ).
    ins\_tab = VALUE #( ( key\_field = 3
                         field1 = \`ins\_5\`
                         field2 = \`ins\_6\`
                         field3 = 104
                         field4 = 105 )
                       ( key\_field = 4
                         field1 = \`ins\_7\`
                         field2 = \`ins\_8\`
                         field3 = 106
                         field4 = 107 ) ).
    INSERT demo\_tab\_root\_3 FROM @ins\_wa MAPPING FROM ENTITY.
    INSERT demo\_tab\_root\_3 FROM TABLE @ins\_tab MAPPING FROM ENTITY.
    INSERT INTO demo\_tab\_root\_3 VALUES @ins\_wa2 MAPPING FROM ENTITY.
    out->write\_doc( \`Database table entries after INSERT statements:\` ).
    display\_dbtab( ).
    "UPDATE
    DATA up\_tab TYPE TABLE FOR UPDATE demo\_managed\_root\_map.
    DATA up\_wa TYPE STRUCTURE FOR UPDATE demo\_managed\_root\_map.
    up\_wa = VALUE #( key\_field = 1
                     field1 = \`up\_1\`
                     field2 = \`up\_2\`
                     field3 = 200
                     field4 = 201 ).
    up\_tab = VALUE #( ( key\_field = 2
                        field1 = \`upd\_3\`
                        field2 = \`upd\_4\`
                        field3 = 202
                        field4 = 203 )
                      ( key\_field = 3
                        field1 = \`upd\_5\`
                        field2 = \`upd\_6\`
                        field3 = 204
                        field4 = 205 ) ).
    UPDATE demo\_tab\_root\_3 FROM @up\_wa MAPPING FROM ENTITY.
    UPDATE demo\_tab\_root\_3 FROM TABLE @up\_tab MAPPING FROM ENTITY.
    out->write\_doc( \`Database table entries after UPDATE statements:\` ).
    display\_dbtab( ).
    up\_wa = VALUE #( key\_field = 1
                     field1 = \`set\_7\`
                     field2 = \`set\_8\`
                     field3 = 206
                     field4 = 207
                     %control = VALUE #(
                                 key\_field = if\_abap\_behv=>mk-on
                                 field1    = if\_abap\_behv=>mk-off
                                 field2    = if\_abap\_behv=>mk-on
                                 field3    = if\_abap\_behv=>mk-off
                                 field4    = if\_abap\_behv=>mk-on ) ).
    up\_tab = VALUE #( ( key\_field = 2
                        field1 = \`set\_9\`
                        field2 = \`set\_10\`
                        field3 = 208
                        field4 = 209
                        %control = VALUE #(
                                    key\_field = if\_abap\_behv=>mk-on
                                    field1    = if\_abap\_behv=>mk-on
                                    field2    = if\_abap\_behv=>mk-off
                                    field3    = if\_abap\_behv=>mk-on
                                    field4    = if\_abap\_behv=>mk-off )
                       )
                       ( key\_field = 3
                         field1 = \`set\_11\`
                         field2 = \`set\_12\`
                         field3 = 210
                         field4 = 211
                         %control = VALUE #(
                                     key\_field = if\_abap\_behv=>mk-on
                                     field1    = if\_abap\_behv=>mk-off
                                     field2    = if\_abap\_behv=>mk-on
                                     field3    = if\_abap\_behv=>mk-off
                                     field4    = if\_abap\_behv=>mk-on )
                       ) ).
    UPDATE demo\_tab\_root\_3 FROM @up\_wa
      INDICATORS SET STRUCTURE %control MAPPING FROM ENTITY.
    UPDATE demo\_tab\_root\_3 FROM TABLE @up\_tab
      INDICATORS SET STRUCTURE %control MAPPING FROM ENTITY.
    out->write\_doc( \`Database table entries after UPDATE statements \` &&
                  \`with the addition INDICATORS SET STRUCTURE:\` ).
    display\_dbtab( ).
    "MODIFY
    DATA mod\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map.
    DATA mod\_wa TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
    mod\_wa = VALUE #( key\_field = 1
                      field1 = \`mod\_1\`
                      field2 = \`mod\_2\`
                      field3 = 300
                      field4 = 301 ).
    mod\_tab = VALUE #( ( key\_field = 4
                         field1 = \`mod\_3\`
                         field2 = \`mod\_4\`
                         field3 = 302
                         field4 = 303 )
                       ( key\_field = 5
                         field1 = \`mod\_5\`
                         field2 = \`mod\_6\`
                         field3 = 304
                         field4 = 305 ) ).
    MODIFY demo\_tab\_root\_3 FROM @mod\_wa MAPPING FROM ENTITY.
    MODIFY demo\_tab\_root\_3 FROM TABLE @mod\_tab MAPPING FROM ENTITY.
    out->write\_doc( \`Database table entries after MODIFY statements:\` ).
    display\_dbtab( ).
    "DELETE
    DATA del\_tab TYPE TABLE FOR DELETE demo\_managed\_root\_map.
    DATA del\_wa TYPE STRUCTURE FOR DELETE demo\_managed\_root\_map.
    del\_wa = VALUE #( key\_field = 1  ).
    del\_tab = VALUE #( ( key\_field = 4 )
                       ( key\_field = 5 ) ).
    DELETE demo\_tab\_root\_3 FROM @del\_wa MAPPING FROM ENTITY.
    DELETE demo\_tab\_root\_3 FROM TABLE @del\_tab MAPPING FROM ENTITY.
    out->write\_doc( \`Database table entries after DELETE statements:\` ).
    display\_dbtab( ).
  ENDMETHOD.
  METHOD display\_dbtab.
    SELECT \* FROM demo\_tab\_root\_3 INTO TABLE @DATA(itab).
    SORT itab BY key\_field ASCENDING.
    out->write( itab ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

The example shows the four ABAP SQL statements [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm), [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm), and [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm) with the addition MAPPING FROM ENTITY. For each statement, a structure and an internal table are filled with sample values. Both structure and internal table are typed with the [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE STRUCTURE FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm) and [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) respectively. After the statements, a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement is used to retrieve the entries from a database table and insert them into an internal table to visualize the effect of the ABAP SQL statements.

The example for UPDATE also shows the addition [INDICATORS SET STRUCTURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_indicator.htm).