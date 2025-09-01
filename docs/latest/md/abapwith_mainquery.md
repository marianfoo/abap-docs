  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20mainquery_clauses%2C%20ABAPWITH_MAINQUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](javascript:call_link\('abapselect_single.htm'\))*\]*
    *{* [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source
      [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) *}*
  *|* *{* [select\_clause](javascript:call_link\('abapselect_clause.htm'\))
      [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source *}*
    *\[*[WHERE](javascript:call_link\('abapwhere.htm'\)) sql\_cond*\]*
    *\[*[GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) group*\]* *\[* [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) group\_cond*\]*
    *\[*[ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) sort\_key*\]*
    *\[*[db\_hints](javascript:call_link\('abenabap_sql_db_hints.htm'\))*\]* ...

Effect

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of the main query of a [WITH](javascript:call_link\('abapwith.htm'\)) statement. All clauses are possible as in a standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement except for [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)), and they have the same effect. In particular, a SELECT loop is opened under the same circumstances as in the standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement. In this case, this loop must be closed with [ENDWITH](javascript:call_link\('abapendwith.htm'\)).

The result set of a common table expression does not have a client column, which means that the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of the main query cannot contain the addition [USING](javascript:call_link\('abapselect_client.htm'\)) for switching or the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) for disabling [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)).

If an internal table [@itab](javascript:call_link\('abapselect_data_source.htm'\)) with elementary row type is accessed in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of a common table expression, the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) cannot be \* or contain data\_source~\*.

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