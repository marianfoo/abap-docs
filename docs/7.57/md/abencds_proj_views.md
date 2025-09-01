  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Projection Views, ABENCDS_PROJ_VIEWS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Projection Views

A [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") using the statement DEFINE *\[*TRANSIENT*\]* VIEW ENTITY AS PROJECTION ON in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). DDL source code in a CDS projection view can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

A CDS projection view is based on a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and exposes a subset of its features.

The name of a CDS projection view is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

[Client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is done implicitly and automatically for CDS projection views. The rules are the same as for CDS view entities, see section [ABAP CDS - Client Handling in CDS View Entities](javascript:call_link\('abencds_v2_view_client_handling.htm'\)).

Table buffering does not work for CDS projection views, since [buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") in general does not work with another [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as data source.

There are different types of projection views available, depending on the purpose and use case of the projection view. The type of projection view is specified using the syntax addition [PROVIDER CONTRACT](javascript:call_link\('abencds_pv_provider_contract.htm'\)). The following types of CDS projection views are available:

-   [CDS transactional queries](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry")
    
    Transactional queries define the projection layer of a RAP business object.
    
    For details, see the section about [Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)).
    
-   [CDS transactional interfaces](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry")
    
    CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") to provide the basis for a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry").
    
    For details, see the section about [CDS Transactional Interfaces](javascript:call_link\('abencds_pv_transactional_interface.htm'\)).
    
-   [CDS analytical queries](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry")
    
    [CDS analytical queries](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry") are intended for modelling analytical queries within the CDS data model. They are evaluated by the analytical engine.
    
    For details, see the section about [Analytical Queries](javascript:call_link\('abencds_analytical_query_apv.htm'\)).
    
-   no provider contract specified
    
    Deprecated. It is strongly recommended that a provider contract is specified. If no provider contract is specified, the same features are available as for transactional queries. There are only a few differences in the syntax checks to transactional queries. The differences are listed in topic [no contract](javascript:call_link\('abencds_pv_no_contract.htm'\)).
    

Hint

A CDS projection view can be extended using a [CDS view entity extension](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry") EXTEND VIEW ENTITY. For details, see topic [CDS DDL - EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)).

Continue
[CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\))
[CDS DDL - CDS Projection View, Transactional Interface](javascript:call_link\('abencds_pv_transactional_interface.htm'\))
[CDS DDL - CDS Projection View, Analytical Queries](javascript:call_link\('abencds_analytical_query_apv.htm'\))
[CDS DDL - CDS Projection View, No Contract](javascript:call_link\('abencds_pv_no_contract.htm'\))