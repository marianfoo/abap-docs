  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Analytical Queries](javascript:call_link\('abencds_analytical_query_apv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20element_list%2C%20Analytical%20Query%2C%20ABENCDS_ELEMENT_LIST_APV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

CDS DDL - element\_list, Analytical Query

Syntax

... [element1](javascript:call_link\('abencds_element_apv.htm'\)), [element2](javascript:call_link\('abencds_element_apv.htm'\)), ...

Effect

Defines the [elements](javascript:call_link\('abencds_element_apv.htm'\)) of a [CDS analytical projection view](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry"). The elements are specified in a comma-separated list in curly brackets { }.

The names of the elements of an analytical projection view must be unique. These are either

-   the names of the elements taken from the data sources, or
-   alternative element names specified using AS.

Continue
[CDS DDL - element, Analytical Query](javascript:call_link\('abencds_element_apv.htm'\))