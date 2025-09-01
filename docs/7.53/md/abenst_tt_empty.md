  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) →  [ST - tt:cond, Conditional Transformations](javascript:call_link\('abenst_tt_cond.htm'\)) → 

ST - tt:empty, Empty Content

Syntax

<tt:empty />

Effect

In [conditioned transformations](javascript:call_link\('abenst_tt_cond.htm'\)), it is possible to express empty template content explicitly using tt:empty: The element is allowed only within an element [tt:*\[*s-*|*d-*\]*cond](javascript:call_link\('abenst_tt_cond.htm'\)) and must be the only element there. It is ignored (has no content) in serializations. In deserializations, it is possible to use <tt:empty /> to express an empty [pattern](javascript:call_link\('abenst_pattern.htm'\)).