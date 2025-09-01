  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML, Examples of Mappings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_abexas.htm) → 

asXML, Mapping of Objects

The example demonstrates the mapping of referenced objects.

Source Code

REPORT demo\_asxml\_object.
CLASS serializable DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_serializable\_object.
    DATA attr TYPE string VALUE \`Attribute\`.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: oref TYPE REF TO serializable,
          xmlstr TYPE xstring.
    CREATE OBJECT oref.
    CALL TRANSFORMATION id
                        SOURCE object = oref
                        RESULT XML xmlstr.
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The attributes of the object referenced by oref are displayed on subelements of the heap element. The connection between the reference variables in the values element and the object in heap takes place using an XML reference mechanism.