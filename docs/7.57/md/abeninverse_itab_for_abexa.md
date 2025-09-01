  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR, Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Inverse Reads on Internal Table without STEP, ABENINVERSE_ITAB_FOR_ABEXA, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Inverse Reads on Internal Table without STEP

This example demonstrates a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") implemented by a conditional iteration.

Source Code   

REPORT demo\_for\_reverse\_iteration.
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
    FINAL(output) =
      REDUCE string(
        INIT o = \`\`
        FOR  i = lines( itab ) THEN i - 1 WHILE i > 0
        NEXT o &&= COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN
                           WHEN r > 2 THEN r && \` \` ) ).
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example shows how an inverse [table iteration](javascript:call_link\('abenfor_itab.htm'\)) could be performed by an iteration expression accessing a table expression before the addition [STEP](javascript:call_link\('abenfor_cond.htm'\)) was introduced for direct table iterations.