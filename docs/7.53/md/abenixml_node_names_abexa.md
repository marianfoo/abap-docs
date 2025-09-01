  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library, Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

iXML Library, Access Using Name

Accesses elements of a DOM using the name.

Source Code

REPORT demo\_ixml\_access\_names.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA source\_tab TYPE TABLE OF i.
    source\_tab = VALUE #( FOR j = 1 UNTIL j > 10
                        ( ipow( base = 2 exp = j ) ) ).
    DATA(ixml) = cl\_ixml=>create( ).
    DATA(document) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE text = \`Powers of 2\`
                                  numbers = source\_tab
                           RESULT XML document.
    DATA(element)  = document->find\_from\_name\_ns( name = 'TEXT' ).
    IF element IS NOT INITIAL.
      cl\_demo\_output=>write\_data( element->get\_value( ) ).
    ENDIF.
    DATA(elements) =
      document->get\_elements\_by\_tag\_name( name = 'item' ).
    DATA target\_tab LIKE source\_tab.
    DO elements->get\_length( ) TIMES.
      DATA(node) = elements->get\_item( sy-index - 1 ).
      APPEND node->get\_value( ) TO target\_tab.
    ENDDO.
    cl\_demo\_output=>display( target\_tab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is created in asXML format using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") and written directly to an XML document in DOM representation.

In the XML document, first the element TEXT is found and then its value displayed. All elements item are then collected and their values appended to an internal table in a loop, which then becomes the output.