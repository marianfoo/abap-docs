  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_rules.htm) → 

Conversion Rules for Internal Tables

Internal tables can only be assigned to internal tables. Whether or not assignment is possible depends exclusively on the line type, and it is independent of table type, table key, and number of lines. Internal tables can be assigned to each other if their line types are [compatible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompatible_glosry.htm "Glossary Entry") or [convertible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconvertible_glosry.htm "Glossary Entry").

When assigning an internal table to another, the lines of the target table are deleted. A new line is created in the target table for each line in the source table and then filled with the line content of the source table. The lines are stored according to the table category. For assignments to a [sorted table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry"), the content is automatically sorted, and [hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry") are stored according to the hash algorithm.

The content of the individual lines in the source table is assigned to the lines of the target table according to the same rules as between individual data objects of the corresponding line types. The same basic rule as for all conversions applies: The converted content of the single lines in the source table must be within the [value range](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the line type in the target table.

Hints

-   In internal tables with compatible or convertible line types, an uncatchable exception can be raised during assignment if, for example, in the target table a [duplicate](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_key_duplicates.htm) of a unique [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or [secondary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") would be created.
-   Internal tables with elementary line types can raise the same catchable exceptions as assignments between the associated elementary data types. After an exception of this type, the target table contains all lines assigned until this point.
-   In assignments of an initial internal table to a filled internal table, the target table is initialized in the same way as with the statement [CLEAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear.htm). This releases the memory space required for the table, except for the initial memory requirement (see [INITIAL SIZE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_itab.htm)).

Programming Guideline

[Avoid unexpected conversion results](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

Example

A standard table text\_tab with line type c of length 20 is converted to a sorted table of type string.

TYPES:
  text       TYPE c LENGTH 20.
DATA:
  text\_tab   TYPE STANDARD TABLE OF text WITH EMPTY KEY,
  string\_tab TYPE SORTED TABLE OF string WITH NON-UNIQUE KEY table\_line.
text\_tab = VALUE #(
  ( 'Perl' ) ( 'C' ) ( 'Visual Basic' ) ( 'Java' )
  ( 'ABAP' ) ( 'Pascal' ) ( 'Python' )  ( 'Lisp' ) ).
string\_tab = text\_tab.
cl\_demo\_output=>new( )->write( text\_tab )->display( string\_tab ).