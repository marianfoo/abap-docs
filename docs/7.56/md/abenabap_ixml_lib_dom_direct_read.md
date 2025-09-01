---
title: "Access by Root Element"
description: |
  The root element of the DOM, which represents the root element of the represented XML data, can be used as the initial node. The root element of an existing XML document that points to a reference variable document can be accessed as follows: DATA(element) = document->get_root_element( ). The stat
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_direct_read.htm"
abapFile: "abenabap_ixml_lib_dom_direct_read.htm"
keywords: ["do", "if", "method", "class", "data", "abenabap", "ixml", "lib", "dom", "direct", "read"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) →  [iXML - Access to DOM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_access.htm) →  [iXML - DOM Reads](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_access_read.htm) → 

iXML - Direct Reads

Direct reads can be used to create references to the node objects in DOM. These references can then be used to access methods and to get the properties of the nodes. Here, any node can be used as the starting point for access to its subnodes.

-   [Access by Root Element](#abenabap-ixml-lib-dom-direct-read-1-------access-to-subnodes---@ITOC@@ABENABAP_IXML_LIB_DOM_DIRECT_READ_2)
    -   [Access to adjacent subnodes](#abenabap-ixml-lib-dom-direct-read-3-----------access-using-node-lists---@ITOC@@ABENABAP_IXML_LIB_DOM_DIRECT_READ_4)
-   [Access Using Element Names](#abenabap-ixml-lib-dom-direct-read-5-------access-to-attributes---@ITOC@@ABENABAP_IXML_LIB_DOM_DIRECT_READ_6)
    -   [Attribute access using lists](#abenabap-ixml-lib-dom-direct-read-7-----------short-forms-for-attribute-access---@ITOC@@ABENABAP_IXML_LIB_DOM_DIRECT_READ_8)

Access by Root Element

The root element of the DOM, which represents the root element of the represented XML data, can be used as the initial node. The root element of an existing XML document that points to a reference variable document can be accessed as follows:

DATA(element) = document->get\_root\_element( ).

The static type of the reference variable element is then IF\_IXML\_ELEMENT and points to the node object of the root element. The subnodes are now accessed from this node object.

Access to Subnodes

There are two basic methods of accessing subnodes:

Access to adjacent subnodes

The method GET\_FIRST\_CHILD of the interface IF\_IXML\_ELEMENT returns the first subnode for an element:

DATA(child) = element->get\_first\_child( ).

The static type of the reference variable child is then IF\_IXML\_NODE and it points to the node object of the first subnode. If there are no subnodes, child is initial.

The method GET\_NEXT of the interface IF\_IXML\_NODE returns the next adjacent node and can be used to read all subnodes in sequence:

DATA(next\_child) = child->get\_next( ).

The static type of the reference variable next\_child is also IF\_IXML\_NODE. If no adjacent node is found, child\_next is initial.

Executable Example

[Iteration Using Subnodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_child_nodes_abexa.htm)

Access using node lists

The method GET\_CHILDREN of the interface IF\_IXML\_ELEMENT returns a list of all subnodes for any element:

DATA(children) = element->get\_children( ).

The static type of the reference variable children is then IF\_IXML\_NODE\_LIST and points to an object containing an indexed list of subnodes. These subnodes can be accessed as follows:

DATA(child) = nodes->get\_item( index ).

The static type of the reference variable child is then IF\_IXML\_NODE and it points to the subnode specified by the number index, where the count begins at zero.

Hint

In sequential access to adjacent nodes, access to the node list is also optimized.

Executable Example

[Access using node lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_node_list_abexa.htm)

Access Using Element Names

If the name is known of an element of an existing XML document pointed to by a reference variable document, it can be searched for as follows:

DATA(element) = document->find\_from\_name\_ns( name = ... ).

The static type of the reference variable element is then IF\_IXML\_ELEMENT and it points to the node object that represents the element being searched for. If the element is not found, element is initial. The optional parameter DEPTH of the method FIND\_FROM\_NAME\_NS enables the search depth to be restricted.

A further method of the document interface can be used to collect all elements of a name. This method also enables the search depth to be restricted:

DATA(elements) = document->get\_elements\_by\_tag\_name\_ns( name = ... ).

The static type of the reference variable elements is then IF\_IXML\_NODE\_COLLECTION and points to an object containing an indexed list of the found elements. These subnodes can be accessed as follows:

DATA(node) = item->get\_item( index ).

The static type of the reference variable node is then IF\_IXML\_NODE and it points to the node specified by the number index, where the count begins at zero.

Executable Example

[Access Using Names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_node_names_abexa.htm)

Access to Attributes

There are various methods for accessing the attributes of elements in DOM.

Attribute access using lists

A reference variable node with the type IF\_IXML\_NODE, which points to a node object, can be used to create a list of the attributes of the node as follows:

DATA(attributes) = node->get\_attributes( ).

The static type of the reference variable attributes is then IF\_IXML\_NAMED\_NODE\_MAP and points to an object containing an indexed list of the attributes. These attributes can be accessed as follows:

DATA(attribute) = attributes->get\_item( index ).

The static type of the reference variable attribute is then IF\_IXML\_ATTRIBUTE and it points to the object specified by the number index, where the count begins at zero.

Instead of the index, the lists of attributes can also be read using the attribute name:

DATA(attribute) = attributes->get\_named\_item\_ns( name = ... ).

attribute then points to the object of attribute specified by the name or is initial.

Short forms for attribute access

Instead of first creating a list of the attributes, they can also be read directly from an element, using their names. A reference variable element with the type IF\_IXML\_ELEMENT, which points to an element, can be used to read an attribute as follows:

DATA(attribute) = element->get\_attribute\_node\_ns( name = ... ).

The static type of the reference variable attribute is then IF\_IXML\_ATTRIBUTE and it points to the object of the attribute specified by the name or is initial.

It is also possible to write only the value of the attribute to a text string directly:

DATA(value) = element->get\_attribute\_ns( name = ... ).

The type of value is then string and contains the value of the attribute or is initial.

Hint

Before the short forms with reference variables with the type IF\_IXML\_NODE can be executed, a down cast must be performed to the type IF\_IXML\_ELEMENT, because these methods are only contained in this interface.

Executable Example

[Access to Attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_attributes_abexa.htm)