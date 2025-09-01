  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) → 

iXML Library

-   [API of the iXML Library](#@@ITOC@@ABENABAP_IXML_LIB_1)

-   [Access to iXML Library.](#@@ITOC@@ABENABAP_IXML_LIB_2)

-   [Services in the iXML Library](#@@ITOC@@ABENABAP_IXML_LIB_3)

API of the iXML Library

iXML Library provides an API for handling XML documents in [DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") format. This API enables

-   XML data to be parsed to DOM format,

-   reads and writes to be performed on XML documents in DOM format (including creating new documents),

-   XML documents in DOM format to be rendered to XML data.

In ABAP programs, the API is implemented using [interfaces](javascript:call_link\('abenabap_ixml_lib_object_types.htm'\)) from the class library with the naming convention IF\_IXML\_.... The access class CL\_IXML contains factory methods for creating objects such as streams, parsers, documents, and renderers. These objects are then accessed using interface reference variables. The classes and interfaces are documented in Class Builder.

Notes

-   The [classes and interfaces](javascript:call_link\('abenabap_ixml_lib_object_types.htm'\)) in iXML Library in package SIXML wrap classes and interfaces implemented in C++, delivered as part of the ABAP kernel.

-   Standalone versions for C++ and C are also delivered, with the C version being a wrapper of the library implemented in C++.

-   iXML Library supports the Unicode character format [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry"). Characters from the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") are not supported and can be rejected as invalid.

-   DOM in iXML Library and its associated methods are also used internally in calls of [XSL transformations](javascript:call_link\('abenxsl_transformation_1_glosry.htm'\) "Glossary Entry") with the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Access to iXML Library.

Precisely one factory object of the [access class](javascript:call_link\('abenabap_ixml_lib_cl_ixml.htm'\)) CL\_IXML is required for accessing iXML Library in an ABAP program. This object is created as follows:

DATA(ixml) = cl\_ixml=>create( ).

The static type of the reference variable ixml is then the interface IF\_IXML, which contains all factory methods required to create further objects, such as streams, XML documents, parsers, or renderers. This factory object is a singleton and can only be instantiated once in one [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Services in the iXML Library

The most important services offered by the [classes and interfaces](javascript:call_link\('abenabap_ixml_lib_object_types.htm'\)) in iXML Library are as follows:

-   [XML parser](javascript:call_link\('abenabap_ixml_lib_parse.htm'\))

The XML parser analyzes the syntax of an XML file provided in an [input stream](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) to check whether it is correct and creates an [XML document](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) in a [DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") representation from this file. The document can then be accessed using interfaces. The DOM can be created as follows:

-   [Complete Parsing to DOM](javascript:call_link\('abenabap_ixml_lib_parse_dom.htm'\))
    The parser creates the XML document in a [DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") representation for the complete XML data in a single action and passes it to the memory.

-   [Sequential Parsing](javascript:call_link\('abenabap_ixml_lib_parse_event.htm'\))
    The parser processes the input stream in sequential actions, where each sequence is determined by events that can be accessed using the interface IF\_IXML\_EVENT. The application can edit each sequence while the parser is running. It is possible to configure whether a full XML documented is saved to [DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") representation.

-   [Parsing to Data Objects](javascript:call_link\('abenabap_ixml_lib_parse_token.htm'\))
    When parsing to data objects, the tokens of the parsed XML data is written directly to ABAP data objects (structures, internal tables). An XML document in DOM representation can also be saved.

-   [Access to DOM](javascript:call_link\('abenabap_ixml_lib_dom_access.htm'\))

An XML document represented as [DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") is in a standardized tree representation. For each logical unit of the XML document, there is a node object of an associated class that implements specialized interfaces. An ABAP program can use the interfaces to perform reads and writes to the [XML](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) document. The classes of the node objects are not usually used directly in the program.

-   [XML renderer](javascript:call_link\('abenabap_ixml_lib_render.htm'\))

The XML renderer creates XML data from an XML document saved as DOM. This document is created by parsing (both with and without follow-up modifications) or created as a complete new document using the methods of the DOM interface. The renderer then passes the data to an [output stream](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)).

Notes

-   One benefit of DOM is simple access to the individual parts of an XML document. It also has the drawback, however, of using more memory, up to ten times the actual size of the document. Note that the document itself can already use more memory for its markup than for the actual data. This memory use can be restricted by preventing a complete DOM from being created by sequential parsing or by parsing to data objects.

-   The DOM in iXML Library also includes DTDs (Document Type Definitions).

-   If XML data needs to be parsed and rendered only and no XML documents in DOM representation and no DTDs are needed, [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) provides an alternative with better performance than iXML Library.

-   iXML only supports the XML 1.0 format, where, XML data is represented in a particular character format using a character string. [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) supports more [formats](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)).

-   When data is rendered as character-like XML data, this data is prefixed by the byte order mark (BOM) that is required by the XML standard.

-   For examples, see the corresponding executable [programs in the example library](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) and the package SIXML\_TEST.

Continue
[iXML Library - Streams and Documents](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\))
[iXML Library - Parsing](javascript:call_link\('abenabap_ixml_lib_parse.htm'\))
[iXML Library - Access to DOM](javascript:call_link\('abenabap_ixml_lib_dom_access.htm'\))
[iXML Library - Render](javascript:call_link\('abenabap_ixml_lib_render.htm'\))
[iXML Library - Classes and Interfaces](javascript:call_link\('abenabap_ixml_lib_object_types.htm'\))
[iXML Library, Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\))