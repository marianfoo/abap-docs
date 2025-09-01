---
title: "Simple Transformation, Internal Table"
description: |
  The example demonstrates the serializing of an internal table. Source Code REPORT demo_st_table. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: BEGIN OF carrier_wa, carrid   TYPE scarr-carrid, carrname TYPE scarr-carrname, url
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_table_abexa.htm"
abapFile: "abenst_table_abexa.htm"
keywords: ["select", "insert", "loop", "do", "method", "class", "data", "internal-table", "abenst", "table", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_abexas.htm) → 

Simple Transformation, Internal Table

The example demonstrates the serializing of an internal table.

Source Code

REPORT demo\_st\_table.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF carrier\_wa,
            carrid   TYPE scarr-carrid,
            carrname TYPE scarr-carrname,
            url      TYPE scarr-url,
          END OF carrier\_wa,
          carrier\_tab LIKE TABLE OF carrier\_wa,
          xml  type xstring,
          html type string.
    SELECT \*
           FROM scarr
           INTO CORRESPONDING FIELDS OF TABLE @carrier\_tab.
    CALL TRANSFORMATION demo\_st\_table
                        SOURCE carriers = carrier\_tab
                        RESULT XML xml.
    cl\_demo\_output=>write\_xml( xml ).
    CALL TRANSFORMATION demo\_st\_table
                        SOURCE carriers = carrier\_tab
                        RESULT XML html
                        OPTIONS xml\_header = 'NO'.
    cl\_demo\_output=>write\_html( html ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table, carrier\_tab, is filled with data from the database table SCARR and is transformed to XML using the simple transformation DEMO\_ST\_TABLE. The ST program is as follows:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="CARRIERS"/>
  <tt:template>
    <html>
      <body>
        <h2>Carriers:</h2>
        <table border="2">
          <tr>
            <td><b>Id</b></td>
            <td><b>Name</b></td>
            <td><b>Homepage</b></td>
          </tr>
          <tt:loop ref=".CARRIERS">
            <tr><td>
                <tt:value ref="$ref.carrid"/>
              </td>
              <td>
                <tt:value ref="$ref.carrname"/>
              </td>
              <td>
               <a><tt:attribute name="href" value-ref="$ref.url" />
                 <tt:value ref="$ref.url"/></a>
              </td>
            </tr>
          </tt:loop>
        </table>
      </body>
    </html>
  </tt:template>
</tt:transform>

The transformation uses the ST statement [tt:loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_loop.htm) to serialize the other internal tables row by row. HTML tags are inserted into the XML data as literals.

The result of the transformation is first shown as an XML file and then as formatted HTML data further below.