  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) → 

OPEN CURSOR, mainquery\_clauses

Syntax

... *{* [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source
      [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) *}*
  *|* *{* [select\_clause](javascript:call_link\('abapselect_clause.htm'\))
      [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source *}*
    *\[**\[*[FOR ALL ENTRIES IN](javascript:call_link\('abenwhere_all_entries.htm'\)) itab*\]*
      [WHERE](javascript:call_link\('abapwhere.htm'\)) sql\_cond*\]*
    *\[*[GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) group*\]* *\[* [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) group\_cond*\]*
    *\[*[ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) sort\_key*\]*
    *\[*[db\_hints](javascript:call_link\('abenabap_sql_db_hints.htm'\))*\]* ...

Effect

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of the [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") after [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)). All the same clauses are possible as for a standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement except for [SINGLE](javascript:call_link\('abapselect_single.htm'\)). The clauses define the result set, which can be accessed using the [FETCH](javascript:call_link\('abapfetch.htm'\)) statement. The result set is regarded as having multiple rows.

The addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) cannot be used if [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") are defined using WITH.

Example

[OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) statement with all possible clauses.

OPEN CURSOR @DATA(dbcur) FOR
  SELECT FROM sflight
         FIELDS carrid,
                connid,
                SUM( seatsocc ) AS seatsocc
         WHERE carrid = 'LH'
         GROUP BY carrid, connid
         HAVING SUM( seatsocc ) > 1000
         ORDER BY carrid, connid.