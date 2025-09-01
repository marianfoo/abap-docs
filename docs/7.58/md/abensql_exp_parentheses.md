  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20%28%20%29%2C%20ABENSQL_EXP_PARENTHESES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - ( )

Syntax

... ( [sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) ) ...

Every full SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) can be enclosed in parentheses ( ... ). There must be a blank after the opening parenthesis and in front of the closing parenthesis. Parenthesis affect the priority with which expressions are evaluated. Parenthesis levels are evaluated from inside out and from left to right. The result of a parenthesis is the result of the outermost expression in the parenthesis.

Hints

-   Using parentheses always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm). Parentheses can only be used for operand positions for which SQL expressions are possible. This particularly applies to placing parentheses around [elementary SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_elem.htm). Without parentheses, they can also be used in specific operand positions in which no SQL expressions are possible.
-   Parentheses are used especially in [arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm) to affect the priority of calculations.

Example

Parenthesizing of a subtraction as the dividend in a division.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              fldate,
       ( CAST( seatsmax AS FLTP ) -  CAST( seatsocc AS FLTP ) )
       / CAST( seatsmax AS FLTP ) AS availability
       ORDER BY carrid, connid, fldate
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).