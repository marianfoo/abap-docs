---
title: "Syntax"
description: |
  ... SINGLE FOR UPDATE(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_single.htm)  FROM(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) source FIELDS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfields_c
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_mainquery.htm"
abapFile: "abapselect_mainquery.htm"
keywords: ["select", "update", "loop", "do", "if", "try", "data", "internal-table", "abapselect", "mainquery"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) → 

SELECT, mainquery\_clauses

Syntax

... *\[*[SINGLE *\[*FOR UPDATE*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_single.htm)*\]*
    *{* [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) source *}*
    *\[**\[*[FOR ALL ENTRIES IN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_all_entries.htm) itab*\]*
      [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) sql\_cond*\]*
    *\[*[GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm) group*\]* *\[* [HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm) group\_cond*\]*
    *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) sort\_key*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_db_hints.htm)*\]*  ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) of a [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") represented by a standalone [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement. The clauses and additions define the result set of the SELECT statement:

-   Rows of the result set

-   Multirow result set
    If SINGLE is not specified, and if [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") are not exclusively specified in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) of the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm), the result set is multirow or tabular by default. All database rows that are selected by the remaining additions of the statement SELECT are included in the result set. If the addition [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) is not used, the order of the rows in the result set is not defined and, if the same statement SELECT is executed multiple times, the order may be different each time. A data object specified after [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) can be an internal table and the addition [APPENDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) can be used. If no internal table is specified after INTO or APPENDING, the statement SELECT for multirow result sets initiates a loop that must be closed using ENDSELECT.

-   Single row result set
    The optional addition [SINGLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_single.htm) defines a single-row result set that can be protected against parallel changes by another program. When using SINGLE, it is not possible to specify an internal table as target object, and the addition SINGLE cannot be combined with all additions of the SELECT statement.

-   Columns of the result set

The SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) defines the structure of the result set. It consists mainly of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) that defines the columns of the result set. Duplicate rows can be excluded (this is optional).

-   Data Sources

The [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause specifies which [data sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) source are read. These can either be data sources in the database accessed by the current query or they can be [internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm). Data sources in the database must be defined in ABAP Dictionary.

-   Conditions

The result set can be restricted using the [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) clause. The optional addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_all_entries.htm) can be used to compare the content of a column in the database with a component with all rows of a structured internal table itab.

-   Grouping

The [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm) clause merges multiple database rows into one row of the result set. The [HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm) clause restricts the merged rows.

-   Database Hints

[db\_hints](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_db_hints.htm) can be used to specify [database hints](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_hint_glosry.htm "Glossary Entry").

-   Sorting

The [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) clause sorts the result set. If ORDER BY is not specified, the order of the rows in the result set is undefined.

The SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) can be specified before or after the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm). After the FROM clause, the SELECT clause must be prefixed with the addition FIELDS.

Hints

-   Although the WHERE condition is optional, for performance reasons, it should always be specified, and the result set should not be restricted in [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry").

-   The arrangement of the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) before a [SELECT clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) with [FIELDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfields_clause.htm) supports tools such as code completion in the ABAP Editor.

-   If a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry") accesses a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") that is associated with a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") and for which [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause, only that data is read implicitly that meets the [access condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is accessed, no access control takes place.

-   A [SELECT clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) started with FIELDS after the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) leads to the [strict mode as of Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm).

Example

[SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement with all possible clauses.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              SUM( seatsocc ) AS seatsocc
       WHERE carrid = 'LH'
       GROUP BY carrid, connid
       HAVING SUM( seatsocc ) > 1000
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).