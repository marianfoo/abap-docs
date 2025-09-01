  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) → 

CDS DDL - REDEFINE ASSOCIATION, transactional query

Syntax

... REDEFINE ASSOCIATION *\[*source.*\]*\_ProjAssoc *\[* [filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\))*\]* *\[*AS \_RedefinedName*\]* [redirection](javascript:call_link\('abencds_pv_assoc_redirected.htm'\))  ...

Effect

A CDS association from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") can be redefined in the header part, that means in front of the projection list, of a CDS projection view. In this way, it is possible to modify an association from the underlying view. The modified association can be used locally and it can be exposed in the projection list for usage in, for example, [CDS view entity extensions](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry").

The syntax consists of the following elements:

-   \_ProjAssoc: the association from the projected entity which should be redefined must be identified by its original name. The [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") source can optionally be specified as prefix.
-   [filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)): A filter, consisting of a [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") and, optionally, a [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry"), can be specified. See topic [CDS Projection View, filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)) for details.
    
    The following rules apply in addition to the rules described in topic [CDS Projection View, filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)):
    The min cardinality can be 0 or 1. The max cardinality can be 1 or \*.
    The min and max cardinality of redefined to-parent redirects must not be changed.
    
-   AS alias: A new alias name AS alias can be assigned.
-   [redirection](javascript:call_link\('abencds_pv_assoc_redirected.htm'\)): This addition is mandatory for redefined associations. As a prerequisite, the original [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") must also be have a CDS projection view. Redirection using the keyword REDIRECTED TO *\[*...*\]* means to direct an association to a new association target, which is also a CDS projection view, in this way moving the complete data model to the projection layer.
    
    See topic [CDS Projection View, redirection](javascript:call_link\('abencds_pv_assoc_redirected.htm'\)) for further details.
    

Exposure in the projection list:

-   The redefined association can be exposed, but exposure is not obligatory, as it can also be done in [CDS view entity extensions](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry") later on.
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
-   \_ProjAssoc can't be specified as path expression.

Hints

-   As alternative to the redefinition described in this topic, a filter condition and redirection can also be specified in the projection list when exposing the association. See topic [CDS Projection View, expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) for details.
-   The syntax described in this topic can also be used in a CDS view entity extension using [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)).