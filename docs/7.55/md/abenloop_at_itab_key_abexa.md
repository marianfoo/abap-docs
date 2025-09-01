  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, Basic Form](javascript:call_link\('abaploop_at_itab.htm'\)) → 

itab - Loop with Key

The example demonstrates the execution of the statement LOOP AT itab with different table keys.

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

-   The first LOOP takes place without a key specification. The table output is in the order in which the table was filled, that is, sorted by the fields specified after ORDER BY in the SELECT statement.

-   The other two LOOP loops are performed when one of the secondary table keys city\_from\_to or city\_to\_from is specified.