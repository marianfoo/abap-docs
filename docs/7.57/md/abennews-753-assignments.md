  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.53](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-753.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments in Release 7.53, ABENNEWS-753-ASSIGNMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments in Release 7.53

Modification

Convertibility of Structures

The [conversion rules for flat structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_flat_flat.htm) are based on their [fragment views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry"), where each [alignment gap](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalignment_gap_glosry.htm "Glossary Entry") is considered as a fragment. Alignment gaps arise from the [alignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalignment_glosry.htm "Glossary Entry") requirements of the component's data types. For character-like components, the alignment requirement depends on the character representation:

-   For character representation [UCS-2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language, the memory address of character-like data objects must be divisible by 2.
-   For other character representations there are other alignment requirements. For example, the non-Unicode character representation [ASCII](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenascii_glosry.htm "Glossary Entry") has no alignment requirement while the Unicode character representation [UTF-32](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf32_glosry.htm "Glossary Entry") requires a divisibility by 4.

Before [only Unicode systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-750-unicode.htm) were supported, the conversion rules for structures had to take all possible alignment requirements for characters into account, regardless of the actual length of a character in its character representation.

Meanwhile, only [Unicode systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry") are supported. The system codepage is [UTF-16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf16_glosry.htm "Glossary Entry") and its subset [UCS-2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenucs2_glosry.htm "Glossary Entry") is supported in ABAP language. Any character is represented by 2 bytes and the alignment requirement is always a divisibility by 2.

Because of this, the conversion rules for flat structures can be less strict than before and the new determination of possible alignment gaps was introduced in Release 7.53. For example, the following assignment between two flat structures was not possible before Release 7.53 but is possible now.

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

In the included substructure incl1, the character component has the same alignment as the integer component and there is no alignment gap. But as long as non-Unicode Systems were supported, an alignment gap had to be assumed behind the included structure in order to make the program executable in Unicode systems as well as in non-Unicode Systems.

Hint

When downporting programs from higher to lower releases, syntax errors might occur in the lower releases because of the stricter rules there.