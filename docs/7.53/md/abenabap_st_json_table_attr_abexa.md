  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json.htm) →  [JSON, Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_abexas.htm) → 

JSON, Simple Transformation for Name Attributes

The example demonstrates a simple transformation used to create name attributes in [JSON data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_oview.htm).

Source Code

REPORT demo\_st\_json\_table\_attributes.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    "Internal table as source of transformation
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Internal Table' ).
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
    DATA(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION demo\_st\_json\_table\_attributes
                        SOURCE carriers = carrier\_tab
                        RESULT XML json\_writer.
    DATA(json) = json\_writer->get\_output( ).
    out->write\_json( json ).
    "Simple Transformation to JSON-XML
    out->next\_section( 'JSON-XML' ).
    CALL TRANSFORMATION demo\_st\_json\_table\_attributes
                        SOURCE carriers = carrier\_tab
                        RESULT XML DATA(xml).
    out->write\_xml( xml ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in a similar way to the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st_json_table_abexa.htm) for an internal table, but the values of the attributes name of the elements object in JSON-XML are also filled from the internal table in the simple transformation DEMO\_ST\_JSON\_TABLE\_ATTRIBUTES. The ST program is as follows:

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