  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm) →  [iXML - Access to DOM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_dom_access.htm) →  [iXML - DOM Reads](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_dom_access_read.htm) → 

iXML - Reads Using Iterators

The section [Direct Read](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_dom_direct_read.htm) demonstrates how to access the DOM nodes directly using the following objects:

-   Objects with the IF\_IXML\_NODE interface for individual nodes

-   Objects with the IF\_IXML\_NODE\_LIST interface for lists of subnodes

-   Objects with the IF\_IXML\_NODE\_COLLECTION interface for lists of element names

-   Objects with the IF\_IXML\_NAMED\_NODE\_MAP interface for lists of attributes

An iterator can be created for each of these objects. This iterator makes it possible to iterate the DOM elements represented by the objects. The interface of every iterator provides the same options for accessing the objects iterated by the iterator.

-   [Iterator for Nodes](#@@ITOC@@ABENABAP_IXML_LIB_DOM_ITERAT_READ_1)

-   [Iterators for Lists](#@@ITOC@@ABENABAP_IXML_LIB_DOM_ITERAT_READ_2)

Hint

The iterators shown here are forward iterators that iterate from left to right or from top to bottom. The interfaces of the objects also make it possible to create backward iterators, which iterate from right to left or from bottom to top.

Iterator for Nodes

A reference variable document with the type IF\_IXML\_NODE, which points to an XML document, can be used to create an iterator for all the nodes of the document as follows:

DATA(iterator) = document->create\_iterator( *\[*depth*\]* ).

The static type of the reference variable iterator is then IF\_IXML\_NODE\_ITERATOR. This points to the iterator whose methods can iterate the nodes. The optional input parameter depth can be used to specify the depth of the nodes in the tree structure used for the iteration. To create an iterator for iterating the subnodes of a specific node, it is possible to use a reference variable node of type IF\_IXML\_NODE, instead of document. This reference variable point to a node object.

Iterator nodes can be iterated using the following method:

DATA(node) = iterator->get\_next( ).

The static type of the reference variable node is then IF\_IXML\_NODE and it points to the object of the current iterator node. If no more nodes exist, node is initial.

Hints

-   Unlike a node [direct read](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_dom_direct_read.htm), which can be restricted to the elements of the represented XML data, an iterator captures all nodes in an XML document, including nodes that only contain structural information. Use the method GET\_TYPE of interface IF\_IXML\_NODE to read the node type and compare it to constants of this interface. [Filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_dom_filter_read.htm) or [Down Casts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_down_casts.htm) provide further options for only selecting specified nodes.

-   Besides the iterator for subnodes shown here, an inline iterator is also available (with the interface IF\_IXML\_INLINE\_ITERATOR) for iterating neighboring nodes.

Executable Example

[Iterator for Nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_node_iterator_abexa.htm)

Iterators for Lists

An iterator can be created for all of the lists under [Direct Read](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_dom_direct_read.htm)

-   Node list (IF\_IXML\_NODE\_LIST)

-   Element list (IF\_IXML\_NODE\_COLLECTION)

-   Attribute list (IF\_IXML\_NAMED\_NODE\_MAP)

:

DATA(iterator) = nodes*|*elements*|*attributes->create\_iterator( ).

In all three cases, the reference variable has the static type IF\_IXML\_NODE\_ITERATOR and points to an iterator for the elements of the relevant list. This iterator can be used as shown above.

Hint

As the lists only contain the required elements, it is usually not necessary to query the type (unlike when iterating the entire document or subtrees).

Executable Examples

-   [Iterator for Node List](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_node_list_iterator_abexa.htm)

-   [Iterator for Element List](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_name_list_iterator_abexa.htm)

-   [Iterator for Attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_attributes_iterator_abexa.htm)