  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Examples](javascript:call_link\('abenst_abexas.htm'\)) → 

ST - Internal Tables

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

The transformation uses the ST statement [tt:loop](javascript:call_link\('abenst_tt_loop.htm'\)) to serialize the other internal tables line by line. HTML tags are inserted into the XML data as literals.

The result of the transformation is first shown as an XML file and then as formatted HTML data further below.