  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v2.htm'\)) → 

CDS DDL - CDS View Entity, SELECT, GROUP BY

Syntax

... GROUP BY field1, field2, ...
             [path\_expr1](javascript:call_link\('abencds_case_expression_v2.htm'\)), [path\_expr2](javascript:call_link\('abencds_case_expression_v2.htm'\)), ...

Effect

Groups those rows in the result set of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") that have the same content in the elements specified by the fields field1, field2, ... or [path expressions](javascript:call_link\('abencds_case_expression_v2.htm'\)) path\_expr1, path\_expr2 ... as a single row. The fields must be specified using the same names as the fields in the data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)). It is not allowed to use the alias names defined in the current CDS view entity with [AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\)).

If the view entity makes use of multiple [data sources](javascript:call_link\('abencds_data_source_v2.htm'\)) by using join expressions, then all fields listed after GROUP BY must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The GROUP BY clause is mandatory if the SELECT list contains any aggregate expressions. All elements that are not defined using an aggregate expression must be listed after GROUP BY.

After GROUP BY, only [fields](javascript:call_link\('abencds_field_v2.htm'\)) or [path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) that are listed in the SELECT list can be specified. Other [elementary operands](javascript:call_link\('abencds_operands_v2.htm'\)) or [expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) cannot be specified after GROUP BY.

When the CDS view entity is accessed, the results of the aggregate expressions are calculated from the values of the grouped rows. Several rows are condensed into one row and the result of the calculation is one field of the result set.

The fields specified after GROUP BY can have any [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) except of LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hint

A [WHERE condition](javascript:call_link\('abencds_where_clause_v2.htm'\)) is evaluated before the rows are combined using GROUP BY.

Example

When the CDS view entity DEMO\_CDS\_VIEW\_ENTITY\_GROUP\_BY shown below is accessed, all flights that have the same carrier ID and connection ID are condensed into one row. The number of rows and the average occupation is calculated for each group. The fields carrid and connid, which are used in the string function concat\_with\_space in the SELECT list, must be listed after GROUP BY.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_VIEW\_ENTITY\_GROUP\_BY
  as select from sflight
{
  concat\_with\_space(carrid, connid, 1) as ID,
  count(\*)                             as col\_count,
  avg( seatsocc as abap.dec( 20, 2 ))  as col\_avg
}
group by
  carrid,
  connid