  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

Inverse Reads on Internal Table with FOR

This example demonstrates how sequential inverse reads are performed on an internal table.

Source Code

REPORT demo\_value\_cond\_iteration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA
      itab TYPE STANDARD TABLE OF i
           WITH EMPTY KEY
           WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line.
    itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ).
    DATA(output) =
      REDUCE string(
        INIT o = \`\`
        FOR  i = lines( itab ) THEN i - 1 WHILE i > 0
        NEXT o = o && COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN
                              WHEN r > 2 THEN r && \` \` ) ).
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a conditional iteration, an internal table is read using WHILE and a table expression. The table expression uses the secondary table key sort\_key and the result is created in a conditional expression using cond. The example shows how to bypass the restriction that inverse [table iterations](javascript:call_link\('abenfor_itab.htm'\)) cannot be performed.