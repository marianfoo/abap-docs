  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20mainquery_clauses%2C%20ABAPWITH_MAINQUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_single.htm)*\]*
    *{* [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) source *}*
    *\[*[WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm) sql\_cond*\]*
    *\[*[GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm) group*\]* *\[* [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm) group\_cond*\]*
    *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm) sort\_key*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_db_hints.htm)*\]* ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) of the main query of a [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) statement. All clauses are possible as in a standalone [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement except for [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_all_entries.htm), and they have the same effect. In particular, a SELECT loop is opened under the same circumstances as in the standalone [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement. In this case, this loop must be closed with [ENDWITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendwith.htm).

The result set of a common table expression does not have a client column, which means that the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause of the main query cannot contain the addition [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) for switching or the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) for disabling [implicit client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm).

If an internal table [@itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) with elementary row type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause of a common table expression, the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm) cannot be \* or contain data\_source~\*.

Example

The example shows a WITH statement whose main query creates a tabular result set. Since the example writes to an internal table itab, no SELECT loop is opened.

WITH
  +carriers AS ( SELECT FROM scarr
                        FIELDS carrid, carrname )
  SELECT FROM spfli AS s
           INNER JOIN +carriers AS c
             ON s~carrid = c~carrid
         FIELDS c~carrname, s~connid
         WHERE s~carrid = 'UA'
         INTO TABLE @FINAL(itab)
         UP TO 10 ROWS.
  cl\_demo\_output=>display( itab ).