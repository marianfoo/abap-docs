  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_named.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asXML - Mapping of Reference Variables and Objects, ABENABAP_XSLT_ASXML_REFERENCES, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

asXML - Mapping of Reference Variables and Objects

Anonymous data objects and instances of classes (objects) are addressed in ABAP using references in reference variables only. The associated asXML format consists of

-   subelements of [values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_general.htm) for named reference variables and
-   by default subelements of [heap](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_general.htm) for the referenced objects.

The reference between the reference elements and the object elements is established using an XML reference mechanism, where a referenced object in the same XML data is identified by a key. The dynamic type of the reference variables for the object elements under heap is specified when serialization takes place, so that deserialization is unique.

-   [Named Reference Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_reference_variable.htm)
-   [Anonymous Data  Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_anonymous_data_object.htm)
-   [Class Instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_class_instances.htm)

Hint

-   The asXML representation of reference variables and referenced objects is only of relevance for [XSL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenid_trafo_glosry.htm "Glossary Entry") transformations and the identity transformation ID. You cannot currently use Simple Transformations to transform reference variables.
-   For data references, the value embedded can be specified for the transformation option [data\_refs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_options.htm) to define an embedded repository in serializations instead of the repository in the element heap.

Executable Example

[asXML, Mapping of Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_object_abexa.htm)

Continue
[asXML - Named Reference Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_reference_variable.htm)
[asXML - Anonymous Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_anonymous_data_object.htm)
[asXML - Instances of Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_class_instances.htm)