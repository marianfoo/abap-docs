  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Structures](javascript:call_link\('abenconversion_struc.htm'\)) → 

Conversion Between Flat Structures and Single Fields

The following rules apply when converting a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structure to a single field and vice versa:

-   If a structure is purely character-like, it is handled like a data object of the type c (casting) during conversion. The single field can have any elementary data type, except for an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").
-   If the structure is not completely character-like, the single field must have the type c and the structure must begin with a character-like [fragment](javascript:call_link\('abenunicode_fragment_view.htm'\)) that is at least as long as the single field. The assignment takes place only between this fragment and the single field. The character-like fragment of the structure is handled like a data object of the type c (casting) during assignment. If the structure is the target field, the remaining character-like fragments are filled with blanks and all other components with the type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry").

No conversion rule is defined for any other cases, and assignments are not possible.

Hint

If a syntax error occurs due to an invalid assignment between flat structures and single fields, the fragment view of the corresponding structure can be displayed by choosing the pushbutton with the information icon when the syntax error is shown in the ABAP Editor.

Example

Conversion of the character-like system field sy-abcde to a flat structure of character-like components. After this, each component contains a letter.

TYPES:
  BEGIN OF characters,
    a TYPE c LENGTH 1,
    b TYPE c LENGTH 1,
    c TYPE c LENGTH 1,
    d TYPE c LENGTH 1,
    e TYPE c LENGTH 1,
    f TYPE c LENGTH 1,
    g TYPE c LENGTH 1,
    h TYPE c LENGTH 1,
    i TYPE c LENGTH 1,
    j TYPE c LENGTH 1,
    k TYPE c LENGTH 1,
    l TYPE c LENGTH 1,
    m TYPE c LENGTH 1,
    n TYPE c LENGTH 1,
    o TYPE c LENGTH 1,
    p TYPE c LENGTH 1,
    q TYPE c LENGTH 1,
    r TYPE c LENGTH 1,
    s TYPE c LENGTH 1,
    t TYPE c LENGTH 1,
    u TYPE c LENGTH 1,
    v TYPE c LENGTH 1,
    w TYPE c LENGTH 1,
    x TYPE c LENGTH 1,
    y TYPE c LENGTH 1,
    z TYPE c LENGTH 1,
  END OF characters.
cl\_demo\_output=>display( CONV characters( sy-abcde ) ).