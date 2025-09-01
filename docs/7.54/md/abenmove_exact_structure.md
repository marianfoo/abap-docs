  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_move.htm) →  [Lossless Assignments - Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_exact.htm) → 

Checking Structures

The operator [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) can only be used to convert structures to [compatible](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompatibility.htm) structures. Full compatibility is not required for the following deep components, for which the specified requirements apply:

-   For components that have a [reference type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_type_glosry.htm "Glossary Entry"), [up casts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry") but not [down casts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm "Glossary Entry") are permitted.

-   For table-like components, it is sufficient if the [row type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrow_type_glosry.htm "Glossary Entry") is compatible. This means that the full [compatibility](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompatibility.htm) needed for [table categories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_category_glosry.htm "Glossary Entry") and [table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_key_glosry.htm "Glossary Entry") is not required here.

Notes

-   When the operator EXACT is used, the [conversion rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_struc.htm) for flat structures are the same as those for deep structures. It is not possible to make conversions between structures and elementary data objects.

-   If the structured types are compatible, no further checks are made on the content. If the source structure contains invalid data, this data is assigned to a compatible return value, even when the addition EXACT is used.

Example

Unlike simple conversion, lossless assignment leads to a syntax error.

DATA:
  BEGIN OF struc,
    col1 TYPE d,
    col2 TYPE t,
  END OF struc.
DATA(result1) = CONV string( struc ).  "Possible
DATA(result2) = EXACT string( struc ). "Not possible