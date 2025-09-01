  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP RESTful Programming Model in Release 7.53, ABENNEWS-753-RESTFUL, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP RESTful Programming Model in Release 7.53

From release 7.33 on, the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") is introduced.

This mainly involves:

-   [RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\))
-   [RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\))
    -   [BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\))
    -   [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\))
-   [ABAP EML](javascript:call_link\('abeneml.htm'\))
-   [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) in the ABAP type concept.

In the beginning, so-called [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") can be created with the addition [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\)) of the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") when defining a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). This scenario is intended for brownfield developments with existing application code. All operations and services must be implemented by the application developer.