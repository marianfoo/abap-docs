  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML, Examples of Mappings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_abexas.htm) → 

asXML, Mapping of Tables

The example demonstrates the mapping of internal tables.

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

Every row of the internal table itab is displayed in a subelement item of the table.