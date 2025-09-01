---
title: "Source Code"
description: |
  REPORT demo_string_concatenation. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(n) = 10000. cl_demo_input=>request( CHANGING field = n ). IF n <= 0 OR n >= 100000. EXIT. ENDIF. GET RUN TIME FIELD DATA(t1). DATA(result1) = REDUCE
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_concatenation_abexa.htm"
abapFile: "abenstring_concatenation_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "abenstring", "concatenation", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm) →  [string\_exp - Performance Note](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_expr_perfo.htm) → 

string\_exp - Concatenating Strings

This example demonstrates how string concatenations can be optimized.

Source Code

REPORT demo\_string\_concatenation.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(n) = 10000.
    cl\_demo\_input=>request( CHANGING field = n ).
    IF n <= 0 OR n >= 100000.
      EXIT.
    ENDIF.
    GET RUN TIME FIELD DATA(t1).
    DATA(result1) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     NEXT s &&= CONV string( i ) ).
    GET RUN TIME FIELD DATA(t2).
    DATA(t21) = t2 - t1.
    GET RUN TIME FIELD DATA(t3).
    DATA(result2) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     LET num = CONV string( i ) IN
                     NEXT s &&= num ).
    GET RUN TIME FIELD DATA(t4).
    DATA(t43) = t4 - t3.
    ASSERT result1 = result2.
    cl\_demo\_output=>display( |Optimization factor: { t21 / t43 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates the optimization of a string concatenation, if a string is lengthened on the right side by appending content during an [assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_string_expr.htm) to a string. In this case, the strings are processed in a loop using a [REDUCE expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_reduce.htm).

-   There is no optimization in the first REDUCE expression since an expression is appended to the string s.

-   In the second REDUCE expression, the expression is assigned to a helper variable num using LET. This variable can be appended to s directly without an interim result needing to be produced.

Without optimization, the runtime increases quadratically with the number of iterations, which has a noticeable effect for large numbers n.