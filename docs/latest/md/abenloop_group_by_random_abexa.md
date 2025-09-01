  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Random%20Grouping%20with%20LOOP%2C%20ABENLOOP_GROUP_BY_RANDOM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

itab - Random Grouping with LOOP

This example demonstrates a construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") that does not depend on the table lines.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_random DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA numbers TYPE STANDARD TABLE OF i WITH EMPTY KEY.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_random IMPLEMENTATION.
  METHOD main.
    FINAL(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i(
        cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = 10 ).
    DATA members LIKE numbers.
    LOOP AT numbers INTO FINAL(line)
         GROUP BY rnd->get\_next( )
                  ASCENDING
                  ASSIGNING FIELD-SYMBOL(<group>).
      out->begin\_section( |Group Key: { <group> }| ).
      members = VALUE #( FOR <wa> IN GROUP <group> ( <wa> ) ).
      out->write( members
        )->write( |Lines: { lines( members ) }|
        )->end\_section( ).
    ENDLOOP.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    numbers = VALUE #( FOR j = 1 UNTIL j > 100 ( j ) ).
  ENDMETHOD.
ENDCLASS.

Description   

[Grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of an internal table numbers with [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)). The [group key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry") is constructed as a value of the type i, which is determined as a random number completely independent of the internal table. This casts the table lines into groups of approximately the same size.

In the group loop, the lines of each group are placed in an internal table members using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"). This table is then output.