  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Relational Expressions](javascript:call_link\('abenobsolete_logexp.htm'\)) → 

rel\_exp - IS REQUESTED

Obsolete Syntax

... para IS *\[*NOT*\]* REQUESTED ...

Effect

This [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") checks whether an output parameter para of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is being requested. The expression is true if at the call an actual parameter was assigned to the formal parameter.

This expression is possible only in function modules and methods. para expects only output parameters and optional input/output parameters.

If the addition NOT is specified, the expression is true if no actual parameter was assigned to the formal parameter in the call.

Notes

-   The predicate IS REQUESTED should no longer be used. The predicate expression [IS SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\)) can be used instead, which includes all functions of IS REQUESTED.

-   In [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"), checks on [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") using IS REQUESTED produce a syntax check warning. This is because an actual parameter is always assigned to the table parameter in this case.