  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Simple%20Transformation%20for%20Name%20Attributes%2C%20ABENABAP_ST_JSON_TABLE_ATTR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

JSON - Simple Transformation for Name Attributes

The example demonstrates a Simple Transformation used to create name attributes in [JSON data](javascript:call_link\('abenjson_oview.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_st\_json\_table\_attrbts DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_st\_json\_table\_attrbts IMPLEMENTATION.
  METHOD main.
    "Internal table as source of transformation
    out->begin\_section( 'Internal Table' ).
    DATA: BEGIN OF carrier\_wa,
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
    FINAL(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION demo\_st\_json\_table\_attributes
                        SOURCE carriers = carrier\_tab
                        RESULT XML json\_writer.
    FINAL(json) = json\_writer->get\_output( ).
    out->write\_json( json ).
    "Simple Transformation to JSON-XML
    out->next\_section( 'JSON-XML' ).
    CALL TRANSFORMATION demo\_st\_json\_table\_attributes
                        SOURCE carriers = carrier\_tab
                        RESULT XML FINAL(xml).
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in a similar way to the [executable example](javascript:call_link\('abenabap_st_json_table_abexa.htm'\)) for an internal table, but the values of the attributes name of the elements object in JSON-XML are also filled from the internal table in the Simple Transformation DEMO\_ST\_JSON\_TABLE\_ATTRIBUTES. The ST program is as follows:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="CARRIERS"/>
  <tt:template>
    <array>
      <tt:loop ref=".CARRIERS">
        <object>
          <str>
            <tt:attribute name="name">
              <tt:value ref="$ref.carrname"/>
            </tt:attribute>
            <tt:value ref="$ref.url"/>
          </str>
        </object>
      </tt:loop>
    </array>
  </tt:template>
</tt:transform>