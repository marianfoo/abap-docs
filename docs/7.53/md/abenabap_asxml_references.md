  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Reference Variables and Objects

A reference mechanism is used (like in [asXML](javascript:call_link\('abenabap_xslt_asxml_references.htm'\))) for the asJSON display of anonymous data objects and class instances (objects), which are addressed using references in reference variables. As [JSON](javascript:call_link\('abenjson_oview.htm'\)) does not suggest any syntax for references, an SAP-specific reference mechanism based on asXML is used.

-   Named reference variables are displayed as object components, whose content is usually a key for the referenced objects.

-   The referenced objects are stored as object components in the object [%heap](javascript:call_link\('abenabap_asjson_general.htm'\)). This name corresponds to the key.

In addition to the value, the dynamic type of the reference variables is specified in the object components of %heap when serialization takes place. This ensures that deserialization is unambiguous.

-   [Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))

-   [Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))

-   [Class Instances](javascript:call_link\('abenabap_asjson_class_instances.htm'\))

Note

-   The asJSON representation of reference variables and referenced objects is only of relevance for [XSL](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") transformations and the identity transformation ID. You cannot currently use simple transformations to transform reference variables.

-   For data references, the value "embedded" can be specified for the transformation option [data\_refs](javascript:call_link\('abapcall_transformation_options.htm'\)) to define embedded storage in serializations instead of storage in the %heap object component.

Example

For information about the differences between serializing to %heap and embedded storage, see the executable example [Serializations to Heap or Embedded](javascript:call_link\('abenserialize_ref_heap_embed_abexa.htm'\)).

Continue
[asJSON - Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))
[asJSON - Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))
[asXML - Instances of Classes](javascript:call_link\('abenabap_asjson_class_instances.htm'\))