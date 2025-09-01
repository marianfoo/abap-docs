---
title: "Source Code"
description: |
  REPORT demo_string_comparison. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA length1 TYPE n LENGTH 1 VALUE '4'. cl_demo_input=>add_field( CHANGING field = length1 ). DATA length2 TYPE n LENGTH 1 VALUE '6'. cl_demo_input=>requ
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_comparison_abexa.htm"
abapFile: "abenstring_comparison_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenstring", "comparison", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_operands_dobj.htm) →  [rel\_exp - Comparison Type of Character-Like Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_character.htm) → 

rel\_exp - Comparing Text Strings of Different Length

This example demonstrates how text strings of different lengths are compared.

Source Code

REPORT demo\_string\_comparison.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA length1 TYPE n LENGTH 1 VALUE '4'.
    cl\_demo\_input=>add\_field( CHANGING field = length1 ).
    DATA length2 TYPE n LENGTH 1 VALUE '6'.
    cl\_demo\_input=>request( CHANGING field = length2 ).
    DATA(len1) = CONV i( length1 ).
    DATA(len2) = CONV i( length2 ).
    IF len1 = 0 OR len2 = 0.
      cl\_demo\_output=>display( 'Try again!' ).
      RETURN.
    ENDIF.
    DATA(text1) = REDUCE string( INIT str = \`\`
                                 FOR i = 0 UNTIL i >= len1
                                 NEXT str &&= \`X\`  ).
    DATA(text2) = REDUCE string( INIT str = \`\`
                                 FOR i = 0 UNTIL i >= len2
                                 NEXT str &&= \`X\`  ).
    cl\_demo\_output=>display(
      COND #( WHEN text1 < text2 THEN |{ text1 } < { text2 }|
              WHEN text1 > text2 THEN |{ text1 } > { text2 }|
                                 ELSE |{ text1 } = { text2 }| ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Two text strings text1 and text2 are filled using their respective input length with the character X and then compared. The shorter text string is smaller than the longer one.