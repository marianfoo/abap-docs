  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\)) → 

ST - tt:ref, Current Node

Syntax

... *\[*tt:*\]*ref ...

Effect

Exactly one node of the tree structures of the current template can be set as the current node at any position within a Simple Transformation (statically and when the program is executed). The current node hides the data roots in the sense that a reference name does not refer to a root name, but to the component name of the current node (see [Addressing Subnodes](javascript:call_link\('abenst_addressing_subnodes.htm'\))). If the current node is defined, it is the implicit operand of many [ST statements](javascript:call_link\('abenst_statements.htm'\)), but it can also be addressed explicitly using $ref.

This section shows how to set the current node explicitly using *\[*tt:*\]*ref. In addition, the statement [tt:loop](javascript:call_link\('abenst_tt_loop.htm'\)) for transforming internal tables also sets the current node.

At positions where the current node is not set explicitly, it is undefined and cannot be addressed using $ref. In these positions, the data roots are not hidden, and they can be addressed using name.

Set the current node using a statement

<tt:ref name="node">
  ...
</tt:ref>

The statement tt:ref sets the current node to the node specified in node. Any addressable data node can be specified for node. If no valid node is specified, the current node is undefined.

The tt:ref statement can be nested. It builds a context in which the currently set node is valid. Outside the associated XML element, the current outermost node is still valid. At the top level, the current node is always undefined.

The statement tt:ref itself has no operational effect; it only affects the impact of the statements nested within it.

Hint

As a result of the [addressing rules](javascript:call_link\('abenst_addressing_nodes.htm'\)), only a subnode of the current node can be set as the new current node, unless a data root is being set.

Set the current node using an attribute

<tt:... ref="node">
  ...
</tt:...>

Many [ST statements](javascript:call_link\('abenst_statements.htm'\)) make it possible to specify the current node as the content of the attribute ref. The same rules apply to node as when setting using the statement tt:ref. If no attribute ref is specified, the statement applies to the current node of the context. The currently set node is valid only within the context of the ST statement.

Set the current node in literal XML elements

<... tt:ref="node">
  ...
</...>

In a [literal XML element](javascript:call_link\('abenst_xml_literals.htm'\)), tt:ref is a special attribute in the namespace of the ST statement and sets the current node there. The same rules apply to node as when setting using the statement tt:ref. The currently set node is valid only within the context of the XML element.

Example

The following ST program can be used to serialize a nested ABAP structure:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <X tt:ref="ROOT">
      <X1>
        <tt:value ref="COL1" />
      </X1>
      <X2>
        <tt:value ref="COL2" />
      </X2>
      <X3 tt:ref="STRUC2">
        <X1>
          <tt:value ref="COL1" />
        </X1>
        <X2>
          <tt:value ref="COL2" />
        </X2>
      </X3>
    </X>
  </tt:template>
</tt:transform>

The current node is changed as follows:

-   At the beginning of the (nameless) main template, the current node is undefined. The data root ROOT can be addressed directly using "ROOT".
-   The current node is set to the data root for the entire element X. Within X, only ".ROOT" could be used for addressing the data root directly.
-   In the context of the two subsequent tt:value statements, the current node is set to the subnodes COL1 and COL2 of ROOT. The statements serialize or deserialize the ABAP data object that is bound to the current node.
-   The current node for literal element X3, which is nested in X, is set to another subnode STRUC2 of ROOT.
-   In the context of the two subsequent tt:value statements, the current node is set to the subnodes COL1 and COL2 of STRUC2. Each time an element is exited, the current node is reset to that of the surrounding element.

Also see the example for calling a transformation in the [tt:value, Structures](javascript:call_link\('abenst_tt_value_structure.htm'\)) section.