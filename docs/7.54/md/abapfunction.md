  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Function Modules](javascript:call_link\('abenabap_functions.htm'\)) → 

FUNCTION

[Quick Reference](javascript:call_link\('abapfunction_shortref.htm'\))

Syntax

FUNCTION func.
\*"---------------------------------------------------------
\*" Local Interface:
\*" [parameter\_interface](javascript:call_link\('abenfunction.htm'\))
\*"---------------------------------------------------------
  ...
ENDFUNCTION.

Effect

Between the statements FUNCTION and ENDFUNCTION, the functions of a [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") func are implemented in a function group. The function module and its interface are defined in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or in the [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry") tool . In the source code of the function module, the function module interface defined in Function Builder is automatically displayed as [parameter\_interface](javascript:call_link\('abenfunction.htm'\)) in comment lines underneath the statement FUNCTION.

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function group. A function module is called using the statement [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)).

Note

The [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [IS SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\)) can be used in the function module to determine whether an actual parameter has been specified for a formal parameter.

Example

Implements a function module that reads data in a table-like formal parameter flight\_tab under the condition of an elementary formal parameter id. The [parameter interface](javascript:call_link\('abenfunction.htm'\)) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table.
\*"---------------------------------------------------------
\*" Local Interface:
\*"       IMPORTING
\*"             VALUE(ID) LIKE  SPFLI-CARRID DEFAULT 'LH '
\*"       EXPORTING
\*"             FLIGHT\_TAB TYPE  SPFLI\_TAB
\*"---------------------------------------------------------
  SELECT \*
         FROM spfli
         WHERE carrid = @id
         INTO TABLE @flight\_tab.
ENDFUNCTION.

Continue
[Function Module Interface](javascript:call_link\('abenfunction.htm'\))