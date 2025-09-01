  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Internal%20Tables%2C%20ABENST_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Internal Tables

The example demonstrates the serializing of an internal table.

Source Code   

\* Public class definition
CLASS cl\_demo\_st\_table DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_st\_table IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF carrier\_wa,
            carrid   TYPE scarr-carrid,
            carrname TYPE scarr-carrname,
            url      TYPE scarr-url,
          END OF carrier\_wa,
          carrier\_tab LIKE TABLE OF carrier\_wa,
          xml         TYPE xstring,
          html        TYPE string.
    SELECT \*
           FROM scarr
           INTO CORRESPONDING FIELDS OF TABLE @carrier\_tab.
    CALL TRANSFORMATION demo\_st\_table
                        SOURCE carriers = carrier\_tab
                        RESULT XML xml.
    out->write\_xml( xml ).
    CALL TRANSFORMATION demo\_st\_table
                        SOURCE carriers = carrier\_tab
                        RESULT XML html
                        OPTIONS xml\_header = 'NO'.
    out->write\_html( html ).
  ENDMETHOD.
ENDCLASS.

Description   

An internal table carrier\_tab is filled with data from the database table SCARR and is transformed to XML using the Simple Transformation DEMO\_ST\_TABLE. The ST program is as follows:

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

The transformation uses the ST statement [tt:loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_loop.htm) to serialize the other internal tables line by line. HTML tags are inserted into the XML data as literal elements.

The result of the transformation is first shown as an XML file and then as formatted HTML data below.