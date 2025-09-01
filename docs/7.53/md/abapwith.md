  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) → 

WITH

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_shortref.htm)

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm)*\]* ),
    *\[*[associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm)*\]**\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm)*\]* ),
    *\[*[associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm)*\]*,
  ... *\]*
  SELECT [mainquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_mainquery.htm)
         *\[*[UNION ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm)*\]*
         [INTO*|*APPENDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) target
         *\[*[UP TO ...*\]* *\[*OFFSET ...*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_up_to_offset.htm)
         *\[*[abap\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_additions.htm)*\]*.
  ...
*\[*ENDWITH*\]*.

Addition:

[... ( name1, name2, ... )](#!ABAP_ONE_ADD@1@)

Effect

The [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") keyword WITH introduces the definition of [common table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") (CTE for short) to be used in a final [main query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmainquery_glosry.htm "Glossary Entry"). WITH can be used as a standalone statement (as shown here) or after the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_cursor.htm).

Each common table expression creates a tabular results set in a [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry"), which can be used in the subsequent queries of the WITH statement as data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm). The WITH statement consists of the following parts:

-   A comma-separated list with at least one definition of a common table expression
    

-   Each common table expression has a unique name +cte1, +cte2, ... . The names cte can have a maximum of 30 characters, and can contain letters, numbers, and underscores. They must start with either a letter or an underscore. Also, the name must be prefixed with the character +. The initial + character is part of the name, but cannot stand alone and must not be followed by a number.

-   An optional name list ( name1, name2, ... ) for the columns of the results set of the common table expression can be specified directly after the name (see below).

-   A parenthesized subquery SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm) follows the AS. This subquery creates the tabular results set of the common table expression. The language element [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm) can be used to combine the results sets of multiple subqueries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion_clause.htm) apply for specifying clauses.

-   A closing main query SELECT [mainquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_mainquery.htm), which can contain the same [clauses and additions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) (apart from [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm)) as a standalone [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement, and works in the same way:
    

-   The results set of the main query is assigned to ABAP data objects according to the [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) clause.

-   As described in [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm), a single- or multirow results set is created and, depending on the target area specified in the [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) clause, a SELECT loop is either opened or not.

-   A SELECT loop must close with the [ENDWITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendwith.htm) statement. For WITH ... SELECT, ENDWITH has exactly the same meaning as [ENDSELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendselect.htm) for a standalone [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) loop.

-   In the main query, each of the previously defined common table expressions +cte1, +cte2, and so on, can be used as the data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm).

The language element [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm) can be used to combine the results sets of multiple main queries. In this case, additional rules [query\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion_clause.htm) apply for specifying clauses.

A common table expression defined in the WITH statement can be used after its definition in the subquery of another common table expression and in the main query as the data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm). It cannot be used in its own subquery or in the subqueries of preceding definitions. A common table expression is only known within the current WITH statement.

Each common table expression defined in a WITH statement must be used at least once within the WITH statement, either in another common table expression or in the main query. This means that the main query must access at least one common table expression.

The name +cte of a common table expression is valid across the full WITH statement. The character + is omitted from the name of the substructure only when a substructure is created as a data source for a common table expression in the [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) clause.

The results set of a common table expression never has a [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry"). Even if the client column of a client-specific data source is added explicitly in the subquery to its SELECT list, it does not behave as such in the results set. For this reason, in a query of the WITH statement that uses a common table expression as a data source, the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm) cannot be specified.

When [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") are accessed within a common table expression, the addition [associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm) can be used to publish [associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") of these views for use in [path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) of the current WITH statement.

Notes

-   A common table expression creates a temporary tabular results set, which can be accessed during execution of the WITH statement. Common table expressions can therefore be thought of as temporary views, which only exist for the duration of the database access.
    
-   Common table expressions can be used whenever subtotals are required in a SELECT statement. ABAP SQL statements are more readable if common table expressions are used, and a common table expression is always useful if subtotals is required more than once. If required, common table expressions can also perform the tasks of [GTTs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry").
    
-   Using common table expressions also provides the option of selecting directly from a subquery SELECT FROM subquery, which is not possible in ABAP SQL.
    
-   The character + used as a prefix labels a table expression as a common table expression, just like the character @ for host variables. The character + prevents a common table expression from having the same name as a table from the ABAP Dictionary and hence obscuring it.
    
-   For WITH loops that are closed with ENDWITH, the same notes apply as for [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) loops. In particular, WITH loops should not be nested.
    
-   The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm) can be used in the queries of a WITH statement, as is usual for client-specific data sources, to deactivate automatic client handling there.
    
-   In the main query of the WITH statement, if \* is specified in the SELECT list, this means that there is no unconverted transfer to a work area specified after [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm).
    
-   The WITH statement bypasses [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    
-   If the WITH statement is used, syntax buffering is executed in the [strict mode for Release7.51](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_751.htm).
    

Example

The results set of the common table expression +cities is a list of all cities that are flown from or to by an airline. The common table expression is used in the main query as the data source of the subquery of the WHERE condition.

DATA carrid TYPE spfli-carrid VALUE 'LH'.
cl\_demo\_input=>request( CHANGING field = carrid ).
WITH
  +cities AS (
    SELECT cityfrom AS city
           FROM spfli
           WHERE carrid = @carrid
    UNION DISTINCT
    SELECT cityto AS city
           FROM spfli
           WHERE carrid = @carrid )
  SELECT \*
         FROM sgeocity
         WHERE city IN ( SELECT city
                                FROM +cities )
         INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Examples

-   [WITH, Common Table Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_cte_abexa.htm)
    
-   [WITH, Client Handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_client_handling_abexa.htm)
    
-   [WITH, Aggregation for Join Set](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_agg_union_abexa.htm)
    

Addition

... ( name1, name2, ... )

Effect

Defines the column names of a common table expression +cte. The specified names name1, name2, ... are assigned to the columns defined in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) of the [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm) of the common table expression in the order given. The names work like the alternative column names defined in the SELECT list using AS and overwrite these names.

-   If a name list is specified, it must contain a name for each column of the common table expression.
    
-   If no name list is specified, the columns of the results list have the names defined in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) of the [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm).
    

The opening parenthesis must be directly after the name +cte1, +cte2, and so on. At least one blank must be placed after the opening parenthesis and before the closing parenthesis. There can be blanks in the comma-separated list of names.

The names can have a maximum of 30 characters, and can contain letters, numbers, and underscores. They must start with either a letter or an underscore.

Note

It is possible to specify a name list if all columns with \* are selected in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) of the [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm). This can lead to syntax errors if the data source of the subquery is then extended.

Example

The results sets of both common table expressions +connections and +sum\_seats are merged in the subquery of the common table expression +result in a join expression. An explicit name list assigns names to the resulting columns. These names are used in the main query to sort the results. For each flight connection of the selected airline, the total number of occupied seats is output from the database table SFLIGHT.

DATA from\_id TYPE spfli-carrid VALUE 'AA'.
cl\_demo\_input=>add\_field( CHANGING field = from\_id ).
DATA to\_id TYPE spfli-carrid VALUE 'UA'.
cl\_demo\_input=>request( CHANGING field = to\_id ).
from\_id = to\_upper( from\_id ).
to\_id   = to\_upper( to\_id ).
WITH
  +connections AS (
    SELECT spfli~carrid, carrname, connid, cityfrom, cityto
           FROM spfli
           INNER JOIN scarr
             ON scarr~carrid = spfli~carrid
           WHERE spfli~carrid BETWEEN @from\_id AND @to\_id ),
  +sum\_seats AS (
    SELECT carrid, connid, SUM( seatsocc ) AS sum\_seats
           FROM sflight
           WHERE carrid BETWEEN @from\_id AND @to\_id
           GROUP BY carrid, connid ),
  +result( name, connection, departure, arrival, occupied ) AS (
    SELECT carrname, c~connid, cityfrom, cityto, sum\_seats
           FROM +connections AS c
             INNER JOIN +sum\_seats AS s
               ON c~carrid = s~carrid AND
                  c~connid = s~connid )
  SELECT \*
         FROM +result
         ORDER BY name, connection
         INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Continue
[WITH subquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm)
[WITH - mainquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_mainquery.htm)
[WITH - associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm)
[ENDWITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendwith.htm)
[WITH Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_abexas.htm)