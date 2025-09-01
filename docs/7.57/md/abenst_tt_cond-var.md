  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_flow_control.htm) →  [ST - Flow Control with Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_cond_switch_var.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:cond-var, Condition for Variables, ABENST_TT_COND-VAR, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - tt:cond-var, Condition for Variables

Syntax

<tt:cond-var check="...">
   ...
</tt:cond-var>

Effect

The statement tt:cond-var allows conditional transformations for which, unlike tt:*\[*s-*|*d-*\]*cond, only data content can be specified and not conditions for the data flow. The content of tt:cond-var is processed depending on a [check condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_check.htm). cond is the same as general conditions, with the exception that [variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_variable.htm) and [values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_abap_representation.htm) can be specified as operands, but not [data nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_addressing_nodes.htm).

Outside of tt:switch-var, a condition [check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_switch-var.htm) must be specified.

Serialization and Deserialization   

In serializations and deserializations, the condition is checked and the content of the element tt:cond-var is only processed if the condition is met.

Hint

Unlike general conditional transformations with [tt:*\[*s-*|*d-*\]*cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_cond.htm), the content of the XML input stream for tt:cond-var is irrelevant.

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

In tt:apply, the value of the data root ROOT is passed to the parameter PARA of the [subtemplate](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_template_sub.htm) SUB and checked there. Depending on whether the ABAP data object bound to ROOT is smaller, greater than, or equal to 100, the serialization creates either of the following:

<X val="small">...</X>

or

<X val="big">...</X>

is created. var(PARA) could be written in the conditions check instead of PARA.