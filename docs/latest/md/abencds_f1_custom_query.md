  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_custom_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20ABAP%20Class%2C%20ABENCDS_F1_CUSTOM_QUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, ABAP Class

Syntax

... [@ObjectModel.query.implementedBy : 'ABAP:class\_name'](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm) ...

Effect

The annotation [@ObjectModel.query.implementedBy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm) binds an ABAP class class\_name as a query provider class to a [CDS custom entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"). When a CDS custom query is accessed via a framework, such as the [RAP query engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"), the annotation is evaluated and the ABAP implementation is called to perform the query. The ABAP class must implement the predefined ABAP interface IF\_RAP\_QUERY\_PROVIDER to connect it to the [RAP query engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_query_engine_glosry.htm "Glossary Entry").

In the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry"), CDS custom queries are referred to as [RAP unmanaged queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_unmanged_query_glosry.htm "Glossary Entry").

For more information, see the ABAP RESTful Application Programming Model Developer guide, section [Implementing an Unmanaged Query](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/254f68c7d5374e94a88241b7ce3bd414?version=sap_cross_product_abap).

The annotation ObjectModel.query.implementedBy is mandatory for CDS custom entities when working in [ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cloud_glosry.htm "Glossary Entry").

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

The executable example [Implementing a custom query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_query_abexa.htm) executes the query implementation class and returns data.

Continue
![Example](exa.gif "Example") [CDS DDL - DEFINE CUSTOM ENTITY, Implementing a Custom Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_query_abexa.htm)