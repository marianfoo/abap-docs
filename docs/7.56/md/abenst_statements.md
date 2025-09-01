  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) → 

ST - Overview of Statements

ST programs are XML data consisting of literal elements and ST statements. ST statements can be distinguished from literal elements (XML elements, attributes, and text) by their namespace "http://www.sap.com/transformation-templates", for which the prefix tt is used by convention.

During serialization and deserialization, literal elements are copied unchanged into a target document or consumed from a source document and compared. ST statements are executed according to their semantics.

Data is addressed using [tree structures](javascript:call_link\('abenst_trees.htm'\)) whose root nodes (data roots) are bound to ABAP data objects. The root nodes can always be addressed directly using their names. In addition, a current node can be defined, which can be addressed using $ref.

ST statement

Meaning

<tt:apply ...>

[Calls](javascript:call_link\('abenst_tt_apply.htm'\)) a subtemplate

<tt:assign ...>

[Assigns](javascript:call_link\('abenst_tt_assign.htm'\)) a value to data

<tt:attribute ...>

[Non-literal attribute](javascript:call_link\('abenst_tt_attribute.htm'\))

<tt:call ...>

[Calls](javascript:call_link\('abenst_tt_call.htm'\)) an ST program

<tt:call-method ...>

Calls a [static method](javascript:call_link\('abenst_tt_call-method_static.htm'\)) or an [instance method](javascript:call_link\('abenst_tt_call-method_instance.htm'\)) in ABAP Objects

<tt:cast ...>

[Down casts](javascript:call_link\('abenst_tt_cast.htm'\)) reference variables

<tt:clear ...>

[Initializes](javascript:call_link\('abenst_tt_clear.htm'\)) data

<tt:cond ...>

[Conditional transformation](javascript:call_link\('abenst_tt_cond.htm'\))

<tt:cond-var ...>

[Condition for variables](javascript:call_link\('abenst_tt_cond-var.htm'\))

<tt:context ...>

[Context for local data roots](javascript:call_link\('abenst_tt_template_sub.htm'\)) in subtemplates

<tt:copy ...>

[Transformation](javascript:call_link\('abenst_tt_copy.htm'\)) to and from asXML

<tt:create-object ...>

[Creates objects](javascript:call_link\('abenst_tt_create.htm'\)) in ABAP Objects

<tt:d-cond ...>

[Conditional transformation](javascript:call_link\('abenst_tt_cond.htm'\)) for deserializations

<tt:deserialize ...>

Defines the [transformation direction](javascript:call_link\('abenst_tt_serialize_deserialize.htm'\))

<tt:empty ...>

[Empty pattern](javascript:call_link\('abenst_tt_empty.htm'\))

<... tt:extensible="..."...>

[Extensibility](javascript:call_link\('abenst_tt_extensible.htm'\)) of literal XML elements

<tt:front ...>

[Initial part](javascript:call_link\('abenst_tt_type.htm'\)) of a structured type

<tt:group ...>

[Groups](javascript:call_link\('abenst_tt_group.htm'\)) conditional transformations

<tt:include ...>

[Includes](javascript:call_link\('abenst_tt_include.htm'\)) an ST program

<... tt:lax="..." ...>

[Name comparison](javascript:call_link\('abenst_tt_lax.htm'\)) of literal XML elements

<tt:loop ...>

[Loops](javascript:call_link\('abenst_tt_loop.htm'\)) across internal tables

<tt:namespace ...>

Defines a [namespace](javascript:call_link\('abenst_tt_namespace.htm'\))

<tt:node ...>

[Component](javascript:call_link\('abenst_tt_type.htm'\)) of a type

<tt:parameter ...>

Declares [parameters](javascript:call_link\('abenst_tt_parameter.htm'\))

<tt:read ...>

[Reads](javascript:call_link\('abenst_tt_read.htm'\)) a variable from XML

<tt:read-write ...>

[Short form](javascript:call_link\('abenst_tt_read_write.htm'\)) of <tt:read ...> and <tt:write ...>

<tt:ref ...>

Sets the [current node](javascript:call_link\('abenst_tt_ref.htm'\))

<... tt:ref="..."...>

Sets the [current node](javascript:call_link\('abenst_tt_ref.htm'\)) for a literal XML element

<tt:root ...>

Declares a [data root](javascript:call_link\('abenst_tt_root.htm'\))

<tt:serialize ...>

Defines the [transformation direction](javascript:call_link\('abenst_tt_serialize_deserialize.htm'\))

<tt:s-cond ...>

[Conditional transformation](javascript:call_link\('abenst_tt_cond.htm'\)) for serializations

<tt:skip ...>

[Skips XML](javascript:call_link\('abenst_tt_skip.htm'\)) elements in deserializations

<tt:switch ...>

[](javascript:call_link\('abenst_tt_switch.htm'\))Defines a [case distinction](javascript:call_link\('abenst_tt_switch.htm'\)) between conditional transformations.

<tt:switch-var ...>

[Case distinctions](javascript:call_link\('abenst_tt_switch-var.htm'\)) for variables

<tt:template ...>

[Main template](javascript:call_link\('abenst_tt_template_main.htm'\)) or [subtemplates](javascript:call_link\('abenst_tt_template_sub.htm'\))

<tt:text ...>

[Literal text](javascript:call_link\('abenst_tt_text.htm'\))

<tt:transform ...>

[Root element](javascript:call_link\('abenst_tt_transform.htm'\)) of an ST program

<tt:type ...>

[Type definition](javascript:call_link\('abenst_tt_type.htm'\))

<tt:value ...>

Transforms [elementary data objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) and [structures](javascript:call_link\('abenst_tt_value_structure.htm'\))

<... tt:value-ref ="..." ...>

[Short form](javascript:call_link\('abenst_tt_value_elementary.htm'\)) of the transformation of elementary data objects

<tt:variable ...>

Declares a [variable](javascript:call_link\('abenst_tt_variable.htm'\))

<tt:with-parameter ...>

Passes values to [ST programs](javascript:call_link\('abenst_tt_call.htm'\)), [subtemplates](javascript:call_link\('abenst_tt_apply.htm'\)), and [ABAP methods](javascript:call_link\('abenst_tt_call-method_static.htm'\))

<tt:with-root ...>

Passes data nodes to [ST programs](javascript:call_link\('abenst_tt_call.htm'\)) and [subtemplates](javascript:call_link\('abenst_tt_apply.htm'\))

<tt:write ...>

[Writes](javascript:call_link\('abenst_tt_write.htm'\)) a variable to XML