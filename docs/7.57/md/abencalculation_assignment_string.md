---
title: "Syntax"
description: |
  lhs &&= rhs. Effect Calculation assignment(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignment_glosry.htm 'Glossary Entry') with the concatenation assignment operator &&=. This assignment has the same effect as the following assignment of a string expression(htt
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignment_string.htm"
abapFile: "abencalculation_assignment_string.htm"
keywords: ["do", "if", "try", "data", "abencalculation", "assignment", "string"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) →  [string\_exp - &&](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_operators.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %26%26=, Calculation Assignment, ABENCALCULATION_ASSIGNMENT_STRING, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

&&=, Calculation Assignment

Syntax

lhs &&= rhs.

Effect

[Calculation assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the concatenation assignment operator &&=.

This assignment has the same effect as the following [assignment of a string expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_string_expr.htm):

lhs = [lhs && rhs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_operators.htm).

The result of the expression rhs is concatenated with the content of lhs and the result is assigned to lhs.

The following applies to the operands lhs and rhs:

-   lhs is a [result position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresult_position_glosry.htm "Glossary Entry") and the following can be specified if they are character-like:
    -   [Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariable_glosry.htm "Glossary Entry")
    -   [Writable expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwritable_expression_glosry.htm "Glossary Entry")
-   rhs is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") and the following can be specified if they are character-like:
    
    -   [Data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")
    -   [Constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_glosry.htm "Glossary Entry")
    -   [String expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_glosry.htm "Glossary Entry")
    -   [Table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry")
    -   [Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_glosry.htm "Glossary Entry")
    
    Type inference with the character # is not currently possible in constructor expressions. No [numeric expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_expression_glosry.htm "Glossary Entry") can be specified.
    

Hints

-   No [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") are possible for lhs.
-   Calculation assignments can currently only be specified as standalone statements and after NEXT in the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_reduce.htm). They are not possible in other expressions.
-   See also the [addition assignment operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadd_assignment_op_glosry.htm "Glossary Entry") ([+=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm)), the [subtraction assignment operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensub_assignment_op_glosry.htm "Glossary Entry") ([\-=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm)), the [multiplication assignment operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmult_assignment_op_glosry.htm "Glossary Entry") ([\*=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm)), and the [division assignment operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendiv_assignment_op_glosry.htm "Glossary Entry") ([/=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm)).

Example

After the calculation assignments, the variable text has the value 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,.

DATA text TYPE string.
DO 10 TIMES.
  text &&= |{ sy-index }, |.
ENDDO.