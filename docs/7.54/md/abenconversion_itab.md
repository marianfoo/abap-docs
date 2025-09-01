  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

Conversion Rules for Internal Tables

Internal tables can only be assigned to internal tables. Whether or not assignment is possible depends exclusively on row type, and is independent of table type, table key, and number of rows. Internal tables can be assigned to each other if their row types are [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") or [convertible](javascript:call_link\('abenconvertible_glosry.htm'\) "Glossary Entry").

When assigning an internal table to another, the rows of the target table are deleted. A new row is created in the target table for each row in the source table. They are then filled with the row contents in the source table. The rows are stored according to the table category. For assignments to a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), the content is automatically sorted and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") are stored according to the hash algorithm.

The content of the individual rows in the source table is assigned to the rows in the target table according to the same rules as for assignments between individual data objects of corresponding row types. The same basic rule as for all conversions applies: The converted content of the single rows in the source table must lie within the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the row type in the target table.

Notes

-   In internal tables with compatible or convertible row types, a non-handleable exception can be raised during assignment if, for example, in the target table a [duplicate](javascript:call_link\('abenitab_key_duplicates.htm'\)) of a unique [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") or [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is created.

-   Internal tables with elementary row types can raise the same handleable exceptions as when making assignments between the associated elementary data types. After an exception of this type, all rows assigned until this point are passed to the target table.

-   In assignments of an initial internal table to a filled internal table, the target table is initialized in the same way as with the statement [CLEAR](javascript:call_link\('abapclear.htm'\)). This frees up the memory space required for the table, except for the initial memory requirement (see [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\))).

Programming Guideline

[Avoid unexpected conversion results](javascript:call_link\('abenuse_conversion_rules_guidl.htm'\) "Guideline")

Example

A standard table text\_tab with row type c of length 20 is converted to a sorted table of type string.

TYPES:
  text TYPE c LENGTH 20.
DATA:
  text\_tab   TYPE STANDARD TABLE OF text WITH EMPTY KEY,
  string\_tab TYPE SORTED TABLE OF string WITH NON-UNIQUE KEY table\_line.
text\_tab = VALUE #(
  ( 'Perl' ) ( 'C' ) ( 'Visual Basic' ) ( 'Java' )
  ( 'ABAP' ) ( 'Pascal' ) ( 'Python' )  ( 'Lisp' ) ).
string\_tab = text\_tab.
cl\_demo\_output=>new( )->write( text\_tab )->display( string\_tab ).