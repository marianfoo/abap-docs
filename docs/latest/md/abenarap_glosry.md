  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20RESTful%20Application%20Programming%20Model%2C%20ABENARAP_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP RESTful Application Programming Model

Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is [RESTful](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestful_glosry.htm "Glossary Entry") or that meets the requirements of a [REST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrest_glosry.htm "Glossary Entry") architecture. In ABAP RAP, [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") plays the role of a stateless Web server. [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry") serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The modeling is based on [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") and special [RAP objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_rap_object_glosry.htm "Glossary Entry").

For queries, CDS entities can be directly exposed by [business services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_service_glosry.htm "Glossary Entry") and all data can be retrieved by the [RAP query engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"). For transactional access to data, the model offers [RAP business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry"), whose behavior is provided by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry"), or is implemented in [ABAP behavior implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_implement_glosry.htm "Glossary Entry").

RAP is the transactional programming model for [ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cloud_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap)