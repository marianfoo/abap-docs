---
title: "ABAP EML - CORRESPONDING, Type Mapping"
description: |
  This example demonstrates type mapping variants in ABAP EML using the CORRESPONDING operator with a simple managed RAP BO. Data model The CDS data model consists of the root entity DEMO_MANAGED_ROOT_MAP and its child entity DEMO_MANAGED_CHILD_MAP which is not used in this example. Root entity:
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_type_mapping_abexa.htm"
abapFile: "abeneml_type_mapping_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abeneml", "type", "mapping", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [Type Mapping for RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_type_mapping.htm) →  [CORRESPONDING, Type Mapping for ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_corresponding.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20CORRESPONDING%2C%20Type%20Mapping%2C%20ABENEML_TYPE_MAPPING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

ABAP EML - CORRESPONDING, Type Mapping

This example demonstrates type mapping variants in ABAP EML using the CORRESPONDING operator with a simple managed RAP BO.

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
CLASS cl\_demo\_rap\_eml\_type\_mapping DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_type\_mapping IMPLEMENTATION.
  METHOD main.
    DATA:
      ent\_in\_tab   TYPE TABLE FOR UPDATE demo\_managed\_root\_map,
      ent\_out\_tab  TYPE TABLE FOR READ RESULT demo\_managed\_root\_map,
      ty1\_tab      TYPE STANDARD TABLE OF demo\_struc1,
      ty2\_tab      TYPE STANDARD TABLE OF demo\_struc2,
      ty2\_ctrl\_tab TYPE STANDARD TABLE OF demo\_struc2\_ctrl,
      ty3\_tab      TYPE STANDARD TABLE OF demo\_struc3,
      ty3\_ctrl\_tab TYPE STANDARD TABLE OF demo\_struc3\_ctrl,
      tmp          TYPE TABLE OF demo\_managed\_root\_map.
    out->begin\_section(
    'Type mapping variants in ABAP EML' &
    ' using the CORRESPONDING operator'
                      ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*MAPPING FROM ENTITY
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    CLEAR: ent\_in\_tab, ty2\_tab.
    ent\_in\_tab = VALUE #( ( key\_field = 1 field1 = 'aaa' field2 = 'bbb'
                            field3 = 1 field4 = 2 ) ).
    out->write\_doc( \`<b>Syntax:</b>\`
    )->begin\_code( \`ty2\_tab\` ).
    ty2\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM ENTITY ).
    out->end\_code( \`ty2\_tab\` ).
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     \`<ul><li>The table <code>ent\_in\_tab</code> shows values of \` &&
     \` the internal table's first line.\` &&
     \` It is typed with the input derived type <code>TYPE TABLE FOR\` &&
     \` UPDATE</code>.</li><li>The table <code>ty2\_tab</code> \` &&
     \` is a non-RAP-native internal table. It shows the result  \` &&
     \` of applying the <code>CORRESPONDING</code> operator with  \` &&
     \` <code>MAPPING FROM ENTITY</code>.</li></ul>\` )
     )->write( data = ent\_in\_tab\[ 1 \]-%data name = 'ent\_in\_tab'
     )->write( ty2\_tab ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*MAPPING TO ENTITY
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    CLEAR: ent\_out\_tab, ty3\_tab.
    ty3\_tab = VALUE #(
      ( z\_key\_field = 2 z\_field1 = 'ccc'
        z\_field2 = 'ddd' z\_field3 = 3 z\_field4 = 4 ) ).
    out->write\_doc( \`<b>Syntax:</b>\`
    )->begin\_code( \`ent\_out\_tab\` ).
    ent\_out\_tab = CORRESPONDING #( ty3\_tab MAPPING TO ENTITY ).
    out->end\_code( \`ent\_out\_tab\` ).
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`<ul><li>The table <code>ty3\_tab</code> \` &&
      \` is a non-RAP-native internal table. It shows values of \` &&
      \` the internal table's first line.\` &&
      \` <li>The table <code>ent\_out\_tab</code> \` &&
      \` is typed with the output derived type <code>TYPE TABLE FOR \` &&
      \` READ RESULT</code> and shows the result  \` &&
      \` of applying the <code>CORRESPONDING</code> operator with  \` &&
      \` <code>MAPPING TO ENTITY</code>.</li></ul>\` )
      )->write( ty3\_tab
      )->write( data = ent\_out\_tab\[ 1 \]-%data name = 'ent\_out\_tab'
      ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*Syntax for non-BDEF control types
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    CLEAR: ty2\_tab, ent\_in\_tab.
    ent\_in\_tab = VALUE #(
        ( key\_field = 3 field1 = 'eee' field2 = 'fff' field3 = 5
          field4 = 6
          %control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                              field1    = if\_abap\_behv=>mk-on
                              field2    = if\_abap\_behv=>mk-on
                              field3    = if\_abap\_behv=>mk-on
                              field4    = if\_abap\_behv=>mk-off ) ) ).
    out->line(
      )->write\_doc(
      \`<b><i>Example: Syntax for control types</i></b>\` &&
      \`<br/><b>Syntax:</b>\`
      )->begin\_code( \`ty2\_ctrl\_tab\` ).
    ty2\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM ENTITY ).
    ty2\_ctrl\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM ENTITY ).
    out->end\_code( \`ty2\_ctrl\_tab\` ).
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`<p>Use case: Control information is mapped to a non-BDEF \` &&
      \`derived type</p><ul><li>The table <code>ent\_in\_tab</code> \` &&
      \` is typed with the input derived type <code>TYPE TABLE FOR \` &&
      \`UPDATE</code> and shows values of the internal table's first\` &&
      \` line.</li><li>The table <code>ent\_in\_tab\_ctrl</code>\` &&
      \` shows the %control information of the \` &&
      \` table's first line.</li>\` &&
      \` <li><code>ty2\_tab</code> is a non-RAP-native\` &&
      \` internal table \` &&
      \`showing the result of the type mapping after applying the \` &&
      \`<code>CORRESPONDING</code> operator with <code>MAPPING FROM\` &&
      \` ENTITY</code> taking the control information into\` &&
      \` consideration (table <code>ty2\_ctrl\_tab</code>).</li></ul>\` )
      )->write( data = ent\_in\_tab\[ 1 \]-%data name = 'ent\_in\_tab'
      )->write( data = ent\_in\_tab\[ 1 \]-%control name
           = 'ent\_in\_tab\_ctrl'
      )->write( ty2\_tab
      )->write( ty2\_ctrl\_tab ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*USING CONTROL
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    CLEAR: ent\_in\_tab, ty1\_tab.
    ent\_in\_tab = VALUE #(
      ( key\_field = 4 field1 = 'ggg' field2 = 'hhh'
                       field3 = 7 field4 = 8
        %control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                            field1    = if\_abap\_behv=>mk-off
                            field2    = if\_abap\_behv=>mk-on
                            field3    = if\_abap\_behv=>mk-on
                            field4    = if\_abap\_behv=>mk-on ) ) ).
    out->line(
    )->write\_doc( \`<b>Syntax:</b>\`
    )->begin\_code( \`ty1\_tab\` ).
    ty1\_tab = CORRESPONDING #( ent\_in\_tab USING CONTROL ).
    out->end\_code( \`ty1\_tab\` ).
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
    \`<ul><li>The table <code>ent\_in\_tab</code> \` &&
    \` is typed with the input derived type <code>TYPE TABLE FOR \` &&
    \`UPDATE</code> and shows values of the internal table's first\` &&
    \` line.</li><li>The table <code>ent\_in\_tab\_ctrl</code>\` &&
    \` shows the %control information of the table's\` &&
    \` first line.</li>\` &&
    \`<li><code>ty1\_tab</code> is a non-RAP-native internal table\` &&
    \` showing the result of the type mapping after applying the \` &&
    \`<code>CORRESPONDING</code> operator with <code>USING CONTROL\` &&
    \`</code>.</li></ul>\` )
    )->write( data = ent\_in\_tab\[ 1 \]-%data name = 'ent\_in\_tab'
    )->write( data = ent\_in\_tab\[ 1 \]-%control name
          = 'ent\_in\_tab\_ctrl'
    )->write( ty1\_tab ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*MAPPING FROM ENTITY USING CONTROL
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    CLEAR: ent\_in\_tab, ty2\_tab.
    ent\_in\_tab = VALUE #(
    ( key\_field = 5 field1 = 'iii' field2 = 'jjj'
                    field3 = 9 field4 = 10
      %control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                          field1    = if\_abap\_behv=>mk-on
                          field2    = if\_abap\_behv=>mk-off
                          field3    = if\_abap\_behv=>mk-on
                          field4    = if\_abap\_behv=>mk-on ) ) ).
    out->line(
    )->write\_doc( \`<b>Syntax:</b>\`
    )->begin\_code( \`ty2\_tab\_2\` ).
    ty2\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM
                                          ENTITY USING CONTROL ).
    out->end\_code( \`ty2\_tab\_2\` ).
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`<ul><li>The table <code>ent\_in\_tab</code> \` &&
      \` is typed with the input derived type <code>TYPE TABLE FOR \` &&
      \`UPDATE</code> and shows values of the internal table's first\` &&
      \` line.</li><li>The table <code>ent\_in\_tab\_ctrl</code>\` &&
      \` shows the %control information of the table's\` &&
      \` first line.</li> <code>ty1\_tab</code>\` &&
      \`  is a non-RAP-native internal table showing\` &&
      \` the result of the type mapping after applying the \` &&
      \`<code>CORRESPONDING</code> operator with <code>MAPPING FROM \` &&
      \`ENTITY USING CONTROL</code>.</li></ul>\` )
      )->write( data = ent\_in\_tab\[ 1 \]-%data name = 'ent\_in\_tab'
      )->write( data = ent\_in\_tab\[ 1 \]-%control name =
          'ent\_in\_tab\_ctrl'
      )->write( ty2\_tab ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*CHANGING CONTROL
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    CLEAR: ent\_in\_tab, ty1\_tab.
    ty1\_tab = VALUE #(
    "field1 not specified
    ( key\_field = 6  field2 = 'kkk' field3 = 11 field4 = 12 ) ).
    out->line(
    )->write\_doc( \`<b>Syntax:</b>\`
    )->begin\_code( \`ent\_in\_tab\_2\` ).
    ent\_in\_tab = CORRESPONDING #( ty1\_tab CHANGING CONTROL ).
    out->end\_code( \`ent\_in\_tab\_2\` ).
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`<ul><li>The table <code>ty1\_tab</code> \` &&
      \`is a non-RAP-native internal table showing values of the\` &&
      \` table's first line.</li><li>The table\` &&
      \` <code>ent\_in\_tab</code>\` &&
      \` is typed with the input derived type <code>TYPE TABLE FOR \` &&
      \`UPDATE</code> and shows values of the internal table's first\` &&
      \` line as a result of the type mapping after applying the \` &&
      \`<code>CORRESPONDING</code> operator with <code>CHANGING \` &&
      \`CONTROL</code></li><li>Likewise, the table\` &&
      \` <code>ent\_in\_tab\_ctrl</code> shows the %control information\` &&
      \` of the table's first line.</li></ul>\` )
      )->write( ty1\_tab
      )->write( data = ent\_in\_tab\[ 1 \]-%data name = 'ent\_in\_tab'
      )->write( data = ent\_in\_tab\[ 1 \]-%control name =
          'ent\_in\_tab\_ctrl' ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*CHANGING CONTROL (including a preceding mapping)
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    CLEAR: ent\_in\_tab, ty2\_tab.
    ty2\_tab = VALUE #(
    ( a\_key\_field = 7 a\_field1 = 'lll' a\_field3 = 13  a\_field4 = 14 ) ).
    out->line(
    )->write\_doc( \`<b>Syntax:</b>\`
    )->begin\_code( \`ent\_in\_tab\_3\` ).
    tmp        = CORRESPONDING #( ty2\_tab MAPPING TO ENTITY ).
    ent\_in\_tab = CORRESPONDING #( tmp CHANGING CONTROL ).
    out->end\_code( \`ent\_in\_tab\_3\` ).
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`<ul><li>The table <code>ty2\_tab</code> \` &&
      \`is a non-RAP-native internal table showing values \` &&
      \` of the table's first line.\` &&
      \` A mapping for the non-BDEF-derived type is done \` &&
      \`separately using the helper variable <code>tmp</code>.</li>\` &&
      \`<li>The table <code>ent\_in\_tab</code>\` &&
      \` is typed with the input derived type <code>TYPE TABLE FOR \` &&
      \`UPDATE</code> and shows values of the internal table's first\` &&
      \` line as a result of the type mapping after applying the \` &&
      \`<code>CORRESPONDING</code> operator with <code>CHANGING \` &&
      \`CONTROL</code>.</li><li>Likewise, the table\` &&
      \` <code>ent\_in\_tab\_ctrl</code> shows the %control information\` &&
      \` of the table's first line.</li></ul>\` )
       )->write( ty2\_tab
       )->write( data = ent\_in\_tab\[ 1 \]-%data name = 'ent\_in\_tab'
       )->write(
          data = ent\_in\_tab\[ 1 \]-%control name = 'ent\_in\_tab\_ctrl' ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class. The following variants are covered:

-   ntype = CORRESPONDING dtype|#( in\_d\_type MAPPING FROM ENTITY ).
    
    An internal table typed with the input derived type TYPE TABLE FOR UPDATE gets filled, i. e. values for data fields are specified for a single line. A non-BDEF-derived type (i. e. a non-RAP-native DDIC type), which has different field names than those of the RAP BO, is given the values using the CORRESPONDING operator variant mentioned above. As a prerequisite, a mapping for the non-BDEF-derived type is specified in the BDEF.
    
    The output window shows two internal tables with the single line that gets created: one internal table typed with the derived type, the other one with the non-BDEF-derived type.
    
-   out\_d\_type = CORRESPONDING dtype|#( ntype MAPPING TO ENTITY ).
    
    An internal table typed with a non-BDEF-derived type gets filled, i. e. values for data fields are specified for a single line. The field names differ from those of the RAP BO. An internal table typed with the output derived type TYPE TABLE FOR READ RESULT receives the values using the CORRESPONDING operator variant mentioned above. As a prerequisite, a mapping for the non-BDEF-derived type is specified in the BDEF.
    
    The output window shows two internal tables with the single line that gets created: one internal table typed with the derived type, the other one with the non-BDEF-derived type.
    
-   Excursion: Syntax for non-BDEF control types
    
    The example uses the variant MAPPING FROM ENTITY and includes control information that is available in another non-BDEF-derived type. As a prerequisite, a mapping for the non-BDEF-derived type and the type that holds the control information is specified in the BDEF (MAPPING ... CONTROL ...). An internal table typed with the input derived type TYPE TABLE FOR UPDATE gets filled, i. e. values for data fields and the %control structure are specified. One component of the %control structure gets disabled. A non-BDEF-derived type, that has different field names than those of the RAP BO, receives the values using the CORRESPONDING operator variant mentioned above. As a second step, the partner control type receives the values from the %control structure.
    
    The output window shows the one line of the internal table as well as the %control structure for the derived type that get created. Likewise, the internal tables for the non-BDEF-derived type and the type control information is displayed demonstrating the effect of applying the CORRESPONDING operator variant. The field that is disabled in the %control structure is consequently left blank in the table typed with the partner control type.
    
-   ntype = CORRESPONDING dtype|#( in\_d\_type USING CONTROL ).
    
    An internal table typed with the input derived type TYPE TABLE FOR UPDATE gets filled, i. e. values for data fields and the %control structure are specified for a single line. One component of the %control structure gets disabled. A non-BDEF-derived type, that h same field names as those of the RAP BO, receives the values using the CORRESPONDING operator variant mentioned above. Here, the %control structure values are taken into consideration. A mapping for the non-BDEF-derived type is not needed in the BDEF in this case.
    
    The output window shows the data fields and the %control structure values that are specified for the derived type and the effect of applying the CORRESPONDING operator variant. The internal table typed with the non-BDEF-derived type receives the values. However, field1, which is marked as disabled in the %control structure of the derived type, does not contain a value.
    
-   ntype = CORRESPONDING dtype|#( in\_d\_type MAPPING FROM ENTITY USING CONTROL ).
    
    An internal table typed with the input derived type TYPE TABLE FOR UPDATE gets filled, i. e. values for data fields and the %control structure are specified for a single line. One component of the %control structure gets disabled. A non-BDEF-derived type, that h different field names than those of the RAP BO, receives the values using the CORRESPONDING operator variant mentioned above. Here, the %control structure values and the mapping are taken into consideration. As a prerequisite, a mapping for the non-BDEF-derived type must be specified in the BDEF in this case.
    
    The output window shows the data fields and the %control structure values that are specified for the derived type and the effect of applying the CORRESPONDING operator variant. The internal table typed with the non-BDEF-derived type receives the values. However, field2, which is marked as disabled in the %control structure of the derived type, does not contain a value.
    
-   in\_d\_type = CORRESPONDING dtype|#( ntype CHANGING CONTROL ).
    
    An internal table typed with a non-BDEF-derived type gets filled, i. e. values for data fields are specified for a single line. All data fields are specified except one. An internal table, that is typed with the input derived type TYPE TABLE FOR UPDATE, receives the values using the CORRESPONDING operator variant mentioned above. Since the non-BDEF-derived type's field names are the those of the RAP BO, a mapping for the non-BDEF-derived type is not need BDEF in this case.
    
    The output window shows the values of the data fields of the single line that is created for an internal table typed with a non-BDEF-derived type. The following two tables demonstrate the effect of applying the CORRESPONDING operator variant. The internal table typed with derived type receives the values. Due to the fact that a value has not been specified for a field in the non-BDEF-derived type, the %control structure of the derived type shows that the particular field is marked as disabled.
    
-   Excursion: Variant with CHANGING CONTROL including a preceding mapping
    
    An internal table typed with a non-BDEF-derived type gets filled, i. e. values for data fields are specified for a single line. All data fields are specified except one. An internal table, that is typed with the input derived type TYPE TABLE FOR UPDATE, receives the values using the CORRESPONDING operator variant with the addition USING CONTROl. The non-BDEF-derived type's field names are different from those of the RAP BO. A mapping for the non-BDEF-derived type is required in the BDEF. The mapping must be done separately in ABAP. In this example, a helper variable typed with the entity type is used for a separate statement with the CORRESPONDING operator and the addition MAPPING TO ENTITY succeeded by a statement with the addition CHANGING CONTROL also using the helper variable.
    
    The output shows the values of the data fields of the single line that is created for an internal table typed with a non-BDEF-derived type. The following two tables demonstrate the effect of applying the CORRESPONDING operator variant. The internal table typed with derived type receives the values. Due to the fact that a value has not been specified for a field in the non-BDEF-derived type, the %control structure of the derived type shows that the particular field is marked as disabled.