# ABAP - Keyword Documentation / ABAP - Reference / Data Interfaces and Communication Interfaces / ABAP and JSON / Transformations for JSON

Included pages: 18


### abenabap_json_trafos.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) → 

Transformations for JSON

The [transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) that can be called from ABAP, namely [XSL transformations](javascript:call_link\('abenxsl_transformation_1_glosry.htm'\) "Glossary Entry") and [simple transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry"), can also be used for [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry").

-   To call a transformation for JSON data as a source, the following XML sources can be specified in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)):

-   A string or internal table with [JSON data](javascript:call_link\('abenjson_oview.htm'\)) in character-like or byte-like representation.

-   A [JSON reader](javascript:call_link\('abenjson_reader_glosry.htm'\) "Glossary Entry")

A JSON reader returns JSON data in [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") format. The JSON data specified as a string or in an internal table is also handled like XML representing JSON data [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") format.

-   To call a transformation for JSON data as a target, a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") can be specified as an XML target in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)): A JSON writer expects data in [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") format.

Any XSLT programs and ST programs can be called that can handle JSON-XML:

-   If the source is JSON data, the transformation must process JSON-XML as its input.

-   If the target is JSON data, the transformation must create JSON-XML.

Self-written transformations must be programmed accordingly. The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID is handled appropriately internally.

-   [Self-Written Transformations](javascript:call_link\('abenabap_json_trafos_self.htm'\))

-   [Identity Transformation](javascript:call_link\('abenabap_json_trafo_id.htm'\))

Continue
[Self-Written Transformations for JSON](javascript:call_link\('abenabap_json_trafos_self.htm'\))
[Identity Transformations for JSON](javascript:call_link\('abenabap_json_trafo_id.htm'\))
[asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\))


### abenabap_json_trafos_self.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) → 

Self-Written Transformations for JSON

Self-written XSLT programs and simple transformations enable the following transformations:

-   Serialization of ABAP data objects to JSON

-   An [XSL transformation](javascript:call_link\('abenabap_xslt.htm'\)) accesses the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the connected ABAP data, created internally. Its task is to transform asXML to JSON-XML.

-   A [simple transformation](javascript:call_link\('abenabap_st.htm'\)) accesses the connected ABAP data directly. Its task is to create a valid JSON-XML representation.

-   Deserialization from JSON to ABAP data objects:

-   The task of a an [XSL transformation](javascript:call_link\('abenabap_xslt.htm'\)) is to transform JSON-XML to an [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the connected ABAP data objects.

-   The task of a [simple transformation](javascript:call_link\('abenabap_st.htm'\)) is to process JSON-XML and write the data to the connected ABAP data objects.

-   XSL transformations between JSON and XML or between JSON and JSON.

-   Transformations can be called between JSON-XML and any XML or between JSON-XML and JSON-XML.

Executable Example

[Simple Transformation for Internal Tables](javascript:call_link\('abenabap_st_json_table_abexa.htm'\))


### abenabap_json_trafo_id.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) → 

Identity Transformations for JSON

The predefined [identity transformation](javascript:call_link\('abenabap_xslt_id.htm'\)) ID is executed internally so that all requirements for [JSON transformations](javascript:call_link\('abenabap_json_trafos.htm'\)) are met. The following combinations are possible:

-   [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") as XML target

-   ABAP data objects as source
    The ABAP data is serialized directly to its canonical JSON format [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry"). In this concept, the ABAP data is serialized first to its XML format [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry"). This is then transformed to an [asJSON-XML](javascript:call_link\('abenasjson_xml_glosry.htm'\) "Glossary Entry") representation and passed to the writer.

-   XML data as XML source
    The XML source must be in JSON-XML format and is passed to the writer directly.

-   JSON data or JSON reader as XML source
    The JSON-XML data is passed to the writer directly.

-   JSON data or [JSON reader](javascript:call_link\('abenjson_reader_glosry.htm'\) "Glossary Entry") as XML source

-   ABAP data objects as target
    The JSON must be in an [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") format that matches the ABAP data objects. The JSON data is deserialized directly to the ABAP data objects. In this concept, an asJSON-XML representation of the asJSON data is edited that is first transformed to asXML and then deserialized to the ABAP data objects.

-   XML data as XML target
    The JSON-XML data is passed to the XML target directly.

-   JSON writer as XML target
    The JSON-XML data is passed to the writer directly.

When XML data is specified as an XML source or XML target, this covers all data that can be specified behind XML in CALL TRANSFORMATION, except for JSON data and JSON readers and writers.

Notes

-   If the identity transformation ID is used to serialize ABAP data to JSON and deserialize JSON data to ABAP, [asJSON, the canonical JSON representation](javascript:call_link\('abenabap_asjson.htm'\)) of ABAP data, is applied.

-   Copies of the XSL transformation ID made from the repository to other XSLT programs are not handled like ID internally and cannot be used like ID for JSON data.

Executable Examples

-   See [Identity Transformation with JSON Writer as Target](javascript:call_link\('abenjson_trafo_id_abexa.htm'\)) for the various ways of specifying JSON data as an XML source.

-   See the [asJSON](javascript:call_link\('abenabap_asjson.htm'\)) examples.


### abenabap_asjson.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) → 

asJSON - Canonical JSON Representation

The canonical XML representation asXML is the format of [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") data that is produced by a serialization of ABAP data using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID, or that is required for a deserialization using the identity transformation.

asJSON is based closely on [asXML](javascript:call_link\('abenabap_xslt_asxml.htm'\)). From a conceptional perspective, a asJSON representation is produced by a restructuring of the asXML representation of this ABAP data to a [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") representation, while keeping all value content. This means the same basic rules apply as for asXML. In particular, XML schema data types for the mapping of ABAP data types are also used in asJSON.

Description of the asJSON format:

-   [General asJSON Format](javascript:call_link\('abenabap_asjson_general.htm'\))

-   [Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\))

Notes

-   asJSON only occurs in the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID. In particular, asJSON is not generally needed for self-written transformations for JSON; [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") is used directly instead.

-   A JSON-XML representation of asJSON is known as [asJSON-XML](javascript:call_link\('abenasjson_xml_glosry.htm'\) "Glossary Entry"). asJSON-XML is not used as an intermediate format in transformations, but the asJSON-XML associated with a asJSON representation can be created to analyze it and compare it with asXML.

Continue
[asJSON - General Format](javascript:call_link\('abenabap_asjson_general.htm'\))
[asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\))
[asJSON - Mapping Additional XML Schema Data Types](javascript:call_link\('abenabap_asjson_schema.htm'\))


### abenabap_asjson_general.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

asJSON - General Format

The following lines show the general format of the [canonical JSON representation](javascript:call_link\('abencanonical_json_represen_glosry.htm'\) "Glossary Entry"); line breaks and indents are included for clarification purposes only.

{
  "bn1":...
  "bn2":...
   ...
  "%heap":{...}
}

The top level contains the object { }. The object components with the names bn1, bn2 ... represent the ABAP data objects specified in the addition source of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) as e1 e2 ... or in the addition result as f1 f2 ... The names of the object components bn1, bn2, ... are the names specified there in uppercase.

The values of the object components represent the content of named data object in accordance with the type-dependent mapping described in the following sections. Here, reference variables are always represented as object components whose content is objects that reference the content of referenced anonymous data objects and instances of classes in an optional object component %heap of the top object.

The same rules apply to the names of the object components bn1, bn2 ... as in [asXML](javascript:call_link\('abenabap_xslt_asxml_general.htm'\)) and replacements can be made as defined the table specified there.

Executable Example

[asJSON, General Format](javascript:call_link\('abenabap_hello_json_abexa.htm'\))


### abenabap_asjson_abap_types.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

asJSON - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asJON as the content of the following object components:

["bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
["bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
[...](javascript:call_link\('abenabap_asjson_general.htm'\))

An additional object is implemented for the objects referenced by reference variables:

["%heap":...](javascript:call_link\('abenabap_asjson_general.htm'\))

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation; deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\))

-   [Mapping of Structures](javascript:call_link\('abenabap_asjson_abap_types_struc.htm'\))

-   [Mapping of Internal Tables](javascript:call_link\('abenabap_asjson_abap_types_table.htm'\))

-   [Mapping of Enumerated Types](javascript:call_link\('abenabap_asjson_abap_types_enum.htm'\))

-   [Mapping of Reference Variables and Referenced Objects](javascript:call_link\('abenabap_asxml_references.htm'\))

Continue
[asJSON - Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\))
[asJSON - Mapping of Structures](javascript:call_link\('abenabap_asjson_abap_types_struc.htm'\))
[asJSON - Mapping of Internal Tables](javascript:call_link\('abenabap_asjson_abap_types_table.htm'\))
[asJSON - Mapping of Enumerated Types](javascript:call_link\('abenabap_asjson_abap_types_enum.htm'\))
[asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\))


### abenabap_asjson_abap_types_elem.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Elementary ABAP Types

The values of elementary ABAP types are represented in asJSON using the [JSON representations](javascript:call_link\('abenjson_oview.htm'\)) of character-like values and number values. Representations of Boolean values and zero are not used.

-   The values of all numeric types (i, p, decfloat16, decfloat34, f) are represented directly as JSON number values.

-   The values of all other types (c, string, n, d, t, x, xstring) are represented as character-like values in quotation marks.

The type-dependent format of a value corresponds to the [asXML representation](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) of elementary types and can be taken from the tables there. The serialization and deserialization behavior noted there applies.

Note

An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) with the value "all" can be used.

Executable Example

[asJSON for Elementary ABAP Types](javascript:call_link\('abenabap_json_asjson_elem_abexa.htm'\))


### abenabap_asjson_abap_types_struc.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Structures

In asJSON, an ABAP structure is represented as a [JSON object](javascript:call_link\('abenjson_oview.htm'\)) whose object components represent the structure components. The content of each object component corresponds to the canonical representation of the component value. The name of each object component is the name of the corresponding structure component. In serializations, the object components are represented in the order of the components in the structure. In deserializations of the aJSON representation of a structure, the order of the object components is not important and redundant object components are ignored. Components of the structure for which there are no object components remain unchanged.

Note

A structure that does not have an associated JSON object component in deserializations retains its previous value. A structure to which an empty object is assigned also remains unchanged, since this has the same effect on the structure components as a missing object component. To initialize the structure in these cases, the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) can be used with the value "all".

Executable Example

[asJSON for Structures](javascript:call_link\('abenabap_json_asjson_struc_abexa.htm'\))


### abenabap_asjson_abap_types_table.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Internal Tables

Internal tables are represented in asJSON as [JSON arrays](javascript:call_link\('abenjson_oview.htm'\)). The rows of the internal table are represented in their canonical representation as the components of the array. All table categories are allowed. Serializations do not pass any information about the table category to the JSON data. If the target field of a deserialization is a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), the rows are sorted accordingly.

Notes

-   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case, the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) with the value "all" can be used.

-   Unlike in the [asXML representation](javascript:call_link\('abenabap_xslt_asxml_table.htm'\)) of internal tables, asJSON does not require a name like item for the table rows.

Executable Example

[asJSON for Internal Tables](javascript:call_link\('abenabap_json_asjson_table_abexa.htm'\))


### abenabap_asjson_abap_types_enum.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Enumerated Types

The asJSON representation of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") corresponds to their [asXML representation](javascript:call_link\('abenabap_xslt_asxml_enum.htm'\)). That is, in asJSON the content of an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") is represented by the name (maximum 30 characters) of the [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") in uppercase letters, and this is represented as a character-like [elementary data object](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\)).

Example

Serialization of an internal table with enumerated values by JSON.

TYPES:
  BEGIN OF ENUM color STRUCTURE col,
    red, blue, green,
  END OF ENUM color STRUCTURE col.
DATA colors TYPE SORTED TABLE OF color
            WITH UNIQUE KEY table\_line.
DO.
  ASSIGN COMPONENT sy-index OF STRUCTURE col TO FIELD-SYMBOL(<fs>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  colors = VALUE #( BASE colors ( <fs> ) ).
ENDDO.
DATA(writer) = cl\_sxml\_string\_writer=>create(
     type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE colors = colors
                       RESULT XML writer.
cl\_demo\_output=>display\_json( writer->get\_output( ) ).

The output is:

{
"COLORS":
\[
  "RED",
  "BLUE",
  "GREEN"
\]
}


### abenabap_asxml_references.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Reference Variables and Objects

A reference mechanism is used (like in [asXML](javascript:call_link\('abenabap_xslt_asxml_references.htm'\))) for the asJSON display of anonymous data objects and class instances (objects), which are addressed using references in reference variables. As [JSON](javascript:call_link\('abenjson_oview.htm'\)) does not suggest any syntax for references, an SAP-specific reference mechanism based on asXML is used.

-   Named reference variables are displayed as object components, whose content is usually a key for the referenced objects.

-   The referenced objects are stored as object components in the object [%heap](javascript:call_link\('abenabap_asjson_general.htm'\)). This name corresponds to the key.

In addition to the value, the dynamic type of the reference variables is specified in the object components of %heap when serialization takes place. This ensures that deserialization is unambiguous.

-   [Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))

-   [Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))

-   [Class Instances](javascript:call_link\('abenabap_asjson_class_instances.htm'\))

Note

-   The asJSON representation of reference variables and referenced objects is only of relevance for XSL transformations and the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID. Simple transformations cannot currently be used to transform reference variables.

-   For data references, the value "embedded" can be specified for the transformation option [data\_refs](javascript:call_link\('abapcall_transformation_options.htm'\)) to define embedded storage in serializations instead of storage in the %heap object component.

Example

For information about the differences between serializing to %heap and embedded storage, see the executable example [Serializations to Heap or Embedded](javascript:call_link\('abenserialize_ref_heap_embed_abexa.htm'\)).

Continue
[asJSON - Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))
[asJSON - Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))
[asJSON - Instances of Classes](javascript:call_link\('abenabap_asjson_class_instances.htm'\))


### abenabap_asjson_reference_var.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) →  [asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\)) → 

asJSON - Named Reference Variables

Like a regular data object, a named reference variable is represented as an object component that has special content:

"bni":{ "%ref":"#key" }

The content of the object component of a named reference variable is an object with precisely one object component, called %ref. The content of the object component %ref is a character-like value "#key", where key is the unique key of an object component in the object %heap. The object of an initial reference is empty. The key key of the ABAP runtime environment is set in serializations; in deserializations, any key can be used.

Otherwise the same rules apply to serializations and deserializations of named reference variables as to [asXML](javascript:call_link\('abenasxml_reference_variable.htm'\)) and the same special cases need to be noted.

Executable Example

[Serializing Data References](javascript:call_link\('abenserialize_dref_abexa.htm'\))


### abenabap_asjson_anonym_do.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) →  [asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\)) → 

asJSON - Anonymous Data Objects

An anonymous data object, that is a data object created using CREATE DATA or the instance operator NEW, is displayed as an object component of %heap in the form:

"key":{ "%type":"...",
        "%maxLength":...,
        "%totalDigits":...,
        "%fractionDigits":...,
        "%val":...
      }

The name key is the key used to reference the anonymous data object. The value of key is itself an object whose object components represent the type and the value of the anonymous data object.

The values of the anonymous data object is specified as content of the component %val in its canonical representation. If the anonymous data object itself is a non-initial reference variable, it references another component of %heap.

The remaining components specify the data type of the anonymous data object.

-   The same rules apply to the content of %type as to the element name type in [asXML](javascript:call_link\('abenasxml_anonymous_data_object.htm'\)).

-   The components %maxLength, %totalDigits, and %fractionDigits specify the technical attributes of the type (if required). The same rules apply to their content as to the corresponding attributes in [asXML](javascript:call_link\('abenasxml_anonymous_data_object.htm'\)).

Executable Example

[asJSON for Anonymous Data Objects](javascript:call_link\('abenabap_json_asjson_dref_abexa.htm'\)) .


### abenabap_asjson_class_instances.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) →  [asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\)) → 

asJSON - Instances of Classes

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


### abenabap_asxml_references.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Reference Variables and Objects

A reference mechanism is used (like in [asXML](javascript:call_link\('abenabap_xslt_asxml_references.htm'\))) for the asJSON display of anonymous data objects and class instances (objects), which are addressed using references in reference variables. As [JSON](javascript:call_link\('abenjson_oview.htm'\)) does not suggest any syntax for references, an SAP-specific reference mechanism based on asXML is used.

-   Named reference variables are displayed as object components, whose content is usually a key for the referenced objects.

-   The referenced objects are stored as object components in the object [%heap](javascript:call_link\('abenabap_asjson_general.htm'\)). This name corresponds to the key.

In addition to the value, the dynamic type of the reference variables is specified in the object components of %heap when serialization takes place. This ensures that deserialization is unambiguous.

-   [Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))

-   [Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))

-   [Class Instances](javascript:call_link\('abenabap_asjson_class_instances.htm'\))

Note

-   The asJSON representation of reference variables and referenced objects is only of relevance for XSL transformations and the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID. Simple transformations cannot currently be used to transform reference variables.

-   For data references, the value "embedded" can be specified for the transformation option [data\_refs](javascript:call_link\('abapcall_transformation_options.htm'\)) to define embedded storage in serializations instead of storage in the %heap object component.

Example

For information about the differences between serializing to %heap and embedded storage, see the executable example [Serializations to Heap or Embedded](javascript:call_link\('abenserialize_ref_heap_embed_abexa.htm'\)).

Continue
[asJSON - Named Reference Variables](javascript:call_link\('abenabap_asjson_reference_var.htm'\))
[asJSON - Anonymous Data Objects](javascript:call_link\('abenabap_asjson_anonym_do.htm'\))
[asJSON - Instances of Classes](javascript:call_link\('abenabap_asjson_class_instances.htm'\))


### abenabap_asjson_abap_types.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

asJSON - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asJON as the content of the following object components:

["bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
["bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
[...](javascript:call_link\('abenabap_asjson_general.htm'\))

An additional object is implemented for the objects referenced by reference variables:

["%heap":...](javascript:call_link\('abenabap_asjson_general.htm'\))

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation; deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\))

-   [Mapping of Structures](javascript:call_link\('abenabap_asjson_abap_types_struc.htm'\))

-   [Mapping of Internal Tables](javascript:call_link\('abenabap_asjson_abap_types_table.htm'\))

-   [Mapping of Enumerated Types](javascript:call_link\('abenabap_asjson_abap_types_enum.htm'\))

-   [Mapping of Reference Variables and Referenced Objects](javascript:call_link\('abenabap_asxml_references.htm'\))

Continue
[asJSON - Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\))
[asJSON - Mapping of Structures](javascript:call_link\('abenabap_asjson_abap_types_struc.htm'\))
[asJSON - Mapping of Internal Tables](javascript:call_link\('abenabap_asjson_abap_types_table.htm'\))
[asJSON - Mapping of Enumerated Types](javascript:call_link\('abenabap_asjson_abap_types_enum.htm'\))
[asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\))


### abenabap_asjson_schema.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

asJSON - Mapping Additional XML Schema Data Types

In [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry"), apart from the XML schema data types needed to map elementary ABAP types, additional XML schema data types are supported by special [domains](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) called XSD....

asJSON, which is based on asXML, also supports these domains (with the exception of XSDQNAME). In serializations and deserializations from or to ABAP data objects typed with these domains, the same applies as to [asXML](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)). Here, values from the domain XSDBOOLEAN are represented as real [Boolean JSON values](javascript:call_link\('abenjson_oview.htm'\)) in asJSON.

Note

By specifying [format](javascript:call_link\('abenst_option_format.htm'\)) in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), formats of this type can also be applied to ABAP data objects that are not typed with a domain of this type. In JSON, furthermore, the option attribute also makes it possible to convert ABAP data fields and time stamps to UNIX time stamps (or ticks) in the JSON format for OData.

Executable Example

[asJSON for Additional XML Schema Data Types](javascript:call_link\('abenabap_json_asjson_xsd_abexa.htm'\))


### abenabap_asjson.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) → 

asJSON - Canonical JSON Representation

The canonical XML representation asXML is the format of [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") data that is produced by a serialization of ABAP data using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID, or that is required for a deserialization using the identity transformation.

asJSON is based closely on [asXML](javascript:call_link\('abenabap_xslt_asxml.htm'\)). From a conceptional perspective, a asJSON representation is produced by a restructuring of the asXML representation of this ABAP data to a [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") representation, while keeping all value content. This means the same basic rules apply as for asXML. In particular, XML schema data types for the mapping of ABAP data types are also used in asJSON.

Description of the asJSON format:

-   [General asJSON Format](javascript:call_link\('abenabap_asjson_general.htm'\))

-   [Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\))

Notes

-   asJSON only occurs in the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID. In particular, asJSON is not generally needed for self-written transformations for JSON; [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") is used directly instead.

-   A JSON-XML representation of asJSON is known as [asJSON-XML](javascript:call_link\('abenasjson_xml_glosry.htm'\) "Glossary Entry"). asJSON-XML is not used as an intermediate format in transformations, but the asJSON-XML associated with a asJSON representation can be created to analyze it and compare it with asXML.

Continue
[asJSON - General Format](javascript:call_link\('abenabap_asjson_general.htm'\))
[asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\))
[asJSON - Mapping Additional XML Schema Data Types](javascript:call_link\('abenabap_asjson_schema.htm'\))
