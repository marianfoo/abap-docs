  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Associations](javascript:call_link\('abencds_association_v1.htm'\)) → 

CDS DDL - DDIC-Based View, COMPOSITION

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target *\[*AS \_compos*\]* ...

Effect

A [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_core_data_services_glosry.htm'\) "Glossary Entry") is a specialized [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") that defines the current [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") as [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry") of the [composition target](javascript:call_link\('abencomposition_target_glosry.htm'\) "Glossary Entry"). The composition target is the [child entity](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry"). Both parent and child entity must define mutual associations. CDS compositions define the [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").

A composition is defined in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a CDS view entity using the keyword COMPOSITION. A CDS composition associates the current CDS entity, as a [composition source](javascript:call_link\('abencomposition_source_glosry.htm'\) "Glossary Entry"), with the [composition target](javascript:call_link\('abencomposition_target_glosry.htm'\) "Glossary Entry") target specified in the definition of the composition.

Prerequisite

The child entity (composition target) must already have a [to-parent association](javascript:call_link\('abencds_to_parent_assoc_v1.htm'\)) to the composition parent before a composition can be defined in the parent.

Rules

CDS compositions are defined similarly to CDS associations. Here are the similarities and differences:

-   Similarities
    -   For the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") *\[* \[min..max\] *\]* and the name of the composition AS \_compos, the same rules apply as for a "normal" CDS association, see topic [CDS view entity, ASSOCIATION](javascript:call_link\('abencds_simple_association_v1.htm'\)).
-   Differences:
    -   No ON condition is defined explicitly for a composition. The ON condition is generated automatically using the ON condition of the to-parent association of the composition target.
    -   A default filter cannot be defined for a composition. The syntax ... WITH DEFAULT FILTER ... is not allowed.

The following applies to the composition target target:

-   The composition target can be a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), an [abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), or a [custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").
-   A child entity can be the target of exactly one composition. This means that a child entity can have exactly one parent entity.
-   The target of a composition must not be a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry").
-   The composition target cannot be specified using a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)). The following is not allowed:
    
    COMPOSITION OF \_path.\_to\_child
    
-   It must be a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). If target is a [non-SQL CDS entity](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry"), the way the composition can be used is restricted.
-   "Self"-compositions are not allowed. The target of a composition cannot be the CDS entity in which this composition is defined.

Exposure:

-   The name of the composition \_compos must be added exactly once to the select\_list of the CDS view entity it is defined in, without attributes and alias. If no name is defined for the composition, the name of the composition is the name of the target entity target and this name must be made available in the SELECT list.

Usage:

-   Caution: Fields from a composition target can't be used locally in path expressions. Fields from the composition target can't be used in the SELECT list, WHERE clause, or any other position of the view entity in which it is defined.
    
    This also applies to [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry"). A field from a composition target can't be added to a CDS view entity via [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)).
    
-   A composition can be propagated in data definitions other than the one in which it is defined. In this case, the composition uses its special semantics and is treated like a normal CDS association.
-   When a composition is used in another data definition, metadata extension, or view extension other than the one in which it is defined, then it can be used in a path expression. Parameter passing and defining attributes is also possible in this case.
-   Compositions can be used in annotation values (such as AnnotationRef or ElementRef) in the CDS entities that define them, since this does not lead to an SQL join.

Compositions and joins:

-   The use cases and generation of joins described in topic [CDS DDL - CDS View Entity, Associations and Joins](javascript:call_link\('abencds_assoc_join_v1.htm'\)) also apply to CDS compositions, with the exception of use cases 3 and 4.

Hints

-   [Cyclical dependencies](javascript:call_link\('abencds_cycle_problems.htm'\)) should be avoided when using compositions to prevent problems occurring in mass activations of CDS entities.
-   Compositions can be given annotations in the element list element\_list of the CDS entity in which they are defined.
-   Defining new compositions is not supported in [UNION](javascript:call_link\('abencds_union_v1.htm'\)) views.

Example

The CDS view DEMO\_SALES\_CDS\_SO\_I shown below returns information about sales order items. It defines three associations, one of them being a composition. The composition target (i.e. the child entity) is the CDS view DEMO\_SALES\_CDS\_SO\_I\_SL.

Explanation: Each sales order item can have one or more schedule lines, but schedule lines can exist only in connection with sales order items.

In the SELECT list, the composition \_ScheduleLine is exposed, so it can be accessed from external CDS entities.

@AbapCatalog.sqlViewName: 'DEMO\_SALES\_SOI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
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