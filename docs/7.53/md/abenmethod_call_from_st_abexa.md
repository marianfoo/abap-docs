  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Examples](javascript:call_link\('abenst_abexas.htm'\)) → 

Simple Transformation, Method Call

This example demonstrates the call of a static method from a simple transformation.

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

The method MAIN of the global class CL\_DEMO\_CALL\_FROM\_ST calls an ST program DEMO\_ST\_WITH\_METHOD\_CALL and passes the static attributes SCARR\_TAB and SPFLI\_TAB of this class to the data roots of the transformation with the same name. The table SCARR\_TAB is filled and SPFLI\_TAB is passed empty. The ST program is as follows:

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

In a serialization in a [tt:loop loop](javascript:call_link\('abenst_tt_loop.htm'\)), it uses the data root SCARR\_TAB to call the static method GET\_FLIGHTS of the global class CL\_DEMO\_CALL\_FROM\_ST. This passes the component carrid of the internal table scarr\_tab to the input parameter of the method. In the method, spfli\_tab is filled in a different way in each loop, in accordance with the parameters passed.