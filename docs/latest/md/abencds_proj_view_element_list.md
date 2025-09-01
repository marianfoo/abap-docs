  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20projection_list%2C%20Transactional%20Query%2C%20ABENCDS_PROJ_VIEW_ELEMENT_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

CDS DDL - projection\_list, Transactional Query

Syntax

... [element1](javascript:call_link\('abencds_proj_view_element.htm'\)), [element2](javascript:call_link\('abencds_proj_view_element.htm'\)), ...

Effect

Defines the [elements](javascript:call_link\('abencds_proj_view_element.htm'\)) of a CDS projection view of type transactional query. The elements are specified in a comma-separated list in curly brackets { }.

The names of the elements of a projection view must be unique. These are either

-   the names of the elements taken from the data sources, or
-   alternative element names specified using AS.

Continue
[CDS DDL - proj\_element, Transactional Query](javascript:call_link\('abencds_proj_view_element.htm'\))