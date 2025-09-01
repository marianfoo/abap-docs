  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY, ABAP class

Syntax

... [@ObjectModel.query.implementedBy : 'ABAP:class\_name'](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) ...

Effect

The annotation [@ObjectModel.query.implementedBy](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) binds an ABAP class class\_name as a query provider class to a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry"). When a CDS custom query is accessed via a framework, such as the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"), the annotation is evaluated and the ABAP implementation is called to perform the query. The ABAP class must implement the predefined ABAP interface IF\_RAP\_QUERY\_PROVIDER to connect it to the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry").

In the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"), CDS custom queries are referred to as [RAP unmanaged queries](javascript:call_link\('abenrap_unmanged_query_glosry.htm'\) "Glossary Entry").

For more information, see the ABAP RESTful Application Programming Model Developer guide, sections

-   Using a CDS Custom Entity for Data Modeling and
-   Implementing an Unmanaged Query

The annotation ObjectModel.query.implementedBy is mandatory for CDS custom entities when working in [SAP BTP ABAP environment](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry") or [S/4HANA Cloud ABAP environment](javascript:call_link\('abens4_hana_cloud_abap_env_glosry.htm'\) "Glossary Entry").

Hint

While the annotation ObjectModel.query.implementedBy must be used for CDS custom entities in order to bind an ABAP class, it also can be used for other CDS entities. Then it overrides the original query of an CDS entity when accessed by a framework that evaluates the annotation.

Example

The custom entity DEMO\_CDS\_CUSTOM\_ENTITY is bound to ABAP class CL\_DEMO\_CUSTOM\_ENTITY\_QUERY. This ABAP class implements the interface IF\_RAP\_QUERY\_PROVIDER and it generates an internal table with random UUID values.

@EndUserText.label: 'CDS custom entity, query implementation'
@ObjectModel.query.implementedBy: 'ABAP:CL\_DEMO\_CUSTOM\_ENTITY\_QUERY'
define custom entity DEMO\_CDS\_CUSTOM\_ENTITY
  with parameters
    p\_number : int1
  {
    key id   : int4;
        uuid : abap.char(32);
  }

Executable Example

The executable example [Implementing a custom query](javascript:call_link\('abencds_custom_query_abexa.htm'\)) executes the query implementation class and returns data.

Continue
![Example](exa.gif "Example") [CDS DDL - DEFINE CUSTOM ENTITY, Implementing a Custom Query](javascript:call_link\('abencds_custom_query_abexa.htm'\))