  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_operands.htm) →  [ABAP SQL - literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_literals.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Untyped Literals, ABENABAP_SQL_UNTYPED_LITERALS, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Untyped Literals

Syntax

... *{* *\[*+*|*\-*\]*n*\[*n*\[*n*\[*...*\]**\]**\]*
    *|* 'c*\[*c*\[*c*\[*...*\]**\]**\]*' *|* \`*\[*c*\[*c*\[*c*\[*...*\]**\]**\]**\]*\` *}* ...

Effect

[Untyped literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuntyped_literal_glosry.htm "Glossary Entry") in ABAP SQL correspond to general [ABAP literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral.htm) and the same rules apply. In ABAP SQL, untyped literals can be specified in read positions of ABAP SQL statements where [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) are possible. The following applies, depending on the operand position:

-   If an untyped literal is specified in an operand position in which it is handled like an [elementary SQL expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_elem.htm), the corresponding rules apply and the untyped literal is mapped to a dictionary type and evaluated accordingly on the database.
-   If an untyped literal is specified in an operand position in which it is not handled like an SQL expression, it is handled like a [host variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm). If necessary, an ABAP specific type conversion takes place and a [lossless assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_exact.htm) to the data type required in the operand position must be possible. Non-matching untyped literals produce, depending on the [syntax check mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strict_modes.htm), syntax warnings or syntax errors.

Hints

-   While general ABAP supports untyped literals only, ABAP SQL also supports [typed literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_typed_literals.htm) which should be preferred.
-   In some operand positions in which untyped literals are allowed and [host expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm) are forbidden, an untyped literal can be specified with the syntax @( literal ) and is handled as an untyped literal and not as an expression.

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