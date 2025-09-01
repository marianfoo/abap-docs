  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_flow_control.htm) →  [ST - tt:cond, Conditional Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20using%2C%20Preconditions%2C%20ABENST_USING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - using, Preconditions

Syntax

... using="..." ...

Effect

The following preconditions can be specified for the content of the attribute using of an element [tt:cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm):

Precondition

Meaning

exist(node)

Met if an ABAP data object is bound to the node.

type-...(node)

Met if an ABAP data object of type ... is bound to the node

Each [built-in ABAP type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") has a precondition type-... where the data type is specified in uppercase letters (see examples). The operand node can be a data node, which must be specified in a [special form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_addressing_nodes_in_cond.htm).

A single precondition can be specified as a comma-separated list of multiple of the above preconditions. A precondition like this is met is met if all preconditions in the list are met. Within the list, every data node may appear only once.

Example

The element X that is defined in DEMO\_ST\_USING1 is respected in serializations only if the ABAP data object bound to ROOT is of type c.

<?sap.transform simple?>
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

Instead of type-C(ref('ROOT')), type-C(ROOT) is of course also possible here.

Example

The element X that is defined in DEMO\_ST\_USING2 is not ignored in serializations only if the ABAP data object bound to ROOT1 is of type int8 and the ABAP data object bound to ROOT2 is of type d.

<?sap.transform simple?>
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