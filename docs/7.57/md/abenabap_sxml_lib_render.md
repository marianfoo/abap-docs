  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sXML - Rendering, ABENABAP_SXML_LIB_RENDER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

sXML - Rendering

To create XML data using sXML Library, the content is passed to an XML writer. A writer of this type is validating, which means that invalid actions, such as attempts to add an attribute to a value node, raise an [exception](javascript:call_link\('abenabap_sxml_lib_exceptions.htm'\)). An XML writer creates the XML data as a hierarchical tree-like structure where each token is represented by a node that can be assigned uniquely to a parent node (see [W3C Information Set](http://www.w3.org/TR/xml-infoset/)). An XML writer can be used to write the data in exactly the same way is read by an [XML reader](javascript:call_link\('abenabap_sxml_lib_parse.htm'\)).

The [classes and interfaces](javascript:call_link\('abenabap_sxml_lib_writer.htm'\)) of the sXML Library that are available for rendering XML data are organized so that there are separate XML writer classes for different requirements. These classes inherit from the abstract superclass CL\_SXML\_WRITER. The abstract superclass contains implementations of functions required by all writers and includes the interface IF\_SXML\_WRITER, which contains the components shared by all writers. This interface enables all writers to be accessed in the same way. If special components need to be accessed that are not declared in the interface, a downcast must be used on the corresponding class.

The specialized writer classes are:

-   CL\_SXML\_STRING\_WRITER
    
    Writers in this class render XML data to a byte string.
    
-   CL\_SXML\_TABLE\_WRITER
    
    Writers in this class render XML data to an internal table with a flat byte-like line type.
    
-   CL\_SXML\_DATASET\_WRITER
    
    Writers in this class render XML data to a file on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance.
    
-   CL\_SXML\_HTTP\_WRITER
    
    Writers in this class render XML data to an [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") HTTP client.
    
-   CL\_SXML\_XOP\_WRITER
    
    Writers of this class render the data to [XOP](javascript:call_link\('abenxop_glosry.htm'\) "Glossary Entry") format.
    

Each of these classes has a specific factory method CREATE for creating appropriate writers. Apart from an XOP writer, the required [format](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)) and the required character format of the data can be passed to each writer. The standard format is XML 1.0 format in the UTF-8 character format. The XOP writer supports the XOP format only. Instructions on standardization and handling empty elements can be passed to the factory method if the format is suitable.

The methods of the interface IF\_SXML\_WRITER enable serial rendering of XML data. There are two basic ways to do this:

-   [Token-based rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\))
-   [Object-oriented rendering](javascript:call_link\('abenabap_sxml_lib_render_oo.htm'\))

A writer cannot be used more than once for the same XML data or for other data. The write position of a writer is updated during rendering using its methods. The actions allowed by a writer depend on the current write position. For writers that do not write to external repositories, the written XML can be read using the method GET\_OUTPUT.

Hints

-   In a suitable write position, an XML writer from the sXML Library can be used as an XML target of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). The output of the transformation is inserted into the output of the writer and its write position moved accordingly.
-   The writers in the sXML Library do not currently support XML comments, CDATA sections, or processor instructions.
-   If rendering produces content of elements or attributes, the characters <, \>, &, ", and ' are transformed automatically into the associated [XML notation](javascript:call_link\('abenxml_oview.htm'\)).

Executable Example

[Transformation to XML Writers](javascript:call_link\('abensxml_trafo_into_writer_abexa.htm'\))

Continue
[sXML - Token-Based Rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\))
[sXML - Object-Oriented Rendering](javascript:call_link\('abenabap_sxml_lib_render_oo.htm'\))