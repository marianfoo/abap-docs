  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Statements in List Processing](javascript:call_link\('abenlists_obsolete.htm'\)) →  [Obsolete Calculations](javascript:call_link\('abencalculate_obsolete.htm'\)) → 

MINIMUM

[Quick Reference](javascript:call_link\('abapminimum_shortref.htm'\))

Obsolete Syntax

MINIMUM dobj.

Effect

For each [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement that writes the content of the data object dobj to a list at any list level after the statement MINIMUM (forbidden in classes) is executed, the minimum value of all values of dobj produced since the statement MINIMUM was executed with WRITE is determined and assigned to a data object min\_dobj.

The statement MINIMUM declares the global data object min\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MINIMUM must not be specified within a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") and it may be specified in a program only once.

Note

This statement is not permitted in classes because it works with implicitly created global variables. The built-in function [nmin](javascript:call_link\('abennmax_nmin_functions.htm'\)) can, for example, be used instead.

Example

See [SUMMING](javascript:call_link\('abapsumming.htm'\))