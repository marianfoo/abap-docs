  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML - Examples](javascript:call_link\('abenabap_sxml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sXML - Transformation to XML Writer, ABENSXML_TRAFO_INTO_WRITER_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sXML - Transformation to XML Writer

Transformation of ABAP data to an XML writer.

Source Code   

REPORT demo\_sxml\_trafo\_into\_writer.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    FINAL(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    writer->open\_element( name = 'document' ).
    writer->open\_element( name = 'head' ).
    writer->open\_element( name = 'author' ).
    writer->write\_value( conv string( sy-uname ) ).
    writer->close\_element( ).
    writer->open\_element( name = 'date' ).
    writer->write\_value( conv string( sy-datlo ) ).
    writer->close\_element( ).
    writer->close\_element( ).
    writer->open\_element( name = 'body' ).
    DO 10 TIMES.
      CALL TRANSFORMATION id SOURCE number  = sy-index
                             RESULT XML writer.
    ENDDO.
    writer->close\_element( ).
    writer->close\_element( ).
    FINAL(xml) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    cl\_demo\_output=>display\_xml( xml ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description   

An XML writer is filled with XML data that is split into the parts head and body. The data content of the element body is taken directly from an internal table using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID.