---
title: "Syntax"
description: |
  result = bit_exp(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm). Effect If a bit expression(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_expression_glosry.htm 'Glossary Entry') bit_exp(https://help.sap.com/doc/abapdocu_756_index_htm/7.56
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_bit_expr.htm"
abapFile: "abenequals_bit_expr.htm"
keywords: ["do", "if", "try", "method", "data", "abenequals", "bit", "expr"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [\=, Assignment Operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm) →  [\=, Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_calc_expr.htm) → 

\=, Bit Expression

Syntax

result = [bit\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm).

Effect

If a [bit expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_expression_glosry.htm "Glossary Entry") [bit\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm), a byte chain with the [calculation length](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbitexp_length.htm) is calculated and assigned to the left side result like a [source field with the type xstring](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_type_xstring.htm).

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvariable_glosry.htm "Glossary Entry") with the type x or xstring.
-   A [variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvariable_glosry.htm "Glossary Entry") with the type c or string .
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm). The data type of the declared variable var is xstring.

Example

Bit expressions as the right side of assignments. The expressions can also be used directly as input parameters of the output methods.

DATA hex1 TYPE xstring VALUE '0123456789ABCDEF'.
DATA hex2 TYPE xstring VALUE 'FEDCBA9876543210'.
DATA(result1)  = hex1 BIT-AND hex2.
DATA(result2)  = hex1 BIT-OR hex2.
cl\_demo\_output=>write(   result1 ).
cl\_demo\_output=>display( result2 ).