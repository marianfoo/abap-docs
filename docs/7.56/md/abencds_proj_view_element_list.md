  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) → 

CDS DDL - projection\_list, transactional query

Syntax

... [proj\_element1](javascript:call_link\('abencds_proj_view_element.htm'\)), [proj\_element2](javascript:call_link\('abencds_proj_view_element.htm'\))*\[*,
    [virtual\_element1](javascript:call_link\('abencds_proj_view_virtual_element.htm'\)), [virtual\_element2](javascript:call_link\('abencds_proj_view_virtual_element.htm'\)), ... *\]*
   *\[* [expose\_assoc1](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)), [expose\_assoc2](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\))*\]* ...

Effect

Defines the elements of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). The elements are specified in a comma-separated list in curly brackets { }. The projection list can consist of projected elements from the underlying projected entity, [virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry"), and exposed associations. Exposed associations can be associations from the projected entity, [newly defined associations](javascript:call_link\('abencds_proj_view_association.htm'\)), or [redefined associations](javascript:call_link\('abencds_proj_view_redefined_assoc.htm'\)).

Continue
[CDS DDL - proj\_element, transactional query](javascript:call_link\('abencds_proj_view_element.htm'\))
[CDS DDL - VIRTUAL](javascript:call_link\('abencds_proj_view_virtual_element.htm'\))