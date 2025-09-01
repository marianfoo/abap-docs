  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) → 

ST - Overview of Statements

ST programs are XML data consisting of literal elements and ST statements. ST statements can be distinguished from literal elements (XML elements, attributes, and text) by their namespace "http://www.sap.com/transformation-templates", for which the prefix tt is used by convention.

During serialization and deserialization, literal elements are copied unchanged into a target document or consumed from a source document and compared. ST statements are executed according to their semantics.

Data is addressed using [tree structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_trees.htm) whose root nodes (data roots) are bound to ABAP data objects. The root nodes can always be addressed directly using their names. In addition, a current node can be defined, which can be addressed using $ref.

ST statement

Meaning

<tt:apply ...>

[Calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_apply.htm) a subtemplate

<tt:assign ...>

[Assigns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_assign.htm) a value to data

<tt:attribute ...>

[Non-literal attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_attribute.htm)

<tt:call ...>

[Calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_call.htm) an ST program

<tt:call-method ...>

Calls a [static method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_call-method_static.htm) or an [instance method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_call-method_instance.htm) in ABAP Objects

<tt:cast ...>

[Down casts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cast.htm) reference variables

<tt:clear ...>

[Initializes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_clear.htm) data

<tt:cond ...>

[Conditional transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm)

<tt:cond-var ...>

[Condition for variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond-var.htm)

<tt:context ...>

[Context for local data roots](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_template_sub.htm) in subtemplates

<tt:copy ...>

[Transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_copy.htm) to and from asXML

<tt:create-object ...>

[Creates objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_create.htm) in ABAP Objects

<tt:d-cond ...>

[Conditional transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm) for deserializations

<tt:deserialize ...>

Defines the [transformation direction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_serialize_deserialize.htm)

<tt:empty ...>

[Empty pattern](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_empty.htm)

<... tt:extensible="..."...>

[Extensibility](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_extensible.htm) of literal XML elements

<tt:front ...>

[Initial part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_type.htm) of a structured type

<tt:group ...>

[Groups](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_group.htm) conditional transformations

<tt:include ...>

[Includes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_include.htm) an ST program

<... tt:lax="..." ...>

[Name comparison](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_lax.htm) of literal XML elements

<tt:loop ...>

[Loops](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_loop.htm) across internal tables

<tt:namespace ...>

Defines a [namespace](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_namespace.htm)

<tt:node ...>

[Component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_type.htm) of a type

<tt:parameter ...>

Declares [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_parameter.htm)

<tt:read ...>

[Reads](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_read.htm) a variable from XML

<tt:read-write ...>

[Short form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_read_write.htm) of <tt:read ...> and <tt:write ...>

<tt:ref ...>

Sets the [current node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_ref.htm)

<... tt:ref="..."...>

Sets the [current node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_ref.htm) for a literal XML element

<tt:root ...>

Declares a [data root](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_root.htm)

<tt:serialize ...>

Defines the [transformation direction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_serialize_deserialize.htm)

<tt:s-cond ...>

[Conditional transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm) for serializations

<tt:skip ...>

[Skips XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_skip.htm) elements in deserializations

<tt:switch ...>

[](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_switch.htm)Defines a [case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_switch.htm) between conditional transformations.

<tt:switch-var ...>

[Case distinctions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_switch-var.htm) for variables

<tt:template ...>

[Main template](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_template_main.htm) or [subtemplates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_template_sub.htm)

<tt:text ...>

[Literal text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_text.htm)

<tt:transform ...>

[Root element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_transform.htm) of an ST program

<tt:type ...>

[Type definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_type.htm)

<tt:value ...>

Transforms [elementary data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_value_elementary.htm) and [structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_value_structure.htm)

<... tt:value-ref ="..." ...>

[Short form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_value_elementary.htm) of the transformation of elementary data objects

<tt:variable ...>

Declares a [variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_variable.htm)

<tt:with-parameter ...>

Passes values to [ST programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_call.htm), [subtemplates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_apply.htm), and [ABAP methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_call-method_static.htm)

<tt:with-root ...>

Passes data nodes to [ST programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_call.htm) and [subtemplates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_apply.htm)

<tt:write ...>

[Writes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_write.htm) a variable to XML