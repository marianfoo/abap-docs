  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, Basic Form](javascript:call_link\('abaploop_at_itab.htm'\)) →  [LOOP AT itab, cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Loop with Step Size, ABENLOOP_AT_ITAB_STEP_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Loop with Step Size

The example demonstrates the execution of the statement LOOP AT itab with different STEP additions.

Source Code   

REPORT demo\_loop\_at\_itab\_using\_step.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    TYPES:
      BEGIN OF line,
        tabix TYPE sy-tabix,
        value TYPE i,
      END OF line.
    DATA result TYPE TABLE OF line WITH EMPTY KEY.
    out->write\_doc(
      \`An internal table itab is declared and filled as follows:\`
      )->begin\_code( \`itab\` ).
    DATA itab TYPE HASHED TABLE OF i WITH UNIQUE KEY table\_line
                          WITH NON-UNIQUE SORTED KEY sec\_key
                          COMPONENTS table\_line
                          ##TABKEY\[PRIMARY\_KEY\]\[SEC\_KEY\].
    itab = VALUE #( ( 4 ) ( 3 ) ( 7 ) ( 11 ) ( 1 ) ( 5 ) ).
    out->end\_code( \`itab\` ).
    out->next\_section( \`itab\`
      )->write( itab ).
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
      DATA(tabix) = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab\`
      )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> STEP -1.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab STEP -1\`
       )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> STEP 2.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab STEP 2\`
       )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> STEP -2.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab STEP -2\`
       )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> USING KEY sec\_key.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab USING KEY sec\_key\`
      )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> STEP -1 USING KEY sec\_key.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab STEP -1 USING KEY sec\_key\`
       )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> STEP 2 USING KEY sec\_key.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab STEP 2 USING KEY sec\_key\`
       )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> STEP -2 USING KEY sec\_key.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section( \`LOOP AT itab STEP -2 USING KEY sec\_key\`
       )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> FROM 1 TO 3 STEP 1 USING KEY sec\_key.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section(
       \`LOOP AT itab FROM 1 TO 3 STEP 1 USING KEY sec\_key\`
       )->write( result ).
    CLEAR result.
    LOOP AT itab ASSIGNING <fs> FROM 3 TO 1 STEP -1 USING KEY sec\_key.
      tabix = sy-tabix.
      result = VALUE #( BASE result ( tabix = tabix value = <fs> ) ).
    ENDLOOP.
    out->next\_section(
       \`LOOP AT itab FROM 3 TO 1 STEP -1 USING KEY sec\_key\`
       )->write( result ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The table itab is a hashed table with a unique key and a non-unique sorted key. Using STEP additions, the step size and the direction of a loop can be defined. The first table output displays the values for the hashed table in the order in which the table is filled.

1.  The LOOP is performed without a key specification and without a step size. The table output is in the order in which the table is filled and with the sy-tabix of 0. Each table line is read because the step size is automatically interpreted as 1.
2.  The LOOP is performed without a key specification and with the step size of -1. The table output is in the reverse order in which the table is filled and with the sy-tabix of 0.
3.  The LOOP is performed without a key specification and with the step size of 2. The table output is in the order in which the table is filled and with the sy-tabix of 0. Every second table line is read, starting with the first table line.
4.  The LOOP is performed without a key specification and with the step size of -2. The table output is in the reverse order in which the table is filled and with the sy-tabix of 0. Every second table line is read, starting with the last table line.
5.  The LOOP is performed with the sorted key sec\_key and without a step size. The table output is in a sorted order from the lowest to the highest number and with the value of sy-tabix displaying the number of the respective table line in the secondary table index of sec\_key. Each table line is read because the step size is automatically interpreted as 1.
6.  The LOOP is performed with the sorted key sec\_key and with the step size of -1. The table output is in a reverse sorted order from the highest to the lowest number and with the value of sy-tabix displaying the number of the respective table line in the secondary table index of sec\_key.
7.  The LOOP is performed with the sorted key sec\_key and with the step size of 2. The table output is in a sorted order from the lowest to the highest number and with the value of sy-tabix displaying the number of the respective table line in the secondary table index of sec\_key. Every second table line is read, starting with the first table line.
8.  The LOOP is performed with the sorted key sec\_key and with the step size of -2. The table output is in a reverse sorted order from the highest to the lowest number and with the value of sy-tabix displaying the number of the respective table line in the secondary table index of sec\_key. Every second table line is read, starting with the last table line.
9.  The LOOP is performed with the sorted key sec\_key, with the step size of 1, and with the addition of FROM 1 TO 3. The table output is in a sorted order from table line 1 to 3 and with the value of sy-tabix displaying the number of the respective table line in the secondary table index of sec\_key. Each table line is read, starting with the first table line.
10.  The LOOP is performed with the sorted key sec\_key, with the step size of -1, and with the addition of FROM 3 TO 1. The table output is in a reverse sorted order from table line 1 to 3 and with the value of sy-tabix displaying the number of the respective table line in the secondary table index of sec\_key. Each table line is read, starting with the last table line.

See also the [executable example](javascript:call_link\('abentable_cmprhnsns_step_abexa.htm'\)) for the FOR expression using the addition STEP.