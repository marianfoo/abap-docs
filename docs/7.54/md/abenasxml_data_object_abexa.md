  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML, Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

asXML, Mapping of Anonymous Data Objects

The example demonstrates the mapping of anonymous data objects.

Source Code

REPORT demo\_asxml\_data\_object.
CLASS serializable DEFINITION.
  PUBLIC SECTION.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref   TYPE REF TO decfloat34.
    DATA xmlstr TYPE xstring.
    CREATE DATA dref.
    dref->\* = '1.23456'.
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML xmlstr.
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The anonymous data object referenced by dref is mapped to a subelement of the element heap. An XML reference mechanism is used to associate this subelement with the reference variables in the element values. The element name is the XML schema type name precisionDecimal of the built-in ABAP type decfloat34 from the namespace abap="http://www.sap.com/abapxml/types/built-in".