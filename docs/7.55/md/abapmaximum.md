  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlists_obsolete.htm) →  [Obsolete Calculations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculate_obsolete.htm) → 

MAXIMUM

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmaximum_shortref.htm)

Obsolete Syntax

MAXIMUM dobj.

Effect

For each [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) statement that writes the content of the data object dobj to a list at any list level after the statement MAXIMUM (forbidden in classes) is executed, the minimum value of all values of dobj produced since the statement MAXIMUM was executed with WRITE is determined and assigned to a data object max\_dobj.

The statement MAXIMUM declares the global data object max\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MAXIMUM must not be specified within a [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") and may be specified only once in every program.

Hint

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [nmax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennmax_nmin_functions.htm) can, for example, be used instead.

Example

See [SUMMING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsumming.htm)