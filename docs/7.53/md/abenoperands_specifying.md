  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) → 

Specifying Individual Operands

There are three ways to specify the [names of operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_names.htm):

-   [Static Specification](#@@ITOC@@ABENOPERANDS_SPECIFYING_1)

-   [Specifying Names Dynamically in Parentheses](#@@ITOC@@ABENOPERANDS_SPECIFYING_2)

-   [Specifying Names Dynamically](#@@ITOC@@ABENOPERANDS_SPECIFYING_3)

Static Specification

The name of the operand must be specified directly. If the name of a data object is specified, the specified name is used and not the content of the data object.

Example

SUBMIT report.

Specifying Names Dynamically in Parentheses

For some statements that are designed to be specified statically, there is a syntax form that allows the name of a character-like data object to be specified in parentheses in the operand position. At the time of execution, the data object must contain the actual name of the operand.

Example

SUBMIT (dobj).

For statements that contain lists of operands or whole parts of statements, an internal table with a character-like row type can often be specified in parentheses. The table rows must then contain the names of the individual operands.

Example

SELECT ... WHERE (where\_tab).

Specifying Names Dynamically

In many operand positions, the system expects character-like data objects that contain the actual names of the individual operands at the time of execution. To enable these operands tp be specified statically, literals must be used.

Note

In some rare cases, there may be exceptions to these rules, where operands must be set in parentheses or quotation marks as literals, but no data objects can be specified. This is noted in the corresponding syntax descriptions.

Example

CALL FUNCTION dobj.