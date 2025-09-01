  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [itab - Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Table Comprehensions, Use of Step Size, ABENTABLE_CMPRHNSNS_STEP_ABEXA, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Table Comprehensions, Use of Step Size

This example demonstrates how the step size and the processing order are used in [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry").

Source Code   

REPORT demo\_table\_comprh\_step.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    TYPES: BEGIN OF line,
             tabix TYPE sy-tabix,
             value   TYPE i,
           END OF line.
    DATA output TYPE TABLE OF line WITH EMPTY KEY.
    out->write\_doc(
      \`An internal table itab is declared and filled as follows:\`
      )->begin\_code( \`itab\` ).
    DATA itab TYPE STANDARD TABLE OF i
         WITH EMPTY KEY
         WITH UNIQUE SORTED KEY sortkey COMPONENTS table\_line.
    itab = VALUE #( FOR i = 1 UNTIL i > 20 ( i ) ).
    out->end\_code( \`itab\` ).
    SORT itab BY table\_line DESCENDING.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix FROM 4 TO 16
      STEP 2 ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP 2\` )->write( output ).
    CLEAR output.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix
      USING KEY sortkey FROM 4 TO 16 STEP 2
            ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP 2 USING KEY sortkey\`
      )->write( output ).
    CLEAR output.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix
      USING KEY sortkey FROM 16 TO 4 STEP -2
            ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP -2 USING KEY sortkey\`
      )->write( output ).
    CLEAR output.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix FROM 16 TO 4
      STEP -2 ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP -2\` )->write( output ).
    CLEAR output.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The content of an internal table itab is defined by using the additions STEP and USING KEY.

1.  Every second table line is read in descending order based on the STEP statement, starting at the fourth table line from last because of the FROM addition.
2.  Every second table line is read in ascending order based on the USING KEY and STEP statement, starting at the fourth first table line because of the FROM addition.
3.  Every second table line is read in descending order based on the USING KEY and STEP statement, starting at the fifth table line from last because of the FROM addition.
4.  Every second table line is read in ascending order based on the STEP statement, starting at the fifth first table line because of the FROM addition.

See also the [executable example](javascript:call_link\('abenloop_at_itab_step_abexa.htm'\)) for the LOOP statement using the addition STEP.