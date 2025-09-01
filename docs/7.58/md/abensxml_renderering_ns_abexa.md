  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML - Examples](javascript:call_link\('abenabap_sxml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Namespace%20Declarations%20in%20Token-Based%20Rendering%2C%20ABENSXML_RENDERERING_NS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

sXML - Namespace Declarations in Token-Based Rendering

Namespace declarations in [token-based rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_token\_wrtr\_nsuri DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_token\_wrtr\_nsuri IMPLEMENTATION.
  METHOD main.
    FINAL(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    FINAL(nsuri1) = \`http://www.sap.com/abapdemos\`.
    FINAL(nsuri2) = \`http://www.sap.com/abapdemos/sub\`.
    writer->open\_element( name = 'texts'
                          nsuri = nsuri1
                          prefix = 'demo' ).
    writer->write\_namespace\_declaration( nsuri = nsuri2
                          prefix = 'sub' ).
    writer->open\_element( name = 'text'
                          nsuri = nsuri2 ).
    writer->write\_value( 'aaaa' ).
    writer->close\_element( ).
    writer->open\_element( name = 'text'
                          nsuri = nsuri2 ).
    writer->write\_value( 'bbbb' ).
    writer->close\_element( ).
    writer->close\_element( ).
    FINAL(xml) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

The example shows how the parameters NSURI and PREFIX of the token-based rendering methods of the interface IF\_SXML\_WRITER can be created.