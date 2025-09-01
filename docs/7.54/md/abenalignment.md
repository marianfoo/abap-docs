  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_objects.htm) → 

Alignment of Data Objects

Data objects with certain data types cannot be saved to random addresses in the main memory:

-   [Numeric data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

The memory address of ABAP fields with the following numeric types must be divisible as follows:

-   s by 2

-   i by 4

-   int8, decfloat16, f by 8

-   decfloat34 by 16

-   [Character-like data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")

In the case of the character representation [UCS-2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language, the memory address of character-like data objects must be divisible by 2.

-   [Time stamp fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_field_glosry.htm "Glossary Entry")

The memory address of time stamp fields of the type utclong must be divisible by eight.

-   [Deep data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry")

The memory address of deep data objects like strings or reference variables must be divisible by 4.

An elementary data object is aligned when it has an address that corresponds to its data type.

-   A structure is aligned when the following applies:

-   Its start address satisfies the strictest alignment requirements of its components and

-   The [offsets](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_glosry.htm "Glossary Entry") of all components satisfy the same type-specific divisibility requirements.

The correct alignment of data objects is not normally an issue, because they are created correctly automatically in the declaration. This can produce [alignment gaps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment_gap_glosry.htm "Glossary Entry") in structures with components of different data types.

However, the alignment must be checked in the following cases:

-   In assignments and comparisons of structures where the [structure fragment view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") that splits a structure into fragments in accordance with its alignment gaps must be respected.

-   When a data object is handled using explicit or implicit [casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencast_casting_glosry.htm "Glossary Entry") with another data type.

-   When a work area that has a different type from the database table is used in an [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement.

If a statement expects a particular alignment of a data object, an exception is raised if there is insufficient alignment.

Notes

-   Components that are included in structures using [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinclude_type.htm) behave like genuine [substructures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubstructure_glosry.htm "Glossary Entry") with respect to alignment.

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