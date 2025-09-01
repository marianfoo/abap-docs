  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) → 

WITH, mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_single.htm)*\]*
    *{* [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) source *}*
    *\[*[WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) sql\_cond*\]*
    *\[*[GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm) group*\]* *\[* [HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm) group\_cond*\]*
    *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) sort\_key*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_db_hints.htm)*\]* ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) of the main query of a [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) statement. All the same clauses are possible as for a standalone [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement except for [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_all_entries.htm), and they have the same effect. Under the same circumstances, as in the case of the standalone [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement, a SELECT loop is opened. In this case, this has to be closed with [ENDWITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendwith.htm).

The result set of a common table expression does not have a client column, which means that the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of the main query cannot contain the addition [USING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) for switching or the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client_obsolete.htm) for disabling [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm).

If an internal table [@itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) with elementary line type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of a common table expression, the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) cannot be \* or contain data\_source~\*.

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