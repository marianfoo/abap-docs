  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT](javascript:call_link\('abapselect.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ENDSELECT, ABAPENDSELECT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

ENDSELECT

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

ENDSELECT.

Effect

The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement ENDSELECT closes a loop started using [SELECT](javascript:call_link\('abapselect.htm'\)).

Example

SELECT loop. The [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) used here cannot be written to a tabular result, which means that in multirow result sets, a loop is opened that must be closed using ENDSELECT.

SELECT carrid, connid, SUM( seatsocc ) AS seatsocc
       FROM sflight
       GROUP BY carrid, connid
       ORDER BY carrid, connid
       INTO (@FINAL(carrid),@FINAL(connid),@FINAL(seatsocc)).
  ...
ENDSELECT.