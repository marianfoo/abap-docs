  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS- SELECT, clauses](javascript:call_link\('abencds_select_clauses.htm'\)) → 

ABAP CDS - SELECT, GROUP BY

Syntax

... GROUP BY field1, field2, ...
             [path\_expr1](javascript:call_link\('abencds_f1_case_expression.htm'\)), [path\_expr2](javascript:call_link\('abencds_f1_case_expression.htm'\)), ...

Effect

Groups those rows in the results set of a [CDS view in](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") that have the same content in the elements specified by the fields field1, field2, ... or [path expressions](javascript:call_link\('abencds_f1_case_expression.htm'\)) path\_expr1, path\_expr2 ... as a single row. The fields must be specified using the same names as the fields in the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)). The current CDS view cannot be specified using alternative element names, which are defined with [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\)).

Any elements of the CDS view that are not specified after GROUP BY must be defined in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) using [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)). Conversely, GROUP BY must be used if aggregate expressions are contained in the SELECT list and all elements not defined using aggregate expressions must be specified after GROUP BY. Literals and other expressions cannot be specified after GROUP BY. If expressions or calls of predefined functions are specified as elements of the SELECT list using aggregate expressions, all the fields used must be specified in the GROUP BY clause.

When the CDS view is accessed, the results of the aggregate expressions are calculated from the values of the corresponding fields of the combined rows and the results are placed in the element of the resulting row in the results set.

Note

A [WHERE condition](javascript:call_link\('abencds_f1_where_clause.htm'\)) is evaluated before the rows are combined using GROUP BY.

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