  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments - Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

Checking Structures

The operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) can only be used to convert structures to [compatible](javascript:call_link\('abencompatibility.htm'\)) structures. Full compatibility is not required for the following deep components, for which the specified requirements apply:

-   For components that have a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry"), [up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") but not [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are permitted.

-   For table-like components, it is sufficient if the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") is compatible. This means that the full [compatibility](javascript:call_link\('abencompatibility.htm'\)) needed for [table categories](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and [table keys](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") is not required here.

Notes

-   When the operator EXACT is used, the [conversion rules](javascript:call_link\('abenconversion_struc.htm'\)) for flat structures are the same as those for deep structures. It is not possible to make conversions between structures and elementary data objects.

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