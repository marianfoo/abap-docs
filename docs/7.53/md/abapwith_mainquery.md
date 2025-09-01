  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) → 

WITH - mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](javascript:call_link\('abapselect_single.htm'\))*\]*
    *{* [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source
      [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) *}*
  *|* *{* [select\_clause](javascript:call_link\('abapselect_clause.htm'\))
      [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source *}*
    *\[*[WHERE](javascript:call_link\('abapwhere.htm'\)) sql\_cond*\]*
    *\[*[GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) group*\]* *\[* [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) group\_cond*\]*
    *\[*[ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) sort\_key*\]*
    *\[*[db\_hints](javascript:call_link\('abenosql_db_hints.htm'\))*\]* ...

Effect

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of the main query of a [WITH](javascript:call_link\('abapwith.htm'\)) statement. All the same clauses are possible as for a standalone a [SELECT](javascript:call_link\('abapselect.htm'\)) statement except for [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)), and they have the same effect. Under the same circumstances, as in the case of the standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement, a SELECT loop is opened. In this case, this has to be closed with [ENDWITH](javascript:call_link\('abapendwith.htm'\)).

If an internal table [@itab](javascript:call_link\('abapselect_data_source.htm'\)) with elementary row type is accessed in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of a common table expression, the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) cannot be \* or contain data\_source~\*.

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