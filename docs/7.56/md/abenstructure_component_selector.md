  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands_names.htm) → 

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows to the left of the structure component selector:

-   Name of a structure or a structured type that can itself be linked.
-   [Functional method call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a structured result.
-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry") that returns a structured table line.

The name comp of the component must be to the right of the structure component selector.

Example

Declaration of a structure struc with the structured data type spfli from the ABAP Dictionary and access to its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...