  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.53](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-753.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP RESTful Programming Model in Release 7.53, ABENNEWS-753-RESTFUL, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP RESTful Programming Model in Release 7.53

From release 7.33 on, the [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") is introduced.

This mainly involves:

-   [RAP Business Services (BS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_business_services.htm)
-   [RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm)
    -   [BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm)
    -   [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm)
-   [ABAP EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm)
-   [BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) in the ABAP type concept.

In the beginning, so-called [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") can be created with the addition [unmanaged](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_impl_type.htm) of the [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") when defining a [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"). This scenario is intended for brownfield developments with existing application code. All operations and services must be implemented by the application developer.