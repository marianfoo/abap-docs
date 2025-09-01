  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

SELECT, select\_clause

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... *\[*DISTINCT*\]* [select\_list](javascript:call_link\('abapselect_list.htm'\)) ...

Addition:

[... DISTINCT](#!ABAP_ONE_ADD@1@)

Effect

SELECT clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). The SELECT clause defines the structure of the result set of the SELECT statement. It consists of a [SELECT list](javascript:call_link\('abapselect_list.htm'\)), which defines the columns of the result set, and an optional addition DISTINCT, which removes duplicative rows from the result set.

The SELECT list [select\_list](javascript:call_link\('abapselect_list.htm'\)) can indicate all columns of a data source using \* or it defines the individual columns of the result set using an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)). It defines the names of the columns in the result set, using optional or mandatory alias names.

Hint

The SELECT clause must either be listed as the first clause after the keyword SELECT, or after the optional addition SINGLE, or after the FROM clause. After the FROM clause, the SELECT clause must be introduced using the addition [FIELDS](javascript:call_link\('abapselect.htm'\)). A FROM clause in front of the SELECT clause supports tools such as the code completion in the ABAP Editor.

Example

SELECT clause after FIELDS, whose SELECT list specifies individual columns as well as aggregate expressions as arguments using SQL expressions.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              MAX( seatsmax - seatsocc ) AS seatsfree\_max,
              MIN( seatsmax - seatsocc ) AS seatsfree\_min
       GROUP BY carrid, connid
       HAVING carrid = CHAR\`LH\`
       INTO TABLE @DATA(result).

Addition   

... DISTINCT

Effect

The addition DISTINCT removes rows that occur more than once in a multirow result set. Here, the entire row content is respected.

The addition DISTINCT must not be used in the following cases:

-   If the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) is used.
-   If a column specified in the SELECT list [select\_list](javascript:call_link\('abapselect_list.htm'\)) has the type STRING, RAWSTRING, LCHR, LRAW, or GEOM\_EWKB.

If DISTINCT is used, the statement SELECT bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").

Hints

-   For the addition DISTINCT, it is not important which columns of the result set are key fields of the associated DDIC database tables, views, or CDS entities.
-   The comparison is based on the entire row content, which means that the number of rows in the result set depends on the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). If, for example, all key fields of a DDIC database table are specified directly as columns in a [SELECT](javascript:call_link\('abenabap_sql_columns.htm'\)) list, there can be no rows that occur more than once. The other extreme is the case where a SELECT list contains a single [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or a single literal. Here, all rows are deleted except one.
-   As a part of the SELECT clause, the addition DISTINCT has an effect before the additions [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)) and [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) are evaluated.
-   If DISTINCT is specified, it should be noted that this requires the execution of sort operations in the database system, and the statement SELECT therefore bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").

Example

Output of all destinations to which Lufthansa flies from Frankfurt.

SELECT DISTINCT cityto
       FROM spfli
       WHERE carrid   = 'LH' AND
             cityfrom = 'FRANKFURT'
       INTO TABLE @DATA(destinations).
cl\_demo\_output=>display( destinations ).

Continue
[SELECT, select\_list](javascript:call_link\('abapselect_list.htm'\))