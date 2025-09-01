---
title: "Business Service Definition"
description: |
  Syntax @EndUserText.label: 'label_text' Annotation Annotation ... DEFINE SERVICE service_name  EXPOSE  CDS_entity_name      AS CDS_entity_alias; EXPOSE CDS_entity_name      AS CDS_entity_alias; ... EXPOSE  projection_view_name AS proje
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_service_definition.htm"
abapFile: "abenrpm_service_definition.htm"
keywords: ["do", "if", "try", "data", "abenrpm", "service", "definition"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Business Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_business_service.htm) → 

Business Service Definition

Syntax

*\[*@EndUserText.label: 'label\_text'*\]*
*\[*Annotation*\]*
*\[*Annotation*\]*
...
DEFINE SERVICE service\_name
{
  EXPOSE  CDS\_entity\_name      *\[*AS CDS\_entity\_alias*\]*;
  *\[*EXPOSE CDS\_entity\_name      *\[*AS CDS\_entity\_alias*\]*; ...*\]*
  EXPOSE  projection\_view\_name *\[*AS projection\_view\_alias*\]*;
  *\[*EXPOSE projection\_view\_name *\[*AS projection\_view\_alias*\]*; ...*\]*
}

Effect

The business service definition (or service definition for short) is a [repository object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_object_glosry.htm "Glossary Entry") that enables a consumer-specific perspective on the underlying data model. The service definition defines which CDS entities and which data model of the behavior are provided for consumption as part of the [business service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_business_service.htm).

If a [business object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry") is to be made available, the following entities are to be provided in the service definition:

-   [Root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry") and [child entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparent_entity_glosry.htm "Glossary Entry")

-   Target entities for the compositions and associations in the business object

-   The CDS view of the value help provider and the text provider, to use the value help and the text assignments

The service definition is independent of the type of service protocol (for example, OData) used for the business service.

The following points apply for the syntax of the service definition:

-   Optionally, the service definition can start with the CDS annotation @EndUserText.label. The annotation value label\_text describes the service definition and consists of a string with a maximum of 60 characters.

-   [Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) @Scope: \[#SERVICE\] can be specified in the service definition before the statement DEFINE SERVICE.

-   The service definition name service\_name follows the [Naming Conventions and Namespaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennaming_conventions.htm) of the repository objects.

-   The CDS entities to be provided as part of the business service are grouped together in brackets {...}, each after the keyword EXPOSE. Optionally, you can assign an alias, which is defined after the keyword AS. The aliases are then used instead of the names of the CDS entities when the business service is accessed.

-   According to the CDS syntax rules, every EXPOSE statement ends with a semicolon.

Remarks

-   A CDS entity or a business model can be made available by multiple service definitions in different contexts.

-   The service definition must be associated with at least one service binding.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node Travel of the business object for managing flight trips.

The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm). The data model example defines

-   The root entity /DMO/I\_Travel with composition /DMO/I\_Booking and associations to the CDS entities /DMO/I\_Agency, /DMO/I\_Customer, I\_CurrencyText, and/DMO/I\_Status\_Text

-   The child entity /DMO/I\_Booking with associations to the CDS entities /DMO/I\_Travel, /DMO/I\_Customer, /DMO/I\_Carrier, and /DMO/I\_Connection

-   The CDS views of the value help provider and the text provider DMO/I\_Customer, /DMO/I\_Carrier, /DMO/I\_Connection, I\_CurrencyText, /DMO/I\_Agency, and /DMO/I\_Status\_Text

The following example shows the service definition /DMO/I\_Travel\_SD for the business object Travel:

@EndUserText.label: 'Service Definition for Travel'
define service /DMO/I\_TRAVEL\_SD
{
  expose /DMO/I\_Travel      as Travel;
  expose /DMO/I\_Booking     as Booking;
  expose /DMO/I\_Agency      as Agency;
  expose /DMO/I\_Customer    as Customer;
  expose I\_CurrencyText     as Currency;
  expose /DMO/I\_Status\_Text as Status;
  expose /DMO/I\_Carrier     as Carrier;
  expose /DMO/I\_Connection  as Connection;
}