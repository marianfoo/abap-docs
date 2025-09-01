  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT](javascript:call_link\('abapselect.htm'\)) → 

SELECT - mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](javascript:call_link\('abapselect_single.htm'\))*\]*
    *{* [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source
      [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) *}*
  *|* *{* [select\_clause](javascript:call_link\('abapselect_clause.htm'\))
      [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source *}*
    *\[**\[*[FOR ALL ENTRIES IN](javascript:call_link\('abenwhere_logexp_itab.htm'\)) itab*\]*
      [WHERE](javascript:call_link\('abapwhere.htm'\)) sql\_cond*\]*
    *\[*[GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) group*\]* *\[* [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) group\_cond*\]*
    *\[*[ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) sort\_key*\]*
    *\[*[db\_hints](javascript:call_link\('abenosql_db_hints.htm'\))*\]*  ...

Effect

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of a [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") represented by a standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement. The clauses and additions define the results set of the SELECT statement:

-   Rows of the results set
    

-   Multirow Results Set
    If [SINGLE](javascript:call_link\('abapselect_single.htm'\)) is not specified, and if [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") are not exclusively specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the SELECT clause [select\_clause](javascript:call_link\('abapselect_clause.htm'\)), the results set is multirow or tabular by default. All database rows that are selected by the remaining additions of the SELECT statement are included in the results set. If the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) is not used, the order of the rows in the results set is not defined and, if the same statement SELECT is executed multiple times, the order may be different each time. A data object specified after [INTO](javascript:call_link\('abapinto_clause.htm'\)) can be an internal table and the addition [APPENDING](javascript:call_link\('abapinto_clause.htm'\)) can be used. If no internal table is specified after INTO or APPENDING, the statement SELECT in multirow results sets triggers a loop that must be closed using ENDSELECT.

-   Single Row Results Set
    The optional addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) defines a single-row results set that can be protected against parallel changes by another program. When using SINGLE, it is not possible to specify an internal table as target object, and the addition SINGLE cannot be combined with all additions of the SELECT statement.

-   Columns of the Results Set
    

The SELECT clause [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) defines the structure of the results set. It consists mainly of a [SELECT list](javascript:call_link\('abapselect_list.htm'\)) that defines the columns of the results set. Duplicate rows can be excluded (this is optional).

-   Data Sources
    

The [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause specifies which [data sources](javascript:call_link\('abapselect_data_source.htm'\)) source are read. These can either be data sources in the database accessed by the current query or they can be [internal tables](javascript:call_link\('abapselect_itab.htm'\)). Data sources in the database must be defined in ABAP Dictionary.

-   Conditions
    

The results set can be restricted using the [WHERE](javascript:call_link\('abapwhere.htm'\)) clause. The optional addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)) can be used to compare the content of a column in the database with a component with all rows of a structured internal table itab.

-   Grouping
    

The [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause merges multiple database rows into one row of the results set. The [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause restricts the merged rows.

-   Database Notes
    

[db\_hints](javascript:call_link\('abenosql_db_hints.htm'\)) can be used to specify [database hints](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry").

-   Sorting
    

The [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause sorts the results set. If ORDER BY is not specified, the order of the rows in the results set is undefined.

The SELECT clause [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) can be specified before or after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)). After the FROM clause, the SELECT clause must be prefixed with the addition FIELDS.

Notes

-   Although the WHERE condition is optional, for performance reasons, it should always be specified, and the results set should not be restricted in [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry").
    
-   The arrangement of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) before a [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)) with [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) supports tools such as code completion in the ABAP Editor.
    

-   If a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") is used to access a [](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")[CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity associated with a [](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry")[CDS](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") role and for which [](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))[CDS](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, only that data is read implicitly that matches the [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") database view of a CDS view is accessed, no access control takes place.

-   A [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)) started with FIELDS after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) leads to the [strict mode as of Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)).
    

Example

[SELECT](javascript:call_link\('abapselect.htm'\)) statement with all possible clauses.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              SUM( seatsocc ) AS seatsocc
       WHERE carrid = 'LH'
       GROUP BY carrid, connid
       HAVING SUM( seatsocc ) > 1000
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).