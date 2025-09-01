  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY

Syntax

*\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
*\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
...
*\[*[@ObjectModel.query.implementedBy : 'class\_name'](javascript:call_link\('abencds_f1_custom_query.htm'\))*\]*
*\[*DEFINE*\]* *\[*ROOT*\]* CUSTOM ENTITY custom\_entity
         *\[*[parameter\_list](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))*\]*
          [element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\))*\[*;*\]*

Additions:

[1\. ... ROOT ...](#!ABAP_ADDITION_1@1@)

Effect

Defines a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") custom\_entity in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). When a CDS custom entity is activated, its metadata is created but no other object instances are created on the database or in AS ABAP. The name custom\_entity must comply with the naming conventions for [dictionary types](javascript:call_link\('abenddic_data_types.htm'\)) and can have a maximum of 30 characters.

-   [@entity\_annot](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) can be used to specify optional [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") for the CDS custom entity.
-   The annotation [@ObjectModel.query.implementedBy](javascript:call_link\('abencds_f1_custom_query.htm'\)) binds an ABAP class which implements an ABAP query. This query is not called by the ABAP runtime framework but by a framework like the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry").
-   [parameter\_list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) is used to declare a list of optional input parameters for the CDS custom entity.
-   [element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) is used to declare elements, CDS associations, CDS compositions, and CDS-to-parent associations of the CDS custom entity.

A CDS custom entity can be used as a global structured type in ABAP programs. The entity is located in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP. The elements of the CDS custom entity define the components of the global structured type that can be referenced in ABAP programs using TYPE. As is the case for any CDS entity, the annotations of a CDS custom entity can be [evaluated](javascript:call_link\('abencds_semantics_annotation_abexa.htm'\)).

Hints

-   A CDS custom entity cannot be used as a data source in other CDS entities or in ABAP SQL.
-   No ABAP Dictionary [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) visible in the [tools](javascript:call_link\('abenddic_tools.htm'\)) for structures is created for a CDS custom entity.
-   CDS custom entities can be used as values for the CDS annotations AssociationRef and ElementRef.
-   The annotation ObjectModel.query.implementedBy is mandatory when working in [SAP BTP ABAP environment](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry") or [S/4HANA Cloud ABAP environment](javascript:call_link\('abens4_hana_cloud_abap_env_glosry.htm'\) "Glossary Entry").
-   In the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"), custom entities are used as a data model basis for [RAP unmanaged queries](javascript:call_link\('abenrap_unmanged_query_glosry.htm'\) "Glossary Entry").

Example

The following DDL source code shows a CDS custom entity:

@EndUserText.label: 'Custom Entity for Sales Order'
define root custom entity DEMO\_SALES\_SO\_CUSTOM\_ANALYTICS
  {
    key SalesOrderKey       : demo\_sales\_raw16;
        @EndUserText.label  : 'Sales Order Item Count'
        SalesOrderItemCount : int4;
        TypeCode            : abap.char(5);
  }

Addition 1   

... ROOT

Effect

In ABAP CDS, the keyword ROOT is used to define the CDS custom entity custom\_entity as a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of the hierarchy of a [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry"). The following applies to the root entity:

-   There is exactly one root entity in the structure of a business object.
-   A root entity can have [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") defined as [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") using the keyword [COMPOSITION](javascript:call_link\('abencds_f1_custom_composition.htm'\)), but this is not mandatory. A root entity can also be a [leaf entity](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry").
-   A root entity does not have a [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry"). [To-parent](javascript:call_link\('abencds_f1_custom_tp_association.htm'\)) associations are not allowed in root entities.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, ABAP class](javascript:call_link\('abencds_f1_custom_query.htm'\))
[CDS DDL - DEFINE CUSTOM ENTITY, parameter\_list](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))
[CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\))