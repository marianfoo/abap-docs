  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_serial_deserial.htm) →  [ST - Value Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_assignments.htm) → 

ST - tt:assign, Value Assignment

Syntax

<tt:assign *\[*to-ref="node"*|*to-var="variable"*\]*
           *\[*ref="node"*|*val="value"*|*var="variable"*\]* />

Effect

The statement tt:assign is used to assign a value to a [data root](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_root.htm), a [variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_variable.htm), or a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_parameter.htm).

to-ref or to-var is used to specify the target field, and ref, val, or var to specify the source field. If no target field or no source field is specified, the [current node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_ref.htm) is used implicitly. Target and source fields can be:

-   a node node specified in accordance with the [addressing rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_addressing_nodes.htm),

-   a [variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_parameter.htm) variable,

-   a value value specified in accordance with the [rules for ABAP values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_data.htm) (source field only)

An assignment between reference variables with tt:assign is possible only if the static type of the source variables is more special or the same as the static type of the target variables (upcast). In all other cases, you can use the [tt:cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_cast.htm) statement to perform a downcast.

Serialization

In serializations, only variables (or parameters) are given the current value of the source field. If a data node is specified as the target field (using to-ref) or if the current node is specified implicitly, tt:assign is ignored in serializations.

Deserialization

In deserializations, only variables (or parameters) or directly specified values are evaluated as source fields. If a node is specified as the source field (using ref) or if the current node is specified implicitly, tt:assign is ignored in deserializations.

The following syntax can be used if the current node, or the node specified after to-ref, is an internal table:

<tt:assign *\[*to-ref="itab"*\]*\>
  <tt:assign *\[*to-ref="comp"*\]*
             *\[*val="value"*|*var="variable"*\]* />
  ...
</tt:assign>

A row is then inserted into the internal table specified. The values of the components are set using the inner statements tt:assign. This statement is ignored in serializations.

Example

The transformation below shows value assignments:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:variable name="VARI" val="11"/>
  <tt:parameter name="PARA" val="22"/>
  <tt:template>
    <tt:assign to-var="VARI" var="PARA"/>
    <tt:assign to-ref="ROOT" var="VARI"/>
  </tt:template>
</tt:transform>

During a deserialization, the value 22 is assigned to the ABAP data object bound to the data root ROOT.