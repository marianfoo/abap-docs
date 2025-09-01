  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm) → 

CDS DDL - projection\_view, WHERE

Syntax

... WHERE [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm) ...

Effect

Defines a WHERE condition for the result set of a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). When the CDS projection view is accessed, the result set contains only the data from the data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm) that meets the condition [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm) specified after WHERE.

The condition is either a single relational expression rel\_expr or an expression constructed from the Boolean operators NOT, AND, and OR.

In CDS projection views, the following conditions are possible in the WHERE\-clause:

-   Comparisons with [comparison operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v2.htm)

-   Interval comparisons using [BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_betw_v2.htm)

-   Pattern comparisons using [LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_like_v2.htm)

-   Checks on the [initial value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninitial_value_glosry.htm "Glossary Entry") using [IS INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_initial_v2.htm)

The Boolean operators work as described [here](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm).