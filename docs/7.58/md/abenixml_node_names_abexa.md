  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Access%20Using%20Names%2C%20ABENIXML_NODE_NAMES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Access Using Names

Accesses elements of a DOM using the name.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_access\_names DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_access\_names IMPLEMENTATION.
  METHOD main.
    DATA source\_tab TYPE TABLE OF i.
    source\_tab = VALUE #( FOR j = 1 UNTIL j > 10
                        ( ipow( base = 2 exp = j ) ) ).
    FINAL(ixml) = cl\_ixml=>create( ).
    FINAL(document) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE text = \`Powers of 2\`
                                  numbers = source\_tab
                           RESULT XML document.
    FINAL(element)  = document->find\_from\_name\_ns( name = 'TEXT' ).
    IF element IS NOT INITIAL.
      out->write\_data( element->get\_value( ) ).
    ENDIF.
    FINAL(elements) =
      document->get\_elements\_by\_tag\_name( name = 'item' ).
    DATA target\_tab LIKE source\_tab.
    DO elements->get\_length( ) TIMES.
      FINAL(node) = elements->get\_item( sy-index - 1 ).
      APPEND node->get\_value( ) TO target\_tab.
    ENDDO.
    out->write( target\_tab ).
  ENDMETHOD.
ENDCLASS.

Description   

XML data is created in asXML format using the [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") and written directly to an XML document in DOM representation.

In the XML document, first the element TEXT is searched for and then its value displayed. All elements item are then collected and their values appended to an internal table in a loop and then output.