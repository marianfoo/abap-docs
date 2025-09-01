  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML Library, Examples](javascript:call_link\('abenabap_sxml_lib_abexas.htm'\)) → 

sXML Library, Transformation from XML Reader

Deserializes ABAP data from an XML reader.

Source Code

REPORT demo\_sxml\_trafo\_from\_reader.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(xml) = cl\_abap\_codepage=>convert\_to(
      \`<document>\` &&
      \`  <head>\` &&
      \`    <author>KELLERH</author>\` &&
      \`    <date>20120824</date>\` &&
      \`  </head>\` &&
      \`  <body>\` &&
      \`    <asx:abap\` &&
      \`      xmlns:asx="http://www.sap.com/abapxml" version="1.0">\` &&
      \`      <asx:values>\` &&
      \`        <TABLE>\` &&
      \`          <item>1</item>\` &&
      \`          <item>2</item>\` &&
      \`          <item>3</item>\` &&
      \`        </TABLE>\` &&
      \`      </asx:values>\` &&
      \`    </asx:abap>\` &&
      \`  </body>\` &&
      \`</document>\` ).
    DATA(reader) =
      CAST if\_sxml\_reader( cl\_sxml\_string\_reader=>create( xml ) ).
    WHILE reader->name <> 'body'.
      reader->next\_node( ).
    ENDWHILE.
    DATA itab TYPE TABLE OF i.
    CALL TRANSFORMATION id SOURCE XML reader
                           RESULT table = itab.
    cl\_demo\_output=>display( itab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

An XML string reader parses the XML data of a byte string until it reaches the element <body>. The element <header> is not analyzed further. The reader located at the opened <body> element is used as an XML source for the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID. The content of <body> is in asXML format for an internal table, which means it can be deserialized to this table.