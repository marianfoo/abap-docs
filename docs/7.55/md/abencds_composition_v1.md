  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) → 

CDS DDL - DDIC-based View, COMPOSITION

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target *\[*AS \_compos*\]* ...

Additions:

[1\. ... *\[*min..max*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... AS \_compos](#!ABAP_ADDITION_2@2@)

Effect

Defines a CDS composition (or composition for short) with the name \_compos in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). A CDS composition associates the current CDS entity, as a [composition source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_source_glosry.htm "Glossary Entry"), with the [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") target specified in the definition of the composition. Compositions are specialized [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) and are defined in CDS entities using the keyword COMPOSITION OF.

The node in which a composition is defined is a parent entity. The target of a composition target is a child entity. The child entity must already define a [to-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_to_parent_assoc_v1.htm) before a CDS composition can be defined in the parent entity. A CDS composition does not have its own ON condition and it is applied implicitly from the to-parent association instead.

The [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") of the composition cannot be specified using a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) and must be a CDS entity instead. If target is a CDS abstract entity, the way the composition can be used is restricted.

The following applies to the nodes of a composition:

-   The target of a composition target cannot be the CDS entity in which this composition is defined.

-   The target of a composition cannot be a root entity.

-   Unless it is a root entity, a parent entity can itself be the target of a composition.

-   A child entity can be the target of exactly one composition. This means that a child entity can have exactly one parent entity.

-   A child entity can itself be a parent entity and define further compositions.

The name of the composition \_compos must be added exactly once to the [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) of the CDS it is defined in, without attributes and alias. If no name is defined for the composition, the name of the composition is the name of the target entity target and this name must be made available in the SELECT list.

A composition can be accessed as follows:

-   By specifying its name in a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) in the same statement and in all places where this is documented. A CDS composition whose [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") is a CDS abstract entity can only be exposed in the SELECT list.

-   If a CDS composition whose [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") is not abstract is exposed by a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) in the SELECT list of the current SELECT statement, other CDS views or ABAP SQL statement can use it in their path expressions.

The following applies to the compositions:

-   Compositions cannot be used locally in a SELECT list, WHERE clause, HAVING clause of the CDS view that defines them, or in [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm) if this produces a join. This restriction is necessary to guarantee that the ON condition for the composition can always be generated from the ON condition of the to-parent association.

-   Compositions can be used in annotations (such as AnnotationRef or ElementRef) in the CDS entities that define them, since this does not produce a join.

-   Compositions can be passed in other data definitions by specifying the name of the composition in the SELECT list. In this case, the composition is propagated without the semantics of the composition definition. Compositions can be passed using an alias in the SELECT list and the same rules apply as to associations.

-   Like associations, compositions can be also be propagated in [UNION views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_union_v1.htm).

-   Compositions can be passed using a filter in the SELECT list. The same rules apply as to associations.

Hints

-   Cyclical dependencies should be avoided when using compositions to prevent problems occurring in mass activations of CDS entities.

-   No ON condition is defined explicitly for a composition. The ON condition is generated automatically using the ON condition of the to-parent association of the [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry").

-   Unlike in associations, no DEFAULT FILTER can be defined for a composition.

-   Compositions can be given annotations in the element list element\_list of the CDS entity in which they are defined.
    

Addition 1

... *\[*min..max*\]*

Effect

This addition works in the same way as the addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm).

Addition 2

... AS \_compos

Effect

This addition works in the same way as the addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm).