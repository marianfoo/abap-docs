---
title: "CDS DDL - DDIC-Based View, COMPOSITION"
description: |
  Syntax ... COMPOSITION  min..max  OF target AS _compos ... Effect Defines a to-child association(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm 'Glossary Entry') in ABAP CDS(https://help.sap.com/doc/abapdocu_latest_index_h
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_v1.htm"
abapFile: "abencds_composition_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "composition"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20COMPOSITION%2C%20ABENCDS_COMPOSITION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CDS DDL - DDIC-Based View, COMPOSITION

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target *\[*AS \_compos*\]* ...

Effect

Defines a [to-child association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry"). A to-child association is a specialized [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") that defines the current [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") as [parent entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparent_entity_glosry.htm "Glossary Entry") of the [composition target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomposition_target_glosry.htm "Glossary Entry"). The association target is the [child entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchild_entity_glosry.htm "Glossary Entry"). Both parent and child entity must define mutual associations. [CDS to-parent associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_parent_association_glosry.htm "Glossary Entry") and [to-child associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry") together define a [CDS composition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_glosry.htm "Glossary Entry") relationship that in turn defines the [CDS composition tree](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry").

A to-child association is defined in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) of a CDS view entity using the keyword COMPOSITION. A to-child association associates the current CDS entity, as a [composition source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomposition_source_glosry.htm "Glossary Entry"), with the [composition target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomposition_target_glosry.htm "Glossary Entry") target specified in the definition of the to-child association.

Prerequisite

The child entity (composition target) must already have a [to-parent association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_to_parent_assoc_v1.htm) to the composition parent before a to-child association can be defined in the parent.

Rules

To-child associations are defined similarly to CDS associations. Here are the similarities and differences:

-   Similarities
    -   For the [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencardinality_glosry.htm "Glossary Entry") *\[* \[min..max\] *\]* and the name of the to-child association AS \_compos, the same rules apply as for a regular CDS association, see topic [CDS DDL - DDIC-Based View, ASSOCIATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_association_v1.htm).
-   Differences:
    -   No ON condition is defined explicitly for a to-child association. The ON condition is generated automatically using the ON condition of the to-parent association of the composition target.
    -   A default filter cannot be defined for a to-child association. The syntax ... WITH DEFAULT FILTER ... is not allowed.

The following applies to the composition target target:

-   The composition target can be a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), an [abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), or a [custom entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").
-   A child entity can be the target of exactly one to-child association. This means that a child entity can have exactly one parent entity.
-   The target of a to-child association must not be a [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry").
-   The composition target cannot be specified using a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm). The following is not allowed:
    
    COMPOSITION OF \_path.\_to\_child
    
-   It must be a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). If target is a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry"), the way the to-child association can be used is restricted.
-   Self-to-child associations are not allowed. The target of a to-child association cannot be the CDS entity in which this to-child association is defined.

Exposure:

-   The name of the to-child association \_compos must be added exactly once to the select\_list of the CDS view entity it is defined in, without attributes and alias. If no name is defined for the to-child association, the name of the to-child association is the name of the target entity target and this name must be made available in the SELECT list.

Usage:

-   Caution: Fields from a composition target cannot be used locally in path expressions. Fields from the composition target cannot be used in the SELECT list, WHERE clause, or any other position of the view entity in which it is defined.
    
    This also applies to [CDS DDIC-based view extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_extend_glosry.htm "Glossary Entry"). A field from a composition target cannot be added to a CDS view entity via [EXTEND VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view.htm).
    
-   A to-child association can be propagated in data definitions other than the one in which it is defined. In this case, the to-child association uses its special semantics and is handled like a normal CDS association.
-   When a to-child association is used in another data definition, metadata extension, or view extension other than the one in which it is defined, then it can be used in a path expression. Parameter passing and defining attributes is also possible in this case.
-   To-child associations can be used in annotation values (such as AnnotationRef or ElementRef) in the CDS entities that define them, since this does not lead to an SQL join.

To-child association and joins:

-   The use cases and generation of joins described in topic [CDS DDL - CDS View Entity, Associations and Joins](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_assoc_join_v1.htm) also apply to to-child associations, with the exception of use cases 3 and 4.

Hints

-   [Cyclical dependencies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cycle_problems.htm) should be avoided when using to-child associations to prevent problems occurring in mass activations of CDS entities.
-   To-child associations can be given annotations in the element list element\_list of the CDS entity in which they are defined.
-   Defining new to-child associations is not supported in [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm) views.

Example

The CDS view DEMO\_SALES\_CDS\_SO\_I shown below returns information about sales order items. It defines three associations, one of them being a to-child association. The composition target (i.e. the child entity) is the CDS view DEMO\_SALES\_CDS\_SO\_I\_SL.

Explanation: Each sales order item can have one or more schedule lines, but schedule lines can exist only in connection with sales order items.

In the SELECT list, the to-child association \_ScheduleLine is exposed, so it can be accessed from external CDS entities.

@AbapCatalog.sqlViewName: 'DEMO\_SALES\_SOI'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'SDDL: Interface (BO) View for SOI'
define view DEMO\_SALES\_CDS\_SO\_I
  as select from
    demo\_sales\_so\_i
    association        to parent DEMO\_SALES\_CDS\_SO as \_SalesOrder
      on $projection.parent\_key = \_SalesOrder.so\_key
    composition \[0..\*\] of DEMO\_SALES\_CDS\_SO\_I\_SL   as \_ScheduleLine
    association \[0..1\] to DEMO\_SALES\_CDS\_MATERIAL  as \_Material
      on $projection.material = \_Material.material
    {
      key so\_item\_key,
          parent\_key,
          posnr,
          material,
          @Semantics.amount.currencyCode: 'currency'
          gross\_amount,
          currency,
          @Semantics.quantity.unitOfMeasure: 'unit'
          quantity,
          unit,
          \_SalesOrder,
          \_ScheduleLine,
          \_Material
    }