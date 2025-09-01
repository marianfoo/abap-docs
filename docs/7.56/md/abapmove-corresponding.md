  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding.htm) → 

MOVE-CORRESPONDING

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_shortref.htm)

Syntax Forms

[Variant for Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_structure.htm)
1\. MOVE-CORRESPONDING *\[*EXACT*\]* struc1 TO struc2
    *\[*EXPANDING NESTED TABLES*\]*.
[Variant for Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_itab.htm)
2\. MOVE-CORRESPONDING *\[*EXACT*\]* itab1 TO itab2
    *\[*EXPANDING NESTED TABLES*\]* *\[*KEEPING TARGET LINES*\]*.

Effect

The statement MOVE-CORRESPONDING is used to assign identically named components of structured data objects to each other. There are two variants of the statements, which can call each other internally:

-   Both operands are [structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_structure.htm).
-   Both operands are [internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_itab.htm).

No other combinations of operand types are possible. Field symbols typed with the generic type ANY or formal parameters can also be used as operands. An operand of this type must be either a structure or an internal table when the statement is executed and match the other operands, otherwise an uncatchable exception is raised. struc1 and itab1 are [functional operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Hints

-   If mapping based on identical names is not sufficient for the statement MOVE-CORRESPONDING, the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_corresponding.htm) can be used, which makes it possible to define separate mapping rules statically.
-   If dynamic mapping rules are needed, the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_corresponding.htm) can be used.
-   If an internal table with a [header line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm "Glossary Entry") is specified for one of the operands, the header line is used as an operand in accordance with its data type and not the table body.

Uncatchable Exceptions

-   Cause: The operands are not both structures or internal tables.
    Runtime error: TCHK\_MOVE\_CORRESPONDING:
-   The same runtime errors can occur as for [MOVE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove.htm) and [MOVE EXACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove_exact.htm).
-   The same runtime errors can occur as for [INSERT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_itab.htm).

Continue
[MOVE-CORRESPONDING, structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_structure.htm)
[MOVE-CORRESPONDING, itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_itab.htm)