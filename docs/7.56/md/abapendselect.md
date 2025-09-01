  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT](javascript:call_link\('abapselect.htm'\)) → 

ENDSELECT

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

ENDSELECT.

Effect

The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement ENDSELECT closes a loop started using [SELECT](javascript:call_link\('abapselect.htm'\)).

Example

SELECT loop. The [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) used here cannot be written to a tabular result, which means that, in multirow result sets, a loop is opened that must be closed using ENDSELECT.

SELECT carrid, connid, SUM( seatsocc ) AS seatsocc
       FROM sflight
       GROUP BY carrid, connid
       ORDER BY carrid, connid
       INTO (@DATA(carrid),@DATA(connid),@DATA(seatsocc)).
  ...
ENDSELECT.