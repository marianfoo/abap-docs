---
title: "Internal Tables, Loop with Key Specified"
description: |
  The example demonstrates the execution of the statement LOOP AT itab with various table keys. Source Code REPORT demo_loop_at_itab_using_key. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF spfli_line, carrid   TYPE s
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_at_itab_key_abexa.htm"
abapFile: "abenloop_at_itab_key_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenloop", "itab", "key", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - Basic Form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) → 

Internal Tables, Loop with Key Specified

The example demonstrates the execution of the statement LOOP AT itab with various table keys.

Source Code

REPORT demo\_loop\_at\_itab\_using\_key.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF spfli\_line,
        carrid   TYPE spfli-carrid,
        connid   TYPE spfli-connid,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF spfli\_line.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA output TYPE TABLE OF spfli\_line WITH EMPTY KEY.
    DATA spfli\_tab TYPE HASHED TABLE
                   OF spfli\_line
                   WITH UNIQUE KEY primary\_key
                     COMPONENTS carrid connid
                   WITH NON-UNIQUE SORTED KEY city\_from\_to
                     COMPONENTS cityfrom cityto
                   WITH NON-UNIQUE SORTED KEY city\_to\_from
                     COMPONENTS cityto cityfrom.
    FIELD-SYMBOLS <spfli> LIKE LINE OF spfli\_tab.
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           ORDER BY carrid, connid
           INTO TABLE @spfli\_tab.
    CLEAR output.
    out->next\_section( 'LOOP without USING KEY' ).
    LOOP AT spfli\_tab ASSIGNING <spfli>.
      output = VALUE #( BASE output ( <spfli> ) ).
    ENDLOOP.
    out->write( output ).
    CLEAR output.
    out->next\_section( 'LOOP with USING KEY cityfrom cityto' ).
    LOOP AT spfli\_tab ASSIGNING <spfli> USING KEY city\_from\_to.
      output = VALUE #( BASE output ( <spfli> ) ).
    ENDLOOP.
    out->write( output ).
    CLEAR output.
    out->next\_section( 'LOOP with USING KEY cityto cityfrom' ).
    LOOP AT spfli\_tab ASSIGNING <spfli> USING KEY city\_to\_from.
      output = VALUE #( BASE output ( <spfli> ) ).
    ENDLOOP.
    out->write( output ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The table spfli\_tab is a hashed table with an unique primary key and two non-unique sorted secondary keys.

-   The first LOOP takes place without a key being specified. The table output is in the order in which the table was filled. This means it is sorted by the fields entered after ORDER BY in the SELECT statement.

-   The other two LOOP loops are performed when one of the secondary table keys city\_from\_to or city\_to\_from is specified.