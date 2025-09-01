  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

ABAP SQL - SQL Operands sql\_elem

Syntax

... [col](javascript:call_link\('abenopen_sql_columns.htm'\))
  *|* [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) *|* [@dobj](javascript:call_link\('abenopen_sql_host_variables.htm'\)) *|* [@( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) ...

Effect

Specifies a column [col](javascript:call_link\('abenopen_sql_columns.htm'\)), a literal [literal](javascript:call_link\('abenabap_sql_literals.htm'\)), a host variable [@dobj](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or a host expression [@( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) as an elementary [SQL operand](javascript:call_link\('abensql_operand_glosry.htm'\) "Glossary Entry") in an ABAP SQL operand position.

These elementary operands can have the following properties:

-   They can be specified as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) in all operand positions in which [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are possible.

-   They can also occur in specific operand positions in which no SQL expressions or restricted SQL expressions are possible.

To operand positions in which host variables are handled as SQL expressions, the associated rules for the expressions apply. The rules of the respective position apply in operand positions in which no SQL expressions are possible.

While the value of a column col or a [typed literal](javascript:call_link\('abenabap_sql_typed_literals.htm'\)) is determined on the database, the values of [untyped literals](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)), host variables, and host expressions are passed from ABAP to the database system before the SQL statement is executed or copied from the database system after it is executed. The operand position determines how the value of such an ABAP object is handled:

-   An ABAP object specified as an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)) in a read position is mapped to a dictionary type as described there, passed to the database with this type, and handled accordingly. The database rules apply.

-   In operand positions in which an ABAP object is not handled as an SQL expression, a conversion between the respective types takes place according to [ABAP conversion rules](javascript:call_link\('abenconversion_rules.htm'\)) if necessary. The mapping of [ABAP Dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) to [ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) is respected if necessary. If an [untyped literal](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)), a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) is read, conversions are subject to the [rules for lossless assignments](javascript:call_link\('abapmove_exact.htm'\)). If the assignment cannot be lossless, an exception is raised. Literals and [host constants](javascript:call_link\('abenhost_constant_glosry.htm'\) "Glossary Entry") produce syntax warnings or syntax errors, depending on the [syntax check mode](javascript:call_link\('abenopensql_strict_modes.htm'\)).

Hint

[Typed literals](javascript:call_link\('abenabap_sql_typed_literals.htm'\)) are always treated as elementary SQL expressions, while [untyped literals](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)) can also be treated as host variables, depending on the operand position.

Example

SQL expressions are possible on the left side of the [WHERE](javascript:call_link\('abapwhere.htm'\)) condition. The specified column carrid can be placed in parentheses as an elementary SQL expression. No general SQL expressions are possible on the right side of the condition. The literal CHAR\`UA\` as an elementary SQL expression can be used, but not be set in parentheses.

SELECT \*
       FROM scarr
       WHERE ( carrid ) =  CHAR\`UA\`
       INTO TABLE @DATA(itab).

Example

In the first SELECT statement, the host variable @field is in an [operand position](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) in which it is not handled as an elementary SQL expression. Their content must comply with the [rules for lossless assignments](javascript:call_link\('abapmove_exact.htm'\)), which is not the case here. This is why an exception of the class CX\_SY\_OPEN\_SQL\_DATA\_ERROR is raised. In the second SELECT statement, the same host variable is in an [operand position](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) in which it is evaluated as an elementary SQL expression and a [mapping](javascript:call_link\('abensql_elem.htm'\)) takes place to a dictionary type and the value is evaluated using this type on the database. No exception is raised in this case.

DATA field TYPE c LENGTH 100 VALUE 'XXXXXXXXXXXXXXX'.
TRY.
    SELECT \*
           FROM scarr
           WHERE carrid IN ( @field )
           INTO TABLE @DATA(rtab1).
  CATCH cx\_sy\_open\_sql\_data\_error.
    cl\_demo\_output=>write( 'Data loss in conversion' ).
ENDTRY.
TRY.
    SELECT \*
           FROM scarr
           WHERE ( carrid, carrname ) IN ( ( @field, CHAR\` \` ) )
           INTO TABLE @DATA(rtab2).
  CATCH cx\_sy\_open\_sql\_error.
    cl\_demo\_output=>write( 'Error in mapping' ).
ENDTRY.
cl\_demo\_output=>display( ).

Continue
[ABAP SQL - col](javascript:call_link\('abenopen_sql_columns.htm'\))
[ABAP SQL - literal](javascript:call_link\('abenabap_sql_literals.htm'\))
[ABAP SQL - @dobj](javascript:call_link\('abenopen_sql_host_variables.htm'\))
[ABAP SQL - @( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\))