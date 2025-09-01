---
title: "Note"
description: |
  For more information (about further filters and possible parameters), see the interface IF_IXML_NODE. Executable Example Iterator Filters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenixml_filter_iterator_abexa.htm)
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib_dom_filter_read.htm"
abapFile: "abenabap_ixml_lib_dom_filter_read.htm"
keywords: ["do", "if", "method", "class", "data", "abenabap", "ixml", "lib", "dom", "filter", "read"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib.htm) →  [iXML Library - Access to DOM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib_dom_access.htm) →  [iXML Library - DOM Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib_dom_access_read.htm) → 

iXML Library, Reads Using Filters

When a DOM is read using [iterators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib_dom_iterat_read.htm), all nodes of a document or subtree or all elements of a list are read by default. A filter can be associated with an iterator to restrict it to specific nodes or elements only. Filters can be created using factory methods from the interface IF\_IXML\_NODE. For example, a condition can be set for the name of an element as follows, if document has the type IF\_IXML\_DOCUMENT and points to an XML:

DATA(filter) = document->create\_filter\_name\_ns( name = ... ).

The static type of the reference variable filter is then IF\_IXML\_NODE\_FILTER and the variable points to a filter object that can be passed to an iterator as follows:

DATA(iterator) = document->create\_iterator( ).
...
iterator->set\_filter( filter ).

or in short

DATA(iterator) = document->create\_iterator\_filtered( filter ).

The [iterator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib_dom_iterat_read.htm) then only reads elements of the name passed to the filter. The factory methods of the interface for nodes can be used to create the following filters (among others):

-   CREATE\_FILTER\_NODE\_TYPE: Condition for the type of a node

-   CREATE\_FILTER\_NAME\_NS: Condition for the name of a node

-   CREATE\_FILTER\_ATTRIBUTE\_NS: Condition for the name and value of an attribute

Other factory methods are available for combining multiple filters and creating special filters that implement Boolean operators:

-   CREATE\_FILTER\_AND: "and" join

-   CREATE\_FILTER\_OR: "or" join

-   CREATE\_FILTER\_NOT: Negation

References to existing filter objects can be passed to the input parameters of these factory methods. A new filter is created that implements the Boolean operator on the filters in question.

Note

For more information (about further filters and possible parameters), see the interface IF\_IXML\_NODE.

Executable Example

[Iterator Filters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenixml_filter_iterator_abexa.htm)