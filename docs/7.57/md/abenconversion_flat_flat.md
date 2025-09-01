  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) →  [Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_struc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conversion Between Flat Structures, ABENCONVERSION_FLAT_FLAT, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Conversion Between Flat Structures

When flat structures are converted, the [fragment view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") of the structures must be considered. The following rules apply when converting a flat structure to another flat structure.

-   When assigning structures with the same fragment view, the structure is assigned unconverted.

-   When assigning structures of different lengths where the length of the [fragment view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_fragment_view.htm) exactly matches the length of the shorter structure, the assignment is made in the length of the shorter structure without conversion.
    -   If the target structure is longer than the source structure, the components of the target structure located behind the shared fragments are filled with type-dependent [initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_glosry.htm "Glossary Entry") and any alignment gaps are set to hexadecimal 0.
    -   If the target structure is shorter than the source structure, the components of the source structure located behind the shared fragments are cut off.

-   When assigning structures of different lengths whose fragment views match until the second last fragment of the shorter structure, and in which the next fragment is either character-like in one and byte-like in the other, the part in which the fragments are the same is assigned unconverted. The characters of the next fragment of the source structure are assigned to the corresponding fragment of the target structure without conversion and left-aligned. If this fragment in the target structure is greater than that in the source structure, the right hand side is padded with blanks or with hexadecimal 0, depending on the data type. If it is shorter, it is truncated on the right. The remaining components after this fragment are either cut off or padded with type-dependent initial values.

No conversion rule is defined for any other cases, which means that no assignment is possible.

Hints

-   If components of data type p occur in the involved structures, these components form individual fragments for which only the length is significant and not the number of decimal places. When assigning such structures, the value of the source components of type p is cast to the number of decimal places of the target components, and the decimal point may shift. This means that the result for such a component can differ from the result of a direct assignment between the components.
-   If a component of a flat structure has an [enumerated type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), this is a separate fragment of the fragment view, regardless of its [basis type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbase_type_glosry.htm "Glossary Entry"), and must exist at the same position and with the same type in assignments between these structures in the source and target structure.
-   If a syntax error occurs due to an invalid assignment between flat structures, the fragment views for the corresponding structures can be displayed when displaying the syntax error in the ABAP Editor by choosing the pushbutton with the information icon.
-   Since only [Unicode systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry") are supported in which a character is always represented by 2 bytes, the conversion rules for flat structures are less strict than in systems in which also non-Unicode systems are still supported. There, all possible alignment requirements for characters have to be considered, regardless of the actual length of a character in its character representation. When downporting programs from higher to lower releases, syntax errors might occur in the lower releases because of the stricter rules there.

Examples

Assignment of struc1 to struc2 and vice versa is not allowed because the fragment views are not the same, since unlike struc2-b, struc1-x only fills one byte.

DATA:
  BEGIN OF struc1,
    a TYPE c LENGTH 1,
    x TYPE x LENGTH 1,
  END OF struc1.
DATA:
  BEGIN OF struc2,
    a TYPE c LENGTH 1,
    b TYPE c LENGTH 1,
  END OF struc2.

Assignments of struc3 to struc4 and vice versa are allowed because the fragment view of the shorter structure struc3 is the same as the fragment view in the first part of the longer structure struc4.

DATA:
  BEGIN OF struc3,
    a TYPE c LENGTH 2,
    n TYPE n LENGTH 6,
    i TYPE i,
  END OF struc3.
DATA:
  BEGIN OF struc4,
    a TYPE c LENGTH 8,
    i TYPE i,
    d TYPE decfloat16,
  END OF struc4.

Assignments of struc5 to struc6 and vice versa are also not allowed because the fragment views in the two structures do not match due to the alignment gaps before struc5-b and before struc6-struc0-b.

DATA:
  BEGIN OF struc5,
    a TYPE x LENGTH 1,
    b TYPE x LENGTH 1,
    c TYPE c LENGTH 1,
  END OF struc5.
DATA:
  BEGIN OF struc6,
    a TYPE x LENGTH 1,
    BEGIN OF struc0,
      b TYPE x LENGTH 1,
      c TYPE c LENGTH 1,
    END OF struc0,
  END OF struc6.

Assignments of struc7 to struc8 and vice versa is possible because the fragment view is the same until the second last fragment p in the shorter structure struc7:

DATA:
  BEGIN OF struc7,
    a TYPE i,
    p TYPE p LENGTH 8,
    c TYPE c LENGTH 1,
  END OF struc7.
DATA:
  BEGIN OF struc8,
    a TYPE i,
    p TYPE p LENGTH 8,
    c TYPE c LENGTH 5,
    o TYPE p LENGTH 8,
  END OF struc8.

An assignment from struc9 to struc10 and vice versa is possible because the fragment view matches despite the differences in decimal places for the type p. If struc9-a has the value 999, then struc10-a has the value 0.999 after a mapping from struc9 to struc10. A direct mapping from struc9-a to struc10-a, on the other hand, raises an exception of the class CX\_SY\_CONVERSION\_OVERFLOW.

DATA:
  BEGIN OF struc9,
    a TYPE p LENGTH 2
             DECIMALS 0,
  END OF struc9.
DATA:
  BEGIN OF struc10,
    a TYPE p LENGTH 2
             DECIMALS 3,
  END OF struc10.

Example

The following assignment between two flat structures is possible in the current release, but it was not possible as long as non-Unicode systems were still supported. In the included substructure incl1, the character component has the same alignment as the integer component and there is no alignment gap. However, as long as non-Unicode Systems were supported, an alignment gap had to be assumed behind the included structure in order to make the program executable in Unicode systems as well as in non-Unicode Systems.

TYPES:
  BEGIN OF incl1,
    num TYPE i,
    c2  TYPE c LENGTH 2,
  END OF incl1.
DATA:
  BEGIN OF struc1,
    c1 TYPE c LENGTH 2.
    INCLUDE TYPE incl1.
DATA:
    c3 TYPE c LENGTH 2,
  END OF struc1.
DATA:
  BEGIN OF struc2,
    c1  TYPE c LENGTH 2,
    num TYPE i,
    c2  TYPE c LENGTH 2,
    c3  TYPE c LENGTH 2,
  END OF struc2.
struc1 = struc2.

Continue
![Example](exa.gif "Example") [Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_conv_str_abexa.htm)