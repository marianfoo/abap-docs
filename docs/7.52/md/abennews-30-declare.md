  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

Declarative Statements in Release 3.0

[1\. Defining types](#!ABAP_MODIFICATION_1@1@)
[2\. Type groups](#!ABAP_MODIFICATION_2@2@)
[3\. Defining constants](#!ABAP_MODIFICATION_3@3@)
[4\. Defining static variables](#!ABAP_MODIFICATION_4@4@)
[5\. Multiple nesting of structures](#!ABAP_MODIFICATION_5@5@)
[6\. Internal tables without header line](#!ABAP_MODIFICATION_6@6@)
[7\. Specifying the types of parameters and field symbols](#!ABAP_MODIFICATION_7@7@)

Modification 1

Defining Types
The [TYPES](javascript:call_link\('abaptypes_simple.htm'\)) statement has been introduced, allowing you to define your own types. It has a similar syntax to the DATA statement.

Modification 2

Type Groups
Type groups (see [TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\))) allow you to build groups of global types and their associated constants.

Modification 3

Defining Constants
The [CONSTANTS](javascript:call_link\('abapconstants.htm'\)) statement allows you to define constants. The syntax of the CONSTANTS statement is similar to that of theDATA statement. You can define both simple fields and structures as constants. You cannot define constant tables.

Modification 4

Defining Static Variables
Fields within FORMs and FUNCTIONs that are defined with DATA are re-created and re-initialized each time the routine is called. The new [STATICS](javascript:call_link\('abapstatics.htm'\)) statement, which you can use within FORMs and FUNCTIONs, allows you to define fields that retain their values beyond the routine call. This statement supports nearly all of the additions used with the DATA statement.

Modification 5

Multiple Nesting of Structures
Previously, it was only possible to define simple nested structures using the DATA statement. You could not nest DATA BEGIN OF, .... END OF. This restriction has now been lifted, allowing you to define structures as components of another structure. This is now posssible in the [DATA](javascript:call_link\('abapdata_struc.htm'\)), [STATICS](javascript:call_link\('abapstatics.htm'\)), [CONSTANTS](javascript:call_link\('abapconstants.htm'\)), and [TYPES](javascript:call_link\('abaptypes_struc.htm'\)) statements.

Modification 6

Internal Tables without Header Line
Previously, each interanl table automatically had a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), which served as a table work area. A table with header line is therefore a mixture of two data objects (the table and the header line) under a single name. You can now define tables and table types without header lines in the [DATA](javascript:call_link\('abapdata_itab.htm'\)), [STATICS](javascript:call_link\('abapstatics.htm'\)), and [TYPES](javascript:call_link\('abaptypes_itab.htm'\)) statements, using the following syntax:

DATA TAB TYPE STRUC OCCURS 0.

You can use these tables without header lines as components in structures. If you need a work area for a table, you must define it under another name.
With the DATA and STATICS statements, you can use the ... WITH HEADER LINE addition to create a table with header line. You may only do this at the top nesting level, that is, not within a structure. Since the property of having a header line or not is not a type property, but a property of a data object, you cannot use this addition in the TYPES statement.

Modification 7

Specifying the Types of Parameters and Field Symbols
You can now specify the types of the parameters of [FORMs](javascript:call_link\('abapform.htm'\)) and [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\)) using the LIKE fld and TYPE typ additions. For the parameters of function modules, you can now use references to predefined ABAP types and global types as well as referring to ABAP Dictionary fields.