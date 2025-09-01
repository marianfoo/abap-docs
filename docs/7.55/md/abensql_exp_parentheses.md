  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) → 

sql\_exp - ( )

Syntax

... ( [sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) ) ...

Every full SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) can be enclosed in parentheses ( ... ). There must be a blank after the opening parenthesis and in front of the closing parenthesis. Parenthesis affect the priority with which expressions are evaluated. Parenthesis levels are evaluated from inside out and from left to right. The result of a parenthesis is the result of the outermost expression in the parenthesis.

Hints

-   Using parentheses always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm). Parentheses can only be used for operand positions for which SQL expressions are possible. This particularly applies to placing parentheses around [elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm). Without parentheses, they can also be used in specific operand positions in which no SQL expressions are possible.

-   Parentheses are used especially in [arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_arith.htm) to affect the priority of calculations.

Example

Parenthesizing of a subtraction as the dividend in a division.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              fldate,
       ( CAST( seatsmax AS FLTP ) -  CAST( seatsocc AS FLTP ) )
       / CAST( seatsmax AS FLTP ) AS availability
       ORDER BY carrid, connid, fldate
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).