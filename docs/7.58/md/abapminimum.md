  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlists_obsolete.htm) →  [Obsolete Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculate_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MINIMUM%2C%20ABAPMINIMUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MINIMUM

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapminimum_shortref.htm)

Obsolete Syntax

MINIMUM dobj.

Effect

For each [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) statement that writes the content of the data object dobj to a list at any list level after the statement MINIMUM, which is forbidden in classes, is executed, the minimum value of all values of dobj produced as output since the statement MINIMUM was executed with WRITE is determined implicitly and assigned to a data object min\_dobj.

The statement MINIMUM declares the global data object min\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MINIMUM must not be specified within a [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") and it can only be specified once in a program.

Hint

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [nmin](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennmax_nmin_functions.htm) can, for example, be used instead.

Example

See [SUMMING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsumming.htm)