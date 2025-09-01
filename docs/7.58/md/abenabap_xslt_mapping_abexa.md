  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20UUIDs%2C%20ABENABAP_XSLT_MAPPING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asXML - Mapping of UUIDs

The example demonstrates the mapping of UUIDs to XML schema data types.

Source Code   

\* Public class definition
CLASS cl\_demo\_abap\_xml\_schema\_map DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_abap\_xml\_schema\_map IMPLEMENTATION.
  METHOD main.
    DATA: uuid      TYPE xsduuid\_char,
          uuid1     TYPE xsduuid\_char,
          uuid2     TYPE xsduuid\_char,
          exc\_trafo TYPE REF TO cx\_transformation\_error,
          exc\_prev  TYPE REF TO cx\_root.
    FIELD-SYMBOLS <uuid> TYPE sysuuid\_c32.
    TRY.
        uuid = cl\_uuid\_factory=>create\_system\_uuid(
          )->create\_uuid\_c32( ).
        ASSIGN uuid TO <uuid>.
        CALL TRANSFORMATION id SOURCE uuid1 = uuid
                                      uuid2 = <uuid>
                               RESULT XML FINAL(xml\_xstring).
        out->write\_xml( xml\_xstring ).
      CATCH cx\_uuid\_error.
        RETURN.
      CATCH cx\_transformation\_error.
        RETURN.
    ENDTRY.
    TRY.
        CALL TRANSFORMATION demo\_uuid SOURCE XML xml\_xstring
                                      RESULT uuid1 = uuid1
                                             uuid2 = uuid2.
      CATCH cx\_transformation\_error INTO exc\_trafo.
        out->write( exc\_trafo->get\_text( ) ).
        IF exc\_trafo->previous IS NOT INITIAL.
          exc\_prev = exc\_trafo->previous.
          out->write( exc\_prev->get\_text( ) ).
        ENDIF.
    ENDTRY.
    out->write( \`UUID1 = \` && uuid1 ).
    out->write( \`UUID2 = \` && uuid2 ).
  ENDMETHOD.
ENDCLASS.

Description   

In this example, a [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") is created and passed to the predefined [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID with the data types XSDUUID\_CHAR and SYSUUID\_C32. The UUID of the type XSDUUID\_CHAR is recognized as such and converted to the associated [XML schema data type](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)). However, the UUID of the type SYSUUID\_C32 is interpreted as a regular text field and passed unconverted in accordance with the associated rules for the [mapping of elementary ABAP types](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)).

When the new XML data is deserialized using the Simple Transformation DEMO\_UUID, an attempt is made to convert both nodes to ABAP UUIDs of type XSDUUID\_CHAR. This only works for the first node, which exists in the correct XML schema data type. In the case of the second node, which exists as unformatted text, an exception is raised.

The example shows that it is possible to work with XML schema data types without having to use self-programmed conversions. However, it also shows that when using XML schema data types it is important to pay attention to the correct mapping of data types.