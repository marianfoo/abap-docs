  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20transactional%20interface%2C%20ABENCDS_TRANS_INTERFACE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS transactional interface

A CDS transactional interface is a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") that is intended to serve as stable public interface for consumption. A CDS transactional interfaces should be classified by a [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry") and thus serve as [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry"). They are typically used in the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") to provide the basis for a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"). A CDS transactional interface is defined using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE VIEW ENTITY AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_interface.htm'\)) and it must have its [provider contract](javascript:call_link\('abencds_pv_provider_contract.htm'\)) set to TRANSACTIONAL\_INTERFACE.