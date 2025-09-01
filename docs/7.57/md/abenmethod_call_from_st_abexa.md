---
title: "ST - Method Call"
description: |
  This example demonstrates the call of a static method from a Simple Transformation. Source Code METHOD main. DATA:  scarr_tab  TYPE SORTED TABLE OF scarr WITH UNIQUE KEY carrid. SELECT  FROM scarr INTO TABLE @scarr_tab. IF sy-subrc <> 0. RETURN. ENDIF. TRY. CALL TRANSFORMATION demo_st_with_me
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_call_from_st_abexa.htm"
abapFile: "abenmethod_call_from_st_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenmethod", "call", "from", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - Method Call, ABENMETHOD_CALL_FROM_ST_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ST - Method Call

This example demonstrates the call of a static method from a Simple Transformation.

Source Code   

METHOD main.
  DATA:  scarr\_tab  TYPE SORTED TABLE OF scarr
                    WITH UNIQUE KEY carrid.
  SELECT \*
         FROM scarr
         INTO TABLE @scarr\_tab.
  IF sy-subrc <> 0.
    RETURN.
  ENDIF.
  TRY.
      CALL TRANSFORMATION demo\_st\_with\_method\_call
        SOURCE scarr\_tab = scarr\_tab
               spfli\_tab = spfli\_tab
        RESULT XML data(xml).
        cl\_demo\_output=>display\_xml( xml ).
    CATCH cx\_st\_call\_method\_error INTO data(exc).
      cl\_demo\_output=>display\_text( exc->get\_text( ) ).
      RETURN.
  ENDTRY.
ENDMETHOD.

Description   

The method MAIN of the global class CL\_DEMO\_CALL\_FROM\_ST calls an ST program DEMO\_ST\_WITH\_METHOD\_CALL and passes the static attributes SCARR\_TAB and SPFLI\_TAB of this class to the identically named data roots of the transformation. The table SCARR\_TAB is filled and SPFLI\_TAB is passed empty. The ST program is as follows:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="SCARR\_TAB"/>
  <tt:root name="SPFLI\_TAB"/>
  <tt:variable name="carrid"/>
  <tt:template>
    <FlightList>
      <tt:loop ref=".SCARR\_TAB">
        <Flights>
          <tt:attribute name="Carrier" value-ref="CARRNAME"/>
          <tt:assign ref="carrid" to-var="carrid"/>
          <tt:call-method class="CL\_DEMO\_CALL\_FROM\_ST"
                          s-name="GET\_FLIGHTS">
            <tt:with-parameter name="CARRID" var="carrid"/>
          </tt:call-method>
          <tt:loop ref=".SPFLI\_TAB">
            <Connection>
              <tt:attribute name="ID" value-ref="CONNID"/>
              <From>
                <tt:value ref="CITYFROM"/>
              </From>
              <To>
                <tt:value ref="CITYTO"/>
              </To>
            </Connection>
          </tt:loop>
        </Flights>
      </tt:loop>
    </FlightList>
  </tt:template>
</tt:transform>

In a serialization in a [tt:loop loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_loop.htm), the data root SCARR\_TAB is used to call the static method GET\_FLIGHTS of the global class CL\_DEMO\_CALL\_FROM\_ST. This passes the component carrid of the internal table scarr\_tab to the input parameter of the method. In the method, spfli\_tab is filled in a different way in each loop pass in accordance with the passed parameters.