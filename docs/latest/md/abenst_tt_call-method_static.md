---
title: "Syntax"
description: |
  <tt:call-method class='class' s-d-name='meth' writer = 'writer_para' reader = 'reader_para' <tt:with-parameter s-d-name='para1' ref='node1'val='val1'var='var1' /> <tt:with-parameter s-d-name='para2' ref='node2'val='val2'v
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_call-method_static.htm"
abapFile: "abenst_tt_call-method_static.htm"
keywords: ["delete", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abenst", "call", "static"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Access to ABAP Objects from ST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Acall-method%2C%20Calling%20Static%20Methods%2C%20ABENST_TT_CALL-METHOD_STATIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

ST - tt:call-method, Calling Static Methods

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

Using this variant of the statement tt:call-method, it is possible to call a static method of a global ABAP Objects class in an ST program as follows: class can be used to specify a class from the class library and meth can be used to specify a visible method of this class. This is not case-sensitive. The method is called for both serializations and deserializations when name is specified and it is called for serializations only when s-name is specified and for deserializations only when d-name is specified.

The interface parameters para1, para2, ... of the called method can or must be bound to actual parameters using the ST statement tt:with-parameter. The attribute name specifies the name of a formal parameter. An actual parameter is bound to this attribute only in serializations if s-name is specified and only in deserializations if d-name is specified. In certain cases, this allows a single method to be used for both directions. As actual parameters, ref can be used to specify data roots, var to specify variables or parameters, and val to specify [values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_representation.htm). Depending on the type of formal parameter, the values of the specified actual parameters are either passed in the call or copied when the called method ends.

When binding actual parameters, read-only access to data roots is possible only in serializations, which is why they can only be passed to input parameters of the method. Conversely, in deserializations, only writes can be performed on data roots, which is why they can be used only by output parameters or return values.

The type of an actual parameter must match the typing of the interface parameter. The type of a data root, which can itself be typed in the statement [tt:root](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_root.htm), is determined by the type of the bound ABAP data object. Parameters and variables do not have a static type, unless the addition ref-type of the statements [tt:parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_parameter.htm) or [tt:variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_variable.htm) defines them as reference variables. Data reference variables defined in this way can be bound to interface parameters of the same type.

When a method is called, control is passed from the ST processor to the ABAP processor of the ABAP runtime framework. There are no restrictions on which statements can be executed in the method. If ENDMETHOD or RETURN is used to end a method correctly, control is passed to the ST processor again and the ST program resumes after tt:call-method. Otherwise, control does not return to the ST program:

-   If a statement such as LEAVE PROGRAM, SUBMIT without the addition AND RETURN, or LEAVE TO TRANSACTION is used to exit the method, the program responds as if the method were called from an ABAP program, that is, the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") is deleted, together with the ST program.
-   If the method is terminated by a class-based exception so that the exception is propagated from the method, the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm) is terminated with the catchable exception CX\_ST\_CALL\_METHOD\_ERROR. The EXCEPTION\_NAME attribute of the exception object then contains the name of the original exception.
-   Non-class-based exceptions cannot be handled. A method terminated using a non-class-based exception always causes a runtime error.

If ABAP data objects are modified in the called method, and these data objects are bound to data roots of the calling ST program, these modifications take effect immediately in the ST program. The following restriction applies: If a method is called within a [tt:loop loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_loop.htm), serialization within the method (and within further nested tt:loop loops) only allows read-only access to the current internal table or its components. Deserialization within the method does not allow any access. Otherwise, a runtime error occurs.

The optional attributes writer and reader can be used to specify the input parameters writer\_para or reader\_para of the called method that must be typed with the references types IF\_SXML\_WRITER or IF\_SXML\_READER. If s-name is specified, only writer can be specified. If d-name is specified, only reader can be specified. If name is specified, both attributes can be specified. writer is used for serialization and reader is used for deserialization. These attributes can be used to pass a reference to the [XML writer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxml_writer_glosry.htm "Glossary Entry") or the [XML reader](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxml_reader_glosry.htm "Glossary Entry"), which is created by CALL TRANSFORMATION, to called method. In the method, the relevant interface can be used to access the reader or writer.

Hint

If variables or parameters are bound to the interface parameters of called methods, it should be noted that these variables or parameters can be serialized or deserialized only if they contain elementary values.

Example

The following transformation exists as DEMO\_ST\_WITH\_METHOD\_CALL in AS ABAP. In a serialization in a tt:loop loop, it uses the data root SCARR\_TAB to call the static method GET\_FLIGHTS of the global class CL\_DEMO\_CALL\_FROM\_ST. This passes the component carrid of the internal table scarr\_tab to the input parameter of the method.

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

The Simple Transformation can be called in the method MAIN of the same class CL\_DEMO\_CALL\_FROM\_ST. The internal tables scarr\_tab and spfli\_tab are both static attributes of the class. scarr\_tab is filled and passed to the transformation data root with the same name, whereas spfli\_tab remains empty and is filled in a different way in each loop pass in the method GET\_SPFLI called from the Simple Transformation in accordance with the parameter carrid.

The method MAIN produces the following result:

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

The class uses the binding of the attribute spfli\_tab to the Simple Transformation, and write access to this attribute in the called method to enable write access to data nodes during serialization within the ST program. In this way it bypasses the restriction that a data node cannot be written during serialization within the ST program itself.