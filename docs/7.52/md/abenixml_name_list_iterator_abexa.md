  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) →  [iXML Library, Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML Library, Iterator for Element List

Access to nodes in an element list in DOM using an iterator.

Source Code

REPORT demo\_ixml\_name\_list\_iterator.
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
    DATA(elements) =
      document->get\_elements\_by\_tag\_name( name = 'item' ).
    DATA(iterator) = elements->create\_iterator( ).
    DATA target\_tab LIKE source\_tab.
    DO.
      DATA(node) = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      APPEND node->get\_value( ) TO target\_tab.
    ENDDO.
    cl\_demo\_output=>display( target\_tab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is created in asXML format using the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") and written directly to an XML document in DOM representation. An element list for all elements of the name item is created from this representation and an iterator is created for this list. The elements are extracted using the iterator.