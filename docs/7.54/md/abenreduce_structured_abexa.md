---
title: "Table Reductions, Structured Result"
description: |
  This example demonstrates a reduction of the columns of a table to a structure. Source Code REPORT demo_reduce_structured. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. TYPES: BEGIN OF line, id  TYPE string, num TYPE i, END OF line, BEGIN OF resul
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_structured_abexa.htm"
abapFile: "abenreduce_structured_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abenreduce", "structured", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) →  [Examples of Table Reductions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_reductions_abexas.htm) → 

Table Reductions, Structured Result

This example demonstrates a reduction of the columns of a table to a structure.

Source Code

REPORT demo\_reduce\_structured.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
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
    CLASS-DATA
      itab TYPE TABLE OF line WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>write( itab ).
    DATA(result) = REDUCE result(
                     INIT res = VALUE result( max  = 0
                                              text = \`Result: \` )
                          sep  = \`\`
                     FOR <wa> IN itab
                     NEXT res-text = res-text && sep
                                              && <wa>-id
                          res-sum = res-sum + <wa>-num
                          res-max = nmax( val1 = res-max
                                          val2 = <wa>-num )
                          sep     = \`-\` ).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD class\_constructor.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                            min  = 0
                                            max  = 1000 ).
    itab = VALUE #( FOR j = 0 UNTIL j > 9
                    ( id  = sy-abcde+j(1)
                      num = rnd->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Reduces a two-column internal table itab using [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm). The content of the first column of all rows is chained after the [FOR expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_in_itab.htm), the total of the second column is calculated, and the maximum value of the second column identified. These values are assigned to the components of the local structure res and the structure provided as the result.

The separator sep in the chaining is declared as an auxiliary variable after INIT. It is initial for the first row read and set to a value here for the evaluation of the following rows.