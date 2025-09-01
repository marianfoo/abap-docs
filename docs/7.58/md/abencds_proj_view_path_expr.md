  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) →  [CDS DDL - projection\_list, Transactional Query](javascript:call_link\('abencds_proj_view_element_list.htm'\)) →  [CDS DDL - proj\_element, Transactional Query](javascript:call_link\('abencds_proj_view_element.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20path_expr%2C%20Transactional%20Query%2C%20ABENCDS_PROJ_VIEW_PATH_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

CDS DDL - path\_expr, Transactional Query

Syntax

... *\[*source.*\]*\_assoc1*\[* [parameters](javascript:call_link\('abencds_select_parameters_v2.htm'\))*\]**\[*[filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\))*\]* ...

Effect

A path expression in the CDS DDL is a sequence of CDS associations separated by periods (.) whose names are specified using assoc1, assoc2, and so on. The rules for path expressions in CDS projection views are similar to path expressions in CDS view entities, see topic [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)) with the following differences:

-   The filter of a path expression of a CDS projection view cannot define a join type. It can only define a cardinality and a filter condition as described in topic [CDS DDL - CDS Projection View, filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)).
-   The result set of the CDS projection view must be the same as the result set of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Therefore, the [target cardinality](javascript:call_link\('abentarget_cardinality_glosry.htm'\) "Glossary Entry") of each traversed association must be one. This can be achieved by using a [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry").
-   The keyword [LOCALIZED](javascript:call_link\('abencds_proj_view_element.htm'\)) can be used to display text elements in the user's logon language. All previous association paths must be filtered to one.
-   It is possible to pass parameters in association paths. This works in the same way as parameter passing in CDS view entities, see topic [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).