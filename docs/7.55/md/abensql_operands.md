---
title: "Syntax"
description: |
  ... col(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm)  literal(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm)  @dobj(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm)
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_operands.htm"
abapFile: "abensql_operands.htm"
keywords: ["select", "do", "while", "if", "case", "try", "catch", "class", "data", "types", "abensql", "operands"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) → 

ABAP SQL - SQL Operands sql\_elem

Syntax

... [col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm)
  *|* [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm) *|* [@dobj](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) *|* [@( expr )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm) ...

Effect

Specifies a column [col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm), a literal [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm), a host variable [@dobj](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm), or a host expression [@( expr )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm) as an elementary [SQL operand](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_operand_glosry.htm "Glossary Entry") in an ABAP SQL operand position.

These elementary operands can have the following properties:

-   They can be specified as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm) in all operand positions in which [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) are possible.

-   They can also occur in specific operand positions in which no SQL expressions or restricted SQL expressions are possible.

To operand positions in which host variables are handled as SQL expressions, the associated rules for the expressions apply. The rules of the respective position apply in operand positions in which no SQL expressions are possible.

While the value of a column col or a [typed literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm) is determined on the database, the values of [untyped literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_untyped_literals.htm), host variables, and host expressions are passed from ABAP to the database system before the SQL statement is executed or copied from the database system after it is executed. The operand position determines how the value of such an ABAP object is handled:

-   An ABAP object specified as an [elementary SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm) in a read position is mapped to a dictionary type as described there, passed to the database with this type, and handled accordingly. The database rules apply.

-   In operand positions in which an ABAP object is not handled as an SQL expression, a conversion between the respective types takes place according to [ABAP conversion rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm) if necessary. The mapping of [ABAP Dictionary types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) to [ABAP types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) is respected if necessary. If an [untyped literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_untyped_literals.htm), a [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm), or a [host expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm) is read, conversions are subject to the [rules for lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_exact.htm). If the assignment cannot be lossless, an exception is raised. Literals and [host constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_constant_glosry.htm "Glossary Entry") produce syntax warnings or syntax errors, depending on the [syntax check mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm).

Hint

[Typed literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm) are always treated as elementary SQL expressions, while [untyped literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_untyped_literals.htm) can also be treated as host variables, depending on the operand position.

Example

SQL expressions are possible on the left side of the [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) condition. The specified column carrid can be placed in parentheses as an elementary SQL expression. No general SQL expressions are possible on the right side of the condition. The literal CHAR\`UA\` as an elementary SQL expression can be used, but not be set in parentheses.

SELECT \*
       FROM scarr
       WHERE ( carrid ) =  CHAR\`UA\`
       INTO TABLE @DATA(itab).

Example

In the first SELECT statement, the host variable @field is in an [operand position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_operand_in.htm) in which it is not handled as an elementary SQL expression. Their content must comply with the [rules for lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_exact.htm), which is not the case here. This is why an exception of the class CX\_SY\_OPEN\_SQL\_DATA\_ERROR is raised. In the second SELECT statement, the same host variable is in an [operand position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_list_in.htm) in which it is evaluated as an elementary SQL expression and a [mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm) takes place to a dictionary type and the value is evaluated using this type on the database. No exception is raised in this case.

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
[ABAP SQL - col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm)
[ABAP SQL - literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm)
[ABAP SQL - @dobj](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm)
[ABAP SQL - @( expr )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm)