---
title: "Transformation of XML Element Names"
description: |
  This example demonstrates the transformation of letters in XML element names. Source Code  Public class definition CLASS cl_demo_trafo_upper_lower DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementa
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_trafo_upper_lower_abexa.htm"
abapFile: "abencall_trafo_upper_lower_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abencall", "trafo", "upper", "lower", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation.htm) →  [CALL TRANSFORMATION, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_transformation_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transformation%20of%20XML%20Element%20Names%2C%20ABENCALL_TRAFO_UPPER_LOWER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Transformation of XML Element Names

This example demonstrates the transformation of letters in XML element names.

Source Code   

\* Public class definition
CLASS cl\_demo\_trafo\_upper\_lower DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_trafo\_upper\_lower IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF simple\_struc,
            int\_col1 TYPE i VALUE 111,
            int\_col2 TYPE i VALUE 222,
          END OF simple\_struc.
    out->begin\_section( \`Serialization\` ).
    CALL TRANSFORMATION id
                        SOURCE simple\_struc = simple\_struc
                        RESULT XML FINAL(asxml).
    out->begin\_section( \`ID\`
      )->write\_xml( asxml ).
    CALL TRANSFORMATION demo\_id\_upper\_lower
                        PARAMETERS mode = 'LO'
                        SOURCE simple\_struc = simple\_struc
                        RESULT XML FINAL(xml\_lower).
    out->next\_section( \`DEMO\_ID\_UPPER\_LOWER\`
      )->write\_xml( xml\_lower ).
    CALL TRANSFORMATION demo\_id\_from\_to\_mixed
                        PARAMETERS mode = 'TO'
                        SOURCE simple\_struc = simple\_struc
                        RESULT XML FINAL(xml\_camel).
    out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED\`
      )->write\_xml( xml\_camel ).
    out->end\_section(
      )->next\_section( \`Deserialization\` ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION id
                        SOURCE XML xml\_lower
                        RESULT simple\_struc = simple\_struc.
    out->begin\_section( \`ID for XML\_LOWER\`
      )->write( simple\_struc ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION id
                        SOURCE XML xml\_camel
                        RESULT simple\_struc = simple\_struc.
    out->next\_section( \`ID for XML\_CAMEL\`
      )->write( simple\_struc ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION demo\_id\_upper\_lower
                        SOURCE XML xml\_lower
                        RESULT simple\_struc = simple\_struc.
    out->next\_section( \`DEMO\_ID\_UPPER\_LOWER for XML\_LOWER\`
      )->write( simple\_struc ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION demo\_id\_from\_to\_mixed
                        SOURCE XML xml\_camel
                        RESULT simple\_struc = simple\_struc.
    out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED for XML\_CAMEL\`
      )->write( simple\_struc ).
  ENDMETHOD.
ENDCLASS.

Description   

In deserializations of XML data to ABAP data, the XML elements to be deserialized must generally be written in uppercase letters to be identified. This example shows ways of transforming elements written in other ways using self-written XSL transformations.

-   A structure, simple\_struc, is serialized using different XSL transformations.
    -   The [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID creates [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") with XML element names in uppercase letters.
    -   The self-written XSL transformation DEMO\_ID\_UPPER\_LOWER transforms the XML element names created by the serialization to lowercase letters, if the correct parameter passing is used.
    -   The self-written XSL transformation DEMO\_ID\_FROM\_TO\_MIXED transforms the XML element names created by the serialization to Mixed Case Style (also known as Camel Case Style), if the appropriate parameter passing is used. To do this, an ABAP method is called from the transformation and this method itself calls the built-in function [to\_mixed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_functions.htm).
-   Deserializations of the transformed asXML data with the [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID do not find the structure or the components.
-   Deserializations of the transformed asXML data with the self-written XSL transformations, on the other hand, are successful.
    -   DEMO\_ID\_UPPER\_LOWER also transforms lowercase letters to uppercase letters.
    -   DEMO\_ID\_FROM\_TO\_MIXED also calls a method for [to\_mixed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_functions.htm). This simple example transformation is not, however, symmetrical in all cases.

Instead of transformations, parsers and renderers can be used, as demonstrated in the executable example for [JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_names_to_upper_abexa.htm). The serial processing used here can be useful when dealing with large volumes of data.

The transformations used are as follows:

DEMO\_ID\_UPPER\_LOWER

<xsl:transform version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sap="http://www.sap.com/sapxsl"
  xmlns:asx="http://www.sap.com/abapxml">
  <xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'"/>
  <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
<xsl:param name="MODE" select="'UP'"/>
<xsl:template match="\*">
  <xsl:element name="{sap:if($MODE='LO',
         translate(name(),$uppercase, $smallcase ),
         translate(name(),$smallcase, $uppercase ))}">
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:element>
</xsl:template>
<xsl:template match="asx:\*">
  <xsl:copy>
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:copy>
</xsl:template>
<xsl:template match="text() | processing-instruction() | comment()">
  <xsl:copy/>
</xsl:template>
</xsl:transform>

DEMO\_ID\_FROM\_TO\_MIXED

<xsl:transform version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sap="http://www.sap.com/sapxsl"
  xmlns:asx="http://www.sap.com/abapxml"
  xmlns:f="FCT" exclude-result-prefixes="f">
<sap:external-function name="f:toCC" kind="class"
class="CL\_DEMO\_XSLT\_FROM\_TO\_MIXED" method="TO\_CAMEL\_CASE">
  <sap:argument param="IN"  type="string"/>
  <sap:result   param="OUT" type="string"/>
</sap:external-function>
<sap:external-function name="f:fromCC" kind="class"
class="CL\_DEMO\_XSLT\_FROM\_TO\_MIXED" method="FROM\_CAMEL\_CASE">
  <sap:argument param="IN"  type="string"/>
  <sap:result   param="OUT" type="string"/>
</sap:external-function>
<xsl:param name="MODE" select="'FROM'"/>
<xsl:template match="\*">
  <xsl:element name="{sap:if($MODE='TO',
                      f:toCC(name()),
                      f:fromCC(name()))}">
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:element>
</xsl:template>
<xsl:template match="asx:\*">
  <xsl:copy>
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:copy>
</xsl:template>
<xsl:template match="text() | processing-instruction() | comment()">
  <xsl:copy/>
</xsl:template>
</xsl:transform>