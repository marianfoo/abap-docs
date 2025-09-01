---
title: "Hint"
description: |
  Data types without names or with purely technical names are bound data types(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbound_data_type_glosry.htm 'Glossary Entry') or data types constructed using RTTS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_ty
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_reference_variable.htm"
abapFile: "abenasxml_reference_variable.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenasxml", "reference", "variable"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_named.htm) →  [asXML - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_references.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asXML - Named Reference Variables, ABENASXML_REFERENCE_VARIABLE, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

asXML - Named Reference Variables

A named reference variable is represented as the only attribute of the associated subelement of values, where the subelement has no further content.

<bni href="#key"/>

An attribute for a reference variable has the name href and the content "#key", where key is the unique key of an object in the element heap. An element of an initial reference does not have an attribute href nor any other content. The key key is set by the ABAP runtime framework in serializations and in deserializations, any key can be used.

The following special cases when serializing named reference variables should be noted:

-   Data reference variables that point to data objects whose data type only has one technical name raise the exception CX\_REFERENCE\_NOT\_SERIALIZABLE (handled using CX\_XSLT\_SERIALIZATION\_ERROR). This can be avoided by specifying transformation option [technical\_types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_options.htm).
-   Data reference variables that point to data objects that were not created using CREATE DATA (stack references) are handled like initial reference variables in serializations. This can be overridden by specifying the transformation option [data\_refs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_options.htm).

In deserializations to a reference variable, the reference variable must be the same as or more general than the dynamic type of the object that is stored in the XML document. The associated ABAP data objects or instances of a class are created in deserializations.

Hint

Data types without names or with purely technical names are [bound data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbound_data_type_glosry.htm "Glossary Entry") or data types constructed using [RTTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry").

Executable Example

[Serializing Data References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenserialize_dref_abexa.htm)

Continue
![Example](exa.gif "Example") [Serializing Data References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenserialize_dref_abexa.htm)