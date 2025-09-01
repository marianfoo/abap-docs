  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) →  [rel\_exp - Comparison Type of Elementary Data Objects](javascript:call_link\('abenlogexp_rules_operands_dobj.htm'\)) →  [rel\_exp - Comparison Type of Character-Like Data Objects](javascript:call_link\('abenlogexp_character.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Comparing Text Strings of Different Length, ABENSTRING_COMPARISON_ABEXA, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
    FINAL(len1) = CONV i( length1 ).
    FINAL(len2) = CONV i( length2 ).
    IF len1 = 0 OR len2 = 0.
      cl\_demo\_output=>display( 'Try again!' ).
      RETURN.
    ENDIF.
    FINAL(text1) = REDUCE string( INIT str = \`\`
                                 FOR i = 0 UNTIL i >= len1
                                 NEXT str &&= \`X\`  ).
    FINAL(text2) = REDUCE string( INIT str = \`\`
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