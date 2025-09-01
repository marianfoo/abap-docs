  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20RESTful%20Application%20Programming%20Model%2C%20ABENARAP_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP RESTful Application Programming Model

Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") or that meets the requirements of a [REST](javascript:call_link\('abenrest_glosry.htm'\) "Glossary Entry") architecture. In ABAP RAP, [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") plays the role of a stateless Web server. [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The modeling is based on [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and special [RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry").

For queries, CDS entities can be directly exposed by [business services](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") and all data can be retrieved by the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"). For transactional access to data, the model offers [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), whose behavior is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"), or is implemented in [ABAP behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

RAP is the transactional programming model for [ABAP Cloud](javascript:call_link\('abenabap_cloud_glosry.htm'\) "Glossary Entry").

[→ More about](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap)