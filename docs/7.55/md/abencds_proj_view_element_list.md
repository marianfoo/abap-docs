  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) → 

CDS DDL - projection\_view, element\_list

Syntax

... [proj\_element1](javascript:call_link\('abencds_proj_view_element.htm'\)), [proj\_element2](javascript:call_link\('abencds_proj_view_element.htm'\))*\[*,
    [virtual\_element1](javascript:call_link\('abencds_proj_view_virtual_element.htm'\)), [virtual\_element2](javascript:call_link\('abencds_proj_view_virtual_element.htm'\)), ... *\]*

Effect

Defines the elements of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). The elements are specified in a comma-separated list. The element list consists of projected elements (these can be fields, [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), [compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry")), and, optionally, [virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry"). There can be one or several of all of the listed elements.

The projected elements [proj\_element](javascript:call_link\('abencds_proj_view_element.htm'\)) are the elements of the underlying CDS view view\_entity or elements of the [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") exposed in the view\_entity. Associations, compositions, and to-parent associations of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") can be exposed as well. It is also possible to add new elements to a projection view which are not included in the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). These elements are called [virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") and they can be specified using the keyword VIRTUAL. For further details, see the respective sections below.

The names of the elements of a CDS projection view must be unique. They can be either the names of the elements taken from the data source, or else alternative element names specified using [AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\)).

Continue
[CDS DDL - projection\_view, projected element](javascript:call_link\('abencds_proj_view_element.htm'\))
[CDS DDL - projection\_view, VIRTUAL](javascript:call_link\('abencds_proj_view_virtual_element.htm'\))
[CDS DDL - projection\_view, expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\))