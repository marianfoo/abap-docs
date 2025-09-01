  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Statements in List Processing](javascript:call_link\('abenlists_obsolete.htm'\)) →  [Obsolete Calculations](javascript:call_link\('abencalculate_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MINIMUM%2C%20ABAPMINIMUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MINIMUM

[Short Reference](javascript:call_link\('abapminimum_shortref.htm'\))

Obsolete Syntax

MINIMUM dobj.

Effect

For each [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement that writes the content of the data object dobj to a list at any list level after the statement MINIMUM, which is forbidden in classes, is executed, the minimum value of all values of dobj produced as output since the statement MINIMUM was executed with WRITE is determined implicitly and assigned to a data object min\_dobj.

The statement MINIMUM declares the global data object min\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MINIMUM must not be specified within a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") and it can only be specified once in a program.

Hint

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [nmin](javascript:call_link\('abennmax_nmin_functions.htm'\)) can, for example, be used instead.

Example

See [SUMMING](javascript:call_link\('abapsumming.htm'\))