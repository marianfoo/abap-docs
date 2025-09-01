  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-30.htm) → 

Declaration Statements in Release 3.0

[1\. Defining types](#!ABAP_MODIFICATION_1@1@)
[2\. Type pools](#!ABAP_MODIFICATION_2@2@)
[3\. Defining constants](#!ABAP_MODIFICATION_3@3@)
[4\. Defining static variables](#!ABAP_MODIFICATION_4@4@)
[5\. Multiple nesting of structures](#!ABAP_MODIFICATION_5@5@)
[6\. Internal tables without header line](#!ABAP_MODIFICATION_6@6@)
[7\. Specifying the types of parameters and field symbols](#!ABAP_MODIFICATION_7@7@)

Modification 1

Defining Types
The [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_simple.htm) statement has been introduced, which makes it possible to define new types. It has a similar syntax to the DATA statement.

Modification 2

Type Pools
The type pools (see [TYPE-POOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pool.htm)) make it possible to form groups of global types and their associated constants.

Modification 3

Defining Constants
The [CONSTANTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconstants.htm) statement makes it possible to define constants. The syntax of the CONSTANTS statement is similar to that of the DATA statement. Both simple fields and structures can be defined as constants. Constant tables cannot be defined.

Modification 4

Defining Static Variables
Fields within subroutines and function modules that are defined with DATA are re-created and re-initialized each time the routine is called. The new statement [STATICS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapstatics.htm), which can be used within subroutines and function modules, makes it possible to define fields that keep their values beyond the calls. This statement supports nearly all of the additions used with the DATA statement.

Modification 5

Multiple Nesting of Structures
Previously, it was only possible to define simple nested structures using the DATA statement. It was not possible to nest DATA BEGIN OF, .... END OF. This restriction has now been lifted, which makes it possible to define structures as components of another structure. This is now possible in the [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_struc.htm), [STATICS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapstatics.htm), [CONSTANTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconstants.htm), and [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_struc.htm) statements.

Modification 6

Internal Tables Without Header Line
Previously, each internal table automatically had a [header line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry"), which was used as a table work area. A table with header line is therefore a mixture of two data objects (the table and the header line) under a single name. It is now possible to define tables and table types without header lines in the statements [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_itab.htm), [STATICS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapstatics.htm), and [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_itab.htm), using the following syntax:

DATA TAB TYPE STRUC OCCURS 0.

These tables can be used without header lines as components in structures. If a work area is needed for a table, it must be under another name.
If the statements DATA and STATICS are used, the addition ... WITH HEADER LINE can be used to create a table with a header line from a table without a header line. This can only be done at the top nesting level, not within a structure. The property of having a header line is an attribute of a data object and not a type attribute, which means that this addition cannot be used in the TYPES statement.

Modification 7

Specifying the Types of Parameters and Field Symbols
The parameters of subroutines and field symbols can now be typed using the additions LIKE fld and TYPE typ. The parameters of function modules can now be typed using references to predefined ABAP types and global types (types from type pools) as well as referencing ABAP Dictionary fields.