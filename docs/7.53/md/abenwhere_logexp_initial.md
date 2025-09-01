  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - IS INITIAL

Syntax

... operand IS *\[*NOT*\]* INITIAL ...

Effect

This relational expression is true if the value of the operand operand is (is not) the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") of its [built-in dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)). [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

Notes

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value (regardless of its actual data type), instead of comparing it with a type-friendly operand that contains the initial value. This is of particular use in [dynamic conditions](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)).
    
-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).
    
-   If used, the relational expression IS *\[*NOT*\]* INITIAL forces [strict mode from Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\)).
    

Example

Reads the rows of the database table DEMO\_DDIC\_TYPES in which a dynamically specified column contains their type-dependent initial value.

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