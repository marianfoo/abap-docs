  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR, Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Inverse%20Reads%20on%20Internal%20Table%20without%20STEP%2C%20ABENINVERSE_ITAB_FOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Inverse Reads on Internal Table without STEP

This example demonstrates a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") implemented by a conditional iteration.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_reverse\_iteration DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_reverse\_iteration IMPLEMENTATION.
  METHOD main.
    DATA
      itab TYPE STANDARD TABLE OF i
           WITH EMPTY KEY
           WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line.
    itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ).
    FINAL(output) =
      REDUCE string(
        INIT o = \`\`
        FOR  i = lines( itab ) THEN i - 1 WHILE i > 0
        NEXT o &&= COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN
                           WHEN r > 2 THEN r && \` \` ) ).
    out->write( output ).
  ENDMETHOD.
ENDCLASS.

Description   

The example shows how an inverse [table iteration](javascript:call_link\('abenfor_itab.htm'\)) could be performed by an iteration expression accessing a table expression before the addition [STEP](javascript:call_link\('abenfor_cond.htm'\)) was introduced for direct table iterations.