  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Comparing Structures, ABENLOGEXP_RULES_OPERANDS_STRUC, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Comparing Structures

It is possible to compare structures with structures and structures with elementary fields:

-   [Compatible](javascript:call_link\('abencompatibility.htm'\)) structures are compared component by component, whereby any nested structures are resolved recursively. Two structures are equal if the content of their components matches. In the case of unequal structures, the first unequal component pair determines the result of the comparison.
-   It is possible to compare incompatible structures and structures with elementary fields provided that the structures concerned are [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry").
    -   Comparisons between two flat structures require that their [fragment views](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") match for the length of the shorter structure. Before the comparison, the shorter structure is padded to the length of the longer structure. Here, all character-like components are padded with blanks and all other components with their type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry"). The comparison then takes place in stages according to the fragment view.
    -   Comparisons between a flat structure and an elementary field are subject to the following rules:
        
        If the flat structure is character-like, it is handled in the comparison as an elementary field of type c.
        
        If the flat structure is not just character-like, the elementary field must have the type c and the first fragment of the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must be character-like and at least as long as the elementary field. If the elementary field is shorter than the structure, it is extended to the length of the structure before the comparison and then handled implicitly like a structure. The character-like parts of the extension are padded with blanks and all other components are padded with their type-dependent initial value.
        

Example

The following comparison is true because the structure is handled like a field of type c with length 8.

TYPES:
  BEGIN OF struc,
    year  TYPE c LENGTH 4,
    month TYPE c LENGTH 2,
    day   TYPE c LENGTH 2,
  END OF struc.
FINAL(date)  = sy-datlo.
FINAL(struc) = VALUE struc( year  = date(4)
                           month = date+4(2)
                           day   = date+6(2) ).
ASSERT date = struc.