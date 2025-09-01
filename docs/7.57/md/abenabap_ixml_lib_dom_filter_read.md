  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Access to DOM](javascript:call_link\('abenabap_ixml_lib_dom_access.htm'\)) →  [iXML - DOM Reads](javascript:call_link\('abenabap_ixml_lib_dom_access_read.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Reads Using Filters, ABENABAP_IXML_LIB_DOM_FILTER_READ, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

iXML - Reads Using Filters

When a DOM is read using [iterators](javascript:call_link\('abenabap_ixml_lib_dom_iterat_read.htm'\)), all nodes of a document or subtree or all elements of a list are read by default. A filter can be linked with an iterator to restrict it to specific nodes or elements only. Filters can be created using factory methods from the interface IF\_IXML\_NODE. For example, a condition can be set for the name of an element as follows if document has the type IF\_IXML\_DOCUMENT and points to an XML:

DATA(filter) = document->create\_filter\_name\_ns( name = ... ).

The static type of the reference variable filter is then IF\_IXML\_NODE\_FILTER and the variable points to a filter object that can be passed to an iterator as follows:

DATA(iterator) = document->create\_iterator( ).
...
iterator->set\_filter( filter ).

or in short

DATA(iterator) = document->create\_iterator\_filtered( filter ).

The [iterator](javascript:call_link\('abenabap_ixml_lib_dom_iterat_read.htm'\)) then only reads elements of the name passed to the filter. The factory methods of the interface for nodes can be used to create the following filters (among others):

-   CREATE\_FILTER\_NODE\_TYPE: Condition for the type of a node
-   CREATE\_FILTER\_NAME\_NS: Condition for the name of a node
-   CREATE\_FILTER\_ATTRIBUTE\_NS: Condition for the name and value of an attribute

Other factory methods are available for associating multiple filters and creating special filters that implement Boolean operators:

-   CREATE\_FILTER\_AND: "and" join
-   CREATE\_FILTER\_OR: "or" join
-   CREATE\_FILTER\_NOT: Negation

References to existing filter objects can be passed to the input parameters of these factory methods. A new filter is created that implements the Boolean operator on the passed filters.

Hint

For more information (further filters and possible parameters), see the interface IF\_IXML\_NODE.

Executable Example

[Iterator Filters](javascript:call_link\('abenixml_filter_iterator_abexa.htm'\))