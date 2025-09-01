  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - IS INITIAL

Syntax

... operand IS *\[*NOT*\]* INITIAL ...

Effect

This relational expression is true if the value of the operand operand is (is not) the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") of its [built-in dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)).

The following applies to operand:

-   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.
-   In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

Hints

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value, regardless of its actual data type, instead of comparing it with a type-compliant operand that contains the initial value. This is of particular use in [dynamic conditions](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)).
-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).
-   If used, the relational expression IS *\[*NOT*\]* INITIAL enforces [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Example

Reading of the rows of the DDIC database table DEMO\_DDIC\_TYPES in which a dynamically specified column contains their type-dependent initial value.

DATA column TYPE string VALUE \`INT8\`.
cl\_demo\_input=>request( CHANGING field = column ).
column = to\_upper( column ).
DATA(components) = CAST cl\_abap\_structdescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'DEMO\_DDIC\_TYPES' )
    )->components.
IF NOT line\_exists( components\[ name = column \] ).
  cl\_demo\_output=>display( \`Invalid request\` ).
  RETURN.
ENDIF.
DATA(cond) = column && \` IS INITIAL\`.
TRY.
    SELECT \*
           FROM demo\_ddic\_types
           WHERE (cond)
           INTO TABLE @DATA(result).
  CATCH cx\_sy\_dynamic\_osql\_semantics INTO DATA(xref).
    cl\_demo\_output=>display( xref->get\_text( ) ).
ENDTRY.