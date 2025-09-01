  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sxml_lib.htm) →  [sXML Library - Rendering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sxml_lib_render.htm) → 

sXML Library - Token-Based Rendering

In token-based rendering, each node is written to the XML data by a method. Each node type has its own method. If a node can have specific values, the method in question has appropriate input parameters. The methods must be called in such a way that valid XML is created. XML attributes can be added to an element directly after it has been opened.

Procedure (Principles)

An XML writer is created using the factory method CREATE of the class in question. The format and character format can also be defined, for example:

DATA(writer) = cl\_sxml\_string\_writer=>create( type =
                                              encoding = ... ).

Here, the static type of the reference variables is the type of the class itself, since more class-specific methods exist than in readers. The interface IF\_SXML\_WRITER can still be used to access a writer by using up casts:

DATA(writer) = CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ... ) ).

Once the writer is created, nodes can be written. The order of the nodes is important, for example:

writer->open\_element( ... ).
writer->write\_attribute( ... ).
writer->write\_value( ... ).
writer->close\_element( ).

Once a complete valid record of XML data has been written, the data can be read (if the correct writers are being used), for example:

DATA(xml) = CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).

Since the method is a class-specific method, a down cast is required if an interface reference variable is being used.

Executable Example

[Token-Based Rendering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensxml_rendering_abexa.htm)

Methods for Token-Based Rendering

The following methods are declared in the interface IF\_SXML\_WRITER for token-based rendering:

-   OPEN\_ELEMENT - Writes an opened element. The name, a namespace prefix, and a namespace URI can be passed.

-   WRITE\_NAMESPACE\_DECLARATION - Writes a namespace declaration to an opened element.

-   WRITE\_ATTRIBUTE - Writes an XML attribute to an opened element. A name, namespace prefix, a namespace URI, and a character-like value can be passed.

-   WRITE\_ATTRIBUTE\_RAW - Writes an XML attribute with raw data to an opened element. A name, namespace prefix, a namespace URI, and a byte-like value can be passed.

-   WRITE\_VALUE - Writes a character-like value behind an opened element.

-   WRITE\_VALUE\_RAW - Writes a byte-like value behind an opened element.

-   CLOSE\_ELEMENT - Writes a closed element.

If text-like data is written, this data is converted automatically from the current system code page to the representation of the XML, which is determined by the chosen [format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sxml_lib_formats.htm). If byte-like raw data is written, this data is also converted in accordance with the chosen [format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sxml_lib_formats.htm), for example to the format [Base64](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbase64_glosry.htm "Glossary Entry") for XML 1.0 or to the binary part of the XOP package for [XOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenxop_glosry.htm "Glossary Entry").

Executable Example

[Namespace Declarations in Token-Based Rendering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensxml_renderering_ns_abexa.htm)