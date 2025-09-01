  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conversion%20Rules%20for%20Structures%2C%20ABENCONVERSION_STRUC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Conversion Rules for Structures

In assignments between [structures](javascript:call_link\('abendata_objects_structure.htm'\)), it is necessary to distinguish between [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") and [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry"):

-   Deep structures can only be assigned to each other if they are [compatible](javascript:call_link\('abencompatibility.htm'\)). Full compatibility is not required for the following deep components, and the following applies instead:
    -   For components that have a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry"), [upcasts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") but not [downcasts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are allowed.
    -   For table-like components, it is sufficient if the [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") is compatible. This means that full [compatibility](javascript:call_link\('abencompatibility.htm'\)) is not required, which also includes [table categories](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and [table keys](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry").
-   For flat structures, there are conversion rules for the following assignments between incompatible data objects:
    -   [Conversion between flat structures](javascript:call_link\('abenconversion_flat_flat.htm'\))
    -   [Conversion between flat structures and single fields](javascript:call_link\('abenconversion_flat_elementary.htm'\))

Assignments between structures and data objects that cannot be assigned to structures lead to a syntax error or the runtime error OBJECTS\_MOVE\_NOT\_SUPPORTED.

Hints

-   If [substring access](javascript:call_link\('abenoffset_length.htm'\)) is performed on a structure and the substring is shorter than the structure, the substring is handled like an operand of type c and the corresponding conversion rules apply. If the substring corresponds exactly to the length of the structure, the substring is handled like the structure itself.
-   A [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") can be used to apply the same assignment rule to flat structures as to deep structures.
-   The conversion rules for structures are designed to prevent catchable exceptions from being raised. If an assignment is allowed, it takes place.
-   The statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) or the conversion operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) can be used to assign structures component by component.

Programming Guideline

[Avoid unexpected conversion results](javascript:call_link\('abenuse_conversion_rules_guidl.htm'\) "Guideline")

Continue
[Conversion Between Flat Structures](javascript:call_link\('abenconversion_flat_flat.htm'\))
[Conversion Between Flat Structures and Single Fields](javascript:call_link\('abenconversion_flat_elementary.htm'\))
[Structure Fragment View](javascript:call_link\('abenunicode_fragment_view.htm'\))