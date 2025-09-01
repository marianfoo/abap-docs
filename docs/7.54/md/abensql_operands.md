  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

ABAP SQL - SQL Operands sql\_elem

Syntax

... [col](javascript:call_link\('abenopen_sql_columns.htm'\))
  *|* [literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) *|* [@dobj](javascript:call_link\('abenopen_sql_host_variables.htm'\)) *|* [@( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) ...

Effect

Specifies a column [col](javascript:call_link\('abenopen_sql_columns.htm'\)), a literal [literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)), a host variable [@dobj](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or a host expression [@( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) as an elementary [SQL operand](javascript:call_link\('abensql_operand_glosry.htm'\) "Glossary Entry") in an ABAP SQL operand position.

These elementary operands can have the following properties:

-   They can be specified as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) in all operand positions in which [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are possible.

-   They can also occur in specific operand positions in which no SQL expressions are possible.

The relevant rules apply in operand positions in which host variables are handled like SQL expressions. The rules of the position in question apply in operand positions in which no SQL expressions are possible.

The value of a column col is determined on the database, but the values of literals, host variables, and host expressions are passed to the database system by ABAP before the SQL statement is executed (or fetched by the database system after it is executed). The operand position determines how the value of an ABAP object like this is handled:

-   An ABAP object specified as an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)) in a read position is mapped (as described here) to a dictionary type, passed to the database as this type, and handled accordingly. The database rules apply.

-   In operand positions in which an ABAP objects is not handled as an SQL expression, a conversion (using the [ABAP conversion rules](javascript:call_link\('abenconversion_rules.htm'\))) between the types in question takes place if required. This also covers any mappings from [ABAP Dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) to [ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). If a [literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)), [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) is read, conversions are subject to the [rules for lossless assignments](javascript:call_link\('abapmove_exact.htm'\)). If the assignment cannot be lossless, an exception is raised. Literals and [host constants](javascript:call_link\('abenhost_constant_glosry.htm'\) "Glossary Entry") produce, depending on the [syntax check mode](javascript:call_link\('abenopensql_strict_modes.htm'\)), syntax warnings or syntax errors.

Example

SQL expressions are possible on the left side of the [WHERE](javascript:call_link\('abapwhere.htm'\)) condition. The specified column carrid can be placed in parentheses as an elementary SQL expression. No SQL expressions are possible on the right side of the condition. The literal 'UA' cannot be set in parentheses.

SELECT \*
       FROM scarr
       WHERE ( carrid ) =  'UA'
       INTO TABLE @DATA(itab).

Example

In the first SELECT statement, the host variable @field is in an [operand position](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) in which it is not handled as an elementary SQL expression. Their content must comply with the [rules for lossless assignments](javascript:call_link\('abapmove_exact.htm'\)), which is not the case here. This is why an exception of the class CX\_SY\_OPEN\_SQL\_DATA\_ERROR is raised. In the second SELECTstatement, the same host variable is in an [operand position](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) in which it is evaluated as an elementary SQL expression. Also, a [mapping](javascript:call_link\('abensql_elem.htm'\)) is made to a dictionary type and the value is evaluated using this type on the database. No exception is raised in this case.

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
           WHERE ( carrid, carrname ) IN ( ( @field, ' ' ) )
           INTO TABLE @DATA(rtab2).
  CATCH cx\_sy\_open\_sql\_error.
    cl\_demo\_output=>write( 'Error in mapping' ).
ENDTRY.
cl\_demo\_output=>display( ).

Continue
[ABAP SQL - col](javascript:call_link\('abenopen_sql_columns.htm'\))
[ABAP SQL - literal](javascript:call_link\('abenabap_sql_host_literals.htm'\))
[ABAP SQL - @dobj](javascript:call_link\('abenopen_sql_host_variables.htm'\))
[ABAP SQL - @( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\))