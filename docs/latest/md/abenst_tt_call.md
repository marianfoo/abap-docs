  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Reusing ST Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_reuse.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Acall%2C%20Calling%20Transformations%2C%20ABENST_TT_CALL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

The ST statement tt:with-root binds the [data roots](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_root.htm) root1, root2, ... of the main template of the called transformation to the nodes node1, node2, ... of the current transformation, or passes the ABAP data objects that are currently bound to the specified nodes to these data roots. If ref is not specified, the current node of the calling transaction is used.

If formal parameters are declared with [tt:parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_parameter.htm) in the called ST program, these can be linked to the actual parameters with the ST statement tt:with-parameter. As actual parameters, ref can be used to specify data roots, var can be used to specify variables, and [val](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_representation.htm) can be used to specify values. Depending on the type of formal parameter, the values of the specified actual parameters are either passed in the call or used when the called ST program ends.

Example

In the ST program DEMO\_ST\_CALL1 below, another ST program (here: DEMO\_ST\_APPLY1) is called in a [tt:loop loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_loop.htm).

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tab1>
      <tt:loop ref="ROOT">
        <key>
          <tt:value ref="key" />
        </key>
        <tt:call transformation="demo\_st\_apply1">
          <tt:with-root name="ROOT" ref="values"/>
        </tt:call>
      </tt:loop>
    </tab1>
  </tt:template>
</tt:transform>

If the called ST program is implemented as shown in DEMO\_ST\_CALL2 below, the transformation has the same function as the [example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_loop.htm) of transforming internal tables.

<?sap.transform simple?>
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