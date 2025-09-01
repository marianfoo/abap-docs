  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Statements in List Processing](javascript:call_link\('abenlists_obsolete.htm'\)) →  [Obsolete Calculations](javascript:call_link\('abencalculate_obsolete.htm'\)) → 

MAXIMUM

[Short Reference](javascript:call_link\('abapmaximum_shortref.htm'\))

Obsolete Syntax

MAXIMUM dobj.

Effect

For each [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement that writes the content of the data object dobj to a list at any list level after the statement MAXIMUM, which is forbidden in classes, is executed, the maximum value of all values of dobj produced as output since the statement MAXIMUM was executed with WRITE is determined implicitly and assigned to a data object max\_dobj.

The statement MAXIMUM declares the global data object max\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MAXIMUM must not be specified within a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") and can only be specified once in a program.

Hint

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [nmax](javascript:call_link\('abennmax_nmin_functions.htm'\)) can, for example, be used instead.

Example

See [SUMMING](javascript:call_link\('abapsumming.htm'\))