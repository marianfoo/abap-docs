  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) →  [ABAP RESTful Programming Model in Release 7.54](javascript:call_link\('abennews-754-restful.htm'\)) → 

Business Service in Release 7.54

[1\. Business Service](#!ABAP_MODIFICATION_1@1@)

Modification 1

Business Service

The [business service](javascript:call_link\('abenrpm_business_service.htm'\)) is defined by the fact that the relevant data artifacts and the behavior model are made available for consumption. The business service is split into two different artifacts:

-   Business service definition (or service definition for short)
    A projection of the data model and of the associated behavior that is to be offered for consumption.

-   Business service binding (or service binding for short)
    Implements protocols (for example, OData) that are to be offered for consumption.