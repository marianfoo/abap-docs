  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Access to XML Using Class Libraries, ABENXML_ACCESS_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Access to XML Using Class Libraries

This example demonstrates parsing and rendering using an example class.

Source Code   

REPORT demo\_xml\_access.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    SELECT FROM scarr
           FIELDS \*
           INTO TABLE @FINAL(itab).
    CALL TRANSFORMATION id SOURCE itab = itab
                        RESULT XML FINAL(xml).
    out->next\_section( 'Original XML' )->write\_xml( xml ).
    TRY.
        FINAL(nodes) = cl\_demo\_xml\_access=>parse\_xml( xml ).
        out->next\_section( 'Rendered XML' )->write\_xml(
          cl\_demo\_xml\_access=>render\_xml( nodes ) ).
      CATCH cx\_demo\_xml\_access.
         out->write( 'Exception in parsing or rendering' ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example class CL\_DEMO\_XML\_ACCESS wraps methods of the [sXML Library](javascript:call_link\('abensxml_library_glosry.htm'\) "Glossary Entry").

-   Method PARSE\_XML allows the parsing of the relevant data of an XML file from a byte string into an internal table whose structure is defined in that class.
-   Method RENDER\_XML allows the rendering of the data from such a node table into an XML file in a byte string.

As an example, an XML file is accessed that results from a transformation of an internal table into [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") format by using the predefined identity transformation [ID](javascript:call_link\('abenabap_xslt_id.htm'\)).