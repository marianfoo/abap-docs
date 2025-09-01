  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Transformations](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Mapping%20of%20Reference%20Variables%20and%20Objects%2C%20ABENABAP_ASXML_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

asJSON - Mapping of Reference Variables and Objects

As in [asXML](javascript:call_link\('abenabap_xslt_asxml_references.htm'\)), a reference mechanism is used for the asJSON representation of anonymous data objects and class instances (objects), which are addressed using references in reference variables. Since [JSON](javascript:call_link\('abenjson_oview.htm'\)) does not suggest any syntax for references, an SAP-specific reference mechanism based on asXML is used.

-   Named reference variables are represented as object components, whose content is by default a key for the referenced objects.
-   The referenced objects are stored as object components in the object [%heap](javascript:call_link\('abenabap_asjson_general.htm'\)). This name corresponds to the key.

In addition to the value, the dynamic type of the reference variables is specified in the object components of %heap when serialization takes place to ensure unique deserialization.

-   [asJSON - Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))
-   [asJSON - Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))
-   [asJSON - Instances of Classes](javascript:call_link\('abenabap_asjson_class_instances.htm'\))

Hints

-   The asJSON representation of reference variables and referenced objects is only relevant for [XSL](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") transformations and the identity transformation ID. Simple Transformations cannot currently be used to transform reference variables.
-   For data references, the value embedded can be specified for the transformation option [data\_refs](javascript:call_link\('abapcall_transformation_options.htm'\)) to define embedded storage in serializations instead of storage in the %heap object component.

Example

For information about the differences between serializing to %heap and embedded storage, see the executable example [Serializations to Heap or Embedded](javascript:call_link\('abenserialize_ref_heap_embed_abexa.htm'\)).

Continue
[asJSON - Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))
[asJSON - Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))
[asJSON - Instances of Classes](javascript:call_link\('abenabap_asjson_class_instances.htm'\))