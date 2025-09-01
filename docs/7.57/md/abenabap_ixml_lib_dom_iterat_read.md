  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Access to DOM](javascript:call_link\('abenabap_ixml_lib_dom_access.htm'\)) →  [iXML - DOM Reads](javascript:call_link\('abenabap_ixml_lib_dom_access_read.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Reads Using Iterators, ABENABAP_IXML_LIB_DOM_ITERAT_READ, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

iXML - Reads Using Iterators

The section [Direct Read](javascript:call_link\('abenabap_ixml_lib_dom_direct_read.htm'\)) demonstrates how to access the DOM nodes directly using the following objects:

-   Objects with the IF\_IXML\_NODE interface for individual nodes
-   Objects with the IF\_IXML\_NODE\_LIST interface for lists of subnodes
-   Objects with the IF\_IXML\_NODE\_COLLECTION interface for lists of element names
-   Objects with the IF\_IXML\_NAMED\_NODE\_MAP interface for lists of attributes

An iterator can be created for each of these objects. This iterator makes it possible to iterate using the DOM elements represented by the objects. The interface of every iterator provides the same options for accessing the objects iterated by the iterator.

-   [Iterator for Nodes](#@@ITOC@@ABENABAP_IXML_LIB_DOM_ITERAT_READ_1)
-   [Iterators for Lists](#@@ITOC@@ABENABAP_IXML_LIB_DOM_ITERAT_READ_2)

Hint

The iterators shown here are forward iterators that iterate from left to right or from top to bottom. The interfaces of the objects also make it possible to create backward iterators, which iterate from right to left or from bottom to top.

Iterator for Nodes   

A reference variable document with the type IF\_IXML\_NODE, which points to an XML document, can be used to create an iterator for all the nodes of the document as follows:

DATA(iterator) = document->create\_iterator( *\[*depth*\]* ).

The static type of the reference variable iterator is then IF\_IXML\_NODE\_ITERATOR and it points to the iterator whose methods can iterate using the nodes. The optional input parameter depth can be used to specify the depth of the nodes in the tree structure that are to be used for the iteration. To create an iterator for iterating the subnodes of a specific node, it is possible to use a reference variable node of type IF\_IXML\_NODE, instead of document. This reference variable points to a node object.

Iterator nodes can be iterated using the following method:

DATA(node) = iterator->get\_next( ).

The static type of the reference variable node is then IF\_IXML\_NODE and it points to the object of the current iterator node. If no more nodes exist, node is initial.

Hints

-   Unlike a node [direct read](javascript:call_link\('abenabap_ixml_lib_dom_direct_read.htm'\)), which can be restricted to the elements of the represented XML data, an iterator captures all nodes in an XML document, including nodes that only contain structural information. The method GET\_TYPE of interface IF\_IXML\_NODE should be used to read the node type and compare it to constants of this interface. [Filter](javascript:call_link\('abenabap_ixml_lib_dom_filter_read.htm'\)) or [Downcasts](javascript:call_link\('abenixml_down_casts.htm'\)) provide further options for only selecting specified nodes.
-   In addition to the iterator for subnodes shown here, an inline iterator is also available with the interface IF\_IXML\_INLINE\_ITERATOR for iterating neighboring nodes.

Executable Example

[Iterator for Nodes](javascript:call_link\('abenixml_node_iterator_abexa.htm'\))

Iterators for Lists   

An iterator can be created for all of the lists under [Direct Read](javascript:call_link\('abenabap_ixml_lib_dom_direct_read.htm'\))

-   Node list (IF\_IXML\_NODE\_LIST)
-   Element list (IF\_IXML\_NODE\_COLLECTION)
-   Attribute list (IF\_IXML\_NAMED\_NODE\_MAP)
    
    DATA(iterator) = nodes*|*elements*|*attributes->create\_iterator( ).
    

In all three cases, the reference variable has the static type IF\_IXML\_NODE\_ITERATOR and points to an iterator for the elements of the relevant list. This iterator can be used as shown above.

Hint

Since the lists only contain the required elements, it is usually not necessary to query the type, as is the case when iterating the entire document or subtrees.

Executable Examples

-   [Iterator for Node List](javascript:call_link\('abenixml_node_list_iterator_abexa.htm'\))
-   [Iterator for Element List](javascript:call_link\('abenixml_name_list_iterator_abexa.htm'\))
-   [Iterator for Attributes](javascript:call_link\('abenixml_attributes_iterator_abexa.htm'\))