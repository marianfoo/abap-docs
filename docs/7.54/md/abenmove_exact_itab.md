---
title: "Checking Internal Tables"
description: |
  The operator EXACT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) checks a table specified as an argument row-by-row against the table-like row type: -   If the row types are elementary, each row is checked for elementary data objects(https://hel
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmove_exact_itab.htm"
abapFile: "abenmove_exact_itab.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "internal-table", "abenmove", "exact", "itab"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_move.htm) →  [Lossless Assignments - Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_exact.htm) → 

Checking Internal Tables

The operator [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) checks a table specified as an argument row-by-row against the table-like row type:

-   If the row types are elementary, each row is checked for [elementary data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmove_exact_elementary.htm).

-   If the row types are structured, each row is checked for [structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmove_exact_structure.htm).

-   If the row types are table-like, the check described here is performed. If the inner table is a table with an elementary row type, the row types must be compatible.

The [table category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_category_glosry.htm "Glossary Entry") and the [table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_key_glosry.htm "Glossary Entry") are ignored by the check.

If the check raises an exception due to an invalid value or loss of values, the target table is filled with all rows assigned up to that point.

Notes

-   If an internal table with elementary row type is converted, this row type does not have to be compatible with the target row type. It only needs to be convertible according to the conditions of EXACT. If an internal table with elementary row type is converted that occurs as an inner table of another table, it is handled like a structure components and the row types must be compatible.

-   If internal tables are converted using the operator EXACT, only internal tables with elementary row type can raise an exception.

Example

The first seven rows of the internal table itab are assigned to the internal table jtab. When the eighth row is assigned, the exception CX\_SY\_CONVERSION\_NO\_DATE occurs.

DATA itab TYPE STANDARD TABLE OF d
          WITH EMPTY KEY.
itab = VALUE #( ( CONV d( '20160101' ) )
                ( CONV d( '20160201' ) )
                ( CONV d( '20160301' ) )
                ( CONV d( '20160401' ) )
                ( CONV d( '20160501' ) )
                ( CONV d( '20160601' ) )
                ( CONV d( '20160701' ) )
                ( CONV d( '20160ß01' ) )
                ( CONV d( '20160901' ) )
                ( CONV d( '20161001' ) )
                ( CONV d( '20161101' ) )
                ( CONV d( '20161201' ) ) ).
DATA jtab TYPE SORTED TABLE OF string
          WITH UNIQUE KEY table\_line.
TRY.
    jtab = EXACT #( itab ).
  CATCH cx\_sy\_conversion\_no\_date.
ENDTRY.
cl\_demo\_output=>display( jtab ).