---
title: "CDS DDL - DDIC-based View, ASSOCIATION TO PARENT"
description: |
  Syntax ... ASSOCIATION TO PARENT target AS _assoc ON $projection.cds_cond(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm) ... Addition: ... AS _assoc(#!ABAP_ONE_ADD@1@) Effect Defines a CDS to-parent association (or to-parent associati
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_to_parent_assoc_v1.htm"
abapFile: "abencds_to_parent_assoc_v1.htm"
keywords: ["select", "delete", "do", "if", "case", "try", "data", "abencds", "parent", "assoc"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) → 

CDS DDL - DDIC-based View, ASSOCIATION TO PARENT

Syntax

... ASSOCIATION TO PARENT target *\[*AS \_assoc*\]* ON $projection.[cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm) ...

Addition:

[... AS \_assoc](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS to-parent association (or to-parent association for short) with the name \_assoc in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). A to-parent association associates the current CDS entity, as a [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry"), with the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") target specified in the definition of the to-parent association. To-parent associations are specialized [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) and are defined in CDS entities using the keyword ASSOCIATION TO PARENT.

The node in which a to-parent-association is defined is a candidate for a child entity. The target of a to-parent association target is a parent entity. The child entity must already define a to-parent association before a [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_v1.htm) can be defined in the parent entity. The to-parent association cannot be deleted as long as the child entity is the target of the composition. The following applies to the nodes of a to-parent association:

-   A child entity must define exactly one to-parent association with its parent entity.

-   A child entity can have exactly one parent entity.

-   A child entity that is the target of a CDS composition can itself be a parent entity and define further CDS compositions.

The name of the to-parent association \_assoc must be added exactly once to the [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) of the CDS it is defined in, without attributes and alias. If no name is defined for the to-parent association, the name of the to-parent association is the name of the target entity target and this name must be made available in the SELECT list.

To-parent associations are used in a similar way to CDS associations, but with some restrictions:

-   The [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") cannot be defined explicitly for to-parent associations and is generated as \[1..1\].

-   The [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a to-parent association cannot be the CDS entity in which the to-parent association is defined. This means that to-parent associations cannot be [self associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenself_association_glosry.htm "Glossary Entry").

-   No DEFAULT FILTER can be defined for to-parent associations.

-   A [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_entity_glosry.htm "Glossary Entry") cannot define any to-parent associations.

-   The target entity of a CDS composition and a to-parent association defined in the same data definition must be different entities.

-   The child entity in which the to-parent association is defined must have at least one [key field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkey_field_glosry.htm "Glossary Entry").

The following applies to to-parent associations:

-   To-parent associations can be given annotations in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm) of the CDS entity in which they are defined.

-   They can be specified as values for [AssociationRef](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_type.htm) associations. These to-parent associations are then handled as associations.

-   They can be used like associations in path expressions, including paths in annotations.

-   They can be forwarded in other data definitions by being specified in the Select list. They are then forwarded as associations without the semantics of a to-parent association.

-   Like associations, they can be forwarded in [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_union_v1.htm) views.

-   They cannot be defined in an [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm).

Special [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_on_assoc_v1.htm) apply when specifying the ON condition of the to-parent association, plus the following:

-   Only key fields of the parent entity can be used in the ON condition.

-   The ON condition must use all key fields of the parent entity. They can be used only once in the ON condition.

-   The ON condition can contain only the Boolean operator AND. Negations using NOT are not allowed.

-   In the ON, condition, each key field of the parent entity can only be used in a [comparison expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm) "=".

-   Key fields of the parent entity can only be compared with fields of the child entity in the ON. It is not possible to compare the key fields of the parent entity with a [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm), a parameter, a [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry"), or another field of the parent entity.

-   A field of the child entity can be used only once in the ON.

-   Aggregate functions, arithmetic functions, and built-in functions cannot be used in the ON condition.

-   Path expressions that generate a join are not allowed in the ON condition.

Hints

-   A node that defines a to-parent association is not automatically a child entity of the business object. A node is only a child entity of the business object when it is the target of a composition.

-   A to-parent association can also be defined in a CDS entity that is not a child entity of a business object. In this case, a warning is raised.
    

Addition

... AS \_assoc

Effect

This addition works in the same way as the addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm).