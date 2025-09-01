---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_reduce_text DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_reduce_text IMPLEMENTATION. METHOD main. TYPES strings TYPE STANDARD TABLE
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreduce_text_abexa.htm"
abapFile: "abenreduce_text_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "internal-table", "abenreduce", "text", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) →  [itab - Examples of Table Reductions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_reductions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Reduction%2C%20String%20Processing%2C%20ABENREDUCE_TEXT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

itab - Table Reduction, String Processing

This example demonstrates a reduction of the columns of a character-like table to a text string.

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_text DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_text IMPLEMENTATION.
  METHOD main.
    TYPES strings TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    FINAL(words) = VALUE strings(
      ( \`All\` )
      ( \`ABAP\` )
      ( \`constructs\` )
      ( \`are\` )
      ( \`imperative\` ) ).
    out->write( words ).
    "Table comprehension into helper table
    FINAL(switched\_words) = VALUE strings(
          FOR word IN words
           ( SWITCH #( word WHEN \`All\`        THEN \`Some\`
                            WHEN \`imperative\` THEN \`functional\`
                            ELSE word ) ) ).
    out->write\_data( switched\_words ).
    "Table reduction of helper table
    FINAL(sentence) =
      REDUCE string( INIT text = \`\` sep = \`\`
        FOR word IN switched\_words
        NEXT text = |{ text }{ sep }{ word }| sep = \` \` ) && '.'.
    out->write\_data( sentence ).
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
  ENDMETHOD.
ENDCLASS.

Description   

A [table comprehension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_comprehension_glosry.htm "Glossary Entry") is used to construct a new internal table switched\_words from the content of an internal table words, where the condition operator [SWITCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_switch.htm) replaces certain lines of the existing internal table with other lines. This table is specified in the [FOR expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_itab.htm) of the [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) expression and its lines are reduced to a text string using a concatenation after NEXT and then assigned to the variable sentence. Here, the helper variable sep declared after INIT is initial for the first read line and is filled with a blank for the evaluation of further lines.

This example also demonstrates an alternative implementation in which the table comprehension is embedded directly in the table reduction. Here, the helper variable switched\_words is not required, but the source code is much harder to read. A human reader, for example, can hardly tell that the FOR expressions are not sequential and that the table comprehension is executed first, followed by the table reduction for the result.