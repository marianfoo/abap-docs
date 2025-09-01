  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20WHERE%2C%20ABAPWHERE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, WHERE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_shortref.htm)

Syntax

... WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasql_cond.htm) ...

Effect

The addition WHERE restricts the number of rows that are included in the result set by the statement SELECT of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") by using a logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm). A row is only included in the result set if the logical expression is true.

Except for columns of type STRING, RAWSTRING, or GEOM\_EWKB, or LCHR and LRAW, all columns of the [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) can usually be evaluated in the WHERE condition of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry"). Special rules apply to some logical expressions. The columns do not necessarily have to be a part of the result set.

[Implicit ABAP SQL client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) applies to the WHERE clause. The [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source cannot be used as an operand in the WHERE condition.

Hints

-   If the data source is accessed using generic [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry"), the buffered area must be specified completely in the WHERE condition, otherwise buffering is bypassed.
-   If the data sources are accessed using single record buffering, the conditions combined using AND in the WHERE condition must be specified for all key fields of the primary key, otherwise buffering is bypassed.
-   For frequently used SELECT statements with an identical WHERE condition, it can be useful to create an [index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_index.htm). In WHERE conditions, the fields of the index should be expressed as equality comparisons and combined using the AND operator. All the fields of an index that are behind a field, for which a comparison other than \= or EQ is specified in the WHERE clause, cannot be used for searching in the index.
-   It is currently not possible to use [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") as operands in a WHERE condition. This is only possible in the [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) clause.
-   If one of the columns involved in the logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) contains the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry"), its result is unknown, and no row is included in the result set.
-   The [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source can still be used in the ON condition if implicit [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_handling_glosry.htm "Glossary Entry") is disabled using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client_obsolete.htm).

Example

Reading of all objects in the ABAP keyword documentation from the table DOKIL using a suitable WHERE condition. Messages of the [code inspector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencode_inspector_glosry.htm "Glossary Entry") regarding the bypassing of the table buffer are suppressed using [pseudo comments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpseudo_comment_glosry.htm "Glossary Entry").

SELECT FROM dokil
       FIELDS object, langu
       WHERE  id = 'SD'  AND
              typ = 'E'  AND
                   ( object LIKE 'ABAP%'    OR
                     object LIKE 'ABEN%'    OR
                     object LIKE 'DYNP%'  ) AND
                     ( langu = 'D' OR langu = 'E' ) "#EC CI\_GENBUFF
      ORDER BY object, langu                        "#EC CI\_BYPASS
      INTO TABLE @FINAL(dokil\_tab).

Executable Examples

-   [Host Expressions in the WHERE Condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_expr_in_where_cond_abexa.htm)
-   [SQL Expressions in the WHERE Condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_in_where_cond_abexa.htm)

Continue
![Example](exa.gif "Example") [SELECT, SQL Expressions in the WHERE Condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_in_where_cond_abexa.htm)