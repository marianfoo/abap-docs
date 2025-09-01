  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) →  [ABAP SQL - literal](javascript:call_link\('abenabap_sql_literals.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Untyped%20Literals%2C%20ABENABAP_SQL_UNTYPED_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Untyped Literals

Syntax

... *{* *\[*+*|*\-*\]*n*\[*n*\[*n*\[*...*\]**\]**\]*
    *|* 'c*\[*c*\[*c*\[*...*\]**\]**\]*' *|* \`*\[*c*\[*c*\[*c*\[*...*\]**\]**\]**\]*\` *}* ...

Effect

[Untyped literals](javascript:call_link\('abenuntyped_literal_glosry.htm'\) "Glossary Entry") in ABAP SQL correspond to general [ABAP literals](javascript:call_link\('abenliteral.htm'\)) and the same rules apply. In ABAP SQL, untyped literals can be specified in read positions of ABAP SQL statements where [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) are possible. The following applies, depending on the operand position:

-   If an untyped literal is specified in an operand position in which it is handled like an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)), the corresponding rules apply and the untyped literal is mapped to a dictionary type and evaluated accordingly on the database.
-   If an untyped literal is specified in an operand position in which it is not handled like an SQL expression, it is handled like a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)). If necessary, an ABAP specific type conversion takes place and a [lossless assignment](javascript:call_link\('abapmove_exact.htm'\)) to the data type required in the operand position must be possible. Non-matching untyped literals produce, depending on the [syntax check mode](javascript:call_link\('abenabap_sql_strict_modes.htm'\)), syntax warnings or syntax errors.

Hints

-   While general ABAP supports untyped literals only, ABAP SQL also supports [typed literals](javascript:call_link\('abenabap_sql_typed_literals.htm'\)) which should be preferred.
-   In some operand positions in which untyped literals are allowed and [host expressions](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) are forbidden, an untyped literal can be specified with the syntax @( literal ) and is handled as an untyped literal and not as an expression.

Example

Reading of data from the DDIC database table SPFLI using ABAP SQL. The read rows are specified as untyped text literals in the WHERE condition. After UP TO, an untyped numeric literal specifies the maximum number of rows to read.

SELECT FROM spfli
       FIELDS 'Lufthansa' AS name,
              cityfrom,
              cityto
       WHERE carrid = 'LH'  AND
             countryfr = 'DE'
       INTO TABLE @FINAL(wa)
       UP TO 10 ROWS.