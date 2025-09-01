---
title: "Syntax"
description: |
  <tt:call-method class='class' s-d-name='meth' writer = 'writer_para' reader = 'reader_para' <tt:with-parameter s-d-name='para1' ref='node1'val='val1'var='var1' /> <tt:with-parameter s-d-name='para2' ref='node2'val='val2'v
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_static.htm"
abapFile: "abenst_tt_call-method_static.htm"
keywords: ["select", "delete", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abenst", "call", "static"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Access to ABAP Objects from ST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_objects.htm) → 

ST - tt:call-method, Call Static Methods

Syntax

<tt:call-method class="class" *\[*s-*|*d-*\]*name="meth"
                              *\[*writer = "writer\_para"*\]*
                              *\[*reader = "reader\_para"*\]*
  *\[*<tt:with-parameter *\[*s-*|*d-*\]*name="para1"
                      *\[*ref="node1"*|*val="val1"*|*var="var1"*\]* />
   <tt:with-parameter *\[*s-*|*d-*\]*name="para2"
                      *\[*ref="node2"*|*val="val2"*|*var="var2"*\]* />
   ...*\]*
</tt:call-method>

Effect

Using this variant of the statement tt:call-method, a static method of a global ABAP Objects class can be called in an ST program as follows: class can be used to specify a class from the class library and meth can be used to specify a visible method of this class. This is not case-sensitive. The method is called for both serializations and deserializations when name is declared; it is called for serializations only when s-name is declared and for deserializations only when d-name is declared.

The interface parameters para1, para2, … of the called method can or must be bound to actual parameters, using the ST command tt:with-parameter. The attribute name specifies the name of a formal parameter. An actual parameter is bound to this attribute only in serializations (if s-name is specified) and only in deserializations (if d-name is specified). In certain cases, this allows a single method to be used for both directions. As actual parameters, ref can be used to specify data roots, var to specify variables or parameters, and val to specify [values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_representation.htm). Depending on the category of formal parameter, the values of the specified actual parameters are either passed in the call or used when the called method ends.

When actual parameters are used, read-only access to data roots is possible only in serializations, which is why they can only be passed to input parameters of the method. In the reverse case (deserializations), only writes can be performed on data roots, which is why they can be used only by output parameters or return codes.

The type of an actual parameter must match the typing of the interface parameter. The type of a data root, which can itself be typed in the statement [tt:root](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_root.htm), is determined by the type of the bound ABAP data object. Parameters and variables do not have a static type, unless the addition ref-type of the statements [tt:parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_parameter.htm) or [tt:variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_variable.htm) defines them as reference variables. Data reference variables defined in this way can be bound to interface parameters of the same type.

When a method is called, control passes from the ST processor to the ABAP processor of the ABAP runtime environment. There are no restrictions on which statements can be executed in the method. If ENDMETHOD or RETURN is used to exit a method correctly, control passes to the ST processor again and the ST program resumes after tt:call-method. Otherwise, the control does not pass back to the ST program:

-   If a statement such as LEAVE PROGRAM, SUBMIT without the addition AND RETURN, or LEAVE TO TRANSACTION is used to exit the method, the program responds as if the method were called from an ABAP program; that is, the current [internal mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") is deleted, together with the ST program.

-   If the method is terminated by a class-based exception, and the exception is propagated from the method, the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm) is terminated with the handleable exception CX\_ST\_CALL\_METHOD\_ERROR. The EXCEPTION\_NAME attribute of the exception object is then given the name of the original exception.

-   Non-class-based exceptions cannot be handled. A method terminated using a non-class-based exception always causes a runtime error.

If ABAP data objects are modified in the called method, and these data objects are bound to data roots of the calling ST program, these modifications take effect immediately in the ST program. The following restriction applies: If a method is called within a [tt:loop loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_loop.htm), serialization within the method (and within further nested tt:loop loops) only permits read-only access to the current internal table or its components. Deserialization within the method does not allow any access. Otherwise, a runtime error occurs.

Using the optional attributes writer and reader, the input parameters writer\_para or reader\_para of the called method can be specified. These parameters must have the references types IF\_SXML\_WRITER or IF\_SXML\_READER. If s-name is specified, only writer can be specified. If d-name is specified, only reader can be specified. If name is specified, both attributes can be specified. writer is used for serialization and reader is used for deserialization. These attributes can be used to pass a reference to the [XML writer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_writer_glosry.htm "Glossary Entry") or the [XML reader](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_reader_glosry.htm "Glossary Entry") (created by CALL TRANSFORMATION) to called method. In the method, the relevant interface can be used to access the reader or writer.

Note

If variables or parameters are bound to the interface parameters of called methods, note that these variables or parameters can be serialized or deserialized only if they contain elementary values.

Example

The following transformation exists as DEMO\_ST\_WITH\_METHOD\_CALL in AS ABAP. In a serialization in a tt:loop loop, it uses the data root SCARR\_TAB to call the static method GET\_FLIGHTS of the global class CL\_DEMO\_CALL\_FROM\_ST. This passes the component carrid of the internal table scarr\_tab to the input parameter of the method.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="SCARR\_TAB"/>
  <tt:root name="SPFLI\_TAB"/>
  <tt:template>
    <Flights>
      <tt:loop ref=".SCARR\_TAB">
        <Flights>
          <tt:attribute name="Carrier" value-ref="CARRNAME"/>
          <tt:call-method class="CL\_DEMO\_CALL\_FROM\_ST"
                          s-name="GET\_FLIGHTS">
            <tt:with-parameter name="CARRID" ref="carrid"/>
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
    </Flights>
  </tt:template>
</tt:transform>

The simple transformation can be called in a different method MAIN of the same class DEMO\_ST\_WITH\_METHOD\_CALL as follows:

METHOD main.
  DATA:  scarr\_tab TYPE SORTED TABLE OF scarr
                    WITH UNIQUE KEY carrid,
         xml\_string TYPE string,
         exc        TYPE REF TO cx\_st\_call\_method\_error.
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
        RESULT XML xml\_string.
    CATCH cx\_st\_call\_method\_error INTO exc.
      MESSAGE exc TYPE 'I' DISPLAY LIKE 'E'.
      RETURN.
  ENDTRY.
  cl\_abap\_browser=>show\_xml( EXPORTING xml\_string = xml\_string ).
ENDMETHOD.

The internal tables scarr\_tab and spfli\_tab are both static attributes of the class. scarr\_tab is filled and passed to the transformation data root with the same name; spfli\_tab, however, remains empty and is filled in a different way (in the method GET\_SPFLI called from the simple transformation) in each loop, in accordance with the parameter carrid.

The method MAIN is bound to the transaction code DEMO\_ST\_METHOD\_CALL and produces the following result:

<FlightList>
  <Flights Carrier="American Airlines">
    <Connection ID="0017">
      <From>NEW YORK</From>
      <To>SAN FRANCISCO</To>
    </Connection>
    <Connection ID="0064">
      <From>SAN FRANCISCO</From>
      <To>NEW YORK</To>
    </Connection>
    <Connection ID="0555">
      <From>ROME</From>
      <To>FRANKFURT</To>
    </Connection>
    ...
  </Flights>
  <Flights Carrier="Air Berlin">
    ...
  </Flights>
</FlightList>

The program above uses the binding of the attribute spfli\_tab to the simple transformation, and writes on this attribute in the called method, to enable writes to be performed on data nodes in serializations within the ST program.