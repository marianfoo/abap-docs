  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](javascript:call_link\('abencds_f1_custom_element.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY, to-parent association

Syntax

... ASSOCIATION TO PARENT target ON $projection.[cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) ...

Effect

Defines a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) of a [CDS custom entity](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)).

The CDS to-parent association associates the current CDS entity, as a [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry"), with the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") target specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"). The meaning of the CDS to-parent association of the CDS custom entity is basically the same as that of the addition ASSOCIATION TO PARENT in the SELECT statement of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") with the same features as for the CDS associations of the CDS custom entity.

For further details, see:

-   [ASSOCIATION TO PARENT](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\)), CDS view entity

-   [CDS association](javascript:call_link\('abencds_f1_custom_association.htm'\)), CDS custom entity