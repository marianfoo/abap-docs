  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) →  [string\_tmpl - Examples](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

string\_tmpl - asXML Format

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
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program takes data objects of different types and creates the asXML formats shown under [Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)). For clarification, the string template is shown in a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry").