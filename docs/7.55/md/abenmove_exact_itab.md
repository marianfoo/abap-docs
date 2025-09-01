---
title: "Checking Internal Tables"
description: |
  The operator EXACT(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_exact.htm) checks a table specified as an argument line-by-line against the tabular target type: -   If the line types are elementary, each line is checked for elementary data objects(https:/
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_exact_itab.htm"
abapFile: "abenmove_exact_itab.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "internal-table", "abenmove", "exact", "itab"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_move.htm) →  [Lossless Assignments, Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_exact.htm) → 

Checking Internal Tables

The operator [EXACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_exact.htm) checks a table specified as an argument line-by-line against the tabular target type:

-   If the line types are elementary, each line is checked for [elementary data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_exact_elementary.htm).

-   If the line types are structured, each line is checked for [structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_exact_structure.htm).

-   If the line types are tabular, the check described here is performed. If the inner table is a table with an elementary line type, the line types must be compatible.

The [table category](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_category_glosry.htm "Glossary Entry") and the [table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_key_glosry.htm "Glossary Entry") are ignored by the check.

If the check raises an exception due to an invalid value or loss of values, the target table is filled with all lines assigned up to that point.

Hints

-   If an internal table with elementary line type is converted, this line type does not have to be compatible with the target line type but only needs to be convertible according to the conditions of EXACT. If an internal table with elementary line type is converted that occurs as an inner table of another table, it is handled like a structure component and the line types must be compatible.

-   If internal tables are converted using the operator EXACT, only internal tables with elementary line type can raise an exception.

Example

The first seven lines of the internal table itab are assigned to the internal table jtab. When the eighth line is assigned, the exception CX\_SY\_CONVERSION\_NO\_DATE occurs.

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