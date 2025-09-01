  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OPEN%20CURSOR%2C%20mainquery_clauses%2C%20ABAPOPEN_CURSOR_MAINQUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OPEN CURSOR, mainquery\_clauses

Syntax

... *{* [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) source *}*
    *\[**\[*[FOR ALL ENTRIES IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_all_entries.htm) itab*\]*
      [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm) sql\_cond*\]*
    *\[*[GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm) group*\]* *\[* [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) group\_cond*\]*
    *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) sort\_key*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_db_hints.htm)*\]* ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) of the [main query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmainquery_glosry.htm "Glossary Entry") after [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm). All the same clauses are possible as for a standalone [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement except for [SINGLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_single.htm). The clauses define the result set, which can be accessed using the [FETCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfetch.htm) statement. The result set is regarded as having multiple rows.

The addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_all_entries.htm) cannot be used if [common table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") are defined using WITH.

Example

[OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) statement with all possible clauses.

OPEN CURSOR @DATA(dbcur) FOR
  SELECT FROM sflight
         FIELDS carrid,
                connid,
                SUM( seatsocc ) AS seatsocc
         WHERE carrid = 'LH'
         GROUP BY carrid, connid
         HAVING SUM( seatsocc ) > 1000
         ORDER BY carrid, connid.