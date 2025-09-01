  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20asXML%20Format%2C%20ABENSTRING_TEMPLATE_XSD_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - asXML Format

This example demonstrates how the asXML format is specified for embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_xsd DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_xsd IMPLEMENTATION.
  METHOD main.
    DATA result TYPE TABLE OF string.
    DATA:
      i          TYPE i            VALUE -123,
      int8       TYPE int8         VALUE -123,
      p          TYPE p DECIMALS 2 VALUE '-1.23',
      decfloat16 TYPE decfloat16   VALUE '123E+1',
      decfloat34 TYPE decfloat34   VALUE '-3.140000E+02',
      f          TYPE f            VALUE '-3.140000E+02',
      c          TYPE c LENGTH 3   VALUE ' Hi',
      string     TYPE string       VALUE \` Hello \`,
      n          TYPE n LENGTH 6   VALUE '001234',
      x          TYPE x LENGTH 3   VALUE 'ABCDEF',
      xstring    TYPE xstring      VALUE '456789AB',
      d          TYPE d            VALUE '20020204',
      t          TYPE t            VALUE '201501',
      utclong    TYPE utclong      VALUE '2010-06-14T11:16:04,6358150'.
    DEFINE add\_line.
      result = VALUE #( BASE result
        ( |{ &1 WIDTH = 14 }{
             &2 WIDTH = 30 }{
             &2 XSD  = YES }| ) ).
    END-OF-DEFINITION.
    add\_line \`i\`          i.
    add\_line \`int8\`       int8.
    add\_line \`p\`          p.
    add\_line \`decfloat16\` decfloat16.
    add\_line \`decfloat34\` decfloat34.
    add\_line \`f\`          f.
    add\_line \`\`           \`\`.
    add\_line \`c\`          c.
    add\_line \`string\`     string.
    add\_line \`n\`          n.
    add\_line \`\`           \`\`.
    add\_line \`x\`          x.
    add\_line \`xstring\`    xstring.
    add\_line \`\`           \`\`.
    add\_line \`d\`          d.
    add\_line \`t\`          t.
    add\_line \`utclong\`    utclong.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

This class takes data objects of different types and creates the asXML formats shown under [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_elementary.htm). To keep the code short, the string template is placed exceptionally in a [macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry").