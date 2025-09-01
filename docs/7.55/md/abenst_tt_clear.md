  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_serial_deserial.htm) →  [ST - Value Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_assignments.htm) → 

ST - tt:clear, Initialization

Syntax

<tt:clear *\[*ref="node"*|*var="variable"*\]* />

Effect

The statement tt:clear can be used to initialize a [data root](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_root.htm), a [variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_variable.htm), or a [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_parameter.htm).

ref or var are used to specify the field that is to be initialized. If no field is specified, the current node is used implicitly. The following fields are possible:

-   A node node specified in accordance with the [addressing rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_addressing.htm).

-   A [variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_parameter.htm) variable.

Serialization

In serializations, only variables (or parameters) are initialized. If a node is specified with ref or if the current node is specified implicitly, tt:clear is ignored in serializations.

Deserialization

In deserializations, the specified nodes or variables (or parameters) are initialized.

Example

The transformation below shows an initialization:

tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tt:ref name="ROOT">
      <X>
        <tt:value/>
      </X>
      <tt:clear/>
    </tt:ref>
  </tt:template>
</tt:transform>

In deserializations, the initial value is assigned to the ABAP data object bound to the data root ROOT.