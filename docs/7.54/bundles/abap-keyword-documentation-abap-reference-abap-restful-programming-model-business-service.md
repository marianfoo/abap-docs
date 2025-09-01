# ABAP Keyword Documentation / ABAP − Reference / ABAP RESTful Programming Model / Business Service

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenrpm_business_service.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_business_service.htm)
- [abenrpm_service_definition.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_service_definition.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.929Z

---

### abenrpm_business_service.htm

> **📖 Official SAP Documentation**: [abenrpm_business_service.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_business_service.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenrpm_business_service.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_business_service.htm)

### abenrpm_service_definition.htm

> **📖 Official SAP Documentation**: [abenrpm_service_definition.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_service_definition.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenrpm_service_definition.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_service_definition.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Business Service](javascript:call_link\('abenrpm_business_service.htm'\)) → 

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

The business service definition (or service definition for short) is a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that enables a consumer-specific perspective on the underlying data model. The service definition defines which CDS entities and which data model of the behavior are provided for consumption as part of the [business service](javascript:call_link\('abenrpm_business_service.htm'\)).

If a [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") is to be made available, the following entities are to be provided in the service definition:

-   [Root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") and [child entities](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry")

-   Target entities for the compositions and associations in the business object

-   The CDS view of the value help provider and the text provider, to use the value help and the text assignments

The service definition is independent of the type of service protocol (for example, OData) used for the business service.

The following points apply for the syntax of the service definition:

-   Optionally, the service definition can start with the CDS annotation @EndUserText.label. The annotation value label\_text describes the service definition and consists of a string with a maximum of 60 characters.

-   [Annotations](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) @Scope: \[#SERVICE\] can be specified in the service definition before the statement DEFINE SERVICE.

-   The service definition name service\_name follows the [Naming Conventions and Namespaces](javascript:call_link\('abennaming_conventions.htm'\)) of the repository objects.

-   The CDS entities to be provided as part of the business service are grouped together in brackets {...}, each after the keyword EXPOSE. Optionally, you can assign an alias, which is defined after the keyword AS. The aliases are then used instead of the names of the CDS entities when the business service is accessed.

-   According to the CDS syntax rules, every EXPOSE statement ends with a semicolon.

Remarks

-   A CDS entity or a business model can be made available by multiple service definitions in different contexts.

-   The service definition must be associated with at least one service binding.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node Travel of the business object for managing flight trips.

The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)). The data model example defines

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
