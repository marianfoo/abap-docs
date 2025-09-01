  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20REDEFINE%20ASSOCIATION%2C%20Transactional%20Query%2C%20ABENCDS_PROJ_VIEW_REDEFINED_ASSOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

CDS DDL - REDEFINE ASSOCIATION, Transactional Query

Syntax

... REDEFINE ASSOCIATION *\[*source.*\]*\_ProjAssoc *\[* [filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\))*\]* *\[*AS \_RedefinedName*\]* [redirection](javascript:call_link\('abencds_pv_assoc_redirected.htm'\))  ...

Effect

A CDS association from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") can be redefined in the header part, that means in front of the projection list, of a CDS projection view. In this way, it is possible to modify an association from the underlying view. The modified association can be used locally and it can be exposed in the projection list for usage in, for example, [CDS view entity extensions](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry").

The syntax consists of the following elements:

-   \_ProjAssoc: the association from the projected entity which should be redefined must be identified by its original name. The [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") source can optionally be specified as prefix.
-   [filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)): A filter, consisting of a [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") and, optionally, a [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry"), can be specified. See topic [CDS Projection View, filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)) for details.
    
    The following rules apply in addition to the rules described in topic [CDS Projection View, filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)):
    If the numeric syntax variant is used, the min cardinality can be 0 or 1. The max cardinality can be 1 or \*. The min and max cardinality of redefined to-parent redirects must not be changed.
    
-   AS alias: A new alias name AS alias can be assigned.
-   [redirection](javascript:call_link\('abencds_pv_assoc_redirected.htm'\)): This addition is mandatory for redefined associations. As a prerequisite, the original [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") must also have a CDS projection view. Redirection using the keyword REDIRECTED TO *\[*...*\]* means to direct an association to a new association target, which is also a CDS projection view, in this way moving the complete data model to the projection layer.
    
    See topic [CDS Projection View, redirection](javascript:call_link\('abencds_pv_assoc_redirected.htm'\)) for further details.
    

Exposure in the projection list:

-   The redefined association can be exposed, but exposure is not mandatory, as it can also be done in [CDS view entity extensions](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry") later on.
-   Even if an association has been redefined, it is still possible to expose the original association by using the source as prefix.
    
    Example:
    Expose redefined association: \_assoc.
    Expose original association: source.\_assoc
    
-   The redefined association can be used in [path expressions](javascript:call_link\('abencds_proj_view_path_expr.htm'\)) to expose fields from the association target in the projection list. If a filter condition was added to the redefined association in the header, this is automatically applied to all fields exposed via a path expression.
-   A new alias name can be assigned when exposing a redefined association, even if an alias has already been defined in the context of the redefinition.
-   A new filter condition with a new cardinality can be specified when exposing a redefined association, even if a filter condition with a cardinality has already been defined in the context of the redefinition. In this case, a new alias name is mandatory.

All elements included in the ON clause of an exposed redefined association must also be included in the projection list.

Limitations

-   It is not possible to redefine [locally defined associations](javascript:call_link\('abencds_proj_view_association.htm'\)).
-   \_ProjAssoc cannot be specified as path expression.

Hints

-   As alternative to the redefinition described in this topic, a filter condition and redirection can also be specified in the projection list when exposing the association. See topic [CDS Projection View, expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) for details.
-   The syntax described in this topic can also be used in a CDS view entity extension using [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)).

Example

The following two CDS projection views define a CDS composition relationship to each other. Both of them redefine their associations and redirect the association target to the projection layer, while maintaining the specialization. The CDS view entity extension DEMO\_CDS\_PV\_EXTEND redefines an association to a [foreign entity](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") which is not part of the same [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

Parent CDS projection view

@EndUserText.label: 'CDS projection view, REDEFINED ASSOC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_CDS\_PV\_PARENT
  provider contract transactional\_query
  as projection on DEMO\_CDS\_VIEW\_PARENT
    redefine association \_child
      redirected to composition child DEMO\_CDS\_PV\_CHILD
{
  key Id,
      Int1,
      /\* Associations \*/
      \_child.Int1 as field\_exposure
      }

Child CDS projection view

@EndUserText.label: 'CDS projection view, REDEFINED ASSOC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_PV\_CHILD
  as projection on DEMO\_CDS\_VIEW\_CHILD
    redefine association \_to\_parent  
      redirected to parent DEMO\_CDS\_PV\_PARENT
{
  key Id,
      Int1,
      /\* Associations \*/
      \_to\_parent
}

CDS view entity extension extending the parent view

extend view entity DEMO\_CDS\_PV\_PARENT with  
redefine association DEMO\_CDS\_VIEW\_PARENT.\_assoc \[to one:CharFieldExt = 'A'\]
         as \_alias
         redirected to DEMO\_CDS\_PV\_EXT\_ASSOC
{
  \_child.Id as newField
}