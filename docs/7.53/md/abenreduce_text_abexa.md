  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR - Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\)) → 

Table Reductions, String Processing

This example demonstrates a reduction of the columns of a character-like table to a text string.

Source Code

REPORT demotexteduce\_text.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES strings TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    DATA(words) = VALUE strings(
      ( \`All\` )
      ( \`ABAP\` )
      ( \`constructs\` )
      ( \`are\` )
      ( \`imperative\` ) ).
    cl\_demo\_output=>write( words ).
    "Table comprehension into helper table
    DATA(switched\_words) = VALUE strings(
          FOR word IN words
           ( SWITCH #( word WHEN \`All\`        THEN \`Some\`
                            WHEN \`imperative\` THEN \`functional\`
                            ELSE word ) ) ).
    cl\_demo\_output=>write\_data( switched\_words ).
    "Table reduction of helper table
    DATA(sentence) =
      REDUCE string( INIT text = \`\` sep = \`\`
        FOR word IN switched\_words
        NEXT text = |{ text }{ sep }{ word }| sep = \` \` ) && '.'.
    cl\_demo\_output=>write\_data( sentence ).
    "Obfuscation - all in one
    ASSERT sentence =
      REDUCE string( INIT text = \`\` sep = \`\`
        "Table reduction
        FOR word IN VALUE strings(
          "Table comprehension
          FOR word IN words
           ( SWITCH #( word WHEN \`All\`        THEN \`Some\`
                            WHEN \`imperative\` THEN \`functional\`
                            ELSE word ) ) )
        NEXT text = |{ text }{ sep }{ word }| sep = \` \` ) && '.'.
    cl\_demo\_output=>display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") is used to construct a new internal table switched\_words from the content of an internal table words. In the new table, the condition operator [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) replaces certain rows of the existing internal table with other rows. This table is specified in the [FOR expression](javascript:call_link\('abenfor_in_itab.htm'\)) of the [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) expression and its rows are reduced to a text string using a chaining after NEXT. This text string is then assigned to the variable sentence. Here, the helper variable sep declared after INIT is initial for the first read row and is filled with a blank here for the evaluation of further rows.

This example also demonstrates an alternative implementation in which the table comprehension is embedded directly in the table reduction. Here, the helper variable switched\_words is not required, but the source code is much harder to read. A human reader, for example, can hardly tell that the FOR expressions are not sequential and that the table comprehension is executed first, followed by the table reduction for the result.