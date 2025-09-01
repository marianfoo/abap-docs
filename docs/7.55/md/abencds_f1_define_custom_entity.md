  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY

Syntax

*\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
*\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
...
@objectModel.query.implementedBy : 'class\_name'
*\[*DEFINE*\]* *\[*ROOT*\]* CUSTOM ENTITY custom\_entity
         *\[*[parameter\_list](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))*\]*
          [element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\))*\[*;*\]*

Effect

Defines a [CDS custom entity](javascript:call_link\('abencds_custom_entities.htm'\)) custom\_entity in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

The following applies to CDS custom entities:

-   CDS custom entities do not have a SELECT statement.

-   The runtime of a CDS custom entity must be implemented in an ABAP class class\_name.

-   The class class\_name must be referenced in the associated CDS custom entity using the [annotation](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) @objectModel.query.implementedBy.

-   The ABAP class class\_name must be implemented before the activation of the CDS custom entity.

-   The CDS custom entity can be specified as the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"). A CDS association, CDS composition, or CDS to-parent association of this type can be [exposed](javascript:call_link\('abencds_f1_custom_element.htm'\)) only and cannot be created as an instance of a join expression.

-   CDS custom entities can be used in AssociationRef annotations and ElementRef annotations.

The following applies to the syntax of the CDS custom entity:

-   The name custom\_entity must comply with the naming conventions for [dictionary types](javascript:call_link\('abenddic_data_types.htm'\)) and can have a maximum of 30 characters.

-   [@entity\_annot](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) can be used to specify optional [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") for the CDS custom entity.

-   [parameter\_list](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\)) is used to declare a list of optional input parameters for the CDS custom entity.

-   [element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) is used to declare elements of the CDS custom entity and to declare and expose CDS associations, CDS compositions, and CDS to-parent associations of the CDS custom entity.

The keyword ROOT is used to define the CDS custom entity custom\_entity as a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of the hierarchy of the business object. The following applies to the root entity:

-   There can be a maximum of one root entity.

-   A root entity can be a node without definition of the [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") or a CDS composition for a different CDS entity.

-   A root entity does not have a [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry").

Generally speaking, the syntax and semantics of CDS custom entities are very similar to [abstract entities](javascript:call_link\('abencds_abstract_entities.htm'\)).

The name of a CDS custom entity is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

Hints

-   The [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a CDS custom entity must have the same name as this entity.

-   No ABAP Dictionary [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) visible in the [tools](javascript:call_link\('abenddic_tools.htm'\)) for structures is created for a CDS custom entity.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, parameter\_list](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))
[CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\))