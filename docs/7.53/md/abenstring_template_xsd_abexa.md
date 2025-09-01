---
title: "String Templates, asXML Format"
description: |
  This example demonstrates how the asXML format is specified for embedded expressions. Source Code REPORT demo_string_template_xsd. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA result TYPE TABLE OF string. DATA: i          TYPE i
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_xsd_abexa.htm"
abapFile: "abenstring_template_xsd_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenstring", "template", "xsd", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) →  [Examples of String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_abexas.htm) → 

String Templates, asXML Format

This example demonstrates how the asXML format is specified for embedded expressions.

Source Code

REPORT demo\_string\_template\_xsd.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA result TYPE TABLE OF string.
    DATA: i          TYPE i            VALUE -123,
          int8       TYPE int8         VALUE -123,
          p          TYPE p DECIMALS 2 VALUE \`-1.23\`,
          decfloat16 TYPE decfloat16   VALUE \`123E+1\`,
          decfloat34 TYPE decfloat34   VALUE \`-3.140000E+02\`,
          f          TYPE f            VALUE \`-3.140000E+02\`,
          c          TYPE c LENGTH 3   VALUE \` Hi\`,
          string     TYPE string       VALUE \` Hello \`,
          n          TYPE n LENGTH 6   VALUE \`001234\`,
          d          TYPE d            VALUE \`20020204\`,
          t          TYPE t            VALUE \`201501\`,
          x          TYPE x LENGTH 3   VALUE \`ABCDEF\`,
          xstring    TYPE xstring      VALUE \`456789AB\`.
    DEFINE write\_template.
      APPEND |{ &1 width = 14  }| &&
             |{ &2 width = 30  }| &&
             |{ &2 xsd   = yes }| TO result.
    END-OF-DEFINITION.
    FORMAT FRAMES OFF.
    write\_template \`i\`          i.
    write\_template \`int8\`       int8.
    write\_template \`p\`          p.
    write\_template \`decfloat16\` decfloat16.
    write\_template \`decfloat34\` decfloat34.
    write\_template \`f\`          f.
    APPEND \`\` TO result.
    write\_template \`c\`          c.
    write\_template \`string\`     string.
    write\_template \`n\`          n.
    write\_template \`d\`          d.
    write\_template \`t\`          t.
    APPEND \`\` TO result.
    write\_template \`x\`          x.
    write\_template \`xstring\`    xstring.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program takes data objects of different types and creates the asXML formats shown under [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_elementary.htm). To make it clearer, the string template is shown in a [macro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry").