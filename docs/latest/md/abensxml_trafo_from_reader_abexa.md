  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Deserialization%20with%20XML%20Reader%2C%20ABENSXML_TRAFO_FROM_READER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

sXML - Deserialization with XML Reader

Deserializes ABAP data from an XML reader.

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_trafo\_from\_reader DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_trafo\_from\_reader IMPLEMENTATION.
  METHOD main.
    FINAL(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
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
    FINAL(reader) =
      CAST if\_sxml\_reader( cl\_sxml\_string\_reader=>create( xml ) ).
    WHILE reader->name <> 'body'.
      reader->next\_node( ).
    ENDWHILE.
    DATA itab TYPE TABLE OF i.
    CALL TRANSFORMATION id SOURCE XML reader
                           RESULT table = itab.
    out->write( itab ).
  ENDMETHOD.
ENDCLASS.

Description   

An XML string reader parses the XML data of a byte string until it reaches the element <body>. The element <header> is not analyzed further. The reader located at the element opening of <body> is used as an XML source for the [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. The content of <body> is in asXML format for an internal table, which means it can be deserialized to such a table.