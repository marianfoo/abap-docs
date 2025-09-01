  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20RESTful%20Programming%20Model%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-RESTFUL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

ABAP RESTful Programming Model in ABAP Release 7.53

From release 7.33 on, the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") is introduced.

This mainly involves:

-   [RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\))
-   [RAP Business Objects (RAP BO)](javascript:call_link\('abenabap_rap.htm'\))
    -   [BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\))
    -   [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\))
-   [ABAP EML](javascript:call_link\('abeneml.htm'\))
-   [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) in the ABAP type concept.

In the beginning, so-called [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") can be created with the addition [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\)) of the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") when defining a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). This scenario is intended for brownfield developments with existing application code. All operations and services must be implemented by the application developer.