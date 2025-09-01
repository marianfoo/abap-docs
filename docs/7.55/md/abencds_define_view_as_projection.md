  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) → 

CDS DDL - DEFINE VIEW ENTITY AS PROJECTION

Syntax

*\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
*\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
...
*\[*[@proj\_view\_annot1](javascript:call_link\('abencds_proj_view_annotations.htm'\))*\]*
*\[*[@proj\_view\_annot2](javascript:call_link\('abencds_proj_view_annotations.htm'\))*\]*
...
DEFINE *\[*ROOT*\]* VIEW ENTITY projection\_view
    AS PROJECTION ON cds\_entity *\[*AS cds\_entity\_alias*\]*
   *\[*[association1](javascript:call_link\('abencds_proj_view_association.htm'\)) [association2](javascript:call_link\('abencds_proj_view_association.htm'\)) ...*\]*
      { [element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) }
   *\[*[WHERE](javascript:call_link\('abencds_proj_view_cond_expr.htm'\)) *\[*NOT*\]* cds\_cond1 *\[*AND*|*OR cds\_cond2 ...*\]**\]*

Effect

Defines a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") with the name projection\_view in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). A CDS projection view is a direct projection of an underlying [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity (called [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry")) and exposes a subset of elements of the projected entity, which are defined in the list of elements [element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\)). In a business application, a projection view allows to restrict access to, denormalize, and fine-tune the underlying data model.

Currently, the projected entity cds\_entity can only be a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") without parameters. Any other CDS entity (namely [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry"), [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry")) plus [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") and [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") are currently not allowed.

A projection view inherits the element and association annotations of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Header annotations are not inherited. Optionally, additional [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) @entity\_annot and [projection view annotations](javascript:call_link\('abencds_proj_view_annotations.htm'\)) @proj\_view\_annot can be defined.

The keyword ROOT specifies that the projection view is the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of a [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"). The projection view must always reflect the position of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") in the composition tree: if the projected entity is a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"), the projection view must be a root as well. If the projected entity is not a root, the projection view cannot be a root. In this case, the projected entity must contain a [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry").

[Associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), including [compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") and [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"), that are defined in the projected CDS view can be used in the CDS projection view. However, associations or compositions might change their target, if the target CDS view is also projected. In this case, the association or composition can be redirected to the new target. Further details on exposing and redirecting associations can be found in the topic [expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) below.

It is possible to add new, local, read-only associations to a projection view after the view definition with DEFINE VIEW ENTITY AS PROJECTION ON. The same rules apply as for [associations in CDS view entities](javascript:call_link\('abencds_association_v2.htm'\)). The main difference is that read-only associations in projection views can only be exposed, but they cannot be used in [path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) (meaning that no elements can be exposed from new associations). Details on new, local associations in CDS projection views can be found in topic [CDS DDL - projection\_view, ASSOCIATION](javascript:call_link\('abencds_proj_view_association.htm'\)).

The [list of elements](javascript:call_link\('abencds_proj_view_element_list.htm'\)) element\_list consists of elements of the underlying CDS view cds\_view, elements of the CDS associations exposed in the cds\_view, plus new elements specified using the keyword VIRTUAL.

The number of rows included in the result set can be further restricted by the addition [WHERE](javascript:call_link\('abencds_proj_view_cond_expr.htm'\)).

The name of a CDS projection view is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

Hints

-   A CDS projection view can be extended using a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry"). Two options are possible:

-   EXTEND VIEW. This type of CDS view extension is supported for legacy reasons. Syntax specific to CDS projection views is not supported and this option is not recommended.
    For details, see topic [CDS DDL - EXTEND VIEW ddic\_based\_view](javascript:call_link\('abencds_extend_view.htm'\)).

-   EXTEND VIEW ENTITY. All syntax elements specific to CDS projection views are supported. It is recommended to use this option for the extension of a CDS projection view.
    For details, see topic [CDS DDL - EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)).

-   [Path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) cannot be used to specify the projected CDS view cds\_view in the PROJECTION ON clause.

-   CDS projection views cannot include [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry"), or [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") clauses.

-   Projection views have evolved from and will in the future replace consumption views. Both serve the same purpose, namely, to simplify the access to business objects. While consumption views were used for data modelling in the obsolete [ABAP Programming Model for SAP Fiori](javascript:call_link\('abenabap_pm_for_fiori_glosry.htm'\) "Glossary Entry"), projection views take over this role in its successor [RAP](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").

Example

The following CDS projection view DEMO\_SALES\_PV\_BUPA is a projection of the existing CDS view DEMO\_SALES\_CDS\_BUPA. The result set contains only rows where the last name of the business partner starts with "P".

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Projection View for BuPa'
define root view entity DEMO\_SALES\_PV\_BUPA  
  as projection on DEMO\_SALES\_CDS\_BUPA
{
  key id            as BusinessPartnerID,  
      given\_name    as GivenName,
      middle\_name   as MiddleName,
      family\_name   as FamilyName  
      
}
where $projection.familyname like 'P%'

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_I\_SL is a projection of the existing CDS view DEMO\_SALES\_CDS\_SO\_I\_SL. It exposes a subset of the elements of the projected entity as well as an association.

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Projection View SO Item Schedule Line'
@Metadata.allowExtensions: true
define view entity DEMO\_SALES\_PV\_SO\_I\_SL
  as projection on DEMO\_SALES\_CDS\_SO\_I\_SL
  {
    key schedule\_line\_key as ScheduleLineKey,
        parent\_key        as SalesOrderItemKey,
        \_SalesOrderItem : redirected to parent DEMO\_SALES\_PV\_SO\_I
  }

Continue
[CDS DDL - projection\_view, proj\_view\_annot](javascript:call_link\('abencds_proj_view_annotations.htm'\))
[CDS DDL - projection\_view, ASSOCIATION](javascript:call_link\('abencds_proj_view_association.htm'\))
[CDS DDL - projection\_view, element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\))
[CDS DDL - projection\_view, WHERE](javascript:call_link\('abencds_proj_view_cond_expr.htm'\))