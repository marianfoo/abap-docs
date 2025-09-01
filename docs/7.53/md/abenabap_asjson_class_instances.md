  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) →  [asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\)) → 

asXML - Instances of Classes

To transform classes to [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") using the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), or to create classes from JSON data, their classes must implement the interface IF\_SERIALIZABLE\_OBJECT. The instance of a class (object) is displayed as an object component of the object %heap as follows:

"key":{ "%type":"class",
        "%val":{ "part":{ "%classVersion":"...",
                          "name":...
                          ...
                        }
                 ...
               }
      }

The name key is the key used to reference the object. The value of key is itself an object whose object components represent the class and the attributes of the referenced ABAP object.

-   The character-like value class of the component %TYPE specifies the class of the object. The same applies to class as to the element name class in [asXML](javascript:call_link\('abenasxml_class_instances.htm'\)) representation. In asJSON, the namespace that specifies where the class is defined in asXML is resolved before the class name.

-   The component %VAL represents the attribute values of the object. The value of %VAL is itself an object. The components part are objects that contain the values of the instance attributes of individual object parts. The same applies to the object parts and their names part as to the subelements <part> in [asXML](javascript:call_link\('abenasxml_class_instances.htm'\)) representation.

-   The components of an object part part represent the values of the instance attributes of the objects in their canonical representation, under their names. The same applies to the names as to the corresponding elements in [asXML](javascript:call_link\('abenasxml_class_instances.htm'\)) representation. Static attributes are ignored.

-   An optional component, %classVersion, of an object part, part, contains the version of the class of the object part in character-like representation. The same applies to the version of the class as to the attribute classVersion in [asXML](javascript:call_link\('abenasxml_class_instances.htm'\)) representation.

The [tag interface](javascript:call_link\('abentag_interface_glosry.htm'\) "Glossary Entry") IF\_SERIALIZABLE\_OBJECT has the same meaning for JSON as for [asXML](javascript:call_link\('abenasxml_class_instances.htm'\)). This means it defines which attributes of a class are serialized and helper methods can be implement that modify the behavior (see the [example](javascript:call_link\('abenserializable_object_abexa.htm'\))).

Executable Example

[asJSON for Object References](javascript:call_link\('abenabap_json_asjson_oref_abexa.htm'\))