---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_str_comparison DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_str_comparison IMPLEMENTATION. METHOD main. DATA length1 TYPE n LENGTH 1
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_comparison_abexa.htm"
abapFile: "abenstring_comparison_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenstring", "comparison", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands_dobj.htm) →  [rel\_exp - Comparison Type of Character-Like Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_character.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparing%20Text%20Strings%20of%20Different%20Length%2C%20ABENSTRING_COMPARISON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

rel\_exp - Comparing Text Strings of Different Length

This example demonstrates how text strings of different lengths are compared.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_comparison DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_comparison IMPLEMENTATION.
  METHOD main.
    DATA length1 TYPE n LENGTH 1 VALUE '4'.
    DATA length2 TYPE n LENGTH 1 VALUE '6'.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = length1
     )->request(   CHANGING field = length2 ).
    FINAL(len1) = CONV i( length1 ).
    FINAL(len2) = CONV i( length2 ).
    IF len1 = 0 OR len2 = 0.
      out->write( 'Try again!' ).
      RETURN.
    ENDIF.
    FINAL(text1) = REDUCE string( INIT str = \`\`
                                 FOR i = 0 UNTIL i >= len1
                                 NEXT str &&= \`X\`  ).
    FINAL(text2) = REDUCE string( INIT str = \`\`
                                 FOR i = 0 UNTIL i >= len2
                                 NEXT str &&= \`X\`  ).
    out->write(
      COND #( WHEN text1 < text2 THEN |{ text1 } < { text2 }|
              WHEN text1 > text2 THEN |{ text1 } > { text2 }|
                                 ELSE |{ text1 } = { text2 }| ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Two text strings text1 and text2 are filled using their respective input length with the character X and then compared. The shorter text string is smaller than the longer one.