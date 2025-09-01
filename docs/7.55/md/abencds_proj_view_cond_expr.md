  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) → 

CDS DDL - projection\_view, WHERE

Syntax

... WHERE [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) ...

Effect

Defines a WHERE condition for the result set of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). When the CDS projection view is accessed, the result set contains only the data from the data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) that meets the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) specified after WHERE.

The condition is either a single relational expression rel\_expr or an expression constructed from the Boolean operators NOT, AND, and OR.

In CDS projection views, the following conditions are possible in the WHERE\-clause:

-   Comparisons with [comparison operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\))

-   Interval comparisons using [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\))

-   Pattern comparisons using [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\))

-   Checks on the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") using [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\))

The Boolean operators work as described [here](javascript:call_link\('abencds_conditional_expression_v2.htm'\)).