  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) → 

WITH - mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_single.htm)*\]*
    *{* [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) source *}*
    *\[*[WHERE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwhere.htm) sql\_cond*\]*
    *\[*[GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) group*\]* *\[* [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) group\_cond*\]*
    *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) sort\_key*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenosql_db_hints.htm)*\]* ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) of the main query of a [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) statement. All the same clauses are possible as for a standalone a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement except for [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm), and they have the same effect. Under the same circumstances, as in the case of the standalone [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement, a SELECT loop is opened. In this case, this has to be closed with [ENDWITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendwith.htm).

If an internal table [@itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) with elementary row type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause of a common table expression, the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) cannot be \* or contain data\_source~\*.

Example

The example shows a WITH statement, whose main query creates a tabular result set. Since the example writes to an internal table itab, no SELECT loop is opened.

WITH
  +carriers AS ( SELECT FROM scarr
                        FIELDS carrid, carrname )
  SELECT FROM spfli AS s
           INNER JOIN +carriers AS c
             ON s~carrid = c~carrid
         FIELDS c~carrname, s~connid
         WHERE s~carrid = 'UA'
         INTO TABLE @DATA(itab)
         UP TO 10 ROWS.
  cl\_demo\_output=>display( itab ).