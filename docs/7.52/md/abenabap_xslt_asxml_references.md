  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Mapping of ABAP Data Types](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) → 

asXML - Mapping of Reference Variables and Objects

Anonymous data objects and instances of classes (objects) are addressed in ABAP using references in reference variables only. The associated asXML format consists of

-   subelements of [values](javascript:call_link\('abenabap_xslt_asxml_general.htm'\)) for named reference variables and

-   (by default) subelements of [heap](javascript:call_link\('abenabap_xslt_asxml_general.htm'\)) for the referenced objects.

The reference between the reference elements and the object elements is made using an XML reference mechanism, where a referenced object in the same XML data is identified by a key. The dynamic type of the reference variables for the object elements under heap is specified when serialization takes place, so that deserialization is unambiguous.

-   [Named Reference Variables](javascript:call_link\('abenasxml_reference_variable.htm'\))

-   [Anonymous Data Objects](javascript:call_link\('abenasxml_anonymous_data_object.htm'\))

-   [Class Instances](javascript:call_link\('abenasxml_class_instances.htm'\))

Note

-   The asXML representation of reference variables and referenced objects is only of relevance for XSL transformations and the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID. Simple transformations cannot currently be used to transform reference variables.

-   For data references, the value "embedded" can be specified for the transformation option [data\_refs](javascript:call_link\('abapcall_transformation_options.htm'\)) to define an embedded repository in serializations instead of the repository in the element heap.

Executable Example

[asXML, Mapping of Objects](javascript:call_link\('abenasxml_object_abexa.htm'\))

Continue
[asXML - Named Reference Variables](javascript:call_link\('abenasxml_reference_variable.htm'\))
[asXML - Anonymous Data Objects](javascript:call_link\('abenasxml_anonymous_data_object.htm'\))
[asXML - Instances of Classes](javascript:call_link\('abenasxml_class_instances.htm'\))