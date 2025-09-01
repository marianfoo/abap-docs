  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v1.htm) → 

CDS DDL - DDIC-based View, SELECT, GROUP BY

Syntax

... GROUP BY field1, field2, ...
             [path\_expr1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm), [path\_expr2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm), ...

Effect

Groups those rows in the result set of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") that have the same content in the elements specified by the fields field1, field2, ... or [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm) path\_expr1, path\_expr2 ... as a single row. The fields must be specified using the same names as the fields in the data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm). It is not allowed to use the alias names defined in the current CDS view using with [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm).

The GROUP BY clause is mandatory if the SELECT list contains any aggregate expressions. All elements that are not defined using an aggregate expression must be listed after GROUP BY. Literals and other expressions cannot be specified after GROUP BY.

When the CDS view is accessed, the results of the aggregate expressions are calculated from the values of the corresponding fields of the combined rows and the results are placed in the element of the resulting row in the result set.

The fields specified after GROUP BY cannot be of the [type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hint

A [WHERE condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v1.htm) is evaluated before the rows are combined using GROUP BY.

Example

When a CDS view is accessed, the view returns sales\_order for every role of a business partner and returns the number of business partners and the total of all gross amounts for every currency.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    inner join
      snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key
      { bp\_role as role, //e.g. customer or supplier
        count(distinct buyer\_guid) as partners\_count,
        @Semantics.currencyCode snwd\_so.currency\_code,
        @Semantics.amount.currencyCode: 'currency\_code'
          sum(snwd\_so.gross\_amount) as sum\_gross\_amount }
      group by bp\_role, snwd\_so.currency\_code;