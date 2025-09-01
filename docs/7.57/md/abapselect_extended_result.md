  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, extended_result, ABAPSELECT_EXTENDED_RESULT, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, extended\_result

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... EXTENDED RESULT @oref ...

Effect

The EXTENDED RESULT addition of the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause can be used to provide an extended result of the current [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") in a result object. After EXTENDED RESULT, an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") oref of static type for the documented class [CL\_OSQL\_EXTENDED\_RESULT](javascript:call_link\('abencl_osql_extended_result.htm'\)) must be specified as a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)), which points to an object of the class. The reference variable must be prefixed with the escape character @.

The following applies to use of EXTENDED RESULT:

-   The reference variable must not be initial, and the object must be created before execution of the ABAP SQL statement. Parameters specifying which values the extended result should include must be passed to the instance constructor of class [CL\_OSQL\_EXTENDED\_RESULT](javascript:call_link\('abencl_osql_extended_result.htm'\)).
-   If possible, the result object is filled with the requested values at first database access.
    -   If a loop is opened with the statements [SELECT](javascript:call_link\('abapselect.htm'\)) or [WITH](javascript:call_link\('abapwith.htm'\)), the result object is filled once when the loop is entered.
    -   If the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause after [FETCH](javascript:call_link\('abapfetch.htm'\)) is used for the result set of a database cursor that is opened with [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), the result object is filled once in the first FETCH statement.
-   After the ABAP SQL statement is closed, the required values can be read using the instance methods of the class. If the result object does not then contain any results, or no valid results, an exception of the class CX\_OSQL\_EXTENDED\_RESULT is raised.

Hint

The addition EXTENDED RESULT can currently only be used for access to [cached views](javascript:call_link\('abenhana_cached_views.htm'\)) of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Example

Excerpt from the executable example SAP HANA, [Cached Views](javascript:call_link\('abenhana_cached_views_abexa.htm'\)).

FINAL(extended\_result) =
  NEW cl\_osql\_extended\_result( iv\_cached\_view = abap\_true ).
SELECT carrid,
       MAX( fldate )   AS max\_fldate,
       MIN( price )    AS min\_price,
       SUM( seatsocc ) AS sum\_seatsocc
       FROM demo\_cds\_cached\_view
       GROUP BY carrid
       %\_HINTS HDB 'RESULT\_CACHE'
       INTO TABLE @FINAL(result)
       EXTENDED RESULT @extended\_result.