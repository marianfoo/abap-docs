  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) → 

ST - Serialization and Deserialization

Serialization and deserialization is primarily based on following schema:

-   During serialization, the literal elements of templates are passed to the target XML data unchanged; the ST statements specified in between are executed.

-   In deserializations, the source XML data is handled as an inbound stream and compared to the template element by element. Elements (or attributes or texts) of the inbound stream with the same name are consumed if they are positioned in the ST program at the same place or if a statement is positioned there that can process the element. After the successful comparison or consumption of the element, the comparison of the subsequent element starts.

Serializations and deserializations can be divided into the following topics:

-   [Literal Template Content](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_literals.htm)

-   [Non-Literal Attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_attribute.htm)

-   [Namespaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_namespace.htm)

-   [Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_abap_values.htm)

-   [Value Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_assignments.htm)

-   [Reading and Writing Variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_variable_transformations.htm)

-   [Flow Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm)

When a simple transformation is defined, note whether the serializations and deserializations are [symmetric](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_symmetry.htm).

Hints

-   In serializations and deserializations, the XML data is processed in the form of writer streams and reader streams. When ABAP methods are called from simple transformations, you have the option of [processing these XML streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_call-method_writerreader.htm).

-   Serializations and deserializations are subject to the general restriction that the content of a [data root](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_root.htm) cannot be modified by serialization; only writes are possible to a data root in deserializations.

Continue
[ST - Literal Template Content](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_literals.htm)
[ST - tt:attribute, Non-Literal Attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_attribute.htm)
[ST - tt:namespace, Namespaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_namespace.htm)
[ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_abap_values.htm)
[ST - Value Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_assignments.htm)
[ST - Reading and Writing Variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_variable_transformations.htm)
[ST - Flow Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_flow_control.htm)
[ST - Symmetry of Serialization and Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_symmetry.htm)
[ST - Representation of ABAP Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_abap_representation.htm)