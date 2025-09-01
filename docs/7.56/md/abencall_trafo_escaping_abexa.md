---
title: "Transformation of XML Syntax Characters"
description: |
  This example demonstrates the serialization of characters from the XML syntax using various transformations. Source Code REPORT demo_transformation_escaping. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA xml TYPE string. DATA(text
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_trafo_escaping_abexa.htm"
abapFile: "abencall_trafo_escaping_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abencall", "trafo", "escaping", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) →  [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm) →  [CALL TRANSFORMATION, Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_transformation_abexas.htm) → 

Transformation of XML Syntax Characters

This example demonstrates the serialization of characters from the XML syntax using various transformations.

Source Code

REPORT demo\_transformation\_escaping.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA xml TYPE string.
    DATA(text) = \`<>&"\`.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Text\`
      )->write( text
      )->next\_section( \`XSLT\`
      )->begin\_section( \`<xsl:output method="text" />\` ).
    CALL TRANSFORMATION demo\_escaping\_text SOURCE text = text
                                           RESULT XML xml.
    out->write( xml
      )->next\_section( \`<xsl:output method="xml" />\` ).
    CALL TRANSFORMATION demo\_escaping\_xml SOURCE text = text
                                          RESULT XML xml.
    out->write( xml
      )->next\_section( \`<xsl:output method="html" />\` ).
    CALL TRANSFORMATION demo\_escaping\_html SOURCE text = text
                                           RESULT XML xml.
    out->write( xml
      )->next\_section( \`<xsl:output method="html" />\` ).
    CALL TRANSFORMATION demo\_escaping\_js SOURCE text = text
                                         RESULT XML xml.
    out->write( xml
      )->end\_section(
      )->next\_section( \`ST\` ).
    CALL TRANSFORMATION demo\_escaping\_st SOURCE text = text
                                         RESULT XML xml.
    out->write( xml ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Four XSLT programs with different output methods are called and an ST program for serializing a text string containing the syntax characters <>&". The results are as follows:

-   No replacements are made in the results of the XSL transformation DEMO\_ESCAPING\_TEXT with the output method "text".
-   In the results of the XSL transformation DEMO\_ESCAPING\_XML with the output method "xml", the syntax characters <, \> and & are replaced by &lt;, &gt;, and &amp;.
-   In the results of the XSL transformation DEMO\_ESCAPING\_HTML with the output method "xml", the syntax characters <, \> and & are replaced by &lt;, &gt;, and &amp;.
-   In the results of the XSL transformation DEMO\_ESCAPING\_JS with the output method "html", the syntax characters are not replaced because they are part of JavaScript.

The result of the Simple Transformation DEMO\_ESCAPING\_ST matches the XSL transformation with the output method "xml". Also, the text string is output here as an attribute in which the syntax character " is replaced by &quot;.