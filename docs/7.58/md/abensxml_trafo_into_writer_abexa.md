  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Transformation%20to%20XML%20Writer%2C%20ABENSXML_TRAFO_INTO_WRITER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

sXML - Transformation to XML Writer

Transformation of ABAP data to an XML writer.

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_trafo\_into\_writer DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_trafo\_into\_writer IMPLEMENTATION.
  METHOD main.
    FINAL(user\_date) = cl\_demo\_date\_time=>get\_user\_date( ).
    FINAL(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    writer->open\_element( name = 'document' ).
    writer->open\_element( name = 'head' ).
    writer->open\_element( name = 'author' ).
    writer->write\_value( CONV string( sy-uname ) ).
    writer->close\_element( ).
    writer->open\_element( name = 'date' ).
    writer->write\_value( CONV string( user\_date ) ).
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
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

An XML writer is filled with XML data that is split into the parts head and body. The data content of the element body is taken directly from an internal table using the [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID.