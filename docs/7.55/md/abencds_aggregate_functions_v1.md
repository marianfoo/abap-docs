---
title: "Syntax"
description: |
  ...  MAX( ALLDISTINCT operand )  MIN( ALLDISTINCT operand )  AVG( ALLDISTINCT operand AS dtype(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_avg_as_v1.htm) )  SUM( ALLDISTINCT operand )  COUNT( DISTINCT operand
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm"
abapFile: "abencds_aggregate_functions_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "aggregate", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v1.htm) → 

CDS DDL - DDIC-based View, aggr\_expr

Syntax

... *{* MAX( *\[*ALL*|*DISTINCT*\]* operand )
    *|* MIN( *\[*ALL*|*DISTINCT*\]* operand )
    *|* AVG( *\[*ALL*|*DISTINCT*\]* operand [*\[*AS dtype*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_avg_as_v1.htm) )
    *|* SUM( *\[*ALL*|*DISTINCT*\]* operand )
    *|* COUNT( DISTINCT operand )
    *|* COUNT(\*) *}* ...

Effect

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). An aggregate expression calculates a single value from an operand operand by calling an aggregate function from multiple rows of a result set. The operands can have any [data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) except LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB. The following table shows the possible aggregate functions:

Aggregate Function

Meaning

Result Type

MAX

Greatest value of operand

Data type of operand

MIN

Least value of operand

Data type of operand

AVG

Average value of operand (the operand must be numeric). Type [INT8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) is only supported with addition [AS dtype](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_avg_as_v1.htm). The types [DF16\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [DF34\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) for decimal free floating numbers are not supported. The types [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [TIMN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), and [UTCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) are not supported either.

,[FLTP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), platform-specific interim result or [dtype](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_avg_as_v1.htm)

SUM

Sum of operand (the operand must be numeric). The types [DF16\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [DF34\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) for decimal free floating numbers are not supported. The types [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [TIMN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), and [UTCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) are not supported either.

Data type of operand

COUNT

If DISTINCT operand is specified, the number of distinct values of operand is counted; if \* is specified, the number of rows in the result set is counted.

[INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

If ALL is used, all rows in the result set are respected, which is the standard setting. If DISTINCT is used, only distinct values of operand are respected.

The following can be specified for operand:

-   A [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm)

-   A field of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) of the current CDS view

-   A [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) that identifies a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm)

-   A case distinction [CASE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm) that returns a value

The data type of the result is defined when the CDS view is activated and is determined by the aggregate function and the value range of the data types of the operands. If the result of aggregate function AVG is returned in a result set, the result type is FLTP. As the interim result in a clause, the result type can be platform-specific. With addition [AS dtype](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_avg_as_v1.htm), the result type can be defined for every operand position.

Aggregate expressions can be used as [elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm). Here they need an alternative element name defined using AS and require a [GROUP BY clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_group_by_v1.htm) to be used. Aggregate expressions can be compared with [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) in a [HAVING condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v1.htm).

Hints

-   The names of the aggregate functions AVG, COUNT, MAX, MIN, and SUM are protected and cannot be used as self-defined names.

-   To add aggregate expressions in the SELECT list to a CDS view using [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm), the values #PROJECTION\_LIST and #GROUP\_BY must be specified with the annotation [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm).

-   The result of the aggregate functions AVG in data type FLTP is platform-dependent.

Example

In the SELECT list of the CDS view sales\_order, aggregate expressions calculate the sum, the minimum, and the maximum of the gross amounts of each business partner. Also, the number of requests is determined. An alternative element name is defined for each aggregation. The non-aggregated fields buyer\_guid and currency\_code are specified in the GROUP BY clause.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
  { key buyer\_guid,
       @Semantics.currencyCode
        currency\_code,
       @Semantics.amount.currencyCode: 'currency\_code'
        sum(gross\_amount) as sum\_gross\_amount,
       @Semantics.amount.currencyCode: 'currency\_code'
        min(gross\_amount) as min\_gross\_amount,
       @Semantics.amount.currencyCode: 'currency\_code'
        max(gross\_amount) as max\_gross\_amount,
       @Semantics.amount.currencyCode: 'currency\_code'
        avg(gross\_amount) as avg\_gross\_amount,
        count(\*) as sales\_orders\_count }
  group by buyer\_guid, currency\_code

Continue
[CDS DDL - DDIC-based View, AVG, AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_avg_as_v1.htm)