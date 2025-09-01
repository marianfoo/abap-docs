  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [OPEN CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm) → 

OPEN CURSOR - mainquery\_clauses

Syntax

... *{* [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) source *}*
    *\[**\[*[FOR ALL ENTRIES IN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm) itab*\]*
      [WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) sql\_cond*\]*
    *\[*[GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) group*\]* *\[* [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) group\_cond*\]*
    *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) sort\_key*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_db_hints.htm)*\]* ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) of the [main query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry") after [OPEN CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm). All the same clauses are possible as for a standalone a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement except for [SINGLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm). The clauses define the results set, which can be accessed using the [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm) statement. The results set is regarded as having multiple rows.

The addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm) cannot be used if [common table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") are defined using WITH.

Example

Statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm) with all possible clauses.

OPEN CURSOR @DATA(dbcur) FOR
  SELECT FROM sflight
         FIELDS carrid,
                connid,
                SUM( seatsocc ) AS seatsocc
         WHERE  carrid = 'LH'
         GROUP BY carrid, connid
         HAVING SUM( seatsocc ) > 1000
         ORDER BY carrid, connid.