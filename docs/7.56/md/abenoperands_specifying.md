  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_data_objects.htm) → 

Specifying Individual Operands

There are three ways to specify the [names of operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_names.htm):

-   [Static Specification](#@@ITOC@@ABENOPERANDS_SPECIFYING_1)
-   [Dynamic Specification in Parentheses](#@@ITOC@@ABENOPERANDS_SPECIFYING_2)
-   [Dynamic Specification](#@@ITOC@@ABENOPERANDS_SPECIFYING_3)

Static Specification

The name of the operand must be specified directly. If the name of a data object is specified, the specified name is used and not the content of the data object.

Example

SUBMIT report.

Dynamic Specification in Parentheses

For some statements that normally expect a static specification, there is a syntactic form that allows the name of a character-like data object to be specified in parentheses at the operand position. At the time of execution, the data object must contain the actual name of the operand.

Example

SUBMIT (dobj).

For statements that contain lists of operands or full parts of statements, an internal table with a character-like line type can often be specified in parentheses. The table lines must then contain the names of the individual operands.

Example

SELECT ... WHERE (where\_tab).

Dynamic Specification

At many operand positions, the system expects character-like data objects that contain the actual names of the individual operands at the time of execution. To enable the static specification of these operands, literals must be used.

Hint

In some rare cases, there may be exceptions to these rules, where operands must be set directly in parentheses or quotation marks as literals, but no data objects can be specified. This is noted in the corresponding syntax descriptions.

Example

CALL FUNCTION dobj.