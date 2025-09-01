---
title: "Source Code"
description: |
  REPORT demo_reduce_text. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES strings TYPE STANDARD TABLE OF string WITH EMPTY KEY. DATA(words) = VALUE strings( ( `All` ) ( `ABAP` ) ( `constructs` ) ( `are` ) ( `imperative` )
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreduce_text_abexa.htm"
abapFile: "abenreduce_text_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenreduce", "text", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_itab.htm) →  [itab - Examples of Table Reductions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_reductions_abexas.htm) → 

itab - Table Reduction, String Processing

This example demonstrates a reduction of the columns of a character-like table to a text string.

Source Code

REPORT demo\_reduce\_text.
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

A [table comprehension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehension_glosry.htm "Glossary Entry") is used to construct a new internal table switched\_words from the content of an internal table words, where the condition operator [SWITCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_switch.htm) replaces certain lines of the existing internal table with other lines. This table is specified in the [FOR expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_in_itab.htm) of the [REDUCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_reduce.htm) expression and its lines are reduced to a text string using a concatenation after NEXT and then assigned to the variable sentence. Here, the helper variable sep declared after INIT is initial for the first read line and is filled with a blank for the evaluation of further lines.

This example also demonstrates an alternative implementation in which the table comprehension is embedded directly in the table reduction. Here, the helper variable switched\_words is not required, but the source code is much harder to read. A human reader, for example, can hardly tell that the FOR expressions are not sequential and that the table comprehension is executed first, followed by the table reduction for the result.