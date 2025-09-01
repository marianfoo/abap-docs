  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Interface%20Behavior%20Definition%2C%20ABENBDL_RAP_BO_INTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Interface Behavior Definition

A [RAP interface behavior definition](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry") is created using the behavior definition language [RAP BDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

A [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry") is a RAP business object that serves as interface for stable consumption. It is typically released as [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") under the [C1 contract](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry"). It might also be released under the [C0 contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") for extensibility. A RAP BO interface consists of a [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") and a RAP interface behavior definition. It does not have a runtime handler and cannot specify an implementation class for [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"). Instead, it reuses or inherits the behavior and characteristics of the underlying base BO. Each RAP BO can have multiple interfaces.

RAP BO interfaces can only be consumed with [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry"). It is not possible to expose a RAP BO interface directly as [RAP business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry").

The following image shows the role of RAP interface behavior definitions in a CDS data model.

![Figure](abdoc_interface_bdef.png)

A RAP interface behavior definition must always be based on a [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") and it defines the behavior that is included in the interface. Another projection layer ([CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") and [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry")) can be built on top of a RAP BO interface.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic [Business Object Interface](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7caa146ddc4b4f24a58efd33f0f789b4?version=sap_cross_product_abap).

Continue
[RAP - Behavior Definition Header, Interface BDEF](javascript:call_link\('abenbdl_bo_interface_header.htm'\))
[RAP - Entity Behavior Definition, Interface BDEF](javascript:call_link\('abenbdl_define_beh_interface.htm'\))