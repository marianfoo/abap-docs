  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML, Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

asXML, Mapping of Elementary Data Types

The example demonstrates the mapping of elementary data types.

Source Code

REPORT demo\_asxml\_elementary.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: num    TYPE i VALUE 20,
          dat    TYPE d VALUE '20060627',
          xmlstr TYPE xstring.
    CALL TRANSFORMATION id
                        SOURCE number = num
                               date   = dat
                        RESULT XML xmlstr.
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the statement CALL TRANSFORMATION, the data objects num and dat are bound to the XML elements number and date. The values subelement contains these elements. The content of these elements is determined by mapping the bound elementary ABAP data objects.