  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - ( )

Syntax

... ( [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) ) ...

Every full SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) can be enclosed in parentheses ( ... ). There must be a blank after the opening parenthesis and before the closing parenthesis. Parenthesis specify the priority with which expressions are evaluated. Parenthesis levels are evaluated from inside out and from left to right. The result of a parenthesis is the result of the outermost expression in the parenthesis.

Note

Parentheses are used especially in [arithmetic expressions](javascript:call_link\('abensql_arith.htm'\)) to control the priority of calculations.

Example

Parenthesizes a subtraction as the dividend in a division.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              fldate,
       ( CAST( seatsmax AS FLTP ) -  CAST( seatsocc AS FLTP ) )
       / CAST( seatsmax AS FLTP ) AS availability
       ORDER BY carrid, connid, fldate
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).