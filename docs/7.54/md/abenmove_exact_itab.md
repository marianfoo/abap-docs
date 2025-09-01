  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments - Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

Checking Internal Tables

The operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) checks a table specified as an argument row-by-row against the table-like row type:

-   If the row types are elementary, each row is checked for [elementary data objects](javascript:call_link\('abenmove_exact_elementary.htm'\)).

-   If the row types are structured, each row is checked for [structures](javascript:call_link\('abenmove_exact_structure.htm'\)).

-   If the row types are table-like, the check described here is performed. If the inner table is a table with an elementary row type, the row types must be compatible.

The [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and the [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") are ignored by the check.

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