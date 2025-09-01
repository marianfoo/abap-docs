  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) → 

XML - Quick Overview

[XML (Extensible Markup Language)](http://www.w3.org/XML/) is used to represent data structured in different ways and is therefore suitable for communication between different applications and for the integration of data from different applications.

XML data comprises metadata (markup) in the form of tags and the actual data in the form of elements. XML does not specify a fixed set of tags.

In XML 1.0 format, tags are enclosed in angle brackets and always appear in pairs, where <tag> is the start of an element and </tag> is the end of an element.

<tag>
  ...
</tag>

A short way of writing an empty element <tag></tag> is

<tag />

Elements can be nested inside other elements to any depth. A subelement can be specified more than once within an element.

<tag>
  <tag1>
    <tag2>
      ...
    </tag2>
  </tag1>
  <tag1>
    ...
  </tag1>
  ...
</tag>

Valid XML data contains exactly one root element in which all other elements are nested.

in addition to subelements, attributes are allowed that are defined in the opening tag of an element:

<tag attribute="...">

The attributes of an element are specified as name-value pairs using the equal sign \= before the closing bracket and do not themselves contain markups. Attributes can be delimited using double quotation marks " and single quotation marks '. An attribute can only be listed once within an element. The order in which the attributes are specified is not important.

To prevent naming conflicts when XML data from different sources is processed, tags can be given namespaces. Special xmlns attributes are used to declare namespaces. A uniform resource identifier (URI) is attached to a namespace prefix ns.

<... xmlns:ns="...">

Prefixing a tag or attribute with a namespace prefix ns separated by a colon : gives the tag or element a qualified name:

<tag xmlns:ns="...">
  <ns:tag ns:attribute="...">
    ...
  </ns:tag>
  ...
</tag>

A namespace prefix must have been defined in the same document before it can be used.

Characters that have their own meaning in XML syntax must be escaped if they are listed in values of elements or attributes:

Character

XML Notation

<

&lt;

\>

&gt;

&

&amp;

" in attributes delimited by "

&quot;

' in attributes delimited by '

&apos;

XML data is valid (well-formed) if it does not violate any XML rules. Generally speaking, XML data must be well-formed before it can be processed by an XML parser.

Hints

-   The XML 1.0 format shown here, that is, character strings in angle brackets, is only one way of representing XML data, although it is the most widely used. A [W3C recommendation](http://www.w3.org/TR/xml-infoset/) states that the tree-like arrangement of data in information sets defines the XML format. Any data structured in this way can be handled as XML data. Other notations can also be used, not just XML 1.0. For example, SAP's own [Binary XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbinary_xml_glosry.htm "Glossary Entry") uses a binary format instead of character strings and does not delimit tags with angle brackets. ABAP supports further formats in addition to XML 1.0 due to the [sXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib.htm).
-   The program DEMO\_XML\_SYNTAX\_CHECK enables XML data to be entered and check its syntax.