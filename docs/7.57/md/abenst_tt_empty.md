  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) →  [ST - tt:cond, Conditional Transformations](javascript:call_link\('abenst_tt_cond.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:empty, Empty Content, ABENST_TT_EMPTY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ST - tt:empty, Empty Content

Syntax

<tt:empty />

Effect

In [conditioned transformations](javascript:call_link\('abenst_tt_cond.htm'\)), it is possible to express empty template content explicitly using tt:empty: The element is allowed only within an element [tt:*\[*s-*|*d-*\]*cond](javascript:call_link\('abenst_tt_cond.htm'\)) and must be the only element there. It is ignored (has no content) in serializations. In deserializations, it is possible to use <tt:empty /> to express an empty [pattern](javascript:call_link\('abenst_pattern.htm'\)).