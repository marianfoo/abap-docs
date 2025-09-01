---
title: "CDS DDL - REDEFINE ASSOCIATION, transactional query"
description: |
  Syntax ... REDEFINE ASSOCIATION source._ProjAssoc  filter(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_modified.htm) AS _RedefinedName redirection(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_redirected.htm)
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_redefined_assoc.htm"
abapFile: "abencds_proj_view_redefined_assoc.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "proj", "view", "redefined", "assoc"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm) → 

CDS DDL - REDEFINE ASSOCIATION, transactional query

Syntax

... REDEFINE ASSOCIATION *\[*source.*\]*\_ProjAssoc *\[* [filter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_modified.htm)*\]* *\[*AS \_RedefinedName*\]* [redirection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_redirected.htm)  ...

Effect

A CDS association from the [projected entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") can be redefined in the header part, that means in front of the projection list, of a CDS projection view. In this way, it is possible to modify an association from the underlying view. The modified association can be used locally and it can be exposed in the projection list for usage in, for example, [CDS view entity extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry").

The syntax consists of the following elements:

-   \_ProjAssoc: the association from the projected entity which should be redefined must be identified by its original name. The [association source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_source_glosry.htm "Glossary Entry") source can optionally be specified as prefix.
-   [filter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_modified.htm): A filter, consisting of a [filter condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfilter_condition_glosry.htm "Glossary Entry") and, optionally, a [cardinality](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencardinality_glosry.htm "Glossary Entry"), can be specified. See topic [CDS Projection View, filter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_modified.htm) for details.
    
    The following rules apply in addition to the rules described in topic [CDS Projection View, filter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_modified.htm):
    The min cardinality can be 0 or 1. The max cardinality can be 1 or \*.
    The min and max cardinality of redefined to-parent redirects must not be changed.
    
-   AS alias: A new alias name AS alias can be assigned.
-   [redirection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_redirected.htm): This addition is mandatory for redefined associations. As a prerequisite, the original [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") must also be have a CDS projection view. Redirection using the keyword REDIRECTED TO *\[*...*\]* means to direct an association to a new association target, which is also a CDS projection view, in this way moving the complete data model to the projection layer.
    
    See topic [CDS Projection View, redirection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_redirected.htm) for further details.
    

Exposure in the projection list:

-   The redefined association can be exposed, but exposure is not obligatory, as it can also be done in [CDS view entity extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") later on.
-   Even if an association has been redefined, it is still possible to expose the original association by using the source as prefix.
    
    Example:
    Expose redefined association: \_assoc.
    Expose original association: source.\_assoc
    
-   The redefined association can be used in [path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_path_expr.htm) to expose fields from the association target in the projection list. If a filter condition was added to the redefined association in the header, this is automatically applied to all fields exposed via a path expression.
-   A new alias name can be assigned when exposing a redefined association, even if an alias has already been defined in the context of the redefinition.
-   A new filter condition with a new cardinality can be specified when exposing a redefined association, even if a filter condition with a cardinality has already been defined in the context of the redefinition. In this case, a new alias name is mandatory.

All elements included in the ON clause of an exposed redefined association must also be included in the projection list.

Limitations

-   It is not possible to redefine [locally defined associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_association.htm).
-   \_ProjAssoc can't be specified as path expression.

Hints

-   As alternative to the redefinition described in this topic, a filter condition and redirection can also be specified in the projection list when exposing the association. See topic [CDS Projection View, expose\_assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_expose_assoc.htm) for details.
-   The syntax described in this topic can also be used in a CDS view entity extension using [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view_entity.htm).