  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

SELECT - FIELDS

Syntax

... FIELDS [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) ...

Effect

The addition FIELDS must prefix the SELECT clause [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"), if this clause is listed after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)). If the SELECT clause [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) is listed in front of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)), then FIELDS cannot be specified.

Example

Two SELECT statements with identical values and different arrangements of the SELECT and FROM clauses.

SELECT FROM scarr
       FIELDS carrid, carrname
       ORDER BY carrid
       INTO TABLE @DATA(result1).
SELECT carrid, carrname
       FROM scarr
       ORDER BY carrid
       INTO TABLE @DATA(result2).
ASSERT result1 = result2.