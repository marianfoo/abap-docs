  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) → 

SELECT - mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm)*\]*
    *{* [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) source *}*
    *\[**\[*[FOR ALL ENTRIES IN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm) itab*\]*
      [WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) sql\_cond*\]*
    *\[*[GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) group*\]* *\[* [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) group\_cond*\]*
    *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) sort\_key*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_db_hints.htm)*\]*  ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) of a [main query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry") represented by a standalone [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement. The clauses and additions define the results set of the SELECT statement:

-   Rows of the results set
    

-   Multirow Results Set
    If [SINGLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm) is not specified, and if [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") are not exclusively specified in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) of the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm), the results set is multirow or tabular by default. All database rows that are selected by the remaining additions of the SELECT statement are included in the results set. If the addition [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) is not used, the order of the rows in the results set is not defined and, if the same statement SELECT is executed multiple times, the order may be different each time. A data object specified after [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) can be an internal table and the addition [APPENDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) can be used. If no internal table is specified after INTO or APPENDING, the statement SELECT in multirow results sets triggers a loop that must be closed using ENDSELECT.

-   Single Row Results Set
    The optional addition [SINGLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm) defines a single-row results set that can be protected against parallel changes by another program. When using SINGLE, it is not possible to specify an internal table as target object, and the addition SINGLE cannot be combined with all additions of the SELECT statement.

-   Columns of the Results Set
    

The SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) defines the structure of the results set. It consists mainly of a [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) that defines the columns of the results set. Duplicate rows can be excluded (this is optional).

-   Data Sources
    

The [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) clause specifies which [data sources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) source are read. These can either be data sources in the database accessed by the current query or they can be [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_itab.htm). Data sources in the database must be defined in ABAP Dictionary.

-   Conditions
    

The results set can be restricted using the [WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) clause. The optional addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm) can be used to compare the content of a column in the database with a component with all rows of a structured internal table itab.

-   Grouping
    

The [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) clause merges multiple database rows into one row of the results set. The [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) clause restricts the merged rows.

-   Database Notes
    

[db\_hints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_db_hints.htm) can be used to specify [database hints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_hint_glosry.htm "Glossary Entry").

-   Sorting
    

The [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) clause sorts the results set. If ORDER BY is not specified, the order of the rows in the results set is undefined.

The SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) can be specified before or after the [FROM clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm). After the FROM clause, the SELECT clause must be prefixed with the addition FIELDS.

Notes

-   Although the WHERE condition is optional, for performance reasons, it should always be specified, and the results set should not be restricted in [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry").
    
-   The arrangement of the [FROM clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) before a [SELECT clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) with [FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfields_clause.htm) supports tools such as code completion in the ABAP Editor.
    

-   If a [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry") is used to access a [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry")[CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") entity associated with a [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry")[CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") role and for which [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)[CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) clause, only that data is read implicitly that matches the [access condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaccess_condition_glosry.htm "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") database view of a CDS view is accessed, no access control takes place.

-   A [SELECT clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) started with FIELDS after the [FROM clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) leads to the [strict mode as of Release 7.50](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_750.htm).
    

Example

[SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement with all possible clauses.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              SUM( seatsocc ) AS seatsocc
       WHERE carrid = 'LH'
       GROUP BY carrid, connid
       HAVING SUM( seatsocc ) > 1000
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).