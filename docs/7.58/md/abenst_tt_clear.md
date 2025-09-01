---
title: "Syntax"
description: |
  <tt:clear ref='node'var='variable' /> Effect The statement tt:clear can be used to initialize a data root(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_root.htm), a variable(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_variable.htm), or a
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_clear.htm"
abapFile: "abenst_tt_clear.htm"
keywords: ["do", "if", "data", "abenst", "clear"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_serial_deserial.htm) →  [ST - Value Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Aclear%2C%20Initialization%2C%20ABENST_TT_CLEAR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - tt:clear, Initialization

Syntax

<tt:clear *\[*ref="node"*|*var="variable"*\]* />

Effect

The statement tt:clear can be used to initialize a [data root](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_root.htm), a [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_variable.htm), or a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_parameter.htm).

ref or var are used to specify the field that is to be initialized. If no field is specified, the current node is used implicitly. The following fields are possible:

-   A node node specified in accordance with the [addressing rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_addressing.htm).
-   A [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_parameter.htm) variable.

Serialization   

In serializations, only variables (or parameters) are initialized. If a node is specified with ref or if the current node is specified implicitly, tt:clear is ignored in serializations.

Deserialization   

In deserializations, the specified nodes or variables (or parameters) are initialized.

Example

The transformation DEMO\_ST\_CLEAR below demonstrates an initialization:

<?sap.transform simple?>
<tt:transform
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