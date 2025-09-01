  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Simple%20Transformation%20for%20Internal%20Tables%2C%20ABENABAP_ST_JSON_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

JSON - Simple Transformation for Internal Tables

The example demonstrates the Simple Transformation of an internal table to [JSON data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_oview.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_st\_json\_table DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_st\_json\_table IMPLEMENTATION.
  METHOD main.
    "Internal table as source of transformation
    out->begin\_section( 'Internal Table' ).
    DATA: BEGIN OF carrier\_wa,
            carrid   TYPE scarr-carrid,
            carrname TYPE scarr-carrname,
            url      TYPE scarr-url,
          END OF carrier\_wa,
          carrier\_tab LIKE TABLE OF carrier\_wa.
    SELECT \*
           FROM scarr
           INTO CORRESPONDING FIELDS OF TABLE @carrier\_tab.
    out->write\_data( carrier\_tab ).
    "Simple Transformation to JSON
    out->next\_section( 'JSON' ).
    DATA(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION demo\_st\_json\_table
                        SOURCE carriers = carrier\_tab
                        RESULT XML json\_writer.
    FINAL(json) = json\_writer->get\_output( ).
    out->write\_json( json ).
    "Simple Transformation to JSON-XML
    out->next\_section( 'JSON-XML' ).
    CALL TRANSFORMATION demo\_st\_json\_table
                        SOURCE carriers = carrier\_tab
                        RESULT XML FINAL(xml).
    out->write\_xml( xml ).
    "Assert symmetry of transformation
    DATA result\_tab LIKE carrier\_tab.
    CALL TRANSFORMATION demo\_st\_json\_table
                        SOURCE XML json
                        RESULT carriers = result\_tab.
    ASSERT result\_tab = carrier\_tab.
    "Assert that results of transformation and JSON-Writer are the same
    FINAL(xml\_reader) = cl\_sxml\_string\_reader=>create( xml ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( json\_writer ).
    ASSERT json\_writer->get\_output( ) = json.
  ENDMETHOD.
ENDCLASS.

Description   

An internal table carrier\_tab is filled with data from the database table SCARR and is transformed twice using the Simple Transformation DEMO\_ST\_JSON\_TABLE. The ST program is as follows:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="CARRIERS"/>
  <tt:template>
    <array>
      <tt:loop ref=".CARRIERS">
        <object>
          <str name="Carrier-Id">
            <tt:value ref="$ref.carrid"/>
          </str>
          <str name="Carrier">
            <tt:value ref="$ref.carrname"/>
          </str>
          <str name="URL">
            <tt:value ref="$ref.url"/>
          </str>
        </object>
      </tt:loop>
    </array>
  </tt:template>
</tt:transform>

The transformation is written in such a way that the new XML data has a valid [JSON XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_xml.htm) format.

-   When the transformation is called for the first time, a [JSON writer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_sxml.htm) is specified as the result. The JSON data can be retrieved directly from this result and added to the json string, where the data can be output.
-   When the transformation is called for the second time, an inline declared byte string xml is specified as the result. This usually creates XML data in XML 1.0 format. The output shows that it is the JSON XML created by the transformation.

Finally, a demonstration that:

-   The Simple Transformation is symmetrical. To do this, the JSON data is passed to the transformation. The result matches the source table.
-   An additional [JSON writer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_sxml.htm) creates the same JSON data in xml from the JSON-XML, as when the transformation is called. Specifying a JSON writer as the result of a transformation means that JSON-XML does not need to be explicitly handled in the ABAP class.