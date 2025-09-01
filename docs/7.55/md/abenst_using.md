  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_flow_control.htm) →  [ST - tt:cond, Conditional Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm) → 

ST - using, Preconditions

Syntax

... using="..." ...

Effect

The following preconditions can be specified for the content of the attribute using of an element [tt:cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm):

Precondition

Meaning

exist(node)

Met if an ABAP data object is bound to the node.

type-...(node)

Met if an ABAP data object of type ... is bound to the node

Each [built-in ABAP type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") has a precondition type-... where the data type is specified in uppercase letters (see examples). The operand node can be a data node, which must be specified in a [special form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_addressing_nodes_in_cond.htm).

A single precondition can be specified as a list of more than one of the above preconditions, separated by commas. A precondition like this is met is met if all preconditions in the list are met. Within the list, every data node may appear only once.

Example

The element X is respected in serializations only if the ABAP data object bound to ROOT is of type c.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tt:s-cond using="type-C(ref('ROOT'))">
      <X>
        ...
      </X>
    </tt:s-cond>
  </tt:template>
</tt:transform>

Instead of "type-C(ref('ROOT'))", "type-C(ROOT)" is of course also possible here.

Example

The element X is not ignored in serializations only if the ABAP data object bound to ROOT1 is of type int8 and the ABAP data object bound to ROOT2 is of type d.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <tt:s-cond using="type-INT8(ROOT1), type-D(ROOT2)">
      <X>
        ...
      </X>
    </tt:s-cond>
  </tt:template>
</tt:transform>