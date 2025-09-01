  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlists_obsolete.htm) →  [Obsolete calculations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculate_obsolete.htm) → 

MINIMUM

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapminimum_shortref.htm)

Obsolete Syntax

MINIMUM dobj.

Effect

For each [WRITE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite-.htm) statement that writes the content of the data object dobj to a list at any list level after the statement MINIMUM (forbidden in classes) is executed, the minimum value of all values of dobj produced since the statement MINIMUM was executed with WRITE is determined and assigned to a data object min\_dobj.

The statement MINIMUM declares the global data object min\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MINIMUM must not be specified within a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") and it may be specified in a program only once.

Note

This statement is not permitted in classes because it works with implicitly created global variables. The built-in function [nmin](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennmax_nmin_functions.htm) can, for example, be used instead.

Example

See [SUMMING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsumming.htm)