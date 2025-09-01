  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

Alignment of Data Objects

Data objects with the following data types cannot simply be stored at random addresses in the main memory:

-   [Numeric data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry") of types i, int8, decfloat16, decfloat34, and f

-   [Deep data objects](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry")

-   [Character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")

For example, an ABAP field with the type i must have an address divisible by four, a field with the type int8, f, or decfloat16 must have an address divisible by eight, and a field with the type decfloat34 must have an address divisible by 16. In the case of the character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the ABAP programming language, the memory address of character-like data objects must be divisible by 2.

-   An elementary data object is aligned when it has an address that corresponds to its data type.

-   A structure is aligned when the following applies:

-   Its start address satisfies the strictest alignment requirements of its components and

-   The [offsets](javascript:call_link\('abenoffset_glosry.htm'\) "Glossary Entry") of all components satisfy the same type-specific divisibility requirements.

The correct alignment of data objects is not normally an issue, because they are created correctly automatically in the declaration. This can produce [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") in structures with components of different data types.

However, the alignment must be checked in the following cases:

-   In assignments and comparisons of structures where the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") that splits a structure into fragments in accordance with its alignment gaps must be respected.

-   When a data object is handled using explicit or implicit [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") with another data type.

-   When a work area that has a different type from the database table is used in an [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement.

If a statement expects a particular alignment of a data object, an exception is raised if there is insufficient alignment.

Notes

-   Components that are included in structures using [INCLUDE TYPE*|*STRUCTURE](javascript:call_link\('abapinclude_type.htm'\)) behave like genuine [substructures](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") with respect to alignment.

-   The binary content of alignment gaps is not defined and cannot be evaluated.

-   Alignment gaps can also occur at the end of structures, since the overall length of the structure is determined by the component with the largest alignment requirement.

-   Alignment gaps are part of the length of a structure.

Example

The following alignment gaps (A) appear in the following structure:

\[ a | A | b | A | cccccccccccc | AA | dddd \]

The first alignment gap is constructed as a result of the alignment of the substructure struc2, the second gap is due to the alignment of the component c of type c, and the third is due to the component d of type i.

DATA:
  BEGIN OF struc1,
    a TYPE x LENGTH 1,
    BEGIN OF struc2,
      b TYPE x LENGTH 1,
      c TYPE c LENGTH 6,
    END OF struc2,
    d    TYPE i,
  END OF struc1.