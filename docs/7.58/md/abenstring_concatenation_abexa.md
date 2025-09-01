---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_str_concatenation DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_str_concatenation IMPLEMENTATION. METHOD main. DATA(n) = 10000. cl_d
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_concatenation_abexa.htm"
abapFile: "abenstring_concatenation_abexa.htm"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "abenstring", "concatenation", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) →  [string\_exp - Performance Note](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expr_perfo.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_exp%20-%20Concatenating%20Strings%2C%20ABENSTRING_CONCATENATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

string\_exp - Concatenating Strings

This example demonstrates how string concatenations can be optimized.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_concatenation DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_concatenation IMPLEMENTATION.
  METHOD main.
    DATA(n) = 10000.
    cl\_demo\_input=>new( )->request( CHANGING field = n ).
    IF n <= 0 OR n >= 100000.
      EXIT.
    ENDIF.
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    FINAL(t1) = timer->get\_runtime( ).
    FINAL(result1) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     NEXT s &&= CONV string( i ) ).
    FINAL(t2) = timer->get\_runtime( ).
    FINAL(t21) = t2 - t1.
    FINAL(t3) = timer->get\_runtime( ).
    FINAL(result2) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     LET num = CONV string( i ) IN
                     NEXT s &&= num ).
    FINAL(t4) = timer->get\_runtime( ).
    FINAL(t43) = t4 - t3.
    ASSERT result1 = result2.
    out->write( |Optimization factor: { t21 / t43 }| ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the optimization of a string concatenation, if a string is lengthened on the right side by appending content during an [assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_string_expr.htm) to a string. In this case, the strings are processed in a loop using a [REDUCE expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm).

-   There is no optimization in the first REDUCE expression since an expression is appended to the string s.
-   In the second REDUCE expression, the expression is assigned to a helper variable num using LET. This variable can be appended to s directly without an interim result needing to be produced.

Without optimization, the runtime increases quadratically with the number of iterations, which has a noticeable effect for large numbers n.