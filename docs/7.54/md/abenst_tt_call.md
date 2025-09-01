  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Reusing ST Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_reuse.htm) → 

ST - tt:call, Calling Transformations

Syntax

<tt:call transformation="trafo">
  *\[*<tt:with-root name="root1" *\[*ref="node1"*\]* />
   <tt:with-root name="root2" *\[*ref="node2"*\]* />
   ...*\]*
  *\[*<tt:with-parameter name="para1"
                      *\[*ref="node1"*|*val="val1"*|*var="var1"*\]* />
   <tt:with-parameter name="para2"
                      *\[*ref="node2"*|*val="val2"*|*var="var2"*\]* />
   ...*\]*
</tt:call>

Effect

In an ST program, the statement tt:call can be used to call a different ST program trafo, as follows: The ST program trafo must exist in the repository. trafo is not case-sensitive.

The ST command tt:with-root bind the [data roots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_root.htm) root1, root2, ... of the main template of the called transformation to the nodes node1, node2, ... of the current transformation, that is, pass to these data roots the ABAP data objects that are currently bound to the specified nodes. If ref is not specified, the current node of the calling transaction is used.

If formal parameters are declared with [tt:parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_parameter.htm) in the called ST program, these can be linked to the actual parameters with the ST command tt:with-parameter. ref can be used to specify data roots as actual parameters, var can be used to specify variables as actual parameters, and [val](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_abap_representation.htm) can be used to specify values as actual parameters. Depending on the kind of formal parameter, the values of the specified actual parameters are either passed in the call or used when the called ST program ends.

Example

In the ST program below, another ST program is called in a [tt:loop loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_loop.htm).

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tab1>
      <tt:loop ref="ROOT">
        <key>
          <tt:value ref="key" />
        </key>
        <tt:call transformation="...">
          <tt:with-root name="ROOT" ref="values"/>
        </tt:call>
      </tt:loop>
    </tab1>
  </tt:template>
</tt:transform>

If the called ST program is implemented as shown below, the transformation has the same function as the [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_loop.htm) of transforming internal tables.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tab2>
      <tt:loop ref="ROOT">
        <value>
          <tt:value/>
        </value>
      </tt:loop>
    </tab2>
  </tt:template>
</tt:transform>