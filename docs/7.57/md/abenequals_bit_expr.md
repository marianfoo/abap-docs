---
title: "Syntax"
description: |
  result = bit_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm). Effect If a bit expression(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_expression_glosry.htm 'Glossary Entry') bit_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_bit_expr.htm"
abapFile: "abenequals_bit_expr.htm"
keywords: ["do", "if", "try", "method", "data", "abenequals", "bit", "expr"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [\=, Assignment Operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm) →  [\=, Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_calc_expr.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: =, Bit Expression, ABENEQUALS_BIT_EXPR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

\=, Bit Expression

Syntax

result = [bit\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm).

Effect

If a [bit expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_expression_glosry.htm "Glossary Entry") [bit\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm), a byte chain with the [calculation length](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbitexp_length.htm) is calculated and assigned to the left side result like a [source field with the type xstring](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_xstring.htm).

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariable_glosry.htm "Glossary Entry") with the type x or xstring.
-   A [variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariable_glosry.htm "Glossary Entry") with the type c or string.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm). The data type of the declared variable var is xstring.

Example

Bit expressions as the right side of assignments. The expressions can also be used directly as input parameters of the output methods.

DATA hex1 TYPE xstring VALUE '0123456789ABCDEF'.
DATA hex2 TYPE xstring VALUE 'FEDCBA9876543210'.
FINAL(result1)  = hex1 BIT-AND hex2.
FINAL(result2)  = hex1 BIT-OR hex2.
cl\_demo\_output=>write(   result1 ).
cl\_demo\_output=>display( result2 ).