  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asxml_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Instances%20of%20Classes%2C%20ABENABAP_ASJSON_CLASS_INSTANCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asJSON - Instances of Classes

To transform classes to [JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_glosry.htm "Glossary Entry") using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation.htm) or to create classes from JSON data, their classes must implement the interface IF\_SERIALIZABLE\_OBJECT. The instance of a class (object) is represented as an object component of the object %heap as follows:

"key":{ "%type":"class",
        "%val":{ "part":{ "%classVersion":"...",
                          "name":...
                          ...
                        }
                 ...
               }
      }

The name key is the key used to reference the object. The value of key is itself an object whose object components represent the class and the attributes of the referenced ABAP object.

-   The character-like value class of the component %TYPE specifies the class of the object. The same applies to class as to the element name class in [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_class_instances.htm) representation. In asJSON, the namespace that specifies where the class is defined in asXML is resolved before the class name.
-   The component %VAL represents the attribute values of the object. The value of %VAL is itself an object. The components part are objects that contain the values of the instance attributes of individual object parts. The same applies to the object parts and their names part as to the subelements <part> in [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_class_instances.htm) representation.
-   The components of an object part part represent the values of the instance attributes of the objects in their canonical representation under their names. The same applies to the names as to the corresponding elements in [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_class_instances.htm) representation. Static attributes are ignored.
-   An optional component, %classVersion, of an object part, part, contains the version of the class of the object part in character-like representation. The same applies to the version of the class as to the attribute classVersion in [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_class_instances.htm) representation.

The [tag interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_SERIALIZABLE\_OBJECT has the same meaning for JSON as for [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_class_instances.htm). This means it defines which attributes of a class are serialized. In addition, helper methods can be implemented that adjust behavior (see the [example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenserializable_object_abexa.htm)).

Executable Example

[asJSON for Object References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_asjson_oref_abexa.htm)