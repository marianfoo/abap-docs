  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

ABAP RESTful Application Programming Model

Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") or that meets the requirements of a [REST](javascript:call_link\('abenrest_glosry.htm'\) "Glossary Entry") architecture. In ABAP RAP, [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") plays the role of a stateless Web server. [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The modeling is based on [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and special [CDS RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry").

For queries, CDS entities can be directly exposed by [business services](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") and all data can be retrieved by the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"). For transactional access to data, the model offers [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), whose behavior is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"), or is implemented in [ABAP behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

[→ More about](https://help.sap.com/viewer/c0d02c4330c34b3abca88bdd57eaccfc/Cloud/en-US/3b77569ca8ee4226bdab4fcebd6f6ea6.html)