  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm) →  [iXML - Access to DOM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_dom_access.htm) → 

iXML - DOM Writes

Writes enable an XML document to be constructed from scratch in the memory or an existing document to be modified. The most important methods used to construct a DOM create elements and add attributes to elements. These methods are declared in the interface IF\_IXML\_DOCUMENT are summarized here. Other methods are used to remove elements from a DOM, which is described in the interface documentation (see also the executable [rendering example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_render_abexa.htm)).

-   [Adding Nodes](#@@ITOC@@ABENABAP_IXML_LIB_DOM_ACCESS_WRITE_1)

-   [Adding Elements](#@@ITOC@@ABENABAP_IXML_LIB_DOM_ACCESS_WRITE_2)

-   [Adding Attributes](#@@ITOC@@ABENABAP_IXML_LIB_DOM_ACCESS_WRITE_3)

Hints

-   Writes to the DOM must be avoided during [sequential parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_event.htm), since this can produce unexpected behavior.

-   iXML documents can also be specified as an XML target for XSL transformations called using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation.htm).

-   If writes produce content of elements or attributes, the characters <, \>, &, ", and ' are transformed automatically into the associated [XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxml_oview.htm) notation.

Adding Nodes

Nodes are usually added to existing nodes as subnodes. To create an element, a reference variable document with type IF\_IXML\_DOCUMENT (pointing to an XML document) can be used to call the following method:

element = document->create\_element\_ns( name = ... ).

The static type of the reference variable element is then IF\_IXML\_ELEMENT and it points to an element called name that is not yet part of the tree structure. The following call can be used to insert the element in the tree structure:

parent->append\_child( element ).

Here, parent is a reference variable that points to an existing node object of the XML document. A reference variable, document, can be specified for parent for the document itself as an access point to an empty document.

The elements created using CREATE\_ELEMENT\_NS are empty. The following method can be used to create content:

DATA(text) = document->create\_text( ... ).

The static type of the reference variable text is then IF\_IXML\_TEXT and it points to literal content that is not yet part of the tree structure. This can be inserted in an element using the method APPEND\_CHILD.

Adding Elements

The steps above used to add content to an element

-   create element

-   add element

-   create content

-   add content

can also be performed using a single method call as follows:

element = document->create\_simple\_element\_ns(
            name   = ...
            value  = ...
            parent = ... ).

This creates the element, with the content passed to value, and appends it to the node passed to parent as a subnode. For this reason, the individual steps described above are generally only used for more specific tasks.

Adding Attributes

The following method can be used to add an attribute to an element of an XML pointed to by a reference variable, element:

element->set\_attribute\_ns( name = ... value = ... ).

This creates an attribute called name with the value passed to value.

Executable Examples

-   [Creating Nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_crea_elem_abexa.htm)

-   [Creating Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_crea_simple_elem_abexa.htm)