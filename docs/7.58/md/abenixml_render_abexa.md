  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Rendering%2C%20ABENIXML_RENDER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Rendering

Renders XML documents to DOM representation.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_render DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_render IMPLEMENTATION.
  METHOD main.
    DATA source\_tab TYPE TABLE OF i.
    source\_tab = VALUE #( FOR j = 1 UNTIL j > 10
                        ( ipow( base = 2 exp = j ) ) ).
    FINAL(ixml) = cl\_ixml=>create( ).
    FINAL(document) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE text = \`Powers of 2\`
                                  numbers = source\_tab
                           RESULT XML document.
    DO 7 TIMES.
      document->find\_from\_name\_ns( name = 'item' )->remove\_node( ).
    ENDDO.
    out->begin\_section(
      \`Renderer for complete document\` ).
    DATA xml\_string TYPE string.
    ixml->create\_renderer( document = document
                           ostream  = ixml->create\_stream\_factory(
                                        )->create\_ostream\_cstring(
                                             string = xml\_string )
                                               )->render( ).
    out->write\_xml( xml\_string )->line( ).
    out->next\_section(
       \`Method render for complete document\` ).
    CLEAR xml\_string.
    document->render( ostream  = ixml->create\_stream\_factory(
                                   )->create\_ostream\_cstring(
                                        string = xml\_string ) ).
    out->write\_xml( xml\_string )->line( ).
    out->next\_section(
      \`Method render for subnode recursive\` ).
    CLEAR xml\_string.
    document->find\_from\_name\_ns( name = 'NUMBERS'
    )->render( ostream  = ixml->create\_stream\_factory(
                            )->create\_ostream\_cstring(
                                 string = xml\_string )
               recursive = abap\_true ).
    out->write( xml\_string )->line( ).
    out->next\_section(
       \`Method render of subnode not recursive\` ).
    CLEAR xml\_string.
    document->find\_from\_name\_ns( name = 'NUMBERS'
    )->render( ostream  = ixml->create\_stream\_factory(
                            )->create\_ostream\_cstring(
                                 string = xml\_string )
               recursive = abap\_false ).
    out->write( xml\_string ).
  ENDMETHOD.
ENDCLASS.

Description   

XML data is created in asXML format using the [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") and written directly to an XML document in DOM representation. The method REMOVE\_NODE is used to remove some nodes and the content of the modified document is rendered in various ways:

-   A renderer is created for the entire document and its method RENDER is executed, producing complete XML data.
-   The method RENDER of the document object is executed, which again renders the entire document and produces the same result.
-   The method RENDER of the element NUMBERS is executed recursively, which writes only the element and its subelements to the output stream.
-   The method RENDER of the element NUMBERS is executed non-recursively, which writes only the element without its subelements to the output stream.