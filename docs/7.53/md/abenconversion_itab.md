  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) → 

Conversion Rules for Internal Tables

Internal tables can only be assigned to internal tables. Whether or not assignment is possible depends exclusively on row type, and is independent of table type, table key, and number of rows. Internal tables can be assigned to each other if their row types are [compatible](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatible_glosry.htm "Glossary Entry") or [convertible](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconvertible_glosry.htm "Glossary Entry").

When assigning an internal table to another, the rows of the target table are deleted. A new row is created in the target table for each row in the source table. They are then filled with the row contents in the source table. The rows are stored according to the table category. For assignments to a [sorted table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry"), the content is automatically sorted and [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry") are stored according to the hash algorithm.

The content of the individual rows in the source table is assigned to the rows in the target table according to the same rules as for assignments between individual data objects of corresponding row types. The same basic rule as for all conversions applies: The converted content of the single rows in the source table must lie within the [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the row type in the target table.

Notes

-   In internal tables with compatible or convertible row types, a non-handleable exception can be raised during assignment if, for example, in the target table a [duplicate](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_key_duplicates.htm) of a unique [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or [secondary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is created.

-   Internal tables with elementary row types can raise the same handleable exceptions as when making assignments between the associated elementary data types. After an exception of this type, all rows assigned until this point are passed to the target table.

-   In assignments of an initial internal table to a filled internal table, the target table is initialized in the same way as with the statement [CLEAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclear.htm). This frees up the memory space required for the table, except for the initial memory requirement (see [INITIAL SIZE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm)).

Programming Guideline

[Avoid unexpected conversion results](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

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