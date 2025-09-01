  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects, Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Alignment of Data Objects, ABENALIGNMENT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Alignment of Data Objects

Data objects with certain data types cannot be stored in random addresses in the main memory:

-   [Numeric data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")
    
    The memory address of ABAP fields with the following numeric types must be divisible as follows:
    
    -   s by 2
    -   i by 4
    -   int8, decfloat16, f by 8
    -   decfloat34 by 16
-   [Character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")
    
    The memory address of character-like data objects must be divisible by 2 for the character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the ABAP programming language.
    
-   [Time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry")
    
    The memory address of time stamp fields of the type utclong must be divisible by eight.
    
-   [Deep data objects](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry")
    
    The memory address of deep data objects such as strings or reference variables must be divisible by 4.
    

An elementary data object is aligned when it has an address that corresponds to its data type.

-   A structure is aligned if:
    -   Its start address meets the strictest alignment requirements of its components and
    -   The [offsets](javascript:call_link\('abenoffset_glosry.htm'\) "Glossary Entry") of all components meet the same type-specific divisibility requirements.

Normally, the correct alignment of data objects is not normally an issue, because they are automatically created correctly during declaration. This can cause [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") in structures with components of different data types.

However, correct alignment must be checked in the following cases:

-   In assignments and comparisons of structures where the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") that splits a structure into fragments in accordance with its alignment gaps must be considered.
-   When a data object is handled using explicit or implicit [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") with a different data type.
-   When a work area that has a different type from the database table is used in an [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement.

If a statement expects a specific alignment of a data object, an exception is raised when there is insufficient alignment.

Hints

-   Components that are included in structures using [INCLUDE TYPE*|*STRUCTURE](javascript:call_link\('abapinclude_type.htm'\)) behave like real [substructures](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") in regard to alignment.
-   The binary content of alignment gaps is not defined and must not be evaluated.
-   Trailing alignment gaps can also occur at the end of structures, since the overall length of the structure is determined by the component with the largest alignment requirement.
-   Alignment gaps are part of the length of a structure.

Example

The following alignment gaps (A) appear in the following structure:

\[ a | A | b | A | cccccccccccc | A | dddd \]

The first alignment gap is constructed as a result of the alignment of the substructure struc2, the second gap due to the alignment of the component c of type c, and the third due to the component d of type i.

DATA:
  BEGIN OF struc1,
    a TYPE x LENGTH 1,
    BEGIN OF struc2,
      b TYPE x LENGTH 1,
      c TYPE c LENGTH 6,
    END OF struc2,
    d    TYPE i,
  END OF struc1.