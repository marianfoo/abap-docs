  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) → 

MOVE-CORRESPONDING

[Quick Reference](javascript:call_link\('abapmove-corresponding_shortref.htm'\))

Syntax Forms

[Variant for Structures](javascript:call_link\('abapmove-corresponding_structure.htm'\))
1\. MOVE-CORRESPONDING *\[*EXACT*\]* struc1 TO struc2
    *\[*EXPANDING NESTED TABLES*\]*.
[Variant for Internal Tables](javascript:call_link\('abapmove-corresponding_itab.htm'\))
2\. MOVE-CORRESPONDING *\[*EXACT*\]* itab1 TO itab2
    *\[*EXPANDING NESTED TABLES*\]* *\[*KEEPING TARGET LINES*\]*.

Effect

The statement MOVE-CORRESPONDING is used to assign components with the same name in structured data objects to each other. There are two variants of the statements, which can call each other internally:

-   Both operands are [structures](javascript:call_link\('abapmove-corresponding_structure.htm'\)).
    
-   Both operands are [internal tables](javascript:call_link\('abapmove-corresponding_itab.htm'\)).
    

No other combinations of operand types are possible. Field symbols typed with the generic type ANY or formal parameters can also be used as operands. An operand of this type must be either a structure or an internal table when the statement is executed and match the other operands; if not, an unhandleable exception is raised. struc1 and itab1 are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Notes

-   If mapping based on identical names is not sufficient for the statement MOVE-CORRESPONDING, the component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) can be used, which makes it possible to define separate mapping rules statically.
    
-   If dynamic mapping rules are needed, the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) can be used.
    
-   If an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") is specified for one of the operands, the header line is used as an operand in accordance with its data type, not the table body.
    

Non-Handleable Exceptions

-   Cause: The operands are not both structures or internal tables.
    Runtime error: TCHK\_MOVE\_CORRESPONDING:
    
-   The same runtime errors can occur as for [MOVE](javascript:call_link\('abapmove.htm'\)) and [MOVE EXACT](javascript:call_link\('abapmove_exact.htm'\)).
    
-   The same runtime errors can occur as for [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)).
    

Continue
[MOVE-CORRESPONDING - structure](javascript:call_link\('abapmove-corresponding_structure.htm'\))
[MOVE-CORRESPONDING - itab](javascript:call_link\('abapmove-corresponding_itab.htm'\))