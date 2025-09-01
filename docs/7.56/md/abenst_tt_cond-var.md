  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) →  [ST - Flow Control with Variables](javascript:call_link\('abenst_cond_switch_var.htm'\)) → 

ST - tt:cond-var, Condition for Variables

Syntax

<tt:cond-var check="...">
   ...
</tt:cond-var>

Effect

The statement tt:cond-var allows conditional transformations for which, unlike tt:*\[*s-*|*d-*\]*cond, only data content can be specified and not conditions for the data flow. The content of tt:cond-var is processed depending on a [check condition](javascript:call_link\('abenst_check.htm'\)). cond is the same as general conditions, with the exception that [variables](javascript:call_link\('abenst_tt_variable.htm'\)) and [values](javascript:call_link\('abenst_abap_representation.htm'\)) can be specified as operands, but not [data nodes](javascript:call_link\('abenst_addressing_nodes.htm'\)).

Outside of tt:switch-var, a condition [check](javascript:call_link\('abenst_tt_switch-var.htm'\)) must be specified.

Serialization and Deserialization

In serializations and deserializations, the condition is checked and the content of the element tt:cond-var is only processed if the condition is met.

Hint

Unlike general conditional transformations with [tt:*\[*s-*|*d-*\]*cond](javascript:call_link\('abenst_tt_cond.htm'\)), the content of the XML input stream for tt:cond-var is irrelevant.

Example

The following transformation demonstrates a condition for a parameter:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tt:apply name="SUB">
      <tt:with-parameter name="PARA" ref="ROOT"/>
    </tt:apply>
  </tt:template>
  <tt:template name="SUB">
    <tt:context>
      <tt:parameter name="PARA"/>
    </tt:context>
    <tt:cond-var check="PARA<100">
      <X val="small">...</X>
    </tt:cond-var>
    <tt:cond-var check="PARA>=100">
      <X val="big">...</X>
    </tt:cond-var>
  </tt:template>
</tt:transform>

In tt:apply, the value of the data root ROOT is passed to the parameter PARA of the [subtemplate](javascript:call_link\('abenst_tt_template_sub.htm'\)) SUB and checked there. Depending on whether the ABAP data object bound to ROOT is smaller, greater than, or equal to 100, the serialization creates either of the following:

<X val="small">...</X>

or

<X val="big">...</X>

is created. var(PARA) could be written in the conditions check instead of PARA.