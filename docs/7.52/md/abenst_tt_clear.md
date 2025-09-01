  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Value Assignments](javascript:call_link\('abenst_assignments.htm'\)) → 

ST - tt:clear, Initialization

Syntax

<tt:clear *\[*ref="node"*|*var="variable"*\]* />

Effect

The statement tt:clear can be used to initialize a [data root](javascript:call_link\('abenst_tt_root.htm'\)), a [variable](javascript:call_link\('abenst_tt_variable.htm'\)), or a [parameter](javascript:call_link\('abenst_tt_parameter.htm'\)).

ref or var are used to specify the field that is to be initialized. If no field is specified, the current node is used implicitly. The following fields are possible:

-   A node node specified in accordance with the [addressing rules](javascript:call_link\('abenst_addressing.htm'\)).

-   A [variable](javascript:call_link\('abenst_tt_variable.htm'\)) or a [parameter](javascript:call_link\('abenst_tt_parameter.htm'\)) variable.

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