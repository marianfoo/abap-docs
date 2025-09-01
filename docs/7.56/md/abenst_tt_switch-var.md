  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) →  [ST - Flow Control with Variables](javascript:call_link\('abenst_cond_switch_var.htm'\)) → 

ST - tt:switch-var, Case Distinction for Variables

Syntax

<tt:switch-var>
  <tt:*\[*s-*|*d-*\]*cond-var ...
  <tt:*\[*s-*|*d-*\]*cond-var ...
  ...
</tt:switch-var>

Effect

The statement tt:switch-var allows case distinctions in which, unlike tt:switch, only cases for data content can be specified, not for data flow. In tt:switch, a list of cases can be shown where the syntax of each case is formulated by a condition for variables, namely a [tt:cond-var](javascript:call_link\('abenst_tt_cond-var.htm'\)) subelement. Other direct subelements are not possible in tt:switch-var.

No more than one case can be specified that does not contain a [check](javascript:call_link\('abenst_check.htm'\)) condition.

Serialization and Deserialization

Serialization and deserialization follow these rules:

1.  The first case tt:cond-var, whose explicitly specified condition check is met, is processed and the element tt:switch-var is exited.
2.  If no condition is met for any case with explicitly specified conditions, the case without condition is executed by default (if it exists) and the element tt:switch-var is exited.
3.  If no case without condition exists, the element tt:switch-var is exited without any case being processed.

Note

Unlike the general case distinction with [tt:switch](javascript:call_link\('abenst_tt_switch.htm'\)), the content of the cases is irrelevant.

Example

The following transformation expands the example from [Conditions for Variables](javascript:call_link\('abenst_tt_cond-var.htm'\)).

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
    <tt:switch-var>
      <tt:cond-var check="PARA<50">
        <X val="small">...</X>
      </tt:cond-var>
      <tt:cond-var check="PARA<100">
        <X val="medium">...</X>
      </tt:cond-var>
      <tt:cond-var>
        <X val="big">...</X>
      </tt:cond-var>
    </tt:switch-var>
  </tt:template>
</tt:transform>

Depending on the value of the ABAP data object bound to ROOT, the serialization creates either of the following:

<X val="small">...</X>

or

<X val="medium">...</X>

or

<X val="big">...</X>

is created. The position of the element tt:cond-var without explicit condition within tt:switch-var is irrelevant. However, the order of the elements tt:cond-var with explicit conditions is relevant.