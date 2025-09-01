  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_named.htm) →  [asXML - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_references.htm) → 

asXML - Named Reference Variables

A named reference variable is represented as the only attribute of the associated subelement of values, with the subelement not having any further content.

<bni href="#key"/>

An attribute for a reference variable has the name href and the content "#key", where key is the unique key of an object in the element heap. An element of an initial reference does not have an attribute href and has no other content. The key key of the ABAP runtime environment is set in serializations; in deserializations, any key can be used.

Note the following special cases when serializing named reference variables:

-   Data reference variables that point to data objects whose data type only has one technical name raise the exception CX\_REFERENCE\_NOT\_SERIALIZABLE (handled using CX\_XSLT\_SERIALIZATION\_ERROR). This can be avoided by specifying transformation option [technical\_types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation_options.htm).

-   Data reference variables that point to data objects that were not created using CREATE DATA (stack references) are handled like initial reference variables in serializations. This can be overridden by specifying the transformation option [data\_refs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation_options.htm).

In deserializations to a reference variable, the reference variable must be the same as or more general than the dynamic type of the object that is stored in the XML document. The associated ABAP data objects or instances of a class are created in deserializations.

Note

Data types without names (or with purely technical names) are [bound data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbound_data_type_glosry.htm "Glossary Entry") or data types constructed using [RTTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry").

Executable Example

[Serializing Data References](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenserialize_dref_abexa.htm)

Continue
![Example](exa.gif "Example") [Serializing Data References](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenserialize_dref_abexa.htm)