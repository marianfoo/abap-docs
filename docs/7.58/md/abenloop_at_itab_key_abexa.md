  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, Basic Form](javascript:call_link\('abaploop_at_itab.htm'\)) →  [LOOP AT itab, cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Loop%20with%20Key%2C%20ABENLOOP_AT_ITAB_KEY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Loop with Key

The example demonstrates the execution of the statement LOOP AT itab with different table keys.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_at\_itab\_using\_key DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_at\_itab\_using\_key IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF spfli\_line,
        carrid   TYPE spfli-carrid,
        connid   TYPE spfli-connid,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF spfli\_line.
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
  ENDMETHOD.
ENDCLASS.

Description   

The table spfli\_tab is a hashed table with an unique primary key and two non-unique sorted secondary keys.

-   The first LOOP takes place without a key specification. The table output is in the order in which the table was filled, that is, sorted by the fields specified after ORDER BY in the SELECT statement.
-   The other two LOOP loops are performed with each of the secondary table keys city\_from\_to or city\_to\_from specified.