  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_flow_control.htm) →  [ST - tt:cond, Conditional Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm) → 

ST - tt:empty, Empty Content

Syntax

<tt:empty />

Effect

In [conditioned transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm), it is possible to express empty template content explicitly using tt:empty: The element is allowed only within an element [tt:*\[*s-*|*d-*\]*cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm) and must be the only element there. It is ignored (has no content) in serializations. In deserializations, it is possible to use <tt:empty /> to express an empty [pattern](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_pattern.htm).