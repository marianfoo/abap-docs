  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Structures](javascript:call_link\('abenconversion_struc.htm'\)) → 

Conversion Between Flat Structures

When flat structures are converted, the [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") of the structures must be respected. The following rules apply when converting a flat structure to another flat structure.

-   When assigning structures with the same fragment view, the structure is assigned without being converted.
    

-   When assigning structures of different lengths where the length of the [fragment view](javascript:call_link\('abenunicode_fragment_view.htm'\)) exactly matches the shorter structure, the assignment is made at the length of the shorter structure without conversion.

-   If the target structure is longer than the source structure, the components of the target structure located after the shared fragments are filled with type-dependent [initial values](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") and any alignment gaps are set to hexadecimal 0.

-   If the target structure is shorter than the source structure, the components of the source structure located after the shared fragments are cut off.
    

-   When assigning structures of different lengths whose fragment views match until the second last fragment in the shorter structure, and in which the next fragment is character-like in one and byte-like in the other, the parts in which the fragments are the same are assigned without conversion. The characters in the next fragment in the source structure are assigned to the corresponding fragment in the target structure without conversion and left justified. If this fragment in the target structure is larger than that in the source structure, the right hand side is filled with blanks or with hexadecimal 0, depending on the data type. If it is shorter, the objects are cut off on the right. The remaining components after this fragment are either cut off or padded with type-dependent initial values.

No conversion rule is defined for any other cases, so that assignment is not possible.

Notes

-   If, in the affected structures, there are components of data type p, these components form individual fragments for which the length is significant but not the number of decimal places. When assigning such structures, the value of the source components of type p is cast to the number of decimal places of the target components, and the decimal point may shift. This means that the result for a component of this type can differ from the result of a direct assignment between the components.

-   If a component of a flat structure has an [enumerating type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), this is an independent fragment of the fragment view, regardless of its [basis type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"), and must be present at the same location and with the same type in the case of assignments between structures in the source and target structure.

-   If a syntax error occurs due to an invalid assignment between flat structures, the fragment views can be displayed for the corresponding structures when displaying the syntax error in ABAP Editor by choosing the pushbutton with the information icon.

Examples

Assigning struc1 to struc2 and vice versa is not allowed because the fragment views are not the same (unlike struc2-b, struc1-x only fills one byte).

DATA:                        DATA:
  BEGIN OF struc1,             BEGIN OF struc2,
    a TYPE c LENGTH 1,           a TYPE c LENGTH 1,
    x TYPE x LENGTH 1,           b TYPE c LENGTH 1,
  END OF struc1.               END OF struc2.

Assignments of struc3 to struc4 and vice versa are allowed because the fragment view of the shorter structure struc3 is the same as the fragment view in the first part of the longer structure struc4.

DATA:                        DATA:
  BEGIN OF struc3,             BEGIN OF struc4,
    a TYPE c LENGTH 2,           a TYPE c LENGTH 8,
    n TYPE n LENGTH 6,           i TYPE i,
    i TYPE i,                    d TYPE decfloat16,
  END OF struc3.               END OF struc4.

Assignments of struc5 to struc6 and vice versa are also not allowed because the fragment views in the two structures do not match due to the alignment gaps before struc5-b and before struc6-struc0-b.

DATA:                        DATA:
  BEGIN OF struc5,             BEGIN OF struc6,
    a TYPE x LENGTH 1,           a TYPE x LENGTH 1,
    b TYPE x LENGTH 1,           BEGIN OF struc0,
    c TYPE c LENGTH 1,             b TYPE x LENGTH 1,
  END OF struc5.                   c TYPE c LENGTH 1,
                                 END OF struc0,
                               END OF struc6.

An assignment of struc7 to struc8 and vice versa is possible because the fragment view is the same until the second last fragment p in the shorter structure struc7:

DATA:                        DATA:
  BEGIN OF struc7,             BEGIN OF struc8,
    a TYPE i,                    a    TYPE i,
    p TYPE p LENGTH 8,           p TYPE p LENGTH 8,
    c TYPE c LENGTH 1,           c TYPE c LENGTH 5,
  END OF struc7.                 o TYPE p LENGTH 8,
                               END OF struc8.

A mapping from struc9 to struc10 (and in the reverse direction) is possible because the fragment view matches despite the differences in decimal places for the type p. If struc9-a has the value 999, then struc10-a has the value 0.999 after a mapping from struc9 to struc10. A direct mapping from struc9-a to struc10-a, on the other hand, raises an exception of the class CX\_SY\_CONVERSION\_OVERFLOW.

DATA:                        DATA:
  BEGIN OF struc9             BEGIN OF struc10,
    a TYPE p LENGTH 2            a TYPE p LENGTH 2
             DECIMALS 0,                  DECIMALS 3,
  END OF struc9.              END OF struc10.

Continue
![Example](exa.gif "Example") [Conversion Rules for Structures](javascript:call_link\('abendata_conv_str_abexa.htm'\))