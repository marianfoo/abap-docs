  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20Projection%20View%2C%20Transactional%20Interface%2C%20ABENCDS_PV_TRANSACTIONAL_INTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion%20for%20improvement:)

CDS DDL - CDS Projection View, Transactional Interface

A [CDS transactional interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") is a [CDS projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry") that is intended to serve as stable public interface. A CDS transactional interface should be released internally in the system under the [C1 contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_contract_glosry.htm "Glossary Entry"), and it can be released additionally under the [C0 contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry") for extensions. A CDS transactional interface is typically used in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry") to provide the basis for a [RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). The feature set is restricted to projecting elements from the underlying [projected entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). No new associations, [virtual elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_virtual_element_glosry.htm "Glossary Entry"), or fields can be defined.

The following image shows the position of a CDS transactional interface in a CDS data model.

![Figure](abdoc_trans_interface.png)

A CDS transactional interface is built on top of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The projected entity must be part of a RAP BO: It must either be a root entity or contain a to-parent association. The transactional interface projects a subset of elements of its projected entity and is released for a specific API state. Under the precondition that the transactional interface is released under the C1 stability contract, a consumer can build a [CDS transactional query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") on top of a CDS transactional interface. This transactional query is the top-most layer of the data model and prepares the data for the particular use case.

As a global data type, a CDS projection view of type transactional interface represents a structured type with the elements of the CDS projection view as components. Usage:

-   CDS transactional interfaces can be used as data source for CDS transactional queries. They cannot be used as data source for any other CDS entity.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic [Business Object Interface](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7caa146ddc4b4f24a58efd33f0f789b4?version=sap_cross_product_abap).
-   [ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS transactional interfaces.

Continue
[CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_as_interface.htm)