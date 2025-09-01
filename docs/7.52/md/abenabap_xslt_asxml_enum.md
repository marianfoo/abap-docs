  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Mapping of ABAP Data Types](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) → 

asXML - Mapping of Enumerated Types

The asXML representation of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") is used in XSL transformations and in Simple Transformations. In both cases, the elementary values with enumerated types or the elementary components of complex structures are converted in accordance with this mapping.

-   When an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") is serialized, it is [converted](javascript:call_link\('abenconversion_enumerated.htm'\)) to string and the result is represented in the corresponding [asXML format](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)). The XML representation is the name (maximum 30 characters) of the corresponding [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") or the component of the [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry").

-   When the [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") is deserialized, the XML representation must correspond to the name of an [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") of the enumerated type in uppercase letters. The enumerated variable is then assigned the enumerated value in the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"). If the XML representation does not correspond to a name, this results in the exception CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE, which is usually wrapped in CX\_TRANSFORMATION\_ERROR.

Example

The example shows the serialization of an enumerated variable planet to XML. Then, the name of the value VENUS is replaced by JUPITER and the result is deserialized to planet. planet then contains the value 4. A deserialization of the XML value earth, on the other hand, fails, because the name has to be specified in uppercase letters.

TYPES:
  BEGIN OF ENUM planet,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  END OF ENUM planet.
DATA planet TYPE planet VALUE venus.
DATA(out) = cl\_demo\_output=>new( ).
DATA(xml) = \`\`.
CALL TRANSFORMATION id SOURCE planet = planet
                       RESULT XML xml.
out->write\_xml( xml ).
REPLACE \`VENUS\` IN xml WITH \`JUPITER\` RESPECTING CASE.
TRY.
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT planet = planet.
    out->write( planet ).
  CATCH cx\_transformation\_error INTO DATA(exc).
    out->write( exc->previous->get\_text( ) ).
ENDTRY.
REPLACE \`JUPITER\` IN xml WITH \`earth\` RESPECTING CASE.
TRY.
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT planet = planet.
    out->write( planet ).
  CATCH cx\_transformation\_error INTO exc.
    out->write( exc->previous->get\_text( ) ).
ENDTRY.
out->display( ).