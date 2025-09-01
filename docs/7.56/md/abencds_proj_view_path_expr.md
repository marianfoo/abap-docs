  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) →  [CDS DDL - projection\_list, transactional query](javascript:call_link\('abencds_proj_view_element_list.htm'\)) →  [CDS DDL - proj\_element, transactional query](javascript:call_link\('abencds_proj_view_element.htm'\)) → 

CDS DDL - path\_expr

Syntax

... *\[*source.*\]*\_assoc1*\[* [parameters](javascript:call_link\('abencds_select_parameters_v2.htm'\))*\]**\[*[filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\))*\]* ...

Effect

A path expression in the CDS DDL is a sequence of CDS associations separated by periods (.) whose names are specified using assoc1, assoc2, and so on. The rules for path expressions in CDS projection views are similar to path expressions in CDS view entities, see topic [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)) with the following differences:

-   The filter of a path expression of a CDS projection view can't define a join type. It can only define a cardinality and a filter condition as described in topic [CDS DDL - CDS Projection View, filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)).
-   The result set of the CDS projection view must be the same as the result set of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Therefore, the target cardinality of each traversed association must be 1. This can be achieved by using a [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry").
-   The keyword [LOCALIZED](javascript:call_link\('abencds_proj_view_element.htm'\)) can be used to display text elements in the user's logon language. All previous association paths must be filtered to 1.
-   It is possible to pass parameters in association paths. This works in the same way as parameter passing in CDS view entities, see topic [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).