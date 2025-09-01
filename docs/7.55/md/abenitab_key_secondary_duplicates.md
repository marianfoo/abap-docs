  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Overview](javascript:call_link\('abenitab_oview.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

itab - Duplicate Non-Unique Keys

Non-unique table keys can produce duplicate lines with respect to these keys. This section describes the order of these duplicates when inserting into tables with non-unique sorted table keys. This order is ignored with respect to non-unique primary keys in standard tables.

-   [Single Record Operations](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_1)

-   [Block Operations](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_2)

-   [Special Features](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_3)

Single Record Operations

When individual lines are inserted where the insert position is determined using a table key, that is, in the case of

-   the operations [INSERT ... INTO TABLE ...](javascript:call_link\('abapinsert_itab_position.htm'\)) or

-   in [lazy updates](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry") of sorted secondary keys

the order of the duplicates with respect to the table key of the target table is determined in accordance with the insertion order of the individual lines. The duplicate line that was last inserted into the table is sorted before all other duplicates.

Block Operations

For block operations such as an [assignment](javascript:call_link\('abapmove.htm'\)) of an internal table to another table or when inserting multiple lines using [INSERT LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)), the order of duplicates with respect to a sorted key of the target table in the block is taken from the source table. If there are already one or more duplicates in the target table, the source block duplicates are inserted in their original order in front of the first duplicate in the target table.

Special Features

Some operations have the characteristics of block operations but are executed internally as sequences of single record operations. In this case, the original order of duplicates with respect to a sorted key in the target table is not retained. This is the case for the following operations:

-   Filling an internal table using [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) from a table previously stored using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and all operations that are based internally on such an import, such as [posting](javascript:call_link\('abapcall_function_update.htm'\)) operations.

-   Passing and inheriting internal tables for [Remote Function Calls](javascript:call_link\('abapcall_function_destination_para.htm'\)).

-   The deserialization of an internal table from a table previously serialized to XML using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Example

The result of the following insertion is

a a
b z
b y
b x
b b

TYPES:
  BEGIN OF line,
    col1 TYPE string,
    col2 TYPE string,
  END OF line,
  itab TYPE SORTED TABLE OF line
            WITH NON-UNIQUE KEY col1.
DATA(itab) = VALUE itab(
( col1 = 'b' col2 = 'b' )
( col1 = 'a' col2 = 'a' ) ).
DATA(jtab) = VALUE itab(
( col1 = 'b' col2 = 'x' )
( col1 = 'b' col2 = 'y' )
( col1 = 'b' col2 = 'z' ) ).
INSERT LINES OF jtab INTO TABLE itab.
cl\_demo\_output=>display( itab ).