---
title: "API of the iXML Library"
description: |
  iXML Library provides an API for handling XML documents in DOM(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendom_glosry.htm 'Glossary Entry') format. This API enables -   XML data to be parsed to DOM format, -   reads and writes to be performed on XML documents in DOM format, incl
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib.htm"
abapFile: "abenabap_ixml_lib.htm"
keywords: ["do", "while", "if", "try", "method", "class", "data", "types", "internal-table", "abenabap", "ixml", "lib"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20Library%2C%20ABENABAP_IXML_LIB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML Library

-   [API of the iXML Library](#abenabap-ixml-lib-1-------access-to-ixml-library----@ITOC@@ABENABAP_IXML_LIB_2)
-   [Services in the iXML Library](#@@ITOC@@ABENABAP_IXML_LIB_3)

API of the iXML Library   

iXML Library provides an API for handling XML documents in [DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendom_glosry.htm "Glossary Entry") format. This API enables

-   XML data to be parsed to DOM format,
-   reads and writes to be performed on XML documents in DOM format, including creating new documents,
-   XML documents in DOM format to be rendered to XML data.

In ABAP programs, the API is implemented using [interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_object_types.htm) from the class library with the naming convention IF\_IXML\_.... The access class CL\_IXML contains factory methods for creating basic objects such as streams, parsers, documents, and renderers. These objects are then accessed using interface reference variables. The classes and interfaces are documented in the Class Builder.

Hints

-   The [classes and interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_object_types.htm) in iXML Library from the package SIXML wrap classes and interfaces implemented in C++ that are delivered as part of the ABAP kernel.
-   Standalone versions for C++ and C are also delivered, with the C version being a wrapper of the library implemented in C++.
-   iXML Library supports the Unicode character representation [UCS-2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenucs2_glosry.htm "Glossary Entry"). Characters from the [surrogate area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensurrogate_area_glosry.htm "Glossary Entry") are not supported and can be rejected as invalid.
-   The DOM of the iXML Library and its associated methods are also used internally in calls of [XSL transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxsl_transformation_glosry.htm "Glossary Entry") with the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation.htm).

Access to iXML Library.   

Precisely one factory object of the [access class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_cl_ixml.htm) CL\_IXML is required for accessing iXML Library in an ABAP program. This object is created as follows:

DATA(ixml) = cl\_ixml=>create( ).

The static type of the reference variable ixml is then the interface IF\_IXML, which contains all factory methods required to create further objects, such as streams, XML documents, parsers, or renderers. This factory object is a singleton and can only be instantiated once in an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Services in the iXML Library   

The most important services offered by the [classes and interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_object_types.htm) in iXML Library are as follows:

-   [XML parser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse.htm)
    
    The XML parser analyzes the syntax of an XML file provided in an [input stream](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm) to check whether it is correct and creates an [XML document](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm) in a [DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendom_glosry.htm "Glossary Entry") representation from this file. This document can then be accessed using interfaces. The DOM can be created as follows:
    
    -   [Complete Parsing to DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_dom.htm)
        
        The parser creates the XML document in a [DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendom_glosry.htm "Glossary Entry") representation for the complete XML data in a single action and places it in the memory.
        
    -   [Sequential Parsing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_event.htm)
        
        The parser processes the input stream in sequential runs, where each sequence is determined by events that can be accessed using the interface IF\_IXML\_EVENT. The application can already process each sequence while the parser is running. It is possible to configure whether a complete XML documented is saved to [DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendom_glosry.htm "Glossary Entry") representation.
        
    -   [Parsing to Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_token.htm)
        
        When parsing to data objects, the tokens of the parsed XML data is written directly to ABAP data objects (structures, internal tables). An XML document in DOM representation can also be saved.
        
-   [Access to DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_dom_access.htm)
    
    An XML document represented as a [DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendom_glosry.htm "Glossary Entry") is in a standardized tree representation. For each logical unit of the XML document, there is a node object of an associated class that implements specialized interfaces. An ABAP program can use the interfaces to perform reads and writes to the [XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm) document. The classes of the node objects are not usually used directly in the program.
    
-   [XML renderer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_render.htm)
    
    The XML renderer creates XML data from an XML document saved as DOM. This document is created by parsing with and without subsequent modifications, or created as a complete new document using the methods of the DOM interface. The renderer then passes the data to an [output stream](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm).
    

Hints

-   One benefit of DOM is very simple access to the individual parts of an XML document. It also has the drawback, however, of increased memory consumption, which can be up to ten times the actual size of the document. It should be noted that the document itself can already use more memory for its markup than for the actual data. This memory consumption can be restricted by preventing a complete DOM from being created by sequential parsing or by parsing to data objects.
-   The DOM in iXML Library also includes DTDs (Document Type Definitions).
-   If XML data needs to be parsed and rendered only and no XML documents in DOM representation and no DTDs are needed, [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) provides an alternative with better performance than iXML Library.
-   iXML only supports the XML 1.0 format, where XML data is represented by a particular character format using a character string. [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) supports more [formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_formats.htm).
-   When data is rendered as character-like XML data, this data is prefixed by the byte order mark (BOM) that is required by the XML standard.
-   For examples, see the corresponding executable [programs in the example library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_abexas.htm) and the package SIXML\_TEST.

Continue
[iXML - Streams and Documents](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm)
[iXML - Parsing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse.htm)
[iXML - Access to DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_dom_access.htm)
[iXML - Rendering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_render.htm)
[iXML - Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_object_types.htm)
[iXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_abexas.htm)