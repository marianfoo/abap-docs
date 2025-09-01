---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_reduce_structured DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor . PRIVATE SECTION. TYPES: BEGIN OF line, id  TYPE string, num TYPE i, END OF line, BEGIN OF result, text TY
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreduce_structured_abexa.htm"
abapFile: "abenreduce_structured_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "abenreduce", "structured", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) →  [itab - Examples of Table Reductions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_reductions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Reductions%2C%20Structured%20Result%2C%20ABENREDUCE_STRUCTURED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

itab - Table Reductions, Structured Result

This example demonstrates a reduction of the columns of a table to a structure.

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_structured DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor .
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line,
        id  TYPE string,
        num TYPE i,
      END OF line,
      BEGIN OF result,
        text TYPE string,
        sum  TYPE i,
        max  TYPE i,
      END OF result.
    DATA
      itab TYPE TABLE OF line WITH EMPTY KEY.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_structured IMPLEMENTATION.
  METHOD main.
    out->write( itab ).
    FINAL(result) = REDUCE result(
                     INIT res = VALUE result( max  = 0
                                              text = \`Result: \` )
                          sep  = \`\`
                     FOR <wa> IN itab
                     NEXT res-text &&= sep && <wa>-id
                          res-sum += <wa>-num
                          res-max = nmax( val1 = res-max
                                          val2 = <wa>-num )
                          sep     = \`-\` ).
    out->write( result ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    FINAL(rnd) = cl\_abap\_random\_int=>create( seed =
                    CONV i( cl\_demo\_date\_time=>get\_user\_time( ) )
                                            min  = 0
                                            max  = 1000 ).
    FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
    itab = VALUE #( FOR j = 0 UNTIL j > 9
                    ( id  = abcde+j(1)
                      num = rnd->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Reduces a two-column internal table itab using [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm). The content of the first column of all lines is concatenated after the [FOR expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_itab.htm), the total of the second column is calculated, and the maximum value of the second column is determined. These values are assigned to the components of the local structure res, which is provided as the result.

The separator sep in the concatenation is declared as a helper variable after INIT. It is initial for the first line read and set to a value here for the evaluation of the following lines.