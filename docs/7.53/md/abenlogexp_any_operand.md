---
title: "Meaning"
description: |
  =, EQ Equal: True if the value of operand1 matches the value of operand2. <>, NE Not Equal: True if the value of operand1 does not match the value of operand2. <, LT Less Than: True if the value of operand1 is less than the value of operand2. >, GT Greater Than: True if the value of operand1 is gr
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_any_operand.htm"
abapFile: "abenlogexp_any_operand.htm"
keywords: ["loop", "do", "if", "try", "class", "data", "types", "abenlogexp", "any", "operand"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_comp.htm) →  [rel\_exp - Relational Operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_op.htm) →  [rel\_exp - Relational Operators for All Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_compare_all.htm) → 

rel\_exp - Binary Relational Operators

The following table shows the binary relational operators for comparisons between two operands (data objects and return values or [calculation expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry")) of any data types in [comparison expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomparison_expression_glosry.htm "Glossary Entry").

operator

Meaning

\=, EQ

Equal: True if the value of operand1 matches the value of operand2.

<>, NE

Not Equal: True if the value of operand1 does not match the value of operand2.

<, LT

Less Than: True if the value of operand1 is less than the value of operand2.

\>, GT

Greater Than: True if the value of operand1 is greater than the value of operand2.

<=, LE

Less Equal: True if the value of operand1 is less than or equal to the value of operand2.

\>=, GE

Greater Equal: True if the value of operand1 is greater than or equal to the value of operand2.

The values are compared in accordance with the [comparison rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules.htm).

Programming Guideline

[Use consistent spelling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_langu_guidl.htm "Guideline")

Notes

-   The operators \=, <>, <, \>, <=, and \>= are equivalent to EQ, NE, LT, GT, LE, and GE respectively. It is recommended that only one of these types of operator is used within the same program. If in doubt, the variant with the characters \=, <, and \> is considered to be more up-to-date, however this also overloads these characters. Relational operators that consist of two letters, on the other hand, are better suited to other relational operators such as [CO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_strings.htm), [CN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_strings.htm), and so on, which have no alternative forms.

-   Due to the [comparison rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules.htm), the size comparisons shown here are not suitable for determining the textual order of character-like data objects.

-   The obsolete forms [\><, \=<, and \=>](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_logexp_op.htm) of relational operators may still appear outside of classes.

Example

Logical expression as a termination condition of an unlimited [DO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdo.htm) loop.

CONSTANTS limit TYPE i VALUE 1000.
DATA variable TYPE i.
...
DO.
  IF variable > limit.
    EXIT.
  ENDIF.
  ...
ENDDO.