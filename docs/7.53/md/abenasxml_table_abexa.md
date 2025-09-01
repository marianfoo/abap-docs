  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML, Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

asXML, Mapping of Tables

This example demonstrates the mapping of internal tables.

Source Code

REPORT demo\_asxml\_table.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE TABLE OF i.
    itab = VALUE #( FOR j = 1 UNTIL j > 3 ( j ) ).
    CALL TRANSFORMATION id
                        SOURCE table = itab
                        RESULT XML DATA(xmlstr).
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Every row of the internal table itab is mapped to a subelement item of the table.