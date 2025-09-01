  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_clauses_v2.htm) → 

CDS DDL - CDS View Entity, SELECT, GROUP BY

Syntax

... GROUP BY field1, field2, ...
             [path\_expr1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), [path\_expr2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), ...

Effect

Groups those rows in the result set of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") that have the same content in the elements specified by the fields field1, field2, ... or [path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm) path\_expr1, path\_expr2 ... as a single row. The fields must be specified using the same names as the fields in the data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v2.htm). It is not allowed to use the alias names defined in the current CDS view entity with [AS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v2.htm).

If the view entity makes use of multiple [data sources](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v2.htm) by using join expressions, then all fields listed after GROUP BY must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The GROUP BY clause is mandatory if the SELECT list contains any aggregate expressions. All elements that are not defined using an aggregate expression must be listed after GROUP BY.

After GROUP BY, only [fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_field_v2.htm) or [path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm) that are listed in the SELECT list can be specified. Other [elementary operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_v2.htm) or [expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v2.htm) cannot be specified after GROUP BY.

When the CDS view entity is accessed, the results of the aggregate expressions are calculated from the values of the grouped rows. Several rows are condensed into one row and the result of the calculation is one field of the result set.

The fields specified after GROUP BY can have any [built-in data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) except of LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hint

A [WHERE condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm) is evaluated before the rows are combined using GROUP BY.

Example

When the CDS view entity DEMO\_CDS\_VIEW\_ENTITY\_GROUP\_BY shown below is accessed, all flights that have the same carrier ID and connection ID are condensed into one row. The number of rows and the average occupation is calculated for each group. The fields carrid and connid, which are used in the string function concat\_with\_space in the SELECT list, must be listed after GROUP BY.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST, #GROUP\_BY\]
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