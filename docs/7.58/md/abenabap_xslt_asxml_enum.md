---
title: "Example"
description: |
  The example shows the serialization of an enumerated variable planet to XML. Then, the name of the value VENUS is replaced by JUPITER and the result is deserialized to planet. planet then contains the value 4. A deserialization of the XML value earth, on the other hand, fails, because the name must
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_enum.htm"
abapFile: "abenabap_xslt_asxml_enum.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "abenabap", "xslt", "asxml", "enum"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_named.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20Enumerated%20Types%2C%20ABENABAP_XSLT_ASXML_ENUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

asXML - Mapping of Enumerated Types

The asXML representation of [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry") is used in XSL transformations and in Simple Transformations. In both cases, the elementary values with enumerated types or the corresponding components of complex structures are converted in accordance with this mapping.

-   When an [enumerated object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is serialized, it is [converted](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_enumerated.htm) to string and the result is represented in the corresponding [asXML format](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_elementary.htm). The XML representation is the name of the associated [enumerated constant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") or the component of the [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") with a maximum of 30 characters.
-   When the [enumerated variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") is deserialized, the XML representation must correspond to the name of an [enumerated value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of the enumerated type in uppercase letters. The enumerated variable is then assigned the enumerated value in the [base type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbase_type_glosry.htm "Glossary Entry"). If the XML representation does not correspond to a name, this results in the exception CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE, which is usually wrapped in CX\_TRANSFORMATION\_ERROR.

Example

The example shows the serialization of an enumerated variable planet to XML. Then, the name of the value VENUS is replaced by JUPITER and the result is deserialized to planet. planet then contains the value 4. A deserialization of the XML value earth, on the other hand, fails, because the name must be specified in uppercase letters.

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
FINAL(out) = cl\_demo\_output=>new( ).
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