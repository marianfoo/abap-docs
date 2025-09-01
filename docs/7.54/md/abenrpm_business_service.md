---
title: "Business Service"
description: |
  A business service is a RESTful service in the context of the ABAP RESTful Programming Model(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenr_a_p_glosry.htm 'Glossary Entry') that can be called by a consumer. The business service is defined by the fact that the relevant data artifa
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_business_service.htm"
abapFile: "abenrpm_business_service.htm"
keywords: ["do", "if", "try", "data", "abenrpm", "business", "service"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) → 

Business Service

A business service is a RESTful service in the context of the [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenr_a_p_glosry.htm "Glossary Entry") that can be called by a consumer. The business service is defined by the fact that the relevant data artifacts and the behavior model are made available for consumption. The business service is split into two different artifacts:

-   [Business service definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenservice_definition_glosry.htm "Glossary Entry") (or service definition for short)
    A projection of the data model and of the associated behavior that is to be offered for consumption.

-   [Business service binding](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenservice_bindung_glosry.htm "Glossary Entry") (or service binding for short)
    Implements protocols (for example, OData) that are to be offered for consumption.

The separation of service definition and service binding allows data models and service definitions to be integrated into multiple service bindings without having to be implemented again.

Continue
[Business Service Definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_service_definition.htm)