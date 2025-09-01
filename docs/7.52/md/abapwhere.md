  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

SELECT - WHERE

[Quick Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... WHERE [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\)) ...

Effect

The addition WHERE restricts the number of rows included in the results set by the statement SELECT of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"), by using a logical expression [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\)). A row is only included in the results set if the logical expression is true.

Except for columns of type STRING or RAWSTRING plus LCHR, LRAW, all columns of the [data sources](javascript:call_link\('abapselect_data_source.htm'\)) specified after [FROM](javascript:call_link\('abapfrom_clause.htm'\)) can be evaluated in the WHERE condition of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). The columns do not necessarily have to be a part of the results set.

The [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a client-specific data source can only be used in the WHERE condition if automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is switched off using the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)). This is checked in full in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

Notes

-   If the data source is accessed using generic [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry"), the buffered area must be specified in full in the WHERE condition. If not, buffering is bypassed.
    
-   If the data sources are accessed using single record buffering, the conditions joined using AND in the WHERE condition must be specified for all key fields of the primary key. If not, buffering is bypassed.
    
-   For frequently used SELECT statements with an identical WHERE condition, an [index](javascript:call_link\('abenddic_database_tables_index.htm'\)). In WHERE conditions, the fields of the index should be expressed as equality comparisons and joined using the AND operator. All the fields of an index that are behind a field, for which a comparison other than \= or EQ is specified in the WHERE clause, cannot be used for searching in the index.
    
-   It is currently not possible to use [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") as operands in a WHERE condition. This is only possible in the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.
    

Example

Reads all objects in the ABAP keyword documentation from the table DOKIL using a suitable WHERE condition. Messages of the [code inspector](javascript:call_link\('abencode_inspector_glosry.htm'\) "Glossary Entry") are suppressed using [pseudo comments](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") due to the table buffering bypass.

SELECT FROM dokil
       FIELDS object, langu
       WHERE  id = 'SD'  AND
              typ = 'E'  AND
                   ( object LIKE 'ABAP%'    OR
                     object LIKE 'ABEN%'    OR
                     object LIKE 'DYNP%'  ) AND
                     ( langu = 'D' OR langu = 'E' ) "#EC CI\_GENBUFF
      ORDER BY object, langu                        "#EC CI\_BYPASS
      INTO TABLE @DATA(dokil\_tab).

Executable Examples

-   [Host Expressions in the WHERE Condition](javascript:call_link\('abenhost_expr_in_where_cond_abexa.htm'\))

-   [SQL Expressions in the WHERE Condition](javascript:call_link\('abensql_expr_in_where_cond_abexa.htm'\))