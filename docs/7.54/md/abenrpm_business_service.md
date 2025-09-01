  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) → 

Business Service

A business service is a RESTful service in the context of the [ABAP RESTful Programming Model](javascript:call_link\('abenr_a_p_glosry.htm'\) "Glossary Entry") that can be called by a consumer. The business service is defined by the fact that the relevant data artifacts and the behavior model are made available for consumption. The business service is split into two different artifacts:

-   [Business service definition](javascript:call_link\('abenservice_definition_glosry.htm'\) "Glossary Entry") (or service definition for short)
    A projection of the data model and of the associated behavior that is to be offered for consumption.

-   [Business service binding](javascript:call_link\('abenservice_bindung_glosry.htm'\) "Glossary Entry") (or service binding for short)
    Implements protocols (for example, OData) that are to be offered for consumption.

The separation of service definition and service binding allows data models and service definitions to be integrated into multiple service bindings without having to be implemented again.

Continue
[Business Service Definition](javascript:call_link\('abenrpm_service_definition.htm'\))